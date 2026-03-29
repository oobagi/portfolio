import { Section } from "@/components/ui/section";

export function ContactSection() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="contact-text">
        I&apos;m always open to interesting conversations and opportunities.
      </p>

      <dl className="footer-grid" style={{ marginTop: "16px" }}>
        <dt className="footer-label">Email</dt>
        <dd>
          <a href="mailto:jadenwatsond@gmail.com" className="footer-link">
            jadenwatsond@gmail.com
          </a>
        </dd>
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
      </dl>
    </Section>
  );
}
