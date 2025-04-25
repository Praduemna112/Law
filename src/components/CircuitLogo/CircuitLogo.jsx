import React from "react";
// import circuitLogo from "../../assets/PCB_Logo.jpg";
import circuitLogo from "../../assets/jio_vendor_logo.png";
import "../../index.css";

const CircuitLogo = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img
        src={circuitLogo}
        alt="Circuit Logo"
        className="w-full h-auto object-contain rounded-sm"
      />
    </div>
  );
};

export default CircuitLogo;
