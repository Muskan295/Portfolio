import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
   fetch("https://portfolio-backend-8c34.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const clean = data.filter((p) => p.title && p.description);
        setProjects(clean);
      })
      .catch((err) => console.log(err));
  }, []);

  const categories = ["All", ...new Set(projects.flatMap(p => p.category || []))];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category?.includes(filter));

  return (
    <section id="projects" className="portfolio-section pt-32 pb-16">
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
            Projects
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg mb-8 max-w-3xl"
        >
          Explore my portfolio of work. Each project represents a unique challenge 
          and solution, showcasing my skills in action.
        </motion.p>

        <div className="mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 30 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-purple-600/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,17,203,0.2)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                        {project.category?.[0] || "Project"}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech?.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech && project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        onClick={() => setActiveModal(project)}
                        className="text-sm text-white hover:text-purple-300 transition-colors flex items-center gap-2 group/view"
                      >
                        View Details
                        <span className="group-hover/view:translate-x-1 transition-transform">→</span>
                      </button>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-blue-300 transition-colors flex items-center gap-2 group/source"
                      >
                        Source
                        <span className="group-hover/source:translate-x-1 transition-transform">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {activeModal.title}
                  </h3>
                  <span className="text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                    {activeModal.category?.[0] || "Project"}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {activeModal.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModal.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-white/5 text-white border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={activeModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Visit Project
                  </a>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;