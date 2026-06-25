import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const leadsTable = pgTable("leads", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  projectType: text("project_type"),
  budget: text("budget"),
  message: text("message").notNull(),
  sourcePage: text("source_page").default("contact"),
  status: text("status").default("new"),
});

export const insertLeadSchema = createInsertSchema(leadsTable).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leadsTable.$inferSelect;
