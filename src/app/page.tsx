import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Arrow, ServiceIcon } from "@/components/icons";
import { WorkGrid } from "@/components/work-grid";
import { Contact } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main id="main" className="container">
      <section className="hero" aria-labelledby="hero-heading">
        <p className="availability">
          <span aria-hidden="true" />
          {site.hero.eyebrow}
        </p>
        <h1 id="hero-heading">
          {site.hero.heading}
          <br />
          <em>{site.hero.accent}</em>
        </h1>
        <p className="hero-intro">{site.hero.intro}</p>
        <div className="hero-actions">
          <a className="button" href={site.emailUrl}>
            Start a project
            <Arrow diagonal />
          </a>
          <a className="work-jump" href="#work">
            See my work<span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <div className="skills-strip" aria-label="Technologies I work with">
        <ul>
          {site.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <section
        id="work"
        className="work-section section"
        aria-labelledby="work-heading"
        data-reveal
      >
        <h2 id="work-heading">
          Selected work<span className="section-dot">.</span>
        </h2>
        <WorkGrid projects={projects} />
      </section>
      <section
        id="services"
        className="services-section section"
        aria-labelledby="services-heading"
        data-reveal
      >
        <h2 id="services-heading">What I can build for you</h2>
        <div className="services-grid">
          {site.services.map((service) => (
            <article key={service.title}>
              <div className="service-icon">
                <ServiceIcon kind={service.symbol} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="process-section section"
        aria-labelledby="process-heading"
        data-reveal
      >
        <h2 id="process-heading">How we work</h2>
        <ol className="process-grid">
          {site.process.map((step, i) => (
            <li key={step.title}>
              <span className="step-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        id="about"
        className="about-section section"
        aria-labelledby="about-heading"
        data-reveal
      >
        <div>
          <p className="eyebrow">A little about the person behind the work</p>
          <h2 id="about-heading">
            Hi, I’m Yash<span className="section-dot">.</span>
          </h2>
        </div>
        <p className="about-copy">{site.about}</p>
      </section>
      <Contact />
      <Reveal />
    </main>
  );
}
