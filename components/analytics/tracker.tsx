"use client";

import { useEffect } from "react";
import { track, type TrackEvent } from "@/lib/analytics/track";

/**
 * Single delegated click listener. Any element with `data-track` fires the
 * matching analytics event — keeping CTAs server-rendered with zero per-CTA JS.
 */
export function Tracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-track]") as HTMLElement | null;
      if (!el) return;
      const event = el.dataset.track as TrackEvent;
      const raw = el.dataset.trackProps;
      let props: Record<string, string> | undefined;
      if (raw) {
        try {
          props = JSON.parse(raw) as Record<string, string>;
        } catch {
          props = undefined;
        }
      }
      track(event, props);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
