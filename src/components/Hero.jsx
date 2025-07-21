import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 min-h-screen pt-24 bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hi, I'm Chandan Kumar! <span className="inline-block animate-wave">👋</span>
      </h1>

      <img
        src="/memoji.png" // Replace with your image name in the public folder
        alt="Chandan's Memoji"
        className="w-40 h-40 sm:w-48 sm:h-48 mb-6"
      />

      <h2 className="text-xl sm:text-2xl font-semibold">Software Engineer</h2>
      <h3 className="text-md sm:text-lg mb-4 text-gray-300">Full Stack (MERN) Developer</h3>

      <p className="max-w-xl text-gray-400 text-sm sm:text-base">
        Welcome to my personal portfolio! <br />
        A passionate software engineer with a knack for building applications with utmost efficiency.
      </p>
    </section>
  );
}
