import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jaden Watson — Developer Portfolio",
  description:
    "CS Senior at CSU Chico. Fullstack developer working on AI agents across web, mobile, and native macOS.",
  openGraph: {
    title: "Jaden Watson — Developer Portfolio",
    description:
      "CS Senior at CSU Chico. Fullstack developer working on AI agents across web, mobile, and native macOS.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="tagline">
      <p>
        CS Senior at{" "}
        <span className="tagline-nowrap">
          <Image src="/csu-chico-emblem.webp" alt="California State University, Chico" width={132} height={132} className="tagline-emblem" />{" "}CSU Chico.
        </span>{" "}
        <span className="text-muted">
          Fullstack developer working on AI agents across web, mobile,
          and native macOS. Mostly TypeScript, Python, and Swift.
        </span>
      </p>
      <p className="text-muted">
        Right now I&apos;m building <a href="https://callnightowl.com" target="_blank" rel="noopener noreferrer" className="tagline-link">Night Owl</a>, an AI receptionist that
        answers the phone for local contractors, books jobs, and follows
        up on leads. Before that, <a href="https://github.com/oobagi/yap" target="_blank" rel="noopener noreferrer" className="tagline-link">Yap</a>, a macOS dictation tool, plus a
        handful of CLI tools I still use every day.
      </p>
      <p className="text-muted">
        Graduating Fall 2026 and actively looking for software
        engineering internships. If you&apos;re building something
        interesting, <a href="mailto:jadenwatsond@gmail.com" className="tagline-link">let&apos;s talk</a>.
      </p>
    </div>
  );
}
