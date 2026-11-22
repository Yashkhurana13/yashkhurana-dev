"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project, ProjectCategory } from "@/content/projects";
import { ProjectCover } from "./project-cover";
import { ProjectLinks } from "./project-links";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "AI agents", value: "ai" },
  { label: "Web apps", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const visible = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );
  return (
    <>
      <div className="work-toolbar">
        <div
          className="filter-chips"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              aria-controls="project-grid"
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="work-count" aria-live="polite" aria-atomic="true">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div id="project-grid" className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="cover-link"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectCover project={project} />
            </Link>
            <div className="project-card-body">
              <p className="eyebrow project-tag">{project.tag}</p>
              <h3>
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-tech">{project.tech.join(" · ")}</p>
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
