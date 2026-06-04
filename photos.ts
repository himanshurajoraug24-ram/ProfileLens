import { pgTable, serial, text, integer, boolean, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const photosTable = pgTable(
  "profile_photos",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull(),
    label: text("label").notNull(),
    imageUrl: text("image_url").notNull(),
    isDefault: boolean("is_default").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("profile_photos_user_id_idx").on(table.userId),
    index("profile_photos_user_id_id_idx").on(table.userId, table.id),
  ],
);

export const insertPhotoSchema = createInsertSchema(photosTable).omit({ id: true, createdAt: true });
export type InsertPhoto = z.infer<typeof insertPhotoSchema>;
export type Photo = typeof photosTable.$inferSelect;
