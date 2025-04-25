import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <div>
    <HeroSection />
  </div>
);

export default App;
