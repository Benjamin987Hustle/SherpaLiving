import React, { useState, useEffect } from 'react';

import ProgramForm from '../components/ProgramForm';
import Modal from '../components/Modal';

const translations = {
    fr: {
        nav_cta: "Découvrir",
        header_tagline: "Excellence en Management Hôtelier & Business",
        header_title: "SBHC <br/> <span class=\"text-white\">Devenir le Leader de Demain</span>",
        header_age_prefix: "Pour futurs leaders de",
        cta_principal: "Contacter pour réserver",
        cta_prices: "Voir les Tarifs",
        carousel_cta: "Découvrir les Cours",
        desc_title: "Le Camp d'Été qui ouvre les Portes de l'Hôtellerie Mondiale",
        desc_p1: "Situé au cœur de Montreux, ce camp s'adresse aux étudiants ambitieux (16-20 ans) cherchant à explorer les domaines du Business, de l'Hôtellerie et du Luxe avant l'université.",
        desc_p2: "Les cours intensifs du matin sont dispensés par des professeurs de niveau Bachelor/Master du Swiss Education Group, offrant un aperçu réel des études d'excellence en Suisse.",
        desc_p4: "L'expérience parfaite pour renforcer le leadership, affiner les compétences en communication et obtenir un avantage décisif pour les futures carrières mondiales.",
        prog_title: "Cours Académiques & Activités",
        morn_title: "Cours du Matin",
        morn_desc: "Chaque semaine, choisissez un cours intensif d'une semaine (enseigné en Anglais, niveau B1 recommandé).",
        morn_l1: "Entrepreneurship & Leadership",
        morn_l2: "Swiss Hospitality Revealed",
        morn_l3: "Luxury Marketing",
        morn_l4: "Communication Studies",
        aft_title: "Programmes d'Après-midi",
        aft_desc: "Équilibrez l'apprentissage académique avec l'aventure et la découverte culturelle.",
        aft_l1: "Move & Chill (sports), Discover Switzerland (culture).",
        aft_l2: "Rafting, Canyoning, Via Ferrata, Paintball.",
        industry_title: "Visite Exclusive de l'Industrie",
        industry_desc: "Chaque cours académique comprend une visite d'une institution hôtelière de premier plan, offrant une perspective pratique unique sur l'excellence Suisse.",
        loc_title: "Montreux : Au Cœur de l'Excellence",
        loc_sub_montreux: "Campus HIM Business School",
        loc_p1: "Situé en plein centre de Montreux, à 5min du Lac Léman. Salles modernes, terrasse panoramique.",
        acc_sub_room: "Hébergement Premium",
        acc_p1: "Pension complète (Buffet). Chambres doubles standard incluses. Options Deluxe (Vue lac) disponibles.",
        incl_title: "Tarifs 2026",
        incl_sub: "Les cours académiques sont vendus par semaine (Tuition) et peuvent être combinés.",
        incl_h_title: "Tarif (Base)",
        price_1_week: "CHF 2350 (1 semaine)",
        price_2_weeks: "CHF 4600 (2 semaines)",
        incl_l3: "Hébergement Standard & Pension Complète",
        incl_l5: "Activités \"Move & Chill\" + Excursions",
        incl_l6: "Visites Industrie",
        incl_l7: "Frais d'inscription uniques (CHF 125)",
        excl_h_title: "Options & Suppléments",
        excl_l1: "Transfert Aéroport (Trajet)",
        excl_l2: "Assurance (obligatoire)",
        excl_l3: "Option Adrenaline Rush",
        excl_l4: "Chambre Deluxe (Vue Lac)",
        excl_l5: "Chambre Simple",
        faq_title: "Questions Fréquentes",
        faq_q1: "Quel niveau d'Anglais est requis pour suivre les cours ?",
        faq_a1: "Bien qu'aucune preuve officielle ne soit requise, tous les cours sont enseignés en Anglais. Un niveau suffisant (B1) est recommandé pour assurer une participation et un apprentissage optimaux.",
        faq_q2: "Comment sont structurés les cours intensifs du matin ?",
        faq_a2: "Les cours combinent théorie et mise en pratique intensive à travers des études de cas, des ateliers et des projets collaboratifs. La taille moyenne des classes est d'environ 20 étudiants pour maximiser l'interaction avec le professeur.",
        faq_q3: "Le programme permet-il d'obtenir une certification ?",
        faq_a3: "Oui. Une cérémonie de remise des certificats (mentionnant le programme intensif suivi) a lieu le vendredi soir. Ce document est un atout précieux pour le CV et les futures candidatures universitaires.",
        cta_title: "Prêt à Lancer Votre Carrière ?",
        cta_sub: "Assurez votre place pour cette expérience académique unique à Montreux.",
        cta_button: "S'inscrire et Contacter",
        contact_title: "Contactez-nous pour les tarifs et la brochure complète :",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Membre du Swiss Education Group.",
    },
    en: {
        nav_cta: "Discover",
        header_tagline: "Excellence in Hospitality Management & Business",
        header_title: "SBHC <br/> <span class=\"text-white\">Become the Leader of Tomorrow</span>",
        header_age_prefix: "For future leaders aged",
        cta_principal: "Contact to Book",
        cta_prices: "View Prices",
        carousel_cta: "Discover Courses",
        desc_title: "The Summer Camp Opening Doors to Global Hospitality",
        desc_p1: "Located in Montreux, targeting ambitious students (16-20) exploring Business, Hospitality, and Luxury before university.",
        desc_p2: "Intensive morning courses taught by Bachelor/Master-level professors from Swiss Education Group, offering a real insight into excellence studies in Switzerland.",
        desc_p4: "Perfect for strengthening leadership, refining communication skills, and gaining a decisive career edge for global careers.",
        prog_title: "Academic Courses & Activities",
        morn_title: "Morning Courses",
        morn_desc: "Choose a one-week intensive course (taught in English, B1 level recommended).",
        morn_l1: "Entrepreneurship & Leadership",
        morn_l2: "Swiss Hospitality Revealed",
        morn_l3: "Luxury Marketing",
        morn_l4: "Communication Studies",
        aft_title: "Afternoon Programs",
        aft_desc: "Balance academic learning with adventure and cultural discovery.",
        aft_l1: "Move & Chill (sports), Discover Switzerland (culture).",
        aft_l2: "Rafting, Canyoning, Via Ferrata, Paintball.",
        industry_title: "Exclusive Industry Visit",
        industry_desc: "Each academic course includes a visit to a leading hospitality institution, offering a unique practical perspective on Swiss excellence.",
        loc_title: "Montreux: Excellence Hub",
        loc_sub_montreux: "HIM Business School Campus",
        loc_p1: "Located in the heart of Montreux, 5min from Lake Geneva. Modern classrooms, panoramic terrace.",
        acc_sub_room: "Premium Accommodation",
        acc_p1: "Full Board (Buffet). Standard Double Rooms included. Deluxe (Lake View) options available.",
        incl_title: "2026 Prices",
        incl_sub: "Academic courses sold per week (Tuition) and can be combined.",
        incl_h_title: "Included (Base Rate)",
        price_1_week: "CHF 2350 (1 Week)",
        price_2_weeks: "CHF 4600 (2 Weeks)",
        incl_l3: "Standard Accommodation & Full Board",
        incl_l5: "\"Move & Chill\" Activities + Excursions",
        incl_l6: "Industry Visits",
        incl_l7: "One-time Enrollment Fee (CHF 125)",
        excl_h_title: "Options & Supplements",
        excl_l1: "Airport Transfer (One Way)",
        excl_l2: "Insurance (mandatory)",
        excl_l3: "Adrenaline Rush Option",
        excl_l4: "Deluxe Room (Lake View)",
        excl_l5: "Single Room",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What level of English is required to follow the courses?",
        faq_a1: "While no official proof is required, all courses are taught in English. A sufficient level (B1) is recommended to ensure optimal participation and learning.",
        faq_q2: "How are the intensive morning courses structured?",
        faq_a2: "Courses combine theory and intensive practice through case studies, workshops, and collaborative projects. Average class size is around 20 students to maximize interaction with the professor.",
        faq_q3: "Does the program include certification?",
        faq_a3: "Yes. A certificate presentation ceremony (mentioning the intensive program followed) takes place on Friday evening. This document is a valuable asset for your CV and future university applications.",
        cta_title: "Ready to Launch Your Career?",
        cta_sub: "Secure your spot for this unique academic experience in Montreux.",
        cta_button: "Request Brochure",
        contact_title: "Contact us for rates and the full brochure:",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Member of Swiss Education Group.",
    },
    es: {
        nav_cta: "Descubrir",
        header_tagline: "Excelencia en Gestión Hotelera y Negocios",
        header_title: "SBHC <br/> <span class=\"text-white\">Conviértete en Líder de Mañana</span>",
        header_age_prefix: "Para futuros líderes de",
        cta_principal: "Contactar para Reservar",
        cta_prices: "Ver Precios",
        carousel_cta: "Descubrir Cursos",
        desc_title: "El Campamento que Abre Puertas a la Hostelería Global",
        desc_p1: "Ubicado en el corazón de Montreux, este campamento se dirige a estudiantes ambiciosos (16-20 años) que buscan explorar los campos de Negocios, Hostelería y Lujo antes de la universidad.",
        desc_p2: "Los cursos intensivos de la mañana son impartidos por profesores de nivel Licenciatura/Maestría del Swiss Education Group, ofreciendo una visión real de los estudios de excelencia en Suiza.",
        desc_p4: "La experiencia perfecta para fortalecer el liderazgo, refinar las habilidades de comunicación y obtener una ventaja decisiva para futuras carreras globales.",
        prog_title: "Cursos Académicos y Actividades",
        morn_title: "Cursos de Mañana",
        morn_desc: "Cada semana, elija un curso intensivo de una semana (impartido en inglés, nivel B1 recomendado).",
        morn_l1: "Emprendimiento y Liderazgo",
        morn_l2: "Hostelería Suiza Revelada",
        morn_l3: "Marketing de Lujo",
        morn_l4: "Estudios de Comunicación",
        aft_title: "Programas de Tarde",
        aft_desc: "Equilibre el aprendizaje académico con la aventura y el descubrimiento cultural.",
        aft_l1: "Move & Chill (deportes), Discover Switzerland (cultura).",
        aft_l2: "Rafting, Barranquismo, Vía Ferrata, Paintball.",
        industry_title: "Visita Exclusiva a la Industria",
        industry_desc: "Cada curso académico incluye una visita a una institución de hostelería líder, ofreciendo una perspectiva práctica única sobre la excelencia suiza.",
        loc_title: "Montreux: Centro de Excelencia",
        loc_sub_montreux: "Campus HIM Business School",
        loc_p1: "Situado en el centro de Montreux, a 5min del Lago Lemán. Aulas modernas, terraza panorámica.",
        acc_sub_room: "Alojamiento Premium",
        acc_p1: "Pensión Completa (Buffet). Habitaciones dobles estándar incluidas. Opciones Deluxe (Vista al lago) disponibles.",
        incl_title: "Precios 2026",
        incl_sub: "Los cursos académicos se venden por semana (Matrícula) y se pueden combinar.",
        incl_h_title: "Incluido (Tarifa Base)",
        price_1_week: "CHF 2350 (1 semana)",
        price_2_weeks: "CHF 4600 (2 semanas)",
        incl_l3: "Alojamiento Estándar y Pensión Completa",
        incl_l5: "Actividades \"Move & Chill\" + Excursions",
        incl_l6: "Visitas a la Industria",
        incl_l7: "Tarifa de Inscripción única (CHF 125)",
        excl_h_title: "Opciones y Suplementos",
        excl_l1: "Traslado al Aeropuerto (Un trayecto)",
        excl_l2: "Seguro (obligatorio)",
        excl_l3: "Opción Adrenaline Rush",
        excl_l4: "Habitación Deluxe (Vista al Lago)",
        excl_l5: "Habitación Individual",
        faq_title: "Información Práctica",
        faq_q1: "¿Qué nivel de Inglés se requiere para seguir los cursos?",
        faq_a1: "Aunque no se requiere prueba oficial, todos los cursos se imparten en inglés. Se recomienda un nivel suficiente (B1) para asegurar una participación y un aprendizaje óptimos.",
        faq_q2: "¿Cómo se estructuran los cursos intensivos de la mañana?",
        faq_a2: "Los cursos combinan teoría y práctica intensiva a través de estudios de caso, talleres y proyectos colaborativos. El tamaño promedio de la clase es de alrededor de 20 estudiantes para maximizar la interacción con el profesor.",
        faq_q3: "¿El programa incluye certificación?",
        faq_a3: "Sí. Una ceremonia de entrega de certificados (mencionando el programa intensivo seguido) tiene lugar el viernes por la noche. Este documento es un activo valioso para su CV y futuras solicitudes universitarias.",
        cta_title: "¿Listo para Lanzar tu Carrera?",
        cta_sub: "Asegure su plaza para esta experiencia académica única en Montreux.",
        cta_button: "Solicitar Folleto",
        contact_title: "Contáctenos para tarifas y el folleto completo:",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Miembro del Swiss Education Group.",
    }
};

