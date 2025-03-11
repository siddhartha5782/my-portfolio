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

const Home = () => {
  const [home, setHome] = useState(null);
      useEffect(() => {
        fetch('details.json')
          .then((response) => response.json())
          .then((data) => setHome(data.home))
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
      <Container className="home-container text-center mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            
            <h1 className="display-6">{home.title}</h1>
            <p className="lead">{home.introduction}</p>
            
              {home.highlights.map((item, index) => (
                <p key={index} className="lead">{item}</p>
              ))}
           
            <p className="lead">{home.cta}</p>

          </Col>
        </Row>
      </Container>
    </motion.div>
    
  );
};

export default Home;
