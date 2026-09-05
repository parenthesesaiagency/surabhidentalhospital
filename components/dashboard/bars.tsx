"use client";

import { cn } from "@/lib/utils";
import type { DayBucket, SourceCount } from "@/lib/dashboard/stats";
import type { InquiryStatus } from "@/lib/dashboard/store";

const STATUS_COLORS: Record<InquiryStatus, string> = {
  new: "bg-teal",
  contacted: "bg-teal-deep",
  completed: "bg-ink",
  cancelled: "bg-line",
};

/** Vertical bar chart of enquiries per day, last 14 days. */
export function BarsChart({
  buckets,
  max,
}: {
  buckets: DayBucket[];
  max: number;
}) {
  return (
    <div
      className="mt-8 grid grid-cols-[repeat(14,minmax(0,1fr))] items-end gap-1.5 sm:gap-2"
      role="img"
      aria-label="Appointment enquiries per day, last 14 days"
    >
      {buckets.map((bucket) => {
        const height = bucket.count === 0 ? 4 : (bucket.count / max) * 100;
        return (
          <div
            key={bucket.date}
            className="flex flex-col items-center gap-2"
            title={`${bucket.label}: ${bucket.count} enquiry${bucket.count === 1 ? "" : "s"}`}
          >
            <span className="text-[10px] font-bold text-teal-deep">
              {bucket.count > 0 ? bucket.count : ""}
            </span>
            <div className="flex h-36 w-full items-end">
              <div
                className={cn(
                  "w-full rounded-t-md bg-gradient-to-t from-teal-deep to-teal transition-all duration-700",
                  bucket.count === 0 && "from-line to-line/60",
                )}
                style={{ height: `${height}%` }}
              />
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wide text-muted">
              {bucket.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** Horizontal stacked pipeline bar + per-status figures. */
export function StatusBars({
  stats,
}: {
  stats: { byStatus: Record<InquiryStatus, number>; total: number };
}) {
  const labels: { key: InquiryStatus; label: string }[] = [
    { key: "new", label: "New" },
    { key: "contacted", label: "Contacted" },
    { key: "completed", label: "Completed" },
    { key: "cancelled", label: "Cancelled" },
  ];
  const total = Math.max(1, stats.total);

  return (
    <div className="mt-8">
      <div
        className="flex h-3 w-full overflow-hidden rounded-full"
        role="img"
        aria-label="Inquiries by status"
      >
        {labels.map(({ key }) => (
          <div
            key={key}
            className={cn("h-full transition-all duration-700", STATUS_COLORS[key])}
            style={{ width: `${(stats.byStatus[key] / total) * 100}%` }}
            title={`${labels.find((l) => l.key === key)?.label}: ${stats.byStatus[key]}`}
          />
        ))}
      </div>
      <ul className="mt-6 space-y-3">
        {labels.map(({ key, label }) => (
          <li
            key={key}
            className="flex items-center justify-between text-sm"
          >
            <span className="flex items-center gap-2.5 text-ink">
              <span
                className={cn("h-2.5 w-2.5 rounded-full", STATUS_COLORS[key])}
                aria-hidden="true"
              />
              {label}
            </span>
            <span className="font-bold text-ink">{stats.byStatus[key]}</span>
          </li>
        ))}
        <li className="flex items-center justify-between border-t border-line pt-3 text-sm">
          <span className="text-muted">Total</span>
          <span className="font-bold text-ink">{stats.total}</span>
        </li>
      </ul>
    </div>
  );
}

/** Top pages by inquiry count, horizontal bars. */
export function SourcesList({ sources }: { sources: SourceCount[] }) {
  if (sources.length === 0) {
    return <p className="mt-8 text-sm text-muted">No enquiries yet.</p>;
  }
  const max = Math.max(1, ...sources.map((s) => s.count));
  return (
    <ul className="mt-8 space-y-4">
      {sources.slice(0, 6).map((source) => (
        <li key={source.source} className="space-y-1.5">
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="truncate text-ink">{source.source}</span>
            <span className="shrink-0 font-bold text-ink">{source.count}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-teal transition-all duration-700"
              style={{ width: `${(source.count / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Most frequent CTA events. */
export function EventList({
  top,
}: {
  top: { event: string; count: number }[];
}) {
  if (top.length === 0) {
    return <p className="mt-8 text-sm text-muted">No click activity yet.</p>;
  }
  return (
    <ul className="mt-8 space-y-3">
      {top.map(({ event, count }) => (
        <li
          key={event}
          className="flex items-center justify-between rounded-2xl border border-line bg-cream px-4 py-3 text-sm"
        >
          <span className="font-semibold text-ink">
            {event.replace(/_/g, " ")}
          </span>
          <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-teal-deep">
            {count}
          </span>
        </li>
      ))}
    </ul>
  );
}