import type { Project } from "@/lib/github";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MAX_TOPICS = 4;

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="inline-block h-4 w-4"
      aria-hidden="true"
    >
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const topics = project.topics.slice(0, MAX_TOPICS);

  return (
    <Card href={project.url} className="flex h-full flex-col gap-3">
      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
        {project.name}
      </h3>

      {project.description && (
        <p className="line-clamp-2 text-sm text-[var(--text-secondary)]">
          {project.description}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
        {project.language && (
          <span className="inline-flex items-center gap-1.5 text-sm font-mono text-[var(--text-secondary)]">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{
                backgroundColor: project.languageColor ?? "var(--text-muted)",
              }}
              aria-hidden="true"
            />
            {project.language}
          </span>
        )}

        {project.stars > 0 && (
          <span className="inline-flex items-center gap-1 text-sm text-[var(--brand-primary)]">
            <StarIcon />
            {project.stars}
          </span>
        )}
      </div>

      {topics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
      )}
    </Card>
  );
}
