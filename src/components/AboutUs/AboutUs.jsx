import React from 'react'
import heroBg from "../../assets/low/about.png";
import sir_mission from "../../assets/low/sir_mission.png";
import EXPERIENCE_TAGLINE from "../../assets/low/EXPERIENCE_TAGLINE.png";

const AboutUs = () => {
  return (
    <>
      <div id="hero" className="relative w-full pt-16">
        {/* Mobile, Tablet, and Laptop: Show full image with no text */}
        <img
          src={heroBg}
          alt="Practices Hero"
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

      {/* First Section: Centered Text */}
      <div className="text-center py-12 px-6">
        <p className="text-2xl font-semibold text-gray-800">
          We are happy to announce that Lawlegends is now venturing into providing NOTARY SERVICES, as well; Including Online Leave and License Agreements and all types of drafts, litigations, MOU, etc…
        </p>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center py-12 px-6">
        <div className="w-full md:w-1/2 px-4">
          <p className="text-4xl font-semibold text-gray-700 mb-4">
            EXPERIENCE TAGLINE
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed">
            OVER 24 YEARS’ OF EXPERIENCE IN LITIGATION MANAGEMENT OF NBFCs, BANKING & MANUFACTURING COMPANIES, GOVERNMENT LIASONING, MAPPING AND MANAGING LEGAL AND REGULATORY RISK IN LEADING CORPORATIONS AND DEVELOPING SYSTEMS AND RESOURCES FOR ENSURING COMPLIANCES.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
          <img
            src={EXPERIENCE_TAGLINE} // Replace this with the path to your image
            alt="Experience Image"
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>

      {/* Third Section: Text Right, Image Left */}
      <div className="flex flex-col md:flex-row items-center py-12 px-6">
        <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
          <img
            src={sir_mission} // Replace this with the path to your image
            alt="Mission Image"
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <p className="text-4xl font-semibold text-gray-700 mb-4">
            OUR MISSION
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Our mission is to achieve cent percent compliance of each and every statute that is applicable to our client and, also, avoidance of any adverse action against it by the Enforcement Agencies. We strive for perfection, accuracy and; winning confidence of such Enforcement Agencies w.r.t the compliances.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
