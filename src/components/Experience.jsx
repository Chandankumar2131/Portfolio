import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer (MERN)",
      type: "Full-Time",
      company: "Alice's Tech Solutions",
      duration: "Jun 2026 - Present",
      tasks: [
        "Developing production-level MERN stack applications for business and operational workflows.",
        "Contributing to enterprise web platforms by building scalable features, reusable components, and reliable backend services.",
        "Creating secure REST APIs, JWT authentication, protected routes, role-based access, and third-party integrations.",
        "Improving responsive React interfaces, application performance, deployment readiness, and overall system reliability.",
      ],
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux Toolkit",
        "JWT",
        "AWS",
        "Docker",
        "Nginx",
        "Razorpay",
        "Cloudinary",
        "CI/CD",
        "Git",
        "Postman",
      ],
    },
    {
      title: "MERN Stack Intern",
      type: "Internship",
      company: "Tech Mahindra",
      duration: "Dec 2025 - May 2026",
      tasks: [
        "Gained hands-on experience in full-stack application development using the MERN stack.",
        "Worked with REST API integration, frontend-backend communication, and reusable React component patterns.",
        "Practiced authentication, authorization, debugging, testing, and deployment-oriented development workflows.",
        "Collaborated in a professional engineering environment using Git, Postman, issue tracking, and code review practices.",
      ],
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "REST APIs",
        "Git",
        "Postman",
      ],
    },
    {
      title: "MERN Stack Trainee",
      type: "Industrial Training",
      company: "Ducat, Noida",
      duration: "May 2024 - Mar 2025",
      tasks: [
        "Completed structured industrial training focused on MERN stack fundamentals and full-stack project development.",
        "Built application modules using React.js, Node.js, Express.js, MongoDB, CRUD operations, routing, middleware, and API integration.",
        "Strengthened JavaScript fundamentals, backend architecture, database connectivity, debugging, and deployment basics.",
        "Practiced building responsive interfaces and connecting frontend views with backend services through REST APIs.",
      ],
      stack: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Career journey
          </p>
          <h2 className="text-4xl font-bold md:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10 md:p-8"
            >
              <div className="absolute left-6 top-8 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-300 md:flex">
                0{index + 1}
              </div>

              <div className="md:pl-20">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                      {exp.type}
                    </p>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-slate-400">
                      {exp.company} | {exp.duration}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 text-slate-300 md:grid-cols-2">
                  {exp.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-cyan-300" />
                      <span className="leading-7">{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
