import React, { useState, useEffect } from 'react';

// --- TRANSLATIONS (from trulli.html) ---
const translations = {
    fr: {
        nav_cta: "Contacter pour réserver",
        header_tagline: "Immersion Linguistique & Culturelle",
        header_title: "Votre Été 2026 en Puglia !",
        header_age_prefix: "Apprendre l'italien au cœur d'Alberobello (UNESCO) pour les",
        carousel_cta: "Découvrir le Programme",
        desc_title: "Plus qu'un cours, une Expérience.",
        desc_p1: "Nous croyons que la manière la plus efficace d'apprendre l'italien est par l'engagement émotionnel authentique avec les gens et les lieux.",
        desc_p2: "Nouvelles amitiés, activités passionnantes et ambiance chaleureuse pour une progression rapide.",
        prog_title: "Programme de Deux Semaines : Cours & Aventure",
        morn_title: "Les Matins",
        morn_l1: "<strong class='text-gray-900'>Format :</strong> 20 leçons/semaine (9h15 - 12h30).",
        morn_l2: "<strong class='text-gray-900'>Petits Groupes :</strong> Max 6 étudiants/classe.",
        morn_l3: "<strong class='text-gray-900'>Niveaux :</strong> Débutant à Avancé.",
        morn_l4: "<strong class='text-gray-900'>Méthode :</strong> Active et ludique.",
        aft_title: "Les Après-midis",
        aft_l1: "<strong class='text-gray-900'>Excursions :</strong> Polignano, Monopoli...",
        aft_l2: "<strong class='text-gray-900'>Plages :</strong> Criques secrètes et eau cristalline.",
        aft_l3: "<strong class='text-gray-900'>Cuisine :</strong> Ateliers avec la \"Nonna\".",
        aft_l4: "<strong class='text-gray-900'>Fun :</strong> Chasse au trésor, parc aquatique.",
        imm_text: "Petits groupes, suivi personnalisé et sécurité maximale pour une tranquillité d'esprit totale.",
        loc_title: "Séjour au Cœur des Trulli",
        loc_p1: "Vous séjournerez dans le cadre unique d'Alberobello, célèbre pour ses Trulli. Un endroit sûr, calme et magique.",
        acc_sub_hot: "Hôtel Confortable",
        acc_l1: "Chambres triples/quadruples, non-mixtes.",
        acc_l2: "Petit-déjeuner, déjeuner et dîner inclus.",
        incl_title: "Tout est Inclus",
        incl_sub: "Formule 2 semaines tout compris. Session : <span class='text-trulli-main font-bold'>Début Juillet 2026</span>.",
        incl_h_title: "Inclus",
        incl_l1: "20 leçons d'italien/semaine",
        incl_l2: "Pension complète",
        incl_l3: "6 excursions & 8 activités",
        incl_l5: "Transport privé",
        incl_l6: "Tuteur 24/7",
        incl_l7: "Hébergement hôtel",
        incl_l8: "Transferts aéroport (Bari/Brindisi)",
        excl_h_title: "Non Inclus",
        excl_l1: "Assurances (maladie, vol...)",
        excl_l2: "Transferts hors horaires (+120€)",
        excl_l3: "Vols A/R",
        pricing_footer: "Contactez-nous pour les tarifs exacts.",
        faq_title: "Questions Fréquentes",
        faq_q1: "Quelles sont les modalités d'accueil et de transfert à l'arrivée ?",
        faq_a1: "Un membre de notre personnel accrédité l'attendra à la sortie du vol avec une pancarte \"Trulli Italian School\". Les transferts sont inclus le dimanche (9h-12h / 15h-18h) depuis les aéroports de Bari ou Brindisi.",
        faq_q2: "Est-il possible de garantir le logement avec un autre participant ?",
        faq_a2: "Oui, bien sûr ! Si votre enfant voyage avec un ami, il est possible de garantir qu'ils soient logés ensemble dans une chambre triple ou quadruple à l'hôtel, sous réserve de la même tranche d'âge.",
        faq_q3: "Comment est assurée la communication en cas d'urgence ?",
        faq_a3: "Une ligne téléphonique d'urgence **24/7** sera fournie aux parents dès la confirmation de la réservation. Notre personnel et les professeurs sont également constamment joignables sur place.",
        faq_q4: "Le programme inclut-il du temps libre et une autonomie encadrée ?",
        faq_a4: "Alberobello est un lieu sûr. Nous encourageons l'autonomie encadrée. Pendant les sorties et les soirées, un temps libre est accordé aux jeunes, toujours sous la supervision discrète de nos moniteurs.",
        cta_title: "Prêt pour l'aventure ?",
        cta_sub: "Les places sont limitées. Ne manquez pas l'été de votre vie.",
        cta_button: "Contacter pour réserver",
        footer_text_1: "© 2026 Trulli Italian School.",
        footer_text_2: "Partenaire Sherpa Living.",
        // Contact details
        contact_email: "benjamin.egretaud@sherpaliving.mx",
        contact_address: "Viale Margherita 49, Alberobello (Bari)"
    },
    en: {
        nav_cta: "Contact to Book",
        header_tagline: "Linguistic & Cultural Immersion",
        header_title: "Your Summer 2026 in Puglia!",
        header_age_prefix: "Learn Italian in the heart of Alberobello (UNESCO) for",
        carousel_cta: "Discover the Program",
        desc_title: "More Than a Course, an Experience.",
        desc_p1: "We believe the most effective way to learn Italian is through **authentic emotional engagement** with people and places.",
        desc_p2: "New friendships, exciting activities, and a warm atmosphere for rapid progress.",
        prog_title: "Two-Week Program: Lessons & Adventure",
        morn_title: "Mornings",
        morn_l1: "<strong class='text-gray-900'>Format:</strong> 20 lessons/week (9:15 am - 12:30 pm).",
        morn_l2: "<strong class='text-gray-900'>Small Groups:</strong> Max 6 students/class.",
        morn_l3: "<strong class='text-gray-900'>Levels:</strong> Beginner to Advanced.",
        morn_l4: "<strong class='text-gray-900'>Method:</strong> Active and fun.",
        aft_title: "Afternoons",
        aft_l1: "<strong class='text-gray-900'>Excursions:</strong> Polignano, Monopoli...",
        aft_l2: "<strong class='text-gray-900'>Beaches:</strong> Secret coves and crystal clear water.",
        aft_l3: "<strong class='text-gray-900'>Cooking:</strong> Workshops with the 'Nonna'.",
        aft_l4: "<strong class='text-gray-900'>Fun:</strong> Treasure hunt, water park.",
        imm_text: "Small groups, personalized monitoring and maximum security for total peace of mind.",
        loc_title: "Stay in the Heart of the Trulli",
        loc_p1: "You will stay in the unique setting of Alberobello, famous for its Trulli. A safe, calm, and magical place.",
        acc_sub_hot: "Comfortable Hotel",
        acc_l1: "Triple/quadruple rooms, non-mixed.",
        acc_l2: "Breakfast, lunch, and dinner included.",
        incl_title: "All-Inclusive",
        incl_sub: "2-week all-inclusive package. Session: <span class='text-trulli-main font-bold'>Early July 2026</span>.",
        incl_h_title: "Included",
        incl_l1: "20 Italian lessons/week",
        incl_l2: "Full board",
        incl_l3: "6 excursions & 8 activities",
        incl_l5: "Private transport",
        incl_l6: "24/7 Tutor",
        incl_l7: "Hotel accommodation",
        incl_l8: "Airport transfers (Bari/Brindisi)",
        excl_h_title: "Not Included",
        excl_l1: "Insurance (health, theft...)",
        excl_l2: "Transfers outside schedule (+€120)",
        excl_l3: "Round-trip flights",
        pricing_footer: "Contact us for exact prices.",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What are the arrival and transfer arrangements?",
        faq_a1: "An accredited staff member will meet them at the flight exit with a 'Trulli Italian School' sign. Transfers are included on Sunday (9 am-12 pm / 3 pm-6 pm) from Bari or Brindisi airports.",
        faq_q2: "Is it possible to guarantee accommodation with another participant?",
        faq_a2: "Yes, of course! If your child is traveling with a friend, it is possible to guarantee they are accommodated together in a triple or quadruple hotel room, subject to the same age group.",
        faq_q3: "How is emergency communication ensured?",
        faq_a3: "A **24/7** emergency phone line will be provided to parents upon booking confirmation. Our staff and teachers are also constantly reachable on site.",
        faq_q4: "Does the program include free time and supervised autonomy?",
        faq_a4: "Alberobello is a safe location. We encourage supervised autonomy. During outings and evenings, free time is granted to youth, always under the discreet supervision of our counselors.",
        cta_title: "Ready for the adventure?",
        cta_sub: "Places are limited. Don't miss the summer of a lifetime.",
        cta_button: "Contact to Book",
        footer_text_1: "© 2026 Trulli Italian School.",
        footer_text_2: "Sherpa Living Partner.",
        contact_email: "benjamin.egretaud@sherpaliving.mx",
        contact_address: "Viale Margherita 49, Alberobello (Bari)"
    },
    es: {
        nav_cta: "Contactar para Reservar",
        header_tagline: "Inmersión Lingüística y Cultural",
        header_title: "¡Tu Verano 2026 en Puglia!",
        header_age_prefix: "Aprende italiano en el corazón de Alberobello (UNESCO) para",
        carousel_cta: "Descubrir el Programa",
        desc_title: "Más que un curso, una Experiencia.",
        desc_p1: "Creemos que la forma más efectiva de aprender italiano es a través del **compromiso emocional auténtico** con las personas y los lugares.",
        desc_p2: "Nuevas amistades, actividades emocionantes y un ambiente cálido para un rápido progreso.",
        prog_title: "Programa de Dos Semanas: Clases y Aventura",
        morn_title: "Mañanas",
        morn_l1: "<strong class='text-gray-900'>Formato:</strong> 20 lecciones/semana (9:15 am - 12:30 pm).",
        morn_l2: "<strong class='text-gray-900'>Grupos Reducidos:</strong> Máx. 6 estudiantes/clase.",
        morn_l3: "<strong class='text-gray-900'>Niveles:</strong> Principiante a Avanzado.",
        morn_l4: "<strong class='text-gray-900'>Método:</strong> Activo y lúdico.",
        aft_title: "Tardes",
        aft_l1: "<strong class='text-gray-900'>Excursiones:</strong> Polignano, Monopoli...",
        aft_l2: "<strong class='text-gray-900'>Playas:</strong> Calas secretas y agua cristalina.",
        aft_l3: "<strong class='text-gray-900'>Cocina:</strong> Talleres con la 'Nonna'.",
        aft_l4: "<strong class='text-gray-900'>Diversión:</strong> Búsqueda del tesoro, parque acuático.",
        imm_text: "Grupos reducidos, seguimiento personalizado y máxima seguridad para total tranquilidad.",
        loc_title: "Estancia en el Corazón de los Trulli",
        loc_p1: "Te alojarás en el entorno único de Alberobello, famoso por sus Trulli. Un lugar seguro, tranquilo y mágico.",
        acc_sub_hot: "Hotel Confortable",
        acc_l1: "Habitaciones triples/cuádruples, no mixtas.",
        acc_l2: "Desayuno, almuerzo y cena incluidos.",
        incl_title: "Todo Incluido",
        incl_sub: "Fórmula de 2 semanas todo incluido. Sesión: <span class='text-trulli-main font-bold'>Principios de Julio 2026</span>.",
        incl_h_title: "Incluido",
        incl_l1: "20 lecciones de italiano/semana",
        incl_l2: "Pensión completa",
        incl_l3: "6 excursiones y 8 actividades",
        incl_l5: "Transporte privado",
        incl_l6: "Tutor 24/7",
        incl_l7: "Alojamiento en hotel",
        incl_l8: "Traslados al aeropuerto (Bari/Brindisi)",
        excl_h_title: "No Incluido",
        excl_l1: "Seguros (salud, robo...)",
        excl_l2: "Traslados fuera de horario (+€120)",
        excl_l3: "Vuelos de ida/vuelta",
        pricing_footer: "Contáctenos para precios exactos.",
        faq_title: "Preguntas Frecuentes",
        faq_q1: "¿Cuáles son las modalidades de acogida y traslado a la llegada?",
        faq_a1: "Un miembro de nuestro personal acreditado lo esperará a la salida del vuelo con un cartel \"Trulli Italian School\". Los traslados están incluidos el domingo (9h-12h / 15h-18h) desde los aeropuertos de Bari o Brindisi.",
        faq_q2: "¿Es posible garantizar el alojamiento con otro participante?",
        faq_a2: "¡Sí, por supuesto! Si su hijo viaja con un amigo, es posible garantizar que se alojen juntos en una habitación triple o cuádruple en el hotel, sujeto al mismo grupo de edad.",
        faq_q3: "¿Cómo se asegura la comunicación en caso de emergencia?",
        faq_a3: "Se proporcionará una línea telefónica de emergencia 24/7 a los padres al confirmar la reserva. Nuestro personal y profesores también están constantemente localizables en el sitio.",
        faq_q4: "¿El programa incluye tiempo libre y autonomía supervisada?",
        faq_a4: "Alberobello es un lugar seguro. Fomentamos la autonomía supervisada. Durante las salidas y las noches, se concede tiempo libre a los jóvenes, siempre bajo la supervisión discreta de nuestros monitores.",
        cta_title: "¡Listo para la aventura?",
        cta_sub: "Las plazas son limitadas. No se pierda el verano de su vida.",
        cta_button: "Contactar para Reservar",
        footer_text_1: "© 2026 Trulli Italian School.",
        footer_text_2: "Socio Sherpa Living.",
        contact_email: "benjamin.egretaud@sherpaliving.mx",
        contact_address: "Viale Margherita 49, Alberobello (Bari)"
    },
};

