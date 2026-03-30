import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="section">
      <div className="section-left">
        <Image
          src="/jaden.jpg"
          alt="Jaden Watson"
          width={400}
          height={533}
          className="hero-image"
          priority
        />
      </div>
      <div className="section-content">
        <p className="text-muted">
          <span className="text-fg">Jaden Watson</span>
          <br />Senior CS Student @ CSU Chico
          <br />Chico, CA
          <br />
          <br /><span className="text-fg">Fullstack and app developer</span> building macOS apps, AI tools, and web experiences. I work across Python, Swift, TypeScript, and Shell — wherever the problem takes me.
          <br />{"\t"}I care about tools that feel good to use — fast, minimal, and honest. I&apos;d rather write something small that works well than something large that almost works.
          <br />{"\t"}Open to internships where I get to build real things with people who care about craft.
        </p>
      </div>
    </section>
  );
}
