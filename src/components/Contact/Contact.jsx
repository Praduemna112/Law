import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Email from "./Email";
import Notary1 from "../../assets/low/Notary1.png";

const Contact = () => {
  return (
    <div className="w-full font-medium pt-24 sm:pt-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Map + Email */}
          <div className="w-full lg:w-2/3 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold mb-4">Location:-</p>
            {/* Map */} 
            <div className="w-full mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.02829517154578!2d73.79874176558258!3d18.48731584651019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf23e39880e3%3A0x694aa0978f13aaa8!2sSairam%20Park!5e1!3m2!1sen!2sin!4v1746191832985!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Email Form */}
            <Email />
          </div>

          {/* RIGHT: Text Details */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">
              Give us a shout!
            </h2>

            <ul className="space-y-4 text-sm sm:text-base md:text-lg">
              <li>
                Drop by the office:
                <br />
                <br />
                <div className="flex flex-col items-center text-center">
                  <img
                    src={Notary1}
                    alt="Adv. Satish Muchalamkar"
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                  />
                  <p className="text-lg font-bold">
                    Adv. Satish Muchalamkar
                  </p>
                </div>
                <br />
                <span className="text-gray-700">
                  S. NO. 118, A-2, GROUND FLOOR, CIPLA ROAD,
                  <br />
                  OPP - CIPLA BUS STOP, NEAR – MAULI MEDICAL,
                  <br />
                  WARJE, PUNE-411058
                </span>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 underline hover:text-orange-600"
                >
                  Get Directions
                </a>
              </li>
              <li>Or reach us at:</li>
            </ul>

            <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-lg">
              <li className="flex items-center gap-2 flex-wrap">
                <span>Customer Care Number:</span>
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/9168111181?text=Hi%20there%2C%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-orange-600 underline"
                >
                  +91 9168111181
                </a>
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <span>Email:</span>
                <IoMail className="text-red-500" />
                <a
                  href="mailto:advssmd1975@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-orange-600 underline"
                >
                  advssmd1975@gmail.com
                </a>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
