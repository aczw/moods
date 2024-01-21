import { SubmitButton } from "@/components/submit-button";
import { createMoodEntry } from "@/util/actions";

const Page = () => {
  const today = new Date();
  const formatted = `${today.getFullYear()}-${(
    "0" +
    (today.getMonth() + 1)
  ).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="font-bold">How are you feeling today?</h2>

      <form
        className="space-y-5"
        action={createMoodEntry}
      >
        <div>
          <label htmlFor="day">Day</label>
          <input
            id="day"
            name="day"
            type="date"
            defaultValue={formatted}
            className="border border-black"
          />
        </div>

        <fieldset>
          <legend>Mood</legend>
          <div className="flex gap-5">
            {[1, 2, 3, 4, 5].map((mood) => (
              <div key={mood}>
                <input
                  id={mood.toString()}
                  name="mood"
                  type="radio"
                  value={mood}
                />
                <label htmlFor={mood.toString()}>{mood}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Go into more detail..."
            className="border border-black"
          />
        </div>

        <SubmitButton />
      </form>
    </main>
  );
};

export default Page;
