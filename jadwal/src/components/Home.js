import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="p-5 bg-light">
      <Row className="align-items-center">
        <Col md={6}>
          <header>
            <h1 className="display-4 text-success">Selamat Datang di Website Jadwal</h1>
            <p className="lead">Website ini membantu Anda mengelola dan menjadwalkan acara Anda dengan efisien.</p>
          </header>
          <section>
            <h2 className="h4 text-success mt-4">Mulai Sekarang</h2>
            <p className="lead">Bergabunglah dengan kami dan mulai mengelola jadwal Anda dengan mudah dan efisien.</p>
            <Button variant="success" size="lg" href="/signup">Daftar Sekarang</Button>
          </section>
        </Col>
        <Col md={6}>
          {/* Ganti src dengan path gambar Anda */}
          <img src="https://img.freepik.com/free-vector/school-teacher-student-drawing-class-schedule_3446-618.jpg?t=st=1737643034~exp=1737646634~hmac=55ab4689b7e5f12f2029edd7872c64b21ff75355a04a6e4f1cbecf39589f863a&w=740" alt="Hero" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;