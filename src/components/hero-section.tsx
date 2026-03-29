import Link from "next/link";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export function HeroSection() {
  return (
    <Section id="hero">
      <AnimateIn>
        <h2 className="hero-title">
          Developer building AI&#8209;powered tools and macOS utilities for humans and agents.
        </h2>

        <p className="hero-bio">
          I like shipping software that solves real problems with clean,
          thoughtful interfaces. Currently exploring the edges of what&apos;s
          possible with language models and developer tooling.
        </p>

        <Link href="/blog" className="hero-link">
          View notes
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </AnimateIn>
    </Section>
  );
}
