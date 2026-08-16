import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CalendarDays, Clock3 } from "lucide-react";
import { getPost, posts } from "@/lib/data/posts";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema/jsonLd";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/sections/final-cta";

type Props = PageProps<"/blog/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    titleAbsent: true,
  });
}

const dateLabel = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Journal", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(schema),
        }}
      />

      <section className="bg-ink pb-20 pt-36 text-cream sm:pt-44">
        <Container className="max-w-4xl">
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
                  href="/blog"
                  className="transition-colors hover:text-white"
                >
                  Journal
                </Link>
              </li>
            </ol>
          </nav>

          <Reveal>
            <div className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
              <span className="rounded-full bg-teal px-2.5 py-1 font-bold normal-case tracking-normal text-white">
                {post.category}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(1.9rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-teal" aria-hidden="true" />
                {dateLabel(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-teal" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <article className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container className="max-w-3xl">
          {post.body.map((section, i) => (
            <Reveal key={section.heading} delay={0.05}>
              <div className={i > 0 ? "mt-10" : ""}>
                <h2 className="text-xl font-bold tracking-[-0.015em] text-ink sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-base leading-[1.85] text-ink/75">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.08}>
            <div className="mt-14 rounded-[1.5rem] bg-mint p-8 sm:p-10">
              <h2 className="text-lg font-bold text-ink">
                Have a question about this topic?
              </h2>
              <p className="mt-2 text-sm leading-[1.7] text-ink/70">
                These articles are general guidance — your dental health is
                personal. Our team in {site.location.city} is happy to answer
                questions about your own situation.
              </p>
              <div className="mt-6">
                <Link
                  href="/#book"
                  data-track="appointment_click"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition-all duration-500 ease-apple hover:bg-ink-soft active:scale-[0.98]"
                >
                  Ask our team
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </article>

      <FinalCta />
    </>
  );
}
