import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/section/Home';
import About from './components/section/About';
import Contact from './components/section/Contact';
import Projects from './components/section/Projects';
import NotFound from './components/section/NotFound';
import LoadingScreen from "@/LoadingScreen.jsx"
import Navbar from '@/Navbar.jsx';
import MobileMenu from './components/MobileMenu';
import  Modal from '@/Modal.jsx';




function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <>
      {!isLoaded && <LoadingScreen  onComplete = {() => setIsLoaded(true)} />} 
      <div className={`min-h-screen transition-opacity duration-600 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>

    </>
  )
}

export default App
