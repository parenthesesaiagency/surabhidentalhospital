"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { media } from "@/lib/media";
import { ease } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const stages = [
  {
    n: "01",
    title: "Consultation",
    copy: "We start with a conversation. You tell us what's bothering you — or what you're hoping to improve — and we listen before we look.",
    image: media.journey[0],
    alt: "A relaxed first consultation with a dentist at Dentora, Jaipur",
  },
  {
    n: "02",
    title: "Diagnosis",
    copy: "A careful examination, supported by digital imaging, reveals the full picture. You'll understand your oral health in plain language — no jargon.",
    image: media.journey[1],
    alt: "Detailed dental diagnosis with digital imaging at Dentora",
  },
  {
    n: "03",
    title: "Treatment",
    copy: "If treatment is needed, it's delivered gently and exactly as explained. You stay informed at every step and never feel rushed.",
    image: media.journey[2],
    alt: "Comfortable dental treatment in progress at Dentora",
  },
  {
    n: "04",
    title: "Aftercare",
    copy: "Care doesn't end when you leave the chair. We follow up, guide your recovery and help you keep your results for years to come.",
    image: media.journey[3],
    alt: "Friendly follow-up and aftercare guidance at Dentora",
  },
];

export function PatientJourney() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const stage = stages[active];

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      stages.length - 1,
      Math.max(0, Math.floor(v * stages.length)),
    );
    setActive(idx);
  });

  /* Reduced motion — render a calm, static journey instead of sticky scroll. */
  if (reduce) {
    return (
      <section className="bg-ink py-24 text-cream sm:py-32">
        <Container>
          <Eyebrow tone="dark">Your Journey</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white">
            From first visit to confident smile.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {stages.map((s) => (
              <div
                key={s.n}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
              >
                <span className="text-sm font-bold text-teal">{s.n}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-white/60">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink text-cream"
      aria-label="The patient journey — from first visit to confident smile"
    >
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Copy */}
            <div>
              <Eyebrow tone="dark">Your Journey</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white">
                From first visit
                <br />
                to confident smile.
              </h2>

              <div className="mt-10 flex gap-6">
                {/* Progress rail */}
                <div className="flex flex-col items-center gap-3 pt-1">
                  <div className="relative h-40 w-px overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      style={{ scaleY: fillScale }}
                      className="absolute inset-0 origin-top bg-teal"
                    />
                  </div>
                  <div className="flex flex-col gap-5" aria-hidden="true">
                    {stages.map((s, i) => (
                      <span
                        key={s.n}
                        className="h-2.5 w-2.5 rounded-full transition-colors duration-500"
                        style={{
                          backgroundColor:
                            i === active
                              ? "var(--color-teal)"
                              : "rgba(255,255,255,0.28)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stage content */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stage.n}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.55, ease }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-bold tabular-nums tracking-[0.2em] text-teal">
                          {stage.n}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                          of {stages.length}
                        </span>
                      </div>
                      <h3 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                        {stage.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-white/65">
                        {stage.copy}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden aspect-[4/5] lg:block">
              <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={stage.n}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 1024px) 0px, 45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Spacer drives the scroll narrative */}
      <div className="h-[240vh]" aria-hidden="true" />
    </section>
  );
}
