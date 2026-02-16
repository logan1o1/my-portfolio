import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[#414868]/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-[#565f89] text-sm">
            {currentYear} Saswat Mahapatra. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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
          </div>

          {/* Back to Top */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#565f89] hover:text-[#7aa2f7] text-sm transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
