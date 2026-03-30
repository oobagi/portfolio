import Link from "next/link";
import Image from "next/image";
import { FileText, FolderOpen, PenLine } from "lucide-react";

export function TaglineNav() {
  return (
    <p className="tagline">
      <Image src="/jaden.jpg" alt="Jaden Watson" width={32} height={32} className="tagline-avatar" />{" "}<Link href="/" className="tagline-link">Jaden Watson</Link> builds tools, apps, and
      whatever else sounds interesting. Browse his{" "}
      <FolderOpen size={18} strokeWidth={2.5} className="tagline-icon" />{" "}<Link href="/projects" className="tagline-link">projects</Link>, peruse his{" "}
      <PenLine size={18} strokeWidth={2.5} className="tagline-icon" />{" "}<Link href="/blog" className="tagline-link">thoughts</Link>, or grab his{" "}
      <FileText size={18} strokeWidth={2.5} className="tagline-icon" />{" "}<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="tagline-link">resume</a>.
    </p>
  );
}
