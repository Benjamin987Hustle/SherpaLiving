import React, { useState } from 'react';
import ProgramForm from '../components/ProgramForm';
import Modal from '../components/Modal';

const BAActing: React.FC = () => {
    // Default to French as requested by user's language, but allow toggle
    const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const content = {
        fr: {
            nav: ["Programmes", "Campus", "Tarifs"],
            hero: {
                subtitle: "Royal Conservatoire of Scotland",
                title: "BA Acting",
                desc: "Une formation intensive pour préparer votre carrière au théâtre, à l'écran et à la radio.",
                cta_primary: "Contactez pour réserver",
                cta_secondary: "Découvrir"
            },
            stats: {
                deadline_uk: "Date limite (Royaume-Uni)",
                deadline_uk_val: "14 Janvier 2026",
                deadline_int: "Date limite (International)",
                deadline_int_val: "30 Janvier 2026",
                start: "Rentrée",
                start_val: "21 Septembre 2026",
                code: "Code UCAS",
                code_val: "W410 (Inst: R58)"
            },
            why: {
                title: "Pourquoi choisir le RCS ?",
                items: [
                    {
                        title: "Top 10 Mondial",
                        desc: "Classé régulièrement dans le top 10 mondial pour les arts du spectacle (QS World Rankings)."
                    },
                    {
                        title: "Représentation Artistique",
                        desc: "96% des diplômés sont invités à rencontrer des agents après leur performance finale."
                    },
                    {
                        title: "Classes Restreintes",
                        desc: "Des groupes de 12 à 14 étudiants pour un apprentissage ciblé et personnalisé."
                    },
                    {
                        title: "Opportunités Internationales",
                        desc: "Échanges avec le Conservatoire de Paris, Carnegie Mellon et festivals internationaux."
                    }
                ]
            },
            structure: {
                title: "Structure du Programme",
                years: [
                    {
                        year: "Année 1",
                        focus: "Les Fondamentaux",
                        details: "Introduction aux trois disciplines : Jeu, Voix et Mouvement. Exploration de la vie intérieure, du comportement observé et du texte. Travail vocal (Nadine George) et mouvement (Lecoq)."
                    },
                    {
                        year: "Année 2",
                        focus: "Développement & Collaboration",
                        details: "Collaboration 'Off Kilter', théâtre physique, écriture nouvelle. Pratique professionnelle pour développer les compétences essentielles de l'industrie."
                    },
                    {
                        year: "Année 3",
                        focus: "Performance & Industrie",
                        details: "Performances publiques (classiques et contemporaines), projets écran et radio. Showcases devant des directeurs de casting et agents."
                    }
                ]
            },
            admissions: {
                title: "Frais de Scolarité & Candidature",
                fees_scot: "Écossais",
                fees_ruk: "Reste du R-U",
                fees_int: "International",
                apply_step: "Comment postuler",
                apply_text: "Les candidatures se font via UCAS Conservatoires. Frais d'audition de £55.",
                cta_apply: "Commencer la candidature"
            }
        },
        en: {
            hero: {
                subtitle: "Royal Conservatoire of Scotland",
                title: "BA Acting",
                desc: "Intensive training to prepare for a career in theatre, screen, and radio.",
                cta_primary: "Contact to book",
                cta_secondary: "Discover"
            },
            stats: {
                deadline_uk: "UK Deadline",
                deadline_uk_val: "14 January 2026",
                deadline_int: "Intl Deadline",
                deadline_int_val: "30 January 2026",
                start: "Start Date",
                start_val: "21 September 2026",
                code: "UCAS Code",
                code_val: "W410 (Inst: R58)"
            },
            why: {
                title: "Why Study at RCS?",
                items: [
                    {
                        title: "World Top Ten",
                        desc: "Consistently ranked in the world's top 10 for performing arts education."
                    },
                    {
                        title: "Agent Representation",
                        desc: "96% of graduates invited to agent meetings after showcase."
                    },
                    {
                        title: "Small Classes",
                        desc: "Class sizes of 12-14 students ensure focused, individual training."
                    },
                    {
                        title: "International Opportunities",
                        desc: "Exchanges with Paris Conservatoire, Carnegie Mellon, and international festivals."
                    }
                ]
            },
            structure: {
                title: "Programme Structure",
                years: [
                    {
                        year: "Year 1",
                        focus: "The Fundamentals",
                        details: "Intro to Acting, Voice, and Movement. Exploring inner life, observed behaviour, and text. Voice work (Nadine George) and Lecoq-based movement."
                    },
                    {
                        year: "Year 2",
                        focus: "Devising & Collaboration",
                        details: "Collaborative 'Off Kilter' festival, physical theatre, new writing. Professional practice classes to build industry skills."
                    },
                    {
                        year: "Year 3",
                        focus: "Performance & Industry",
                        details: "Public performances (classic & modern), screen and radio projects. Industry showcases for casting directors and agents."
                    }
                ]
            },
            admissions: {
                title: "Fees & Application",
                fees_scot: "Scottish",
                fees_ruk: "RUK",
                fees_int: "International",
                apply_step: "How to apply",
                apply_text: "Applications are made via UCAS Conservatoires. Audition fee £55.",
                cta_apply: "Start Application"
            }
        },
        es: {
            hero: {
                subtitle: "Royal Conservatoire of Scotland",
                title: "BA Actuación",
                desc: "Formación intensiva para preparar tu carrera en teatro, cine y radio.",
                cta_primary: "Contactar para reservar",
                cta_secondary: "Descubrir"
            },
            stats: {
                deadline_uk: "Fecha límite (Reino Unido)",
                deadline_uk_val: "14 de Enero 2026",
                deadline_int: "Fecha límite (Intl)",
                deadline_int_val: "30 de Enero 2026",
                start: "Inicio",
                start_val: "21 de Septiembre 2026",
                code: "Código UCAS",
                code_val: "W410 (Inst: R58)"
            },
            why: {
                title: "¿Por qué elegir RCS?",
                items: [
                    {
                        title: "Top 10 Mundial",
                        desc: "Clasificado constantemente en el top 10 mundial en artes escénicas (QS World Rankings)."
                    },
                    {
                        title: "Representación Artística",
                        desc: "El 96% de los graduados son invitados a reuniones con agentes después de su presentación final."
                    },
                    {
                        title: "Clases Pequeñas",
                        desc: "Grupos de 12 a 14 estudiantes para un aprendizaje enfocado y personalizado."
                    },
                    {
                        title: "Oportunidades Internacionales",
                        desc: "Intercambios con el Conservatorio de París, Carnegie Mellon y festivales internacionales."
                    }
                ]
            },
            structure: {
                title: "Estructura del Programa",
                years: [
                    {
                        year: "Año 1",
                        focus: "Los Fundamentos",
                        details: "Introducción a la Actuación, Voz y Movimiento. Exploración de la vida interior, comportamiento observado y texto. Trabajo de voz (Nadine George) y movimiento (Lecoq)."
                    },
                    {
                        year: "Año 2",
                        focus: "Creación y Colaboración",
                        details: "Festival colaborativo 'Off Kilter', teatro físico, nueva escritura. Clases de práctica profesional para desarrollar habilidades de la industria."
                    },
                    {
                        year: "Año 3",
                        focus: "Actuación e Industria",
                        details: "Actuaciones públicas (clásicas y modernas), proyectos de cine y radio. Presentaciones ante directores de casting y agentes."
                    }
                ]
            },
            admissions: {
                title: "Tarifas y Solicitud",
                fees_scot: "Escoceses",
                fees_ruk: "Resto del R.U.",
                fees_int: "Internacional",
                apply_step: "Cómo aplicar",
                apply_text: "Las solicitudes se realizan a través de UCAS Conservatoires. Tarifa de audición £55.",
                cta_apply: "Iniciar Solicitud"
            }
        }
    };

    const t = content[lang];

    return (
        <div className="font-sans text-slate-800 bg-[#FAFAFA]">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/Images/logo_crs.png" alt="RCS Logo" className="h-12 w-auto" />
                        <span className="font-bold text-lg tracking-tight text-gray-900">Royal Conservatoire of Scotland</span>
                    </div>



                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                const langs: ('fr' | 'en' | 'es')[] = ['fr', 'en', 'es'];
                                const nextIndex = (langs.indexOf(lang) + 1) % langs.length;
                                setLang(langs[nextIndex]);
                            }}
                            className="px-3 py-1 text-xs font-bold border border-gray-200 rounded-md hover:bg-gray-50 uppercase"
                        >
                            {lang}
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-2.5 bg-purple-900 text-white text-sm font-bold rounded-full hover:bg-purple-800 transition"
                        >
                            {t.hero.cta_secondary}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <header className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/rcs_1.png"
                        alt="Theater Stage"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-purple-900/30 mix-blend-multiply" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
                    <span className="inline-block py-1.5 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 animate-[fadeIn_1s_ease-out]">
                        {t.hero.subtitle}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight drop-shadow-2xl">
                        {t.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                        {t.hero.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#section-3" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition shadow-lg shadow-purple-900/50">
                            {t.hero.cta_primary}
                        </a>
                        <a href="#section-3" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition border border-white/20">
                            {t.hero.cta_secondary}
                        </a>
                    </div>
                </div>
            </header>

            {/* Key Stats Bar */}
            <div className="relative z-20 -mt-16 container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-b-4 border-purple-600">
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t.stats.deadline_uk}</p>
                        <p className="text-lg font-bold text-gray-900">{t.stats.deadline_uk_val}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t.stats.deadline_int}</p>
                        <p className="text-lg font-bold text-gray-900">{t.stats.deadline_int_val}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t.stats.start}</p>
                        <p className="text-lg font-bold text-gray-900">{t.stats.start_val}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t.stats.code}</p>
                        <p className="text-lg font-bold text-purple-600">{t.stats.code_val}</p>
                    </div>
                </div>
            </div>

            {/* Why RCS / Campus */}
            <section id="campus" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.why.title}</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.why.items.map((item, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:bg-purple-50 transition duration-300 group">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 text-xl group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                                    {idx === 0 && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                    )}
                                    {idx === 1 && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    )}
                                    {idx === 2 && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    )}
                                    {idx === 3 && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structure / Programmes */}
            <section id="programmes" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 transform translate-x-20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-bold mb-16 text-center">{t.structure.title}</h2>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {t.structure.years.map((year, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="w-px h-full bg-slate-700 group-last:bg-transparent"></div>
                                </div>
                                <div className="flex-1 bg-slate-800/80 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-purple-400">{year.year}</h3>
                                        <span className="text-sm font-semibold tracking-wider uppercase text-slate-400 border border-slate-600 px-3 py-1 rounded-full">{year.focus}</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">{year.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admissions & Fees / Tarifs */}
            <section id="tarifs" className="py-24 bg-purple-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.admissions.title}</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {t.admissions.apply_text}
                            </p>
                            <a href="https://www.ucas.com/conservatoires" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition shadow-lg">
                                {t.admissions.cta_apply}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
                            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-6">Tuition Fees (2026/27)</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-900">{t.admissions.fees_scot}</span>
                                    <span className="font-bold text-purple-700">£1,820</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-900">{t.admissions.fees_ruk}</span>
                                    <span className="font-bold text-purple-700">£9,535</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-900">{t.admissions.fees_int}</span>
                                    <span className="font-bold text-purple-700">£29,786</span>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-purple-50 rounded-lg text-sm text-purple-800">
                                * Fees serve as a guide and are subject to change. Check RCS website for funding options.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="py-12 bg-gray-900 text-white text-center text-sm text-gray-400">
                <p>&copy; 2025 Royal Conservatoire of Scotland.</p>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-1">
                    <ProgramForm programName="BA Acting" lang={lang} />
                </div>
            </Modal>
        </div>
    );
};

export default BAActing;
