import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const About = () => {
  const handleScrollToNext = () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Saswat Mahapatra</span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Engineer',
                2000,
                'Backend Engineer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-3xl text-[#7aa2f7] font-medium"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#a9b1d6] text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Passionate about building scalable systems and creating impactful digital experiences.
            I specialize in backend development with experience in frontend as well.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#experience');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              View Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <a
              href="https://github.com/logan1o1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#565f89] hover:text-[#7aa2f7] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saswat-mahapatra-07b8a6258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#565f89] hover:text-[#7aa2f7] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saswatm2706@gmail.com"
              className="text-[#565f89] hover:text-[#7aa2f7] transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-left max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="space-y-4 text-[#a9b1d6]">
              <p>
                I am a dedicated software engineer with a strong foundation in computer science and
                a passion for building robust, scalable applications. My journey in tech has equipped
                me with expertise in modern web technologies, cloud platforms, and system architecture.
              </p>
              <p>
                When I am not coding, I enjoy exploring new technologies,
                I try to explore stuff related to linux, and try to customize/rice my
                desktop, and play games. I believe in writing clean, maintainable code and building products that make a difference.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#565f89] hover:text-[#7aa2f7] transition-colors cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll to skills section"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default About;
