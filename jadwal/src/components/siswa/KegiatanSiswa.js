import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const kegiatanData = [
  { 
    jadwal: "Senin 08:00 - 09:30", 
    guru: { nama: "Budi Santoso", mataPelajaran: "Matematika" } 
  },
  { 
    jadwal: "Selasa 08:00 - 09:30", 
    guru: { nama: "Siti Aminah", mataPelajaran: "Bahasa Indonesia" } 
  },
  { 
    jadwal: "Rabu 10:00 - 11:30", 
    guru: { nama: "Ahmad Fauzi", mataPelajaran: "Fisika" } 
  },
  { 
    jadwal: "Kamis 10:00 - 11:30", 
    guru: { nama: "Dewi Lestari", mataPelajaran: "Kimia" } 
  },
  { 
    jadwal: "Jumat 08:00 - 09:30", 
    guru: { nama: "Rina Wijaya", mataPelajaran: "Biologi" } 
  }
];

function KegiatanSiswa() {
  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-success mb-4">Kegiatan Siswa</h2>
          <ListGroup>
            {kegiatanData.map((kegiatan, index) => (
              <ListGroup.Item key={index} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>{kegiatan.jadwal}</Card.Title>
                    <Card.Text>
                      <strong>Guru:</strong> {kegiatan.guru.nama}<br />
                      <strong>Mata Pelajaran:</strong> {kegiatan.guru.mataPelajaran}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default KegiatanSiswa;