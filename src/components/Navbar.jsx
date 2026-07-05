import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaChevronDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Hire Me", to: "hire-me" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:chandansinghrkt123@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Chandankumar2131",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chandan-kumar-19748a228/",
    icon: <FaLinkedin />,
  },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 text-white shadow-2xl backdrop-blur-xl">
      <nav className="flex w-full items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="hero"
          smooth
          duration={500}
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
          className="cursor-pointer bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.18)] transition hover:from-cyan-200 hover:to-white md:text-4xl"
        >
          Chandan Kumar
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer text-slate-200 transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((value) => !value)}
              className="flex items-center gap-2 text-slate-200 transition hover:text-cyan-300"
            >
              Socials <FaChevronDown className="text-xs" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>

        <button
          className="text-2xl text-slate-200 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer text-slate-200 transition hover:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
