import React, { useState, useEffect } from 'react';

// --- TRANSLATIONS ---
const translations = {
  fr: {
    nav_cta: "S'inscrire",
    hero_title: "Étudiez en Allemagne avec Prep-for-Study",
    hero_subtitle: "Votre porte d'entrée vers une carrière d'ingénieur de classe mondiale",
    intro_title: "Qu'est-ce que Prep-for-Study ?",
    intro_p1: "Vous rêvez de vous former en ingénierie dans l'une des meilleures universités du monde ? L'Allemagne, leader mondial de l'innovation et de l'ingénierie, vous ouvre ses portes.",
    intro_p2: "Avec Prep-for-Study, votre chemin vers une éducation d'élite en Allemagne commence aujourd'hui. En seulement un an de préparation, vous serez prêt à postuler dans n'importe quelle Université des Sciences Appliquées (Hochschule) du pays... et paierez les mêmes frais qu'un étudiant local !",
    intro_p3: "Vous n'étudierez pas seulement dans un système éducatif reconnu pour son excellence et son approche pratique : vous intégrerez également un écosystème d'opportunités, d'employabilité et d'avenir.",
    intro_p4: "Prep-for-Study : votre porte d'entrée vers l'ingénierie allemande.",
    benefit_1_title: "Accès aux frais de scolarité locaux",
    benefit_1_desc: "Investissez dans votre préparation et accédez aux tarifs de scolarité allemands, qui sont nettement inférieurs aux frais internationaux.",
    benefit_2_title: "Ingénierie efficace : 3 ans, impact maximal",
    benefit_2_desc: "En Allemagne, votre cursus d'ingénieur dure 3 ans — contre 4 ou 5 ailleurs — sans compromettre la qualité, grâce à un modèle éducatif axé sur la pratique et l'employabilité.",
    benefit_3_title: "Gagnez en apprenant",
    benefit_3_desc: "Accédez à des stages professionnels rémunérés qui vous aideront à couvrir vos dépenses, transformant votre éducation en un projet autosuffisant.",
    opp_title: "Découvrez des Opportunités Uniques",
    opp_1_title: "Campus d'avant-garde à HTW Saar",
    opp_1_desc: "Étudiez dans des installations modernes avec une technologie de pointe. La HTW Saar est reconnue pour son excellence en ingénierie et son approche pratique.",
    opp_1_link: "Visiter l'université →",
    opp_2_title: "Options de Double Diplôme",
    opp_2_desc: "Explorez des programmes de double diplôme avec des institutions partenaires dans le monde entier, obtenant deux diplômes reconnus mondialement.",
    opp_3_title: "Votre Avenir Professionnel Commence Ici",
    opp_3_desc: "L'Allemagne offre des opportunités de carrière incroyables après l'obtention du diplôme. Une éducation ici est un investissement direct dans votre avenir professionnel.",
    details_title: "Détails du Programme",
    d_duration_t: "Durée",
    d_duration_c: "2 semestres (Octobre - Juillet). Un programme d'études complet combinant théorie et pratique pour vous donner une base solide.",
    d_location_t: "Lieu",
    d_location_c: "Lieu : HTW Saar, Sarrebruck, Allemagne. Située au cœur de l'Europe, cette université offre un environnement multiculturel et sûr.",
    d_courses_t: "Cours",
    d_courses_c: "Allemand, Mathématiques, Physique et Informatique. Vous recevrez une formation spécialisée et une orientation académique pour vous préparer à votre carrière d'ingénieur.",
    d_cert_t: "Certification",
    d_cert_c: "Le programme Prep-for-Study est accrédité par <a href='https://www.asiin.de/en/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>ASIIN</a>, une agence de renommée mondiale.",
    d_cost_t: "Coût et Inclusions",
    d_cost_c: "Le programme coûte 7 800 €. Ce coût comprend les deux semestres de cours, les visites, le soutien pour trouver un logement et les démarches migratoires.",
    d_req_t: "Conditions d'Admission",
    d_req_c: "Certificat de fin d'études secondaires et niveau B1 en allemand. Si vous n'avez pas encore le niveau requis, nous proposons un programme de renforcement linguistique.",
    cta_title: "Prêt à commencer votre aventure en Allemagne ?",
    cta_desc: "Prep-for-Study est votre tremplin vers une carrière mondiale en ingénierie plus intelligente, plus rapide et plus abordable.",
    cta_button: "S'inscrire Maintenant"
  },
  en: {
    nav_cta: "Apply Now",
    hero_title: "Study in Germany with Prep-for-Study",
    hero_subtitle: "Your Gateway to a World-Class Engineering Career",
    intro_title: "What is Prep-for-Study?",
    intro_p1: "Do you dream of training in engineering at one of the world's best universities? Germany, a global leader in innovation and engineering, opens its doors to you.",
    intro_p2: "With Prep-for-Study, your path to an elite education in Germany starts today. In just one year of preparation, you'll be ready to apply to any University of Applied Sciences (Hochschule) in the country... and pay the same tuition as a local student!",
    intro_p3: "You won't just study in an educational system recognized for its excellence and practical approach: you will also integrate into an ecosystem of opportunities, employability, and future.",
    intro_p4: "Prep-for-Study: your gateway to German engineering.",
    benefit_1_title: "Access to Local Tuition Fees",
    benefit_1_desc: "Invest in your preparation and access German tuition rates, which are significantly lower than international fees.",
    benefit_2_title: "Efficient Engineering: 3 Years, Maximum Impact",
    benefit_2_desc: "In Germany, your engineering degree lasts 3 years — compared to 4 or 5 elsewhere — without compromising quality, thanks to an educational model focused on practice and employability.",
    benefit_3_title: "Earn While You Learn",
    benefit_3_desc: "Access paid professional internships that will help cover your expenses, turning your education into a self-sustaining project.",
    opp_title: "Discover Unique Opportunities",
    opp_1_title: "State-of-the-Art Campus at HTW Saar",
    opp_1_desc: "Study in modern facilities with cutting-edge technology. HTW Saar is renowned for its excellence in engineering and practical approach.",
    opp_1_link: "Visit University →",
    opp_2_title: "Double Degree Options",
    opp_2_desc: "Explore double degree programs with partner institutions worldwide, earning two globally recognized diplomas.",
    opp_3_title: "Your Professional Future Starts Here",
    opp_3_desc: "Germany offers incredible career opportunities post-graduation. An education here is a direct investment in your professional future.",
    details_title: "Program Details",
    d_duration_t: "Duration",
    d_duration_c: "2 semesters (October - July). A complete curriculum combining theory and practice to give you a solid foundation.",
    d_location_t: "Location",
    d_location_c: "Location: HTW Saar, Saarbrücken, Germany. Located in the heart of Europe, this university offers a multicultural and safe environment.",
    d_courses_t: "Courses",
    d_courses_c: "German, Mathematics, Physics, and Computer Science. You will receive specialized training and academic guidance to prepare for your engineering career.",
    d_cert_t: "Certification",
    d_cert_c: "The Prep-for-Study program is accredited by <a href='https://www.asiin.de/en/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>ASIIN</a>, a world-renowned agency.",
    d_cost_t: "Cost and Inclusions",
    d_cost_c: "The program costs €7,800. This usage covers two semesters of courses, visits, support for finding accommodation, and immigration procedures.",
    d_req_t: "Admission Requirements",
    d_req_c: "High School Leaving Certificate and B1 level in German. If you don't meet the language requirement yet, we offer a language reinforcement program.",
    cta_title: "Ready to Start Your Adventure in Germany?",
    cta_desc: "Prep-for-Study is your launchpad to a smarter, faster, and more affordable global engineering career.",
    cta_button: "Register Now"
  },
  es: {
    nav_cta: "Inscribirse",
    hero_title: "Estudia en Alemania con Prep-for-Study",
    hero_subtitle: "Tu Puerta de Entrada a una Carrera de Ingeniería de Clase Mundial",
    intro_title: "¿Qué es Prep-for-Study?",
    intro_p1: "¿Sueñas con formarte en ingeniería en una de las mejores universidades del mundo? Alemania, líder global en innovación e ingeniería, te abre sus puertas.",
    intro_p2: "Con Prep-for-Study, tu camino hacia una educación de élite en Alemania comienza hoy. En solo un año de preparación, estarás listo para postularte a cualquier Universidad de Ciencias Aplicadas (Hochschule) del país… ¡y pagar las mismas tasas que un estudiante local!",
    intro_p3: "No solo estudiarás en un sistema educativo reconocido por su excelencia y enfoque práctico: también te integrarás en un ecosistema de oportunidades, empleabilidad y futuro.",
    intro_p4: "Prep-for-Study: tu puerta de entrada a la ingeniería alemana.",
    benefit_1_title: "Acceso a Matrícula Local",
    benefit_1_desc: "Invierte en tu preparación y accede a tarifas de matrícula alemanas, que son significativamente más bajas que las tasas internacionales.",
    benefit_2_title: "Ingeniería eficiente: tres años, máximo impacto",
    benefit_2_desc: "En Alemania, tu carrera de ingeniería dura 3 años —frente a los 4 o 5 habituales en México— sin comprometer calidad, gracias a un modelo educativo centrado en la práctica y la empleabilidad.",
    benefit_3_title: "Gana Mientras Aprendes",
    benefit_3_desc: "Accede a prácticas profesionales pagadas que te ayudarán a cubrir tus gastos, convirtiendo tu educación en un proyecto autosostenible.",
    opp_title: "Descubre Oportunidades Únicas",
    opp_1_title: "Campus de Vanguardia en HTW Saar",
    opp_1_desc: "Estudia en instalaciones modernas con tecnología de punta. La HTW Saar es reconocida por su excelencia en ingeniería y su enfoque práctico.",
    opp_1_link: "Visita la universidad →",
    opp_2_title: "Opciones de Doble Titulación",
    opp_2_desc: "Explora programas de doble titulación con instituciones asociadas en todo el mundo, obteniendo dos diplomas reconocidos globalmente.",
    opp_3_title: "Tu Futuro Profesional Comienza Aquí",
    opp_3_desc: "Alemania ofrece increíbles oportunidades de carrera post-graduación. Una educación aquí es una inversión directa en tu futuro profesional.",
    details_title: "Detalles del Programa",
    d_duration_t: "Duración",
    d_duration_c: "2 semestres (Octubre - Julio). Un plan de estudios completo que combina teoría y práctica para darte la base sólida.",
    d_location_t: "Ubicación",
    d_location_c: "Ubicacion: HTW Saar, Saarbrücken, Alemania. Situada en el corazón de Europa, esta universidad te ofrece un ambiente multicultural y seguro.",
    d_courses_t: "Cursos",
    d_courses_c: "Alemán, Matemáticas, Física e Informática. Recibirás formación especializada y orientación académica para prepararte para tu carrera de ingeniería.",
    d_cert_t: "Certificación",
    d_cert_c: "El programa Prep-for-Study está acreditado por <a href='https://www.asiin.de/en/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>ASIIN</a>, una agencia de renombre mundial.",
    d_cost_t: "Costo e Inclusión",
    d_cost_c: "El programa tiene un costo de 7.800 €. Este costo comprende los dos semestres de cursos, las visitas, apoyo para encontrar alojamiento y con trámites migratorios.",
    d_req_t: "Requisitos de Admisión",
    d_req_c: "Certificado de preparatoria terminada y un nivel B1 de alemán. Si aún no cumples con el requisito del idioma, ofrecemos un programa de refuerzo lingüístico.",
    cta_title: "¿Listo para comenzar tu aventura en Alemania?",
    cta_desc: "Prep-for-Study es tu plataforma de lanzamiento hacia una carrera global en ingeniería más inteligente, rápida y asequible.",
    cta_button: "Inscríbete Ahora"
  }
};

