export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export function ServiceIcon({ kind }: { kind: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      {kind === "agent" ? (
        <>
          <rect x="8" y="8" width="16" height="16" rx="4" />
          <path d="M12 2v6m8-6v6m-8 16v6m8-6v6M2 12h6m-6 8h6m16-8h6m-6 8h6" />
          <path d="m12 16 3 3 5-6" />
        </>
      ) : kind === "data" ? (
        <>
          <ellipse cx="16" cy="8" rx="11" ry="5" />
          <path d="M5 8v16c0 3 5 5 11 5s11-2 11-5V8M5 16c0 3 5 5 11 5s11-2 11-5" />
        </>
      ) : (
        <>
          <rect x="3" y="5" width="26" height="22" rx="3" />
          <path d="M3 12h26M8 9h1m3 0h1m-3 8-3 3 3 3m12-6 3 3-3 3m-4-8-3 10" />
        </>
      )}
    </svg>
  );
}
