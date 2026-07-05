import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const packages = [
  {
    title: "Normal Project",
    price: "$100",
    time: "2 days",
    points: ["Single page or small feature", "Responsive UI", "Clean source code"],
  },
  {
    title: "Full Frontend",
    price: "$300",
    time: "5 days",
    points: ["Complete React frontend", "Responsive pages", "API-ready components"],
  },
  {
    title: "Full Stack Project",
    price: "$600",
    time: "10 days",
    points: ["Frontend + backend", "REST APIs and database", "Authentication setup"],
  },
];

export default function HireMe() {
  return (
    <section
      id="hire-me"
      className="min-h-screen px-6 py-20 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Hire Me for Freelancing</h2>
      <p className="text-gray-400 text-center max-w-2xl mb-14">
        Simple packages for small projects, frontend builds, and complete MERN stack work.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((item, index) => (
          <Motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-[#1c1c1c] border border-[#333] rounded-xl shadow-md p-6 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                {item.title}
              </h3>
              <p className="text-4xl font-bold">{item.price}</p>
              <p className="text-gray-400 mt-2">Delivery: {item.time}</p>
            </div>

            <ul className="space-y-3 text-gray-300 mb-8">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:chandansinghrkt123@gmail.com?subject=Freelance inquiry - ${item.title}`}
              className="mt-auto text-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300"
            >
              Hire Me
            </a>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
