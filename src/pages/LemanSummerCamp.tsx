import React, { useState, useEffect } from 'react';

// --- TRANSLATIONS ---
const translations = {
    fr: {
        nav_cta: "Contacter pour réserver",
        header_tagline: "Camp d'Été International à Genève",
        header_title: "Collège du Léman",
        header_title_sub: "Un Été Suisse Inoubliable",
        header_age_prefix: "Excellence, aventure et amitiés internationales pour les",
        cta_contact: "Contacter pour réserver",
        cta_prices: "Voir les Tarifs",
        carousel_cta: "Découvrir le Programme",
        desc_title: "L'Été de la Découverte",
        desc_p1: "Situé sur les rives magnifiques du Lac Léman à Genève, le Camp d'Été du Collège du Léman offre un environnement sécurisé et stimulant.",
        desc_p2: "Anglais, Français, STEM, Robotique... Des programmes académiques d'excellence adaptés à chaque niveau.",
        desc_p3: "Sports nautiques sur le Lac Léman, excursions en montagne et plus de 17 activités l'après-midi.",
        desc_p4: "Une communauté mondiale pour se faire des amis pour la vie et développer son ouverture d'esprit.",
        details_title: "Structure du Programme",
        structure_title: "La Semaine Type",
        structure_l1: "10 options : Langues, STEM, Robotique, Cuisine...",
        structure_l2: "17 Activités : Sports, Voile, Arts, Tech...",
        structure_l3: "Golf, Équitation, Tennis (Supplément requis).",
        pricing_title: "Dates & Tarifs 2026",
        table_dates: "Dates (2 Semaines)",
        table_boarding: "Pensionnat",
        table_daycamp: "Externe",
        pricing_footer: "* Prix tout inclus pour le pensionnat. Activités sujettes à modification.",
        cta_title: "Réservez l'Excellence",
        cta_sub: "Les places partent vite. Assurez un été inoubliable à vos enfants.",
        footer_text_1: "© 2026 Collège du Léman.",
        footer_text_2: "Partenaire Sherpa Living.",
        email_label: "Email",
        location_label: "Lieu",
        location_value: "Route de Sauverny 74, Versoix, Genève"
    },
    en: {
        nav_cta: "Contact to Book",
        header_tagline: "International Summer Camp in Geneva",
        header_title: "Collège du Léman",
        header_title_sub: "An Unforgettable Swiss Summer",
        header_age_prefix: "Excellence, adventure and international friendships for",
        cta_contact: "Contact to Book",
        cta_prices: "View Prices",
        carousel_cta: "Discover the Program",
        desc_title: "The Summer of Discovery",
        desc_p1: "Located on the magnificent shores of Lake Geneva, Collège du Léman Summer Camp offers a secure and stimulating environment.",
        desc_p2: "English, French, STEM, Robotics... Academic excellence programs tailored to every level.",
        desc_p3: "Water sports on Lake Geneva, mountain excursions and over 17 activities in the afternoon.",
        desc_p4: "A global community to make friends for life and broaden your horizons.",
        details_title: "Program Structure",
        structure_title: "Typical Week",
        structure_l1: "10 options: Languages, STEM, Robotics, Cooking...",
        structure_l2: "17 Activities: Sports, Sailing, Arts, Tech...",
        structure_l3: "Golf, Horse Riding, Tennis (Supplement required).",
        pricing_title: "Dates and Prices 2026",
        table_dates: "Dates (2 Weeks)",
        table_boarding: "Boarding",
        table_daycamp: "Day Camp",
        pricing_footer: "* All-inclusive price for boarding. Activities subject to change.",
        cta_title: "Book Excellence",
        cta_sub: "Spots fill up fast. Ensure an unforgettable summer for your children.",
        footer_text_1: "© 2026 Collège du Léman.",
        footer_text_2: "Sherpa Living Partner.",
        email_label: "Email",
        location_label: "Location",
        location_value: "Route de Sauverny 74, Versoix, Geneva"
    },
    es: {
        nav_cta: "Contactar para Reservar",
        header_tagline: "Campamento de Verano Internacional en Ginebra",
        header_title: "Collège du Léman",
        header_title_sub: "Un Verano Suizo Inolvidable",
        header_age_prefix: "Excelencia, aventura y amistades internacionales para",
        cta_contact: "Contactar para Reservar",
        cta_prices: "Ver Precios",
        carousel_cta: "Descubrir el Programa",
        desc_title: "El Verano del Descubrimiento",
        desc_p1: "Situado en las magníficas orillas del Lago Lemán en Ginebra, el Campamento de Verano del Collège du Léman ofrece un entorno seguro y estimulante.",
        desc_p2: "Inglés, Francés, STEM, Robótica... Programas académicos de excelencia adaptados a cada nivel.",
        desc_p3: "Deportes acuáticos en el Lago Lemán, excursiones a la montaña y más de 17 actividades por la tarde.",
        desc_p4: "Una comunidad global para hacer amigos para toda la vida y ampliar horizontes.",
        details_title: "Estructura del Programa",
        structure_title: "Semana Típica",
        structure_l1: "10 opciones: Idiomas, STEM, Robótica, Cocina...",
        structure_l2: "17 Actividades: Deportes, Vela, Artes, Tech...",
        structure_l3: "Golf, Equitación, Tenis (Suplemento requerido).",
        pricing_title: "Fechas y Precios 2026",
        table_dates: "Fechas (2 Semanas)",
        table_boarding: "Internado",
        table_daycamp: "Externo",
        pricing_footer: "* Precio todo incluido para internado. Actividades sujetas a cambios.",
        cta_title: "Reserve la Excelencia",
        cta_sub: "Las plazas se agotan rápido. Asegure un verano inolvidable para sus hijos.",
        footer_text_1: "© 2026 Collège du Léman.",
        footer_text_2: "Socio Sherpa Living.",
        email_label: "Email",
        location_label: "Ubicación",
        location_value: "Route de Sauverny 74, Versoix, Ginebra"
    }
};

