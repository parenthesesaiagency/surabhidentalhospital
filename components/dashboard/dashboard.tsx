"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  CalendarDays,
  Eye,
  Inbox,
  Phone,
  RefreshCw,
  Search,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Inquiry, InquiryStatus } from "@/lib/dashboard/store";
import type { DashboardStats } from "@/lib/dashboard/stats";
import {
  BarsChart,
  EventList,
  SourcesList,
  StatusBars,
} from "@/components/dashboard/bars";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

type DashboardData = {
  stats: DashboardStats;
  inquiries: Inquiry[];
  events: { event: string; page: string; createdAt: string }[];
};

const STATUS_META: Record<
  InquiryStatus,
  { label: string; pill: string; dot: string }
> = {
  new: {
    label: "New",
    pill: "bg-white/70 text-teal-deep border-line",
    dot: "bg-teal",
  },
  contacted: {
    label: "Contacted",
    pill: "bg-mint text-teal-ink border-line",
    dot: "bg-teal-ink",
  },
  completed: {
    label: "Completed",
    pill: "bg-ink/5 text-ink border-line",
    dot: "bg-ink",
  },
  cancelled: {
    label: "Cancelled",
    pill: "bg-ink/5 text-muted border-line",
    dot: "bg-muted",
  },
};

function formatSource(source: string) {
  if (!source || source === "/") return "Home";
  const clean = source.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!clean) return "Home";
  return clean.replace(/\//g, " / ").replace(/-/g, " ");
}

