import React, { useState } from 'react';
// MODIFICATION : react-router-dom n'est plus nécessaire dans ce composant isolé.
// import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pour éviter la répétition, on définit les liens une seule fois.
  const navLinks = [
    { to: "/living", text: "Living" },
    { to: "/study", text: "Study" },
    { to: "/work", text: "Work with us" },
    { to: "/about", text: "About" },
  ];

  // CORRECTION : Les composants Link et NavLink ont été remplacés par des balises <a> standard
  // pour résoudre l'erreur de contexte du routeur.
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* MODIFIÉ : Logo et texte sont maintenant ensemble */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/Images/Logo1_1.png" 
                alt="Sherpa Living Logo" 
                className="h-8 w-auto" // Vous pouvez ajuster la hauteur ici
              />
              <span className="ml-3 text-xl font-bold text-gray-800">Sherpa Living</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.text}
              </a>
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
                className="block h-8 w-8" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="block px-3 py-3 rounded-md text-base font-medium text-center text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

