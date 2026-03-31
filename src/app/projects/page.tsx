import type { Metadata } from "next";
import { getProjects } from "@/lib/github";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.image);
  const rest = projects.filter((p) => !p.image);

  return (
    <>
      {featured.length > 0 && (
        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} featured />
          ))}
        </div>
      )}
      {rest.length > 0 && (
        <div className="projects-rest">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
