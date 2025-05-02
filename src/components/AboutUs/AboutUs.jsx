import React from "react";
import heroBg from "../../assets/low/about.png";
import sir_mission from "../../assets/low/sir_mission.png";
import EXPERIENCE_TAGLINE from "../../assets/low/EXPERIENCE_TAGLINE.png";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div id="hero" className="relative w-full ">
        {/* Mobile & Tablet Image */}
        <img
          src={heroBg}
          alt="Practices Hero"
          className="block xl:hidden w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />

        {/* Desktop Background Image */}
        <div
          className="hidden xl:flex w-full h-[500px] bg-cover bg-center items-center justify-center px-4 lg:px-8"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Optional: You can put text or overlay here if needed */}
        </div>
      </div>

      {/* ANNOUNCEMENT TEXT SECTION */}
      <div className="text-center py-12 px-4 sm:px-6 md:px-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Expanding Our Legal Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            We are proud to announce that{" "}
            <span className="font-semibold text-indigo-600">Lawlegends</span> is
            now offering comprehensive <strong>Notary Services</strong>. These
            include online Leave and License Agreements, as well as expert
            drafting for MOUs, litigation documents, and various types of legal
            agreements and instruments.
          </p>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="flex flex-col-reverse md:flex-row items-center py-16 px-6 bg-white">
        <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Experience You Can Trust
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            With over <strong>24 years of experience</strong> in litigation
            management for NBFCs, banking institutions, and manufacturing
            companies, our legal experts bring unmatched insight into complex
            regulatory challenges.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our core strengths lie in <strong>government liaisoning</strong>,
            strategic mapping, and managing legal and regulatory risks for
            leading corporations. We develop robust systems and deploy dedicated
            resources to ensure full-scale statutory compliance across the
            board.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img
            src={EXPERIENCE_TAGLINE}
            alt="Experience Image"
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="flex flex-col md:flex-row items-center py-16 px-6 bg-gray-50">
        <div className="w-full md:w-1/2 px-4 mt-1 md:mt-0 mb-6 md:mb-0">
          <img
            src={sir_mission}
            alt="Mission Image"
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Mission
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            Our mission is to ensure <strong>100% compliance</strong> with every
            statute applicable to our clients and to proactively mitigate the
            risk of adverse actions by enforcement agencies.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We are committed to precision, legal accuracy, and building lasting
            confidence with enforcement authorities — enabling our clients to
            operate with security, clarity, and peace of mind.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