const Trulli: React.FC = () => {
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');

    // Using a single background image from CSS in original, but could be a carousel.
    // The original code had a hero-bg class with a specific image.
    // However, the JS code mentioned a carousel mechanism, so we will implement one if there are multiple images.
    // In the HTML provided: `hero-bg` uses `url('Image_trulli/trulli_1.png')`.
    // Let's stick to the single hero image for now as the CSS dictated the look, 
    // unless there are obvious other hero images.
    // The previous files had carousels, so I will implement a simple background image hero for this one 
    // based on the CSS class `.hero-bg`.

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

    return (
        <div className="font-sans antialiased text-[#1F2937] leading-relaxed bg-[#FFFBF5]">
            {/* Navbar */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/Images/Image_trulli/logo_trulli.png" alt="Trulli Italian School"
                            className="w-10 h-10 rounded-full shadow-sm" />
                        <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">Trulli Italian School</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                            <a href="#programme" className="hover:text-trulli-main transition">Programme</a>
                            <a href="#hebergement" className="hover:text-trulli-main transition">Hébergement</a>
                            <a href="#tarifs" className="hover:text-trulli-main transition">Tarifs</a>
                            <a href="#faq" className="hover:text-trulli-main transition">FAQ</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <select
                                id="language-switcher"
                                value={lang}
                                onChange={handleLanguageChange}
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-trulli-main focus:border-trulli-main block p-2 cursor-pointer outline-none"
                            >
                                <option value="fr">FR</option>
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                            </select>
                            <a href="#inscription"
                                className="hidden sm:inline-block px-6 py-2.5 bg-trulli-main text-white text-sm font-semibold rounded-full shadow-md hover:bg-trulli-dark transition transform hover:-translate-y-0.5">
                                {t.nav_cta}
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white px-4 bg-fixed bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Images/Image_trulli/trulli_1.png')" }}>
                <div className="max-w-4xl mx-auto space-y-6 animate-[fadeInUp_0.8s_ease-out]">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wider uppercase mb-2">
                        {t.header_tagline}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-lg" dangerouslySetInnerHTML={{ __html: t.header_title.replace('en Puglia', '<span class="text-trulli-main">en Puglia</span>') }}>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                        <span>{t.header_age_prefix}</span> <span className="font-bold text-white bg-trulli-accent/80 px-2 rounded">14-17 ans</span>.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#programme"
                            className="px-8 py-4 bg-white text-trulli-text font-bold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                            {t.carousel_cta}
                        </a>
                        <a href="#inscription"
                            className="px-8 py-4 bg-trulli-main text-white font-bold rounded-full shadow-lg hover:bg-trulli-dark transition transform hover:-translate-y-1">
                            {t.nav_cta.replace('Réserver', 'Réserver ma place')}
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                        </path>
                    </svg>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.desc_title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.desc_p1 }}></p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-orange-100 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-transform transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-trulli-main">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Immersion Totale</h3>
                            <p className="text-gray-600">{t.desc_p2}</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-orange-100 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-transform transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-trulli-accent">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Culture & Fun</h3>
                            <p className="text-gray-600">Vivez la "Bella Vita" à travers la gastronomie, les excursions et la découverte des Pouilles.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-orange-100 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-transform transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Qualité Garantie</h3>
                            <p className="text-gray-600">{t.imm_text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programme Section */}
            <section id="programme" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-trulli-main font-bold tracking-wider uppercase text-sm">Planning</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{t.prog_title}</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Matins */}
                        <div className="bg-white rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-transform transform hover:-translate-y-1">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/Images/Image_trulli/trulli_2.png')" }}></div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                                    <span className="p-2 bg-orange-100 text-trulli-main rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                            </path>
                                        </svg>
                                    </span>
                                    {t.morn_title}
                                </h4>
                                <ul className="space-y-4 text-gray-600">
                                    <li className="flex gap-3"><span className="text-trulli-main mt-1">✓</span> <span dangerouslySetInnerHTML={{ __html: t.morn_l1 }}></span></li>
                                    <li className="flex gap-3"><span className="text-trulli-main mt-1">✓</span> <span dangerouslySetInnerHTML={{ __html: t.morn_l2 }}></span></li>
                                    <li className="flex gap-3"><span className="text-trulli-main mt-1">✓</span> <span dangerouslySetInnerHTML={{ __html: t.morn_l3 }}></span></li>
                                    <li className="flex gap-3"><span className="text-trulli-main mt-1">✓</span> <span dangerouslySetInnerHTML={{ __html: t.morn_l4 }}></span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Après-midis */}
                        <div className="bg-white rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-transform transform hover:-translate-y-1">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/Images/Image_trulli/trulli_3.png')" }}></div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                                    <span className="p-2 bg-teal-100 text-trulli-accent rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </span>
                                    {t.aft_title}
                                </h4>
                                <ul className="space-y-4 text-gray-600">
                                    <li className="flex gap-3"><span className="text-trulli-accent mt-1">✦</span> <span dangerouslySetInnerHTML={{ __html: t.aft_l1 }}></span></li>
                                    <li className="flex gap-3"><span className="text-trulli-accent mt-1">✦</span> <span dangerouslySetInnerHTML={{ __html: t.aft_l2 }}></span></li>
                                    <li className="flex gap-3"><span className="text-trulli-accent mt-1">✦</span> <span dangerouslySetInnerHTML={{ __html: t.aft_l3 }}></span></li>
                                    <li className="flex gap-3"><span className="text-trulli-accent mt-1">✦</span> <span dangerouslySetInnerHTML={{ __html: t.aft_l4 }}></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hébergement */}
            <section id="hebergement" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <span className="text-trulli-accent font-bold tracking-wider uppercase text-sm">Le Lieu</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.loc_title}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{t.loc_p1}</p>

                            <div className="space-y-4 pt-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-trulli-dark">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t.acc_sub_hot}</h4>
                                        <p className="text-sm text-gray-600">{t.acc_l1}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-trulli-dark">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Pension Complète</h4>
                                        <p className="text-sm text-gray-600">{t.acc_l2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/Images/Image_trulli/trulli_4.png" alt="Accommodation"
                                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="tarifs" className="py-24 bg-[#FFFBF5]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.incl_title}</h2>
                        <p className="text-gray-600 mt-4" dangerouslySetInnerHTML={{ __html: t.incl_sub }}></p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                            {/* Included */}
                            <div className="p-8">
                                <h4 className="text-xl font-bold text-trulli-main mb-6 flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {t.incl_h_title}
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l1}</span></li>
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l2}</span></li>
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l3}</span></li>
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l5}</span></li>
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l6}</span></li>
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l7}</span></li>
                                    <li className="flex gap-2"><span className="text-trulli-main">⭐</span> <span>{t.incl_l8}</span></li>
                                </ul>
                            </div>
                            {/* Not Included */}
                            <div className="p-8 bg-gray-50">
                                <h4 className="text-xl font-bold text-gray-400 mb-6 flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {t.excl_h_title}
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-500">
                                    <li className="flex gap-2"><span className="text-gray-400">➖</span> <span>{t.excl_l1}</span></li>
                                    <li className="flex gap-2"><span className="text-gray-400">➖</span> <span>{t.excl_l2}</span></li>
                                    <li className="flex gap-2"><span className="text-gray-400">➖</span> <span>{t.excl_l3}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                            <p className="text-sm text-gray-500 italic">{t.pricing_footer}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.faq_title}</h2>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
                            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
                                {t.faq_q1}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{t.faq_a1}</p>
                        </details>
                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
                            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
                                {t.faq_q2}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{t.faq_a2}</p>
                        </details>
                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
                            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
                                {t.faq_q3}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{t.faq_a3}</p>
                        </details>
                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
                            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
                                {t.faq_q4}
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{t.faq_a4}</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="inscription" className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.cta_title}</h2>
                    <p className="text-xl text-gray-400 mb-10 font-light">{t.cta_sub}</p>

                    <a href={`mailto:${t.contact_email}`}
                        className="inline-block px-10 py-4 text-lg font-bold bg-trulli-main text-white rounded-full hover:bg-trulli-dark transition transform hover:scale-105 shadow-lg mb-12">
                        {t.cta_button}
                    </a>

                    <div className="flex flex-col md:flex-row justify-center gap-12 border-t border-gray-800 pt-12 text-sm text-gray-400">
                        <div>
                            <h5 className="text-white font-bold mb-2 uppercase tracking-wider">Email</h5>
                            <a href={`mailto:${t.contact_email}`}
                                className="hover:text-trulli-main transition">{t.contact_email}</a>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-2 uppercase tracking-wider">Adresse</h5>
                            <p>{t.contact_address}</p>
                        </div>
                    </div>

                    <div className="mt-12 text-xs text-gray-600">
                        <span>{t.footer_text_1}</span> <span>{t.footer_text_2}</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trulli;
