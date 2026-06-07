import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 min-h-screen pt-24 bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hi, I'm Chandan Kumar{" "}
        <span className="inline-block animate-wave">👋</span>
      </h1>

      <img
        src="/memoji.png"
        alt="Chandan Kumar"
        className="w-40 h-40 sm:w-48 sm:h-48 mb-6"
      />

      <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-2">
        Software Engineer (MERN)
      </h2>

      <h3 className="text-lg sm:text-xl text-gray-300 mb-6">
        Full Stack Developer | React.js | Node.js | MongoDB
      </h3>

      <p className="max-w-2xl text-gray-400 text-sm sm:text-base leading-7">
        Software Engineer with experience in building scalable full-stack web
        applications using the MERN stack. Skilled in developing secure REST
        APIs, authentication systems, business applications, and responsive user
        interfaces. Currently focused on developing productivity and HRM
        solutions while continuously learning modern software engineering
        practices.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300"
        >
          View Projects
        </a>

        <a
          href="/CHANDAN_KUMAR_RESUME.pdf"
          download="Chandan_Kumar_Resume.pdf"
          className="px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}