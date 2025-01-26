import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form, InputGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import './SiswaDashboard.css'; // Import file CSS

function SiswaDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [guruData, setGuruData] = useState([]);
  const [selectedGurus, setSelectedGurus] = useState([]);

  useEffect(() => {
    const fetchGuruData = async () => {
      try {
        const response = await axios.get('https://node-schedule-sigma.vercel.app/users/guru');
        const guruDataWithJadwal = await Promise.all(response.data.map(async (guru) => {
          const jadwalResponse = await axios.get(`https://node-schedule-sigma.vercel.app/schedules?guruId=${guru.id}`);
          return { ...guru, jadwal: jadwalResponse.data || [] };
        }));
        setGuruData(guruDataWithJadwal);
      } catch (error) {
        console.error('Error fetching guru data:', error);
      }
    };

    const fetchSelectedGurus = async () => {
      try {
        const response = await axios.get('https://node-schedule-sigma.vercel.app/selected-gurus');
        const selectedGurusWithJadwal = await Promise.all(response.data.map(async (guru) => {
          const jadwalResponse = await axios.get(`https://node-schedule-sigma.vercel.app/schedules?guruId=${guru.guruId}`);
          return { ...guru, jadwal: jadwalResponse.data || [] };
        }));
        setSelectedGurus(selectedGurusWithJadwal);
      } catch (error) {
        console.error('Error fetching selected gurus:', error);
      }
    };

    fetchGuruData();
    fetchSelectedGurus();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectGuru = async (guru) => {
    if (!selectedGurus.some(selectedGuru => selectedGuru.id === guru.id)) {
      try {
        await axios.post('https://node-schedule-sigma.vercel.app/selected-gurus', { guruId: guru.id });
        setSelectedGurus([...selectedGurus, guru]);
      } catch (error) {
        console.error('Error selecting guru:', error);
      }
    }
  };

  const handleDeselectGuru = async (guru) => {
    try {
      await axios.delete(`https://node-schedule-sigma.vercel.app/selected-gurus/${guru.id}`);
      setSelectedGurus(selectedGurus.filter(selectedGuru => selectedGuru.id !== guru.id));
    } catch (error) {
      console.error('Error deselecting guru:', error);
    }
  };

  const filteredGuru = guruData.filter(guru =>
    guru.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="p-5 bg-light full-height">
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
                        <ListGroup.Item key={index}>{jadwal.hari} - {jadwal.waktu} - {jadwal.mataPelajaran}</ListGroup.Item>
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