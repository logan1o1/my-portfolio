import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Terminal, Layers, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java'],
    },
    {
      title: 'Frontend',
      icon: <Layers className="w-6 h-6" />,
      skills: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'FastAPI', 'Django', 'REST APIs'],
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
    {
      title: 'Tools & Others',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Git', 'Linux', 'Kafka', 'GraphQL', 'Microservices'],
    },
  ];

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
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-description">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#7aa2f7]/10 flex items-center justify-center mr-4 group-hover:bg-[#7aa2f7]/20 transition-colors">
                  <span className="text-[#7aa2f7]">{category.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#c0caf5]">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
