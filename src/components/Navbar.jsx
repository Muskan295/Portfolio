import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Aurora Glow Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-60"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* LOGO */}
        <motion.h1
          className="text-white text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Muskan
        </motion.h1>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-gray-300 hover:text-white transition-all pb-1 ${
                activeSection === link.id ? "text-white" : ""
              }`}
            >
              {link.label}

              {/* Underline Animation */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                  activeSection === link.id ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed top-0 right-0 w-60 h-full bg-black/80 backdrop-blur-xl shadow-xl md:hidden flex flex-col items-start px-8 pt-24 space-y-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-gray-300 text-lg hover:text-white transition ${
                activeSection === link.id ? "text-white" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
