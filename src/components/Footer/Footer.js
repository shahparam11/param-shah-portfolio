import React from 'react';
import { FaGithub, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

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
            <a href="#contact" className="footer-link mt-sm">
              <span className="footer-icon">›</span> Contact
            </a>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <a href="mailto:yamiparam@gmail.com" className="footer-link">
              <i className="footer-icon fas fa-envelope"></i> yamiparam@gmail.com
            </a>
            <a href="tel:+16824054326" className="footer-link mt-sm">
              <i className="footer-icon fas fa-phone"></i> +1 682-405-4326
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
                <FaLinkedinIn />
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