import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="home-container text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">
            I am an AI Engineer passionate about building modern web applications and creative solutions. Explore my projects and get to know more about me.
          </p>
          <Button variant="primary" href="/projects">View Projects</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
