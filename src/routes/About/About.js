import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Smartphone, Award, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const expertise = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "React, Vue.js, Angular, TypeScript"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Node.js, Python, Java, REST APIs"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description: "AWS, GCP, Docker, Kubernetes"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "React Native, Flutter"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Master's in Computer Science with focus on Software Engineering"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Led development teams in multiple successful projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software developer with a strong foundation in computer science 
            and hands-on experience in building scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Currently pursuing my Master's in Computer Science at The University of Texas at Arlington, 
                I bring a unique blend of academic knowledge and practical experience to every project.
              </p>
              <p>
                My professional journey includes internships at leading companies like Fractal Analytics 
                and Profound Ventures, where I've contributed to developing scalable web applications, 
                optimizing system performance, and implementing cutting-edge technologies.
              </p>
              <p>
                I'm passionate about creating solutions that not only meet technical requirements but 
                also provide exceptional user experiences. My approach combines clean code practices 
                with innovative problem-solving to deliver robust applications.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8 space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-primary-500 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-primary-500 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Personal Touch */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
              Beyond Code
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;