import React from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Chatbot from '../components/Chatbot';

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <div className="flex-grow-1">
        <AboutUs />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default About;