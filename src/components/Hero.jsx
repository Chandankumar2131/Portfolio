import React from "react";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const techStack = [
    { name: "React.js", accent: "from-cyan-400/18 to-blue-400/10" },
    { name: "Node.js", accent: "from-emerald-400/18 to-green-400/10" },
    { name: "Express.js", accent: "from-slate-300/14 to-slate-500/8" },
    { name: "MongoDB", accent: "from-green-400/18 to-emerald-500/10" },
    { name: "JavaScript", accent: "from-yellow-300/18 to-amber-400/10" },
    { name: "TypeScript", accent: "from-blue-400/18 to-sky-500/10" },
    { name: "Redux", accent: "from-purple-400/18 to-violet-500/10" },
    { name: "Tailwind CSS", accent: "from-cyan-300/18 to-teal-400/10" },
    { name: "JWT", accent: "from-pink-400/16 to-purple-400/10" },
    { name: "REST APIs", accent: "from-orange-300/16 to-cyan-400/10" },
    { name: "AWS", accent: "from-orange-400/18 to-yellow-400/10" },
    { name: "Docker", accent: "from-sky-400/18 to-blue-500/10" },
    { name: "Git", accent: "from-red-400/16 to-orange-400/10" },
    { name: "Postman", accent: "from-orange-400/18 to-red-400/10" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-32 pb-20 text-white md:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <p className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Hi, I&apos;m Chandan Kumar{" "}
            <span className="inline-block animate-wave">{"\u{1F44B}"}</span>
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Building modern{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              full-stack
            </span>{" "}
            web applications.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0">
            I am a MERN Stack Developer focused on building production-ready
            web applications with scalable React interfaces, secure REST APIs,
            authentication, database-driven workflows, third-party integrations,
            and cloud-ready deployment practices.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              View Projects <FaArrowRight />
            </a>
            <a
              href="/CHANDAN_KUMAR_RESUME.pdf"
              download="Chandan_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-7 py-3 text-sm font-bold text-cyan-200 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/Chandankumar2131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-kumar-19748a228/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[390px]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/10 blur-3xl" />
            <div className="absolute -right-4 top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="absolute -bottom-5 left-8 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="group relative overflow-hidden rounded-[2.25rem] border border-cyan-300/15 bg-gradient-to-br from-white/[0.06] via-cyan-950/20 to-slate-950/85 p-5 text-center shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-[0_0_42px_rgba(34,211,238,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_42%)] opacity-70" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Available
                </span>
                <span className="h-3 w-3 rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(103,232,249,0.45)]" />
              </div>

              <div className="relative mx-auto mt-14 flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/15 bg-slate-950/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 group-hover:scale-105">
                <div className="absolute inset-4 rounded-full bg-cyan-400/5 blur-xl" />
                <img
                  src="/memoji.png"
                  alt="Chandan Kumar avatar"
                  className="relative h-36 w-36 object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className="relative mt-8">
                <h2 className="text-3xl font-black text-white">
                  Chandan Kumar
                </h2>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Software Developer (MERN)
                </p>
              </div>

              <div className="relative mt-6 rounded-3xl border border-white/10 bg-slate-950/45 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Core Stack
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-br ${tech.accent} px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:text-white hover:shadow-[0_0_16px_rgba(34,211,238,0.1)]`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                    {tech.name}
                  </span>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
