import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface Webinar {
    id: number;
    title: string;
    date: string;
    time: string;
    speaker: string;
    description: string;
    image: string;
}

const webinarsData: Webinar[] = [
    {
        id: 1,
        title: "¿Qué gana su familia con un pasaporte europeo?",
        date: "Febrero 1",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Descubre l los beneficios de la ciudadanía europea y cómo puede abrir puertas globales para el futuro de tu familia.",
        image: "/Images/passeport_webinar.jfif",
    },
    {
        id: 2,
        title: "¿Alemania: Estudiar GRATIS, trabajar con futuro?",
        date: "Febrero 22",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "La puerta más estratégica para carreras técnicas y científicas. Conoce cómo acceder a educación de calidad sin costo de matrícula.",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "España: Un sistema hecho para hispanohablantes",
        date: "Marzo 29",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Ventajas académicas y culturales de estudiar en España. Facilidad de adaptación y excelencia educativa.",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 4,
        title: "Empleabilidad en México con título europeo",
        date: "Abril 26",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Descubre cómo un título internacional puede potenciar tu perfil profesional y abrirte mejores oportunidades laborales en México.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 5,
        title: "Países Bajos y Francia: Futuro garantizado",
        date: "Mayo 24",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Estudia en inglés o francés en dos de las economías más fuertes de Europa. Oportunidades académicas y laborales.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 6,
        title: "¿Cómo lograr ser admitido a las MEJORES universidades?",
        date: "Junio 29",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Estrategias clave, requisitos y preparación necesaria para ingresar a las instituciones más prestigiosas de Europa.",
        image: "/Images/uni_prestige_webinar.jpg",
    },
    {
        id: 7,
        title: "Carreras con alta empleabilidad en la UE",
        date: "Julio 26",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Análisis de las profesiones más demandadas en el mercado laboral europeo actual y futuro.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 8,
        title: "Becas y apoyo económico",
        date: "Agosto 30",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Más allá de la matrícula baja: explora las opciones de financiamiento y ayudas disponibles para estudiantes internacionales.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 9,
        title: "Tiempo de retorno de inversión",
        date: "Septiembre 27",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Comparativa financiera: Trabajar en Europa vs. regresar a México. Analizamos el ROI de tu educación europea.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 10,
        title: "Posgrado, investigación y doctorado",
        date: "Octubre 25",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "Oportunidades para estudios avanzados: programas financiados y contratos de investigación en Europa.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 11,
        title: "Redes que sostienen: Comunidades en Europa",
        date: "Noviembre 29",
        time: "12:00 PM",
        speaker: "Expertos Sherpa",
        description: "El valor de las comunidades sefardíes y judías en Europa como red de apoyo y crecimiento personal.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 12,
        title: "2027 Y MÁS ALLÁ: HOJA DE RUTA FAMILIAR",
        date: "Diciembre",
        time: "TBA",
        speaker: "Expertos Sherpa",
        description: "Planificación estratégica para el futuro de tu familia: construyendo un legado global personalizado.",
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1000",
    },
];

const Webinars = () => {

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Webinar Series 2026</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                        Acompáñanos en nuestra serie de webinars para planificar tu futuro en Europa.
                    </p>
                </div>
            </div>

            {/* Webinars Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webinarsData.map((webinar, index) => (
                        <motion.div
                            key={webinar.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={webinar.image}
                                    alt={webinar.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                                    {webinar.date}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center justify-between text-sm text-blue-600 mb-3 font-medium">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {webinar.date}
                                    </div>
                                    {webinar.time !== "TBA" && (
                                        <div className="flex items-center text-gray-500">
                                            <Clock className="w-4 h-4 mr-1.5" />
                                            {webinar.time}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{webinar.title}</h3>

                                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                                    {webinar.description}
                                </p>

                                <div className="flex items-center text-sm text-gray-500 mb-6 pt-4 border-t border-gray-100">
                                    <div className="flex items-center">
                                        <User className="w-4 h-4 mr-1.5 text-gray-400" />
                                        {webinar.speaker}
                                    </div>
                                </div>

                                <a
                                    href="https://docs.google.com/forms/d/1PLleAG1GsihocjpbX1d0hWsaA5ZjhOhWn2fQFTVOiSc/viewform?edit_requested=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    Regístrate Ahora
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Webinars;
