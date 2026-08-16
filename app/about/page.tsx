import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, HeartHandshake, ShieldCheck, Smile } from "lucide-react";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { media } from "@/lib/media";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Lines } from "@/components/ui/lines";
import { Doctors } from "@/components/sections/doctors";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: content.about.heroBody,
  path: "/about",
  keywords: [
    `about ${site.name}`,
    `modern dental clinic ${site.location.city}`,
    `dental team ${site.location.city}`,
  ],
});

const valueIcons = {
  patient: HeartHandshake,
  honest: Sparkles,
  pricing: ShieldCheck,
  comfort: Smile,
} as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-cream sm:pb-24 sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">{content.about.heroEyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              <Lines lines={content.about.heroHeadingLines} />
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
              {content.about.heroBody}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story + image */}
      <section className="pt-7 pb-14 sm:pt-14 sm:pb-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <Eyebrow>{content.about.storyEyebrow}</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                  <Lines lines={content.about.storyHeadingLines} breakClassName="hidden sm:block" />
                </h2>
                <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.8] text-muted">
                  {content.about.storyParagraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={media.jaipur.clinic}
                    alt={content.about.storyImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="float-slow absolute -bottom-8 right-6 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(7,17,18,0.35)]">
                  <p className="text-sm font-bold text-ink">{site.name}</p>
                  <p className="text-xs text-muted">
                    {content.about.floatingCardSub}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Interior gallery */}
      <section className="bg-white pt-7 pb-14 sm:pt-14 sm:pb-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>{content.about.spaceEyebrow}</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                {content.about.spaceHeading}
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {media.clinicInterior.map((src, i) => (
              <Reveal key={src} delay={i * 0.06}>
                <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={src}
                    alt={content.about.spaceImageAlt}
                    width={900}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="pt-7 pb-14 sm:pt-14 sm:pb-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>{content.about.valuesEyebrow}</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                {content.about.valuesHeading}
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.about.values.map((v, i) => {
              const Icon =
                valueIcons[v.key as keyof typeof valueIcons];
              return (
                <Reveal key={v.key} delay={i * 0.06}>
                  <div className="h-full rounded-[1.5rem] border border-line bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-teal-deep">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold tracking-[-0.01em] text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] text-muted">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Doctors />

      <FinalCta />
    </>
  );
}
