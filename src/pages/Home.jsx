import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaBrain, FaDatabase } from 'react-icons/fa';
import './Home.css';


const Home = () => {
  const [home, setHome] = useState(null);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/details.json`)
      .then((response) => response.json())
      .then((data) => {
        setHome(data.home);
        setFeatured(data.featuredProjects || []);
      })
      .catch((error) => console.error('Error fetching about:', error));
  }, []);

  if (!home) return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.span className="eyebrow" variants={itemVariants}>
            Software Engineer · AI/ML · Backend
          </motion.span>
          <motion.h1 className="hero-title" variants={itemVariants}>
            {home.title}{' '}
            {home.titleAccent && <span className="text-gradient">{home.titleAccent}</span>}
          </motion.h1>
          <motion.p className="hero-intro" variants={itemVariants}>
            {home.introduction}
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <Link to="/projects" className="btn-premium">
              View Work <FaArrowRight className="btn-icon" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights / Skills Bar */}
      <section className="highlights-bar">
        <div className="container">
          <div className="highlights-grid">
            {home.highlights.slice(0, 3).map((item, index) => (
              <motion.div key={index} className="highlight-item" variants={itemVariants}>
                {index === 0 && <FaBrain className="highlight-icon" />}
                {index === 1 && <FaDatabase className="highlight-icon" />}
                {index === 2 && <FaCode className="highlight-icon" />}
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="featured-section">
        <div className="container">
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="featured-grid">
            {featured.map((project, index) => (
              <motion.div 
                key={index} 
                className="glass-card project-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  {project.website && (
                    <a
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Explore Project <FaArrowRight />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

