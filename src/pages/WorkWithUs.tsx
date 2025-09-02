import React from 'react';
import { Building2, Shield, Users, Banknote } from 'lucide-react';
import Hero from '../components/Hero';

const WorkWithUs = () => {
  return (
    <div>
      <Hero
        title="Asóciate con Sherpa Living"
        subtitle="Permítenos encargarnos de todo mientras conectamos tu propiedad con inquilinos de confianza"
        imageUrl="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
        ctaText="Publica tu propiedad hoy"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sección de Beneficios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué asociarte con nosotros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Inquilinos verificados</h3>
              <p className="text-gray-600">
                Todos los inquilinos pasan por nuestro riguroso proceso de verificación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestión de propiedades</h3>
              <p className="text-gray-600">
                Nos encargamos de todos los aspectos de la administración de tu propiedad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Banknote className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Alquiler garantizado</h3>
              <p className="text-gray-600">
                Pagos mensuales asegurados, sin importar la ocupación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">
                Asistencia las 24 horas para ti y tus inquilinos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sección de Llamado a la Acción */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Publica tu propiedad</h2>
          <p className="text-gray-700 mb-6">
            Haz clic en el botón a continuación para acceder al formulario y comenzar a trabajar con nosotros.
          </p>
          <a
            href="https://creatorapp.zohopublic.ca/sherpaliving/landlords-appartemnt/form-perma/Landlords_Request/9e6yjjPjrf1YUSaWGSnNJvGqMQ1nMNqjzPp0XvNge4MMFrr20ebVKfaUeExuQEBkX36242Ayn1YG1uO5tUn6KFnPPZx7Bb9pFxxX"   
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Publica tu propiedad
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
