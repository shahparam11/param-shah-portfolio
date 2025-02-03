import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Profound Ventures",
      startDate: "09/09/2024",
      endDate: "12/15/2024",
      location: "California, United States",
      description: [
        "Developed and deployed multiple modules for the MediPoints HealthCare System, a compliance-driven web application, focusing on user activity tracking and dynamic role-based compensation for healthcare professionals.",
        "Engineered and executed comprehensive unit tests utilizing Vitest, resulting in a remarkable 30% increase in code reliability, significantly decreasing manual testing efforts by over 40%, streamlining the overall development process."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Fractal Analytics",
      startDate: "01/02/2023",
      endDate: "06/31/2023",
      location: "Mumbai, India",
      description: [
        "Engineered and deployed over 15 responsive web pages utilizing Vue.js and the Quasar framework, enhancing user engagement by 40% by incorporating dynamic dashboards, reports, forms, and charts while adhering to industry best practices in responsive design.",
        "Successfully adapted existing company code into three different tech stacks tailored to unique business requirements, streamlining development processes that led to a 20% improvement in project delivery timelines.",
        "Developed and optimized server-side applications using Node.js for seamless API integration with a MySQL database, resulting in a 30% reduction in data retrieval times and supporting an increase in overall application performance by 25%."
      ]
    }
  ];

  return (
    <div className="experience-container">
      <h2 style={{ marginBottom: '1rem' }}>Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.location}</p>
            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;