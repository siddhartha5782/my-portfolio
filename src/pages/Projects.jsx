import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="projects-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <section className="projects-hero">
          <motion.h1 className="section-title" variants={itemVariants}>
            My <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p className="projects-intro" variants={itemVariants}>
            A showcase of my work in AI, Data Science, and Software Engineering.
          </motion.p>
        </section>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="glass-card project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-icons">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  {project.website && (
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-premium project-btn"
                    >
                      View Details <FaExternalLinkAlt className="btn-icon" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

