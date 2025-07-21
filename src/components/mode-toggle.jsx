import React from "react";
import ModeToggle from "@/components/mode-toggle"; // ✅ Correct import for default export

export default function Navbar() {
  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">
          My Portfolio
        </h1>

        <ul className="flex gap-6 text-zinc-800 dark:text-zinc-200 font-medium">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        <ModeToggle />
      </nav>
    </header>
  );
}
