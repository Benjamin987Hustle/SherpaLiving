import React, { useState, useEffect } from 'react';

import ProgramForm from '../components/ProgramForm';
import Modal from '../components/Modal';

// --- LOGIQUE DE TRADUCTION ---
const translations = {
    fr: {
        nav_cta: "Découvrir",
        header_tagline: "Immersion dans les Arts Culinaires & Pâtissiers",
        header_title: "SEA Culinary Excellence",
        header_age_prefix: "Pour aspirants Chefs de",
        cta_principal: "Contacter pour réserver",
        cta_prices: "Voir les Tarifs",
        carousel_cta: "Découvrir les Cours",
        desc_title: "Une Aventure Culinaire au Sein d'une Académie de Renom",
        desc_p1: "Situé sur le campus de la Culinary Arts Academy (CAA) au Bouveret, offrant des cuisines de démonstration ultramodernes et un cadre magnifique au bord du Lac Léman.",
        desc_p2: "Le programme est une immersion complète, avec des cours théoriques et pratiques intensifs, axés sur la Cuisine Mondiale, Européenne ou la Pâtisserie et le Chocolat.",
        desc_p3: "Les cours sont donnés par les chefs instructeurs des Bachelor/Master de la CAA, garantissant une éducation culinaire de classe mondiale.",
        morn_title: "Cours Pratiques",
        morn_desc: "Chaque semaine, choisissez un thème culinaire. 4 jours intensifs + 1 jour d'excursion.",
        morn_l3: "Enseigné en Anglais (B1 recommandé)",
        aft_title: "Excursions & Fun",
        aft_desc: "Le Mercredi est dédié aux excursions. Soirées à thème sur le campus.",
        aft_l1: "Découvertes régionales, Lac Léman et Alpes.",
        aft_l2: "Casino, karaoké, sports, jeux, Olympiades.",
        facility_title: "Cuisines Professionnelles",
        facility_desc: "Les cours ont lieu dans les toutes nouvelles cuisines de démonstration de la Culinary Arts Academy.",
        loc_title: "Le Bouveret : Campus au Bord du Lac",
        loc_sub_bouveret: "Campus Culinary Arts Academy",
        loc_p1: "Situé au bord du Lac Léman, environnement calme et inspirant.",
        acc_sub_room: "Hébergement & Repas",
        acc_p1: "Chambres doubles standard (inclus). Pension complète style buffet. Nettoyage hebdomadaire.",
        incl_title: "Tarifs 2026",
        incl_sub: "Les cours sont vendus par semaine (Tuition) et peuvent être combinés.",
        incl_h_title: "Tarif (Base)",
        price_1_week: "CHF 2350 (1 semaine)",
        price_2_weeks: "CHF 4600 (2 semaines)",
        incl_l3: "Hébergement Standard & Pension Complète",
        incl_l5: "Excursions régionales & Soirées",
        incl_l6: "Certificat Culinaire",
        incl_l7: "Frais d'inscription inclus",
        excl_h_title: "Options & Suppléments",
        excl_l1: "Transfert Aéroport (Trajet)",
        excl_l2: "Assurance (obligatoire)",
        excl_l3: "Chambre Simple Standard",
        faq_title: "Questions Fréquentes",
        faq_q1: "Quel niveau d'Anglais est requis pour participer ?",
        faq_a1: "Bien qu'aucune preuve officielle ne soit demandée, tous les cours sont dispensés en Anglais. Un niveau B1 est recommandé pour garantir une participation active et un apprentissage optimal.",
        faq_q2: "Les participants cuisinent-ils leurs propres repas ?",
        faq_a2: "Les repas principaux (petit-déjeuner, déjeuner, dîner) sont servis sous forme de buffet. Cependant, pendant les cours pratiques du matin, vous cuisinerez activement et dégusterez vos propres créations culinaires.",
        faq_q3: "Ce programme est-il une formation professionnelle certifiante ?",
        faq_a3: "Ce programme est une introduction intensive et de niveau académique (délivré par les professeurs de niveau Bachelor/Master de la CAA), idéale pour les futurs étudiants. Un certificat de présence est remis à la fin.",
        cta_title: "Prêt à Lancer Votre Carrière ?",
        cta_sub: "Réservez votre immersion culinaire sur le campus de la Culinary Arts Academy.",
        cta_button: "Demander la Brochure",
        contact_title: "Contactez-nous pour les tarifs et la brochure complète :",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Membre du Swiss Education Group.",
    },
    en: {
        nav_cta: "Discover",
        header_tagline: "Immersion in Culinary & Pastry Arts",
        header_title: "SEA Culinary Excellence",
        header_age_prefix: "For aspiring Chefs aged",
        cta_principal: "Contact to Book",
        cta_prices: "View Prices",
        carousel_cta: "Discover Courses",
        desc_title: "A Culinary Adventure at a Renowned Academy",
        desc_p1: "Located at Culinary Arts Academy (CAA) in Le Bouveret, offering ultra-modern demonstration kitchens by Lake Geneva.",
        desc_p2: "Complete immersion with intensive practical/theory classes in World Cuisine, European Cuisine, or Pastry and Chocolate.",
        desc_p3: "Taught by CAA Bachelor/Master Chef Instructors, ensuring world-class culinary education.",
        morn_title: "Practical Courses",
        morn_desc: "Choose a culinary theme weekly. 4 intensive days + 1 excursion day.",
        morn_l3: "Taught in English (B1 recommended)",
        aft_title: "Excursions & Fun",
        aft_desc: "Wednesday is for excursions. Themed evenings on campus.",
        aft_l1: "Regional discoveries, Lake Geneva, Alps.",
        aft_l2: "Casino, karaoke, sports, games, Olympics.",
        facility_title: "Professional Kitchens",
        facility_desc: "Classes held in brand new demonstration kitchens at Culinary Arts Academy.",
        loc_title: "Le Bouveret: Lakeside Campus",
        loc_sub_bouveret: "Culinary Arts Academy Campus",
        loc_p1: "Located on Lake Geneva, quiet and inspiring environment.",
        acc_sub_room: "Accommodation & Meals",
        acc_p1: "Standard double rooms (included). Full board buffet. Weekly cleaning.",
        incl_title: "2026 Prices",
        incl_sub: "Courses sold per week (Tuition) and can be combined.",
        incl_h_title: "Included (Base)",
        price_1_week: "CHF 2350 (1 Week)",
        price_2_weeks: "CHF 4600 (2 Weeks)",
        incl_l3: "Standard Accommodation & Full Board",
        incl_l5: "Excursions & Evenings",
        incl_l6: "Culinary Certificate",
        incl_l7: "One-time Enrollment Fee (CHF 125)",
        excl_h_title: "Options & Supplements",
        excl_l1: "Airport Transfer (One way)",
        excl_l2: "Insurance (mandatory)",
        excl_l3: "Standard Single Room",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What level of English is required to participate?",
        faq_a1: "While no official proof is required, all classes are taught in English. A B1 level is recommended to ensure active participation and optimal learning.",
        faq_q2: "Do participants cook their own meals?",
        faq_a2: "Main meals (breakfast, lunch, dinner) are served buffet style. However, during morning practical classes, you will actively cook and taste your own culinary creations.",
        faq_q3: "Is this program a professional certification?",
        faq_a3: "This program is an intensive, academic-level introduction (delivered by CAA Bachelor/Master level professors), ideal for future students. A certificate of attendance is awarded at the end.",
        cta_title: "Ready to Launch Your Career?",
        cta_sub: "Book your culinary immersion at the Culinary Arts Academy campus.",
        cta_button: "Request Brochure",
        contact_title: "Contact us for rates and the full brochure:",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Member of Swiss Education Group.",
    },
    es: {
        nav_cta: "Descubrir",
        header_tagline: "Inmersión en Artes Culinarias",
        header_title: "SEA Culinary Excellence",
        header_age_prefix: "Para aspirantes a Chef de",
        cta_principal: "Contactar para Reservar",
        cta_prices: "Ver Precios",
        carousel_cta: "Descubrir Cursos",
        desc_title: "Aventura Culinaria en Academia de Renombre",
        desc_p1: "Ubicado en el campus de Culinary Arts Academy (CAA) en Le Bouveret, con cocinas de demostración ultramodernas junto al Lago Lemán.",
        desc_p2: "Inmersión completa con clases intensivas prácticas/teóricas en Cocina Mundial, Europea o Pastelería y Chocolate.",
        desc_p3: "Impartido por Chefs Instructores de CAA, garantizando educación culinaria de clase mundial.",
        morn_title: "Cursos Prácticos",
        morn_desc: "Elija un tema culinario semanalmente. 4 días intensivos + 1 día de excursión.",
        morn_l3: "En Inglés (B1 recomendado)",
        aft_title: "Excursiones y Diversión",
        aft_desc: "El miércoles es para excursiones. Noches temáticas en el campus.",
        aft_l1: "Descubrimientos regionales, Lago Lemán y Alpes.",
        aft_l2: "Casino, karaoke, deportes, juegos, Olimpiadas.",
        facility_title: "Cocinas Profesionales",
        facility_desc: "Clases en las nuevas cocinas de demostración de Culinary Arts Academy.",
        loc_title: "Le Bouveret: Campus en el Lago",
        loc_sub_bouveret: "Campus Culinary Arts Academy",
        loc_p1: "Ubicado en el Lago Lemán, ambiente tranquilo e inspirador.",
        acc_sub_room: "Alojamiento y Comidas",
        acc_p1: "Habitaciones dobles estándar (incluidas). Pensión completa tipo buffet. Limpieza semanal.",
        incl_title: "Precios 2026",
        incl_sub: "Los cursos se venden por semana (Matrícula) y se pueden combinar.",
        incl_h_title: "Incluido (Base)",
        price_1_week: "CHF 2350 (1 semana)",
        price_2_weeks: "CHF 4600 (2 semanas)",
        incl_l3: "Alojamiento Estándar y Pensión Completa",
        incl_l5: "Excursions Regionales y Noches",
        incl_l6: "Certificado Culinario",
        incl_l7: "Tarifa de Inscripción única (CHF 125)",
        excl_h_title: "Opciones y Suplementos",
        excl_l1: "Traslado al Aeropuerto (Un trayecto)",
        excl_l2: "Seguro (obligatorio)",
        excl_l3: "Habitación Individual Estándar",
        faq_title: "Preguntas Frecuentes",
        faq_q1: "¿Qué nivel de Inglés se requiere para participar?",
        faq_a1: "Aunque no se requiere prueba oficial, todas las clases se imparten en inglés. Se recomienda un nivel B1 para garantizar una participación activa y un aprendizaje óptimo.",
        faq_q2: "¿Los participantes cocinan sus propias comidas?",
        faq_a2: "Las comidas principales (desayuno, almuerzo, cena) se sirven estilo buffet. Sin embargo, durante las clases prácticas de la mañana, cocinará activamente y probará sus propias creaciones culinarias.",
        faq_q3: "¿Es este programa una certificación profesional?",
        faq_a3: "Este programa es una introducción intensiva y de nivel académico (impartido por profesores de nivel Licenciatura/Maestría de la CAA), ideal para futuros estudiantes. Se otorga un certificado de asistencia al final.",
        cta_title: "¿Listo para Lanzar tu Carrera?",
        cta_sub: "Reserve su inmersión culinaria en el campus de la Culinary Arts Academy.",
        cta_button: "Solicitar Folleto",
        contact_title: "Contáctenos para tarifas y el folleto completo:",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Miembro del Swiss Education Group.",
    },
};