const SwissBusiness: React.FC = () => {
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const slides = [
        "Images/Image_SEA/sea_buisness_1.jpg",
        "Images/Image_SEA/sea_buisness_2.jpg",
        "Images/Image_SEA/sea_7.jpg",
        "Images/Image_SEA/sea_2.png"
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
        <div className="font-sans antialiased text-[#1F2937] leading-relaxed bg-[#F8F9FA]">
            {/* Navbar */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/Images/Image_SEA/logo_SEA.png" alt="SEA Business"
                            className="w-12 h-12 rounded-full shadow-sm border border-gray-100" />
                        <span className="text-xl font-bold tracking-tight text-sea-main hidden sm:block">BUSINESS & HOSPITALITY</span>
                    </div>

                    <div className="flex items-center gap-6">


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

                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-[#001A33]/40 to-[#003366]/70"></div>

                <div className="relative z-20 container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto space-y-8 animate-[fadeInUp_0.8s_ease-out]">
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase text-sea-accent mb-2">
                            {t.header_tagline}
                        </span>

                        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-xl" dangerouslySetInnerHTML={{ __html: t.header_title }}></h1>

                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                            <span>{t.header_age_prefix}</span>
                            <span className="font-bold text-white ml-2">16 - 20 ans</span>.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:benjamin.egretaud@sherpaliving.mx"
                                className="px-8 py-4 bg-sea-accent text-white font-bold rounded-full shadow-lg hover:bg-sky-500 transition transform hover:-translate-y-1">
                                {t.cta_principal}
                            </a>
                            <a href="#tarifs"
                                className="px-8 py-4 bg-white text-sea-main font-bold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                                {t.cta_prices}
                            </a>
                        </div>
                    </div>
                </div>

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
                        <p className="font-semibold text-sea-main">{t.desc_p4}</p>
                    </div>
                </div>
            </section>

            {/* Content Section: Programs */}
            <section id="programmes" className="py-24 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sea-main">{t.prog_title}</h3>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Academic Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-sea-main">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="p-3 bg-blue-50 text-sea-main rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </span>
                                <h4 className="text-2xl font-bold text-gray-900">{t.morn_title}</h4>
                            </div>

                            <p className="text-gray-600 mb-6 font-medium">{t.morn_desc}</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700"><span
                                    className="w-1.5 h-1.5 bg-sea-main rounded-full"></span><span>{t.morn_l1}</span></li>
                                <li className="flex items-center gap-3 text-gray-700"><span
                                    className="w-1.5 h-1.5 bg-sea-main rounded-full"></span><span>{t.morn_l2}</span></li>
                                <li className="flex items-center gap-3 text-gray-700"><span
                                    className="w-1.5 h-1.5 bg-sea-main rounded-full"></span><span>{t.morn_l3}</span></li>
                                <li className="flex items-center gap-3 text-gray-700"><span
                                    className="w-1.5 h-1.5 bg-sea-main rounded-full"></span><span>{t.morn_l4}</span></li>
                            </ul>
                        </div>

                        {/* Activities Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-sea-accent">
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
                                    <strong className="block text-sea-main mb-1">Inclus :</strong>
                                    <span>{t.aft_l1}</span>
                                </li>
                                <li className="p-3 bg-sky-50 rounded-lg border border-sky-100">
                                    <strong className="block text-sea-accent mb-1">Adrenaline Rush (+CHF 300) :</strong>
                                    <span>{t.aft_l2}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Industry Visit Banner */}
                    <div className="mt-10 bg-sea-main rounded-2xl p-8 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5"></div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-2 text-sea-highlight">{t.industry_title}</h4>
                            <p className="text-white/80 max-w-3xl mx-auto">
                                {t.industry_desc}
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
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-sea-main">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{t.loc_sub_montreux}</h4>
                                        <p className="text-gray-600 mt-1">{t.loc_p1}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-sea-main">
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
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                                <img src="/Images/Image_SEA/sea_7.jpg" alt="Montreux Campus" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="tarifs" className="py-24 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h3 className="text-3xl font-bold text-center mb-6 text-sea-main">{t.incl_title}</h3>
                    <p className="text-center text-gray-500 mb-12">{t.incl_sub}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Base Pricing */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition border border-gray-100">
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
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition border border-gray-100">
                            <h4 className="text-xl font-bold mb-6 text-sea-accent uppercase tracking-wide border-b pb-4">{t.excl_h_title}</h4>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l3}</span> <span className="font-bold text-sea-dark">+ CHF 300 / sem</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l4}</span> <span className="font-bold text-sea-dark">+ CHF 250 / sem</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l5}</span> <span className="font-bold text-sea-dark">+ CHF 200 / sem</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l1}</span> <span className="font-bold text-sea-dark">CHF 180</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l2}</span> <span className="font-bold text-sea-dark">CHF 50 / sem</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">{t.faq_title}</h3>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 p-4 rounded-xl cursor-pointer hover:shadow-md transition">
                            <summary className="font-bold text-sea-main list-none flex justify-between items-center">
                                {t.faq_q1}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{t.faq_a1}</p>
                        </details>
                        <details className="group bg-gray-50 p-4 rounded-xl cursor-pointer hover:shadow-md transition">
                            <summary className="font-bold text-sea-main list-none flex justify-between items-center">
                                {t.faq_q2}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{t.faq_a2}</p>
                        </details>
                        <details className="group bg-gray-50 p-4 rounded-xl cursor-pointer hover:shadow-md transition">
                            <summary className="font-bold text-sea-main list-none flex justify-between items-center">
                                {t.faq_q3}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{t.faq_a3}</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Footer / Contact (Dark Style) */}
            <section id="contact" className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.cta_title}</h2>
                        <p className="text-xl text-gray-400 font-light">{t.cta_sub}</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-8 px-8 py-4 bg-sea-main text-white font-bold rounded-full shadow-lg hover:bg-sea-highlight transition duration-300 transform hover:scale-105"
                        >
                            {t.cta_button}
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form Removed from Footer - Now in Modal */}
            <div className="py-12 bg-gray-900 text-white text-center text-sm text-gray-400">
                <p>{t.footer_text_1} {t.footer_text_2}</p>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-1">
                    <ProgramForm programName="Swiss Business and Hospitality Academy" lang={lang} />
                </div>
            </Modal>
        </div>
    );
};

export default SwissBusiness;
