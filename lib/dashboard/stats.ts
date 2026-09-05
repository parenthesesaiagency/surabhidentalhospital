import type { Inquiry, InquiryStatus } from "@/lib/dashboard/store";

/**
 * Aggregation helpers for the dashboard. All computations stay in UTC day
 * buckets (YYYY-MM-DD from `createdAt`) so server + client agree.
 */

export type DayBucket = {
  date: string; // YYYY-MM-DD
  label: string; // "Fri 5 Sep" style
  count: number;
};

export type StatusCounts = Record<InquiryStatus, number>;

export type SourceCount = { source: string; count: number };

export type DashboardStats = {
  total: number;
  newCount: number;
  contacted: number;
  completed: number;
  cancelled: number;
  today: number;
  thisWeek: number;
  buckets: DayBucket[];
  bySource: SourceCount[];
  byStatus: StatusCounts;
  eventCount: number;
  pageViews: number;
  topEvents: { event: string; count: number }[];
};

function dayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Build 14 day buckets ending today (UTC). */
function buildBuckets(count: number): DayBucket[] {
  const buckets: DayBucket[] = [];
  const now = new Date();
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i);
    buckets.push({
      date: dayKey(d),
      label: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      count: 0,
    });
  }
  return buckets;
}

export function aggregate(
  inquiries: Inquiry[],
  events: { event: string; createdAt: string; page: string }[],
): DashboardStats {
  const buckets = buildBuckets(14);
  const byStatus: StatusCounts = {
    new: 0,
    contacted: 0,
    completed: 0,
    cancelled: 0,
  };
  const sourceMap = new Map<string, number>();
  const eventMap = new Map<string, number>();
  const todayKey = dayKey(new Date());

  let thisWeekStart = new Date();
  thisWeekStart.setUTCDate(thisWeekStart.getUTCDate() - 7);

  for (const inquiry of inquiries) {
    byStatus[inquiry.status] += 1;
    const key = dayKey(new Date(inquiry.createdAt));
    const bucket = buckets.find((b) => b.date === key);
    if (bucket) bucket.count += 1;
    sourceMap.set(inquiry.source, (sourceMap.get(inquiry.source) ?? 0) + 1);
  }

  const thisWeek = inquiries.filter(
    (i) => new Date(i.createdAt).getTime() >= thisWeekStart.getTime(),
  ).length;
  const today = inquiries.filter((i) => dayKey(new Date(i.createdAt)) === todayKey).length;

  let pageViews = 0;
  for (const event of events) {
    eventMap.set(event.event, (eventMap.get(event.event) ?? 0) + 1);
    if (event.event === "page_view") pageViews += 1;
  }

  const bySource = [...sourceMap.entries()]
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count);

  const topEvents = [...eventMap.entries()]
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return {
    total: inquiries.length,
    newCount: byStatus.new,
    contacted: byStatus.contacted,
    completed: byStatus.completed,
    cancelled: byStatus.cancelled,
    today,
    thisWeek,
    buckets,
    bySource,
    byStatus,
    eventCount: events.length,
    pageViews,
    topEvents,
  };
}