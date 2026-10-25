import Image from "next/image";
import Link from "next/link";

const skillGroups = [
  {
    title: "Backend & APIs",
    skills: ["Go", "Gin", "REST APIs", "PostgreSQL", "GORM", "JWT", "Docker"],
  },
  {
    title: "Web development",
    skills: ["React", "TypeScript", "JavaScript", "Vite"],
  },
  {
    title: "Data & cloud operations",
    skills: ["Python", "SQL", "ETL/ELT", "Alibaba Cloud DataWorks", "MaxCompute", "OSS"],
  },
];

const projects = [
  {
    variant: "paper",
    category: "Full-stack app",
    title: "Lavender Workshop Invoice",
    description:
      "A workshop invoicing app for customer and vehicle records, service and parts billing, and Excel imports. It supports browser storage or an optional authenticated Go/Gin + PostgreSQL API.",
    highlights: [
      "Import invoice data from Excel",
      "Track customers, vehicles, services, and parts",
      "Use local storage or API-backed data",
    ],
    stack: ["React", "TypeScript", "Vite", "Go", "PostgreSQL"],
    href: "https://github.com/renallll/workshop-invoice",
  },
  {
    variant: "blue",
    category: "Backend API",
    title: "Go Todo API",
    description:
      "A JWT-protected REST API where each user manages their own tasks, built with layered Go services and PostgreSQL/GORM.",
    highlights: [
      "Registration, login, and protected task CRUD",
      "Separated handlers, services, and repositories",
      "Swagger docs, unit tests, and GitHub Actions CI",
    ],
    stack: ["Go", "Gin", "PostgreSQL", "JWT", "Docker"],
    href: "https://github.com/renallll/go-todo-api",
  },
];

const experiences = [
  {
    company: "BFI Finance Indonesia",
    role: "Data Analytics Operation",
    location: "Tangerang Selatan, Indonesia",
    period: "Sep – Dec 2025",
    proof: { value: "4", label: "data source types integrated" },
    highlights: [
      "Integrated REST APIs, MySQL, PostgreSQL RDS, and system logs into MaxCompute and OSS.",
      "Scheduled DataWorks workflows, managed dependencies, and investigated failed pipeline runs.",
      "Maintained data integrity across cloud storage formats.",
    ],
  },
  {
    company: "Nusantara Enterprise",
    role: "IT Support",
    location: "Medan, Indonesia",
    period: "Sep – Oct 2023",
    proof: { value: "100+", label: "computers supported for SSCASN" },
    highlights: [
      "Set up and maintained computers and network equipment for the national SSCASN examination.",
      "Backed up registration and test data, monitored system performance, and resolved technical issues during exam operations.",
    ],
  },
];

const education = {
  degree: "Bachelor of Informatics Technology",
  institution: "Universitas Katolik Santo Thomas",
  location: "Medan, Indonesia",
  period: "2019 – 2024",
  gpa: "3.39/4.00",
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/renallll" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rhenaldnainggolan/" },
  { label: "Instagram", href: "https://www.instagram.com/renal.a.n" },
];

const email = "rhenaldnadrian@gmail.com";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header page-wrap">
        <Link className="wordmark" href="#home" aria-label="Rhenald Nainggolan, home">
          <span className="wordmark-mark">RN</span>
          <span className="wordmark-name">Rhenald Nainggolan</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#experience">Experience</Link>
          <Link className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <main>
        <section id="home" className="hero page-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Backend-focused · data operations · Indonesia</p>
            <h1 id="hero-title">
              Rhenald
              <span>Nainggolan<span className="title-period">.</span></span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-role">Software Engineer <span>—</span> Backend systems &amp; data operations</p>
              <p className="hero-intro">
                I build REST APIs and practical web apps, bringing hands-on experience in cloud data operations.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#work">
                  Explore my work <span aria-hidden="true">↘</span>
                </Link>
                <Link
                  className="button button-secondary"
                  href="/assets/CV_Rhenald.pdf"
                  download="Rhenald-Nainggolan-CV.pdf"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </Link>
                <Link className="text-link" href={"mailto:" + email}>
                  Get in touch <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="portrait-stage">
            <div className="portrait-stamp" aria-hidden="true">SELECTED<br />WORK · 2026</div>
            <div className="portrait-frame">
              <Image
                src="/assets/renal.jpeg"
                alt="Portrait of Rhenald Nainggolan"
                fill
                priority
                sizes="(max-width: 760px) 86vw, 42vw"
                className="portrait-image"
              />
            </div>
            <div className="portrait-caption">
              <span>Based in Indonesia</span>
              <span className="caption-rule" />
              <span>Backend · Web · Data</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-cue-line" aria-hidden="true" />
            Scroll to explore
          </a>
        </section>

        <section id="about" className="about-section page-wrap section-block" aria-labelledby="about-title">
          <div className="section-kicker">A little about me</div>
          <div className="about-grid">
            <h2 id="about-title">Good software starts with <em>clear thinking.</em></h2>
            <div className="about-copy">
              <p>
                I&apos;m an Informatics Engineering graduate from Universitas Katolik Santo Thomas, focused on backend software development with hands-on experience in data operations and cloud workflows.
              </p>
              <p>
                I build REST APIs and web apps with Go, PostgreSQL, React, and TypeScript, connecting dependable systems with clear user experiences.
              </p>
            </div>
          </div>
          <h3 className="focus-heading">Areas of focus</h3>
          <div className="focus-row">
            <div className="focus-item"><strong>Backend systems</strong></div>
            <div className="focus-item"><strong>Cloud data workflows</strong></div>
            <div className="focus-item"><strong>Web applications</strong></div>
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="page-wrap section-block">
            <div className="section-kicker section-kicker-light">Tools of the trade</div>
            <div className="skills-heading">
              <h2 id="skills-title">Built with curiosity.<br /><em>Shipped with care.</em></h2>
              <p>Tools I use to turn complex needs into practical, maintainable software.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="work-section page-wrap section-block" aria-labelledby="work-title">
          <div className="section-kicker">Selected work</div>
          <div className="work-heading">
            <h2 id="work-title">Things I&apos;ve<br /><em>put into the world.</em></h2>
            <Link className="text-link" href="https://github.com/renallll?tab=repositories" target="_blank" rel="noopener noreferrer">
              More on GitHub <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={"project-card project-card-" + project.variant} key={project.title}>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-card-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-highlights" aria-label={project.title + " features"}>
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <ul className="project-stack" aria-label={project.title + " technologies"}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <Link className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  View source &amp; documentation <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section page-wrap section-block" aria-labelledby="experience-title">
          <div className="section-kicker">The path so far</div>
          <div className="experience-grid">
            <div className="experience-intro">
              <h2 id="experience-title">Experience<br /><em>&amp; education.</em></h2>
              <p>Learning by building, supporting, and making the systems around me work better.</p>
            </div>
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-entry" key={experience.company}>
                  <div className="timeline-date">{experience.period}</div>
                  <div className="timeline-content">
                    <p className="timeline-company">{experience.company} <span>· {experience.location}</span></p>
                    <h3>{experience.role}</h3>
                    <p className="timeline-proof">
                      <strong>{experience.proof.value}</strong>
                      <span>{experience.proof.label}</span>
                    </p>
                    <ul>
                      {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
              <article className="timeline-entry education-entry">
                <div className="timeline-date">{education.period}</div>
                <div className="timeline-content">
                  <p className="timeline-company">Education <span>· {education.location}</span></p>
                  <h3>{education.degree}</h3>
                  <p className="education-detail">{education.institution} <span>· GPA {education.gpa}</span></p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section page-wrap" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="section-kicker section-kicker-light">Have a project in mind?</div>
            <div className="contact-grid">
              <h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2>
              <div className="contact-action">
                <p>For conversations about software, backend systems, and data.</p>
                <Link className="button button-light" href={"mailto:" + email}>
                  {email} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="contact-footer">
              <span>Rhenald Nainggolan · Software Engineer</span>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label} <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <span>© {new Date().getFullYear()} Rhenald Nainggolan</span>
        <span>Designed with intention · Built with Next.js</span>
        <Link href="#home">Back to top ↑</Link>
      </footer>
    </div>
  );
}
