import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Lines } from "@/components/ui/lines";
import { content } from "@/lib/data/content";

export function WhyDentora() {
  return (
    <section id="why-dentora" className="pt-8 pb-16 sm:pt-16 sm:pb-32">
      <Container>
        <Reveal>
          <Eyebrow>{content.why.eyebrow}</Eyebrow>
        </Reveal>
        <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
            <Lines lines={content.why.headingLines} />
          </h2>
          <p className="max-w-sm text-[15px] leading-[1.7] text-muted">
            {content.why.body}
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {content.why.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="border-t border-line pt-7">
                <span className="text-sm font-bold tabular-nums tracking-[0.2em] text-teal-deep">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink sm:text-[1.7rem]">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-[1.75] text-muted">
                  {pillar.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
