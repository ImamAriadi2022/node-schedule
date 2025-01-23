import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">Tentang Kami</Card.Title>
              <Card.Text>
                Selamat datang di Website Jadwal! Kami adalah platform yang membantu Anda mengelola dan menjadwalkan acara dengan efisien. 
                Website ini dirancang untuk memudahkan siswa, guru, dan admin dalam mengatur jadwal pembelajaran dan aktivitas lainnya.
              </Card.Text>
              <Card.Text>
                <strong>Misi Kami:</strong> 
                <ul>
                  <li>Menyediakan alat yang mudah digunakan untuk mengelola jadwal.</li>
                  <li>Meningkatkan efisiensi dalam pengelolaan waktu dan kegiatan.</li>
                  <li>Memfasilitasi komunikasi yang lebih baik antara siswa, guru, dan admin.</li>
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Visi Kami:</strong> 
                <p>Menjadi platform terdepan dalam pengelolaan jadwal pendidikan yang dapat diandalkan oleh semua pihak.</p>
              </Card.Text>
              <Card.Text>
                Terima kasih telah menggunakan Website Jadwal. Kami berharap dapat membantu Anda dalam mengelola waktu dan kegiatan dengan lebih baik.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;