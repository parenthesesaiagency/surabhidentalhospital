import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { BookingForm } from "@/components/hero/booking-form";

const optionIcons = {
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail,
  map: MapPin,
} as const;

export function BookingSection() {
  return (
    <section
      id="book"
      className="overflow-hidden bg-cream py-16 sm:py-32"
      aria-label={content.booking.sectionAria}
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Heading + contact options */}
          <div className="order-2 lg:order-none">
            <Reveal>
              <Eyebrow>{content.booking.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 max-w-xl text-balance text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
                {content.booking.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-base leading-[1.75] text-muted sm:text-lg">
                {content.booking.body}
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {content.booking.options.map((option, i) => {
                const Icon = optionIcons[option.key as keyof typeof optionIcons];
                return (
                  <Reveal key={option.key} delay={0.16 + i * 0.05}>
                    <a
                      href={option.href}
                      {...(option.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      data-track={option.track}
                      className="group flex h-full items-center gap-4 rounded-[1.5rem] border border-line bg-white p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(7,17,18,0.28)] sm:flex-col sm:items-start sm:gap-0 sm:p-6"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-teal-deep transition-colors duration-500 group-hover:bg-teal group-hover:text-white sm:h-11 sm:w-11">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 flex-col sm:mt-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                          {option.label}
                        </span>
                        <span className="mt-1 text-[15px] font-bold tracking-[-0.01em] text-ink">
                          {option.value}
                        </span>
                        <span className="mt-0.5 text-[12px] leading-snug text-muted sm:text-[13px]">
                          {option.note}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.28}>
              <div className="mt-4 flex items-start gap-4 rounded-[1.5rem] bg-mint p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{content.booking.hoursTitle}</h3>
                  <div className="mt-2 space-y-0.5 text-sm text-ink/70">
                    {site.hours.map((h) => (
                      <p key={h.day}>
                        {h.day}: <span className="font-medium">{h.time}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Booking form (desktop only — mobile uses the dialog) */}
          <Reveal delay={0.1} className="order-1 lg:order-none hidden lg:block">
            <div className="rounded-[1.75rem] bg-ink p-6 shadow-[0_40px_90px_-40px_rgba(7,17,18,0.5)] sm:p-8 lg:sticky lg:top-28">
              <BookingForm idPrefix="booking-section" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
