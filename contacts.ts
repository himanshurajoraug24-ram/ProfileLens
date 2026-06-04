import { pgTable, serial, text, integer, timestamp, index, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactsTable = pgTable(
  "contacts",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull(),
    name: text("name").notNull(),
    handle: text("handle"),
    avatarUrl: text("avatar_url"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("contacts_user_id_idx").on(table.userId),
    index("contacts_user_id_id_idx").on(table.userId, table.id),
  ],
);

export const contactListsTable = pgTable(
  "contact_lists",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("contact_lists_user_id_idx").on(table.userId),
  ],
);

export const contactListMembersTable = pgTable(
  "contact_list_members",
  {
    id: serial("id").primaryKey(),
    listId: integer("list_id").notNull(),
    contactId: integer("contact_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("contact_list_members_list_contact_uniq").on(table.listId, table.contactId),
    index("contact_list_members_contact_id_idx").on(table.contactId),
  ],
);

export const insertContactSchema = createInsertSchema(contactsTable).omit({ id: true, createdAt: true });
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactsTable.$inferSelect;

export const insertContactListSchema = createInsertSchema(contactListsTable).omit({ id: true, createdAt: true });
export type InsertContactList = z.infer<typeof insertContactListSchema>;
export type ContactList = typeof contactListsTable.$inferSelect;

export const insertContactListMemberSchema = createInsertSchema(contactListMembersTable).omit({ id: true, createdAt: true });
export type InsertContactListMember = z.infer<typeof insertContactListMemberSchema>;
export type ContactListMember = typeof contactListMembersTable.$inferSelect;
