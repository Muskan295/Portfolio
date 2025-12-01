import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, 
  FaLaptopCode, 
  FaPaintBrush, 
  FaBolt, 
  FaCubes,
  FaMapMarkerAlt
} from "react-icons/fa";

function About() {
  const [activeCard, setActiveCard] = useState(0);
  const [currentFocus, setCurrentFocus] = useState(0);

  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      desc: "Building scalable MERN applications with modern architectures",
      color: "purple"
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Creating beautiful, intuitive user interfaces and experiences",
      color: "pink"
    },
    {
      icon: <FaBolt />,
      title: "Problem Solving",
      desc: "Writing optimized algorithms and efficient solutions",
      color: "blue"
    },
    {
      icon: <FaCubes />,
      title: "Project Management",
      desc: "Planning, executing and delivering projects on time",
      color: "cyan"
    }
  ];

  const focusAreas = [
    "Problem Solving",
    "MERN Stack Development",
    "UI/UX Design",
    "Performance Optimization"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFocus((prev) => (prev + 1) % focusAreas.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const colorClasses = {
    purple: "from-purple-600/20 to-purple-400/10 border-purple-500/30 text-purple-300",
    pink: "from-pink-600/20 to-pink-400/10 border-pink-500/30 text-pink-300",
    blue: "from-blue-600/20 to-blue-400/10 border-blue-500/30 text-blue-300",
    cyan: "from-cyan-600/20 to-cyan-400/10 border-cyan-500/30 text-cyan-300"
  };

  return (
    <section id="about" className="portfolio-section pt-28 pb-32">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">

        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '2.5rem',
              marginBottom: '5px',
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(90deg, #6A11CB, #2575FC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 20px rgba(106, 17, 203, 0.3)'
            }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
              <p className="text-xs tracking-wider text-purple-300">MY JOURNEY</p>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Computer Science <span className="text-gradient">Student</span> & <span className="text-gradient">Developer</span>
            </h3>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I create modern, interactive and highly scalable web applications.  
                My approach combines <span className="text-purple-300 font-medium">clean UI, smooth animations, and optimal performance</span>.
              </p>
              <p>
                Currently mastering the <span className="text-pink-300 font-medium">MERN stack</span>  
                and building real-world projects that create impact and solve problems.
              </p>
              <p>
                Passionate about learning new technologies, solving complex problems, 
                and creating digital experiences that make a difference.
              </p>
            </div>

            <div className="pt-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-purple-600/10 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <FaMapMarkerAlt className="text-xl text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Based In</p>
                    <p className="text-lg font-bold text-white mt-0.5">Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  onHoverStart={() => setActiveCard(index)}
                  whileHover={{ y: -3 }}
                  className={`relative p-5 rounded-lg border backdrop-blur-sm transition-all cursor-pointer
                    ${activeCard === index ? 'scale-[1.02] shadow-[0_0_20px_rgba(106,17,203,0.3)]' : ''}
                    bg-gradient-to-br ${colorClasses[card.color]} border-opacity-30`}
                >
                  <div className="relative z-10">
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-md bg-gradient-to-br ${colorClasses[card.color].split(' ')[0]} ${colorClasses[card.color].split(' ')[1]} bg-opacity-20`}>
                        <div className="text-xl">{card.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1.5">{card.title}</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_25px_rgba(106,17,203,0.15)]"
            >
              <h4 className="text-white text-lg font-semibold mb-3">Currently Focused On:</h4>
              
              <div className="relative h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFocus}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30">
                      <FaBolt className="text-xl text-purple-300" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">
                        {focusAreas[currentFocus]}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {focusAreas.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentFocus === index 
                        ? 'bg-purple-400' 
                        : 'bg-gray-600'
                    }`}
                    animate={{
                      scale: currentFocus === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;