import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "../../assets/low/about.png";

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
      <div id="hero" className="relative w-full pt-16">
        {/* Mobile, Tablet, and Laptop: Show full image with no text */}
        <img
          src={heroBg}
          alt="About Us Hero"
          className="block xl:hidden w-full h-auto bg-fixed object-contain"
        />

        {/* XL Screens and above: Just show background image, no overlay */}
        <div
          className="hidden xl:flex w-full 
               h-[600px] 
               bg-fixed bg-bottom bg-cover 
               items-center justify-center 
               px-4 lg:px-8"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>
      </div>

      {/* Bank Name Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-pink-200 text-gray-900 text-center text-2xl sm:text-3xl font-semibold rounded-lg mt-6 px-4 py-10 sm:py-14">
        RAM RAMAPATI BANK
      </div>

      {/* About Text Section */}
      <div className="bg-gray-100 shadow-xl rounded-md mx-4 sm:mx-auto max-w-4xl mt-6 sm:mt-10 px-4 sm:px-8 py-6 text-center">
        <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed">
          This bank is a bank that does not accept any type of monetary
          transactions and worship products viz. Flowers, kumkum, haldi, Pooja
          samagry, etc. Instead, account holders in this bank write "Ram-Ram" in
          a special kind of red ink and deposit it in the bank. The bank
          considers the sheets of paper with "Ram-Ram" written on them as a
          deposit of virtues. Anyone can deposit handwritten RAM Naam in
          multiplication of 108 or 111.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
