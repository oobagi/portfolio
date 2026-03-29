import type { Project } from "@/lib/github";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { AnimateIn } from "@/components/ui/animate-in";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects">
      <AnimateIn>
        <SectionHeading title="Projects" subtitle="Things I've built" />
      </AnimateIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimateIn key={project.name} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
