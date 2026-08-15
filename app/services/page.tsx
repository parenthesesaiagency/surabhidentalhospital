import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceKeywords, homeKeywords } from "@/lib/seo/keywords";
import { content } from "@/lib/data/content";
import { treatments } from "@/lib/data/treatments";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Lines } from "@/components/ui/lines";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: content.services.title,
  description: content.services.description,
  path: "/services",
  keywords: [...serviceKeywords, ...homeKeywords],
});

export default function ServicesPage() {
  return (
    <>
      {/* Dark top band (navbar sits transparent over it) */}
      <section className="bg-ink pb-16 pt-32 text-cream sm:pb-24 sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">{content.services.heroEyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              <Lines lines={content.services.heroHeadingLines} />
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
              {content.services.heroBody}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Treatment grid */}
      <section className="pb-16 pt-12 sm:pb-32 sm:pt-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${t.slug}`}
                  data-track="treatment_click"
                  data-track-props={JSON.stringify({ treatment: t.slug })}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(7,17,18,0.28)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold tracking-[-0.01em] text-ink">
                      {t.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-[1.65] text-muted">
                      {t.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-teal-deep">
                      {content.services.learnMore}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-500 ease-apple group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Local SEO blurb */}
      <section className="pb-16 sm:pb-32">
        <Container>
          <Reveal>
            <div className="rounded-[1.75rem] bg-mint p-8 sm:p-12">
              <h2 className="max-w-2xl text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
                {content.services.seoHeading}
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-ink/70">
                {content.services.seoBody}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
