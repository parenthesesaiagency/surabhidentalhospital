"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X, Phone, MessageCircle } from "lucide-react";
import { site, navLinks } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { ease } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/booking-provider";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="fixed inset-0 z-[70] flex flex-col bg-cream"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <Link
              href="/"
              onClick={onClose}
              className="flex flex-col leading-none"
              aria-label={content.brand.ariaLabel}
            >
              <span className="text-lg font-extrabold tracking-[-0.02em] text-ink">
                {content.brand.wordmark}
              </span>
              <span className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.28em] text-teal-deep">
                {content.brand.descriptor}
              </span>
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-teal/50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {[...navLinks, { label: content.nav.bookCta, href: "/#book" }].map(
              (link, i) => {
                const isBook = link.href === "/#book";
                return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, ease, delay: 0.08 + i * 0.07 }}
                >
                  {isBook ? (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        openBooking();
                      }}
                      data-track="nav_click"
                      className="group flex w-full items-baseline justify-between border-b border-line/70 py-5 text-left"
                    >
                      <span className="text-3xl font-bold tracking-[-0.03em] text-ink transition-colors group-hover:text-teal-deep">
                        {link.label}
                      </span>
                      <span className="text-xs font-semibold tracking-widest text-muted">
                        0{i + 1}
                      </span>
                    </button>
                  ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    data-track="nav_click"
                    className="group flex items-baseline justify-between border-b border-line/70 py-5"
                  >
                    <span className="text-3xl font-bold tracking-[-0.03em] text-ink transition-colors group-hover:text-teal-deep">
                      {link.label}
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-muted">
                      0{i + 1}
                    </span>
                  </Link>
                  )}
                </motion.div>
                );
              },
            )}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.5 }}
            className="flex flex-col gap-3 px-6 pb-10"
          >
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${site.contact.phoneTel}`}
                data-track="phone_click"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white text-sm font-semibold text-ink"
              >
                <Phone className="h-4 w-4 text-teal-deep" />
                Call
              </a>
              <a
                href={`https://wa.me/${site.contact.whatsappTel.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white text-sm font-semibold text-ink"
              >
                <MessageCircle className="h-4 w-4 text-teal-deep" />
                WhatsApp
              </a>
            </div>
            <Button
              onClick={() => {
                onClose();
                openBooking();
              }}
              className="w-full justify-center"
              trackEvent="appointment_click"
            >
              {content.nav.bookCta}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
