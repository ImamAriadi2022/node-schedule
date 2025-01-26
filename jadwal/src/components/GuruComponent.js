import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

function GuruComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [guruData, setGuruData] = useState([]);

  useEffect(() => {
    const fetchGuruData = async () => {
      try {
        const response = await axios.get('https://node-schedule-sigma.vercel.app/users/guru');
        setGuruData(response.data);
      } catch (error) {
        console.error('Error fetching guru data:', error);
      }
    };

    fetchGuruData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGuru = guruData.filter(guru =>
    guru.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="p-5 bg-light">
      <h2 className="text-success mb-4">Daftar Guru</h2>
      <InputGroup className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cari berdasarkan nama guru..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Row>
        {filteredGuru.map((guru, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={guru.foto} alt={guru.nama} />
              <Card.Body>
                <Card.Title>{guru.nama}</Card.Title>
                <Card.Text>
                  <strong>Mata Pelajaran:</strong> {guru.mataPelajaran}<br />
                  <strong>Asal Sekolah:</strong> {guru.asalSekolah}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GuruComponent;