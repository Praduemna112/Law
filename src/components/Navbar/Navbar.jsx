import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false); // for desktop
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // for mobile

  const dropdownRef = useRef(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/Practices", label: "Practices" },
    { to: "/Expertise", label: "Expertise" },
  ];

  return (
    <header
      className={`w-full top-0 left-0 z-[100] transition-all duration-300 ${
        isFixed ? "fixed bg-blue-950" : "absolute bg-blue-800"
      }`}
    >
      <nav className="flex justify-between items-center px-4 py-3 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <NavLink to="/" className="flex items-center space-x-3">
          <div className="text-white font-bold whitespace-nowrap">
            <h1 className="text-xl block sm:hidden">
            <span className="text-red-500">L</span>aw <span className="text-red-500">L</span>egends
            </h1>
            <h1 className="text-3xl hidden sm:block">
              <span className="text-red-500">L</span>aw <span className="text-red-500">L</span>egends
            </h1>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-white ml-auto items-center">
          {navLinks.map((item) => (
            <li key={item.to} className="flex items-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center transition duration-300 relative ${
                    isActive
                      ? "underline underline-offset-8 decoration-2 text-white"
                      : "hover:text-red-500"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Social Dropdown */}
          <li className="relative hover:text-red-500" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-base lg:text-lg font-medium hover:text-red-500 text-white"
            >
              Social
              <span
                className={`ml-2 transition-transform duration-300 transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ⛛
              </span>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full rounded-2xl bg-white shadow-lg w-40 mt-2 z-[200]">
                <li>
                  <NavLink
                    to="/RRB"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-black hover:rounded-2xl hover:bg-gray-300"
                  >
                    RRB
                  </NavLink>
                </li>
                <li className="border-t border-gray-300 mx-2"></li>
                <li>
                  <NavLink
                    to="/BLOGS"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-black hover:rounded-2xl hover:bg-gray-300"
                  >
                    BLOGS
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Contact */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center transition duration-300 relative ${
                  isActive
                    ? "underline underline-offset-8 decoration-2 text-white"
                    : "hover:text-red-500"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
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

        <div className="p-4">
          <ul className="flex flex-col space-y-4 text-black font-medium">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setNavOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 relative ${
                      isActive
                        ? "underline underline-offset-8 decoration-2"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile Social Dropdown */}
            <li className="relative">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center py-2 w-full text-left"
              >
                Social
                <span
                  className={`ml-2 transition-transform duration-300 transform ${
                    mobileDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⛛
                </span>
              </button>
              {mobileDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/RRB"
                      onClick={() => {
                        setNavOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                      className="block py-1 relative"
                    >
                      RRB
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/BLOGS"
                      onClick={() => {
                        setNavOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                      className="block py-1 relative"
                    >
                      BLOGS
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Contact */}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setNavOpen(false)}
                className={({ isActive }) =>
                  `block py-2 relative ${
                    isActive ? "underline underline-offset-8 decoration-2" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* WhatsApp and Email Contacts */}
          <div className="mt-8 pt-4 border-t">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://wa.me/+919168111181"
                target="_blank"
                className="flex items-center space-x-2 text-green-600 font-medium hover:underline"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl" />
                <span>9168111181</span>
              </a>

              <a
                href="mailto:advssmd1975@gmail.com"
                className="flex items-center space-x-2 text-blue-600 font-medium hover:underline"
              >
                <AiOutlineMail className="text-xl" />
                <span>advssmd1975@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