const LemanSummerCamp: React.FC = () => {
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "Images/Image_Leman/campus_leman_1.jpg",
        "Images/Image_Leman/lac_leman_1.webp",
        "Images/Image_Leman/lac_leman_4.png",
        "Images/Image_Leman/Lac_Leman_5.png"
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
        <div className="font-sans antialiased text-b-text leading-relaxed bg-[#F6F8FB]">
            {/* Navbar Modern (Glassmorphism) */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {/* LOGO */}
                        <img src="/Images/Image_Leman/logo_college_leman.png" alt="Collège du Léman"
                            className="w-12 h-12 rounded-full shadow-sm border border-gray-100" />
                        <span className="text-xl font-bold tracking-tight text-cdl-blue hidden sm:block">COLLÈGE DU LÉMAN</span>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Desktop Nav */}


                        {/* Language & CTA */}
                        <div className="flex items-center gap-4">
                            <select
                                id="language-switcher"
                                value={lang}
                                onChange={handleLanguageChange}
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-cdl-blue focus:border-cdl-blue block p-2 cursor-pointer outline-none"
                            >
                                <option value="fr">FR</option>
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                            </select>
                            <a href="#contact"
                                className="hidden sm:inline-block px-6 py-2.5 bg-cdl-red text-white text-sm font-semibold rounded-full shadow-md hover:bg-red-700 transition transform hover:-translate-y-0.5">
                                {t.nav_cta}
                            </a>
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
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-br from-[#004C99]/40 to-[#003366]/60"></div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto space-y-8 animate-[fadeInUp_0.8s_ease-out]">
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase text-cdl-accent mb-2">
                            {t.header_tagline}
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-xl">
                            {t.header_title} <br /> <span className="text-white">{t.header_title_sub}</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                            <span>{t.header_age_prefix}</span>
                            <span className="font-bold text-white ml-2">8 - 18 ans</span>.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:benjamin.egretaud@sherpaliving.mx"
                                className="px-8 py-4 bg-cdl-red text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">
                                {t.cta_contact}
                            </a>
                            <a href="#tarifs"
                                className="px-8 py-4 bg-white text-cdl-blue font-bold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
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

            {/* Value Proposition - Mapped to Campus as it describes environment */}
            <section id="campus" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.desc_title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t.desc_p1}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-cdl-light border border-blue-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-cdl-blue">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Apprentissage Premium</h3>
                            <p className="text-gray-600">{t.desc_p2}</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-cdl-light border border-blue-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-cdl-red">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                    </path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Aventure & Fun</h3>
                            <p className="text-gray-600">{t.desc_p3}</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-cdl-light border border-blue-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                            <div
                                className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">International</h3>
                            <p className="text-gray-600">{t.desc_p4}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Program Section - Mapped to Programmes */}
            <section id="programmes" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                        {t.details_title}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Programme Structure */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-lg transition">
                            <h4 className="text-2xl font-bold mb-6 text-cdl-blue flex items-center gap-2">
                                <span className="p-2 bg-blue-50 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg></span>
                                {t.structure_title}
                            </h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span
                                        className="flex-shrink-0 w-8 h-8 bg-blue-100 text-cdl-blue rounded-full flex items-center justify-center font-bold text-sm">AM</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">9h00 - 12h30 : Focus Apprentissage</h5>
                                        <p className="text-sm text-gray-600 mt-1">{t.structure_l1}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span
                                        className="flex-shrink-0 w-8 h-8 bg-red-100 text-cdl-red rounded-full flex items-center justify-center font-bold text-sm">PM</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">13h30 - 17h00 : Focus Aventure</h5>
                                        <p className="text-sm text-gray-600 mt-1">{t.structure_l2}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span
                                        className="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold text-sm">★</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Options Premium</h5>
                                        <p className="text-sm text-gray-600 mt-1">{t.structure_l3}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Session Dates & Pricing */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-lg transition" id="tarifs">
                            <h4 className="text-2xl font-bold mb-6 text-cdl-red flex items-center gap-2">
                                <span className="p-2 bg-red-50 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg></span>
                                {t.pricing_title}
                            </h4>
                            <div className="overflow-hidden rounded-xl border border-gray-100">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3">{t.table_dates}</th>
                                            <th className="px-4 py-3 text-right">{t.table_boarding}</th>
                                            <th className="px-4 py-3 text-right">{t.table_daycamp}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">28 juin - 11 juillet</td>
                                            <td className="px-4 py-4 text-right font-bold text-cdl-blue">CHF 6,830</td>
                                            <td className="px-4 py-4 text-right text-gray-600">CHF 3,360</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">12 juillet - 25 juillet</td>
                                            <td className="px-4 py-4 text-right font-bold text-cdl-blue">CHF 6,830</td>
                                            <td className="px-4 py-4 text-right text-gray-600">CHF 3,360</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">26 juillet - 8 août</td>
                                            <td className="px-4 py-4 text-right font-bold text-cdl-blue">CHF 6,830</td>
                                            <td className="px-4 py-4 text-right text-gray-600">CHF 3,360</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-xs text-gray-500 italic text-center">
                                {t.pricing_footer}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact (Dark Style) with Form */}
            <section id="contact" className="py-24 bg-gray-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.cta_title}</h2>
                        <p className="text-xl text-gray-400 font-light">{t.cta_sub}</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-1">
                        <ProgramForm programName="Leman Summer Camp" lang={lang} />
                    </div>

                    <div className="mt-16 text-center text-sm text-gray-500">
                        <p>{t.footer_text_1} {t.footer_text_2}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LemanSummerCamp;
