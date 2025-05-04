import React from "react";
import heroBg from "../../assets/low/ram.png";

const RRB = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* HERO SECTION */}
      <div
        id="hero"
        className="relative w-full h-[400px] sm:h-[500px] xl:h-[600px] flex items-center justify-center"
      >
        {/* Background Image (visible on all screens) */}
        <img
          src={heroBg}
          alt="Practices Hero"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center drop-shadow-2xl">
            Welcome to Ram Ramapati Bank
          </h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col lg:flex-row gap-14 px-6 py-16 lg:px-32 items-center justify-center bg-gradient-to-r from-yellow-300 via-red-600 to-pink-700">
        <div className="lg:w-1/2  rounded-3xl p-8 sm:p-12 text-white">
          <h2 className="text-5xl sm:text-6xl font-semibold mb-6 text-center border-b-2 border-white pb-4">
            About the Bank
          </h2>
          <p className="text-lg sm:text-xl  text-center leading-relaxed">
            Ram Ramapati Bank is a spiritual institution that doesn’t deal with
            traditional currency. Instead, it welcomes handwritten “Ram-Ram” in
            sacred red ink as devotional offerings. These offerings are regarded
            as deposits of virtue. Devotees contribute in multiples of 108 or
            111, reflecting spiritual merit and devotion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RRB;
