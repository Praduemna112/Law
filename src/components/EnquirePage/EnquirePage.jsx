import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/machine1.jpeg";
import img2 from "../../assets/machine1.jpeg";
import img3 from "../../assets/machine1.jpeg";

const EnquirePage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    height: "auto", // Make height flexible for mobile
    maxHeight: "550px",
  };

  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/contact");
    }, 600);
  };

  return (
    <div className="w-full font-medium">
      {/* Hero Section */}
      <div className="relative h-[45vh] md:h-[55vh] flex flex-col items-center justify-center text-white text-center px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-orange-700 opacity-80"></div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <div
            className="w-56 h-32 sm:w-72 sm:h-40 relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleNavigate}
            style={{ perspective: "1000px" }}
          >
            <div
              className="w-full h-full relative transition-transform duration-500 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div
                className="absolute w-full h-full flex items-center justify-center bg-orange-500 text-white text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                Tap to Enquire
              </div>

              <div
                className="absolute w-full h-full flex items-center justify-center bg-white text-orange-600 text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                Enquire Now
              </div>
            </div>
          </div>

          {/* Full-width gradient bar below the flip card */}
          <div className="w-full h-16 sm:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full mt-6 sm:mt-8"></div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-20 flex items-center justify-center px-1 sm:px-2 -mt-8">

        <div
          id="carouselExampleIndicators"
          className="carousel slide w-full max-w-[1200px]"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img1}
                className="d-block w-full object-cover rounded"
                style={imageStyle}
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-full object-cover rounded"
                style={imageStyle}
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-full object-cover rounded"
                style={imageStyle}
                alt="Slide 3"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquirePage;
