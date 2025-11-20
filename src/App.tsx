import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Living from './pages/Living';
import Study from './pages/Study';
import WorkWithUs from './pages/WorkWithUs';
import About from './pages/About';
import Payment from './pages/Payment'; // ⬅️ MAJUSCULE et NOM DU FICHIER

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/living" element={<Living />} />
            <Route path="/study" element={<Study />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} /> {/* ⬅️ LA NOUVELLE ROUTE ! */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;