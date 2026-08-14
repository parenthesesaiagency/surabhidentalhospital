"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

/**
 * Before / After slider.
 * GATED: this section only renders once real clinic photography is supplied.
 * Never fabricate outcomes — results are always presented as individual.
 */
type Slide = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  treatment: string;
};

// PLACEHOLDER — add real, consented clinic cases here:
const slides: Slide[] = [];

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (slides.length === 0) return null;

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  const slide = slides[0];

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <Reveal>
            <Eyebrow>Real Results</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-6 max-w-2xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              See the difference,
              <br />
              honestly presented.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-14 max-w-4xl">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] select-none overflow-hidden rounded-[1.75rem]"
              onPointerDown={(e) => {
                dragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                updateFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (dragging.current) updateFromClientX(e.clientX);
              }}
              onPointerUp={() => (dragging.current = false)}
              onPointerCancel={() => (dragging.current = false)}
            >
              {/* After (base) */}
              <Image
                src={slide.after}
                alt={slide.afterAlt}
                fill
                draggable={false}
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
              {/* Before (clipped) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Image
                  src={slide.before}
                  alt={slide.beforeAlt}
                  fill
                  draggable={false}
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>

              {/* Divider */}
              <div
                className="absolute inset-y-0 z-10 w-px bg-white/90"
                style={{ left: `${pos}%` }}
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                  <ChevronsLeftRight className="h-5 w-5" />
                </span>
              </div>

              {/* Labels */}
              <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                Before
              </span>
              <span className="absolute right-5 top-5 rounded-full bg-teal px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                After
              </span>

              {/* Keyboard accessible range */}
              <input
                type="range"
                min={0}
                max={100}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label={`Compare before and after for ${slide.treatment}`}
                className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>
            <p className="mt-4 text-center text-xs text-muted">
              {slide.treatment} — Individual results vary.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
