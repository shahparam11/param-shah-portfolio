import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isHovering, setIsHovering] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Academiverse",
      category: "Web Application",
      description: "A comprehensive LMS using Java Spring Boot for backend and React.js for frontend, enhancing the educational experience for university students and professors.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/hetvijoshi/AcademiVerse",
      color: "card-dark-blue",
      technologies: ["React", "Spring Boot", "MySQL", "REST API"]
    },
    {
      id: 2,
      title: "GeoCompensate",
      category: "Mobile App",
      description: "Enhanced system efficiency by implementing advanced technologies including React, Node.js, MongoDB, and Google Cloud Services; this initiative led to a 25% decrease in server response time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/gadarajainik/GeoCompensate",
      color: "card-dark-purple",
      technologies: ["React", "Node.js", "MongoDB", "Google Cloud Services"]
    },
    {
      id: 3,
      title: "Patient Data App",
      category: "Web Application",
      description: "A healthcare application built with JavaScript that manages and visualizes patient data, improving clinical workflow efficiency and data accessibility.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shahparam11/patient-data-app",
      color: "card-dark-green",
      technologies: ["JavaScript", "HTML", "CSS", "Node.js"]
    },
    {
      id: 4,
      title: "CodeSandbox Projects",
      category: "Development Environment",
      description: "A collection of TypeScript projects showcasing various frontend development patterns and techniques for modern web applications.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shahparam11/codesandbox",
      color: "card-dark-orange",
      technologies: ["TypeScript", "React", "Node.js", "Webpack"]
    },
    {
      id: 5,
      title: "ML Project",
      category: "Machine Learning",
      description: "A Jupyter Notebook-based machine learning project implementing various algorithms and data analysis techniques for predictive modeling.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/shahparam11/ML-Project",
      color: "card-dark-red",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"]
    },
    {
      id: 6,
      title: "Developer Cheatsheets",
      category: "Documentation",
      description: "Contributed to a large collection of developer cheatsheets covering various programming languages, frameworks, and tools for quick reference.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shahparam11/cheatsheets",
      color: "card-dark-teal",
      technologies: ["Markdown", "GitHub", "Documentation", "Developer Cheatsheets"]
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

  // Close active card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.project-card')) {
        setActiveCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of my recent work and personal projects
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${activeCard === project.id ? 'active' : ''} ${project.color}`}
              onClick={() => toggleProjectDetails(project.id)}
              onMouseEnter={() => setIsHovering(project.id)}
              onMouseLeave={() => setIsHovering(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            >
              <div className={`project-card-inner ${activeCard === project.id ? 'flipped' : ''}`}>
                <div className="project-card-front">
                  <div
                    className="project-card-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                  </div>
                  <div className="project-card-title-wrapper">
                    <div className="title-content">
                      <div className="project-card-category-badge">
                        {project.category}
                      </div>
                      <h3 className="project-card-title">{project.title}</h3>
                    </div>
                    <div className="card-action-icons">
                      <button
                        className="card-icon info-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProjectDetails(project.id);
                        }}
                        aria-label="View project details"
                      >
                        <FaInfoCircle />
                      </button>
                      <button
                        className="card-icon github-icon"
                        onClick={(e) => handleGitHubClick(e, project.github)}
                        aria-label="View GitHub repository"
                      >
                        <FaGithub />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-card-back">
                  <button
                    className="close-detail-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(null);
                    }}
                    aria-label="Close details"
                  >
                    &times;
                  </button>

                  <h3 className="detail-title">{project.title}</h3>

                  <div className="detail-technologies">
                    {project.technologies && project.technologies.map(tech => (
                      <span key={tech} className="detail-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <p className="detail-description">{project.description}</p>

                  <div className="detail-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-button github-detail-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>

              {isHovering === project.id && !activeCard && (
                <div className="card-hover-hint">Click to view details</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;