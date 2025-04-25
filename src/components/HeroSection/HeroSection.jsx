import React from "react";
import heroBg from "../../assets/low/hero.png";

const HeroSection = () => {
  return (
    <>
      {/* hero section */}
      <div
        id="hero"
        className="relative w-full h-[800px] bg-center bg-no-repeat bg-cover flex items-center justify-center px-2 sm:px-4 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        }}
      >
        {/* Optional heading or overlay text */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          hero
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
