import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Academiverse",
      description: [
        "Developed a comprehensive LMS using Java Spring Boot for backend and React.js for frontend, enhancing the educational experience for university students and professors.",
        "Implemented AWS services including EC2 for hosting, RDS for PostgreSQL database, and S3 for file storage, ensuring scalable and reliable system performance.",
        "Established a CI/CD pipeline using CircleCI, automating testing and deployment for efficient development workflow.",
        "Integrated Microsoft Entra ID for secure user authentication, enhancing system security and user management.",
        "Utilized Agile methodologies (Scrum) to manage the project, ensuring timely delivery of features and continuous improvement.",
        "Added a real-time top news feature specific to each department, allowing students and professors to stay updated on relevant industry trends.",
      ],
      projectLink: "https://your-project-link.com/academiverse",
      color: "#FF6B6B"  // Red accent
    },
    {
      title: "GeoCompensate",
      description: [
        "1. Enhanced system efficiency by implementing advanced technologies including React, Node.js, MongoDB, and Google Cloud Services; this initiative led to a 25% decrease in server response time and improved user satisfaction rates by 35%",
        "2. Integrated GPS tracking features into timesheet management processes, yielding a significant 30% increase in administrative efficiency while accurately capturing over 10,000 hours of work data monthly for improved payroll accuracy.",
        "3. Spearheaded the GeoCompensate project, delivering a robust employee management mobile application that streamlined key functionalities such as employee registration and geolocation-based clock-in/out, resulting in a 40% reduction in onboarding time across 500+ employees.",
      ],

      projectLink: "https://your-project-link.com/supervisor",
      color: "#4ECDC4"  // Teal accent
    }
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="card-accent" style={{ backgroundColor: project.color }}></div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <div className="description-container">
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <a 
                href={project.projectLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="redirect-link"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;