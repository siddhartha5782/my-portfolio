import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch('details.json')
      .then((response) => response.json())
      .then((data) => setAbout(data.about))
      .catch((error) => console.error('Error fetching details:', error));
  }, []);

  if (!about) return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        {/* Intro */}
        <section className="about-hero">
          <motion.h1 className="section-title" variants={itemVariants}>
            About <span className="text-gradient">Me</span>
          </motion.h1>
          <motion.p className="about-intro" variants={itemVariants}>
            {about.introduction}
          </motion.p>
        </section>

        {/* Expertise Grid */}
        <section className="expertise-section">
          <motion.h2 className="section-subtitle" variants={itemVariants}>Expertise</motion.h2>
          <div className="expertise-grid">
            {about.expertise.map((skill, index) => (
              <motion.div 
                key={index} 
                className="glass-card expertise-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="expertise-header">
                  <div className="expertise-icon-wrapper">
                    <img src={about.expertise_img[index]} alt={about.expertise_title[index]} />
                  </div>
                  <h3>{about.expertise_title[index]}</h3>
                </div>
                <p>{skill}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline (Experience & Education) */}
        <section className="timeline-section">
          <div className="timeline-container">
            {/* Experience */}
            <div className="timeline-column">
              <motion.h2 className="section-subtitle" variants={itemVariants}>
                <FaBriefcase className="title-icon" /> Experience
              </motion.h2>
              <div className="timeline">
                {about.experience.map((exp, index) => (
                  <motion.div key={index} className="timeline-item" variants={itemVariants}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="timeline-column">
              <motion.h2 className="section-subtitle" variants={itemVariants}>
                <FaGraduationCap className="title-icon" /> Education
              </motion.h2>
              <div className="timeline">
                {about.education.map((edu, index) => (
                  <motion.div key={index} className="timeline-item" variants={itemVariants}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{edu.degree}</h3>
                      <h4>{edu.institution}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        {about.publications && about.publications.length > 0 && (
          <section className="publications-section">
            <motion.h2 className="section-subtitle" variants={itemVariants}>
              <FaCode className="title-icon" /> Publications
            </motion.h2>
            <div className="publications-list">
              {about.publications.map((pub, index) => (
                <motion.div key={index} className="glass-card publication-card" variants={itemVariants}>
                  <h3>{pub.title}</h3>
                  <p className="pub-journal">{pub.journal}</p>
                  {pub.doi && (
                    <a 
                      href={`https://doi.org/${pub.doi}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pub-doi"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default About;

