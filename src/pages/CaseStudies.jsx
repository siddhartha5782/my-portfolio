import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CaseStudies = () => {
  return (
    <Container className="case-studies-container mt-5">
      <h2 className="text-center">Case Studies</h2>
      <p className="lead text-center">In-depth analysis of some of my most impactful projects.</p>
      
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Case Study 1: AI-powered Recommendation System</Card.Title>
              <Card.Text>
                This case study outlines how I developed an AI-powered recommendation engine for an e-commerce platform, improving customer engagement by 20%.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Case Study 2: Scalable Web Application</Card.Title>
              <Card.Text>
                Detailed documentation on building a scalable, real-time web application for managing logistics across multiple teams.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CaseStudies;
