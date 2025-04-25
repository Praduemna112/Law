import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "../../assets/aboutus.png";
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
      {/* hero section */}
      <div
        id="hero"
        className="relative w-full h-[400px] bg-center bg-no-repeat bg-cover flex items-center justify-center px-2 sm:px-4 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        }}
      >
        {/* Optional heading or overlay text */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          About Us
        </h1>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 py-12 space-y-20">
        {/* === ABOUT US === */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          data-aos="fade-up"
        >
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full md:w-1/2 h-auto max-w-[500px] mx-auto rounded-xl shadow-2xl"
            data-aos="fade-up"
          />
          <div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              About Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Vender is India’s leader in Instant Commerce, offering
              cutting-edge Smart Retail Solutions tailored to food, beverages,
              and related sectors. Our mission is to make everyday convenience
              more accessible, smarter, and safer for everyone. At Vender, we
              are committed to providing top-notch service and operational
              excellence to our customers. Through our innovative, world-class
              solutions, we strive to deliver the highest quality experience.
            </p>
          </div>
        </div>

        {/* === OUR VISION & MISSION === */}
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10"
          data-aos="fade-up"
        >
          <div
            className="w-full md:w-1/2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              Our Vision & Mission
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg md:text-xl leading-relaxed">
              <li>
                <strong>VISION:</strong> To be India’s Foremost in Instant
                Commerce via Smart Retail Solutions in Food & Beverages and
                allied categories.
              </li>
              <li>
                <strong>MISSION:</strong> Making everyday convenience available
                – Easier, Smarter, Safer! Staying Consumer-Centric, Data-led,
                and Values-based in everything we do.
              </li>
            </ul>
          </div>
          <img
            src={settingVender}
            alt="Smart Retail Setup"
            className="w-full md:w-1/2 h-auto max-w-[500px] mx-auto rounded-xl shadow-2xl"
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
