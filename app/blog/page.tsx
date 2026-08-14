import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/data/posts";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "Dental Journal",
  description:
    "Practical, medically responsible articles on dental health from the Dentora team in Jaipur — from cleaning routines to choosing the right treatment.",
  path: "/blog",
  keywords: [
    "dental blog",
    "oral health tips",
    "dentist advice Jaipur",
  ],
  type: "article",
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-cream sm:pb-20 sm:pt-48">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Journal</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
              Dental health,
              <br />
              in plain language.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:text-lg">
              Practical, honest guidance from our team — written to be useful,
              not alarming.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(7,17,18,0.28)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      <span className="rounded-full bg-mint px-2.5 py-1 text-teal-deep">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-4 text-lg font-bold leading-snug tracking-[-0.01em] text-ink">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-[1.65] text-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-teal-deep">
                      Read article
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

      <FinalCta />
    </>
  );
}
