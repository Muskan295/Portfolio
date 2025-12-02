import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowRight } from "react-icons/fa";

function Home() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
    "Tech Innovator",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (displayText.length < roles[index].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[index].slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, index]);

  return (
    <section id="home" className="portfolio-section pt-24">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white flex flex-col space-y-7 max-w-2xl lg:max-w-xl w-full"
          >
            <p className="text-sm tracking-[4px] text-purple-300 uppercase">
              COMPUTER SCIENCE STUDENT
            </p>

            <div className="relative w-fit">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl"></div>
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="block">I'm</span>
                <motion.span 
                  className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  MUSKAN
                </motion.span>
              </h1>
            </div>

            <motion.p 
              className="text-2xl md:text-3xl font-semibold h-[38px] flex items-center text-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {displayText}
              <span className="ml-1 w-[3px] h-8 bg-purple-400 animate-blink"></span>
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I create stellar digital experiences with modern web technologies.
              <br />
              Passionate about building scalable applications that make an impact.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/muskan.pdf"
                download
                className="cta-button flex items-center gap-2 px-6 py-3"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  background: 'linear-gradient(90deg, #6A11CB, #2575FC)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  gap: '10px',
                  boxShadow: '0 5px 15px rgba(106, 17, 203, 0.4)'
                }}
              >
                <FaDownload /> Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="secondary-button flex items-center gap-2 px-6 py-3"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  background: 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  gap: '10px'
                }}
              >
                View My Work <FaArrowRight />
              </motion.a>
            </motion.div> 

            <motion.div 
              className="flex gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                className="social-icon"
                href="https://github.com/muskan295" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1.2rem',
                  textDecoration: 'none'
                }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                className="social-icon"
                href="https://www.linkedin.com/in/muskan-06b53a324" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1.2rem',
                  textDecoration: 'none'
                }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                className="social-icon"
                href="https://www.instagram.com/muskanmittal295/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1.2rem',
                  textDecoration: 'none'
                }}
              >
                <FaInstagram />
              </motion.a>
            </motion.div>

            <motion.div 
              className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-purple-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                <span className="text-sm md:text-base">Currently working on MERN projects</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm md:text-base">Open to collaborations</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full lg:w-auto lg:flex-shrink-0 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl"></div>
              
              <motion.div 
                className="relative w-full h-full rounded-full border-2 border-purple-400/30"
                animate={{ rotate: 360 }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                }}
              >
                <div className="absolute inset-6 rounded-full border border-blue-400/20"></div>
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-52 h-52 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/30">
                    <img
                      src="../../img/profile.jpg"
                      alt="Muskan - Full Stack Developer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-purple-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-blue-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="flex flex-col items-center text-gray-400 text-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <div className="mt-2 w-[1px] h-8 bg-gradient-to-b from-purple-400 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;