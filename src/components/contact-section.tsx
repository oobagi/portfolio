import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";

export function ContactSection() {
  return (
    <Section id="contact">
      <AnimateIn>
        <SectionHeading title="Get in touch" />

        <p className="text-sm text-[var(--fg-muted)]">
          I&apos;m always open to interesting conversations and opportunities.
        </p>

        <a
          href="mailto:jadenwatsond@gmail.com"
          className="mt-4 inline-block text-sm text-[var(--accent)] underline underline-offset-2 decoration-1 transition-opacity duration-200 hover:opacity-80"
        >
          jadenwatsond@gmail.com
        </a>
      </AnimateIn>
    </Section>
  );
}
