import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import BackToTop from './components/BackToTop/BackToTop';
import NavBar from './routes/NavBar/NavBar';
import Hero from './routes/Hero/Hero';
import About from './routes/About/About';
import Skills from './routes/Skills/Skills';
import Experience from './routes/Experience/Experience';
import Projects from './routes/Projects/Projects';
import Contact from './routes/Contact/Contact';
import Footer from './components/Footer/Footer';

// Styles
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <AnimatePresence mode="wait">
            {isLoading && <LoadingScreen />}
          </AnimatePresence>

          {!isLoading && (
            <>
              <ScrollProgress />
              <NavBar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </main>
              <Footer />
              <BackToTop />
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;