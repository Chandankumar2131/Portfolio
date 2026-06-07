import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer (MERN)",
      type: "Full-Time",
      company: "Alice's Tech Solutions",
      duration: "Jun 2026 – Present",
      tasks: [
        "Developing and maintaining scalable MERN stack applications for business clients.",
        "Designing and implementing secure authentication and authorization systems using JWT.",
        "Building productivity and HRM solutions with attendance tracking, leave management, employee monitoring, and reporting modules.",
        "Creating responsive and user-friendly interfaces using React.js and modern frontend development practices.",
        "Developing RESTful APIs, managing MongoDB databases, and optimizing application performance.",
        "Collaborating on deployment, bug fixing, feature enhancements, and system maintenance.",
      ],
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux Toolkit",
        "JWT",
        "Git",
        "Postman",
        "Vercel",
      ],
    },

    {
      title: "MERN Stack Intern",
      type: "Internship",
      company: "Tech Mahindra",
      duration: "Dec 2025 – May 2026",
      tasks: [
        "Worked on full-stack web application development using the MERN stack.",
        "Developed and integrated REST APIs for seamless frontend-backend communication.",
        "Implemented authentication, authorization, and role-based access control using JWT.",
        "Collaborated with development teams using Git and industry-standard workflows.",
        "Participated in debugging, testing, code reviews, and performance optimization.",
        "Gained hands-on experience with real-world software development and deployment processes.",
      ],
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Git",
        "Postman",
      ],
    },

    {
      title: "MERN Stack Trainee",
      type: "Industrial Training",
      company: "Ducat, Noida",
      duration: "May 2024 – Mar 2025",
      tasks: [
        "Completed 10-month industrial training in MERN stack development.",
        "Built real-world applications using MongoDB, Express.js, React.js, and Node.js.",
        "Practiced REST APIs, CRUD operations, authentication, middleware, and database integration.",
        "Strengthened debugging, testing, performance optimization, and deployment workflows.",
      ],
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Git",
        "Postman",
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
                <span>💼</span> {exp.title}
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