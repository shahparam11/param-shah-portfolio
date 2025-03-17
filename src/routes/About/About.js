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
        <div className="profile-layout">
          <motion.div 
            className="profile-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-content">
              <div className="profile-image-container">
                <img src={profileImage} alt="Param Shah" className="profile-image" />
                <div className="image-overlay"></div>
                
                <div className="profile-info">
                  <h1 className="profile-name">Param Shah</h1>
                  <h2 className="profile-title">Software Development Engineer</h2>
                  
                  <div className="profile-metrics">
                    <div className="metric">
                      <span className="metric-value">2+</span>
                      <span className="metric-label">EXPERIENCE</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="metric">
                      <span className="metric-value">10+</span>
                      <span className="metric-label">PROJECTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bio-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="title-section">
              <h2 className="welcome-text">Hello,</h2>
              <div className="title-separator"></div>
            </div>
            
            <p className="bio-text">
              Experienced in developing and deploying scalable applications with a strong emphasis on security and performance. Proficient in JavaScript, Python, Java, and various web/app technologies.
            </p>
            
            <p className="expertise-text">
              My expertise includes:
            </p>
            
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M10,17L15,12L10,7V17Z" />
                  </svg>
                </div>
                <span>Frontend Development</span>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M5,5V7H19V5H5Z" />
                  </svg>
                </div>
                <span>Backend Development</span>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                  </svg>
                </div>
                <span>Database Systems</span>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M13.78 15.44L19.78 21.44L21.19 20.03L15.19 14.03L13.78 15.44M17.5 10.1C18.07 10.1 18.55 9.62 18.55 9.05S18.07 8 17.5 8 16.45 8.47 16.45 9.05 16.93 10.1 17.5 10.1M11.4 12.03L17.84 5.6C18.08 5.34 18.08 4.97 17.84 4.73L17.5 4.39C17.24 4.14 16.86 4.14 16.62 4.39L10.18 10.83L11.4 12.03M6.41 14.72L4.38 12.69L2.34 14.73C2.21 14.86 2.21 15.07 2.34 15.2L4.38 17.24C4.5 17.37 4.72 17.37 4.84 17.24L6.41 15.67L13.21 22.47C13.33 22.6 13.54 22.6 13.67 22.47L15.71 20.43C15.83 20.3 15.83 20.09 15.71 19.96L8.9 13.15L6.41 14.72Z" />
                  </svg>
                </div>
                <span>Cloud Solutions</span>
              </div>
            </div>
            
            <div className="cta-container">
              <a 
                href={resumePDF} 
                className="resume-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>View Resume</span>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                </svg>
              </a>
              {/* <button 
                className="contact-button"
                onClick={() => scrollToSection('contact')}
              >
                <span>Contact Me</span>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;