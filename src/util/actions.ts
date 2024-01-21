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

type Status = { status: "ok" } | { status: "error"; message: string };

const createMoodEntry = async (
  currState: Status,
  formData: FormData,
): Promise<Status> => {
  const parsed = MoodEntrySchema.safeParse({
    day: formData.get("day"),
    mood: formData.get("mood"),
    notes: formData.get("notes"),
  });

  console.log("current state:", currState);

  if (!parsed.success) {
    return {
      status: "error",
      message: `Form data was invalid! Message: ${parsed.error.message}`,
    };
  }

  const { mood, day, notes } = parsed.data;

  try {
    await db.insert(moods).values({
      mood,
      day,
      notes,
    });
  } catch (error) {
    return {
      status: "error",
      message: `Unable to create mood entry: ${error}`,
    };
  }

  redirect("/");
};

export { createMoodEntry, type Status };
