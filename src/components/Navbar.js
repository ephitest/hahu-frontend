import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `text-sm md:text-base px-4 py-2 transition duration-300 ${
      location.pathname === path
        ? 'text-blue-400 border-b-2 border-blue-400'
        : 'text-white hover:text-blue-300'
    }`;

  return (
    <nav className="bg-gray-900 bg-opacity-95 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/hahu-logo.png"
          alt="HahuTech Logo"
          className="h-40 w-auto"
        />
        <h1 className="text-white text-xl md:text-2xl font-bold">HahuTech Solutions</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/about" className={linkClass('/about')}>About</Link>
        <Link to="/services" className={linkClass('/services')}>Services</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;