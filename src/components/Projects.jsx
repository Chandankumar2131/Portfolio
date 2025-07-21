import React from "react";
import StudyNotionClone from "../assets/StudyNotionClone.png";
import Pagination from "../assets/Pagination.png";
import CourseCraft from "../assets/CourseCraft.png";
import WeatherWise from "../assets/WeatherWise.png";
import PokemonApp from "../assets/PokemonApp.png";
import ToursApp from "../assets/ToursApp.png";

const projects = [
  {
    title: "StudyNotion Clone",
    description:
      "A full-stack ed-tech platform clone built with MERN stack. Users can browse, enroll, and manage online courses.",
    image: StudyNotionClone,
    liveLink: "https://study-notion-clone-alpha.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/study-notion-clone",
  },
  {
    title: "Pagination Post App",
    description:
      "A React app with pagination that loads and displays posts using Context API.",
    image: Pagination,
    liveLink: "https://pagination-post.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/post-pagination",
  },
  {
    title: "Pokemon App",
    description:
      "A fun and interactive Pokemon explorer built with React. Browse, search, and view detailed Pokemon data.",
    image: PokemonApp,
    liveLink: "https://pokemon-app-smoky-theta.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/pokemon-app",
  },
  {
    title: "WeatherWise App",
    description:
      "A responsive weather forecasting web app using OpenWeatherMap API with dark/light theme support.",
    image: WeatherWise,
    liveLink: "https://weather-wise-omega.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/weather-app",
  },
  {
    title: "CourseCraft App",
    description:
      "An intuitive platform for managing and showcasing courses, crafted with React and Tailwind CSS.",
    image: CourseCraft,
    liveLink: "http://course-craft-sable.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/course-craft",
  },
  {
    title: "Tours App",
    description:
      "A beautiful React app that displays a list of tours with option to remove each tour dynamically.",
    image: ToursApp,
    liveLink: "https://tours-app-eight.vercel.app/",
    codeLink: "https://github.com/Chandankumar2131/tours-app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-16">Projects</h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] border border-[#333] rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  🔗 Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
