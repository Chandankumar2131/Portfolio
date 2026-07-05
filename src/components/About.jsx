import React from "react";
import chandandp2 from "../assets/chandandp2.jpg";

export default function About() {
  const focusCards = [
    {
      title: "Product Engineering",
      description:
        "Building reliable full-stack features with clean structure, reusable UI, and maintainable backend services.",
    },
    {
      title: "Secure Development",
      description:
        "Designing features with authentication, authorization, validation, and reliable data handling for production-ready applications.",
    },
    {
      title: "Professional Delivery",
      description:
        "Contributing with disciplined debugging, API integration, responsive interfaces, documentation awareness, and steady improvement.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            I design and develop modern web applications that solve real
            business problems with clean interfaces, secure APIs, and scalable
            full-stack architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h3 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
              Hi, I am Chandan Kumar.
              <br />
              I build practical, secure, and user-focused web applications.
            </h3>

            <div className="space-y-6 text-base leading-8 text-slate-300 md:text-lg">
              <p>
                I am a{" "}
                <span className="font-semibold text-white">
                  Software Developer at Alice&apos;s Tech Solutions
                </span>
                , specializing in the MERN stack, focused on creating scalable web applications with thoughtful
                architecture, secure API design, responsive user interfaces, and
                dependable backend workflows.
              </p>
              <p>
                In my current role at{" "}
                <span className="font-semibold text-white">
                  Alice&apos;s Tech Solutions
                </span>
                , I contribute to production-level business applications by
                developing scalable frontend experiences, integrating backend
                services, improving application reliability, and supporting
                secure full-stack workflows.
              </p>
              <p>
                My professional foundation includes a{" "}
                <span className="font-semibold text-white">
                  full-stack internship at Tech Mahindra
                </span>
                , formal training in MERN stack development from{" "}
                <span className="font-semibold text-white">Ducat, Noida</span>,
                and a{" "}
                <span className="font-semibold text-white">
                  B.Tech in Information Technology
                </span>{" "}
                from Dr. Ram Manohar Lohia Awadh University, Ayodhya.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {focusCards.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pt-16">
            <div className="relative w-full max-w-[370px] sm:max-w-[400px]">
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-r from-cyan-400/35 via-blue-500/20 to-cyan-400/35 blur-xl opacity-50" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-cyan-400/10 p-4 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-cyan-400/20 bg-slate-900">
                  <img
                    src={chandandp2}
                    alt="Chandan Kumar"
                    className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
