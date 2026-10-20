import Link from "next/link";
import Squares from "./components/Squares";

const projects = [
  {
    title: "Lavender Workshop Invoice",
    description:
      "An invoice management app for an automotive workshop, covering customers, vehicle history, Excel imports, and a Go API integration.",
    stack: ["React", "TypeScript", "Go", "PostgreSQL"],
    href: "https://github.com/renallll/workshop-invoice",
  },
  {
    title: "Go Todo API",
    description:
      "A REST API for task management with JWT authentication, PostgreSQL, layered services, Docker, Swagger documentation, and CI.",
    stack: ["Go", "Gin", "PostgreSQL", "Docker"],
    href: "https://github.com/renallll/go-todo-api",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rhenaldnainggolan/" },
  { label: "GitHub", href: "https://github.com/renallll" },
  { label: "Instagram", href: "https://www.instagram.com/renal.a.n" },
  { label: "WhatsApp", href: "https://wa.me/qr/6QBDQPT3TB4TF1" },
];

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
          <div className="relative hidden min-h-[32rem] items-center justify-center lg:flex">
            <div className="absolute inset-0 rounded-full bg-[#75D500]/[0.06] blur-3xl" />
            <div
              aria-hidden="true"
              className="relative flex h-[34rem] w-full items-center justify-center"
            >
              <div className="absolute h-80 w-80 rounded-full bg-[#75D500]/[0.08] blur-3xl" />
              <div className="relative flex w-72 -rotate-3 flex-col items-center">
                <div className="z-10 -mb-3 h-24 w-12 rounded-b-2xl border-x-4 border-b-4 border-[#91ed28]/60 bg-[#75D500]/20" />
                <div className="z-20 flex h-80 w-full flex-col items-center justify-center rounded-[2rem] border border-[#a9ef5b]/25 bg-gradient-to-br from-[#303744] via-[#202631] to-[#171a22] px-6 text-center shadow-2xl shadow-black/40">
                  <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#a9ef5b]/40 bg-[#75D500]/10 text-4xl font-bold tracking-tight text-[#a9ef5b]">
                    RN
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
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#75D500]/30 bg-[#75D500]/10 px-4 py-2 text-sm font-medium text-[#a9ef5b]">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#75D500]" />
              Open to collaboration
            </p>
            <h1 id="intro-title" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Rhenald Nainggolan
            </h1>
            <p className="mt-3 text-2xl font-semibold text-[#90e52d] sm:text-3xl">
              Software Engineer
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Informatics Engineering graduate from Universitas Katolik Santo Thomas. I build web
              applications and backend systems, and I enjoy solving practical problems with
              software, thoughtful interfaces, and data.
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
            </div>
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

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#20242e]/90 p-6 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-8"
              >
                <p className="text-sm font-medium text-[#a9ef5b]">
                  Project 0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
                <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 w-fit font-medium text-white underline decoration-[#75D500] underline-offset-4 hover:text-[#a9ef5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9ef5b]"
                >
                  View source <span aria-hidden="true">↗</span>
                  <span className="sr-only"> for {project.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-7 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Rhenald Nainggolan · Built with Next.js</p>
        </footer>
      </div>
    </main>
  );
}

