import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Projects</h2>
          <p className="section-description">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        {PROJECTS.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 relative overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7aa2f7]/5 to-[#bb9af7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#c0caf5] mb-3 group-hover:text-[#7aa2f7] transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-[#a9b1d6] mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-2 px-4 text-sm flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.deployed_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <p className="text-[#565f89] text-lg">
              Projects coming soon...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
