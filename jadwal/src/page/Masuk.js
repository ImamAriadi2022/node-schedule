import React from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';

function Masuk() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <div className="flex-grow-1">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default Masuk;