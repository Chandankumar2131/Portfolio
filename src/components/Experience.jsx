import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "MERN Stack Trainee",
      type: "Internship",
      company: "Ducat, Noida",
      duration: "May 2024 – Mar 2025",
      tasks: [
        "Completed 10-month industrial training in MERN stack.",
        "Built real-world apps using MongoDB, Express, React, Node.",
        "Practiced REST APIs, CRUD operations, authentication, and middleware.",
        "Strengthened debugging, testing, performance optimization, and deployment workflows.",
      ],
      stack: ["MongoDB", "Express.js", "React", "Node.js", "Git", "Postman"],
    },

    {
      title: "Personal Projects",
      type: "Self-driven",
      company: "Remote",
      duration: "Ongoing",
      tasks: [
        "Built a production-grade EdTech platform with JWT auth, role-based access, course creation, Cloudinary uploads, and Razorpay payments.",
        "Added real-time email notifications (Nodemailer) for signup, purchase confirmation, and password reset flow.",
        "Developed a Pagination Web App with optimized API calls, dynamic page navigation, and global state handling using Redux Toolkit.",
        "Created a modern personal portfolio website deployed on Vercel showcasing projects, skills, and experience.",
        "Developed complete apps including a Blog App, E-Commerce App, and News App with API integration and responsive UI.",
        "Applied performance optimization, clean folder structure, reusable components, version control, and deployment best practices.",
      ],
      stack: [
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen px-6 py-20 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-16 text-center text-green-400">
        Experience
      </h2>

      <div className="w-full max-w-5xl space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-[#2e2e2e] p-6 md:p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(34,197,94,0.3)] hover:border-green-500"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-green-400">
                <span>💼</span> {exp.title}{" "}
                <span className="text-sm font-normal text-gray-400 ml-2">
                  - {exp.type}
                </span>
              </h3>
              <p className="text-gray-400 mt-1">
                {exp.company} | <span>{exp.duration}</span>
              </p>
            </div>

            <ul className="list-none space-y-2 mb-5 text-gray-300">
              {exp.tasks.map((task, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-green-900/10 text-green-300 border border-green-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
