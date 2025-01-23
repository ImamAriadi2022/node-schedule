import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form, InputGroup, Alert } from 'react-bootstrap';
import axios from 'axios';

function SiswaDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [guruData, setGuruData] = useState([]);
  const [selectedGurus, setSelectedGurus] = useState([]);

  useEffect(() => {
    const fetchGuruData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/guru');
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

  const handleSelectGuru = (guru) => {
    if (!selectedGurus.includes(guru)) {
      setSelectedGurus([...selectedGurus, guru]);
    }
  };

  const handleDeselectGuru = (guru) => {
    setSelectedGurus(selectedGurus.filter(selectedGuru => selectedGuru !== guru));
  };

  const filteredGuru = guruData.filter(guru =>
    guru.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-success mb-4">Dashboard Siswa</h2>
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
              <Col md={6} key={index} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>{guru.nama}</Card.Title>
                    <Card.Text>
                      <strong>Mata Pelajaran:</strong> {guru.mataPelajaran}
                    </Card.Text>
                    <Button variant="success" onClick={() => handleSelectGuru(guru)}>Pilih Guru</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {selectedGurus.length === 0 && (
            <Alert variant="warning" className="mt-4">
              Silakan pilih guru untuk melihat jadwal kelas.
            </Alert>
          )}
          {selectedGurus.length > 0 && (
            <div className="mt-4">
              {selectedGurus.map((guru, index) => (
                <Card className="mt-4 shadow-sm" key={index}>
                  <Card.Body>
                    <Card.Title>Jadwal Kelas {guru.nama}</Card.Title>
                    <ListGroup>
                      {guru.jadwal.map((jadwal, index) => (
                        <ListGroup.Item key={index}>{jadwal}</ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Button variant="danger" className="mt-3" onClick={() => handleDeselectGuru(guru)}>Hapus Guru</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SiswaDashboard;