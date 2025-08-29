import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-700 to-cyan-400 text-transparent bg-clip-text'>
          Hi, I'm Kenny
        </h1>
        <p className='text-lg text-gray-400 mb-8 max-w-lg mx-auto'>
          A Full Stack Developer skilled in backend and frontend web development. 
          I create efficient Python scripts, build responsive web applications, and integrate Backend-as-a-Service (BaaS) solutions to deliver scalable, modern web apps. 
          I’m passionate about solving real-world problems through technology and growing my expertise in full-stack development.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,139,246,0.4)]'>
            View Projects
          </a>
          <a href="#contact" className='border border-cyan-600/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200
                                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,139,246,0.2)] hover:bg-blue-500/10'>
            Contact
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home