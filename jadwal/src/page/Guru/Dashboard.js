import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import NavbarGuru from '../../components/guru/NavbarGuru';
import Footer from '../../components/Footer';

function DashboardGuru() {
  const [jadwal, setJadwal] = useState([]);
  const [formData, setFormData] = useState({
    hari: '',
    waktu: '',
    mataPelajaran: '',
    guruId: 1 // Ganti dengan ID guru yang sesuai
  });

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schedules');
        setJadwal(response.data);
      } catch (error) {
        console.error('Error fetching jadwal:', error);
      }
    };

    fetchJadwal();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/schedules', formData);
      setJadwal([...jadwal, response.data]);
      setFormData({
        hari: '',
        waktu: '',
        mataPelajaran: '',
        guruId: 1 // Ganti dengan ID guru yang sesuai
      });
    } catch (error) {
      console.error('Error creating jadwal:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/schedules/${id}`);
      setJadwal(jadwal.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting jadwal:', error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarGuru />
      <Container fluid className="p-5 bg-light flex-grow-1">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-success mb-4">Dashboard Guru</h2>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Buat Jadwal Pelajaran</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formHari" className="mb-3">
                    <Form.Label>Hari</Form.Label>
                    <Form.Control
                      type="text"
                      name="hari"
                      value={formData.hari}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formWaktu" className="mb-3">
                    <Form.Label>Waktu</Form.Label>
                    <Form.Control
                      type="text"
                      name="waktu"
                      value={formData.waktu}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMataPelajaran" className="mb-3">
                    <Form.Label>Mata Pelajaran</Form.Label>
                    <Form.Control
                      type="text"
                      name="mataPelajaran"
                      value={formData.mataPelajaran}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Tambah Jadwal
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Jadwal Pelajaran</Card.Title>
                <ListGroup>
                  {jadwal.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{item.hari}</strong> {item.waktu} - {item.mataPelajaran}
                        </div>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                          Hapus
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default DashboardGuru;