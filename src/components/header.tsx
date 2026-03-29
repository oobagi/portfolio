"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { label: "Home", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

function NavLink({
  href,
  isHome,
  className,
  onClick,
  children,
}: {
  href: string;
  isHome: boolean;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  // On the home page, hash links are just anchor scrolls — use plain <a>
  if (isHome && href.startsWith("/#")) {
    return (
      <a href={href.replace("/", "")} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  // For pages like /blog, use Next.js Link
  if (!href.includes("#")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Cross-page anchor links (e.g. from /blog to /#projects) — use Link
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border-primary)]
        bg-[var(--bg-primary)]/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-16 max-w-[var(--container-page)] items-center justify-between px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[var(--text-primary)]
            transition-colors duration-200 hover:text-[var(--brand-primary)]"
        >
          Jaden Watson
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              isHome={isHome}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-secondary)]
                transition-colors duration-200 hover:bg-[var(--bg-secondary)]
                hover:text-[var(--text-primary)]"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg
              text-[var(--text-secondary)] transition-colors duration-200
              hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* X / close icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-down panel */}
          <nav
            className="relative z-50 border-b border-[var(--border-primary)]
              bg-[var(--bg-primary)] px-6 pb-6 pt-4"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink
                    href={item.href}
                    isHome={isHome}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium
                      text-[var(--text-secondary)] transition-colors duration-200
                      hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
