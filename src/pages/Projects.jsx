import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className="projects-container mt-5">
      <h2 className="text-center">My Projects</h2>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>AI-powered Web App</Card.Title>
              <Card.Text>
                A web app that uses machine learning models to predict outcomes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>React Portfolio Site</Card.Title>
              <Card.Text>
                A modern, responsive portfolio website built using React and Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
