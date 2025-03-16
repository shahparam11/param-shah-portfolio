import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Feel free to reach out to me</p>
        </div>
        
        <motion.div 
          className="contact-info-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>City, State, Country</p>
          </div>
        </motion.div>
        
        <div className="contact-cta">
          <p>I'm currently open to new opportunities and collaborations.</p>
          <a href="mailto:your.email@example.com" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 