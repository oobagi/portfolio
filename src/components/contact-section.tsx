import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";

export function ContactSection() {
  return (
    <Section id="contact">
      <AnimateIn>
        <SectionHeading title="Get in touch" />

        <p className="contact-text">
          I&apos;m always open to interesting conversations and opportunities.
        </p>

        <a
          href="mailto:jadenwatsond@gmail.com"
          className="contact-email"
        >
          jadenwatsond@gmail.com
        </a>
      </AnimateIn>
    </Section>
  );
}
