import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Academiverse",
      category: "Web Application",
      description: "A comprehensive LMS using Java Spring Boot for backend and React.js for frontend, enhancing the educational experience for university students and professors.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/hetvijoshi/AcademiVerse",
      color: "card-dark-blue"
    },
    {
      id: 2,
      title: "GeoCompensate",
      category: "Mobile App",
      description: "Enhanced system efficiency by implementing advanced technologies including React, Node.js, MongoDB, and Google Cloud Services; this initiative led to a 25% decrease in server response time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/gadarajainik/GeoCompensate",
      color: "card-dark-purple"
    },
    {
      id: 3,
      title: "Patient Data App",
      category: "Web Application",
      description: "A healthcare application built with JavaScript that manages and visualizes patient data, improving clinical workflow efficiency and data accessibility.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shahparam11/patient-data-app",
      color: "card-dark-green"
    },
    {
      id: 4,
      title: "CodeSandbox Projects",
      category: "Development Environment",
      description: "A collection of TypeScript projects showcasing various frontend development patterns and techniques for modern web applications.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shahparam11/codesandbox",
      color: "card-dark-orange"
    },
    {
      id: 5,
      title: "ML Project",
      category: "Machine Learning",
      description: "A Jupyter Notebook-based machine learning project implementing various algorithms and data analysis techniques for predictive modeling.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/shahparam11/ML-Project",
      color: "card-dark-red"
    },
    {
      id: 6,
      title: "Developer Cheatsheets",
      category: "Documentation",
      description: "Contributed to a large collection of developer cheatsheets covering various programming languages, frameworks, and tools for quick reference.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shahparam11/cheatsheets",
      color: "card-dark-teal"
    }
  ];

  const toggleProjectDetails = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };
  
  const handleGitHubClick = (e, url) => {
    e.stopPropagation(); // Stop the card from flipping
    window.open(url, '_blank', 'noopener,noreferrer'); // Open in a new tab
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A collection of my recent work and personal projects
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id}
              className={`project-card ${activeCard === project.id ? 'active' : ''} ${project.color}`}
              onClick={() => toggleProjectDetails(project.id)}
            >
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div 
                    className="project-card-image" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                  </div>
                  <div className="project-card-title-wrapper">
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className="project-card-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-card-back">
                  <div 
                    className="project-card-image" 
                  >
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <button 
                      className="github-icon-button front-github-button"
                      onClick={(e) => handleGitHubClick(e, project.github)}
                      aria-label="View GitHub repository"
                    >
                      <FaGithub />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        /* Dark color variations for card backs - muted, sophisticated dark tones */
        .card-dark-blue .project-card-back {
          background: rgba(35, 45, 65, 0.95);
          color: #e8e8e8;
        }
        
        .card-dark-purple .project-card-back {
          background: rgba(45, 35, 65, 0.95);
          color: #e8e8e8;
        }
        
        .card-dark-green .project-card-back {
          background: rgba(35, 50, 45, 0.95);
          color: #e8e8e8;
        }
        
        .card-dark-orange .project-card-back {
          background: rgba(50, 40, 35, 0.95);
          color: #e8e8e8;
        }
        
        .card-dark-red .project-card-back {
          background: rgba(50, 35, 40, 0.95);
          color: #e8e8e8;
        }
        
        .card-dark-teal .project-card-back {
          background: rgba(35, 50, 55, 0.95);
          color: #e8e8e8;
        }
        
        /* GitHub button styles for both sides */
        .project-link-button {
          background: rgba(60, 60, 75, 0.8);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 15px;
        }
        
        .project-link-button:hover {
          background: rgba(80, 80, 95, 0.9);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }
        
        /* GitHub icon on front of card */
        .github-icon-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          opacity: 0;
          transform: translateY(5px);
          z-index: 2;
        }
        
        .project-card:hover .github-icon-button {
          opacity: 1;
          transform: translateY(0);
        }
        
        .github-icon-button:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }
        
        /* Make the image container position relative for absolute positioning of the button */
        .project-card-image {
          position: relative;
        }
        
        /* Light text for better contrast on dark backgrounds */
        .project-card-back h3 {
          color: #ffffff;
          margin-bottom: 10px;
        }
        
        .project-description {
          color: #e0e0e0;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;