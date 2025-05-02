import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../../assets/Facebook_icon.png";
import youtubeIcon from "../../assets/Youtube_icon.png";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const hoverGradient = "duration-300 hover:text-black hover:underline";

const Footer = () => {
  return (
    <footer className="bg-orange-400 py-8 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Social Section */}
        <div className="col-span-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-tr text-white bg-clip-text">
              <span className="text-blue-700">L</span>aw{" "}
              <span className="text-blue-700">L</span>egends
            </h2>
          </div>
          <p className={`text-base text-white mb-4 ${hoverGradient}`}></p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
              href="https://wa.me/+919168111181"
              target="_blank"
              className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center p-1"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
            </a>
            <a
              href="mailto:advssmd1975@gmail.com"
              className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center p-1"
            >
              <AiOutlineMail className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 col-span-1 text-black md:col-span-3">
          {/* Company Links */}
          <div className="col-span-1 mb-6 md:mb-0">
            <h3 className="font-bold mb-3 text-lg sm:text-xl">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/aboutus" className={hoverGradient}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={hoverGradient}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/Enquire" className={hoverGradient}>
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-1 mb-6 md:mb-0">
            <h3 className="font-bold mb-3 text-lg sm:text-xl">Contact</h3>
            <p className={`text-sm sm:text-base break-words ${hoverGradient}`}>
              Main Office: S. NO. 118, A-2, GROUND FLOOR, CIPLA ROAD, OPP - CIPLA
              BUS STOP, NEAR – MAULI MEDICAL, WARJE, PUNE-411058
            </p>
            <p className="text-sm sm:text-base mt-2">Mobile no: 9168111181</p>
            <p className="text-sm sm:text-base">Email: advssmd1975@gmail.com</p>
            <p className="mt-2">
              <a
                href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-sm sm:text-base ${hoverGradient}`}
              >
                Get Directions
                <FaMapMarkerAlt className="ml-2 text-red-600" />
              </a>
            </p>
          </div>

          {/* Map Section */}
          <div className="col-span-1 sm:col-span-1">
            <p className="text-lg sm:text-xl text-black mb-2">Location Map:</p>
            <div className="w-full h-40 sm:h-60 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.02829517154578!2d73.79874176558258!3d18.48731584651019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf23e39880e3%3A0x694aa0978f13aaa8!2sSairam%20Park!5e1!3m2!1sen!2sin!4v1746191832985!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm sm:text-base text-black">
        © 2025 LAW. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
