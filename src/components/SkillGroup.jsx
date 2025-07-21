import React from "react";
import { motion } from "framer-motion";

export default function SkillGroup({ title, skills }) {
  const isLessThanEight = skills.length < 8;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>

      {isLessThanEight ? (
        // FLEX layout for <8 skills (centered)
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#1c1c1c] p-4 rounded-xl shadow-md hover:bg-[#2a2a2a] transition duration-300 w-28"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-center text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      ) : (
        // GRID layout for >=8 skills
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#1c1c1c] p-4 rounded-xl shadow-md hover:bg-[#2a2a2a] transition duration-300 w-full"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-center text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
