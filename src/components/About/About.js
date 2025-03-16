import React from 'react';
import resumePDF from '../../assets/resume.pdf';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-cta">
        <a 
          href={resumePDF} 
          className="btn btn-primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default About; 