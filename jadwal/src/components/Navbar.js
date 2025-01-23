import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#228B22' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Schedule Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/guru" style={{ color: 'white' }}>Guru</Nav.Link>
            <Nav.Link as={Link} to="/siswa" style={{ color: 'white' }}>Siswa</Nav.Link>
            <Nav.Link as={Link} to="/developer" style={{ color: 'white' }}>Developer</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" style={{ color: 'white' }}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;