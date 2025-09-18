import React, { useState } from 'react';

// --- Hero Component ---
// El componente Hero se ha movido a este archivo para resolver el error de importación.
// Crea el gran banner con imagen en la parte superior de la página.
const Hero = ({ title, subtitle, imageUrl }) => (
  <section className="relative text-center overflow-hidden bg-gray-800">
    <img
      src={imageUrl}
      alt="Estudiar en Alemania"
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    />
    <div className="relative py-32 md:py-48 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold font-serif text-white shadow-lg">
        {title}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-200">
        {subtitle}
      </p>
    </div>
  </section>
);


// --- Reusable Inner Components ---

// BenefitCard Component: Para mostrar las ventajas clave del programa.
const BenefitCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

// AccordionItem Component: Se mantuvo tu componente original, que está bien hecho.
const AccordionItem = ({ title, icon, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full px-4 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-left transition-colors focus:outline-none"
      >
        <span className="flex items-center space-x-3 text-lg">
          <span className="text-2xl">{icon}</span>
          <span>{title}</span>
        </span>
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl font-light text-blue-600">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="bg-white px-4 py-5 text-gray-700 leading-relaxed border-t border-gray-200">
          {content}
        </div>
      )}
    </div>
  );
};


// --- Main Study Page Component ---

const StudyPage = () => {
  // Datos del acordeón, ahora en español y con el costo explicado.
  const programDetails = [
    {
      title: 'Duración',
      icon: '📅',
      content: '2 semestres intensivos (Octubre - Julio). Sumérgete en un plan de estudios riguroso que combina teoría y práctica, dándote la base sólida que necesitas para destacar.',
    },
    {
      title: 'Ubicación',
      icon: '📍',
      content: 'htw saar, Saarbrücken, Alemania. Situada en el corazón de Europa, esta universidad te ofrece un ambiente multicultural y seguro, lleno de oportunidades para crecer personal y académicamente.',
    },
    {
      title: 'Cursos',
      icon: '📚',
      content: 'Alemán, Matemáticas, Física, Informática. Recibirás formación especializada y orientación académica, preparándote para carreras en tecnología, ciencias exactas y más.',
    },
    {
      title: 'Certificación',
      icon: '📜',
      content: 'Una certificación oficial reconocida a nivel nacional que te abrirá las puertas de las mejores universidades alemanas, impulsando tu perfil internacional.',
    },
    {
      title: 'Costo del Programa',
      icon: '💰',
      content: 'El programa preparatorio de un año cuesta 7.800 €. Esta única cuota es tu llave para acceder a las tarifas de matrícula locales alemanas, que pueden ser tan bajas como 350 € al año, ahorrándote decenas de miles en tasas para estudiantes internacionales.',
    },
    {
      title: 'Requisitos de Admisión',
      icon: '📑',
      content: 'Un título de acceso a la universidad (Bachillerato) y un nivel B1 de alemán. Si aún no cumples con el requisito del idioma, ofrecemos un programa de refuerzo lingüístico para que alcances el nivel necesario.',
    },
  ];

  return (
    <div>
      <Hero
        title="Estudia en Alemania con Prep-for-Study"
        subtitle="Tu Puerta de Entrada a una Carrera de Ingeniería de Clase Mundial"
        imageUrl="/Images/htw_saar.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* --- Sección de Introducción --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 font-serif">
            🌟 ¿Qué es Prep-for-Study? 🌟
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            ¿Sueñas con ser ingeniero/a? Imagínate graduándote de una de las mejores universidades de Alemania, en el epicentro de la innovación global y la excelencia en ingeniería. Prep-for-Study convierte esa visión en realidad, en solo un año.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Después de completar nuestro programa, tendrás acceso directo a la HTW Saar o estarás totalmente preparado para postular a cientos de universidades alemanas, lanzando tu carrera internacional con confianza, credibilidad y una ventaja competitiva.
          </p>
        </div>

        {/* --- Sección de Beneficios Clave --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <BenefitCard icon="💰" title="Paga Matrícula Local">
                Paga tan poco como 350 € al año, en lugar de las tasas internacionales que pueden ascender a decenas de miles.
            </BenefitCard>
            <BenefitCard icon="🚀" title="Acelera Tu Futuro">
                Con una carrera de 3 años en Alemania, te graduarás más rápido que en la mayoría de las universidades mexicanas, incluso contando el año de preparación.
            </BenefitCard>
            <BenefitCard icon="💼" title="Gana Mientras Aprendes">
                Accede a prácticas profesionales pagadas que te ayudarán a cubrir tus gastos, convirtiendo tu educación en un proyecto autosostenible.
            </BenefitCard>
        </div>

        {/* --- Sección de Universidad y Vida en la Ciudad --- */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Vive la Experiencia en Saarbrücken</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Tarjeta 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="/Images/staar_classroom.jpg" alt="Aula del campus de HTW Saar" className="w-full h-48 object-cover"/>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Campus de Vanguardia</h3>
              <p className="text-gray-600">Descubre instalaciones modernas, laboratorios equipados y espacios colaborativos que te inspirarán.</p>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="/Images/GermanUni1.jpeg" alt="Vibrante ciudad de Saarbrücken" className="w-full h-48 object-cover"/>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Vida Urbana Vibrante</h3>
              <p className="text-gray-600">Experimenta la mezcla perfecta de tradición y modernidad en una ciudad llena de cultura y eventos.</p>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="/Images/river2.jpg" alt="Pintoresco río Sarre en Saarbrücken" className="w-full h-48 object-cover"/>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Paisajes Escénicos</h3>
              <p className="text-gray-600">Disfruta de la tranquilidad y la belleza natural a lo largo del río Sarre, un lugar perfecto para relajarse y estudiar.</p>
            </div>
          </div>
        </div>

        {/* --- Acordeón de Detalles del Programa --- */}
        <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Detalles del Programa</h2>
            {programDetails.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>

        {/* --- Sección Final de CTA --- */}
        <div className="text-center bg-gray-50 p-10 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¿Listo para comenzar tu aventura en Alemania?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Prep-for-Study no es solo un puente a Alemania, es tu plataforma de lanzamiento hacia una carrera global en ingeniería más inteligente, rápida y asequible.
          </p>
          <a
            href='https://creatorapp.zohopublic.ca/sherpaliving/landlords-appartemnt/form-perma/Sherpa_Study/z0pTMgBkm3XVrpu4UfQKCnq8b9jks1WTnUR06C3R35QWBf3W4kZwe3sJGp1YDK8hEmkXqpkKB7EnhJnSQJWAT74Fbxb7a6qjvj9t'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Inscríbete Ahora
          </a>
        </div>

      </div>
    </div>
  );
};

export default StudyPage;

