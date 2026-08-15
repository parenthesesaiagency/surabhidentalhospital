import { faqs } from "@/lib/data/faqs";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <h2 className="mt-6 text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              Common questions,
              <br />
              honest answers.
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-muted">
                Can&apos;t find what you&apos;re looking for? Our team is one call or
                message away.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Button
                href="/#book"
                variant="outline"
                className="mt-8"
                trackEvent="appointment_click"
              >
                Ask us anything
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
