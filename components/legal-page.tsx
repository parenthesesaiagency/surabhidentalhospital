import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

type LegalSection = { heading: string; paragraphs: string[] };

export function legalMetadata(title: string, description: string, path: string): Metadata {
  return buildMetadata({
    title,
    description,
    path,
  });
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-cream sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Legal</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.04em] text-white">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-sm font-medium text-white/55">
              Last updated: {updated}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-base leading-[1.85] text-ink/80">{intro}</p>
          </Reveal>
          {sections.map((section) => (
            <Reveal key={section.heading} delay={0.05}>
              <div className="mt-10">
                <h2 className="text-lg font-bold tracking-[-0.015em] text-ink">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[15px] leading-[1.85] text-ink/70">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.08}>
            <p className="mt-14 rounded-2xl bg-mint p-6 text-sm leading-[1.7] text-ink/70">
              For any questions about this policy, contact us at{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-semibold text-teal-deep underline underline-offset-4"
              >
                {site.contact.email}
              </a>{" "}
              or call {site.contact.phoneDisplay}.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
