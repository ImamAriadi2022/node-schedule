import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import './DevSect.css'; // Import file CSS

const devData = [
  { nama: "Nur Emy Ramadhani", bagian: "Developer", foto: "img/emy.jpg" },
  { nama: "Fiska Viola Nadila", bagian: "Developer", foto: "img/fiska.jpg" },
  { nama: "Nada Berliani Putri", bagian: "Developer", foto: "img/nada.jpg" },
];

function DevSect() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDev = devData.filter(dev =>
    dev.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="p-5 bg-light">
      <h2 className="text-success mb-4">Daftar Developer</h2>
      <InputGroup className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cari berdasarkan nama developer..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Row className="dev-cards">
        {filteredDev.map((dev, index) => (
          <Col md={4} key={index} className="mb-4 d-flex">
            <Card className="shadow-sm flex-fill">
              <Card.Img variant="top" src={dev.foto} alt={dev.nama} />
              <Card.Body>
                <Card.Title>{dev.nama}</Card.Title>
                <Card.Text>
                  <strong>Bagian:</strong> {dev.bagian}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DevSect;