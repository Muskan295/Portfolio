import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import ProjectForm from './pages/ProjectForm'
import SkillForm from './pages/SkillForm'
import Footer from "./components/Footer";

function Portfolio() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxBg = document.querySelector('.parallax-bg');
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


useEffect(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}, []);
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
     
      <div className="parallax-bg"></div>

      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/admin/add-project' element={<ProjectForm />} />
          <Route path='/admin/add-skill' element={<SkillForm />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  )
}

export default App