import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const NavBar = ({ currentSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking a link
  const handleMobileNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => scrollToSection('about')}>
          <div className="logo-symbol">PS</div>
          <span className="logo-text">Param Shah</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          <button 
            className={`navbar-link ${currentSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
            {currentSection === 'about' && <span className="active-indicator"></span>}
          </button>
          <button 
            className={`navbar-link ${currentSection === 'education' ? 'active' : ''}`}
            onClick={() => scrollToSection('education')}
          >
            Education
            {currentSection === 'education' && <span className="active-indicator"></span>}
          </button>
          <button 
            className={`navbar-link ${currentSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollToSection('experience')}
          >
            Experience
            {currentSection === 'experience' && <span className="active-indicator"></span>}
          </button>
          <button 
            className={`navbar-link ${currentSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
            {currentSection === 'projects' && <span className="active-indicator"></span>}
          </button>
          <button 
            className={`navbar-link ${currentSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
            {currentSection === 'skills' && <span className="active-indicator"></span>}
          </button>
          <button 
            className={`navbar-link ${currentSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
            {currentSection === 'contact' && <span className="active-indicator"></span>}
          </button>
        </div>

        {/* Social Links */}
        <div className="navbar-social">
          <a 
            href="https://github.com/shahparam11" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/param-shah-88a71421a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button 
            className={`navbar-mobile-link ${currentSection === 'about' ? 'active' : ''}`}
            onClick={() => handleMobileNavClick('about')}
          >
            About
          </button>
          <button 
            className={`navbar-mobile-link ${currentSection === 'education' ? 'active' : ''}`}
            onClick={() => handleMobileNavClick('education')}
          >
            Education
          </button>
          <button 
            className={`navbar-mobile-link ${currentSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleMobileNavClick('experience')}
          >
            Experience
          </button>
          <button 
            className={`navbar-mobile-link ${currentSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleMobileNavClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`navbar-mobile-link ${currentSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleMobileNavClick('skills')}
          >
            Skills
          </button>
          <button 
            className={`navbar-mobile-link ${currentSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleMobileNavClick('contact')}
          >
            Contact
          </button>

          {/* Mobile Social Links */}
          <div className="navbar-mobile-social">
            <a 
              href="https://github.com/shahparam11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/param-shah-88a71421a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
