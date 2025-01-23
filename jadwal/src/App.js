import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import Guru from './page/Guru';
import Siswa from './page/Siswa';
import Dev from './page/Dev';
import About from './page/About';
import Daftar from './page/Daftar';
import Masuk from './page/Masuk';

// siswa
import Dashboard from './page/siswa/Dashboard'


// guru
import DashboardGuru from './page/Guru/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/guru" element={<Guru />} />
          <Route path="/siswa" element={<Siswa />} />
          <Route path="/developer" element={<Dev />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Daftar />} />
          <Route path="/login" element={<Masuk />} />


          {/* siswa */}
          <Route path="/siswa-hal/*" element={<Dashboard />} />


          {/* guru */}
          <Route path="/guru-hal" element={<DashboardGuru />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;