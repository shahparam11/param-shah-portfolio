import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Import profile image from assets folder
import profileImage from '../../assets/personal-photo1.jpg';
import resumePDF from '../../assets/resume.pdf';

const About = ({ scrollToSection }) => {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={profileImage} alt="Param Shah" className="profile-image" />
            <div className="profile-image-border"></div>
          </div>
          <div className="profile-details">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="text-primary">Param Shah</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Development Engineer
            </motion.p>
            <motion.p 
              className="profile-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experienced in developing and deploying scalable applications with a strong emphasis on security and performance. Proficient in JavaScript, Python, Java, and various web/app technologies.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href={resumePDF} 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              {/* <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button> */}
            </motion.div>
            <motion.div 
              className="profile-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="profile-stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="profile-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;