import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarInsurance from './pages/CarInsurance';
import HealthInsurance from './pages/HealthInsurance';
import FuneralCover from './pages/FuneralCover';
import CellphoneDeals from './pages/CellphoneDeals';
import DataPlans from './pages/DataPlans';
import WifiFiberLTE from './pages/WifiFiberLTE';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/funeral-cover" element={<FuneralCover />} />
        <Route path="/cellphone-deals" element={<CellphoneDeals />} />
        <Route path="/data-plans" element={<DataPlans />} />
        <Route path="/wifi-fiber-lte" element={<WifiFiberLTE />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;