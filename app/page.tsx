import Image from "next/image";
import Link from "next/link";

const skillGroups = [
  {
    number: "01",
    title: "Backend & APIs",
    skills: ["Go", "Gin", "REST APIs", "PostgreSQL", "GORM", "JWT", "Docker"],
  },
  {
    number: "02",
    title: "Web development",
    skills: ["React", "TypeScript", "JavaScript", "Vite"],
  },
  {
    number: "03",
    title: "Data & cloud operations",
    skills: ["Python", "SQL", "ETL/ELT", "Alibaba Cloud DataWorks", "MaxCompute", "OSS"],
  },
];

const projects = [
  {
    number: "01",
    category: "Full-stack app",
    title: "Lavender Workshop Invoice",
    description:
      "An invoice and workshop management app for customer records, vehicle history, service and parts billing, and Excel imports. It supports local storage with an optional Go/Gin + PostgreSQL API.",
    stack: ["React", "TypeScript", "Vite", "Go", "PostgreSQL"],
    href: "https://github.com/renallll/workshop-invoice",
  },
  {
    number: "02",
    category: "Backend API",
    title: "Go Todo API",
    description:
      "A REST API for user registration, JWT authentication, and per-user task management. Built with layered Go services, PostgreSQL/GORM, Swagger docs, Docker Compose, unit tests, and GitHub Actions CI.",
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
    highlights: [
      "Managed Alibaba Cloud DataWorks workflows for orchestration, scheduling, and dependencies.",
      "Built ETL/ELT pipelines from REST APIs, MySQL/PostgreSQL RDS, and system logs into MaxCompute and OSS.",
      "Monitored pipeline runs, resolved execution failures, and maintained data integrity across cloud storage formats.",
    ],
  },
  {
    company: "Nusantara Enterprise",
    role: "IT Support",
    location: "Medan, Indonesia",
    period: "Sep – Oct 2023",
    highlights: [
      "Set up and maintained 100+ computers and network equipment for the national SSCASN examination.",
      "Backed up registration and test data, monitored system performance, and resolved issues during exam operations.",
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
            <p className="eyebrow"><span className="eyebrow-dot" /> Software engineer · Indonesia</p>
            <h1 id="hero-title">
              Rhenald
              <span>Nainggolan<span className="title-period">.</span></span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-role">Software Engineer <span>—</span> Backend, web &amp; data</p>
              <p className="hero-intro">
                I build dependable digital products, from well-structured APIs to clear, useful web experiences.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#work">
                  Explore my work <span aria-hidden="true">↘</span>
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
                src="/assets/renal.png"
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
            <span className="portrait-index" aria-hidden="true">01 / 04</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-cue-line" aria-hidden="true" />
            Scroll to explore
          </a>
        </section>

        <section id="about" className="about-section page-wrap section-block" aria-labelledby="about-title">
          <div className="section-kicker"><span>01</span> A little about me</div>
          <div className="about-grid">
            <h2 id="about-title">Good software starts with <em>clear thinking.</em></h2>
            <div className="about-copy">
              <p>
                I&apos;m an Informatics Engineering graduate from Universitas Katolik Santo Thomas, with experience in data operations, cloud workflows, and backend development.
              </p>
              <p>
                I enjoy connecting the details behind a system with the people who use it—building REST APIs and web apps with Go, PostgreSQL, React, and TypeScript.
              </p>
              <Link className="text-link" href="/assets/CV_Rhenald.pdf" download="Rhenald-Nainggolan-CV.pdf">
                Download my CV <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="focus-row" aria-label="Areas of focus">
            <div className="focus-item"><span>01</span><strong>Backend systems</strong></div>
            <div className="focus-item"><span>02</span><strong>Cloud data workflows</strong></div>
            <div className="focus-item"><span>03</span><strong>Web applications</strong></div>
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="page-wrap section-block">
            <div className="section-kicker section-kicker-light"><span>02</span> Tools of the trade</div>
            <div className="skills-heading">
              <h2 id="skills-title">Built with curiosity.<br /><em>Shipped with care.</em></h2>
              <p>Tools I use to turn complex needs into practical, maintainable software.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-top"><span>{group.number}</span><span aria-hidden="true">↗</span></div>
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
          <div className="section-kicker"><span>03</span> Selected work</div>
          <div className="work-heading">
            <h2 id="work-title">Things I&apos;ve<br /><em>put into the world.</em></h2>
            <Link className="text-link" href="https://github.com/renallll?tab=repositories" target="_blank" rel="noopener noreferrer">
              More on GitHub <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={"project-card project-card-" + project.number} key={project.title}>
                <div className="project-meta">
                  <span>{project.number} / 02</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-card-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="project-stack" aria-label={project.title + " technologies"}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <Link className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  View project on GitHub <span aria-hidden="true">↗</span>
                </Link>
                <span className="project-watermark" aria-hidden="true">{project.number}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section page-wrap section-block" aria-labelledby="experience-title">
          <div className="section-kicker"><span>04</span> The path so far</div>
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
            <div className="section-kicker section-kicker-light"><span>05</span> Have a project in mind?</div>
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
