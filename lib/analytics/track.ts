/**
 * Conversion tracking.
 *
 * Every CTA carries a `data-track` attribute (set via `TrackLink` / `trackProps`)
 * so analytics can be wired in without touching components. A single
 * delegated listener in `components/analytics/tracker.tsx` forwards clicks here,
 * which POSTs the event to the local dashboard API (`/api/events`).
 *
 * `appointment_submit` fires from the booking form on a validated submission,
 * and `page_view` fires from the tracker on navigation.
 */

export const trackEvents = [
  "appointment_click",
  "appointment_submit",
  "page_view",
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
  const endpoint = "/api/events";
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, page: window.location.pathname, props }),
    keepalive: true,
  }).catch(() => {
    // Tracking is best-effort; never let it disturb the user.
  });
}