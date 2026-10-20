import Image from "next/image";
import Link from "next/link";
import Squares from "./components/Squares";

const projects = [
  {
    title: "Lavender Workshop Invoice",
    category: "Full-stack app",
    description:
      "An invoice and workshop management app for customer records, vehicle history, service and parts billing, and Excel imports. It supports local storage with an optional Go/Gin + PostgreSQL API.",
    stack: ["React", "TypeScript", "Vite", "Go", "PostgreSQL"],
    href: "https://github.com/renallll/workshop-invoice",
  },
  {
    title: "Go Todo API",
    category: "Backend API",
    description:
      "A REST API for user registration, JWT authentication, and per-user task management. Built with layered Go services, PostgreSQL/GORM, Swagger docs, Docker Compose, unit tests, and GitHub Actions CI.",
    stack: ["Go", "Gin", "PostgreSQL", "JWT", "Docker"],
    href: "https://github.com/renallll/go-todo-api",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rhenaldnainggolan/" },
  { label: "GitHub", href: "https://github.com/renallll" },
];

const contactLink = "mailto:rhenaldnadrian@gmail.com";

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

const experiences = [
  {
    company: "BFI Finance Indonesia",
    role: "Data Analytics Operation",
    location: "Tangerang Selatan, Indonesia",
    period: "Sep - Dec 2025",
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
    period: "Sep - Oct 2023",
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
  period: "2019 - 2024",
  gpa: "3.39/4.00",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#171a22] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-50">
        <Squares
          speed={0}
          squareSize={56}
          direction="diagonal"
          borderColor="rgba(148, 163, 184, 0.22)"
          hoverFillColor="rgba(117, 213, 0, 0.16)"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <section
          aria-labelledby="intro-title"
          className="grid min-h-[85vh] grid-cols-1 items-center gap-8 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20"
        >
          <div className="relative flex min-h-[24rem] items-center justify-center lg:min-h-[32rem]">
            <div className="absolute inset-0 rounded-full bg-[#75D500]/[0.06] blur-3xl" />
            <div
              aria-hidden="true"
              className="relative flex h-[25rem] w-full items-center justify-center lg:h-[34rem]"
            >
              <div className="absolute h-80 w-80 rounded-full bg-[#75D500]/[0.08] blur-3xl" />
              <div className="relative flex w-72 -rotate-3 flex-col items-center">
                <div className="z-10 -mb-3 h-24 w-12 rounded-b-2xl border-x-4 border-b-4 border-[#91ed28]/60 bg-[#75D500]/20" />
                <div className="z-20 flex h-80 w-full flex-col items-center justify-center rounded-[2rem] border border-[#a9ef5b]/25 bg-gradient-to-br from-[#303744] via-[#202631] to-[#171a22] px-6 text-center shadow-2xl shadow-black/40">
                  <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full border border-[#a9ef5b]/40 bg-[#75D500]/10">
                    <Image
                      src="/assets/renal.png"
                      alt="Rhenald Nainggolan"
                      fill
                      sizes="112px"
                      className="object-cover object-[center_35%]"
                      priority
                    />
                  </div>
                  <p className="text-xl font-semibold text-white">Rhenald Nainggolan</p>
                  <p className="mt-2 text-sm text-slate-300">Software Engineer</p>
                  <div className="mt-6 h-px w-full bg-white/10" />
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#a9ef5b]">
                    Portfolio · 2026
                  </p>
                </div>
              </div>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-slate-400">
              Software · Data · Design
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#a9ef5b]">
              Backend · Full-stack · REST APIs
            </p>
            <h1 id="intro-title" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Rhenald Nainggolan
            </h1>
            <p className="mt-3 text-2xl font-semibold text-[#90e52d] sm:text-3xl">
              Software Engineer
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m an Informatics Engineering graduate with experience in data operations, cloud
              workflows, and backend development. I build REST APIs and web apps with Go,
              PostgreSQL, React, and TypeScript.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Informatics Engineering graduate · Universitas Katolik Santo Thomas
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-[#75D500]/70 hover:bg-[#75D500]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9ef5b]"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#projects"
                className="rounded-lg bg-[#75D500] px-4 py-2.5 text-sm font-semibold text-[#10140b] transition-colors hover:bg-[#91ed28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9ef5b]"
              >
                View my work
              </Link>
              <Link
                href={contactLink}
                aria-label="Email me"
                className="rounded-lg border border-[#75D500]/50 bg-[#75D500]/10 px-4 py-2.5 text-sm font-semibold text-[#c9f69a] transition-colors hover:bg-[#75D500]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9ef5b]"
              >
                Email me
              </Link>
              <Link
                href="/assets/CV_Rhenald.pdf"
                download="Rhenald-Nainggolan-CV.pdf"
                className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9ef5b]"
              >
                Download CV
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-title" className="pb-24">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9ef5b]">
              Core skills
            </p>
            <h2 id="skills-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Tools I work with
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-[#20242e]/90 p-6 shadow-xl shadow-black/10"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul aria-label={group.title} className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="scroll-mt-12 pb-24">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9ef5b]">
                Selected work
              </p>
              <h2 id="projects-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Projects I&apos;ve built
              </h2>
            </div>
            <Link
              href="https://github.com/renallll?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm font-medium text-slate-300 underline decoration-[#75D500]/60 underline-offset-4 hover:text-white"
            >
              More on GitHub <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="flex h-full min-h-[23rem] flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#252a35] to-[#1d2029] p-6 shadow-lg shadow-black/10 transition-colors hover:border-[#a9ef5b]/35 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a9ef5b]">
                    Project 0{index + 1}
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
                <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-5">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#75D500]/30 bg-[#75D500]/10 px-4 py-2.5 text-sm font-semibold text-[#d5f5b1] transition-colors hover:border-[#75D500]/60 hover:bg-[#75D500]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9ef5b]"
                  >
                    View on GitHub <span aria-hidden="true">↗</span>
                    <span className="sr-only"> for {project.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="scroll-mt-12 pb-24">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9ef5b]">
              Experience & education
            </p>
            <h2 id="experience-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              My background
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="rounded-2xl border border-white/10 bg-[#20242e]/90 p-6 shadow-xl shadow-black/10 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-1 font-medium text-[#a9ef5b]">{experience.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{experience.period}</p>
                </div>
                <p className="mt-2 text-sm text-slate-400">{experience.location}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#75D500]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="mt-5 rounded-2xl border border-white/10 bg-[#20242e]/90 p-6 shadow-xl shadow-black/10 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a9ef5b]">Education</p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
                <p className="mt-1 text-slate-300">{education.institution}</p>
                <p className="mt-1 text-sm text-slate-400">{education.location}</p>
              </div>
              <p className="text-sm text-slate-400">
                {education.period} · GPA {education.gpa}
              </p>
            </div>
          </article>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rhenald Nainggolan · Built with Next.js</p>
          <Link
            href="https://www.instagram.com/renal.a.n"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            Instagram <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
