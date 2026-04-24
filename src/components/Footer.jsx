import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-brand">
          SN<span className="dot">.</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/siddhartha5782" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/siddhartha-nalla-92319521a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:contact@example.com"><FaEnvelope /></a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Siddhartha Nalla. No rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

