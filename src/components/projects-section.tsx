import type { Project } from "@/lib/github";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { VStack } from "@/components/ui/stack";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      title="Projects"
      titleHref="https://github.com/oobagi"
    >
      <VStack gap={0}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </VStack>
    </Section>
  );
}
