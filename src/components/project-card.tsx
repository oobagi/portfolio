import type { Project } from "@/lib/github";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  isLast?: boolean;
}

export function ProjectCard({ project, isLast = false }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`list-item${isLast ? " list-item--last" : ""}`}
    >
      <div className="list-item-row">
        <span className="list-item-title">
          {project.name}
        </span>

        <div className="list-item-meta">
          {project.language && (
            <Badge>{project.language}</Badge>
          )}
          {project.stars > 0 && (
            <span className="text-xs text-muted">
              {project.stars} stars
            </span>
          )}
        </div>
      </div>

      {project.description && (
        <p className="list-item-description">
          {project.description}
        </p>
      )}
    </a>
  );
}
