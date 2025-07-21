import React from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5,
  SiTailwindcss, SiVite, SiPrettier, SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase, SiCplusplus, SiGit, SiVscodium,
  SiPostman, SiAndroidstudio
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

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
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <SiVscodium className="text-blue-500" /> },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  ];

  return (
    <section id="skills" className="bg-[#0e0e0e] text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      <div className="space-y-14">
        {/* Frontend */}
        <SkillGroup title="Frontend Development" skills={frontend} />

        {/* Backend */}
        <SkillGroup title="Backend Development" skills={backend} />

        {/* Languages */}
        <SkillGroup title="Languages" skills={languages} />

        {/* Tools & Environment */}
        <SkillGroup title="Tools & Environment" skills={tools} />
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#1c1c1c] p-4 rounded-xl shadow-md hover:bg-[#2a2a2a] transition"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
