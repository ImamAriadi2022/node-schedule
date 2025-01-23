import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SiswaDashboard from './SiswaDashboard';
import GuruDashboard from './GuruDashboard';
import AdminDashboard from './AdminDashboard';

const LandingPage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/siswa-dashboard" component={SiswaDashboard} />
          <Route path="/guru-dashboard" component={GuruDashboard} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default LandingPage;