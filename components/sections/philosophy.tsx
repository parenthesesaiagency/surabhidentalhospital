import Image from "next/image";
import { media } from "@/lib/media";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { MaskedText } from "@/components/ui/masked-text";
import { Parallax } from "@/components/ui/parallax";

export function Philosophy() {
  return (
    <section className="overflow-hidden py-16 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <Eyebrow>{content.philosophy.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.04em] text-ink">
              <MaskedText
                text={content.philosophy.heading}
                highlight={content.philosophy.headingHighlight}
              />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-lg text-base leading-[1.75] text-muted sm:text-lg">
                {content.philosophy.body}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <ul className="mt-9 flex flex-col gap-5">
                {content.philosophy.points.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                    />
                    <span className="text-[15px] leading-relaxed text-ink/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Editorial image collage */}
          <div className="order-1 lg:order-2">
            <Parallax offset={40}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                  <Reveal className="h-full">
                    <Image
                      src={media.philosophy}
                      alt={content.philosophy.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Reveal>
                </div>
                <div className="absolute -bottom-10 -right-4 hidden w-[46%] overflow-hidden rounded-[1.5rem] border-[6px] border-cream shadow-[0_24px_60px_-24px_rgba(7,17,18,0.35)] sm:block">
                  <Reveal delay={0.15} className="h-full">
                    <Image
                      src={media.philosophySecondary}
                      alt={content.philosophy.imageAltSecondary}
                      width={600}
                      height={750}
                      sizes="300px"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </Reveal>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </Container>
    </section>
  );
}
