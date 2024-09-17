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
              <Card.Title>3D Reconstruction using Fringe Projection</Card.Title>
              <Card.Text>
              To reconstruct a 3D model of an object by projection of fringe patterns using Deep Learning methods. Fringe Projections are projected onto a 3D object and an image is taken from camera. This image is then used to find the depth map of the 3D object. An extensive testing and constant training of Deep Learning models such as UNet, PSMNet and HRNet were proved useful and calibration is done to get the final 3D Profiling.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Fruit Dimension Estimation</Card.Title>
              <Card.Text>
              To estimate and analyze the size and weight estimates of fruits from an image of tree. A project in collaboration with an Agritech company, Vegrow where a camera is used to take images of trees from a farm containing fruits and the sizes of fruits are estimated using Deep Learning techniques and statistics and calibration to get the final result in mm. Numerous field tests were conducted to make the most generic and robust model.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Fruit Quality Estimation</Card.Title>
              <Card.Text>
              To estimate and classify the defects of fruits from an image of array of fruits lying on the ground. This is a project I took up as an AI Engineer Intern. We use a different version of Transfiner model to detect the fruits lying on the ground and send the fruit region to another Transfiner model to find defects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Human Pose Estimation and Tracking</Card.Title>
              <Card.Text>
              To estimate a human skeleton from an image of a person. A video of people is given as input. The Openpose model estimates Part Affinity Fields and Confidence Maps which are used to estimate the Human Pose / Human skeleton.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Missile guidance using proportional navigation law</Card.Title>
              <Card.Text>
                The main focus of this project is to implement an algorithm for a missile to follow the trajectory of a flight and adjust its direction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Batch xml to json</Card.Title>
              <Card.Text>
              A small tool to convert batch xml files to json for pre processing of data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Seismic Signal Analysis using Synchrosqueezing Transform</Card.Title>
              <Card.Text>
              Detection of different frequencies in the seismic wave using wavelet transform and using synchrosqueezing re-assignment method to observe the frequencies in time-frequency representation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
