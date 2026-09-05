import { getStore } from "@/lib/dashboard/store";
import { aggregate } from "@/lib/dashboard/stats";

export async function GET() {
  const store = await getStore();
  const stats = aggregate(store.inquiries, store.events);

  return Response.json({
    stats,
    inquiries: store.inquiries.slice(0, 200),
    events: store.events.slice(0, 100),
  });
}