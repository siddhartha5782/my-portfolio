import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className='lead'>
        <Navbar.Brand as={Link} to="/">Siddhartha Nalla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/my-portfolio/">Home</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio/about">About</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio/case-studies">Case Studies</Nav.Link>  {/* New Case Studies Tab */}
            <Nav.Link as={Link} to="/my-portfolio/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
