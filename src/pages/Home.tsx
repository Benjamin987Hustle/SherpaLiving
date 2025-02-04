import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, BookOpen, Users } from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero
        title="Welcome to Sherpa Living"
        subtitle="Your trusted guide in finding the perfect home abroad"
        imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80"
        
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/living" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Sherpa Living</h3>
              <p className="text-gray-600">
                Find your perfect home with our verified listings and comprehensive support services.
              </p>
            </div>
          </Link>
          
          <Link to="/study" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Sherpa Study</h3>
              <p className="text-gray-600">
                Explore global study opportunities with our exclusive educational programs.
              </p>
            </div>
          </Link>
          
          <Link to="/work-with-us" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Work With Us</h3>
              <p className="text-gray-600">
                Partner with us to connect your property with trusted tenants worldwide.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;