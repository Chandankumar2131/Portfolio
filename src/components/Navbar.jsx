import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left - Name */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-3xl font-signature cursor-pointer hover:text-teal-400 transition"
        >
          Chandan Kumar
        </Link>

        {/* Right - Nav Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-gray-400"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-gray-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-gray-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
