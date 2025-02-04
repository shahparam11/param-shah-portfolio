import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-overlay"></div>
            <div className="about-content">
                <div className="about-text">
                    <h2>Hello,</h2>
                    <h1>
                        I'm Param<span className="accent">.</span>
                    </h1>
                    <h3>Software Developer</h3>
                    {/* <p className="about-description">
                        Software Developer with a passion for problem-solving and building efficient, scalable solutions. 
                        I enjoy working on projects that enhance user experiences, optimize workflows, and drive meaningful impact. 
                        With a strong analytical mindset, I thrive in collaborative environments where I can contribute innovative ideas and continuously refine my approach.
                        I am always eager to learn, adapt, and take on new challenges that push the boundaries of what technology can achieve.
                    </p> */}
                </div>
                <div className="profile-image-container">
                    <img src="/personal-photo1.jpg" alt="Param" className="profile-image" />
                </div>
            </div>
        </div>
    );
};

export default About;