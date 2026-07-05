import React from "react";
import { motion as Motion } from "framer-motion";

export default function SkillGroup({ title, description, accent, skills }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-md transition duration-300 hover:border-cyan-400/35 md:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${accent}`} />
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
          {skills.length} Skills
        </span>
      </div>

      <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <Motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-lg transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-3xl">
              {skill.icon}
            </div>
            <div className="min-w-0 text-left">
              <p className="font-semibold text-slate-100">{skill.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                Technology
              </p>
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
}
