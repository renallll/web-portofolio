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
          <div className="lanyard-stage" aria-label="Profile card">
            <div className="lanyard-strap" aria-hidden="true" />
            <article className="profile-card">
              <div className="profile-avatar">
                <Image
                  src="/assets/renal.jpeg"
                  alt="Portrait of Rhenald Nainggolan"
                  fill
                  priority
                  sizes="112px"
                  className="profile-image"
                />
              </div>
              <h2>Rhenald Nainggolan</h2>
              <p>Software Engineer</p>
              <div className="profile-divider" />
              <span>Backend · APIs · Data Operations</span>
            </article>
          </div>

          <div className="hero-copy" id="about">
            <p className="eyebrow"><span className="eyebrow-dot" /> Backend-focused · data operations · Indonesia</p>
            <h1 id="hero-title">
              Rhenald
              <span>Nainggolan<span className="title-period">.</span></span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-role">Software Engineer <span>—</span> Backend systems &amp; data operations</p>
              <p className="hero-intro">
                I&apos;m an Informatics Engineering graduate focused on backend software, with hands-on experience in cloud data operations. I build REST APIs and practical web apps with Go, PostgreSQL, React, and TypeScript.
              </p>
              <p className="hero-education">Universitas Katolik Santo Thomas · Informatics Engineering</p>
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
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="page-wrap section-block">
            <div className="section-kicker section-kicker-light">Core skills</div>
            <div className="skills-heading">
              <h2 id="skills-title">Tools I work with</h2>
              <p>Technologies I use across backend development, web apps, and cloud data workflows.</p>
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
            <h2 id="work-title">Projects I&apos;ve built</h2>
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
          <div className="experience-heading">
            <h2 id="experience-title">My background</h2>
            <p>Experience supporting data workflows, hardware, and operational systems.</p>
          </div>
          <div className="experience-cards">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.company}>
                <div className="experience-card-top">
                  <p className="timeline-company">{experience.company} <span>· {experience.location}</span></p>
                  <time className="timeline-date">{experience.period}</time>
                </div>
                <h3>{experience.role}</h3>
                <p className="timeline-proof">
                  <strong>{experience.proof.value}</strong>
                  <span>{experience.proof.label}</span>
                </p>
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <article className="education-card">
            <p className="education-label">Education</p>
            <div className="education-card-content">
              <div>
                <h3>{education.degree}</h3>
                <p>{education.institution} · {education.location}</p>
              </div>
              <p className="education-period">{education.period} <span>· GPA {education.gpa}</span></p>
            </div>
          </article>
        </section>

        <section id="contact" className="contact-section page-wrap" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="section-kicker section-kicker-light">Have a project in mind?</div>
            <div className="contact-grid">
              <h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2>
              <div className="contact-action">
                <p>For conversations about software, backend systems, and data.</p>
                <div className="contact-actions">
                  <Link className="button button-light" href={"mailto:" + email}>
                    {email} <span aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    className="button button-whatsapp"
                    href="https://wa.me/6281262598726"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Rhenald on WhatsApp"
                  >
                    Chat on WhatsApp <span aria-hidden="true">↗</span>
                  </Link>
                </div>
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
