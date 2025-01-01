import type { APIContext } from "astro";
import { drizzle } from "drizzle-orm/d1";
import { cvTable } from "../../../../db/schema";
import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";

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

  let uuid;
  let existing;
  let maxAttempts = 10;

  do {
    uuid = nanoid(8);

    // check if uuid already exists
    existing = await db
      .select()
      .from(cvTable)
      .where(eq(cvTable.uuid, uuid))
      .execute();

    maxAttempts--;

    // Safety check to prevent infinite loops
    if (maxAttempts <= 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to generate unique UUID after multiple attempts",
        }),
      );
    }
  } while (existing.length > 0);

  try {
    await db
      .insert(cvTable)
      .values({ company_name, author, purpose, tooling, created, uuid })
      .execute();
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }));
  }

  return new Response(JSON.stringify({ success: true, uuid }));
}
