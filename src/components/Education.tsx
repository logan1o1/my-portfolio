import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star, Trophy } from 'lucide-react';

const Education = () => {
  const education = {
    institution: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    period: '2021-2025',
    cgpa: '7.5/10',
  };

  const achievements = [
    {
      title: 'Achievement Title',
      description: 'Achievement description will go here',
    },
    {
      title: 'Another Achievement',
      description: 'Another achievement description',
    },
  ];

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
    <section id="education" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Education & Achievements</h2>
          <p className="section-description">
            My academic background and recognition
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Education Card */}
          <motion.div variants={itemVariants} className="glass-card p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#7aa2f7]/10 flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-[#7aa2f7]" />
              </div>
              <h3 className="text-xl font-semibold text-[#c0caf5]">Education</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#c0caf5]">
                {education.institution}
              </h4>
              <p className="text-[#7aa2f7]">{education.degree}</p>
              
              <div className="flex flex-col gap-2 text-[#565f89]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div variants={itemVariants} className="glass-card p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#bb9af7]/10 flex items-center justify-center mr-4">
                <Trophy className="w-6 h-6 text-[#bb9af7]" />
              </div>
              <h3 className="text-xl font-semibold text-[#c0caf5]">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1b26]/50 border border-[#414868]/30 hover:border-[#bb9af7]/30 transition-colors"
                >
                  <Trophy className="w-5 h-5 text-[#bb9af7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-[#c0caf5] mb-1">
                      {achievement.title}
                    </h5>
                    <p className="text-sm text-[#565f89]">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
