import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Email from "./Email";

const Contact = () => {
  return (
    <div className="w-full font-medium pt-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Map on top, Email below */}
          <div className="w-full lg:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Map */}
            <div className="w-full mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.610427975973!2d75.887334!3d17.671018999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzE1LjciTiA3NcKwNTMnMTQuNCJF!5e1!3m2!1sen!2sin!4v1743860324236!5m2!1sen!2sin"
                width="100%"
                height="350"
                className="rounded-md shadow"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
              ></iframe>
            </div>

            {/* Email Form */}
            <Email />
          </div>

          {/* RIGHT: Contact Text */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-6">
              Give us a shout!
            </h2>

            <ul className="space-y-5 text-base sm:text-lg">
              <li>
                Drop by the office: S. NO. 118, A-2, GROUND FLOOR, CIPLA ROAD,
                OPP - CIPLA BUS STOP, NEAR – MAULI MEDICAL, WARJE, PUNE-411058;
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

            <ul className="mt-6 space-y-4 text-base sm:text-lg">
              <li className="flex items-center gap-2">
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
              <li className="flex items-center gap-2">
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

            <p className="mt-6 text-base sm:text-lg">
              Connect with us and inquire about Smart Micro Retail Solutions for
              your facility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
