import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="overflow-hidden bg-mint py-24 sm:py-32">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Book a Visit</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
              Ready to take care
              <br />
              of your smile?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
              Book a consultation with our team and take the first step toward
              better dental health.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                size="lg"
                trackEvent="appointment_click"
              >
                Book Appointment
              </Button>
              <a
                href={`tel:${site.contact.phoneTel}`}
                data-track="phone_click"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-all duration-500 ease-apple hover:border-ink/40 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                Call the Clinic
              </a>
              <a
                href={`https://wa.me/${site.contact.whatsappTel.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-all duration-500 ease-apple hover:border-ink/40 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
