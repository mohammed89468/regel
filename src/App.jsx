import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './Contents/Navbars/NavbarComponent';
import Footer from './Contents/footer/footer';
import Home from './Contents/Home/Home';
import OurCompany from './Contents/sections/OurCompany';
import QualityPolicy from './Contents/sections/QualityPolicy';
import VisionMission from './Contents/sections/VisionMission';
import CADDesign from './Contents/sections/CADDesign';
import LaserCutting from './Contents/sections/LaserCutting';
import PressBrake from './Contents/sections/PressBrake';
import WeldingFabrication from './Contents/sections/WeldingFabrication';
import PowderCoating from './Contents/sections/PowderCoating';
import QualityControlAssembly from './Contents/sections/QualityControlAssembly';
import NotFoundPage from './Contents/Error';

const App = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurCompany" element={<OurCompany />} />
          <Route path="/QualityPolicy" element={<QualityPolicy />} />
          <Route path="/VisionMission" element={<VisionMission />} />
          <Route path="/CADDesign" element={<CADDesign />} />
          <Route path="/LaserCutting" element={<LaserCutting />} />
          <Route path="/PressBrake" element={<PressBrake />} />
          <Route path="/WeldingFabrication" element={<WeldingFabrication />} />
          <Route path="/PowderCoating" element={<PowderCoating />} />
          <Route path="/QCA" element={<QualityControlAssembly />} />
          <Route path="/contact" element={<NotFoundPage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
