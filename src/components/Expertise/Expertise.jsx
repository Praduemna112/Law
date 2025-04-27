import React from 'react';
import Adv_Sachin_Bobde from "../../assets/low/Adv_Sachin_Bobde.png";
import Adv_Harshada_Mohgaonkar from "../../assets/low/Adv_Harshada_Mohgaonkar.png";
import Adv_Aarlin_Shetty from "../../assets/low/Adv_Aarlin_Shetty.png";
import Adv_P_M_Deshmukh from "../../assets/low/Adv_P_M_Deshmukh.png";
import Adv_Prashant_Parekh from "../../assets/low/Adv_Prashant_Parekh.png";
import Adv_Shobhit_shetty from "../../assets/low/Adv_Shobhit_shetty.png";
import Adv_B_G_Rathod from "../../assets/low/Adv_B_G_Rathod.png";
import Satish from "../../assets/low/Satish.png";
import heroBg from "../../assets/low/highCourt.png";

// You can replace these with your actual image imports or public URLs
const services = [
  { name: "Adv.Satish", img: Satish },
  { name: "Adv.Sachin Bobde", img: Adv_Sachin_Bobde },
  { name: "Adv. Harshada Mohgaonkar", img: Adv_Harshada_Mohgaonkar },
  { name: "Adv.Aarlin Shetty", img: Adv_Aarlin_Shetty },
  { name: "Adv.P.M.Deshmukh", img: Adv_P_M_Deshmukh },
  { name: "Adv.Prashant Parekh", img: Adv_Prashant_Parekh },
  { name: "Adv.Shobhit shetty", img: Adv_Shobhit_shetty },
  { name: "Adv_B_G_Rathod", img: Adv_B_G_Rathod },
  
];

const Service = () => {
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

      {/* === SERVICES GRID === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">Our Colleague</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 shadow-md rounded-md hover:shadow-lg transition-shadow"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 sm:h-72 object-cover rounded-md" // Adjusting height and ensuring object-cover
              />
              <p className="text-lg font-semibold text-gray-700 mt-4">{service.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
