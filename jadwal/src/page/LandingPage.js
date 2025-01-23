import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Cara from '../components/Cara';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cara />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default LandingPage;