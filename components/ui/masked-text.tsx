"use client";

import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Word-by-word masked reveal. Words slide up from behind a clipping mask
 * as the element enters the viewport. Exact substrings passed via
 * `highlight` render in the brand teal.
 */
export function MaskedText({
  text,
  highlight = [],
  className,
  stagger = 0.06,
  delay = 0,
}: {
  text: string;
  highlight?: string[];
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => {
        const isHighlight = highlight.some(
          (h) => word.toLowerCase().replace(/[^\w]/g, "") === h.toLowerCase().replace(/[^\w]/g, ""),
        );
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.12em] align-bottom"
            aria-hidden="true"
          >
            <motion.span
              className={cn(
                "inline-block will-change-transform",
                isHighlight && "text-teal",
              )}
              initial={{ y: "112%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: delay + i * stagger }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
}
