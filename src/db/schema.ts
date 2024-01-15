import {
  date,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const moods = pgTable("moods", {
  id: serial("id").primaryKey(),
  mood: smallint("mood"),
  day: date("day", { mode: "date" }),
  notes: text("notes"),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
    mode: "date",
  }).defaultNow(),
  modifiedAt: timestamp("modifiedAt", {
    withTimezone: true,
    mode: "date",
  }).defaultNow(),
});
