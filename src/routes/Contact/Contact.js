import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to chat? Feel free to reach out.
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="card">
              <h3 className="mb-md">Contact Information</h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <a href="mailto:yamiparam@gmail.com" className="contact-text">
                  yamiparam@gmail.com
                </a>
              </div>
              <div className="contact-item mt-sm">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="contact-text">
                  Dallas, TX
                </span>
              </div>
              <div className="contact-item mt-sm">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <a href="tel:+16824054326" className="contact-text">
                  +1 682-405-4326
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form card">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" className="form-input" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-textarea" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 