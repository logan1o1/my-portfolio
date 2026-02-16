import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="space-y-4 text-[#a9b1d6]">
            <p>
              I am a dedicated software engineer with a strong foundation in computer science and 
              a passion for building robust, scalable applications. My journey in tech has equipped 
              me with expertise in modern web technologies, cloud platforms, and system architecture.
            </p>
            <p>
              When I am not coding, I enjoy exploring new technologies, I try to explore stuff 
              related to linux, and try to customize/rice my desktop, and play games. I believe 
              in writing clean, maintainable code and building products that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
