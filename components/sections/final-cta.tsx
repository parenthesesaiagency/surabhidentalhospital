"use client";

import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Lines } from "@/components/ui/lines";
import { useBooking } from "@/components/booking/booking-provider";

export function FinalCta() {
  const { open: openBooking } = useBooking();
  return (
    <section className="overflow-hidden bg-mint py-16 sm:py-32">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <Eyebrow>{content.finalCta.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
              <Lines lines={content.finalCta.headingLines} />
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
              {content.finalCta.body}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                href="/#book"
                size="lg"
                trackEvent="appointment_click"
                onClick={(e: React.MouseEvent) => {
                  if (window.innerWidth < 1024) {
                    e.preventDefault();
                    openBooking();
                  }
                }}
              >
                {content.finalCta.bookCta}
              </Button>
              <a
                href={`tel:${site.contact.phoneTel}`}
                data-track="phone_click"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-all duration-500 ease-apple hover:border-ink/40 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                {content.finalCta.callCta}
              </a>
              <a
                href={`https://wa.me/${site.contact.whatsappTel.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-all duration-500 ease-apple hover:border-ink/40 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                {content.finalCta.whatsappCta}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
