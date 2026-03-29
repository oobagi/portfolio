import type { Project } from "@/lib/github";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects">
      <div className="list-column">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} isLast={index === projects.length - 1} />
        ))}
      </div>
    </Section>
  );
}
