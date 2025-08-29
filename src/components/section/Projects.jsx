import React from 'react'
import {FaGithub} from 'react-icons/fa'
import RevealOnScroll from '../RevealOnScroll'


const Projects = () => {
  return (
    <section id="projects" className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className='text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text'>
                Projects
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>Browser Extension For Detecting Phishing Attacks</h3>
            <p className='text-gray-400 mb-4'>A browser extension that detects and flags potential phishing websites in real time using LLMs, 
              helping users browse safely and avoid online threats</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['HTML', 'JavaScript','Python', 'Node.js', 'Flask', "Google Gemini API"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>

            <div className=''>
              <a href="https://github.com/ch4rm78/Browser-Extension-for-detecting-phishing-attacks-using-LLMs">
                <FaGithub className='w-10 h-10 mt-3'/>
              </a>
            </div>

          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>Web Crawler</h3>
            <p className='text-gray-400 mb-4'>A browser extension that detects and flags potential phishing websites in real time using LLMs, 
              helping users browse safely and avoid online threats</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['Python', 'Flask', "Scrapy"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex justify-between items-center'>
              <a href="https://github.com/ch4rm78/python-web-crawler">
                <FaGithub className='w-10 h-10 mt-3'/>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>Color Sorting Robotic Arm</h3>
            <p className='text-gray-400 mb-4'>A browser extension that detects and flags potential phishing websites in real time using LLMs, 
              helping users browse safely and avoid online threats</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['Python', 'Arduino Uno', "OpenCV", "C++"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex justify-between items-center'>
              <a href="https://github.com/ch4rm78/3dof-Robotic-arm-to-sort-items-based-on-color">
                <FaGithub className='w-10 h-10 mt-3'/>
              </a>
            </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects