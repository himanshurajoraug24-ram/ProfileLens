import { pgTable, serial, integer, text, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const visibilityType = ["public", "contacts", "selected", "custom_list", "nobody"] as const;

export const visibilityRulesTable = pgTable(
  "visibility_rules",
  {
    id: serial("id").primaryKey(),
    photoId: integer("photo_id").notNull().unique(),
    userId: integer("user_id").notNull(),
    type: text("type").notNull().$type<(typeof visibilityType)[number]>(),
    selectedContactIds: text("selected_contact_ids").default("[]"),
    excludedContactIds: text("excluded_contact_ids").default("[]"),
    listId: integer("list_id"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
  },
  (table) => [
    index("visibility_rules_photo_id_idx").on(table.photoId),
    index("visibility_rules_user_id_idx").on(table.userId),
  ],
);

export const insertVisibilityRuleSchema = createInsertSchema(visibilityRulesTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertVisibilityRule = z.infer<typeof insertVisibilityRuleSchema>;
export type VisibilityRule = typeof visibilityRulesTable.$inferSelect;
