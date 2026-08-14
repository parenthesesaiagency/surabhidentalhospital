import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, HeartHandshake, ShieldCheck, Smile } from "lucide-react";
import { site } from "@/lib/data/site";
import { media } from "@/lib/media";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Doctors } from "@/components/sections/doctors";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Dentora is a modern dental clinic in Jaipur built on patient-first care, honest advice and comfortable, technology-driven dentistry.",
  path: "/about",
  keywords: [
    "about Dentora",
    "modern dental clinic Jaipur",
    "dental team Jaipur",
  ],
});

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-First",
    body: "Every decision — from treatment plans to timings — is made with your comfort and best interest first.",
  },
  {
    icon: Sparkles,
    title: "Honest Advice",
    body: "We tell you what can wait as honestly as what can't. Nothing is recommended that isn't genuinely needed.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    body: "Itemised, clear plans before treatment begins. No surprise charges, ever.",
  },
  {
    icon: Smile,
    title: "Comfort-First",
    body: "A calm, modern space and a gentle team — built for people who don't like dental visits.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-cream sm:pb-24 sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">About Dentora</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              A calmer way to
              <br />
              care for your smile.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
              {site.tagline} — {site.description}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story + image */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <Eyebrow>Our story</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                  Dentistry that treats you
                  <br className="hidden sm:block" /> like a person, not a
                  procedure.
                </h2>
                <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.8] text-muted">
                  <p>
                    Dentora was founded in Jaipur on a simple belief: most
                    people don&apos;t avoid the dentist because of the
                    treatment — they avoid it because of the experience. Too
                    many clinics are rushed, intimidating and unclear about
                    what&apos;s happening and what it costs.
                  </p>
                  <p>
                    We built the clinic we&apos;d want our own families to visit
                    — a calm, modern space where the team listens first, explains
                    everything in plain language, and never recommends treatment
                    you don&apos;t need.
                  </p>
                  <p>
                    Whether you&apos;re visiting for the first time in years or
                    planning a complete smile makeover, you&apos;ll always know
                    exactly where you stand — and exactly what comes next.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={media.jaipur.clinic}
                    alt="The calm, modern interior of Dentora dental clinic in Jaipur"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="float-slow absolute -bottom-8 right-6 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(7,17,18,0.35)]">
                  <p className="text-sm font-bold text-ink">Dentora</p>
                  <p className="text-xs text-muted">
                    Dental Studio · {site.location.city}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Interior gallery */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>The space</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                Designed to feel nothing like a clinic.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {media.clinicInterior.map((src, i) => (
              <Reveal key={src} delay={i * 0.06}>
                <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={src}
                    alt="Placeholder interior photograph — replace with real Dentora clinic photography"
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
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>What we stand for</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                Four promises, kept on every visit.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-[1.5rem] border border-line bg-white p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-teal-deep">
                    <v.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold tracking-[-0.01em] text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Doctors />

      <FinalCta />
    </>
  );
}
