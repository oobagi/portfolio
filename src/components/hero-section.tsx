import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SocialLinks, DEFAULT_SOCIAL_LINKS } from "@/components/social-links";

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center !py-16 md:!py-20"
    >
      <div className="max-w-2xl text-center">
        {/* Decorative mono-font greeting */}
        <p className="mb-6 font-mono text-sm tracking-wide text-[var(--brand-primary)]">
          &gt; whoami
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tighter text-[var(--text-primary)] md:text-6xl">
          Jaden Watson
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl text-[var(--text-secondary)] md:text-2xl">
          I build tools that make developers&rsquo; lives easier.
        </p>

        {/* Bio */}
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          Developer focused on AI-powered tools and macOS utilities.
          I like shipping software that solves real problems with clean,
          thoughtful interfaces.
        </p>

        {/* Social links */}
        <div className="mt-8 flex justify-center">
          <SocialLinks links={DEFAULT_SOCIAL_LINKS} />
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button href="#projects" variant="primary" size="md">
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </div>
    </Section>
  );
}
