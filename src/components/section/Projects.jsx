import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaEye} from 'react-icons/fa'
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

            <div className='flex justify-between items-center'>
              <a href="https://github.com/ch4rm78/Browser-Extension-for-detecting-phishing-attacks-using-LLMs">
                <FaGithub className='w-10 h-10 mt-3'/><br />
                <h3 className='font-bold'>Github</h3>
              </a>
            </div>


              {/* web scraper */}
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>Web Crawler</h3>
            <p className='text-gray-400 mb-4'>A Python-powered web crawler designed to automate the process of scanning a list of URLs, 
              extracting valid email addresses, and compiling them into a structured format. It helps save time and effort by streamlining 
              data collection for outreach, research, or lead generation.</p>
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
                <FaGithub className='w-10 h-10 mt-3'/><br />
                <h3 className='font-bold'>Github</h3>
              </a>
            </div>
          </div>
          
          {/* Robotic arm */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>Color Sorting Robotic Arm</h3>
            <p className='text-gray-400 mb-4'>A robotic arm system powered by machine learning that identifies and sorts items based on their colors. Using sensors and a camera for detection, 
              the arm automatically classifies objects and places them into the correct containers, demonstrating intelligent automation and efficient object handling.</p>
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
                <FaGithub className='w-10 h-10 mt-3'/><br />
                <h3 className='font-bold'>Github</h3>
              </a>
            </div>
          </div>

           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>A Movie Search App</h3>
            <p className='text-gray-400 mb-4'>A sleek, responsive React application that leverages the TMDB API to help users discover and search for movies. 
              Built with modern React practices and Vite for optimal performance.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['React Js', 'API', "Tailwind", "Node.js"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex justify-between'>
              <a href="https://github.com/ch4rm78/discover-movies">
                <FaGithub className='w-10 h-10 mt-3'/><br />
              <h3 className='font-bold'>Github</h3>
              </a>
              <a className="" href="https://ch4rm78.github.io/discover-movies">
                <FaEye className='ml-2.5 w-10 h-10 mt-3'/><br />
                <h3 className='font-bold'>Preview</h3>
              </a>

            </div>
          </div>

           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className='text-xl font-bold mb-2'>Job Seekers Platform</h3>
            <p className='text-gray-400 mb-4'>A job seekers platform that bridges the gap between candidates and employers by providing a simple and effective way to connect. 
              It enables job seekers to showcase their skills, discover opportunities tailored to their profiles, 
              and directly engage with potential employers, while also giving organizations access to qualified talent.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['React Js', 'Supabase', "Tailwind", "Node.js"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex justify-between items-center'>
              <h3>In Progress...</h3>
            </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects