import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const users = pgTable("users", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
export const events = pgTable("events", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    title: text("title").notNull(),
    date: text("date").notNull(),
    // startDate: text("start_date").notNull(),
    // endDate: text("end_date"),
    time: text("time").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
    attendees: integer("attendees").default(0),
    image: text("image").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});
export const galleryImages = pgTable("gallery_images", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    title: text("title").notNull(),
    src: text("src").notNull(),
    category: text("category").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});
export const contactMessages = pgTable("contact_messages", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    subject: text("subject").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});
export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});
export const insertEventSchema = createInsertSchema(events).omit({
    id: true,
    createdAt: true,
});
export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
    id: true,
    createdAt: true,
});
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
    id: true,
    createdAt: true,
});
