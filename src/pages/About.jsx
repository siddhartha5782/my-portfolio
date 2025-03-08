import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

const About = () => {
  const [about, setAbout] = useState([]);
    useEffect(() => {
      fetch('about.json')
        .then((response) => response.json())
        .then((data) => setAbout(data.about))
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
              <Container className="about-container text-center mt-5">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <h2 className='display-6'>About Me</h2>
                    <p className='lead'>
                    {about}
                    </p>
                  </Col>
                </Row>
              </Container>
            </motion.div>
    
  );
};

export default About;
