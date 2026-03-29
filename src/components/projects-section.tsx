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
        <SectionHeading title="Projects" />
      </AnimateIn>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <AnimateIn key={project.name} delay={index * 80}>
            <ProjectCard project={project} isLast={index === projects.length - 1} />
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
