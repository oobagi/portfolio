import Link from "next/link";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export function HeroSection() {
  return (
    <Section id="hero">
      <AnimateIn>
        <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--fg)] sm:text-[36px] md:text-[42px]">
          Developer building AI&#8209;powered tools and macOS utilities for humans and agents.
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-[var(--fg-muted)]">
          I like shipping software that solves real problems with clean,
          thoughtful interfaces. Currently exploring the edges of what&apos;s
          possible with language models and developer tooling.
        </p>

        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
        >
          View notes
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </AnimateIn>
    </Section>
  );
}
