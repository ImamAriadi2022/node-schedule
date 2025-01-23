import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Cara from '../components/Cara';
import FAQ from '../components/FAQ';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cara />
      <FAQ />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default LandingPage;