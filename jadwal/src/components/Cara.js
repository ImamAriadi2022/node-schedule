import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Cara() {
  const steps = [
    "Daftar akun sebagai siswa, guru, atau admin.",
    "Login ke akun Anda menggunakan kredensial Anda.",
    "Admin dapat melihat semua aktivitas siswa dan guru.",
    "Guru dapat membuat dan mengelola jadwal untuk kelas mereka.",
    "Siswa dapat melihat jadwal mereka dan menandai kehadiran mereka.",
    "Gunakan bagian FAQ untuk mendapatkan jawaban atas pertanyaan umum melalui chatbot."
  ];

  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-success text-center mb-4">Cara Kerja</h2>
          {steps.map((step, index) => (
            <Card className="mb-3 shadow-sm" key={index}>
              <Card.Body>
                <Card.Text>{index + 1}. {step}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Cara;