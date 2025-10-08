import React, { useState } from 'react';

// --- Hero Component ---
// MODIFICACIÓN: Se ha ajustado el estilo del título y subtítulo para un look más minimalista.
const Hero = ({ title, subtitle, imageUrl }) => (
  <section className="relative text-center overflow-hidden bg-gray-800">
    <img
      src={imageUrl}
      alt="Estudiar en Alemania"
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    />
    <div className="relative py-32 md:py-48 max-w-4xl mx-auto px-4">
      {/* Titre: réduction de 10% de la taille et police plus fine */}
      <h1 className="text-3xl md:text-[2.8rem] font-semibold text-white shadow-lg">
        {title}
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-gray-200">
        {subtitle}
      </p>
    </div>
  </section>
);


// --- Reusable Inner Components ---

const BenefitCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

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
        <div 
          className="bg-white px-4 py-5 text-gray-700 leading-relaxed border-t border-gray-200"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};


// --- Main Study Page Component ---

const StudyPage = () => {
  const programDetails = [
    {
      title: 'Duración',
      icon: '📅',
      content: '2 semestres (Octubre - Julio). Un plan de estudios completo que combina teoría y práctica para darte la base sólida ',
    },
    {
      title: 'Ubicación',
      icon: '📍',
      content: 'Ubicacion: HTW Saar, Saarbrücken, Alemania. Situada en el corazón de Europa, esta universidad te ofrece un ambiente multicultural y seguro.',
    },
    {
      title: 'Cursos',
      icon: '📚',
      content: 'Alemán, Matemáticas, Física e Informática. Recibirás formación especializada y orientación académica para prepararte para tu carrera de ingeniería.',
    },
    {
      title: 'Certificación',
      icon: '📜',
      content: 'El programa Prep-for-Study está acreditado por <a href="https://www.asiin.de/en/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">ASIIN</a>, una agencia de renombre mundial que certifica más de 6500 programas de estudio en 401 instituciones a través de 68 países. Para saber más, visita el sitio web de ASIIN.',
    },
    {
      title: 'Costo e Inclusión',
      icon: '💶',
      content: 'El programa tiene un costo de 7.800 €. Este costo comprende los dos semestres de cursos, las visitas, apoyo para encontrar alojamiento y con trámites migratorios.',
    },
    {
      title: 'Requisitos de Admisión',
      icon: '📑',
      content: 'Certificado de preparatoria terminada y un nivel B1 de alemán. Si aún no cumples con el requisito del idioma, ofrecemos un programa de refuerzo lingüístico.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Hero
        title="Estudia en Alemania con Prep-for-Study"
        subtitle="Tu Puerta de Entrada a una Carrera de Ingeniería de Clase Mundial"
        imageUrl="/Images/htw_saar.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* --- Sección de Introducción --- */}
        <div className="text-center mb-24">
          {/* MODIFICACIÓN: Título más pequeño y minimalista */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            ¿Qué es Prep-for-Study?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            ¿Sueñas con formarte en ingeniería en una de las mejores universidades del mundo?
            Alemania, líder global en innovación e ingeniería, te abre sus puertas.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Con Prep-for-Study, tu camino hacia una educación de élite en Alemania comienza hoy. En solo un año de preparación, estarás listo para postularte a cualquier Universidad de Ciencias Aplicadas (Hochschule) del país… ¡y pagar las mismas tasas que un estudiante local!
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            No solo estudiarás en un sistema educativo reconocido por su excelencia y enfoque práctico: también te integrarás en un ecosistema de oportunidades, empleabilidad y futuro.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prep-for-Study: tu puerta de entrada a la ingeniería alemana.
          </p>
        </div>

        {/* --- Sección de Beneficios Clave --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.28-.659 2.003-.659 1.5 0 2.848.888 3.541 2.082" /></svg>} 
              title="Acceso a Matrícula Local"
            >
              Invierte en tu preparación y accede a tarifas de matrícula alemanas, que son significativamente más bajas que las tasas internacionales.
            </BenefitCard>
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} 
              title="Ingeniería eficiente: tres años, máximo impacto"
            >
              En Alemania, tu carrera de ingeniería dura 3 años —frente a los 4 o 5 habituales en México— sin comprometer calidad, gracias a un modelo educativo centrado en la práctica y la empleabilidad.
            </BenefitCard>
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} 
              title="Gana Mientras Aprendes"
            >
              Accede a prácticas profesionales pagadas que te ayudarán a cubrir tus gastos, convirtiendo tu educación en un proyecto autosostenible.
            </BenefitCard>
        </div>

        {/* --- Sección "Descubre Oportunidades Únicas" --- */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Descubre Oportunidades Únicas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="/Images/staar_classroom.jpg" alt="Aula del campus de HTW Saar" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Campus de Vanguardia en HTW Saar</h3>
              <p className="text-gray-600 mb-4">Estudia en instalaciones modernas con tecnología de punta. La HTW Saar es reconocida por su excelencia en ingeniería y su enfoque práctico.</p>
              <a href="https://www.htwsaar.de/en" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">Visita la universidad →</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="/Images/GermanUni1.jpeg" alt="Estudiantes trabajando en un proyecto de ingeniería" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Opciones de Doble Titulación</h3>
              <p className="text-gray-600">Explora programas de doble titulación con instituciones asociadas en todo el mundo, obteniendo dos diplomas reconocidos globalmente.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="/Images/river2.jpg" alt="Joven profesional trabajando en una laptop" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Tu Futuro Profesional Comienza Aquí</h3>
              <p className="text-gray-600">Alemania ofrece increíbles oportunidades de carrera post-graduación. Una educación aquí es una inversión directa en tu futuro profesional.</p>
            </div>
          </div>
        </div>

        {/* --- Acordeón de Detalles del Programa --- */}
        <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Detalles del Programa</h2>
            {programDetails.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>

        {/* --- Sección Final de CTA --- */}
        <div className="text-center bg-white p-10 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¿Listo para comenzar tu aventura en Alemania?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Prep-for-Study es tu plataforma de lanzamiento hacia una carrera global en ingeniería más inteligente, rápida y asequible.
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

