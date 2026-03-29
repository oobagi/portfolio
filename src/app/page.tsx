import { getProjects } from "@/lib/github";
import { getAllPosts } from "@/lib/blog";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContributionsSection } from "@/components/contributions-section";
import { ContactSection } from "@/components/contact-section";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogPostList } from "@/components/blog/blog-post-list";
import { AnimateIn } from "@/components/ui/animate-in";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />

      {latestPosts.length > 0 && (
        <Section id="notes">
          <AnimateIn>
            <SectionHeading title="Latest Notes" />
          </AnimateIn>

          <BlogPostList posts={latestPosts} />

          <Link href="/blog" className="section-link">
            View all notes
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Section>
      )}

      <ContributionsSection />
      <ContactSection />
    </>
  );
}
