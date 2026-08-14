"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Phone, Menu } from "lucide-react";
import { site, navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/navbar/mobile-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const overDark = !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-10">
          <div
            className={cn(
              "mt-3 flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ease-apple sm:px-5",
              scrolled
                ? "border border-line/80 bg-white/82 shadow-[0_12px_40px_-16px_rgba(7,17,18,0.22)] backdrop-blur-[20px]"
                : "border border-transparent bg-transparent",
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none"
              aria-label="Dentora — home"
            >
              <span
                className={cn(
                  "text-lg font-extrabold tracking-[-0.02em] transition-colors duration-500",
                  overDark ? "text-white" : "text-ink",
                )}
              >
                DENTORA
              </span>
              <span className="mt-1 hidden text-[8px] font-semibold uppercase tracking-[0.28em] text-teal-100 sm:block sm:text-[9px]">
                Dental Studio · Jaipur
              </span>
            </Link>

            {/* Centered nav */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-8 lg:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-track="nav_click"
                  className={cn(
                    "link-underline text-[13.5px] font-medium transition-colors duration-300",
                    overDark
                      ? "text-white/85 hover:text-white"
                      : "text-ink/75 hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${site.contact.phoneTel}`}
                data-track="phone_click"
                className={cn(
                  "hidden items-center gap-2 text-[13.5px] font-semibold transition-colors duration-300 xl:flex",
                  overDark
                    ? "text-white/90 hover:text-white"
                    : "text-ink hover:text-teal-deep",
                )}
              >
                <Phone className="h-4 w-4 text-teal" />
                {site.contact.phoneDisplay}
              </a>
              <Button
                href="/contact"
                size="sm"
                variant={overDark ? "white" : "primary"}
                trackEvent="appointment_click"
                className="hidden sm:inline-flex"
              >
                Book Appointment
              </Button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden",
                  overDark
                    ? "border-white/25 text-white hover:bg-white/10"
                    : "border-line bg-white text-ink",
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
