"use client";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>message: {error.message}</p>

      {error.digest ?
        <p>digest: {error.digest}</p>
      : null}

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
