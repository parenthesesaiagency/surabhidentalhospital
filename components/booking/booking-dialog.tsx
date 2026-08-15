"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { ease, cn } from "@/lib/utils";
import { content } from "@/lib/data/content";
import { BookingForm } from "@/components/hero/booking-form";

export function BookingDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    prevFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prevFocus.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={content.bookingForm.dialogLabel}
        >
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-h-[92dvh] overflow-y-auto rounded-t-[1.75rem] border border-white/15 bg-ink p-6 shadow-[0_40px_90px_-40px_rgba(7,17,18,0.6)] sm:max-w-md sm:rounded-[1.75rem] sm:p-8",
            )}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close booking dialog"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <BookingForm idPrefix="booking-dialog" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
