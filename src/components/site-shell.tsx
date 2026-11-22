import Link from "next/link";
import { profileLinks, site } from "@/content/site";
import { Arrow } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label={`${site.name} home`}>
          {site.name}
          <span className="wordmark-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#about">About</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-small" href={site.emailUrl}>
            Hire me
            <Arrow diagonal />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
      data-reveal
    >
      <div>
        <p className="eyebrow">Let’s make something useful</p>
        <h2 id="contact-heading">{site.contact.heading}</h2>
        <p>{site.contact.description}</p>
      </div>
      <div className="contact-actions">
        <a href={site.emailUrl} className="button button-light">
          Send a message
          <Arrow diagonal />
        </a>
        <div className="contact-links">
          {profileLinks().map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer container">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p>Based in Hyderabad. Working worldwide.</p>
      <nav aria-label="Social links">
        {profileLinks().map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
            <Arrow diagonal />
          </a>
        ))}
      </nav>
    </footer>
  );
}
