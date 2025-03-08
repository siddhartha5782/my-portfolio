import React from 'react';
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
            <h1 className="display-6">Welcome to My Portfolio</h1>
            <p className="lead">
            Hi, I’m Siddhartha Nalla, a passionate data enthusiast with a background in Data Science and Engineering. My journey in AI and analytics has allowed me to solve real-world problems, from developing cutting-edge models for fruit quality assessment to creating dynamic dashboards for data visualization. I specialize in leveraging data to uncover insights, optimize processes, and build intelligent solutions. Explore my projects, experiences, and how I’m driven by innovation and technology to make an impact in the ever-evolving world of data.
            </p>
            
          </Col>
        </Row>
      </Container>
    </motion.div>
    
  );
};

export default Home;
