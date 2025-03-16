import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './Recommendations.css';

// Import avatar images
import avatar1 from '../../assets/avatars/avatar1.jpg';
import avatar2 from '../../assets/avatars/avatar2.jpg';
import avatar3 from '../../assets/avatars/avatar3.jpg';
import avatar4 from '../../assets/avatars/avatar4.jpg';
import avatar5 from '../../assets/avatars/avatar5.jpg';
import avatar6 from '../../assets/avatars/avatar6.jpg';

const Recommendations = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chetan Madhavi",
      position: "Technical Architect @ Fractal Analytics",
      text: "I highly recommend Param for his exceptional performance during our system transformation in Fractal. In a short time span, he displayed remarkable dedication, technical expertise, and problem-solving skills. His ability to grasp complex concepts quickly, coupled with his proactive approach, was instrumental in the success of the project.",
      avatar: avatar1
    },
    {
      id: 2,
      name: "SAI SUMANA A",
      position: "Full-Stack Software Engineer",
      text: "I had the opportunity to work alongside Param, and he is an exceptional teammate who brings both technical expertise and a collaborative mindset to every project. His ability to tackle complex problems with a structured approach and his eagerness to share knowledge make him a valuable team player.",
      avatar: avatar2
    },
    {
      id: 3,
      name: "Antara Mahimkar",
      position: "Senior Software Engineer @ PGS Ex Fractal,TCS",
      text: "I worked with Param while he was interning with Fractal. Throughout his tenure Param demonstrated remarkable expertise in all of his assignments. He is a quick learner and flexible to any change. He proactively participated in team discussions proposing creative solutions and tackling problems with an open mind.",
      avatar: avatar3
    },
    {
      id: 4,
      name: "Mohsin Shaikh",
      position: "Senior Engineer @ Fractal Analytics",
      text: "I had the pleasure of working with Param for six months when he was interning with the firm I work at, and I truly appreciated his dedication and work ethic. His willingness to put in the effort and learn made a real difference. He took feedback well, showed persistence in solving problems and was always eager to improve.",
      avatar: avatar4
    },
    {
      id: 5,
      name: "R Swarna",
      position: "Software Engineer @ Profound Ventures",
      text: "Param Shah is a proactive and resourceful teammate who consistently takes initiative to solve challenges efficiently. He is always helpful, quick to collaborate, and goes the extra mile to ensure smooth development processes. His ability to anticipate needs and contribute effectively makes him a valuable asset to any team.",
      avatar: avatar5
    },
    {
      id: 6,
      name: "Carl Youngblood",
      position: "Co-founder @ Blockscale, former AWS blockchain architect",
      text: "Param worked as an intern on a healthcare-related SaaS application we were building from scratch. He was eager and quick to learn and a helpful colleague to other team members, reaching out to make sure that everyone on the team was succeeding and unblocked by any obstacles.",
      avatar: avatar6
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="recommendations" className="recommendations-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Recommendations</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">What people say about working with me</p>
        </div>
        
        <div className="testimonial-carousel">
          <button 
            className="carousel-button prev-button" 
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="testimonial-card"
              >
                <div className="testimonial-card-inner">
                  <div className="testimonial-quote-icon">
                    <FaQuoteRight />
                  </div>
                  <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                  <div className="testimonial-author-container">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={`${testimonials[currentIndex].name}`} 
                      className="testimonial-avatar" 
                    />
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
                      <p className="testimonial-position">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            className="carousel-button next-button" 
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations; 