function timeAgo(iso: string) {
  const then = new Date(iso).getTime();
  const mins = Math.max(0, Math.round((Date.now() - then) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function Dashboard() {
  const reduce = useReducedMotion();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [statusFilter, setStatusFilter] = useState<InquiryStatus | "all">("all");
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/dashboard", { cache: "no-store" });
      if (!res.ok) throw new Error("fetch failed");
      setData((await res.json()) as DashboardData);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const setStatus = useCallback(async (id: string, status: InquiryStatus) => {
    setBusy(true);
    try {
      await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      setData((prev) =>
        prev
          ? {
              ...prev,
              inquiries: prev.inquiries.map((i) =>
                i.id === id ? { ...i, status } : i,
              ),
            }
          : prev,
      );
    } finally {
      setBusy(false);
    }
  }, []);

  const remove = useCallback(async (id: string) => {
    setBusy(true);
    try {
      await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      setData((prev) =>
        prev
          ? {
              ...prev,
              inquiries: prev.inquiries.filter((i) => i.id !== id),
            }
          : prev,
      );
    } finally {
      setBusy(false);
    }
  }, []);

  const seed = useCallback(async () => {
    setBusy(true);
    try {
      await fetch("/api/dashboard/seed", { method: "POST" });
      await refresh();
    } finally {
      setBusy(false);
    }
  }, [refresh]);

  const stats = data?.stats;
  const inquiries = data?.inquiries ?? [];

  const filtered = inquiries.filter(
    (i) =>
      (statusFilter === "all" || i.status === statusFilter) &&
      (query === "" ||
        i.name.toLowerCase().includes(query.toLowerCase()) ||
        i.phone.includes(query)),
  );

  const maxDay = Math.max(1, ...(stats?.buckets.map((b) => b.count) ?? [1]));
  const cardAnimate = reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-cream pb-24">
      {/* Header */}
      <header className="border-b border-line bg-white">
        <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Internal · Dashboard</Eyebrow>
            <h1 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.035em] text-ink">
              Website performance
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-[1.7] text-muted">
              Queries received from the website, appointment requests, and how
              site visitors interact with your clinic's pages.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-teal/40 hover:text-teal-deep"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              View site
            </Link>
            <button
              type="button"
              onClick={() => void seed()}
              disabled={busy || loading}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-muted transition-colors duration-300 hover:border-teal/40 hover:text-teal-deep disabled:opacity-50"
            >
              <Inbox className="h-4 w-4" aria-hidden="true" />
              Load demo data
            </button>
            <button
              type="button"
              onClick={() => void refresh()}
              disabled={busy || loading}
              aria-label="Refresh data"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-soft active:scale-[0.98] disabled:opacity-50"
            >
              <RefreshCw
                className={cn("h-4 w-4", loading && "animate-spin")}
                aria-hidden="true"
              />
              Refresh
            </button>
          </div>
        </Container>
      </header>

      <Container className="pt-10">
        {error && (
          <motion.div
            {...cardAnimate}
            className="rounded-2xl border border-line bg-white p-6 text-sm text-muted"
            role="alert"
          >
            Could not load dashboard data. Is the dev server running?
          </motion.div>
        )}

        {!error && stats && (
          <>
            {/* KPI cards */}
            <motion.div
              {...cardAnimate}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              <StatCard
                icon={<Users className="h-5 w-5" />}
                label="Total inquiries"
                value={String(stats.total)}
                accent="text-teal-deep"
              />
              <StatCard
                icon={<TrendingUp className="h-5 w-5" />}
                label="This week"
                value={String(stats.thisWeek)}
                accent="text-teal"
              />
              <StatCard
                icon={<Activity className="h-5 w-5" />}
                label="Today"
                value={String(stats.today)}
                accent="text-teal-ink"
              />
              <StatCard
                icon={<Eye className="h-5 w-5" />}
                label="Page views · 14d"
                value={String(stats.pageViews)}
                accent="text-teal-deep"
              />
              <StatCard
                icon={<CalendarDays className="h-5 w-5" />}
                label="New enquiries"
                value={String(stats.newCount)}
                accent="text-teal"
              />
              <StatCard
                icon={<Phone className="h-5 w-5" />}
                label="Contacted"
                value={String(stats.contacted)}
                accent="text-teal-ink"
              />
              <StatCard
                icon={<Inbox className="h-5 w-5" />}
                label="Completed"
                value={String(stats.completed)}
                accent="text-ink"
              />
              <StatCard
                icon={<Activity className="h-5 w-5" />}
                label="CTA events · 14d"
                value={String(stats.eventCount)}
                accent="text-teal-deep"
              />
            </motion.div>

            {/* Charts */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <motion.section
                {...cardAnimate}
                className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-8"
                aria-labelledby="chart-inquiries"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2
                      id="chart-inquiries"
                      className="text-lg font-bold tracking-[-0.01em] text-ink"
                    >
                      Appointment enquiries
                    </h2>
                    <p className="mt-1 text-[13px] text-muted">
                      Inquiries submitted · last 14 days
                    </p>
                  </div>
                </div>
                <BarsChart buckets={stats.buckets} max={maxDay} />
              </motion.section>

              <motion.section
                {...cardAnimate}
                className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-8"
                aria-labelledby="chart-status"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2
                      id="chart-status"
                      className="text-lg font-bold tracking-[-0.01em] text-ink"
                    >
                      Pipeline
                    </h2>
                    <p className="mt-1 text-[13px] text-muted">
                      Where each inquiry sits
                    </p>
                  </div>
                </div>
                <StatusBars stats={stats} />
              </motion.section>
            </div>

            {/* Sources + events */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <motion.section
                {...cardAnimate}
                className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-8"
                aria-labelledby="chart-sources"
              >
                <h2
                  id="chart-sources"
                  className="text-lg font-bold tracking-[-0.01em] text-ink"
                >
                  Where enquiries come from
                </h2>
                <p className="mt-1 text-[13px] text-muted">
                  Top pages by inquiry volume
                </p>
                <SourcesList sources={stats.bySource} />
              </motion.section>

              <motion.section
                {...cardAnimate}
                className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-8"
                aria-labelledby="chart-events"
              >
                <h2
                  id="chart-events"
                  className="text-lg font-bold tracking-[-0.01em] text-ink"
                >
                  CTA activity
                </h2>
                <p className="mt-1 text-[13px] text-muted">
                  Button clicks across the site
                </p>
                <EventList top={stats.topEvents} />
              </motion.section>
            </div>

            {/* Table */}
            <motion.section
              {...cardAnimate}
              className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-white"
              aria-labelledby="table-inquiries"
            >
              <div className="flex flex-col gap-4 p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2
                    id="table-inquiries"
                    className="text-lg font-bold tracking-[-0.01em] text-ink"
                  >
                    Inquiries
                  </h2>
                  <p className="mt-1 text-[13px] text-muted">
                    {inquiries.length === 0
                      ? "Nobody has submitted a booking form yet."
                      : `${inquiries.length} recorded · newest first`}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative">
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search name or phone"
                      aria-label="Search inquiries"
                      className="w-full rounded-full border border-line bg-cream px-4 py-2 pl-10 text-sm text-ink outline-none transition-colors focus:border-teal/60 sm:w-56"
                    />
                    <SearchIcon />
                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(e.target.value as InquiryStatus | "all")
                    }
                    aria-label="Filter by status"
                    className="rounded-full border border-line bg-cream px-4 py-2 text-sm text-ink outline-none transition-colors focus:border-teal/60"
                  >
                    <option value="all">All statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="px-6 pb-10 text-sm text-muted">
                  No inquiries match this filter.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead>
                      <tr className="border-t border-line text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                        <th className="px-6 py-3 sm:px-8">Name</th>
                        <th className="px-4 py-3">Phone</th>
                        <th className="px-4 py-3">Requested</th>
                        <th className="px-4 py-3">Source</th>
                        <th className="px-4 py-3">Received</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="pr-6 text-right sm:pr-8" aria-label="actions">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {filtered.map((inquiry) => {
                        const meta = STATUS_META[inquiry.status];
                        return (
                          <tr
                            key={inquiry.id}
                            className="group transition-colors hover:bg-cream/60"
                          >
                            <td className="px-6 py-4 font-semibold text-ink sm:px-8">
                              {inquiry.name}
                            </td>
                            <td className="px-4 py-4 text-muted">
                              +91 {inquiry.phone}
                            </td>
                            <td className="px-4 py-4 text-muted">
                              {formatDate(inquiry.date)}
                            </td>
                            <td className="px-4 py-4">
                              <span className="inline-flex max-w-[10rem] truncate rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold text-ink">
                                {formatSource(inquiry.source)}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-muted">
                              {timeAgo(inquiry.createdAt)}
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={cn(
                                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold",
                                  meta.pill,
                                )}
                              >
                                <span
                                  className={cn("h-1.5 w-1.5 rounded-full", meta.dot)}
                                  aria-hidden="true"
                                />
                                {meta.label}
                              </span>
                            </td>
                            <td className="pr-6 text-right sm:pr-8">
                              <div className="flex items-center justify-end gap-2">
                                <select
                                  value={inquiry.status}
                                  onChange={(e) =>
                                    void setStatus(
                                      inquiry.id,
                                      e.target.value as InquiryStatus,
                                    )
                                  }
                                  disabled={busy}
                                  aria-label={`Set status for ${inquiry.name}`}
                                  className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-ink outline-none transition-colors focus:border-teal/60 disabled:opacity-50"
                                >
                                  <option value="new">New</option>
                                  <option value="contacted">Contacted</option>
                                  <option value="completed">Completed</option>
                                  <option value="cancelled">Cancelled</option>
                                </select>
                                <button
                                  type="button"
                                  onClick={() => void remove(inquiry.id)}
                                  disabled={busy}
                                  aria-label={`Delete inquiry from ${inquiry.name}`}
                                  className="flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink disabled:opacity-50"
                                >
                                  <X className="h-4 w-4" aria-hidden="true" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.section>

            <p className="mt-6 text-center text-[12px] text-muted">
              Data lives in a local file (`.data/dashboard.json`) and is not
              synced anywhere. Use this to review new website enquiries before
              you export them to your real system.
            </p>
          </>
        )}

        {!error && !stats && (
          <motion.div
            {...cardAnimate}
            className="rounded-[1.5rem] border border-line bg-white p-12 text-center"
          >
            <Activity className="mx-auto h-8 w-8 text-teal" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-bold text-ink">Loading dashboard…</h2>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

function SearchIcon() {
  return (
    <Search
      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
      aria-hidden="true"
    />
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-line bg-white p-6">
      <div
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint text-teal-deep",
        )}
      >
        {icon}
      </div>
      <p className="mt-4 text-[30px] font-bold tracking-[-0.02em] text-ink">
        {value}
      </p>
      <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
    </div>
  );
}