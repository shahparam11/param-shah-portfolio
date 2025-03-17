import React from 'react';
import { FaUser, FaRobot, FaBrain, FaReact, FaJs, FaCss3Alt, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

// Instead of importing BuiltWith, we'll define it right here
const BuiltWithSection = () => {
  const technologies = [
    { name: "Myself", icon: <FaUser />, color: "#6c5ce7" },
    { name: "Cursor AI", icon: <FaRobot />, color: "#0984e3" },
    { name: "Claude-3.7-sonnet", icon: <FaBrain />, color: "#a29bfe" },
    { name: "React JS", icon: <FaReact />, color: "#00cec9" },
    { name: "JavaScript", icon: <FaJs />, color: "#ffeaa7" },
    { name: "Modern CSS", icon: <FaCss3Alt />, color: "#74b9ff" },
  ];

  return (
    <div className="built-with-section">
      <h3 className="footer-heading">Built With</h3>
      <div className="heading-underline"></div>
      
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <motion.div 
            className="tech-card"
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 8px 15px rgba(0,0,0,0.2)"
            }}
          >
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <div className="tech-name">{tech.name}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="ai-evolution-message">
        <p>In this era of AI evolution, the boundary between human and machine creativity continues to blur. This portfolio represents a fusion of traditional development and AI-assisted design.</p>
      </div>
    </div>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Param Shah</h3>
            <p className="footer-text">
              Full Stack Developer with a Master's in Computer Science, specializing in software engineering and database systems. Proficient in developing and deploying scalable applications with a strong emphasis on security and performance.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <a href="#about" className="footer-link">
              <span className="footer-icon">›</span> About
            </a>
            <a href="#education" className="footer-link mt-sm">
              <span className="footer-icon">›</span> Education
            </a>
            <a href="#experience" className="footer-link mt-sm">
              <span className="footer-icon">›</span> Experience
            </a>
            <a href="#projects" className="footer-link mt-sm">
              <span className="footer-icon">›</span> Projects
            </a>
            <a href="#skills" className="footer-link mt-sm">
              <span className="footer-icon">›</span> Skills
            </a>
            {/* <a href="#contact" className="footer-link mt-sm">
              <span className="footer-icon">›</span> Contact
            </a> */}
          </div>

          <div className="footer-section">
            <BuiltWithSection />
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <a href="mailto:yamiparam@gmail.com" className="footer-link">
              <i className="footer-icon fas fa-envelope"></i> yamiparam@gmail.com
            </a>
            <p className="footer-link mt-sm">
              <i className="footer-icon fas fa-map-marker-alt"></i> Dallas, US
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Me</h3>
            <div className="footer-social">
              <a 
                href="https://github.com/shahparam11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/param-shah-88a71421a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Param Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 