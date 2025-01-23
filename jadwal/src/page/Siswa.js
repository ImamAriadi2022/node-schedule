import React from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import SiswaComponent from '../components/SiswaComponent';
import Chatbot from '../components/Chatbot';

function Siswa() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <div className="flex-grow-1">
        <SiswaComponent />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Siswa;