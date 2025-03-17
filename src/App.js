import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Recommendations from './components/Recommendations/Recommendations';

// Components
import NavBar from './routes/NavBar/NavBar';
import About from './routes/About/About';
import Education from './routes/Education/Education';
import Experience from './routes/Experience/Experience';
import Portfolio from './routes/Portfolio/Portfolio';
import Skills from './routes/Skills/Skills';
// import Contact from './routes/Contact/Contact';
import Footer from './components/Footer/Footer';

// CSS
import './App.css';

const App = () => {
  // State
  const [currentSection, setCurrentSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Refs for sections
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const recommendationsRef = useRef(null);

  // Get all section refs - wrapped in useMemo to prevent recreation on every render
  const sectionRefs = useMemo(() => ({
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    education: educationRef,
    recommendations: recommendationsRef,
    contact: contactRef
  }), []);

  // Scroll to section function - wrapped in useCallback to maintain reference stability
  const scrollToSection = useCallback((section) => {
    try {
      const ref = sectionRefs[section];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error("Error scrolling to section:", err);
    }
  }, [sectionRefs]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      try {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        // Check which section is in view
        for (const section in sectionRefs) {
          const ref = sectionRefs[section];
          if (ref.current) {
            const offsetTop = ref.current.offsetTop;
            const height = ref.current.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setCurrentSection(section);
              // Update URL without causing a page reload
              window.history.replaceState(null, null, `/${section}`);
              break;
            }
          }
        }
      } catch (err) {
        console.error("Error handling scroll:", err);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Check URL on initial load to scroll to the right section
  useEffect(() => {
    try {
      const path = window.location.pathname.substring(1) || 'about';
      if (sectionRefs[path] && sectionRefs[path].current) {
        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
          scrollToSection(path);
        }, 100);
      }
    } catch (err) {
      console.error("Error handling initial navigation:", err);
      setError("Navigation error. Please refresh the page.");
    }
  }, [scrollToSection, sectionRefs]);

  // Error fallback
  if (error) {
    return (
      <div className="error-container">
        <h1>Something went wrong</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        {/* Background Elements */}
        <div className="background-gradient"></div>
        <div className="background-noise"></div>
        <div className="background-grid"></div>

        {/* Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              className="loading-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loading-logo">
                <div className="loading-circle"></div>
                <div className="loading-text">PS</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <NavBar currentSection={currentSection} scrollToSection={scrollToSection} />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/:section" element={
              <>
                {/* About Section */}
                <div ref={aboutRef}>
                  <About scrollToSection={scrollToSection} />
                </div>

                {/* Education Section */}
                <div ref={educationRef}>
                  <Education />
                </div>

                {/* Experience Section */}
                <div ref={experienceRef}>
                  <Experience />
                </div>

                {/* Projects Section */}
                <div ref={projectsRef}>
                  <Portfolio />
                </div>

                {/* Skills Section */}
                <div ref={skillsRef}>
                  <Skills />
                </div>

                {/* Recommendations Section */}
                <div ref={recommendationsRef}>
                  <Recommendations />
                </div>

                {/* Contact Section */}
                {/* <div ref={contactRef}>
                  <Contact />
                </div> */}
              </>
            } />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;