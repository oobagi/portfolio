import type { Metadata } from "next";
import { getProjects } from "@/lib/github";
import { ProjectCard } from "@/components/project-card";
import { contributions } from "@/lib/contributions";
import { GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

const PR_ICONS = {
  merged: { icon: GitMerge, color: "#a855f7" },
  open: { icon: GitPullRequest, color: "#22c55e" },
  closed: { icon: GitPullRequestClosed, color: "#ef4444" },
} as const;

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
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="list-item"
              >
                <span className="list-item-title">{project.name}</span>
                {project.description && (
                  <p className="text-muted project-desc">{project.description}</p>
                )}
              </a>
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
              const { icon: PrIcon, color } = PR_ICONS[c.state];
              return (
                <a
                  key={c.url}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-item"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <PrIcon size={14} style={{ flexShrink: 0, color }} />
                    <span className="list-item-title">{c.repo}</span>
                  </div>
                  <p className="text-muted project-desc">{c.description}</p>
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
