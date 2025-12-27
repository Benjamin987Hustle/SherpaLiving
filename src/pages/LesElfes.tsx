import React, { useState, useEffect } from 'react';

import ProgramForm from '../components/ProgramForm';
import Modal from '../components/Modal';

const translations = {
    fr: {
        nav_cta: "Découvrir",
        header_tagline: "Camp d'Aventure dans les Alpes Suisses",
        header_title: "Les Elfes",
        header_subtitle: "L'Aventure en Plein Air",
        header_age_prefix: "Développement personnel et sécurité en montagne pour les",
        carousel_cta: "Je découvre les tarifs",
        desc_title: "Plus qu'un Camp, un Développement Personnel",
        desc_p1: "Nichés dans le village alpin de Verbier, Les Elfes offrent un cadre exceptionnel pour l'aventure, le développement du leadership et l'apprentissage des langues pour les jeunes de 65+ pays.",
        desc_p2: "Le programme combine plus de 40 activités de plein air excitantes (escalade, VTT, kayak) avec des cours de langues de haute qualité.",
        desc_p4: "Avec des jeunes de plus de 65 pays, c'est l'opportunité parfaite pour que votre enfant gagne en confiance et se fasse des amis pour la vie.",
        details_title: "Détails et Tarifs",
        structure_title: "Au Programme",
        structure_l1: "3 Programmes (Discovery, Explorer, Pioneer) assurant que chaque tranche d'âge bénéficie d'une structure adaptée.",
        structure_l2: "8 périodes/semaine incluses (Anglais, Français, Espagnol, Allemand ou Mandarin).",
        structure_l3: "Plus de 40 choix incluant sports nautiques, escalade, VTT, excursions culturelles.",
        structure_l4: "Ratio de 5 étudiants pour 1 moniteur pendant les activités, équipe médicale sur place 24/7.",
        pricing_title: "Dates et Tarifs 2024",
        table_dates: "Dates",
        table_boarding: "Tarif (2 Sem.)",
        pricing_footer: "Tarif basé sur une session de 2 semaines. Des sessions de 1 ou 3 semaines sont également disponibles.",
        quote_text: "\"C'est ma troisième fois ici, et chaque année, c'est de mieux en mieux. Les activités sont toujours amusantes... Le meilleur camp qui soit !\"",
        quote_source: "- Anonyme, Camp d'Été Les Elfes",
        cta_title: "Réservez l'Aventure de Votre Enfant",
        cta_button: "Contacter pour réserver",
        contact_title: "Informations de Contact :",
        footer_text_1: "© 2024 Les Elfes International.",
        footer_text_2: "Partenaire Sherpa Living.",
    },
    en: {
        nav_cta: "Discover",
        header_tagline: "Adventure Camp in the Swiss Alps",
        header_title: "Les Elfes",
        header_subtitle: "The Great Outdoors Adventure",
        header_age_prefix: "Personal development and mountain safety for ages",
        carousel_cta: "See Pricing",
        desc_title: "More Than a Camp, Personal Development",
        desc_p1: "Nestled in the alpine village of Verbier, Les Elfes offers an exceptional setting for adventure, leadership development, and language learning for youth from 65+ countries.",
        desc_p2: "The program combines over 40 exciting outdoor activities (climbing, mountain biking, kayaking) with high-quality language classes.",
        desc_p4: "With youth from over 65 countries, it's the perfect opportunity for your child to gain confidence and make friends for life.",
        details_title: "Details and Pricing",
        structure_title: "The Program",
        structure_l1: "3 Programs (Discovery, Explorer, Pioneer) ensuring each age group benefits from a tailored structure.",
        structure_l2: "8 periods/week included (English, French, Spanish, German, or Mandarin).",
        structure_l3: "Over 40 choices including water sports, climbing, mountain biking, cultural excursions.",
        structure_l4: "5:1 student-to-counselor ratio during activities, 24/7 on-site medical team.",
        pricing_title: "2024 Dates and Prices",
        table_dates: "Dates",
        table_boarding: "Price (2 Wk.)",
        pricing_footer: "Price based on a 2-week session. 1 or 3-week sessions are also available.",
        quote_text: "\"It's my third time here, and every year it gets better and better. The activities are always fun... The best camp there is!\"",
        quote_source: "- Anonymous, Les Elfes Summer Camp",
        cta_title: "Book Your Child's Adventure",
        cta_button: "Contact to Book",
        contact_title: "Contact Information:",
        footer_text_1: "© 2024 Les Elfes International.",
        footer_text_2: "Sherpa Living Partner.",
    },
    es: {
        nav_cta: "Descubrir",
        header_tagline: "Campamento de Aventura en los Alpes Suizos",
        header_title: "Les Elfes",
        header_subtitle: "La Aventura al Aire Libre",
        header_age_prefix: "Desarrollo personal y seguridad en montaña para",
        carousel_cta: "Ver Precios",
        desc_title: "Más que un Campamento, Desarrollo Personal",
        desc_p1: "Ubicado en el pueblo alpino de Verbier, Les Elfes ofrece un entorno excepcional para la aventura, el desarrollo del liderazgo y el aprendizaje de idiomas para jóvenes de más de 65 países.",
        desc_p2: "El programa combina más de 40 emocionantes actividades al aire libre (escalada, bicicleta de montaña, kayak) con clases de idiomas de alta calidad.",
        desc_p4: "Con jóvenes de más de 65 países, es la oportunidad perfecta para que su hijo gane confianza y haga amigos para toda la vida.",
        details_title: "Detalles y Precios",
        structure_title: "El Programa",
        structure_l1: "3 Programas (Discovery, Explorer, Pioneer) asegurando que cada grupo de edad se beneficie de una estructura adaptada.",
        structure_l2: "8 períodos/semana incluidos (Inglés, Francés, Español, Alemán o Mandarín).",
        structure_l3: "Más de 40 opciones incluyendo deportes acuáticos, escalada, bicicleta de montaña, excursiones culturales.",
        structure_l4: "Proporción de 5 estudiantes por 1 monitor durante actividades, equipo médico 24/7.",
        pricing_title: "Fechas y Precios 2024",
        table_dates: "Fechas",
        table_boarding: "Precio (2 Sem.)",
        pricing_footer: "Precio basado en sesión de 2 semanas. Sesiones de 1 o 3 semanas disponibles.",
        quote_text: "\"Es mi tercera vez aquí, y cada año es mejor. Las actividades siempre son divertidas... ¡El mejor campamento que existe!\"",
        quote_source: "- Anónimo, Campamento Les Elfes",
        cta_title: "Reserve la Aventura de su Hijo",
        cta_button: "Contactar para Reservar",
        contact_title: "Información de Contacto:",
        footer_text_1: "© 2024 Les Elfes International.",
        footer_text_2: "Socio Sherpa Living.",
    }
};