// --- Helper Components ---

const Hero = ({ title, subtitle, imageUrl }) => (
  <section className="relative text-center overflow-hidden bg-gray-800">
    <img
      src={imageUrl}
      alt="Study in Germany"
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    />
    <div className="relative py-32 md:py-48 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl md:text-[2.8rem] font-semibold text-white shadow-lg">
        {title}
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-gray-200">
        {subtitle}
      </p>
    </div>
  </section>
);

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

// --- Main Page Component ---

const HTW = () => {
  const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
  const t = translations[lang];

  useEffect(() => {
    const storedLang = localStorage.getItem('siteLang') as 'fr' | 'en' | 'es';
    if (storedLang && translations[storedLang]) {
      setLang(storedLang);
    }
  }, []);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value as 'fr' | 'en' | 'es';
    setLang(newLang);
    localStorage.setItem('siteLang', newLang);
  };

  const programDetails = [
    {
      title: t.d_duration_t,
      icon: '📅',
      content: t.d_duration_c,
    },
    {
      title: t.d_location_t,
      icon: '📍',
      content: t.d_location_c,
    },
    {
      title: t.d_courses_t,
      icon: '📚',
      content: t.d_courses_c,
    },
    {
      title: t.d_cert_t,
      icon: '📜',
      content: t.d_cert_c,
    },
    {
      title: t.d_cost_t,
      icon: '💶',
      content: t.d_cost_c,
    },
    {
      title: t.d_req_t,
      icon: '📑',
      content: t.d_req_c,
    },
  ];

  return (
    <div className="font-sans antialiased text-[#1F2937] bg-gray-50">
      {/* Navbar (Standalone for this page) */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Placeholder Logo Text if no specific logo file available, or use the HTW one */}
            <span className="text-xl font-bold tracking-tight text-gray-800">PREP-FOR-STUDY</span>
          </div>

          <div className="flex items-center gap-4">
            <select
              id="language-switcher"
              value={lang}
              onChange={handleLanguageChange}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 cursor-pointer outline-none"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <a href="https://creatorapp.zohopublic.ca/sherpaliving/landlords-appartemnt/form-perma/Sherpa_Study/z0pTMgBkm3XVrpu4UfQKCnq8b9jks1WTnUR06C3R35QWBf3W4kZwe3sJGp1YDK8hEmkXqpkKB7EnhJnSQJWAT74Fbxb7a6qjvj9t" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-block px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-700 transition transform hover:-translate-y-0.5">
              {t.nav_cta}
            </a>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      <Hero
        title={t.hero_title}
        subtitle={t.hero_subtitle}
        imageUrl="/Images/htw_saar.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* --- Sections --- */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            {t.intro_title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">{t.intro_p1}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">{t.intro_p2}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">{t.intro_p3}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.intro_p4}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          <BenefitCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.28-.659 2.003-.659 1.5 0 2.848.888 3.541 2.082" /></svg>}
            title={t.benefit_1_title}
          >
            {t.benefit_1_desc}
          </BenefitCard>
          <BenefitCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title={t.benefit_2_title}
          >
            {t.benefit_2_desc}
          </BenefitCard>
          <BenefitCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title={t.benefit_3_title}
          >
            {t.benefit_3_desc}
          </BenefitCard>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">{t.opp_title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="/Images/staar_classroom.jpg" alt="HTW Saar Campus" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t.opp_1_title}</h3>
              <p className="text-gray-600 mb-4">{t.opp_1_desc}</p>
              <a href="https://www.htwsaar.de/en" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">{t.opp_1_link}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="/Images/GermanUni1.jpeg" alt="Students" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t.opp_2_title}</h3>
              <p className="text-gray-600">{t.opp_2_desc}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="/Images/river2.jpg" alt="Professional" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t.opp_3_title}</h3>
              <p className="text-gray-600">{t.opp_3_desc}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t.details_title}</h2>
          {programDetails.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>

        <div className="text-center bg-white p-10 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t.cta_title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t.cta_desc}</p>
          <a
            href='https://creatorapp.zohopublic.ca/sherpaliving/landlords-appartemnt/form-perma/Sherpa_Study/z0pTMgBkm3XVrpu4UfQKCnq8b9jks1WTnUR06C3R35QWBf3W4kZwe3sJGp1YDK8hEmkXqpkKB7EnhJnSQJWAT74Fbxb7a6qjvj9t'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            {t.cta_button}
          </a>
        </div>

      </div>
    </div>
  );
};

export default HTW;
