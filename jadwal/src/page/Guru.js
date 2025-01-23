import React from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import GuruComponent from '../components/GuruComponent';

function Guru() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <div className="flex-grow-1">
        <GuruComponent />
        <Chatbot />
      </div>
      <Footer />
    </div>
  );
}

export default Guru;