const LesElfes: React.FC = () => {
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const slides = [
        "Images/Images_Les_Elfes/elfes_musée.png",
        "Images/Images_Les_Elfes/les_elfes_cheval.png",
        "Images/Images_Les_Elfes/les_elfes_paysages.png",
        "Images/Images_Les_Elfes/les_elfes_summer_camp.png"
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
        <div className="font-sans antialiased text-gray-800 leading-relaxed bg-[#F6F8FB]">
            {/* Navbar */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/Images/Images_Les_Elfes/logo_les_elfe.jpg" alt="Les Elfes International"
                            className="w-12 h-12 rounded-full shadow-sm border border-gray-100" />
                        <span className="text-xl font-bold tracking-tight text-elfes-dark hidden sm:block uppercase">Les Elfes International</span>
                    </div>

                    <div className="flex items-center gap-6">


                        <div className="flex items-center gap-4">
                            <select
                                id="language-switcher"
                                value={lang}
                                onChange={handleLanguageChange}
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-elfes-green focus:border-elfes-green block p-2 cursor-pointer outline-none"
                            >
                                <option value="fr">FR</option>
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                            </select>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="hidden sm:inline-block px-6 py-2.5 bg-elfes-green text-white text-sm font-semibold rounded-full shadow-md hover:bg-green-700 transition transform hover:-translate-y-0.5"
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

                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-br from-[#154360]/40 to-[#1E8449]/60"></div>

                <div className="relative z-20 container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto space-y-8 animate-[fadeInUp_0.8s_ease-out]">
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase text-elfes-accent mb-2">
                            {t.header_tagline}
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-xl">
                            {t.header_title} <br /> <span className="text-white">{t.header_subtitle}</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                            <span>{t.header_age_prefix}</span>
                            <span className="font-bold text-elfes-green bg-white px-2 py-0.5 rounded shadow-sm text-base align-middle ml-2">6 - 17 ans</span>.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#tarifs"
                                className="px-8 py-4 bg-white text-elfes-green font-bold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                                {t.carousel_cta}
                            </a>
                            <a href="mailto:benjamin.egretaud@sherpaliving.mx"
                                className="px-8 py-4 bg-elfes-green text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1">
                                {t.cta_button}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition - Mapped to Campus */}
            <section id="campus" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.desc_title}</h2>
                        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                            <p>{t.desc_p1}</p>
                            <p>{t.desc_p2}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Features */}
                        <div className="p-8 rounded-2xl bg-elfes-light border border-green-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-elfes-green">
                                {/* Icon */}
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">International</h3>
                            <p className="text-gray-600">{t.desc_p4}</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-elfes-light border border-green-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-elfes-blue">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Programmes Adaptés</h3>
                            <p className="text-gray-600">{t.structure_l1}</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-elfes-light border border-green-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mb-6 text-elfes-dark">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Sécurité Maximale</h3>
                            <p className="text-gray-600">{t.structure_l4}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Program & Pricing - Mapped to Programmes */}
            <section id="programmes" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">{t.details_title}</h3>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                            <h4 className="text-2xl font-bold mb-6 text-elfes-green flex items-center gap-2">
                                {t.structure_title}
                            </h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-elfes-blue rounded-full flex items-center justify-center font-bold text-sm">ABC</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Langues</h5>
                                        <p className="text-sm text-gray-600 mt-1">{t.structure_l2}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-elfes-green rounded-full flex items-center justify-center font-bold text-sm">★</span>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Activités Aventure</h5>
                                        <p className="text-sm text-gray-600 mt-1">{t.structure_l3}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300" id="tarifs">
                            <h4 className="text-2xl font-bold mb-6 text-elfes-dark flex items-center gap-2">
                                {t.pricing_title}
                            </h4>
                            <div className="overflow-hidden rounded-xl border border-gray-100">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3">{t.table_dates}</th>
                                            <th className="px-4 py-3 text-right">{t.table_boarding}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">23 juin - 6 juillet</td>
                                            <td className="px-4 py-4 text-right font-bold text-elfes-green">CHF 5,900</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">7 juillet - 20 juillet</td>
                                            <td className="px-4 py-4 text-right font-bold text-elfes-green">CHF 5,900</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">21 juillet - 3 août</td>
                                            <td className="px-4 py-4 text-right font-bold text-elfes-green">CHF 5,900</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 font-medium text-gray-900">4 août - 17 août</td>
                                            <td className="px-4 py-4 text-right font-bold text-elfes-green">CHF 5,900</td>
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

            {/* Testimonial */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-3xl text-center px-6">
                    <blockquote className="text-2xl md:text-3xl italic font-serif leading-relaxed text-gray-800 mb-6">
                        {t.quote_text}
                    </blockquote>
                    <cite className="block text-lg font-bold text-elfes-green uppercase tracking-wider">{t.quote_source}</cite>
                </div>
            </section>

            {/* Footer */}
            {/* Contact Form Removed from Footer - Now in Modal */}
            <div className="py-12 bg-gray-900 text-white text-center text-xs text-gray-600">
                <span>{t.footer_text_1}</span> <span>{t.footer_text_2}</span>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-1">
                    <ProgramForm programName="LesElfes" lang={lang} />
                </div>
            </Modal>
        </div>
    );
};

export default LesElfes;
