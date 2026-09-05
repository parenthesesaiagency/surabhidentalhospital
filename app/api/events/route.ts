import { addEvent } from "@/lib/dashboard/store";
import { trackEvents, type TrackEvent } from "@/lib/analytics/track";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { event, page, props } = (body ?? {}) as {
    event?: string;
    page?: string;
    props?: Record<string, string>;
  };

  if (typeof event !== "string" || !(trackEvents as readonly string[]).includes(event)) {
    return Response.json({ error: "Unknown event." }, { status: 400 });
  }
  if (typeof page !== "string") {
    return Response.json({ error: "Page is required." }, { status: 400 });
  }

  await addEvent({
    event: event as TrackEvent,
    page,
    props: props && typeof props === "object" ? props : {},
  });

  return Response.json({ ok: true }, { status: 201 });
}