import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiVuedotjs, SiAngular, SiNextdotjs, SiDjango, SiFlutter, SiMysql, SiPostgresql, SiMongodb, SiGooglecloud } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life.
        </p>
        
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon"><SiJavascript /></div>
            <h3 className="skill-name">JavaScript</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiPython /></div>
            <h3 className="skill-name">Python</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><FaJava /></div>
            <h3 className="skill-name">Java</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiTypescript /></div>
            <h3 className="skill-name">TypeScript</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><FaReact /></div>
            <h3 className="skill-name">React</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiVuedotjs /></div>
            <h3 className="skill-name">Vue.js</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiAngular /></div>
            <h3 className="skill-name">Angular</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiNextdotjs /></div>
            <h3 className="skill-name">Next.js</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><FaNodeJs /></div>
            <h3 className="skill-name">Node.js</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiDjango /></div>
            <h3 className="skill-name">Django</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiFlutter /></div>
            <h3 className="skill-name">Flutter</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiMysql /></div>
            <h3 className="skill-name">MySQL</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiPostgresql /></div>
            <h3 className="skill-name">PostgreSQL</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiMongodb /></div>
            <h3 className="skill-name">MongoDB</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><FaAws /></div>
            <h3 className="skill-name">AWS</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><SiGooglecloud /></div>
            <h3 className="skill-name">GCP</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon"><FaDocker /></div>
            <h3 className="skill-name">Docker</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;