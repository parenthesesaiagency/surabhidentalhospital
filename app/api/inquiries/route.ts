import { addInquiry } from "@/lib/dashboard/store";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, phone, date, source } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 1) {
    return Response.json({ error: "Name is required." }, { status: 400 });
  }
  if (typeof phone !== "string" || !/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""))) {
    return Response.json({ error: "Valid 10-digit Indian phone is required." }, { status: 400 });
  }
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: "Valid appointment date is required." }, { status: 400 });
  }

  const inquiry = await addInquiry({
    name,
    phone,
    date,
    source: typeof source === "string" ? source : "/",
  });

  return Response.json({ inquiry }, { status: 201 });
}

export async function GET() {
  const { getInquiries } = await import("@/lib/dashboard/store");
  const inquiries = await getInquiries();
  return Response.json({ inquiries });
}