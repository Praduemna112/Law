import React from "react";
import Navbar from "../Navbar/Navbar";

import Adv_Sachin_Bobde from "../../assets/low/Adv_Sachin_Bobde.png";
import Adv_Harshada_Mohgaonkar from "../../assets/low/Adv_Harshada_Mohgaonkar.png";
import Adv_Aarlin_Shetty from "../../assets/low/Adv_Aarlin_Shetty.png";
import Adv_P_M_Deshmukh from "../../assets/low/Adv_P_M_Deshmukh.png";
import Adv_Prashant_Parekh from "../../assets/low/Adv_Prashant_Parekh.png";
import Adv_Shobhit_shetty from "../../assets/low/Adv_Shobhit_shetty.png";
import Adv_B_G_Rathod from "../../assets/low/Adv_B_G_Rathod.png";
import Adv_Nagesh_Birajdar from "../../assets/low/Adv_Nagesh_Birajdar.png";
import Adv_Shivaji_Singh from "../../assets/low/Adv_Shivaji_Singh.png";
import Satish from "../../assets/low/Satish.png";
import heroBg from "../../assets/low/highCourt1.png";

const services = [
  { name: "Adv. Satish Muchalamkar", img: Satish },
  { name: "Adv. Sachin Bobde", img: Adv_Sachin_Bobde },
  { name: "Adv. Harshada Mohgaonkar", img: Adv_Harshada_Mohgaonkar },
  { name: "Adv. Aarlin Shetty", img: Adv_Aarlin_Shetty },
  { name: "Adv. P. M. Deshmukh", img: Adv_P_M_Deshmukh },
  { name: "Adv. Prashant Parekh", img: Adv_Prashant_Parekh },
  { name: "Adv. Shobhit Shetty", img: Adv_Shobhit_shetty },
  { name: "Adv. B. G. Rathod", img: Adv_B_G_Rathod },
  { name: "Adv. Nagesh Birajdar", img: Adv_Nagesh_Birajdar },
  { name: "Adv. Shivaji Singh", img: Adv_Shivaji_Singh },
  { name: "Adv. Kailas Borde", img: "" },
];

const Expertise = () => {
  const fullRows = Math.floor(services.length / 4);
  const remaining = services.length % 4;

  return (
    <>
      <div
        id="hero"
        className="relative w-full h-60 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] bg-cover bg-no-repeat flex items-top justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      />
      {/* SERVICES GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          Our Colleagues
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.slice(0, fullRows * 4).map((service, index) => (
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

        {/* Handle remaining 1 or 2 cards */}
        {remaining > 0 && (
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            {services.slice(-remaining).map((service, index) => (
              <div
                key={`last-${index}`}
                className="w-[calc(100%/2-1.5rem)] sm:w-[calc(100%/3-1.5rem)] md:w-[calc(100%/4-1.5rem)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
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
        )}
      </section>
      
    </>
  );
};

export default Expertise;
