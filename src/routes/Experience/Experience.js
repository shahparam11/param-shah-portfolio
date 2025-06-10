import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Profound Ventures",
      location: "Dallas, TX",
      period: "Sep 2024 - Dec 2024",
      type: "Internship",
      description: [
        "Developed and deployed multiple modules for MediPoints HealthCare System, a compliance-driven web application, focusing on user activity tracking and dynamic role-based compensation for healthcare professionals.",
        "Engineered and executed comprehensive unit tests utilizing Vitest, resulting in a remarkable 30% increase in code reliability, significantly decreasing manual testing efforts by over 40%, streamlining the overall development process."
      ],
      technologies: ["React", "Node.js", "Vitest", "Healthcare Systems"]
    },
    {
      title: "Software Development Intern",
      company: "Fractal Analytics",
      location: "Mumbai, India",
      period: "Jan 2023 - Jun 2023",
      type: "Internship",
      description: [
        "Engineered and deployed over 15 responsive web pages utilizing Vue.js and the Quasar framework, enhancing user engagement by 40% by incorporating dynamic dashboards, reports, forms, and charts while adhering to industry best practices in responsive design.",
        "Successfully adapted existing company code into three different tech stacks tailored to unique business requirements, streamlining development processes that led to a 20% improvement in project delivery timelines.",
        "Developed and optimized server-side applications using Node.js for seamless API integration with a MySQL database, resulting in a 30% reduction in data retrieval times and supporting an increase in overall application performance by 25%."
      ],
      technologies: ["Vue.js", "Quasar", "Node.js", "MySQL", "REST APIs"]
    }
  ];

  const education = [
    {
      degree: "Master of Science, Computer Science",
      institution: "The University of Texas at Arlington",
      location: "Arlington, TX",
      period: "Aug 2023 - May 2025",
      gpa: "3.5/4.0",
      focus: "Software Engineering & Database Systems",
      description: [
        "Specialized in advanced software engineering principles and database system design",
        "Coursework includes distributed systems, machine learning, and cloud computing",
        "Active participant in research projects and academic collaborations"
      ]
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      institution: "MIT Art's Design and Technology",
      location: "Pune, India",
      period: "Aug 2019 - Jun 2023",
      gpa: "3.3/4.0",
      focus: "Computer Science Fundamentals",
      description: [
        "Strong foundation in computer science fundamentals and programming",
        "Completed projects in web development, mobile applications, and data structures",
        "Participated in coding competitions and technical workshops"
      ]
    }
  ];

  const TimelineItem = ({ item, index, isEducation = false }) => (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-secondary-500"></div>
      
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform -translate-x-1/2 shadow-lg"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
      />

      {/* Content */}
      <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
        <div className="flex flex-wrap items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {isEducation ? item.degree : item.title}
            </h3>
            <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
              <Building className="w-4 h-4 mr-2" />
              {isEducation ? item.institution : item.company}
            </div>
          </div>
          {!isEducation && item.type && (
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              {item.type}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {item.period}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {item.location}
          </div>
          {isEducation && (
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-1" />
              GPA: {item.gpa}
            </div>
          )}
        </div>

        {isEducation && item.focus && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium">
              Focus: {item.focus}
            </span>
          </div>
        )}

        <ul className="space-y-2 mb-4">
          {item.description.map((desc, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary-500 mr-2 mt-1">•</span>
              {desc}
            </li>
          ))}
        </ul>

        {!isEducation && item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background that shaped my expertise in software development.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Education
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {experiences.map((exp, index) => (
                  <TimelineItem key={index} item={exp} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {education.map((edu, index) => (
                  <TimelineItem key={index} item={edu} index={index} isEducation={true} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;