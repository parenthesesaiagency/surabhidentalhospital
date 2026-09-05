import { deleteInquiry, updateInquiryStatus, type InquiryStatus } from "@/lib/dashboard/store";

const STATUSES: InquiryStatus[] = ["new", "contacted", "completed", "cancelled"];

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const body = (await request.json()) as { status?: InquiryStatus };
  if (!body.status || !STATUSES.includes(body.status)) {
    return Response.json({ error: "Invalid status." }, { status: 400 });
  }
  const updated = await updateInquiryStatus(id, body.status);
  if (!updated) return Response.json({ error: "Not found." }, { status: 404 });
  return Response.json({ inquiry: updated });
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const deleted = await deleteInquiry(id);
  if (!deleted) return Response.json({ error: "Not found." }, { status: 404 });
  return Response.json({ ok: true });
}