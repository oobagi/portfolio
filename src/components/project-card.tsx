import Image from "next/image";
import { Star } from "lucide-react";
import type { Project } from "@/lib/github";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="list-item project-card"
    >
      {project.image && (
        <div className="project-image-card">
          <Image
            src={project.image}
            alt=""
            width={600}
            height={400}
            className="project-image"
          />
        </div>
      )}
      <div className="project-content">
        <div className="project-header">
          <span className="list-item-title">{project.name}</span>
          {project.stars > 0 && (
            <span className="star-count">
              <Star size={14} strokeWidth={2.5} />
              {project.stars}
            </span>
          )}
        </div>
        {project.description && (
          <p className="text-muted project-desc">{project.description}</p>
        )}
      </div>
    </a>
  );
}
