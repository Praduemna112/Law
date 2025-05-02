import React from "react";
import heroBg from "../../assets/low/ram.png";

const RRB = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* HERO SECTION */}
      <div id="hero" className="relative w-full h-[300px] sm:h-[400px] xl:h-[500px]">
        {/* Background Image (visible on all screens) */}
        <img
          src={heroBg}
          alt="Practices Hero"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay (optional) */}
        <div className="absolute inset-0"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Welcome to Ram Ramapati Bank
          </h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 px-4 py-12 lg:px-20">
        {/* LEFT: ABOUT */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center border-b-2 border-yellow-300 pb-2">
            About the Bank
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Ram Ramapati Bank is a spiritual institution that doesn’t deal with traditional currency.
            Instead, it welcomes handwritten “Ram-Ram” in sacred red ink as devotional offerings.
            These offerings are regarded as deposits of virtue. Devotees contribute in multiples of
            108 or 111, reflecting spiritual merit and devotion.
          </p>
        </div>

        {/* RIGHT: SERVICES */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center border-b-2 border-pink-300 pb-2">
            Our Legal Services
          </h2>
          <ol className="list-decimal space-y-3 text-sm sm:text-base ml-5 sm:ml-6 text-gray-700 leading-relaxed">
            <li>Civil suits – property recovery, injunctions, etc.</li>
            <li>Debt Recovery Tribunal cases.</li>
            <li>Consumer complaints – District, State, National levels.</li>
            <li>Criminal defense and prosecution services.</li>
            <li>Labour and Industrial dispute representation.</li>
            <li>Arbitration – advocate or arbitrator role.</li>
            <li>Litigation in Co-operative Court.</li>
            <li>Writs & appeals – High Court & Supreme Court.</li>
            <li>Matters before EPFO, ESIC, and other authorities.</li>
            <li>Industrial legal compliance consulting.</li>
            <li>Contract Labour Compliance Management.</li>
            <li>
              <strong>Property Transactions:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm sm:text-base">
                <li>Search reports</li>
                <li>Drafting deeds and agreements</li>
                <li>Document registration</li>
                <li>Municipal property mutation</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RRB;
