import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationItems = [
    {
      degree: "Master of Science, Computer Science",
      institution: "The University of Texas at Arlington",
      date: "08/2023 - 05/2025 | Arlington, TX",
      gpa: "3.5/4.0",
      major: "Software Engineering & Database System"
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      institution: "MIT Art's Design and Technology",
      date: "08/2019 - 06/2023 | Pune, India",
      gpa: "3.3/4.0",
      major: ""
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and qualifications.
        </p>
        
        <div className="education-grid">
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="education-card-header">
                <div className="degree-icon">
                  <FaGraduationCap />
                </div>
                <h3 className="education-degree">{item.degree}</h3>
              </div>
              
              <div className="education-card-body">
                <div className="education-detail">
                  <FaUniversity className="detail-icon" />
                  <span className="institution-name">{item.institution}</span>
                </div>
                
                <div className="education-detail">
                  <FaCalendarAlt className="detail-icon" />
                  <span>{item.date}</span>
                </div>
                
                <div className="education-detail">
                  <FaAward className="detail-icon" />
                  <span>GPA: {item.gpa}{item.major && ` | Major: ${item.major}`}</span>
                </div>
              </div>
              
              <div className="education-card-accent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 