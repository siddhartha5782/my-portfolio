import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch('details.json')
      .then((response) => response.json())
      .then((data) => setContact(data.contact))
      .catch((error) => console.error('Error fetching details:', error));
  }, []);

  if (!contact) return (
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
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <section className="contact-hero">
          <motion.h1 className="section-title" variants={itemVariants}>
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p className="contact-intro" variants={itemVariants}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
        </section>

        <div className="contact-content">
          <motion.div className="glass-card contact-card" variants={itemVariants}>
            <div className="contact-methods">
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method"
              >
                <div className="method-icon linkedin"><FaLinkedin /></div>
                <div className="method-info">
                  <h3>LinkedIn</h3>
                  <p>Connect with me professionally</p>
                </div>
              </a>

              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method"
              >
                <div className="method-icon github"><FaGithub /></div>
                <div className="method-info">
                  <h3>GitHub</h3>
                  <p>Check out my open-source work</p>
                </div>
              </a>

              <a 
                href={`mailto:${contact.email}`} 
                className="contact-method"
              >
                <div className="method-icon email"><FaEnvelope /></div>
                <div className="method-info">
                  <h3>Email</h3>
                  <p>Send me a direct message</p>
                </div>
              </a>
            </div>

            <div className="contact-cta">
              <p>Looking for a collaboration?</p>
              <a href={`mailto:${contact.email}`} className="btn-premium">
                Let's Talk <FaPaperPlane className="btn-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

