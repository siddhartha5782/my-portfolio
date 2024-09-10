import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-container mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            I am an AI Engineer with experience in full-stack development, focused on creating innovative solutions in the tech world. My work spans building scalable systems, AI applications, and clean user interfaces.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
