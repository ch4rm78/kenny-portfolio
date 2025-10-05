import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ];
  const backendSkills = [
    "Python",
    "Django",
    "Flask",
    "Node.js",
    "Express.js",
    "TypeScript",
    "BaaS",
    "RESTful APIs",
    "Databases",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30">
            <p className="text-lg text-gray-300 mb-6">
              A Full Stack Developer passionate about building scalable web
              applications, creating efficient Python scripts, and delivering
              modern solutions through backend and frontend development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 broder hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="">
                  <strong>B.Sc Software Engineering</strong> - Veritas
                  University (4.14/5.0 CGPA)
                </li>
                <strong>Relevant Coursework:</strong> User Experience Design and
                Evaluation, Introduction to Web Technologies, Web Application
                Development, Datbase Systems,Data Structures and Algorithms,
                Soware Testing & Quality Assurance
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 broder hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong className="font-bold">
                        Head Of IT Operations at Ages 'n' Stages Feb 2020 - Jun
                        2022
                      </strong>
                    </li>
                    <p>
                      Managed and optimized IT operations for the e-commerce
                      platform, ensuring seamless customer experiences and
                      efficient operations.
                    </p>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong className="font-bold">
                        Quality Assurance Engineer (Intern) at Hasob Integrated
                        Services Jul 2023 - Oct 2023
                      </strong>
                    </li>

                    <p>
                      Worked on the developing, testing and reviewing software
                      to ensure functionality, usability, and overall quality
                      before release.
                    </p>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong className="font-bold">
                        Full Stack Developer for Startup (Docs By Proxy) Aug
                        2025 - Present
                      </strong>
                    </li>
                    <p>
                      Implemented a fully functional escrow system with Paystack
                      to protect clients and contractors from fraud and ensure a
                      smooth transaction process. I also implemented systems for
                      user onboarding and management.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
