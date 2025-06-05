import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const contactVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
};

const contactTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

const Home = () => {
  const [home, setHome] = useState(null);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('details.json')
      .then((response) => response.json())
      .then((data) => {
        setHome(data.home);
        setFeatured(data.featuredProjects || []);
      })
      .catch((error) => console.error('Error fetching about:', error));
  }, []);

  if (!home) return <p>Loading...</p>;

  return (
    <motion.div
      variants={contactVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={contactTransition}
    >
      <Container className="home-container mt-5">
        <Row className="align-items-start">
          {/* Left: Intro */}
          <Col md={6} className="text-light text-center mb-4">
            <h1 className="display-6">{home.title}</h1>
            <p className="lead">{home.introduction}</p>
            {home.highlights.map((item, index) => (
              <p key={index} className="lead">{item}</p>
            ))}
            <p className="lead">{home.cta}</p>
          </Col>

          {/* Right: Featured Projects */}
          <Col md={6}>
            <h4 className="text-light mb-4">✨ Featured Projects</h4>
            {featured.map((project, index) => (
              <Card
                key={index}
                className="lead"
                style={{
                        backgroundColor: 'rgba(128,128,128,0.3)',
                        color: 'white',
                        border: '1px solid #444',
                        borderRadius: '12px',
                        padding: '20px'
                      }}
              >
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.website && (
                    <a
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2"
                      style={{
                            backgroundColor: "#474343", 
                            borderRadius: "8px",
                            padding: "10px 15px",
                            textDecoration: "none",
                            color: "white",
                            display: "inline-block",
                            fontWeight: "600",
                            transition: "all 0.3s ease-in-out"
                          }}
                      
                    >
                      🔗 View Project
                    </a>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
