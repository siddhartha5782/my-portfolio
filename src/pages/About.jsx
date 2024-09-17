import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-container mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>About Me</h2>
          <p>
          I’m Siddhartha Nalla, a passionate AI Engineer and data enthusiast with a strong foundation in data science, analytics, and engineering. I hold a Master’s degree in Data Science, Analytics, and Engineering from Arizona State University and a Bachelor’s degree in Electrical Engineering from the Indian Institute of Technology, Tirupati.

My professional experience includes working as an AI Engineer at Vegrow, where I developed cutting-edge models for fruit quality assessment and dimension estimation using advanced technologies such as iPhone LiDAR, Intel RealSense, and Transfiner models. I also enhanced the company’s web UI, transforming it into a dynamic, data-driven dashboard to help interpret real-time results more effectively.

Through my education and work experience, I’ve gained a deep understanding of machine learning, AI, and data analytics, which I apply to solve complex challenges and drive innovation. I’m excited to continue exploring new frontiers in the world of data and AI.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
