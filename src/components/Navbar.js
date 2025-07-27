import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    `block mt-2 md:inline-block md:mt-0 px-4 py-2 text-sm font-medium transition duration-300 ${
      location.pathname === path
        ? 'text-blue-400 border-b-2 border-blue-400'
        : 'text-white hover:text-blue-300'
    }`;

  return (
    <nav className="bg-gray-900 bg-opacity-95 px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src="/images/hahu-logo.png" alt="HahuTech Logo" className="h-10 w-auto sm:h-12 md:h-14" />
          <h1 className="text-white text-xl md:text-2xl font-bold">HahuTech Solutions</h1>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/services" className={linkClass('/services')}>Services</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
      </div>

      {/* Navigation links (mobile dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/services" className={linkClass('/services')}>Services</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;