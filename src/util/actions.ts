"use server";

import { db } from "@/db/db";
import { moods } from "@/db/schema";
import { redirect } from "next/navigation";
import { z } from "zod";

const MoodEntrySchema = z.object({
  mood: z.coerce.number().int().min(1).max(5),
  day: z.coerce.date(),
  notes: z.string(),
});

const createMoodEntry = async (formData: FormData) => {
  const parseResult = MoodEntrySchema.safeParse({
    day: formData.get("day"),
    mood: formData.get("mood"),
    notes: formData.get("notes"),
  });

  if (!parseResult.success) {
    return { message: "l;skfl;skg" };
  }

  const { mood, day, notes } = parseResult.data;

  try {
    await db.insert(moods).values({
      mood,
      day,
      notes,
    });
  } catch (error) {
    return { message: "Unable to create mood entry" };
  }

  // [TODO) revalidatePath
  redirect("/");
};

export { createMoodEntry };
