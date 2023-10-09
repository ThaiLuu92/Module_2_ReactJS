import React from 'react';
import './App.css';
import Header from './Component/Header';
import Services from './Component/Services';
import PortfolioGrid from './Component/PortfolioGrid';
import About from './Component/About';
import Team from './Component/Team';
import Clients from './Component/Clients';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import { publicRouter } from './routes';





function App() {
  return (
    <>

      <Header />
      <Routes>
        {publicRouter.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
        {/* <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio-grid" element={<PortfolioGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
