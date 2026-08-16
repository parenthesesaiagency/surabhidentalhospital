import { faqs } from "@/lib/data/faqs";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { BookButton } from "@/components/booking/book-button";
import { Lines } from "@/components/ui/lines";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white pt-8 pb-16 sm:pt-16 sm:pb-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>{content.faq.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="mt-6 text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              <Lines lines={content.faq.headingLines} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-muted">
                {content.faq.body}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <BookButton
                href="/#book"
                variant="outline"
                className="mt-8"
                trackEvent="appointment_click"
              >
                {content.faq.cta}
              </BookButton>
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
