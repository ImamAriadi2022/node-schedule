import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarSiswa() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#228B22' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Schedule Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/siswa-hal/dashboard" style={{ color: 'white' }}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/siswa-hal/kegiatan" style={{ color: 'white' }}>Kegiatan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSiswa;