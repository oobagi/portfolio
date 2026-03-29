import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="hero">
      <h2 className="hero-title">
        Senior CS student at CSU Chico who builds things on the side.
      </h2>

      <p className="hero-bio">
        Fullstack and app developer. I&apos;ve shipped a macOS
        voice&#8209;to&#8209;text app, an agent framework for Claude Code,
        and a text adventure engine powered by LLMs. Looking for internships
        in web dev, app dev, or anything where I get to build and ship.
      </p>

      <Link href="/blog" className="hero-link">
        View notes
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}
