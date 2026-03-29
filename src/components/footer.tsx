export function Footer() {
  return (
    <footer className="footer">
      <dl className="footer-grid">
        <dt className="footer-label">GitHub</dt>
        <dd>
          <a
            href="https://github.com/oobagi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            @oobagi
          </a>
        </dd>

        <dt className="footer-label">Email</dt>
        <dd>
          <a
            href="mailto:jadenwatsond@gmail.com"
            className="footer-link"
          >
            jadenwatsond@gmail.com
          </a>
        </dd>
      </dl>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Jaden Watson
      </p>
    </footer>
  );
}
