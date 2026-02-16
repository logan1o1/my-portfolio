import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'saswatm2706@gmail.com',
      href: 'mailto:saswatm2706@gmail.com',
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/logan1o1',
      href: 'https://github.com/logan1o1',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/saswat',
      href: 'https://www.linkedin.com/in/saswat-mahapatra-07b8a6258',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-description">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold text-[#c0caf5] mb-6">
              Contact Information
            </h3>
            <p className="text-[#a9b1d6] mb-8">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 rounded-lg bg-[#1a1b26]/50 border border-[#414868]/30 hover:border-[#7aa2f7]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#7aa2f7]/10 flex items-center justify-center mr-4 group-hover:bg-[#7aa2f7]/20 transition-colors">
                    <span className="text-[#7aa2f7]">{method.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#c0caf5]">{method.title}</h4>
                    <p className="text-sm text-[#565f89]">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold text-[#c0caf5] mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#a9b1d6] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#1a1b26]/50 border border-[#414868]/50 rounded-lg text-[#c0caf5] placeholder-[#565f89] focus:outline-none focus:border-[#7aa2f7]/50 focus:ring-1 focus:ring-[#7aa2f7]/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#a9b1d6] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#1a1b26]/50 border border-[#414868]/50 rounded-lg text-[#c0caf5] placeholder-[#565f89] focus:outline-none focus:border-[#7aa2f7]/50 focus:ring-1 focus:ring-[#7aa2f7]/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a9b1d6] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-[#1a1b26]/50 border border-[#414868]/50 rounded-lg text-[#c0caf5] placeholder-[#565f89] focus:outline-none focus:border-[#7aa2f7]/50 focus:ring-1 focus:ring-[#7aa2f7]/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
