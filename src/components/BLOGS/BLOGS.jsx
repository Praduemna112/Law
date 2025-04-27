import React from "react";
import heroBg from "../../assets/low/about.png";

const BLOGS = () => {
  return (
    <>
      <div id="hero" className="relative w-full pt-16">
        {/* Mobile, Tablet, and Laptop: Show full image with no text */}
        <img
          src={heroBg}
          alt="Blogs Hero"
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

      {/* Main Content Section */}
      <div className="px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          We're working hard to bring exciting new blog content. Stay tuned for updates!
        </p>
      </div>
    </>
  );
};

export default BLOGS;
