export function Footer() {
  return (
    <footer className="section footer">
      <div className="section-left" />
      <div className="section-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Jaden Watson
        </p>
      </div>
      <div className="section-right" />
    </footer>
  );
}
