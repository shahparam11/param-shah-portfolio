import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

// Components
import NavBar from './routes/NavBar/NavBar';
import About from './routes/About/About';
import Education from './routes/Education/Education';
import Experience from './routes/Experience/Experience';
import Portfolio from './routes/Portfolio/Portfolio';
import Skills from './routes/Skills/Skills';
import Recommendations from './components/Recommendations/Recommendations';
import Footer from './components/Footer/Footer';

// Styles
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Background Effects */}
        <div className="bg-grid" />
        <div className="bg-gradient" />
        <Canvas className="bg-canvas" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
          <Stars count={1000} depth={50} factor={4} saturation={0} fade speed={1} />
        </Canvas>

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className={`custom-cursor ${isHovering ? 'hover' : ''}`}
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10
          }}
        />

        {/* Scroll Progress Bar */}
        <div className="scroll-progress">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>

        {/* Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="loading-screen"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loading-logo" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route
              path="/:section"
              element={
                <>
                  <About />
                  <Education />
                  <Experience />
                  <Portfolio />
                  <Skills />
                  <Recommendations />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;