const SwissCulinary: React.FC = () => {
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const slides = [
        "Images/Image_SEA/SEA_culinary_3.png",
        "Images/Image_SEA/Sea_Culinary_2.png",
        "Images/Image_SEA/sea_5.png",
        "Images/Image_SEA/sea_culinary_1.png"
    ];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="font-sans antialiased text-b-text leading-relaxed bg-[#F8F9FA]">
            {/* Navbar Modern (Glassmorphism) */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {/* LOGO */}
                        <img src="/Images/Image_SEA/logo_SEA.png" alt="SEA Culinary"
                            className="w-12 h-12 rounded-full shadow-sm border border-gray-100" />
                        <span className="text-xl font-bold tracking-tight text-sea-main hidden sm:block">CULINARY EXCELLENCE</span>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Desktop Nav */}


                        {/* Language & CTA */}
                        <div className="flex items-center gap-4">
                            <select
                                id="language-switcher"
                                value={lang}
                                onChange={handleLanguageChange}
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-sea-main focus:border-sea-main block p-2 cursor-pointer outline-none"
                            >
                                <option value="fr">FR</option>
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                            </select>
                            {/* CTA NAV - Découvrir */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="hidden sm:inline-block px-6 py-2.5 bg-sea-accent text-white text-sm font-semibold rounded-full shadow-md hover:bg-sky-500 transition transform hover:-translate-y-0.5"
                            >
                                {t.nav_cta}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
                {/* Background Carousel */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={`/${slide}`}
                            alt={`Slide ${index + 1}`}
                            className={`carousel-img w-full h-full object-cover absolute transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-br from-[#001A33]/40 to-[#003366]/70"></div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto space-y-8 animate-[fadeInUp_0.8s_ease-out]">
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase text-sea-highlight mb-2">
                            {t.header_tagline}
                        </span>

                        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-xl">
                            {t.header_title}
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                            <span>{t.header_age_prefix}</span>
                            <span className="font-bold text-white ml-2">16 - 20 ans</span>.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            {/* CTA Principal */}
                            <a href="mailto:benjamin.egretaud@sherpaliving.mx"
                                className="px-8 py-4 bg-sea-accent text-white font-bold rounded-full shadow-lg hover:bg-sky-500 transition transform hover:-translate-y-1">
                                {t.cta_principal}
                            </a>
                            {/* CTA Secondaire */}
                            <a href="#tarifs"
                                className="px-8 py-4 bg-white text-sea-main font-bold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                                {t.cta_prices}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                        </path>
                    </svg>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.desc_title}</h2>
                    <div className="text-lg text-gray-600 leading-relaxed space-y-6 max-w-4xl mx-auto">
                        <p>{t.desc_p1}</p>
                        <p>{t.desc_p2}</p>
                        <p>{t.desc_p3}</p>
                    </div>
                </div>
            </section>

            {/* Content Section: Programs */}
            <section id="programmes" className="py-24 bg-sea-light">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sea-main">
                        {lang === 'fr' ? 'Cours Quotidiens & Activités' : (lang === 'en' ? 'Daily Classes & Activities' : 'Clases Diarias y Actividades')}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Cooking Classes Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] hover:-translate-y-1 transition duration-300 border-t-4 border-sea-highlight">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="p-3 bg-yellow-50 text-sea-highlight rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </span>
                                <h4 className="text-2xl font-bold text-gray-900">{t.morn_title}</h4>
                            </div>

                            <p className="text-gray-600 mb-6 font-medium">{t.morn_desc}</p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="bg-gray-50 p-3 rounded-lg"><strong className="text-sea-main block mb-1">Thèmes :</strong>
                                    World Cuisine, European Cuisine, Pâtisserie & Chocolat.</li>
                                <li className="bg-gray-50 p-3 rounded-lg"><strong className="text-sea-main block mb-1">Compétences :</strong>
                                    Techniques, Hygiène, Dégustation.</li>
                                <li className="flex items-center gap-3"><span
                                    className="w-1.5 h-1.5 bg-sea-main rounded-full"></span><span>{t.morn_l3}</span></li>
                            </ul>
                        </div>

                        {/* Activities Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] hover:-translate-y-1 transition duration-300 border-t-4 border-sea-accent">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="p-3 bg-sky-50 text-sea-accent rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <h4 className="text-2xl font-bold text-gray-900">{t.aft_title}</h4>
                            </div>

                            <p className="text-gray-600 mb-6 font-medium">{t.aft_desc}</p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="p-3 bg-gray-50 rounded-lg">
                                    <strong className="block text-sea-accent mb-1">Mercredi Excursion :</strong>
                                    <span>{t.aft_l1}</span>
                                </li>
                                <li className="p-3 bg-gray-50 rounded-lg">
                                    <strong className="block text-sea-dark mb-1">Soirées :</strong>
                                    <span>{t.aft_l2}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Facilities Banner */}
                    <div className="mt-10 bg-sea-dark rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-white/5"></div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-2 text-sea-highlight">{t.facility_title}</h4>
                            <p className="text-white/80 max-w-3xl mx-auto">
                                {t.facility_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCATION / CAMPUS */}
            <section id="campus" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-3xl font-bold text-sea-main mb-6">{t.loc_title}</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-sea-main">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{t.loc_sub_bouveret}</h4>
                                        <p className="text-gray-600 mt-1">{t.loc_p1}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-sea-main">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{t.acc_sub_room}</h4>
                                        <p className="text-gray-600 mt-1">{t.acc_p1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div
                                className="rounded-2xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition duration-500">
                                <img src="/Images/Image_SEA/Sea_Culinary_2.png" alt="Bouveret Campus" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="tarifs" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h3 className="text-3xl font-bold text-center mb-6 text-sea-main">{t.incl_title}</h3>
                    <p className="text-center text-gray-500 mb-12">{t.incl_sub}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Base Pricing */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] hover:-translate-y-1 transition duration-300 border border-gray-100">
                            <h4 className="text-xl font-bold mb-6 text-sea-main uppercase tracking-wide border-b pb-4">{t.incl_h_title}</h4>
                            <div className="text-lg font-extrabold text-gray-900 mb-6">
                                <span>{t.price_1_week}</span> / <span>{t.price_2_weeks}</span>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex items-center gap-3">
                                    <span className="text-sea-highlight">⭐</span>
                                    <span>{t.incl_l3}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-sea-highlight">⭐</span>
                                    <span>{t.incl_l5}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-sea-highlight">⭐</span>
                                    <span>{t.incl_l6}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-sea-highlight">⭐</span>
                                    <span>{t.incl_l7}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Upgrades */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] hover:-translate-y-1 transition duration-300 border border-gray-100">
                            <h4 className="text-xl font-bold mb-6 text-sea-accent uppercase tracking-wide border-b pb-4">{t.excl_h_title}</h4>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l3}</span> <span
                                    className="font-bold text-sea-dark">+ CHF 200 / sem</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l1}</span> <span
                                    className="font-bold text-sea-dark">CHF 180</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l2}</span> <span
                                    className="font-bold text-sea-dark">CHF 50 / sem</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">{t.faq_title}</h3>
                    <div className="space-y-4">
                        {/* FAQ 1 */}
                        <details className="group bg-gray-50 p-4 rounded-xl cursor-pointer hover:shadow-md transition">
                            <summary className="font-bold text-sea-main list-none flex justify-between items-center">
                                {t.faq_q1}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                {t.faq_a1}
                            </p>
                        </details>
                        {/* FAQ 2 */}
                        <details className="group bg-gray-50 p-4 rounded-xl cursor-pointer hover:shadow-md transition">
                            <summary className="font-bold text-sea-main list-none flex justify-between items-center">
                                {t.faq_q2}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                {t.faq_a2}
                            </p>
                        </details>
                        {/* FAQ 3 */}
                        <details className="group bg-gray-50 p-4 rounded-xl cursor-pointer hover:shadow-md transition">
                            <summary className="font-bold text-sea-main list-none flex justify-between items-center">
                                {t.faq_q3}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                {t.faq_a3}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            {/* Contact Form Removed from Footer - Now in Modal */}
            <div className="py-12 bg-gray-900 text-white text-center text-sm text-gray-400">
                <p>{t.footer_text_1} {t.footer_text_2}</p>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-1">
                    <ProgramForm programName="Swiss Culinary Club" lang={lang} />
                </div>
            </Modal>
        </div>
    );
};

export default SwissCulinary;

