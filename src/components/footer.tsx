export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] pt-10 pb-6">
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
        <dt className="text-[var(--fg-muted)]">GitHub</dt>
        <dd>
          <a
            href="https://github.com/oobagi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            @oobagi
          </a>
        </dd>

        <dt className="text-[var(--fg-muted)]">Email</dt>
        <dd>
          <a
            href="mailto:jadenwatson3@gmail.com"
            className="text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            jadenwatson3@gmail.com
          </a>
        </dd>
      </dl>

      <p className="mt-8 text-xs text-[var(--fg-muted)]">
        &copy; {new Date().getFullYear()} Jaden Watson
      </p>
    </footer>
  );
}
