import React from "react";
import heroBg from "../../assets/low/Practices_Img.png";
import heroBg1 from "../../assets/low/Practices_Img1.png";

const BLOGS = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div id="hero" className="relative w-full">
        {/* Mobile & Tablet Image */}
        <img
          src={heroBg1}
          alt="Practices Hero"
          className="block xl:hidden w-full h-[160px] sm:h-[300px] md:h-[500px] object-cover"
        />

        {/* Desktop Background Image */}
        <div
          className="hidden xl:flex w-full h-[500px] bg-cover bg-center items-center justify-center px-4 lg:px-8"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          We're working hard to bring exciting new blog content. Stay tuned for
          updates!
        </p>
      </div>
    </>
  );
};

export default BLOGS;
