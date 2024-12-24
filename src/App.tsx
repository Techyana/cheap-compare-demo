import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CarInsurance from './pages/CarInsurance/CarInsurance';
import HealthInsurance from './pages/HealthInsurance/HealthInsurance';
import FuneralCover from './pages/FuneralCover/FuneralCover';
import CellphoneDeals from './pages/CellphoneDeals/CellphoneDeals';
import DataPlans from './pages/DataPlans/DataPlans';
import WifiFiberLTE from './pages/WifiFiberLTE/WifiFiberLTE';
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