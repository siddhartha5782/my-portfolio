import React, {useEffect, useState} from 'react';
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

const CaseStudies = () => {
  const [casestudies, setCasestudies] = useState([]);
      useEffect(() => {
        fetch('casestudies.json')
          .then((response) => response.json())
          .then((data) => setCasestudies(data))
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
              <Container className="projects-container mt-5 text-center">
                  <h2 className="display-6">Case Studies</h2>
                  <Row className="mt-4">
                    {casestudies.map((project, index) => (
                      <Col md={6} key={index} className="mb-4">
                        <Card className='lead'>
                          <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            {project.website && (
                              <Card.Link href={project.website} target="_blank" rel="noopener noreferrer">
                                View Project
                              </Card.Link>
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

export default CaseStudies;
