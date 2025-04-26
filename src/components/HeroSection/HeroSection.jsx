import React from "react";
import heroBg from "../../assets/low/hero.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero section */}
      <div
        id="hero"
        className="relative w-full h-[800px] bg-center bg-no-repeat bg-cover flex items-center justify-center px-2 sm:px-4 lg:px-8"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover", // For desktop and larger screens
        }}
      >
        {/* Optional heading or overlay text */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          Hero
        </h1>
      </div>

      
    </>
  );
};

export default HeroSection;
