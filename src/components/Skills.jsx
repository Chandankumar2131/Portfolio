// components/Skills.jsx
import React from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5,
  SiTailwindcss, SiVite, SiPrettier, SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase, SiCplusplus, SiGit, SiVscodium,
  SiPostman, SiAndroidstudio
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SkillGroup from "./SkillGroup"; // new import

export default function Skills() {
  const frontend = [
    { name: "React.js", icon: <SiReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Prettier", icon: <SiPrettier className="text-pink-400" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
  ];

  const languages = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Java", icon: <FaJava className="text-orange-500" /> },

  ];

  const tools = [
    { name: "VS Code", icon: <SiVscodium className="text-blue-500" /> },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gray-900 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>

      <div className="space-y-16">
        <SkillGroup title="Frontend Development" skills={frontend} />
        <SkillGroup title="Backend Development" skills={backend} />
        <SkillGroup title="Languages" skills={languages} />
        <SkillGroup title="Tools & Environment" skills={tools} />
      </div>
    </section>
  );
}
