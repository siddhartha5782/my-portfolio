import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'; // Import social media icons

const Contact = () => {
  return (
    <Container className="contact-container mt-5 text-center">
      <h2>Contact Me</h2>
      <p className="lead">Feel free to connect with me on social media.</p>
      <Row className="justify-content-center">
        <Col md={4}>
          <Button
            variant="outline-primary"
            className="d-block mb-3"
            href="https://www.linkedin.com/in/nalla-siddhartha-92319521a/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </Button>
          <Button
            variant="outline-dark"
            className="d-block mb-3"
            href="https://github.com/siddhartha5782" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </Button>

          <Button
            variant="outline-dark"
            className="d-block mb-3"
            href="/resume.pdf" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> My Resume
            
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
