import Link from "next/link";
import type { Project } from "@/content/projects";
import { Arrow } from "./icons";

export function ProjectLinks({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  return (
    <div className="project-links">
      {!detail && (
        <Link href={`/work/${project.slug}`} className="text-link">
          {project.caseStudy ? "Read case study" : "View project"}
          <Arrow />
        </Link>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-link"
          aria-label={`${project.title} on GitHub (opens in a new tab)`}
        >
          GitHub
          <Arrow diagonal />
        </a>
      )}
      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          className="button button-small"
          target="_blank"
          rel="noreferrer"
        >
          Live demo
          <Arrow diagonal />
        </a>
      ) : (
        <span className="demo-soon">Live demo — soon</span>
      )}
    </div>
  );
}
