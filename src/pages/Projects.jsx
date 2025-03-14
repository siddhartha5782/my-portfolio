import React,{useEffect, useState} from 'react';
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

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);
  return (
    <motion.div
              variants={contactVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={contactTransition}
            >
              <Container className="projects-container mt-5 text-center" style={{ minHeight: "100vh" }}>
                <h2 className="display-6">My Projects</h2>
                <Row className="mt-4">
                  {projects.map((project, index) => (
                    <Col md={6} key={index} className="mb-4">
                      <Card className='lead'>
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
                              backgroundColor: "#212529", 
                              borderRadius: "8px",
                              padding: "10px 15px",
                              textDecoration: "none",
                              color: "white",
                              display: "inline-block",
                              fontWeight: "600",
                              transition: "all 0.3s ease-in-out"
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = "#494949"}
                            onMouseLeave={(e) => e.target.style.backgroundColor = "#212529"}
                          >
                            🔗 View Project
                          </a>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </motion.div>
    
  );
};

export default Projects;
