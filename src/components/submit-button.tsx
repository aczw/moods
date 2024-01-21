"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      disabled={status.pending}
      type="submit"
      className="border border-black"
    >
      {status.pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export { SubmitButton };
