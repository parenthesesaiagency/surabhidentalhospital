import { Quote } from "lucide-react";
import { reviews } from "@/lib/data/reviews";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Stars } from "@/components/ui/stars";
import { Marquee } from "@/components/ui/marquee";
import { Lines } from "@/components/ui/lines";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

export function Reviews() {
  const featured = reviews.find((r) => r.featured) ?? reviews[0];
  const rest = reviews.filter((r) => r !== featured);

  return (
    <section id="reviews" className="overflow-hidden py-16 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>{content.reviews.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 max-w-3xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              <Lines lines={content.reviews.headingLines} />
            </h2>
          </Reveal>
        </div>

        {/* Featured review */}
        <Reveal delay={0.12}>
          <figure className="relative mx-auto mt-16 max-w-4xl rounded-[2rem] border border-line bg-white p-10 sm:p-14">
            <span className="absolute -top-6 left-10 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
              <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
            <div className="flex items-center justify-between">
              <Stars size={18} />
              <span className="flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold text-teal-deep">
                <GoogleIcon className="h-4 w-4" />
                {content.reviews.googleLabel}
              </span>
            </div>
            <blockquote className="mt-6 text-lg leading-[1.7] text-ink sm:text-xl">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-bold text-white">
                {featured.initials}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{featured.name}</p>
                <p className="text-xs text-muted">
                  {featured.treatment ? `${featured.treatment} · ` : ""}
                  {content.reviews.verifiedLabel}
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </Container>

      {/* Gentle horizontal marquee */}
      <div className="mt-16">
        <Marquee duration={48} ariaLabel={content.reviews.marqueeAria}>
          {[...rest, ...rest].map((review, i) => (
            <figure
              key={`${review.name}-${i}`}
              className="w-[340px] shrink-0 rounded-2xl border border-line bg-white p-6"
            >
              <Stars size={14} />
              <blockquote className="mt-3 text-sm leading-[1.7] text-ink/80">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/90 text-xs font-bold text-white">
                  {review.initials}
                </span>
                <span className="text-[13px] font-semibold text-ink">
                  {review.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
