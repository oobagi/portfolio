import type { Project } from "@/lib/github";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  isLast?: boolean;
}

export function ProjectCard({ project, isLast = false }: ProjectCardProps) {
  return (
    <div
      className={`py-4 ${isLast ? "" : "border-b border-[var(--border)]"}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
        >
          {project.name}
        </a>

        <div className="flex items-center gap-3 shrink-0">
          {project.language && (
            <Badge>{project.language}</Badge>
          )}
          {project.stars > 0 && (
            <span className="text-xs text-[var(--fg-muted)]">
              {project.stars} stars
            </span>
          )}
        </div>
      </div>

      {project.description && (
        <p className="mt-1 text-sm text-[var(--fg-muted)]">
          {project.description}
        </p>
      )}
    </div>
  );
}
