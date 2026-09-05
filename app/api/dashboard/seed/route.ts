import { seedDemo } from "@/lib/dashboard/seed";

export async function POST() {
  const result = await seedDemo();
  return Response.json(result, { status: result.seeded ? 201 : 200 });
}