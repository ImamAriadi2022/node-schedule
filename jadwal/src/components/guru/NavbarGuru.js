import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarGuru() {
  const handleLogout = () => {
    // Logika untuk logout
    console.log("Logout");
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#228B22' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Schedule Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/guru/dashboard" style={{ color: 'white' }}>Dashboard</Nav.Link>
            <Button variant="outline-light" onClick={handleLogout} className="ms-2">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarGuru;