import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import { getTreatment, relatedTreatments, treatments } from "@/lib/data/treatments";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { treatmentKeywords } from "@/lib/seo/keywords";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  treatmentSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLdScript,
} from "@/lib/schema/jsonLd";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/final-cta";

type Props = PageProps<"/services/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: `/services/${t.slug}`,
    keywords: treatmentKeywords[t.slug] ?? [],
    titleAbsent: true,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const related = relatedTreatments(slug);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/services" },
    { name: t.name, path: `/services/${t.slug}` },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            treatmentSchema(t),
            breadcrumb,
            faqSchema(t.faqs),
          ),
        }}
      />

      {/* Dark hero band */}
      <section className="bg-ink pb-16 pt-36 text-cream sm:pb-20 sm:pt-44">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  Treatments
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="text-white/85">
                {t.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <Reveal>
                <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
                  {t.name}
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
                  {t.short}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <div>
                <Eyebrow>{content.treatmentPage.overview}</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.6rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                  {t.name} at {site.name}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted">
                  {t.overview}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.5rem] border border-line bg-white p-7 sm:p-9">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                  {content.treatmentPage.whoItsFor}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {t.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-teal-deep">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[15px] leading-[1.6] text-ink/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Procedure */}
      <section className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>{content.treatmentPage.whatToExpect}</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.6rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                The {t.name.toLowerCase()} journey
              </h2>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.procedure.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="flex h-full gap-5 rounded-[1.5rem] border border-line p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-[1.7] text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Benefits + recovery */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[1.5rem] bg-mint p-8 sm:p-10">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-deep">
                  {content.treatmentPage.benefits}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-teal-deep">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[15px] leading-[1.6] text-ink/80">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-between gap-6 rounded-[1.5rem] border border-line bg-white p-8 sm:p-10">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                    {content.treatmentPage.recovery}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.75] text-ink/80">
                    {t.recovery}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="/#book"
                    trackEvent="appointment_click"
                    trackProps={{ treatment: t.slug }}
                  >
                    {content.treatmentPage.bookConsultation}
                  </Button>
                  <Button
                    href="/services"
                    variant="outline"
                    icon={false}
                  >
                    {content.treatmentPage.viewAll}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faq" className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Eyebrow>{content.treatmentPage.faq}</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.6rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                  {t.name} questions, answered
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Accordion
                items={t.faqs.map((f) => ({ q: f.q, a: f.a }))}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Local blurb */}
      <section className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-[1.8] text-muted">
              {t.local}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <Eyebrow>{content.treatmentPage.relatedEyebrow}</Eyebrow>
                  <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                    {content.treatmentPage.relatedHeading}
                  </h2>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${r.slug}`}
                    data-track="treatment_click"
                    data-track-props={JSON.stringify({ treatment: r.slug })}
                    className="group block overflow-hidden rounded-[1.5rem] border border-line bg-white transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(7,17,18,0.28)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-ink">{r.name}</h3>
                      <p className="mt-1.5 text-sm leading-[1.6] text-muted">
                        {r.short}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCta />
    </>
  );
}
