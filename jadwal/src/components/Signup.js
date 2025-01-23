import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Signup() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    mataPelajaran: '',
    asalSekolah: '',
    kelas: ''
  });
  const [message, setMessage] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({
      ...formData,
      role: e.target.value, // Tambahkan role ke formData
      nama: '',
      email: '',
      password: '',
      mataPelajaran: '',
      asalSekolah: '',
      kelas: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Tambahkan logging di sini
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      setMessage('Pendaftaran berhasil!');
      console.log(response.data);
    } catch (error) {
      setMessage('Pendaftaran gagal. Silakan coba lagi.');
      console.error(error);
    }
  };

  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-success mb-4">Daftar</h2>
          {message && <p>{message}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRole" className="mb-3">
              <Form.Label>Pilih Peran Anda</Form.Label>
              <Form.Control as="select" value={role} onChange={handleRoleChange}>
                <option value="">Pilih...</option>
                <option value="guru">Guru</option>
                <option value="siswa">Siswa</option>
              </Form.Control>
            </Form.Group>
            {role && (
              <>
                <Form.Group controlId="formNama" className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                {role === 'guru' && (
                  <>
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
                    <Form.Group controlId="formAsalSekolah" className="mb-3">
                      <Form.Label>Asal Sekolah</Form.Label>
                      <Form.Control
                        type="text"
                        name="asalSekolah"
                        value={formData.asalSekolah}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formKelas" className="mb-3">
                      <Form.Label>Kelas</Form.Label>
                      <Form.Control
                        type="text"
                        name="kelas"
                        value={formData.kelas}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </>
                )}
                {role === 'siswa' && (
                  <>
                    <Form.Group controlId="formKelas" className="mb-3">
                      <Form.Label>Kelas</Form.Label>
                      <Form.Control
                        type="text"
                        name="kelas"
                        value={formData.kelas}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formAsalSekolah" className="mb-3">
                      <Form.Label>Asal Sekolah</Form.Label>
                      <Form.Control
                        type="text"
                        name="asalSekolah"
                        value={formData.asalSekolah}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </>
                )}
                <Button variant="success" type="submit">
                  Daftar
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;