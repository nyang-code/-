import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './Map';
import RegionPage from './RegionPage';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import MarketDetail from './MarketDetail';
import MarketOverview from './MarketOverview';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/region/:region" element={<RegionPage />} />
            <Route path="/region/:region/:marketId" element={<MarketDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/market-overview" element={<MarketOverview />} />
            <Route path="/market/:marketId" element={<MarketDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
