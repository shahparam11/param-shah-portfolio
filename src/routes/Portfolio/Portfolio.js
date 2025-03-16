import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work and personal projects.
        </p>
        
        <div className="projects-grid">
          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Academiverse" 
              className="project-card-image"
            />
            <div className="project-card-overlay">
              <span className="project-card-category">Web Application</span>
              <h3 className="project-card-title">Academiverse</h3>
              <p className="mt-sm">A comprehensive LMS using Java Spring Boot for backend and React.js for frontend, enhancing the educational experience for university students and professors.</p>
              <div className="project-card-links mt-sm">
                <a href="https://github.com/shahparam11" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="GeoCompensate" 
              className="project-card-image"
            />
            <div className="project-card-overlay">
              <span className="project-card-category">Mobile App</span>
              <h3 className="project-card-title">GeoCompensate</h3>
              <p className="mt-sm">Enhanced system efficiency by implementing advanced technologies including React, Node.js, MongoDB, and Google Cloud Services; this initiative led to a 25% decrease in server response time.</p>
              <div className="project-card-links mt-sm">
                <a href="https://github.com/shahparam11" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Patient Data App" 
              className="project-card-image"
            />
            <div className="project-card-overlay">
              <span className="project-card-category">Web Application</span>
              <h3 className="project-card-title">Patient Data App</h3>
              <p className="mt-sm">A healthcare application built with JavaScript that manages and visualizes patient data, improving clinical workflow efficiency and data accessibility.</p>
              <div className="project-card-links mt-sm">
                <a href="https://github.com/shahparam11/patient-data-app" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="CodeSandbox Projects" 
              className="project-card-image"
            />
            <div className="project-card-overlay">
              <span className="project-card-category">Development Environment</span>
              <h3 className="project-card-title">CodeSandbox Projects</h3>
              <p className="mt-sm">A collection of TypeScript projects showcasing various frontend development patterns and techniques for modern web applications.</p>
              <div className="project-card-links mt-sm">
                <a href="https://github.com/shahparam11/codesandbox" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="ML Project" 
              className="project-card-image"
            />
            <div className="project-card-overlay">
              <span className="project-card-category">Machine Learning</span>
              <h3 className="project-card-title">ML Project</h3>
              <p className="mt-sm">A Jupyter Notebook-based machine learning project implementing various algorithms and data analysis techniques for predictive modeling.</p>
              <div className="project-card-links mt-sm">
                <a href="https://github.com/shahparam11/ML-Project" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Developer Cheatsheets" 
              className="project-card-image"
            />
            <div className="project-card-overlay">
              <span className="project-card-category">Documentation</span>
              <h3 className="project-card-title">Developer Cheatsheets</h3>
              <p className="mt-sm">Contributed to a large collection of developer cheatsheets covering various programming languages, frameworks, and tools for quick reference.</p>
              <div className="project-card-links mt-sm">
                <a href="https://github.com/shahparam11/cheatsheets" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;