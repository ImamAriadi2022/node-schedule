import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import './SiswaDashboard.css'; // Import file CSS

function KegiatanSiswa() {
  const [kegiatanData, setKegiatanData] = useState([]);

  useEffect(() => {
    const fetchKegiatanData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/selected-gurus');
        const selectedGurus = response.data;
        console.log('Selected Gurus:', selectedGurus); // Tambahkan logging di sini
        const kegiatanPromises = selectedGurus.map(async (guru) => {
          const jadwalResponse = await axios.get(`http://localhost:5000/api/schedules?guruId=${guru.guruId}`);
          console.log(`Jadwal for Guru ${guru.guruNama}:`, jadwalResponse.data); // Tambahkan logging di sini
          return jadwalResponse.data.map(jadwal => ({
            ...jadwal,
            guruNama: guru.guruNama,
            mataPelajaran: guru.mataPelajaran
          }));
        });
        const kegiatanData = (await Promise.all(kegiatanPromises)).flat();
        console.log('Kegiatan Data:', kegiatanData); // Tambahkan logging di sini
        setKegiatanData(kegiatanData);
      } catch (error) {
        console.error('Error fetching kegiatan data:', error);
      }
    };

    fetchKegiatanData();
  }, []);

  return (
    <Container fluid className="p-5 bg-light full-height">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-success mb-4">Kegiatan Siswa</h2>
          {kegiatanData.length === 0 ? (
            <Alert variant="warning">Siswa belum mengambil jadwal apapun</Alert>
          ) : (
            <Row>
              {kegiatanData.map((kegiatan, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>{kegiatan.guruNama}</Card.Title>
                      <Card.Text>
                        <strong>Mata Pelajaran:</strong> {kegiatan.mataPelajaran}<br />
                        <strong>Hari:</strong> {kegiatan.hari}<br />
                        <strong>Waktu:</strong> {kegiatan.waktu}<br />
                      </Card.Text>
                      <ListGroup>
                        <ListGroup.Item><strong>Hari:</strong> {kegiatan.hari}</ListGroup.Item>
                        <ListGroup.Item><strong>Waktu:</strong> {kegiatan.waktu}</ListGroup.Item>
                        <ListGroup.Item><strong>Mata Pelajaran:</strong> {kegiatan.mataPelajaran}</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default KegiatanSiswa;