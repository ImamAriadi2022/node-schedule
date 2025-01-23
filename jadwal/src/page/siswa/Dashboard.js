import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarSiswa from '../../components/siswa/NavbarSiswa';
import SiswaDashboard from '../../components/siswa/SiswaDashboard';
import KegiatanSiswa from '../../components/siswa/KegiatanSiswa';
import Footer from '../../components/Footer';

function Dashboard() {
  return (
      <div className="d-flex flex-column min-vh-100">
        <NavbarSiswa />
          <Routes>
            <Route path="dashboard" element={<SiswaDashboard />} />
            <Route path="kegiatan" element={<KegiatanSiswa />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default Dashboard;