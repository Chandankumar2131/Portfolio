import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiVscodium,
  SiPostman,
  SiRedux,
  SiJsonwebtokens,
  SiCloudflare,
  SiDocker,
  SiRedis,
} from "react-icons/si";
import { FaAws, FaCode, FaJava } from "react-icons/fa";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  const frontend = [
    { name: "React.js", icon: <SiReact className="text-cyan-300" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-slate-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-yellow-300" /> },
    { name: "REST APIs", icon: <SiExpress className="text-orange-300" /> },
    { name: "Cloudinary", icon: <SiCloudflare className="text-blue-300" /> },
    { name: "Razorpay", icon: <SiCloudflare className="text-cyan-300" /> },
    { name: "Nodemailer", icon: <SiExpress className="text-red-300" /> },
    { name: "Redis", icon: <SiRedis className="text-red-400" /> },
  ];

  const languages = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-orange-400" /> },
    { name: "C", icon: <FaCode className="text-cyan-300" /> },
  ];

  const tools = [
    { name: "Git & GitHub", icon: <SiGit className="text-red-400" /> },
    { name: "VS Code", icon: <SiVscodium className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "AWS", icon: <FaAws className="text-orange-300" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-300" /> },
    { name: "Vercel", icon: <SiNextdotjs className="text-white" /> },
    { name: "Render", icon: <SiCloudflare className="text-purple-300" /> },
    { name: "CI/CD", icon: <FaCode className="text-cyan-300" /> },
  ];

  const skillGroups = [
    {
      title: "Frontend Development",
      description:
        "Interfaces, state management, routing foundations, styling systems, and fast React-based application builds.",
      accent: "bg-cyan-300",
      skills: frontend,
    },
    {
      title: "Backend Development",
      description:
        "Server-side APIs, authentication, database handling, payment/media integrations, and production-ready service logic.",
      accent: "bg-green-300",
      skills: backend,
    },
    {
      title: "Languages",
      description:
        "Core programming languages used for building application logic, typed code, and problem-solving foundations.",
      accent: "bg-yellow-300",
      skills: languages,
    },
    {
      title: "Tools & Environment",
      description:
        "Development, testing, deployment, cloud, containers, and collaboration tools used across project workflows.",
      accent: "bg-blue-300",
      skills: tools,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.14),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Technical toolbox
          </p>
          <h2 className="text-4xl font-bold md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              description={group.description}
              accent={group.accent}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
