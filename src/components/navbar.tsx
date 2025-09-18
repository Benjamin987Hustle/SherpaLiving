import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pour éviter la répétition, on définit les liens une seule fois.
  const navLinks = [
    { to: "/living", text: "Living" },
    { to: "/study", text: "Study" },
    { to: "/work", text: "Work with us" },
    { to: "/about", text: "About" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Sherpa Living
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''}`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* AMÉLIORATION : Le menu mobile a une meilleure animation et un meilleur style */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium text-center ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`
              }
              onClick={() => setIsMenuOpen(false)} // Ferme le menu au clic
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
