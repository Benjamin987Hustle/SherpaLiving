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
                lastName: "Nom de famille",
                maternalLastName: "Nom de famille maternel",
                dateOfBirth: "Date de naissance",
                countryOfBirth: "Pays de naissance",
                phone: "Teléfono (Whatsapp)", // Keeping consistent with image request
                email: "Email",
                age: "Age",
                currentGrade: "Niveau scolaire actuel",
                gradYear: "Année de fin d'études (Lycée)",
                intakeYear: "Année d'entrée souhaitée",
                languageLevel: "Niveau actuel en", // Dynamic suffix
                source: "Comment avez-vous entendu parler de nous ?",
                financialSupport: "Avez-vous besoin d'une aide financière ?",
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
                maternalLastName: "Maternal Last Name",
                dateOfBirth: "Date of Birth",
                countryOfBirth: "Country of Birth",
                phone: "Phone (Whatsapp)",
                email: "Email",
                age: "Age",
                currentGrade: "Current School Grade",
                gradYear: "High School Graduation Year",
                intakeYear: "Desired Intake Year",
                languageLevel: "Current Level in",
                source: "How did you hear about us?",
                financialSupport: "Do you require financial support?",
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
                lastName: "Apellido Paterno",
                maternalLastName: "Apellido Materno",
                dateOfBirth: "Fecha de Nacimiento",
                countryOfBirth: "País de nacimiento",
                phone: "Teléfono (Whatsapp)",
                email: "Email",
                age: "Edad",
                currentGrade: "¿Qué grado escolar cursas acualmente?",
                gradYear: "¿En que año planeas terminas la preparatoria?",
                intakeYear: "¿Para que año te gustaría ingresar al curso?",
                languageLevel: "¿Cuál es tu nivel actual en el idioma",
                source: "¿Cómo te enteraste del programa?",
                financialSupport: "¿Requieres algún apoyo financiero?",
                motherTongue: "Lengua materna",
            },
            cta: "Enviar Solicitud",
            success: "¡Su solicitud ha sido enviada con éxito!"
        }
    };

    const content = t[lang];
    const [submitted, setSubmitted] = useState(false);

    // Dynamic Target Language Logic
    const getTargetLanguage = () => {
        const lower = programName.toLowerCase();
        if (lower.includes('german') || lower.includes('htw') || lower.includes('allemagne')) return lang === 'es' ? 'alemán' : lang === 'fr' ? 'allemand' : 'German';
        if (lower.includes('italian') || lower.includes('trulli') || lower.includes('italie')) return lang === 'es' ? 'italiano' : lang === 'fr' ? 'italien' : 'Italian';
        if (lower.includes('french') || lower.includes('leman') || lower.includes('suisse') || lower.includes('swiss')) return lang === 'es' ? 'francés' : lang === 'fr' ? 'français' : 'French';
        return lang === 'es' ? 'inglés' : lang === 'fr' ? 'anglais' : 'English'; // Default
    };

    const targetLangLabel = getTargetLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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

    // Styles for inputs to match the image (Clean, rounded, white bg)
    const inputClass = "w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition text-gray-700 bg-white shadow-sm";
    const labelClass = "block text-sm font-medium text-gray-700 md:text-left mb-1 md:mb-0 pt-2"; // Pt-2 for alignment

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-none"> {/* Removed shadow/border to blend in modal better */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.title}</h3>
                <p className="text-gray-500 text-sm">{content.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* First Name */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.firstName}</label>
                    <div className="md:col-span-2">
                        <input type="text" required className={inputClass} />
                    </div>
                </div>

                {/* Last Name (Paternal) */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.lastName}</label>
                    <div className="md:col-span-2">
                        <input type="text" required className={inputClass} />
                    </div>
                </div>

                {/* Maternal Last Name */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.maternalLastName}</label>
                    <div className="md:col-span-2">
                        <input type="text" className={inputClass} />
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.dateOfBirth}</label>
                    <div className="md:col-span-2">
                        <input type="date" required className={inputClass} placeholder="dd-MMM-yyyy" />
                    </div>
                </div>

                {/* Country of Birth */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.countryOfBirth}</label>
                    <div className="md:col-span-2">
                        <select className={inputClass}>
                            <option value="">- {lang === 'es' ? 'Seleccionar' : 'Select'} -</option>
                            <option value="Mexico">Mexico</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Phone */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.phone}</label>
                    <div className="md:col-span-2 relative">
                        {/* Simple mockup for the flag part if needed, sticking to standard input for resilience */}
                        <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                📞
                            </span>
                            <input type="tel" required className={`${inputClass} rounded-l-none`} placeholder="+1 555-555-5555" />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.email}</label>
                    <div className="md:col-span-2">
                        <input type="email" required className={inputClass} />
                    </div>
                </div>

                {/* Age */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.age}</label>
                    <div className="md:col-span-2">
                        <input type="number" min="5" max="99" required className={inputClass} placeholder="##" />
                    </div>
                </div>

                {/* Current Grade */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.currentGrade}</label>
                    <div className="md:col-span-2">
                        <select className={inputClass}>
                            <option value="">- {lang === 'es' ? 'Seleccionar' : 'Select'} -</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                            <option value="12">Grade 12</option>
                            <option value="graduated">Graduated</option>
                        </select>
                    </div>
                </div>

                {/* High School Grad Year */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.gradYear}</label>
                    <div className="md:col-span-2">
                        <input type="text" className={inputClass} placeholder="YYYY" />
                    </div>
                </div>

                {/* Intake Year */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.intakeYear}</label>
                    <div className="md:col-span-2">
                        <input type="text" className={inputClass} placeholder="YYYY" />
                    </div>
                </div>

                {/* Language Level */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.languageLevel} {targetLangLabel}?</label>
                    <div className="md:col-span-2">
                        <select className={inputClass}>
                            <option value="">- {lang === 'es' ? 'Seleccionar' : 'Select'} -</option>
                            <option value="A1">A1 (Beginner)</option>
                            <option value="A2">A2 (Elementary)</option>
                            <option value="B1">B1 (Intermediate)</option>
                            <option value="B2">B2 (Upper Intermediate)</option>
                            <option value="C1">C1 (Advanced)</option>
                            <option value="C2">C2 (Proficient)</option>
                            <option value="Native">Native</option>
                        </select>
                    </div>
                </div>

                {/* Source */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.source}</label>
                    <div className="md:col-span-2">
                        <input type="text" className={inputClass} />
                    </div>
                </div>

                {/* Financial Support */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-start">
                    <label className={labelClass}>{content.fields.financialSupport}</label>
                    <div className="md:col-span-2">
                        <input type="text" className={inputClass} placeholder={lang === 'es' ? 'Si/No' : 'Yes/No'} />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transform transition hover:-translate-y-0.5"
                    >
                        {content.cta}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        {lang === 'fr' ? "Vos données sont sécurisées." :
                            lang === 'es' ? "Sus datos están seguros." :
                                "Your data is secure."}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ProgramForm;
