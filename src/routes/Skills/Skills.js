import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaDocker, FaAws, FaWindows, FaLinux, FaGitAlt, FaGithub, FaGitlab, FaJira, FaServer, FaUserFriends } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiVuedotjs, SiAngular, SiNextdotjs, SiDjango, SiFlutter, 
  SiMysql, SiPostgresql, SiMongodb, SiGooglecloud, SiDart, SiKubernetes, SiCircleci, SiGithubactions, 
  SiApache, SiApachetomcat, SiPostman, SiFigma } from 'react-icons/si';
import { TbTestPipe } from 'react-icons/tb';
import { DiSqllite } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    {
      id: "languages",
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, label: "Languages" },
        { name: "Python", icon: <SiPython />, label: "Languages" },
        { name: "Java", icon: <FaJava />, label: "Languages" },
        { name: "TypeScript", icon: <SiTypescript />, label: "Languages" },
        { name: "SQL", icon: <DiSqllite />, label: "Languages" },
        { name: "Dart", icon: <SiDart />, label: "Languages" }
      ]
    },
    {
      id: "web",
      title: "Web/App",
      skills: [
        { name: "React", icon: <FaReact />, label: "Web/App" },
        { name: "React Native", icon: <FaReact />, label: "Web/App" },
        { name: "Vue.js", icon: <SiVuedotjs />, label: "Web/App" },
        { name: "Angular", icon: <SiAngular />, label: "Web/App" },
        { name: "Next.js", icon: <SiNextdotjs />, label: "Web/App" },
        { name: "Node.js", icon: <FaNodeJs />, label: "Web/App" },
        { name: "Django", icon: <SiDjango />, label: "Web/App" },
        { name: "Flutter", icon: <SiFlutter />, label: "Web/App" }
      ]
    },
    {
      id: "database",
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql />, label: "Database" },
        { name: "PostgreSQL", icon: <SiPostgresql />, label: "Database" },
        { name: "MongoDB", icon: <SiMongodb />, label: "Database" }
      ]
    },
    {
      id: "os",
      title: "OS",
      skills: [
        { name: "Windows", icon: <FaWindows />, label: "OS" },
        { name: "Linux", icon: <FaLinux />, label: "OS" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud/DevOps",
      skills: [
        { name: "AWS", icon: <FaAws />, label: "Cloud/DevOps" },
        { name: "GCP", icon: <SiGooglecloud />, label: "Cloud/DevOps" },
        { name: "Docker", icon: <FaDocker />, label: "Cloud/DevOps" },
        { name: "Kubernetes", icon: <SiKubernetes />, label: "Cloud/DevOps" },
        { name: "CircleCI", icon: <SiCircleci />, label: "Cloud/DevOps" },
        { name: "GitHub Actions", icon: <SiGithubactions />, label: "Cloud/DevOps" }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, label: "Tools" },
        { name: "GitHub", icon: <FaGithub />, label: "Tools" },
        { name: "GitLab", icon: <FaGitlab />, label: "Tools" },
        { name: "Jira", icon: <FaJira />, label: "Tools" },
        { name: "Postman", icon: <SiPostman />, label: "Tools" },
        { name: "Apache", icon: <SiApache />, label: "Tools" },
        { name: "Tomcat", icon: <SiApachetomcat />, label: "Tools" },
        { name: "Agile/Scrum", icon: <FaUserFriends />, label: "Tools" },
        { name: "Figma", icon: <SiFigma />, label: "Tools" }
      ]
    }
  ];

  // Flatten all skills into one array for the "all" view
  const allSkills = categories.flatMap(category => category.skills);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {activeCategory === "all" 
            ? allSkills.map((skill, index) => (
                <motion.div 
                  className="skill-card"
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.01 }}
                  whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(138, 142, 255, 0.15)" }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))
            : categories.find(c => c.id === activeCategory)?.skills.map((skill, index) => (
                <motion.div 
                  className="skill-card"
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(138, 142, 255, 0.15)" }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-label">{skill.label}</div>
                </motion.div>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;