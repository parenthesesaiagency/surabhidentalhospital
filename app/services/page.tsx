import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceKeywords, homeKeywords } from "@/lib/seo/keywords";
import { treatments } from "@/lib/data/treatments";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "Dental Treatments in Jaipur",
  description:
    "Explore the full range of dental treatments at Dentora, Jaipur — check-ups, cleaning, root canals, implants, whitening, veneers and more.",
  path: "/services",
  keywords: [...serviceKeywords, ...homeKeywords],
});

export default function ServicesPage() {
  return (
    <>
      {/* Dark top band (navbar sits transparent over it) */}
      <section className="bg-ink pb-20 pt-40 text-cream sm:pb-24 sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Treatments</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              Care that fits
              <br />
              your life.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
              From a routine check-up to a complete smile makeover, every
              treatment at Dentora is explained clearly, priced transparently
              and delivered with a patient-first approach.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Treatment grid */}
      <section className="pb-24 pt-20 sm:pb-32 sm:pt-24">
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
                      Learn more
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
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="rounded-[1.75rem] bg-mint p-8 sm:p-12">
              <h2 className="max-w-2xl text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
                Your trusted dental clinic in Jaipur
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-ink/70">
                Whatever brings you in — a routine check-up, a nagging toothache
                or a smile you&apos;ve been planning for years — our team in
                Jaipur will take the time to understand your needs and build a
                plan that&apos;s genuinely yours. Every treatment is explained
                before we begin, and every recommendation is made with your
                best interest in mind.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
