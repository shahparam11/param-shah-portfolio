import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey in software development.
        </p>
        
        <div className="experience-timeline">
          <div className="card mb-md">
            <div className="experience-header">
              <h3>Software Development Intern</h3>
              <span className="experience-company">Profound Ventures</span>
              <span className="experience-date">09/2024 - 12/2024 | Dallas, TX</span>
            </div>
            <ul className="experience-description">
              <li>Developed and deployed multiple modules for MediPoints HealthCare System, a compliance-driven web application, focusing on user activity tracking and dynamic role-based compensation for healthcare professionals.</li>
              <li>Engineered and executed comprehensive unit tests utilizing Vitest, resulting in a remarkable 30% increase in code reliability, significantly decreasing manual testing efforts by over 40%, streamlining the overall development process.</li>
            </ul>
          </div>
          
          <div className="card mb-md">
            <div className="experience-header">
              <h3>Software Development Intern</h3>
              <span className="experience-company">Fractal Analytics</span>
              <span className="experience-date">01/2023 - 06/2023 | Mumbai, India</span>
            </div>
            <ul className="experience-description">
              <li>Engineered and deployed over 15 responsive web pages utilizing Vue.js and the Quasar framework, enhancing user engagement by 40% by incorporating dynamic dashboards, reports, forms, and charts while adhering to industry best practices in responsive design.</li>
              <li>Successfully adapted existing company code into three different tech stacks tailored to unique business requirements, streamlining development processes that led to a 20% improvement in project delivery timelines.</li>
              <li>Developed and optimized server-side applications using Node.js for seamless API integration with a MySQL database, resulting in a 30% reduction in data retrieval times and supporting an increase in overall application performance by 25%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;