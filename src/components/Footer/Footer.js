import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaReact, FaNodeJs, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const technologies = [
    { name: "React", icon: <FaReact />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-purple-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/shahparam11",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/param-shah-88a71421a",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:yamiparam@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PS</span>
              </div>
              <h3 className="text-xl font-display font-bold">Param Shah</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative solutions with modern technologies. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Dallas, TX</p>
              <a href="mailto:yamiparam@gmail.com" className="hover:text-white transition-colors">
                yamiparam@gmail.com
              </a>
              <a href="tel:+16824054326" className="hover:text-white transition-colors">
                +1 (682) 405-4326
              </a>
            </div>
          </motion.div>
        </div>

        {/* Built With Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-6 text-center">Built With</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <div className={`text-2xl mb-2 ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-400 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Collaboration Message */}
        <motion.div
          className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-lg p-6 mb-8 border border-primary-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2 text-primary-400">AI-Enhanced Development</h4>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              This portfolio represents a fusion of human creativity and AI assistance, showcasing the evolving 
              landscape of modern web development where technology amplifies human potential.
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Param Shah. Made with{' '}
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;