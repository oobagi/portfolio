import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SocialLinks, DEFAULT_SOCIAL_LINKS } from "@/components/social-links";

const EMAIL_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export function ContactSection() {
  return (
    <Section id="contact" className="text-center">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project idea or just want to say hello?"
        className="mx-auto max-w-lg [&>h2]:text-center [&>p]:text-center"
      />

      <div className="mx-auto max-w-md">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          I&apos;m always open to interesting conversations and opportunities.
          Drop me a line and let&apos;s connect.
        </p>

        <div className="mt-8">
          <Button href="mailto:jadenwatson3@gmail.com" size="md">
            {EMAIL_ICON}
            Say Hello
          </Button>
        </div>

        <div className="mt-8 flex justify-center">
          <SocialLinks links={DEFAULT_SOCIAL_LINKS} />
        </div>
      </div>
    </Section>
  );
}
