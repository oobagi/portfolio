import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-20">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
      >
        Jaden Watson
      </Link>

      <nav className="flex items-center gap-6" aria-label="Main navigation">
        <Link
          href="/blog"
          className="text-sm text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
        >
          Notes
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
