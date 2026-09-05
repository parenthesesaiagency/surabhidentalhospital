import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

/**
 * Local JSON-file data store for the self-service dashboard.
 *
 * Tracks website inquiries (booking-form submissions) and analytics events
 * (CTA clicks, page views) without any external service. Data persists to a
 * `dashboard.json` file which is gitignored.
 *
 * On serverless hosts (Netlify), the project directory is read-only, so the
 * file lives in `os.tmpdir()` instead. Note that on serverless the file is
 * per-instance and may reset between cold starts — fine for the mockup, but
 * swap `readStore`/`writeStore` for a real database when this goes live.
 */

export type InquiryStatus = "new" | "contacted" | "completed" | "cancelled";

export type Inquiry = {
  id: string;
  name: string;
  phone: string;
  /** Requested appointment date (YYYY-MM-DD), as chosen in the form. */
  date: string;
  /** Page path the form was submitted from, e.g. "/" or "/services/implants". */
  source: string;
  status: InquiryStatus;
  createdAt: string;
  demo?: boolean;
};

export type AnalyticsEvent = {
  id: string;
  event: string;
  page: string;
  props: Record<string, string>;
  createdAt: string;
  demo?: boolean;
};

export type Store = {
  inquiries: Inquiry[];
  events: AnalyticsEvent[];
};

const DATA_DIR = process.env.NETLIFY
  ? path.join(os.tmpdir(), "surbhidental-dashboard")
  : path.join(process.cwd(), ".data");
const FILE = path.join(DATA_DIR, "dashboard.json");

let cache: Store | null = null;

async function readStore(): Promise<Store> {
  if (cache) return cache;
  try {
    const raw = await fs.readFile(FILE, "utf8");
    cache = JSON.parse(raw) as Store;
  } catch {
    cache = { inquiries: [], events: [] };
    // Persist lazily — if the filesystem is unreadable the dashboard still
    // works for this instance from memory.
    try {
      await writeStore(cache);
    } catch {
      /* keep in-memory store */
    }
  }
  return cache;
}

async function writeStore(store: Store): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(store, null, 2), "utf8");
  cache = store;
}

function newId(): string {
  return globalThis.crypto.randomUUID();
}

export async function getStore(): Promise<Store> {
  const store = await readStore();
  // First run: the store is empty, so seed 10 default demo inquiries so the
  // dashboard is usable immediately. The guard in seed.ts ensures real data
  // (or previously-added demo inquiries) is never duplicated. Pass the store
  // to seedDemo so it doesn't re-enter getStore (avoiding infinite recursion),
  // then re-read so the freshly-seeded data is returned.
  if (store.inquiries.length === 0 && store.events.length === 0) {
    const { seedDemo } = await import("./seed");
    await seedDemo(store);
    return readStore();
  }
  return store;
}

export async function addInquiry(input: {
  name: string;
  phone: string;
  date: string;
  source: string;
  demo?: boolean;
}): Promise<Inquiry> {
  const store = await readStore();
  const inquiry: Inquiry = {
    id: newId(),
    name: input.name.trim(),
    phone: input.phone.trim(),
    date: input.date,
    source: input.source || "/",
    status: "new",
    createdAt: new Date().toISOString(),
    demo: input.demo,
  };
  store.inquiries.unshift(inquiry);
  await writeStore(store);
  return inquiry;
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus,
): Promise<Inquiry | null> {
  const store = await readStore();
  const inquiry = store.inquiries.find((i) => i.id === id);
  if (!inquiry) return null;
  inquiry.status = status;
  await writeStore(store);
  return inquiry;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const store = await readStore();
  const before = store.inquiries.length;
  store.inquiries = store.inquiries.filter((i) => i.id !== id);
  if (store.inquiries.length === before) return false;
  await writeStore(store);
  return true;
}

export async function addEvent(input: {
  event: string;
  page: string;
  props: Record<string, string>;
  demo?: boolean;
}): Promise<AnalyticsEvent> {
  const store = await readStore();
  const entry: AnalyticsEvent = {
    id: newId(),
    event: input.event,
    page: input.page || "/",
    props: input.props,
    createdAt: new Date().toISOString(),
    demo: input.demo,
  };
  store.events.unshift(entry);
  // Cap events so the file stays small — the dashboard only ever shows a
  // recent bust of activity plus daily aggregates.
  if (store.events.length > 20_000) store.events = store.events.slice(0, 20_000);
  await writeStore(store);
  return entry;
}

export async function getInquiries(): Promise<Inquiry[]> {
  return (await readStore()).inquiries;
}

export async function getEvents(): Promise<AnalyticsEvent[]> {
  return (await readStore()).events;
}