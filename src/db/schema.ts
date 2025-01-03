import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const cvTable = sqliteTable("cv", {
  uuid: text("uuid").primaryKey(),
  company_name: text("company_name").notNull(),
  created: integer("created", {
    mode: "timestamp_ms",
  }),
  author: text("author").notNull(),
  purpose: text("purpose").notNull(),
  tooling: text("tooling").notNull(),
  status: text("status", {
    enum: ["active", "revoked"],
  }).default("active"),
  sha256: text("sha256"),
  pgp_signature: text("pgp_signature"),
});
