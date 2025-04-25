import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/Instagram_icon.png";
import facebookIcon from "../../assets/Facebook_icon.png";
import linkedinIcon from "../../assets/Linkedin_icon.png";
import youtubeIcon from "../../assets/Youtube_icon.png";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import { AiOutlineMail } from "react-icons/ai"; // Email icon

import { FaMapMarkerAlt } from "react-icons/fa";

import googleStore from "../../assets/googleStore.jpg";
import appStore from "../../assets/appStore.jpg";
import CircuitLogo from "../CircuitLogo/CircuitLogo";

const hoverGradient = "duration-300  hover:text-red-500 ";

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-8 px-4">
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-200"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Social Section */}
        <div className="col-span-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4">
            {/* <CircuitLogo className="w-16 h-16 mb-2 sm:mb-0" /> */}
            <h2 className="text-2xl font-bold bg-gradient-to-tr text-white bg-clip-text">
              <span className="text-red-500">L</span>AW
            </h2>
          </div>
          <p className={`text-base text-white mb-4 ${hoverGradient}`}></p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61575210712307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
              href="https://www.youtube.com/@JioVendor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
                href="https://wa.me/9225812922"
                target="_blank"
                rel="noopener noreferrer"
                className="  text-green-600 w-8 h-8 rounded-full bg-gray-200 object-contain p-1 "
              >
                <FaWhatsapp className="text-2xl" />
                <span></span>
              </a>
              <a
                href="mailto:support@jiovendor.com"
                className=" text-blue-600  w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              >
                <AiOutlineMail className="text-2xl" />
                <span></span>
              </a>
            
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 col-span-1 text-white md:col-span-3">
          {/* Company + Legal */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="font-bold mb-3 text-lg"></h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className={hoverGradient}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={hoverGradient}>
                    Contact
                  </Link>
                </li>
                <li className={hoverGradient}>Careers</li>
                <li>
                  <Link to="/Enquire" className={hoverGradient}>
                    Enquire Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold mb-3 text-lg">Contact</h3>
            <p className={`text-lg ${hoverGradient}`}>
            Main Office:
            </p>
            <p>
              Mobile no:
            </p>
            <p>
              Email:
            </p>
            <p className="mt-2">
              <a
                href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-sm ${hoverGradient}`}
              >
                Get Directions
                <FaMapMarkerAlt className="ml-2 text-red-600" />
              </a>
            </p>
          </div>
          {/* Map Section */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 w-max h-max">
            <div className="w-full h-16 md:h-80 lg:h-40">
              <p>Location Map:</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.610427975973!2d75.887334!3d17.671018999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzE1LjciTiA3NcKwNTMnMTQuNCJF!5e1!3m2!1sen!2sin!4v1743860324236!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-md shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-200">
        © 2025 LAW. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
