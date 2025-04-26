import React, { useState, useRef, useEffect } from "react";
import CircuitLogo from "../CircuitLogo/CircuitLogo";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import { AiOutlineMail } from "react-icons/ai"; // Email icon

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/service", label: "Service" },
    { to: "/contact", label: "Contact" },
  ];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
    className={`w-full top-0 left-0 z-[100] transition-all duration-300 ${isFixed ? "fixed bg-blue-950" : "absolute bg-blue-800"}`}

    >
      <nav className="flex justify-between items-center px-4 py-3 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-3">
          {/* <CircuitLogo className="w-14 h-14" /> */}
          <div className="text-white font-bold whitespace-nowrap">
            <h1 className="text-xl block sm:hidden">
              <span className="text-red-500">L</span>AW
            </h1>
            <h1 className="text-3xl hidden sm:block">
              <span className="text-red-500">L</span>AW
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-white ml-auto items-center">
          {navLinks.map((item) => (
            <li key={item.to} className="relative group">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition duration-300 pb-1 ${
                    isActive ? "text-white" : "hover:text-red-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}

         
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNavOpen(true)}
          className="md:hidden bg-blue-950 text-white text-2xl p-2 rounded cursor-pointer ml-2"
        >
          <AiOutlineMenu />
        </div>
      </nav>

      {/* Mobile Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[90] md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Mobile Slide Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white z-[100] transform transition-transform duration-300 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-black">Menu</h2>
          <button onClick={() => setNavOpen(false)} className="text-2xl">
            <AiOutlineClose />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 text-black font-medium">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={() => setNavOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp and Email Contacts */}
        <div className="p-4 border-t mt-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Contact Us
          </h3>
          <div className="flex flex-col space-y-2">
            {/* WhatsApp Contact with Icon */}
            <a
              href="https://wa.me/+919168111181"
              target="_blank"
              
              className="flex items-center space-x-2 text-green-600 font-medium hover:underline"
            >
              <FaWhatsapp className="text-xl" />
              <span>9168111181</span>
            </a>

            {/* Email Contact with Icon */}
            <a
              href="mailto:advssmd1975@gmail.com"
              className="flex items-center space-x-2 text-blue-600 font-medium hover:underline"
            >
              <AiOutlineMail className="text-xl" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
