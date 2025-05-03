import React from "react";
import heroBg from "../../assets/low/hero.png";
import Notary3 from "../../assets/low/Notary3.png";

const HeroSection = () => {
  return (
    <>
      <div
        id="hero"
        className="relative w-full h-[800px] bg-center bg-no-repeat bg-cover flex items-center justify-center px-4 lg:px-8"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Notary Image in Top Left on large, center-top on mobile */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 lg:top-4 lg:left-4 lg:transform-none z-10 flex flex-col items-center text-center">
          <img
            src={Notary3}
            alt="Adv. Satish Muchalamkar"
            className="w-32 h-32 rounded-full object-cover mb-2 shadow-md"
          />
          <p className="text-lg text-white font-bold">Adv. Satish Muchalamkar</p>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-5xl text-center px-4 mt-48 lg:mt-0">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">
            “Justice must not only be done, but must be seen to be done”
          </h1>
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            This principle emphasizes the importance of transparency and public confidence
            in the legal system. It ensures that not only is the outcome of a case fair,
            but also that the process is perceived as fair and impartial—building trust
            and legitimacy in the judicial process.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
