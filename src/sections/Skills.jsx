import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [activeSkill, setActiveSkill] = useState({ category: "", skill: "" });

  useEffect(() => {
    fetch("https://portfolio-backend-9h1p.onrender.com/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log(err));
  }, []);

const logoMap = {
  Html: "/logos/html.png",
  CSS: "/logos/css.png",
  Javascript: "/logos/js.png",
  React: "/logos/react.png",
  Tailwind: "/logos/tailwind.png",
  ExpressJS: "/logos/express.png",
  C: "/logos/c.png",
  "C++": "/logos/cpp.png",
  MongoDB: "/logos/mongodb.png",
  git: "/logos/git.png",
  Github: "/logos/github.png",
};

  const groupSkills = skills.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = {};
    acc[item.category][item.name] = item;
    return acc;
  }, {});
  const categories = Object.keys(groupSkills);
  const firstCategory = categories[0];
  const firstSkill = firstCategory && Object.keys(groupSkills[firstCategory])[0];
  useEffect(() => {
    if (!activeSkill.category && firstCategory && firstSkill) {
      setActiveSkill({ category: firstCategory, skill: firstSkill });
    }
  }, [firstCategory, firstSkill]);

const currentSkill = groupSkills[activeSkill.category]?.[activeSkill.skill];
return (
    <section id="skills" className="portfolio-section pt-32 pb-16">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
      
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '2.5rem',
              marginBottom: '10px',
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
            Tech Stack
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 min-h-[400px]">
          <div className="lg:w-3/5 lg:pr-8">
            <div className="space-y-8">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-white">
                    {category}
                  </h3>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {Object.keys(groupSkills[category]).map((skillName, skillIndex) => (
                      <motion.button
                        key={skillName}
                        onClick={() => setActiveSkill({ category, skill: skillName })}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: skillIndex * 0.02 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          relative p-3 rounded-lg flex flex-col items-center justify-center gap-2 
                          transition-all border
                          ${activeSkill.skill === skillName
                            ? "bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-400 shadow-[0_0_15px_rgba(106,17,203,0.3)]"
                            : "bg-white/5 border border-white/10 hover:bg-white/10"
                          }
                        `}
                      >
                <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
  <img
    src={logoMap[skillName]}
    alt={skillName}
    className="w-8 h-8 object-contain"
    style={{ display: 'block' }}
    onError={(e) => {
      console.error(`Failed to load: ${skillName}`, e);
      e.target.style.display = 'none';
    }}
  />
</div>

                        <span className="text-sm font-medium text-white text-center">
                          {skillName}
                        </span>

                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${groupSkills[category][skillName].percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.03 }}
                            className={`
                              h-full rounded-full
                              ${groupSkills[category][skillName].percent > 80 ? "bg-green-500" :
                                groupSkills[category][skillName].percent > 60 ? "bg-blue-500" :
                                groupSkills[category][skillName].percent > 40 ? "bg-yellow-500" :
                                "bg-gray-500"
                              }
                            `}
                          />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-120px)]">
              <div className="space-y-6 h-full">
                
                <AnimatePresence mode="wait">
                  {currentSkill && (
                    <motion.div
                      key={activeSkill.skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-white/10 to-purple-600/20 border border-white/20 backdrop-blur-xl rounded-xl p-5 shadow-[0_0_25px_rgba(106,17,203,0.2)]"
                    >
                 
                      <div className="flex items-center gap-4 mb-5">
                        <motion.div
                          animate={{ 
                            rotate: [0, 360],
                          }}
                          transition={{ 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className="p-2 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30"
                        >
                          <img
                            src={logoMap[activeSkill.skill]}
                            className="w-12 h-12"
                            alt={activeSkill.skill}
                          />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {activeSkill.skill}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {currentSkill.years}
                          </p>
                        </div>
                      </div>

                 
                      <div className="mb-5">
                        <div className="flex justify-between text-white mb-2">
                          <span>Proficiency</span>
                          <span className="font-bold">
                            {currentSkill.percent}%
                          </span>
                        </div>
                        
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${currentSkill.percent}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          About
                        </h4>
                        <p className="text-gray-200 leading-relaxed">
                          {currentSkill.description}
                        </p>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {currentSkill.years}
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {currentSkill.percent}% Proficient
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

         
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <p className="text-sm text-gray-300">
                    Click any skill to see detailed information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;