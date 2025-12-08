import React, { useState, useEffect } from 'react';

const translations = {
    fr: {
        nav_cta: "Découvrir",
        header_tagline: "Immersion Linguistique & Aventure Alpine",
        header_title: "Swiss Language Camp<br/><span class=\"text-sea-accent\">Leysin 2026</span>",
        header_age_prefix: "Un été inoubliable pour les",
        cta_principal: "Contacter pour réserver",
        cta_prices: "Voir les Tarifs",
        carousel_cta: "Découvrir les Programmes",
        desc_title: "Grandir, Découvrir et S'Amuser dans les Alpes",
        desc_p1: "Situé dans le charmant village alpin de Leysin, le Swiss Language Camp (SLC) offre un environnement sûr et stimulant pour les jeunes de 10 à 16 ans, avec des étudiants de plus de 75 nationalités.",
        desc_h_morn: "Matin : Immersion",
        desc_p2: "Apprentissage immersif d'une langue ou du nouveau cours Digital, dispensé par des enseignants qualifiés.",
        desc_h_aft: "Après-midi : Aventure",
        desc_p3: "Choix parmi 7 programmes : Aquaventure, Extreme, Arts créatifs, etc.",
        prog_title: "Une Semaine Type : Cours & Aventures",
        morn_title: "Cours de Langues",
        morn_desc: "20 leçons/sem (lun-ven) avec projets collaboratifs.",
        morn_h_inc: "Langues :",
        morn_l1: "Anglais, Français, Allemand.",
        morn_h_prem: "Option Premium :",
        morn_prem_val: "Digital - AI & Coding (+ CHF 300).",
        aft_title: "7 Programmes d'Aventure",
        aft_desc: "Choisissez votre thème pour la semaine.",
        aft_h_inc: "Inclus :",
        aft_l1: "Aquaventure, Fit & Fast, Discover Switzerland.",
        aft_h_prem: "Suppléments :",
        aft_l2: "Culinary, Arts (+CHF 100/200).",
        aft_h_xtreme: "Adrénaline :",
        extreme_title: "Focus : Programme Extreme",
        extreme_desc: "Pour les amateurs de sensations fortes (Min. 13 ans) : Spéléologie, balançoire géante, VTT, rafting. Encadrement pro garanti.",
        loc_title: "SHMS Leysin : Mont-Blanc Palace",
        loc_sub_leysin: "Campus Historique",
        loc_p1: "Ancien hôtel de luxe transformé en école. Sûr, vues magnifiques, Club Maxx sur place.",
        acc_sub_room: "Hébergement & Pension",
        acc_p1: "Chambres doubles standard (inclus). Salle de bain privée. Pension complète buffet.",
        incl_title: "Tarifs & Sessions 2026",
        incl_sub: "Sessions de 7 semaines disponibles (28 juin - 15 août).",
        incl_h_title: "Inclus (Base)",
        price_1_week: "CHF 1700 (1 semaine)",
        price_2_weeks: "CHF 3300 (2 semaines)",
        incl_l3: "Hébergement Standard & Pension Complète",
        incl_l5: "Activités : Aquaventure, Fit & Fast, Discover",
        incl_l6: "Cours de langues (Anglais, Français ou Allemand)",
        incl_l4: "Frais inscription : CHF 125",
        excl_h_title: "Options & Suppléments",
        excl_l1: "Transfert Genève (Trajet)",
        excl_l2: "Assurance (semaine)",
        excl_l3: "Option Digital / Coding",
        excl_l4: "Extreme Program",
        faq_title: "Questions Fréquentes",
        faq_q1: "Quel est le niveau de supervision sur le campus ?",
        faq_a1: "L'environnement est conçu pour être sûr, inclusif et amusant. Les étudiants reçoivent la supervision et le soutien de professionnels qualifiés. Tous les membres du personnel sont vérifiés.",
        faq_q2: "La souscription à une assurance est-elle obligatoire ?",
        faq_a2: "Oui. Il est obligatoire pour tous les étudiants d'avoir une assurance maladie et accident valide en Suisse. Nous proposons une assurance pour les participants non-UE (+CHF 50/semaine).",
        faq_q3: "Comment les repas sont-ils organisés ?",
        faq_a3: "Les repas sont servis sous forme de buffet (petit-déjeuner, déjeuner, dîner) du lundi au vendredi. Le week-end, un brunch est servi. Nos chefs peuvent répondre à toutes les exigences et allergies alimentaires.",
        cta_title: "Prêt pour l'Aventure Alpine ?",
        cta_sub: "Réservez pour une immersion linguistique à Leysin.",
        cta_button: "S'inscrire et Contacter",
        contact_title: "Contactez-nous pour les tarifs et la brochure complète :",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Membre du Swiss Education Group.",
    },
    en: {
        nav_cta: "Discover",
        header_tagline: "Language Immersion & Alpine Adventure",
        header_title: "Swiss Language Camp<br/><span class=\"text-sea-accent\">Leysin 2026</span>",
        header_age_prefix: "An unforgettable summer for",
        cta_principal: "Contact to Book",
        cta_prices: "View Prices",
        carousel_cta: "Discover Programs",
        desc_title: "Grow, Discover, and Have Fun in the Alps",
        desc_p1: "Located in the charming alpine village of Leysin, Swiss Language Camp (SLC) offers a safe, stimulating environment for 10-16 year olds from 75+ nations.",
        desc_h_morn: "Morning: Immersion",
        desc_p2: "Immersive language learning or new Digital course, taught by qualified teachers.",
        desc_h_aft: "Afternoon: Adventure",
        desc_p3: "Choose from 7 programs: Aquaventure, Extreme, Creative Arts, etc.",
        prog_title: "Typical Week: Courses & Adventures",
        morn_title: "Language Courses",
        morn_desc: "20 lessons/week (Mon-Fri) with collaboration projects.",
        morn_h_inc: "Languages:",
        morn_l1: "English, French, or German.",
        morn_h_prem: "Premium Option:",
        morn_prem_val: "Digital - AI & Coding (+ CHF 300).",
        aft_title: "7 Adventure Programs",
        aft_desc: "Choose your theme for the week.",
        aft_h_inc: "Included:",
        aft_l1: "Aquaventure, Fit & Fast, Discover Switzerland.",
        aft_h_prem: "Supplements:",
        aft_l2: "Culinary, Arts (+CHF 100/200).",
        aft_h_xtreme: "Adrenaline:",
        extreme_title: "Focus: Extreme Program",
        extreme_desc: "For thrill seekers (Min. 13y): Caving, giant swing, MTB, rafting. Pro supervision guaranteed.",
        loc_title: "SHMS Leysin: Mont-Blanc Palace",
        loc_sub_leysin: "Historic Campus",
        loc_p1: "Former luxury hotel turned school. Safe, magnificent views, Club Maxx onsite.",
        acc_sub_room: "Accommodation & Board",
        acc_p1: "Standard double rooms (included). Private bath. Full board buffet.",
        incl_title: "2026 Prices & Sessions",
        incl_sub: "7-week sessions available (June 28 - Aug 15).",
        incl_h_title: "Included (Base)",
        price_1_week: "CHF 1700 (1 Week)",
        price_2_weeks: "CHF 3300 (2 Weeks)",
        incl_l3: "Standard Accommodation & Full Board",
        incl_l5: "Activities: Aquaventure, Fit & Fast, Discover",
        incl_l6: "Language courses (English, French, or German)",
        incl_l4: "Enrollment Fee: CHF 125",
        excl_h_title: "Options & Supplements",
        excl_l1: "Geneva Transfer (One way)",
        excl_l2: "Insurance (week)",
        excl_l3: "Digital / Coding Option",
        excl_l4: "Extreme Program",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is the level of supervision on campus?",
        faq_a1: "The environment is designed to be safe, inclusive, and fun. Students receive supervision and support from qualified professionals. All staff members are vetted.",
        faq_q2: "Is subscribing to insurance mandatory?",
        faq_a2: "Yes. It is mandatory for all students to have valid health and accident insurance in Switzerland. We offer insurance for non-EU participants (+CHF 50/week).",
        faq_q3: "How are meals organized?",
        faq_a3: "Meals are served buffet-style (breakfast, lunch, dinner) from Monday to Friday. Brunch is served on weekends. Our chefs can cater to all dietary requirements and allergies.",
        cta_title: "Ready for Alpine Adventure?",
        cta_sub: "Book your language immersion in Leysin.",
        cta_button: "Request Brochure",
        contact_title: "Contact us for rates and the full brochure:",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Member of Swiss Education Group.",
    },
    es: {
        nav_cta: "Descubrir",
        header_tagline: "Inmersión Lingüística y Aventura Alpina",
        header_title: "Swiss Language Camp<br/><span class=\"text-sea-accent\">Leysin 2026</span>",
        header_age_prefix: "Verano inolvidable para",
        cta_principal: "Contactar para Reservar",
        cta_prices: "Ver Precios",
        carousel_cta: "Descubrir Programas",
        desc_title: "Crecer, Descubrir y Divertirse en los Alpes",
        desc_p1: "Ubicado en el encantador pueblo de Leysin, Swiss Language Camp (SLC) ofrece un entorno seguro para jóvenes de 10-16 años de +75 naciones.",
        desc_h_morn: "Mañana: Inmersión",
        desc_p2: "Aprendizaje inmersivo de idiomas o nuevo curso Digital con profes cualificados.",
        desc_h_aft: "Tarde: Aventura",
        desc_p3: "Elige entre 7 programas: Aquaventure, Extreme, Artes creativas, etc.",
        prog_title: "Semana Típica: Cursos y Aventuras",
        morn_title: "Cursos de Idiomas",
        morn_desc: "20 lecciones/sem (lun-vie) con proyectos colaborativos.",
        morn_h_inc: "Incluido:",
        morn_l1: "Inglés, Francés, o Alemán.",
        morn_h_prem: "Opción Premium:",
        morn_prem_val: "Digital - AI & Coding (+ CHF 300).",
        aft_title: "7 Programas de Aventura",
        aft_desc: "Elige tu tema para la semana.",
        aft_h_inc: "Incluido:",
        aft_l1: "Aquaventure, Fit & Fast, Discover Switzerland.",
        aft_h_prem: "Suplementos:",
        aft_l2: "Culinario, Artes (+CHF 100/200).",
        aft_h_xtreme: "Adrenalina:",
        extreme_title: "Foco: Programa Extreme",
        extreme_desc: "Para amantes de emociones (Mín. 13 años): Espeleología, columpio gigante, MTB, rafting. Encadrement pro garantizado.",
        loc_title: "SHMS Leysin: Mont-Blanc Palace",
        loc_sub_leysin: "Campus Histórico",
        loc_p1: "Antiguo hotel de lujo. Seguro, vistas magníficas, Club Maxx.",
        acc_sub_room: "Alojamiento y Pensión",
        acc_p1: "Habitaciones dobles estándar (incluido). Baño privado. Pensión completa buffet.",
        incl_title: "Precios y Sesiones 2026",
        incl_sub: "Sesiones de 7 semanas (28 jun - 15 ago).",
        incl_h_title: "Incluido (Base)",
        price_1_week: "CHF 1700 (1 semana)",
        price_2_weeks: "CHF 3300 (2 semanas)",
        incl_l3: "Alojamiento Estándar & PC",
        incl_l5: "Actividades: Aquaventure, Fit & Fast, Discover",
        incl_l6: "Cursos de idiomas (Inglés, Francés o Alemán)",
        incl_l4: "Inscripción: CHF 125",
        excl_h_title: "Opciones y Suplementos",
        excl_l1: "Traslado Ginebra (Trayecto)",
        excl_l2: "Seguro (semana)",
        excl_l3: "Opción Digital / Coding",
        excl_l4: "Programa Extreme",
        faq_title: "Preguntas Frecuentes",
        faq_q1: "¿Cuál es el nivel de supervisión en el campus?",
        faq_a1: "El entorno está diseñado para ser seguro, inclusivo y divertido. Los estudiantes reciben supervisión y apoyo de profesionales cualificados. Todo el personal es examinado.",
        faq_q2: "¿El seguro es obligatorio?",
        faq_a2: "Sí. Es obligatorio que todos los estudiantes tengan un seguro de salud y accidentes válido en Suiza. Ofrecemos seguro para participantes no pertenecientes a la UE (+CHF 50/semana).",
        faq_q3: "¿Cómo se organizan las comidas?",
        faq_a3: "Las comidas se sirven estilo buffet (desayuno, almuerzo, cena) de lunes a viernes. El brunch se sirve los fines de semana. Nuestros chefs pueden satisfacer todos los requisitos dietéticos y alergias.",
        cta_title: "¿Listo para la Aventura?",
        cta_sub: "Reserve para una inmersión lingüística en Leysin.",
        cta_button: "Solicitar Folleto",
        contact_title: "Contáctenos para tarifas y el folleto completo:",
        footer_text_1: "© 2026 Swiss Education Academy (SEA).",
        footer_text_2: "Miembro del Swiss Education Group.",
    }
};

