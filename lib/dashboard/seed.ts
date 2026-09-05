import { addEvent, addInquiry, getStore } from "@/lib/dashboard/store";

/**
 * Generates a realistic 30-day sample of inquiries + events so the dashboard
 * isn't empty on first load. Marked `demo` so it can be filtered/skipped
 * intentionally. Only seeds when no real inquiries exist yet (real page-view
 * events are fine to keep alongside demo data).
 *
 * Deterministic pseudo-random so the demo looks consistent across reloads.
 */

const NAMES = [
  "Aarav Sharma", "Priya Patel", "Rohan Mehta", "Sneha Reddy", "Vikram Joshi",
  "Ananya Iyer", "Kabir Khan", "Meera Nair", "Arjun Singh", "Fatima Sheikh",
  "Ishaan Verma", "Divya Rao", "Karan Malhotra", "Ritu Kaur", "Aditya Chopra",
];

const PHONES = [
  "98290", "98281", "94140", "94136", "98287", "98295", "94141", "98292",
  "94134", "98284",
];

const SOURCES = [
  "/", "/", "/", "/",
  "/services/dental-implants",
  "/services/root-canal",
  "/services/teeth-whitening",
  "/services/crowns-bridges",
  "/about",
];

const EVENTS = [
  "appointment_click", "whatsapp_click", "phone_click", "map_click",
  "treatment_click", "doctor_profile_click", "nav_click",
];

/** Deterministic PRNG (mulberry32). */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function daysAgoMs(days: number): number {
  const now = new Date();
  now.setHours(12 + Math.floor(Math.random() * 7), 0, 0, 0);
  now.setDate(now.getDate() - days);
  return now.getTime();
}

export async function seedDemo() {
  const store = await getStore();
  const hasReal = store.inquiries.some((i) => !i.demo);
  if (hasReal) return { seeded: false, reason: "Real inquiries present — not seeding." };

  const rand = mulberry32(20260905);
  const pick = <T,>(arr: T[]) => arr[Math.floor(rand() * arr.length)];

  const inquiries = Array.from({ length: 140 }, (_, i) => {
    const daysAgo = 0 === i % 5 ? 0 : Math.floor(rand() * 30);
    const date = new Date(daysAgoMs(daysAgo));
    const iso = date.toISOString();
    const statusRoll = rand();
    const status =
      statusRoll < 0.28 ? "new"
      : statusRoll < 0.62 ? "contacted"
      : statusRoll < 0.9 ? "completed"
      : "cancelled";
    return {
      name: pick(NAMES),
      phone: pick(PHONES) + String(Math.floor(100000 + rand() * 899999)),
      source: pick(SOURCES),
      date: iso.slice(0, 10),
      status,
    };
  });

  const eventNames = Array.from({ length: 12 }, () => pick(EVENTS));
  const events = eventNames.map(() => {
    const daysAgo = Math.floor(rand() * 14);
    return {
      event: pick(EVENTS),
      page: pick(SOURCES),
      props: {} as Record<string, string>,
      createdAt: new Date(daysAgoMs(daysAgo)).toISOString(),
    };
  });

  for (const q of inquiries) {
    await addInquiry({ ...q, demo: true });
  }
  for (const e of events) {
    await addEvent({ ...e, demo: true });
  }

  return { seeded: true, inquiries: inquiries.length, events: events.length };
}