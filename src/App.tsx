import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Ministries from './components/Ministries';
import Events from './components/Events';
import LakeviewAcademy from './components/LakeviewAcademy';
import Giving from './components/Giving';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MinistryDetail from './components/MinistryDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <About />
      <Services />
      <Ministries />
      <LakeviewAcademy />
      <Events />
      <Giving />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ministry/:ministryId" element={<MinistryDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;