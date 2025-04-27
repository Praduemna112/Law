import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Practices from "./components/Practices/Practices";
import Contact from "./components/Contact/Contact";
import Expertise from "./components/Expertise/Expertise";
import Social from "./components/Social/Social";

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Practices" element={<Practices />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Home = () => (
  <div>
    <HeroSection />
  </div>
);

export default App;
