import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [redirectPath, setRedirectPath] = useState('');

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
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      setMessage('Login berhasil!');
      console.log(response.data);
      const { role } = response.data;
      if (role === 'siswa') {
        setRedirectPath('/siswa-hal');
      } else if (role === 'guru') {
        setRedirectPath('/guru-hal');
      }
    } catch (error) {
      setMessage('Login gagal. Silakan coba lagi.');
      console.error(error);
    }
  };

  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-success mb-4">Login</h2>
          {message && <p>{message}</p>}
          <Form onSubmit={handleSubmit}>
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
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
          {redirectPath && (
            <div className="mt-3">
              <Link to={redirectPath} className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;