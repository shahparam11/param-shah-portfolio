import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Avatar from 'react-avatar';
import './Recommendations.css';

const Recommendations = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chetan Madhavi",
      position: "Technical Architect @ Fractal Analytics",
      text: "I highly recommend Param for his exceptional performance during our system transformation in Fractal. In a short time span, he displayed remarkable dedication, technical expertise, and problem-solving skills. His ability to grasp complex concepts quickly, coupled with his proactive approach, was instrumental in the success of the project. Param consistently went above and beyond to ensure smooth execution, and his contributions have had a lasting positive impact.",
      rating: 5,
      color: "#4A90E2"
    },
    {
      id: 2,
      name: "SAI SUMANA A",
      position: "Full-Stack Software Engineer",
      text: "I had the opportunity to work alongside Param, and he is an exceptional teammate who brings both technical expertise and a collaborative mindset to every project. His ability to tackle complex problems with a structured approach and his eagerness to share knowledge make him a valuable team player. Param is proactive in identifying challenges and finding solutions, always ensuring the team moves forward efficiently.",
      rating: 5,
      color: "#F5A623"
    },
    {
      id: 3,
      name: "Antara Mahimkar",
      position: "Senior Software Engineer @ PGS Ex Fractal,TCS",
      text: "I worked with Param while he was interning with Fractal. Throughout his tenure Param demonstrated remarkable expertise in all of his assignments. He is a quick learner and flexible to any change. He proactively participated in team discussions proposing creative solutions and tackling problems with an open mind. I have no doubt that he will excel in their future endeavors and continue to make valuable contributions to any team.",
      rating: 5,
      color: "#D0021B"
    },
    {
      id: 4,
      name: "Mohsin Shaikh",
      position: "Senior Engineer @ Fractal Analytics",
      text: "I had the pleasure of working with Param for six months when he was interning with the firm I work at, and I truly appreciated his dedication and work ethic. While he was still refining his logical thinking, his willingness to put in the effort and learn made a real difference. He took feedback well, showed persistence in solving problems and was always eager to improve. With this mindset, I have no doubt he will continue to grow and do well in his career.",
      rating: 4,
      color: "#7ED321"
    },
    {
      id: 5,
      name: "R Swarna",
      position: "Software Engineer @ Profound Ventures",
      text: "Param Shah is a proactive and resourceful teammate who consistently takes initiative to solve challenges efficiently. He is always helpful, quick to collaborate, and goes the extra mile to ensure smooth development processes. His ability to anticipate needs and contribute effectively makes him a valuable asset to any team. Highly recommend working with him!",
      rating: 5,
      color: "#9013FE"
    },
    {
      id: 6,
      name: "Carl Youngblood",
      position: "Co-founder @ Blockscale, former AWS blockchain architect",
      text: "Param worked as an intern on a healthcare-related SaaS application we were building from scratch. He was eager and quick to learn and a helpful colleague to other team members, reaching out to make sure that everyone on the team was succeeding and unblocked by any obstacles. Param will be a tremendous contribution to any team he is a part of.",
      rating: 5,
      color: "#50E3C2"
    }
  ];

  return (
    <section id="recommendations" className="recommendations-section">
      <div className="section-container">
        <h2 className="section-title">Recommendations</h2>
        <p className="section-subtitle">What people say about working with me</p>
        
        <div className="recommendations-grid">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="recommendation-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: testimonial.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <div className="avatar-container">
                  <Avatar 
                    name={testimonial.name} 
                    size="50" 
                    round={true} 
                    color={testimonial.color}
                    className="avatar"
                  />
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? "star filled" : "star"} 
                    />
                  ))}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations; 