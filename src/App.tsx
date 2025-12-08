import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Living from './pages/Living';
import Study from './pages/Study';
import WorkWithUs from './pages/WorkWithUs';
import About from './pages/About';
import Payment from './pages/payment';
import SwissCulinary from './pages/SwissCulinary';
import LemanSummerCamp from './pages/LemanSummerCamp';
import LesElfes from './pages/LesElfes';
import SwissBusiness from './pages/SwissBusiness';
import SwissLanguage from './pages/SwissLanguage';
import Trulli from './pages/Trulli';
import HTW from './pages/htw';


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Application Layout with Global Header & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/living" element={<Living />} />
          <Route path="/study" element={<Study />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
        </Route>

        {/* Standalone Landing Pages (No Global Header/Footer) */}
        <Route path="/swiss-culinary" element={<SwissCulinary />} />
        <Route path="/leman-summer-camp" element={<LemanSummerCamp />} />
        <Route path="/les-elfes" element={<LesElfes />} />
        <Route path="/swiss-business" element={<SwissBusiness />} />
        <Route path="/swiss-language" element={<SwissLanguage />} />
        <Route path="/trulli" element={<Trulli />} />
        <Route path="/htw" element={<HTW />} />
      </Routes>
    </Router>
  );
}

export default App;