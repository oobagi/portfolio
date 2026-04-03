import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaden Watson — Developer Portfolio",
  description:
    "CS Senior at CSU Chico. Fullstack developer working across web, mobile, and developer tooling.",
  openGraph: {
    title: "Jaden Watson — Developer Portfolio",
    description:
      "CS Senior at CSU Chico. Fullstack developer working across web, mobile, and developer tooling.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="tagline">
      <p>
        CS Senior at CSU Chico.{" "}
        <span className="text-muted">
          Fullstack developer working across web, mobile, and developer
          tooling. Mostly TypeScript, Python, and React Native.
        </span>
      </p>
      <p className="text-muted">
        <a href="https://github.com/oobagi" target="_blank" rel="noopener noreferrer" className="tagline-link">I build things</a> that scratch my own itch. CLI tools,
        multiplatform apps, AI integrations. Most of my projects start
        because something in my workflow is broken and I&apos;d rather
        fix it than work around it. I care about developer experience
        and writing code that other people can pick up without wanting
        to rewrite it.
      </p>
      <p className="text-muted">
        Graduating Fall 2026 and actively looking for software
        engineering internships. If you&apos;re building something
        interesting, <a href="mailto:jadenwatsond@gmail.com" className="tagline-link">let&apos;s talk</a>.
      </p>
    </div>
  );
}
