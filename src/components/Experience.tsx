import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCES } from '../constants/experience';

const Experience = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedExperiences);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedExperiences(newExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Professional Experience</h2>
          <p className="section-description">
            My professional journey and the impact I have made along the way
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card relative overflow-hidden p-6 md:p-8 border-l-4 border-[#7aa2f7]"
            >
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#7aa2f7]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#bb9af7]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 pb-6 border-b border-[#414868]/50">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] flex items-center justify-center mr-4 hidden md:flex">
                      <Briefcase className="text-[#1a1b26] w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-3 py-1 text-xs font-medium bg-[#7aa2f7]/20 text-[#7aa2f7] rounded-full mb-3 inline-block">
                        PROFESSIONAL EXPERIENCE
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#c0caf5] mb-1">
                        {experience.role}
                      </h3>
                      <h4 className="text-lg text-[#7aa2f7] font-medium mb-2">
                        {experience.company}
                      </h4>
                    </div>
                  </div>

                  <div className="text-[#565f89] mt-3 md:mt-0 md:text-right space-y-1">
                    <div className="flex items-center md:justify-end gap-2 text-sm">
                      <MapPin className="text-[#7aa2f7] w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2 text-sm">
                      <Calendar className="text-[#7aa2f7] w-4 h-4" />
                      <span>
                        {experience.from} - {experience.to}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                {experience.details.length > 0 && experience.details[0] !== '' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#7aa2f7]/10 hover:bg-[#7aa2f7]/20 border border-[#7aa2f7]/30 hover:border-[#7aa2f7]/50 rounded-lg transition-all duration-300 group"
                    >
                      <span className="text-[#7aa2f7] font-medium">
                        {expandedExperiences.has(index) ? 'Hide Details' : 'View Details'}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedExperiences.has(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedExperiences.has(index) ? (
                          <ChevronUp className="text-[#7aa2f7] w-4 h-4" />
                        ) : (
                          <ChevronDown className="text-[#7aa2f7] w-4 h-4" />
                        )}
                      </motion.div>
                    </button>
                  </motion.div>
                )}

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedExperiences.has(index) && experience.details.length > 0 && experience.details[0] !== '' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4">
                        <h5 className="text-lg font-semibold gradient-text mb-4">
                          Key Responsibilities & Achievements
                        </h5>
                        <ul className="space-y-3">
                          {experience.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-[#7aa2f7]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <svg
                                  className="w-3 h-3 text-[#7aa2f7]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-[#a9b1d6]">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
