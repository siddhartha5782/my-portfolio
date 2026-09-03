import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  // Categories in the order they first appear in the data (already ranked by importance)
  const categories = useMemo(() => {
    const seen = [];
    projects.forEach((p) => {
      if (p.category && !seen.includes(p.category)) seen.push(p.category);
    });
    return ['All', ...seen];
  }, [projects]);

  const visible = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [projects, activeCategory]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
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
            {projects.length} projects across AI systems, computer vision, machine
            learning, signal processing and web engineering — ordered from most to
            least significant.
          </motion.p>
        </section>

        {categories.length > 1 && (
          <motion.div className="filter-bar" variants={itemVariants}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="filter-count">
                  {cat === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </motion.div>
        )}

        <div className="projects-grid">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              className="glass-card project-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>

                {project.category && (
                  <span className="project-category">{project.category}</span>
                )}

                <p>{project.description}</p>

                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-footer">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub <FaArrowRight />
                    </a>
                  ) : (
                    <span className="project-private">
                      Private / industry work — details on request
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
