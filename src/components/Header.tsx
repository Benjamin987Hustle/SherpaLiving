import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Building2, Users, Info } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/living', text: 'Living', icon: <Building2 className="h-5 w-5" /> },
    { to: '/study', text: 'Study', icon: <BookOpen className="h-5 w-5" /> },
    { to: '/work-with-us', text: 'Work With Us', icon: <Users className="h-5 w-5" /> },
    { to: '/about', text: 'About', icon: <Info className="h-5 w-5" /> },
  ];

  return (
    <header className="bg-white shadow-sm sticky w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo plus visible */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Images/Logo1_1.png"
                alt="Sherpa Living Logo"
                className="h-12 sm:h-12 md:h-14 w-auto drop-shadow-md"
              />
              <span className="text-2xl md:text-3xl font-extrabold text-gray-900">Sherpa Living</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 transition-colors ${
                    isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`
                }
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

