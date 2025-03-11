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
  const [about, setAbout] = useState(null);
    useEffect(() => {
      fetch('details.json')
        .then((response) => response.json())
        .then((data) => setAbout(data.about))
        .catch((error) => console.error('Error fetching details:', error));
    }, []);
    if (!about) return <p>Loading...</p>;
  return (
    <motion.div
        variants={contactVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={contactTransition}
      >
        <Container className="about-container text-center mt-5 lead">
          <Row className="justify-content-center">
            <Col md={8}>                   
              

              <h2 className='display-6'>{about.title}</h2>
              <p>{about.introduction}</p>

              <h3 className='display-6'>Education</h3>
              
                {about.education.map((edu, index) => (
                  <p key={index}>
                    <strong>{edu.degree}</strong> - {edu.institution}
                  </p>
                ))}
              

              <h3 className='display-6'>Expertise</h3>
              
                {about.expertise.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              

              <h3 className='display-6'>Experience</h3>
              
                {about.experience.map((exp, index) => (
                  <p key={index}>
                    <strong>{exp.role}</strong> at {exp.company} - {exp.description}
                  </p>
                ))}
              

              <p>{about.contact}</p>

            </Col>
          </Row>
        </Container>
      </motion.div>
    
  );
};

export default About;
