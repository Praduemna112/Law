import React from "react";
import Adv_Sachin_Bobde from "../../assets/low/Adv_Sachin_Bobde.png";
import Adv_Harshada_Mohgaonkar from "../../assets/low/Adv_Harshada_Mohgaonkar.png";
import Adv_Aarlin_Shetty from "../../assets/low/Adv_Aarlin_Shetty.png";
import Adv_P_M_Deshmukh from "../../assets/low/Adv_P_M_Deshmukh.png";
import Adv_Prashant_Parekh from "../../assets/low/Adv_Prashant_Parekh.png";
import Adv_Shobhit_shetty from "../../assets/low/Adv_Shobhit_shetty.png";
import Adv_B_G_Rathod from "../../assets/low/Adv_B_G_Rathod.png";
import Satish from "../../assets/low/Satish.png";
import heroBg from "../../assets/low/highCourt.png";

const services = [
  { name: "Adv. Satish", img: Satish },
  { name: "Adv. Sachin Bobde", img: Adv_Sachin_Bobde },
  { name: "Adv. Harshada Mohgaonkar", img: Adv_Harshada_Mohgaonkar },
  { name: "Adv. Aarlin Shetty", img: Adv_Aarlin_Shetty },
  { name: "Adv. P. M. Deshmukh", img: Adv_P_M_Deshmukh },
  { name: "Adv. Prashant Parekh", img: Adv_Prashant_Parekh },
  { name: "Adv. Shobhit Shetty", img: Adv_Shobhit_shetty },
  { name: "Adv. B. G. Rathod", img: Adv_B_G_Rathod },
];

const Service = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div id="hero" className="relative w-full pt-16">
        {/* Mobile to LG */}
        <img
          src={heroBg}
          alt="About Us Hero"
          className="block xl:hidden w-full h-auto object-cover"
        />

        {/* XL and up */}
        <div
          className="hidden xl:flex w-full h-[600px] bg-fixed bg-center bg-cover items-center justify-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>
      </div>

      {/* SERVICES GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          Our Colleagues
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="w-full h-48 sm:h-60 md:h-72 xl:h-80 bg-gray-100 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="py-4 px-2 text-center">
                <p className="text-base sm:text-lg font-semibold text-gray-700">
                  {service.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
