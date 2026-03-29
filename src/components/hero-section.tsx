import Link from "next/link";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export function HeroSection() {
  return (
    <Section id="hero">
      <AnimateIn>
        <h1 className="text-[64px] font-bold leading-[1] tracking-[-0.04em] text-[var(--fg)] md:text-[96px]">
          Jaden
          <br />
          Watson
        </h1>

        <p className="mt-6 text-sm leading-[1.714] text-[var(--fg-muted)]">
          Developer focused on AI-powered tools and macOS utilities.
          I like shipping software that solves real problems with clean,
          thoughtful interfaces.
        </p>

        <p className="mt-4 text-sm leading-[1.714] text-[var(--fg-muted)]">
          Currently building developer tools and exploring the edges of
          what&apos;s possible with language models.
        </p>

        <div className="mt-8 flex items-center gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80"
          >
            View blog
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <a
            href="https://github.com/oobagi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
          >
            @oobagi
          </a>
        </div>
      </AnimateIn>
    </Section>
  );
}
