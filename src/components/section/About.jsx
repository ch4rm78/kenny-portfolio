import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {

    const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"]
    const backendSkills = ["Python", "Django", "Flask", "Node.js", "Express.js", "Supabase"]

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 text-transparent bg-clip-text'>
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30">
                <p className='text-lg text-gray-300 mb-6'>A Full Stack Developer passionate about building scalable web applications,
                    creating efficient Python scripts, and delivering modern solutions through backend and frontend development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((skill, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                </span>
                                
                            ))}
                        </div>
                        
                    </div>
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className='text-xl font-bold mb-4'>Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((skill, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                </span>
                                
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className="p-6 rounded-xl border-white/10 broder hover:-translate-y-1 transition-all">
                    <h3 className='text-xl font-bold mb-4'>Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li className="">
                            <strong>B.Sc Scoftware Engineering</strong> - Veritas University (2021-2025)
                        </li>
                        <li>
                            Relevant Coursework: User Experience Design and Evaluation,
                            Introduction to Web Technologies, Web Application Development, Datbase Systems,Data Structures and Algorithms,
                            Soware Testing & Quality Assurance
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 broder hover:-translate-y-1 transition-all">
                    <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className='font-semibold'>Head Of IT Operations at Ages 'n' Stages 2020 - 2022</h4>
                            <p>Managed and optimized IT operations for the e-commerce platform, ensuring seamless customer experiences and
                                efficient operations.
                            </p>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Quality Assurance Engineer (Intern) at Hasob Integrated Services 2023 - 2023</h4>
                            <p>Worked on the developing, testing and reviewing software to ensure functionality, usability, and overall quality before release.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About