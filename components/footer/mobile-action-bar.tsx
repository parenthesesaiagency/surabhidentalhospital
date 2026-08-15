"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/data/site";
import { ease, cn } from "@/lib/utils";
import { useBooking } from "@/components/booking/booking-provider";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const isFormInBarZone = () => {
      const barTop = window.innerHeight - 96;
      return Array.from(document.querySelectorAll("form")).some((form) => {
        const rect = form.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > barTop;
      });
    };
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.55;
      const next = pastHero && !isFormInBarZone();
      setVisible((prev) => (next !== prev ? next : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const actions = [
    {
      label: "Call",
      href: `tel:${site.contact.phoneTel}`,
      track: "phone_click",
      icon: Phone,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${site.contact.whatsappTel.replace("+", "")}`,
      external: true,
      track: "whatsapp_click",
      icon: MessageCircle,
    },
  ];

  return (
    <motion.nav
      aria-label="Quick actions"
      initial={false}
      animate={{ y: visible && !reduce ? 0 : 96 }}
      transition={{ duration: 0.5, ease }}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 pb-[max(env(safe-area-inset-bottom),0.75rem)] md:hidden",
      )}
    >
      <div className="flex items-stretch gap-2 px-4">
        {actions.map((a) => (
          <a
            key={a.label}
            href={a.href}
            {...(a.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            data-track={a.track}
            className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white text-sm font-bold text-ink shadow-[0_16px_40px_-16px_rgba(7,17,18,0.4)] transition-transform duration-500 ease-apple active:scale-[0.97]"
          >
            <a.icon className="h-4.5 w-4.5 text-teal-deep" aria-hidden="true" />
            {a.label}
          </a>
        ))}
        <button
          type="button"
          onClick={openBooking}
          data-track="appointment_click"
          className="flex min-h-14 flex-[1.35] items-center justify-center gap-2 rounded-full bg-teal text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(11,167,165,0.55)] transition-transform duration-500 ease-apple active:scale-[0.97]"
        >
          <CalendarCheck className="h-4.5 w-4.5" aria-hidden="true" />
          Book
        </button>
      </div>
    </motion.nav>
  );
}
