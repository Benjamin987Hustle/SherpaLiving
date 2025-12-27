import React, { useState } from 'react';

interface ProgramFormProps {
    programName: string;
    lang: 'fr' | 'en' | 'es';
}

const ProgramForm: React.FC<ProgramFormProps> = ({ programName, lang }) => {
    const t = {
        fr: {
            title: "Demander Plus d'Informations",
            subtitle: "Remplissez le formulaire ci-dessous pour en savoir plus sur ce programme.",
            fields: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Email",
                phone: "Téléphone",
                age: "Age de l'étudiant",
                birthCountry: "Pays de naissance",
                spokenLang: "Langue parlée",
                motherTongue: "Langue maternelle",
            },
            cta: "Envoyer la Demande",
            success: "Votre demande a été envoyée avec succès !"
        },
        en: {
            title: "Request More Information",
            subtitle: "Fill out the form below to learn more about this program.",
            fields: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone",
                age: "Student's Age",
                birthCountry: "Country of Birth",
                spokenLang: "Spoken Language",
                motherTongue: "Mother Tongue",
            },
            cta: "Submit Request",
            success: "Your request has been sent successfully!"
        },
        es: {
            title: "Solicitar Más Información",
            subtitle: "Complete el formulario a continuación para obtener más información sobre este programa.",
            fields: {
                firstName: "Nombre",
                lastName: "Apellido",
                email: "Email",
                phone: "Teléfono",
                age: "Edad del estudiante",
                birthCountry: "País de nacimiento",
                spokenLang: "Idioma hablado",
                motherTongue: "Lengua materna",
            },
            cta: "Enviar Solicitud",
            success: "¡Su solicitud ha sido enviada con éxito!"
        }
    };

    const content = t[lang];
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        // For now we simulate success
        setSubmitted(true);
        console.log(`Form submitted for ${programName}`);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 p-8 rounded-xl text-center border border-green-200 shadow-sm animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{content.success}</h3>
                <p className="text-green-600">
                    {lang === 'fr' ? "Nous vous contacterons très bientôt." :
                        lang === 'es' ? "Nos pondremos en contacto con usted muy pronto." :
                            "We will contact you very soon."}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-green-700 hover:text-green-900 underline"
                >
                    {lang === 'fr' ? "Envoyer une autre demande" :
                        lang === 'es' ? "Enviar otra solicitud" :
                            "Send another request"}
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.title}</h3>
                <p className="text-gray-500">{content.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.firstName}</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.lastName}</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.email}</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.phone}</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.age}</label>
                        <input type="number" min="5" max="99" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.birthCountry}</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.spokenLang}</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.motherTongue}</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg transform transition hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-300"
                >
                    {content.cta}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    {lang === 'fr' ? "Vos données sont sécurisées et ne seront jamais partagées." :
                        lang === 'es' ? "Sus datos están seguros y nunca serán compartidos." :
                            "Your data is secure and will never be shared."}
                </p>
            </form>
        </div>
    );
};

export default ProgramForm;
