import { getProjects } from "@/lib/github";
import { getAllPosts } from "@/lib/blog";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { LatestPostsSection } from "@/components/latest-posts-section";
import { ContributionsSection } from "@/components/contributions-section";
import { ContactSection } from "@/components/contact-section";

export default async function Home() {
  const projects = await getProjects();
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />
      <LatestPostsSection posts={latestPosts} />
      <ContributionsSection />
      <ContactSection />
    </>
  );
}
