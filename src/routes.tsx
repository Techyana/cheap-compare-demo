import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CarInsurance from './pages/CarInsurance/CarInsurance';
import HealthInsurance from './pages/HealthInsurance/HealthInsurance';
import FuneralCover from './pages/FuneralCover/FuneralCover';
import CellphoneDeals from './pages/CellphoneDeals';
import DataPlans from './pages/DataPlans/DataPlans';
import WifiFiberLTE from './pages/WifiFiberLTE/WifiFiberLTE';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/funeral-cover" element={<FuneralCover />} />
        <Route path="/cellphone-deals" element={<CellphoneDeals />} />
        <Route path="/data-plans" element={<DataPlans />} />
        <Route path="/wifi-fiber-lte" element={<WifiFiberLTE />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;