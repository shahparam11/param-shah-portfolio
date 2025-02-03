import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="about" className="nav-logo" smooth={true} duration={500}>
          PS
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </div>

        {/* Navigation links */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="about" className="nav-item" smooth={true} duration={500} spy={true} offset={-70}>
            About
          </Link>
          <Link to="experience" className="nav-item" smooth={true} duration={500} spy={true} offset={-70}>
            Experience
          </Link>
          <Link to="portfolio" className="nav-item" smooth={true} duration={500} spy={true} offset={-70}>
            Portfolio
          </Link>
          <Link to="skills" className="nav-item" smooth={true} duration={500} spy={true} offset={-70}>
            Skills
          </Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/param-shah-88a71421a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/shahparam11" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
