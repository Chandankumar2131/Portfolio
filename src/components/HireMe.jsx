import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const packages = [
  {
    title: "UI Implementation Sprint",
    price: "$100",
    time: "2 days",
    points: [
      "Pixel-aligned responsive page or feature build",
      "Reusable React components with Tailwind styling",
      "Clean code structure with basic interaction states",
    ],
  },
  {
    title: "Frontend Application Build",
    price: "$300",
    time: "5 days",
    points: [
      "Multi-page React frontend with routed views",
      "API-ready component architecture and state flow",
      "Responsive layouts, form handling, and UI polish",
    ],
  },
  {
    title: "Full Stack Website",
    price: "$600",
    time: "10 days",
    points: [
      "Complete website with user-friendly pages, forms, and admin-ready features",
      "React frontend with Node.js, Express.js, and MongoDB backend",
      "MongoDB models, REST APIs, auth, and protected routes",
    ],
  },
];

export default function HireMe() {
  return (
    <section
      id="hire-me"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Freelance work
          </p>
          <h2 className="text-4xl font-bold md:text-6xl">
            Hire Me for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Professional development support for responsive interfaces,
            production-ready React builds, API integrations, and complete MERN
            stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
              className="flex rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="flex w-full flex-col">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Delivery: {item.time}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-5xl font-black text-white">
                  {item.price}
                </p>

                <ul className="my-8 space-y-3 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:chandansinghrkt123@gmail.com?subject=Freelance inquiry - ${item.title}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaPaperPlane /> Hire Me
                </a>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
