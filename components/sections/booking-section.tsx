import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { BookingForm } from "@/components/hero/booking-form";

const options = [
  {
    icon: Phone,
    label: "Call us",
    value: site.contact.phoneDisplay,
    note: "Mon–Sat, 10 AM – 8:30 PM",
    href: `tel:${site.contact.phoneTel}`,
    track: "phone_click",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    note: "Fastest way to book",
    href: `https://wa.me/${site.contact.whatsappTel.replace("+", "")}`,
    external: true,
    track: "whatsapp_click",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    note: "We reply within one working day",
    href: `mailto:${site.contact.email}`,
    track: "appointment_click",
  },
  {
    icon: MapPin,
    label: "Visit the clinic",
    value: `${site.location.address}, ${site.location.neighbourhood}`,
    note: "Parking available nearby",
    href: site.mapLink,
    external: true,
    track: "map_click",
  },
];

export function BookingSection() {
  return (
    <section
      id="book"
      className="overflow-hidden bg-cream py-24 sm:py-32"
      aria-label="Book an appointment"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Heading + contact options */}
          <div>
            <Reveal>
              <Eyebrow>Book an Appointment</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 max-w-xl text-balance text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
                Your appointment is just a few details away.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-base leading-[1.75] text-muted sm:text-lg">
                Fill in the form and our team will call you to confirm. Prefer to
                reach out another way? We&apos;re always happy to help.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {options.map((option, i) => (
                <Reveal key={option.label} delay={0.16 + i * 0.05}>
                  <a
                    href={option.href}
                    {...(option.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    data-track={option.track}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(7,17,18,0.28)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-teal-deep transition-colors duration-500 group-hover:bg-teal group-hover:text-white">
                      <option.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                      {option.label}
                    </span>
                    <span className="mt-1.5 text-[15px] font-bold tracking-[-0.01em] text-ink">
                      {option.value}
                    </span>
                    <span className="mt-1 text-[13px] text-muted">
                      {option.note}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.28}>
              <div className="mt-4 flex items-start gap-4 rounded-[1.5rem] bg-mint p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">Opening Hours</h3>
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

          {/* Booking form */}
          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] bg-ink p-6 shadow-[0_40px_90px_-40px_rgba(7,17,18,0.5)] sm:p-8 lg:sticky lg:top-28">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
