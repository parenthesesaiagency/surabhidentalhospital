import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Book an appointment at Dentora, Jaipur. Call, WhatsApp or email our team — we'll confirm a time that suits you, usually the same day.",
  path: "/contact",
  keywords: [
    "book dentist appointment Jaipur",
    "dental clinic contact Jaipur",
    "dentist near me Jaipur",
  ],
});

const cards = [
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

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-cream sm:pb-24 sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              Let&apos;s take care
              <br />
              of your smile.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
              Book a consultation, ask a question or plan a visit. Reach us any
              way you like — we&apos;ll usually confirm your appointment the
              same day.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.06}>
                <a
                  href={card.href}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  data-track={card.track}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-7 transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(7,17,18,0.28)] sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-teal-deep">
                      <card.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted transition-transform duration-500 ease-apple group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-muted">
                    {card.label}
                  </h2>
                  <p className="mt-2 text-xl font-bold tracking-[-0.01em] text-ink">
                    {card.value}
                  </p>
                  <p className="mt-1.5 text-sm text-muted">{card.note}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-mint p-8 sm:flex-row sm:items-center sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-ink">Opening Hours</h2>
                  <div className="mt-2 space-y-0.5 text-sm text-ink/70">
                    {site.hours.map((h) => (
                      <p key={h.day}>
                        {h.day}: <span className="font-medium">{h.time}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <Button
                href="/services"
                variant="outline"
                trackEvent="treatment_click"
              >
                Explore treatments
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
