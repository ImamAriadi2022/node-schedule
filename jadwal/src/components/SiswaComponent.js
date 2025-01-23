import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

function SiswaComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [siswaData, setSiswaData] = useState([]);

  useEffect(() => {
    const fetchSiswaData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/siswa');
        setSiswaData(response.data);
      } catch (error) {
        console.error('Error fetching siswa data:', error);
      }
    };

    fetchSiswaData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSiswa = siswaData.filter(siswa =>
    siswa.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="p-5 bg-light">
      <h2 className="text-success mb-4">Daftar Siswa</h2>
      <InputGroup className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cari berdasarkan nama siswa..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Row>
        {filteredSiswa.map((siswa, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={siswa.foto} alt={siswa.nama} />
              <Card.Body>
                <Card.Title>{siswa.nama}</Card.Title>
                <Card.Text>
                  <strong>Kelas:</strong> {siswa.kelas}<br />
                  <strong>Asal Sekolah:</strong> {siswa.asalSekolah}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SiswaComponent;