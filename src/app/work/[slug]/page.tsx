import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ProjectCover } from "@/components/project-cover";
import { ProjectLinks } from "@/components/project-links";
import { Contact } from "@/components/site-shell";
import { Arrow } from "@/components/icons";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: site.title },
      ],
    },
    twitter: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const content = project.caseStudy ?? project.details!;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="container project-page">
      <Link className="back-link" href="/#work">
        <span aria-hidden="true">←</span>All work
      </Link>
      <header className="project-header">
        <p className="eyebrow">{project.tag}</p>
        <h1>{project.title}</h1>
        <p className="project-lede">{project.summary}</p>
        <ProjectLinks project={project} detail />
      </header>
      <div className="case-cover">
        <ProjectCover project={project} />
      </div>
      <div
        className={`case-content ${project.caseStudy ? "full-case-study" : "short-project"}`}
      >
        <section aria-labelledby="problem">
          <h2 id="problem">The problem</h2>
          <p>{content.problem}</p>
        </section>
        <section aria-labelledby="built">
          <h2 id="built">What I built</h2>
          <p>{content.built}</p>
        </section>
        <section aria-labelledby="how">
          <h2 id="how">How it works</h2>
          {Array.isArray(content.how) ? (
            <ol className="case-steps">
              {content.how.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>{content.how}</p>
          )}
        </section>
        {project.caseStudy?.hardParts && (
          <section aria-labelledby="challenges">
            <h2 id="challenges">The hard parts</h2>
            <p>{project.caseStudy.hardParts}</p>
          </section>
        )}
        <section aria-labelledby="results">
          <h2 id="results">The result</h2>
          <p>{content.results}</p>
        </section>
        <section aria-labelledby="tech">
          <h2 id="tech">Built with</h2>
          <ul className="tech-tags">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="links">
          <h2 id="links">Explore the project</h2>
          <div>
            <ProjectLinks project={project} detail />
            {project.caseStudy && (
              <p className="professional-note">
                Professional work. This write-up describes the workflow; source
                code and internal data are private.
              </p>
            )}
          </div>
        </section>
      </div>
      <Link href={`/work/${next.slug}`} className="next-project">
        <div>
          <span className="eyebrow">Next project</span>
          <h2>{next.title}</h2>
        </div>
        <Arrow diagonal />
      </Link>
      <Contact />
    </main>
  );
}
