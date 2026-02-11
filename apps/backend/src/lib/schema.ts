import { pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const changeMeIfNeeded = pgTable("change_me_if_needed", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type ChangeMeIfNeeded = typeof changeMeIfNeeded.$inferSelect;
export type NewChangeMeIfNeeded = typeof changeMeIfNeeded.$inferInsert;
