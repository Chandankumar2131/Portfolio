import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
<Footer/>
      {/* <section id="about" className="min-h-screen pt-24 bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Me</h2>
      </section>

      <section id="experience" className="min-h-screen pt-24 bg-gray-800 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Experience</h2>
      </section>

      <section id="projects" className="min-h-screen pt-24 bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>

      <section id="skills" className="min-h-screen pt-24 bg-gray-800 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Skills</h2>
      </section>

      <section id="contact" className="min-h-screen pt-24 bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Contact</h2>
      </section> */}
    </>
  );
}
