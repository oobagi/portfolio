import { getProjects } from "@/lib/github";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}
