import { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Practices from "./components/Practices/Practices";
import Contact from "./components/Contact/Contact";
import Expertise from "./components/Expertise/Expertise";
import Social from "./components/Social/Social";
import RRB from "./components/RRB/RRB";
import BLOGS from "./components/BLOGS/BLOGS";
import AboutUs from "./components/AboutUs/AboutUs";

// Custom hook for scroll restoration
const useScrollRestoration = () => {
  const location = useLocation(); // Access the current route's location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location]); // Trigger the effect when the location (route) changes
};

const App = () => {
  return (
    <Router>
      <ScrollRestorationWrapper />
    </Router>
  );
};

// Wrapper component to handle scroll restoration
const ScrollRestorationWrapper = () => {
  useScrollRestoration(); // Use the custom scroll restoration hook

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/social" element={<Social />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/social/rrb" element={<RRB />} />
        <Route path="/social/blogs" element={<BLOGS />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
