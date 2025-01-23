import React from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Signup from '../components/Signup';

function Daftar() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <div className="flex-grow-1">
        <Signup />
      </div>
      <Footer />
    </div>
  );
}

export default Daftar;