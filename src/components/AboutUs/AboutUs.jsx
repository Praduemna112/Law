import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "../../assets/low/about.png";
import settingVender from "../../assets/settingVender.png";
import vendingMachine from "../../assets/machine1.jpeg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        id="hero"
        className="relative w-full h-[600px] bg-fixed bg-top bg-no-repeat bg-cover flex items-center justify-center px-2 sm:px-4 lg:px-8 shadow-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        }}
      >
        {/* Centered Heading with custom background */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold shadow-md p-4 rounded-md text-center ">
          About Us
        </h1>
      </div>

      {/* RAM RAMAPATI BANK Section with custom background */}
      <div className="bg-gradient-to-r  text-gray-900 lg:px-20 py-14 text-3xl font-semibold rounded-lg mt-4 text-center">
        RAM RAMAPATI BANK
      </div>
      
      {/* About Text with custom background */}
      <p className="text-lg sm:text-2xl text-gray-700 mx-auto max-w-4xl mt-8 leading-relaxed px-4 shadow-xl rounded-md py-4 text-center bg-gray-100">
        This bank is a bank that does not accept any type of monetary
        transactions and worship products viz. Flowers, kumkum, haldi, Pooja
        samagry, etc.. Instead, account holders in this bank write "Ram-Ram" in
        a special kind of red ink and deposit it in the bank. The bank considers
        the sheets of paper with "Ram-Ram" written on them as a deposit of
        virtues. Anyone can deposit handwritten RAM Naam in multiplication of
        108 or 111.
      </p>
    </>
  );
};

export default AboutUs;
