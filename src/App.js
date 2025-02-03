import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './routes/NavBar/NavBar';
import About from './routes/About/About';
import Experience from './routes/Experience/Experience';
import Portfolio from './routes/Portfolio/Portfolio';
import Skills from './routes/Skills/Skills';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </div>
      </div>
    </HashRouter>
  );
}

export default App; 