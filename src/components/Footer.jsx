import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-center text-sm md:text-left">
          © 2026 Chandan Kumar. Built with React and Tailwind CSS.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/CHANDAN_KUMAR_RESUME.pdf"
            download="Chandan_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <HiDownload />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-kumar-19748a228/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/Chandankumar2131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
