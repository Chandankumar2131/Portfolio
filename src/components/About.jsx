import React from "react";
import chandandp2 from "../assets/chandandp2.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen px-6 md:px-20 py-20 flex flex-col items-center bg-[#0e0e0e] text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center">About Me</h2>

      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full mt-12">
        
        {/* Left - Text Content */}
        <div className="w-full md:w-[60%] text-lg leading-8 text-gray-300 text-center md:text-left">
          <p>
            Hello, My name is <strong>Chandan Kumar</strong>. I’m a passionate MERN stack developer with a solid understanding of web technologies and a love for crafting seamless user experiences.
            <br /><br />
            I have completed my <strong>B.Tech in Information Technology</strong> from <strong>Dr. Ram Manohar Lohia Awadh University, Ayodhya</strong>.
          
            I’ve undergone <strong>MERN Stack training at Ducat</strong>, where I strengthened my skills in MongoDB, Express.js, React.js, and Node.js. So I have a hands on experience with technologies like HTML, CSS, Javascript and frameworks like React, React, Next.js, Apart from this I have a good hands on backend technologies like Node.js, Express.js, Databases like SqLite, MongoDB and also worked a lot with BAAS (Firebase and Supabase), For computer science fundamentals
            <br /><br />
            I enjoy working on real-world projects and continuously learning about backend systems, frontend design, data structures, and solving problems efficiently.
            <br /><br />
            I aim to build not just functional apps but also aesthetically pleasing and user-friendly interfaces for an intuitive digital experience.
          </p>
        </div>

        {/* Right - Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={chandandp2}
            alt="Chandan Kumar"
            className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
