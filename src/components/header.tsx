import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="header-name">
        Jaden Watson
      </Link>

      <nav className="header-nav" aria-label="Main navigation">
        <Link href="/blog" className="header-nav-link">
          Notes
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
