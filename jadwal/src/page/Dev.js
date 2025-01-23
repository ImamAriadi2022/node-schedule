import React from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import DevSect from '../components/DevSect';
import Chatbot from '../components/Chatbot';

function Dev() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <div className="flex-grow-1">
        <DevSect />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Dev;