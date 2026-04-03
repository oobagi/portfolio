import type { Metadata } from "next";
import { getProjects } from "@/lib/github";
import { contributions, PR_ICONS } from "@/lib/contributions";
import { ProjectCard } from "@/components/project-card";
import { ListItem } from "@/components/ui/list-item";
import { HStack } from "@/components/ui/stack";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
  openGraph: {
    title: "Projects | Jaden Watson",
    description: "Things I've built.",
    url: "/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.image);
  const rest = projects.filter((p) => !p.image);

  return (
    <div className="projects-page">
      {featured.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      {rest.length > 0 && (
        <>
          <h2 className="projects-section-label">Other</h2>
          <div className="projects-section-content divider-list">
            {rest.map((project) => (
              <ListItem key={project.name} href={project.url} external>
                <span className="list-item-title">{project.name}</span>
                {project.description && (
                  <p className="text-muted project-desc">{project.description}</p>
                )}
              </ListItem>
            ))}
          </div>
        </>
      )}
      {contributions.length > 0 && (
        <>
          <h2 className="projects-section-label">
            <a href="https://github.com/oobagi" target="_blank" rel="noopener noreferrer" className="section-label-link">
              OSS Contributions <span aria-hidden>&#8599;</span>
            </a>
          </h2>
          <div className="projects-section-content divider-list">
            {contributions.map((c) => {
              const { icon: PrIcon, className } = PR_ICONS[c.state];
              return (
                <ListItem key={c.url} href={c.url} external>
                  <HStack gap={8}>
                    <PrIcon size={14} className={className} />
                    <span className="list-item-title">{c.repo}</span>
                  </HStack>
                  <p className="text-muted project-desc">{c.description}</p>
                </ListItem>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
