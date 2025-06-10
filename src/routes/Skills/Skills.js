import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaAws, FaWindows, FaLinux, 
  FaGitAlt, FaGithub, FaGitlab, FaPython, FaJs 
} from 'react-icons/fa';
import { 
  SiTypescript, SiVuedotjs, SiAngular, SiNextdotjs, SiDjango, SiFlutter,
  SiMysql, SiPostgresql, SiMongodb, SiGooglecloud, SiDart, SiKubernetes,
  SiCircleci, SiGithubactions, SiPostman, SiFigma, SiTailwindcss
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'Python', icon: <FaPython />, level: 80 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'Dart', icon: <SiDart />, level: 75 },
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 85 },
        { name: 'Angular', icon: <SiAngular />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
        { name: 'Django', icon: <SiDjango />, level: 80 },
        { name: 'Java Spring', icon: <FaJava />, level: 75 },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 80 },
        { name: 'Google Cloud', icon: <SiGooglecloud />, level: 75 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 70 },
      ]
    },
    {
      id: 'tools',
      name: 'Tools',
      color: 'from-gray-500 to-gray-700',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
        { name: 'Postman', icon: <SiPostman />, level: 85 },
        { name: 'Figma', icon: <SiFigma />, level: 75 },
      ]
    }
  ];

  const getAllSkills = () => {
    return skillCategories.flatMap(category => 
      category.skills.map(skill => ({ ...skill, category: category.name, color: category.color }))
    );
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    const category = skillCategories.find(cat => cat.id === activeCategory);
    return category ? category.skills.map(skill => ({ ...skill, category: category.name, color: category.color })) : [];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="group relative bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Skill Icon */}
              <div className="text-4xl text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              {skill.level && (
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color || 'from-primary-500 to-secondary-500'}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.2 * index, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {skill.level}%
                  </div>
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always exploring new technologies and frameworks to stay current with industry trends. 
              Currently diving deeper into cloud architecture, microservices, and AI/ML integration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;