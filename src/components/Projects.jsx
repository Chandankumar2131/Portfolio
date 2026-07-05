import React from "react";
import { motion as Motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import StudyNotionClone from "../assets/StudyNotionClone.png";
import Pagination from "../assets/Pagination.png";
import CourseCraft from "../assets/CourseCraft.png";
import WeatherWise from "../assets/WeatherWise.png";
import PokemonApp from "../assets/PokemonApp.png";
import ToursApp from "../assets/ToursApp.png";
import EdTech from "../assets/EdTech.png";
import AlicesHRM from "../assets/AlicesHRM.svg";

const projects = [
  {
    title: "Alice's Tech Solutions HRM",
    description:
      "Complete HRM workforce portal with role-based access, attendance, leave approvals, payroll, salary management, reports, and internal chat.",
    image: AlicesHRM,
    liveLink: "https://hrm.alicestechsolutions.com/login",
    codeLink: "https://github.com/Chandankumar2131/Alices-Technology",
    tags: ["MERN", "HRM", "RBAC"],
  },
  {
    title: "Ed.Tech Education Platform",
    description:
      "MERN education platform where users can browse courses, enroll, and manage their learning journey.",
    image: EdTech,
    liveLink: "https://ed-tech-frontend-sigma-seven.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/EdTech_Frontend",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "StudyNotion Clone",
    description:
      "Full-stack ed-tech clone with course browsing, enrollment, and learning management features.",
    image: StudyNotionClone,
    liveLink: "https://study-notion-clone-alpha.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/study-notion-clone",
    tags: ["MERN", "Auth", "Courses"],
  },
  {
    title: "Pagination Post App",
    description:
      "React app that loads and displays posts with clean pagination and Context API state handling.",
    image: Pagination,
    liveLink: "https://pagination-post.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/post-pagination",
    tags: ["React", "Context API"],
  },
  {
    title: "Pokemon App",
    description:
      "Interactive Pokemon explorer for browsing, searching, and viewing detailed Pokemon data.",
    image: PokemonApp,
    liveLink: "https://pokemon-app-smoky-theta.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/pokemon-app",
    tags: ["React", "API"],
  },
  {
    title: "WeatherWise App",
    description:
      "Responsive weather app using OpenWeatherMap API with clean forecast views and theme support.",
    image: WeatherWise,
    liveLink: "https://weather-wise-omega.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/weather-app",
    tags: ["React", "Weather API"],
  },
  {
    title: "CourseCraft App",
    description:
      "Course management and showcase platform crafted with React and Tailwind CSS.",
    image: CourseCraft,
    liveLink: "http://course-craft-sable.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/course-craft",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Tours App",
    description:
      "React app that displays a list of tours with dynamic remove and refresh interactions.",
    image: ToursApp,
    liveLink: "https://tours-app-eight.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/tours-app",
    tags: ["React", "UI"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Selected work
          </p>
          <h2 className="text-4xl font-bold md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <div className="ml-2 h-5 flex-1 rounded-full border border-white/10 bg-white/[0.04]" />
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-cyan-400/10 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%)]" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                </div>
              </div>

              <div className="flex min-h-[260px] flex-col px-2 pb-2 pt-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/10"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
