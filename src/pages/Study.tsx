import React, { useState } from 'react';
import Hero from '../components/Hero';

// 1. On définit une interface décrivant les props du composant AccordionItem
interface AccordionItemProps {
  title: string;
  icon: string;
  content: string;
}

// 2. On l’utilise dans la fonction AccordionItem
function AccordionItem({ title, icon, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 border rounded-lg overflow-hidden shadow-sm">
      {/* Bouton "question" */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full px-4 py-4 bg-blue-500 text-white font-bold text-center 
                   hover:bg-blue-600 transition-colors focus:outline-none"
      >
        {/* Icône + Titre, centrés au milieu du bouton */}
        <span className="flex items-center justify-center space-x-2 text-lg">
          <span className="text-2xl">{icon}</span>
          <span>{title}</span>
        </span>

        {/* + / - dans le coin supérieur droit */}
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl font-extrabold">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Contenu "réponse" */}
      {isOpen && (
        <div className="bg-blue-50 px-4 py-4 text-blue-900 leading-relaxed font-serif">
          {content}
        </div>
      )}
    </div>
  );
}

// 3. On type le tableau d’items avec la même interface
const Study = () => {
  const programDetails: AccordionItemProps[] = [
    {
      title: 'Duración',
      icon: '📅',
      content:
        '2 semestres intensivos (Octubre - Julio). Sumérgete en un riguroso plan de estudios que combina teoría y práctica, dándote la base sólida que necesitas para destacar.',
    },
    {
      title: 'Ubicación',
      icon: '📍',
      content:
        'htw saar, Saarbrücken, Alemania. Situada en el corazón de Europa, esta universidad te ofrece un ambiente multicultural, seguro y lleno de oportunidades para crecer académica y personalmente.',
    },
    {
      title: 'Cursos',
      icon: '📚',
      content:
        'Alemán, Matemáticas, Física, Informática. Recibirás formación especializada y orientación académica, preparándote para carreras relacionadas con tecnología, ciencias exactas y más.',
    },
    {
      title: 'Certificación',
      icon: '📜',
      content:
        'Una certificación oficial reconocida a nivel nacional que te abrirá las puertas de las mejores universidades alemanas, impulsando tu perfil internacional.',
    },
    {
      title: 'Costo de Matrícula',
      icon: '💰',
      content:
        '€7,800. Gracias a las facilidades de pago y al financiamiento disponible a través de Sherpa Living, invertir en tu futuro nunca había sido tan alcanzable.',
    },
    {
      title: 'Requisitos de Admisión',
      icon: '📑',
      content:
        'Título de acceso a la universidad y nivel B1 de alemán (o curso preparatorio). Si todavía no cumples con el nivel requerido, contamos con un programa de refuerzo lingüístico para llevarte hasta la meta.',
    },
  ];

  return (
    <div>
      <Hero
        title="Estudia en Alemania con Prep-For-Study"
        subtitle="¡Tu puerta de entrada a una educación de alta calidad en Alemania!"
        imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
      />
     
  
   
  
       
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">¿Por qué elegir Prep-For-Study?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prep-For-Study es un programa integral diseñado para brindarte 
            las herramientas necesarias para que cumplas tu sueño de estudiar 
            en Alemania. Con apoyo personalizado, clases innovadoras y 
            oportunidades de financiamiento a través de Sherpa Living, 
            ¡tendrás todo a tu alcance para triunfar!
          </p>
        </div>

        {/* Petites cartes illustrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img
               src={`${import.meta.env.BASE_URL}Images/GermanUni1.jpeg`} alt="Campus"  
              
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Campus de htw saar</h3>
              <p className="text-gray-600">
                Descubre instalaciones de última generación, laboratorios 
                equipados y espacios de convivencia que te inspirarán 
                a avanzar en tu carrera.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img
              src={`${import.meta.env.BASE_URL}Images/germanUni.jpeg`} 
              alt="Vista de la Ciudad de Saarbrücken"  
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Vida Urbana Vibrante</h3>
              <p className="text-gray-600">
                Vive la mezcla perfecta entre tradición y modernidad 
                en Saarbrücken: una ciudad llena de cultura, gastronomía y eventos.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img
              
              src={`${import.meta.env.BASE_URL}Images/river.jpeg`}
              alt="Río Saar en Saarbrücken"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Paisajes Escénicos</h3>
              <p className="text-gray-600">
                Disfruta de la tranquilidad y la belleza natural 
                a orillas del río Saar, el escenario perfecto 
                para pasear, relajarte y estudiar.
              </p>
            </div>
          </div>
        </div>

        {/* Accordéon (tableau dépliant) */}
        <h2 className="text-3xl font-bold mb-6 text-center">Detalles del Programa</h2>
        <div className="max-w-4xl mx-auto">
          {programDetails.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              icon={item.icon}
              content={item.content}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para comenzar tu aventura en Alemania?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            ¡Las inscripciones están abiertas hasta el 31 de marzo! Da el paso 
            decisivo y únete a una comunidad de estudiantes internacionales 
            que están transformando su futuro.
          </p>
          <a
          href='https://creatorapp.zohopublic.ca/sherpaliving/landlords-appartemnt/form-perma/Sherpa_Study/z0pTMgBkm3XVrpu4UfQKCnq8b9jks1WTnUR06C3R35QWBf3W4kZwe3sJGp1YDK8hEmkXqpkKB7EnhJnSQJWAT74Fbxb7a6qjvj9t'
          target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Inscríbete Ahora
          </a>
        </div>
       

      </div>
    </div>
  );
};

export default Study;
