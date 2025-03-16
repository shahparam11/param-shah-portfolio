import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and qualifications.
        </p>
        
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-header">
              <h3 className="education-degree">Master of Science, Computer Science</h3>
              <div className="education-institution">The University of Texas at Arlington</div>
              <div className="education-date">08/2023 - 05/2025 | Arlington, TX</div>
            </div>
            <div className="education-details">
              <p>GPA: 3.5/4.0 | Major: Software Engineering & Database System</p>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3 className="education-degree">Bachelor of Technology, Computer Science and Engineering</h3>
              <div className="education-institution">MIT Art's Design and Technology</div>
              <div className="education-date">08/2019 - 06/2023 | Pune, India</div>
            </div>
            <div className="education-details">
              <p>GPA: 3.3/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 