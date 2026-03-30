import { getLastCommit } from "@/lib/git";

export function LastUpdated() {
  const { hash, short } = getLastCommit();
  if (!hash) return null;

  return (
    <a
      href={`https://github.com/oobagi/portfolio/commit/${hash}`}
      target="_blank"
      rel="noopener noreferrer"
      className="last-updated text-muted"
    >
      {short}
    </a>
  );
}
