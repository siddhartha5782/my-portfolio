import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import social media icons

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
            href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </Button>
          <Button
            variant="outline-dark"
            className="d-block mb-3"
            href="https://github.com/your-username" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </Button>
          <Button
            variant="outline-info"
            className="d-block mb-3"
            href="https://twitter.com/your-username" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
