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
              

              {/* <h3 className='display-6'>Expertise</h3>
              
                {about.expertise.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))} */}
              <h3 className="display-6 mb-4">Expertise</h3>
              <Row className="justify-content-center">
                {about.expertise.map((skill, index) => (
                  <Col key={index} xs={12} sm={6} md={6} lg={6} xl={6} className="mb-4">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="p-4 shadow-sm rounded-4 border h-100"
                    >
                      <img src={about.expertise_img[index]} alt={about.expertise_title[index]} className="mb-3"
                        style={{ width: '70px', height: '70px', objectFit: 'contain', borderRadius: '50%' }}></img>
                      <h4>{about.expertise_title[index]}</h4>
                      <p>{skill}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              

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
