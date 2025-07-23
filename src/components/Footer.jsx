import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400 py-6 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side text */}
        <p className="text-sm text-center md:text-left">
          © 2025 Chandan Kumar. All rights reserved.
        </p>

        {/* Right side links */}
        <div className="flex items-center gap-6">
          <a
            href="/CHANDAN KUMAR RESUME (1).pdf"
            download
            className="flex items-center gap-1 hover:text-white transition"
          >
            <HiDownload className="text-lg" />
            <span>Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chandan-kumar-19748a228/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Chandankumar2131"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
