"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/data/treatments";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { ease, cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export function TreatmentShowcase() {
  const [active, setActive] = useState(0);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const t = treatments[active];

  return (
    <section className="bg-ink pt-8 pb-16 text-cream sm:pt-16 sm:pb-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="dark">{content.treatmentsSection.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white">
              {content.treatmentsSection.heading}
            </h2>
          </div>
          <Button
            href="/services"
            variant="ghost"
            className="w-fit self-start text-white/85 hover:text-white md:self-auto"
            trackEvent="treatment_click"
          >
            {content.treatmentsSection.viewAll}
          </Button>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Treatment list — desktop */}
          <div className="hidden flex-col lg:flex">
            {treatments.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-track="treatment_click"
                  data-track-props={JSON.stringify({ treatment: item.slug })}
                  aria-current={isActive}
                  className="group border-t border-white/12 py-6 text-left last:border-b"
                >
                  <span className="flex items-center justify-between gap-6">
                    <span className="flex items-baseline gap-5">
                      <span
                        className={cn(
                          "text-xs font-semibold tabular-nums transition-colors duration-500",
                          isActive ? "text-teal" : "text-white/30",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "transition-all duration-500 ease-apple",
                          isActive
                            ? "translate-x-0 text-[1.75rem] font-bold tracking-[-0.02em] text-white"
                            : "translate-x-0 text-[1.4rem] font-semibold tracking-[-0.01em] text-white/45 group-hover:text-white/70",
                        )}
                      >
                        {item.name}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-5 w-5 shrink-0 transition-all duration-500 ease-apple",
                        isActive
                          ? "-translate-x-0 text-teal opacity-100"
                          : "translate-x-2 text-white/25 opacity-0 group-hover:opacity-60",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="block overflow-hidden"
                      >
                        <span className="block max-w-md pl-10 pt-3 text-sm leading-[1.7] text-white/60">
                          {item.short}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Image panel */}
          <div
            ref={panelRef}
            className="relative hidden lg:block"
            onMouseMove={(e) => {
              const rect = panelRef.current?.getBoundingClientRect();
              if (!rect) return;
              setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setCursor(null)}
          >
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={t.slug}
                    initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={t.image}
                      alt={t.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                />

                {/* Count */}
                <span className="absolute left-5 top-5 flex h-10 min-w-10 items-center justify-center rounded-full bg-white/12 px-3.5 text-xs font-semibold tabular-nums backdrop-blur-md">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(treatments.length).padStart(2, "0")}
                </span>

                {/* Cursor "VIEW" badge */}
                {cursor && !reduce && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease }}
                    aria-hidden="true"
                    className="pointer-events-none absolute z-10 hidden items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-sm md:flex"
                    style={{
                      left: cursor.x,
                      top: cursor.y,
                      transform: "translate(-20%, -130%)",
                    }}
                  >
                    {content.treatmentsSection.viewBadge}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </motion.span>
                )}
              </div>

              {/* Active treatment copy + link */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease }}
                  className="mt-7 flex items-start justify-between gap-6"
                >
                  <p className="max-w-md text-[15px] leading-[1.7] text-white/70">
                    {t.short}
                  </p>
                  <Link
                    href={`/services/${t.slug}`}
                    data-track="treatment_click"
                    data-track-props={JSON.stringify({ treatment: t.slug })}
                    className="link-underline shrink-0 text-sm font-semibold text-teal"
                    aria-label={`${content.treatmentsSection.learnMore} about ${t.name} in ${site.location.city}`}
                  >
                    {content.treatmentsSection.learnMore}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="mt-12 lg:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {treatments.map((item, i) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                data-track="treatment_click"
                data-track-props={JSON.stringify({ treatment: item.slug })}
                className="group w-[82%] shrink-0 snap-center sm:w-[58%]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="82vw"
                    className="object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
                  />
                  <span className="absolute left-4 top-4 text-xs font-semibold tabular-nums text-white/80">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(treatments.length).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-xl font-bold tracking-[-0.02em] text-white">
                      {item.name}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">
                      {item.short}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
