import React from 'react';
// SUPPRESSION : L'importation de 'Link' n'est plus nécessaire car nous utilisons des balises <a> standard.
import { Building2, BookOpen, Users, Info } from 'lucide-react';

// AJOUT : Le composant Hero est maintenant défini ici pour résoudre l'erreur d'importation.
const Hero = ({ title, subtitle, imageUrl }) => (
  <section className="relative text-center overflow-hidden bg-gray-800">
    <img
      src={imageUrl}
      alt="A welcoming and modern living room"
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    />
    <div className="relative py-32 md:py-48 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white shadow-lg">
        {title}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-200">
        {subtitle}
      </p>
    </div>
  </section>
);

const Home = () => {
  return (
    <div>
      <Hero
        title="Welcome to Sherpa Living"
        subtitle="Your trusted guide in finding the perfect home abroad"
        imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* MODIFICATION : Remplacement de <Link> par <a> pour corriger l'erreur de contexte du routeur. */}
          <a href="/living" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl h-full">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Sherpa Living</h3>
              <p className="text-gray-600">
                Find your perfect home with our verified listings and comprehensive support services.
              </p>
            </div>
          </a>
          
          <a href="/study" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl h-full">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Sherpa Study</h3>
              <p className="text-gray-600">
                Explore global study opportunities with our exclusive educational programs.
              </p>
            </div>
          </a>
          
          <a href="/work-with-us" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl h-full">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Work With Us</h3>
              <p className="text-gray-600">
                Partner with us to connect your property with trusted tenants worldwide.
              </p>
            </div>
          </a>

          <a href="/about" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 transition duration-200 hover:shadow-xl h-full">
              <Info className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">About Us</h3>
              <p className="text-gray-600">
                Learn more about our mission, our values, and the team dedicated to helping you succeed.
              </p>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Home;

