import React from "react";
import chandandp2 from "../assets/chandandp2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 px-6 md:px-20 pb-20 flex flex-col items-center bg-gray-900 text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center">About Me</h2>

      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full mt-12">
        
        {/* Left - Text Content */}
        <div className="w-full md:w-[60%] text-lg leading-8 text-gray-300 text-center md:text-left">
      <p>
  Hello, my name is <strong>Chandan Kumar</strong>. I am a Software Engineer
  specializing in MERN Stack development with experience building scalable
  full-stack applications using MongoDB, Express.js, React.js, and Node.js.

  I completed my <strong>B.Tech in Information Technology</strong> from{" "}
  <strong>Dr. Ram Manohar Lohia Awadh University, Ayodhya</strong> and received
  industrial training in MERN Stack Development from{" "}
  <strong>Ducat, Noida</strong>.

  I gained industry experience through a 6-month internship at{" "}
  <strong>Tech Mahindra</strong>, where I worked on full-stack web development,
  API integration, authentication systems, and software development best
  practices.

  Currently, I work as a <strong>Software Engineer (MERN)</strong> at{" "}
  <strong>Alice's Tech Solutions</strong>, developing business applications,
  HRM systems, RESTful APIs, and responsive web interfaces. I am passionate
  about creating efficient, secure, and user-friendly software while
  continuously learning modern technologies and industry best practices.
</p>
        </div>

{/* Right - Profile Image with Hover Effect */}
<div className="md:w-1/3 flex justify-center">
  <img
    src={chandandp2}
    alt="Chandan Kumar"
    className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]"
  />
</div>


      </div>
    </section>
  );
}
