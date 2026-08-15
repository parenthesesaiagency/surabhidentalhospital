"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { media } from "@/lib/media";
import { heroStats } from "@/lib/data/site";
import { ease, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/hero/booking-form";

const headline = "A better smile starts with better care.";
const highlightWords = ["better", "care."];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
      aria-label="Dentora — premium dental care in Jaipur"
    >
      {/* Cinematic background */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease, delay: reduce ? 0 : 0.1 }}
        className="absolute inset-0"
      >
        <Image
          src={media.hero}
          alt="Modern dental treatment suite at Dentora, Jaipur"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease, delay: 0.35 }}
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-100 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              Premium Dental Care · Jaipur
            </motion.p>

            <h1 className="max-w-4xl text-[clamp(2.6rem,7.2vw,5.4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
              {reduce ? (
                headline
              ) : (
                <>
                  {headline.split(" ").map((word, i) => {
                    const isHighlight = highlightWords.includes(word);
                    return (
                      <span
                        key={`${word}-${i}`}
                        className="inline-block overflow-hidden align-bottom"
                        aria-hidden="true"
                      >
                        <motion.span
                          className={cn(
                            "inline-block will-change-transform",
                            isHighlight && "text-teal",
                          )}
                          initial={{ y: "112%" }}
                          animate={{ y: 0 }}
                          transition={{
                            duration: 0.85,
                            ease,
                            delay: 0.55 + i * 0.085,
                          }}
                        >
                          {word}
                        </motion.span>
                        {i < headline.split(" ").length - 1 && (
                          <span>&nbsp;</span>
                        )}
                      </span>
                    );
                  })}
                </>
              )}
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 1.25 }}
              className="mt-7 max-w-xl text-base leading-[1.75] text-white/80 sm:text-lg"
            >
              Advanced dentistry, experienced specialists, and a calmer approach to
              your oral health — all under one roof in Jaipur.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 1.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                href="/#book"
                variant="white"
                size="lg"
                trackEvent="appointment_click"
              >
                Book an Appointment
              </Button>
              <Button
                href="/services"
                variant="outline-light"
                size="lg"
                trackEvent="treatment_click"
              >
                Explore Treatments
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.ul
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 1.6 }}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7"
            >
              {heroStats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-center gap-2.5 text-sm text-white/80"
                >
                  {stat.value && (
                    <span className="text-lg font-bold tracking-tight text-white">
                      {stat.value}
                      {stat.suffix}
                    </span>
                  )}
                  <span className="text-[13px] font-medium">{stat.label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Booking form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 1.35 }}
            className="w-full lg:justify-self-end lg:max-w-[24.5rem]"
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
