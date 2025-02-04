import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Building2, Users, Info } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Sherpa Living</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/living"
              className={`flex items-center space-x-1 ${
                isActive('/living') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Building2 className="h-5 w-5" />
              <span>Living</span>
            </Link>
            
            <Link
              to="/study"
              className={`flex items-center space-x-1 ${
                isActive('/study') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Study</span>
            </Link>
            
            <Link
              to="/work-with-us"
              className={`flex items-center space-x-1 ${
                isActive('/work-with-us') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Work With Us</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center space-x-1 ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;