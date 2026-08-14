/**
 * Conversion tracking stub.
 *
 * Every CTA carries a `data-track` attribute (set via `TrackLink` / `trackProps`)
 * so analytics can be wired in later without touching components. A single
 * delegated listener in `components/analytics/tracker.tsx` forwards clicks here.
 *
 * Wire this into your provider of choice, e.g.:
 *   window.gtag?.("event", event, props)
 */

export const trackEvents = [
  "appointment_click",
  "phone_click",
  "whatsapp_click",
  "map_click",
  "treatment_click",
  "doctor_profile_click",
  "faq_open",
  "nav_click",
] as const;

export type TrackEvent = (typeof trackEvents)[number];

export type TrackProps = Record<string, string>;

export function track(event: TrackEvent, props?: TrackProps) {
  // Intentionally a no-op. Add your analytics provider call here.
  void event;
  void props;
}
