import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaChevronDown, FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-6">
        {/* Left - Name */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl sm:text-3xl font-signature cursor-pointer hover:text-teal-400 transition"
        >
          Chandan Kumar
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-base font-medium items-center">
          <li>
            <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-400">Experience</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-400">Skills</Link>
          </li>

          {/* Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 hover:text-gray-400 focus:outline-none"
            >
              <span>Socials</span>
              <FaChevronDown className="text-xs mt-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded-md shadow-lg z-50 border border-gray-700">
                <a href="mailto:chandansinghrkt123@gmail.com" className="flex items-center px-4 py-2 hover:bg-gray-800" target="_blank" rel="noreferrer"><FaEnvelope className="mr-2" /> Email</a>
                <a href="https://twitter.com/your-twitter-handle" className="flex items-center px-4 py-2 hover:bg-gray-800" target="_blank" rel="noreferrer"><FaTwitter className="mr-2" /> Twitter/X</a>
                <a href="https://github.com/Chandankumar2131" className="flex items-center px-4 py-2 hover:bg-gray-800" target="_blank" rel="noreferrer"><FaGithub className="mr-2" /> GitHub</a>
                <a href="https://linkedin.com/in/chandan-kumar-19748a228" className="flex items-center px-4 py-2 hover:bg-gray-800" target="_blank" rel="noreferrer"><FaLinkedin className="mr-2" /> LinkedIn</a>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-base font-medium bg-black/70 text-white">
          <li>
            <Link to="about" smooth={true} duration={500} offset={-80} className="block cursor-pointer hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-80} className="block cursor-pointer hover:text-gray-400" onClick={() => setMenuOpen(false)}>Experience</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="block cursor-pointer hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-80} className="block cursor-pointer hover:text-gray-400" onClick={() => setMenuOpen(false)}>Skills</Link>
          </li>
          <li className="pt-2 border-t border-gray-600">
            <a href="mailto:chandansinghrkt123@gmail.com" className="block py-2 hover:text-gray-400">📧 Email</a>
            <a href="https://twitter.com/your-twitter-handle" className="block py-2 hover:text-gray-400">🐦 Twitter</a>
            <a href="https://github.com/Chandankumar2131" className="block py-2 hover:text-gray-400">💻 GitHub</a>
            <a href="https://linkedin.com/in/chandan-kumar-19748a228" className="block py-2 hover:text-gray-400">🔗 LinkedIn</a>
          </li>
        </ul>
      )}
    </div>
  );
}
