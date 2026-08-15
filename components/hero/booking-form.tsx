"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Phone,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { cn, ease } from "@/lib/utils";

const inputBase =
  "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-teal/70 focus:bg-white/15";

const labelBase =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70";

const errorBase = "mt-1.5 text-xs font-medium text-amber-300";

type Errors = { name?: string; phone?: string; date?: string };

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) {
      next.name = "Please enter your name.";
    }
    const digits = phone.replace(/\s+/g, "");
    if (!/^[6-9]\d{9}$/.test(digits)) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!date) {
      next.date = "Please pick a date.";
    } else if (date < today) {
      next.date = "Date can't be in the past.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setDate("");
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="rounded-[1.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-white">
          Request received!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Thank you, <span className="font-semibold text-white">{name}</span>.
          We&apos;ll call{" "}
          <span className="font-semibold text-white">+91 {phone}</span> to
          confirm your visit on{" "}
          <span className="font-semibold text-white">
            {new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          .
        </p>
        <button
          onClick={reset}
          className="mt-8 w-full rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
        >
          Book another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.5rem] border border-white/20 bg-white/10 p-7 backdrop-blur-xl sm:p-8"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
        Book an Appointment
      </p>
      <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-white">
        Reserve your visit
      </h3>
      <p className="mt-1.5 text-sm text-white/60">
        Fill in your details and we&apos;ll confirm by phone.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="booking-name" className={labelBase}>
            Full name
          </label>
          <div className="relative">
            <User
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
              aria-hidden="true"
            />
            <input
              id="booking-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. Aarav Sharma"
              className={cn(inputBase, "pl-11")}
            />
          </div>
          {errors.name && <p className={errorBase}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="booking-phone" className={labelBase}>
            Mobile number
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-white/60">
              +91
            </span>
            <Phone
              className="pointer-events-none absolute left-12 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
              aria-hidden="true"
            />
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="98765 43210"
              className={cn(inputBase, "pl-[4.5rem]")}
            />
          </div>
          {errors.phone && <p className={errorBase}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="booking-date" className={labelBase}>
            Preferred date
          </label>
          <div className="relative">
            <CalendarDays
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
              aria-hidden="true"
            />
            <input
              id="booking-date"
              name="date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                if (errors.date) setErrors({ ...errors, date: undefined });
              }}
              className={cn(inputBase, "pl-11 [color-scheme:dark]")}
            />
          </div>
          {errors.date && <p className={errorBase}>{errors.date}</p>}
        </div>
      </div>

      <button
        type="submit"
        data-track="appointment_submit"
        className="mt-8 w-full rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 ease-apple hover:bg-cream active:scale-[0.98]"
      >
        Confirm Booking
      </button>
      <p className="mt-4 text-center text-[11px] leading-relaxed text-white/45">
        No payment needed today — we&apos;ll call you to confirm.
      </p>
    </form>
  );
}
