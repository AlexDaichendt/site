import type { APIContext } from "astro";
import { drizzle } from "drizzle-orm/d1";
import { cvTable } from "../../../../db/schema";

export const prerender = false;

export async function POST(context: APIContext) {
  const runtime = context.locals.runtime;
  const d1 = runtime.env.DB;
  const db = drizzle(d1, { schema: { cvTable } });

  // parse form data
  const formData = await context.request.formData();
  const company_name = formData.get("company_name") as string;
  const author = formData.get("author") as string;
  const purpose = formData.get("purpose") as string;
  const tooling = formData.get("tooling") as string;
  const created = new Date();
  const uuid = crypto.randomUUID();

  try {
    await db
      .insert(cvTable)
      .values({ company_name, author, purpose, tooling, created, uuid })
      .execute();
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }));
  }

  return new Response(JSON.stringify({ success: true, uuid }));
}