const SwissLanguage: React.FC = () => {
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "Images/Image_SEA/sea_2.png",
        "Images/Image_SEA/sea_3.png",
        "Images/Image_SEA/sea_5.png",
        "Images/Image_SEA/sea_8.jpg"
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
                        <img src="/Images/Image_SEA/logo_SEA.png" alt="SEA Language"
                            className="w-12 h-12 rounded-full shadow-sm border border-gray-100" />
                        <span className="text-xl font-bold tracking-tight text-sea-main hidden sm:block">SWISS LANGUAGE CAMP</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                            <a href="#programmes" className="hover:text-sea-main transition">Programmes</a>
                            <a href="#location" className="hover:text-sea-main transition">Campus</a>
                            <a href="#tarifs" className="hover:text-sea-main transition">Tarifs</a>
                            <a href="#contact" className="hover:text-sea-main transition">Contact</a>
                        </nav>

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
                            <a href="#programmes"
                                className="hidden sm:inline-block px-6 py-2.5 bg-sea-accent text-white text-sm font-semibold rounded-full shadow-md hover:bg-sky-500 transition transform hover:-translate-y-0.5">
                                {t.nav_cta}
                            </a>
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
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase text-sea-highlight mb-2">
                            {t.header_tagline}
                        </span>

                        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-xl" dangerouslySetInnerHTML={{ __html: t.header_title }}></h1>

                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                            <span>{t.header_age_prefix}</span>
                            <span className="font-bold text-white ml-2">10 - 16 ans</span>.
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

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.desc_title}</h2>
                    <div className="text-lg text-gray-600 leading-relaxed space-y-6 max-w-4xl mx-auto">
                        <p>{t.desc_p1}</p>
                        <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
                            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-gray-100">
                                <strong className="text-sea-main block text-lg mb-2">{t.desc_h_morn}</strong>
                                <p className="text-sm">{t.desc_p2}</p>
                            </div>
                            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-gray-100">
                                <strong className="text-sea-accent block text-lg mb-2">{t.desc_h_aft}</strong>
                                <p className="text-sm">{t.desc_p3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section: Programs */}
            <section id="programmes" className="py-24 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sea-main">{t.prog_title}</h3>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Academic Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-sea-highlight">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="p-3 bg-yellow-50 text-sea-highlight rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </span>
                                <h4 className="text-2xl font-bold text-gray-900">{t.morn_title}</h4>
                            </div>
                            <p className="text-gray-600 mb-6 font-medium">{t.morn_desc}</p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="bg-gray-50 p-3 rounded-lg"><strong className="text-sea-main block mb-1">{t.morn_h_inc}</strong> {t.morn_l1}</li>
                                <li className="bg-gray-50 p-3 rounded-lg"><strong className="text-sea-accent block mb-1">{t.morn_h_prem}</strong> {t.morn_prem_val}</li>
                            </ul>
                        </div>

                        {/* Activities Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-sea-accent">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="p-3 bg-sky-50 text-sea-accent rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                <h4 className="text-2xl font-bold text-gray-900">{t.aft_title}</h4>
                            </div>
                            <p className="text-gray-600 mb-6 font-medium">{t.aft_desc}</p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="p-3 bg-gray-50 rounded-lg">
                                    <strong className="block text-sea-main mb-1">{t.aft_h_inc}</strong>
                                    <span>{t.aft_l1}</span>
                                </li>
                                <li className="p-3 bg-gray-50 rounded-lg">
                                    <strong className="block text-sea-accent mb-1">{t.aft_h_prem}</strong>
                                    <span>{t.aft_l2}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Extreme Focus */}
                    <div className="mt-10 bg-sea-main rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h4 className="text-2xl font-bold mb-4 text-sea-highlight">{t.extreme_title}</h4>
                            <p className="text-white/80 leading-relaxed mb-0">
                                {t.extreme_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Housing */}
            <section id="location" className="py-24 bg-white">
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
                                        <h4 className="text-xl font-bold text-gray-900">{t.loc_sub_leysin}</h4>
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
                                <img src="/Images/Image_SEA/sea_2.png" alt="Leysin Campus" className="w-full h-auto" />
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
                                    <span>{t.incl_l4}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Upgrades */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,51,102,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,51,102,0.15)] transition border border-gray-100">
                            <h4 className="text-xl font-bold mb-6 text-sea-accent uppercase tracking-wide border-b pb-4">{t.excl_h_title}</h4>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l3}</span> <span className="font-bold text-sea-dark">+ CHF 300 / sem</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l4}</span> <span className="font-bold text-sea-dark">+ CHF 400</span></li>
                                <li className="flex justify-between items-center py-2"><span>{t.excl_l1}</span> <span className="font-bold text-sea-dark">CHF 200</span></li>
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
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.cta_title}</h2>
                    <p className="text-xl text-gray-400 mb-10 font-light">{t.cta_sub}</p>

                    <a href="mailto:benjamin.egretaud@sherpaliving.mx"
                        className="inline-block px-10 py-4 text-lg font-bold bg-sea-accent text-white rounded-full hover:bg-sky-500 transition transform hover:scale-105 shadow-lg mb-12">
                        {t.cta_principal}
                    </a>

                    <div className="flex flex-col md:flex-row justify-center gap-12 border-t border-gray-800 pt-12 text-sm text-gray-400">
                        <div>
                            <h5 className="text-white font-bold mb-2 uppercase tracking-wider">Email</h5>
                            <a href="mailto:benjamin.egretaud@sherpaliving.mx"
                                className="hover:text-white transition">benjamin.egretaud@sherpaliving.mx</a>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-2 uppercase tracking-wider">Lieu</h5>
                            <p>Leysin, Suisse</p>
                        </div>
                    </div>

                    <div className="mt-12 text-xs text-gray-600">
                        <span>{t.footer_text_1}</span> | <span>{t.footer_text_2}</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SwissLanguage;
