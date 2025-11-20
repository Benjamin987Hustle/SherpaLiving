import React, { useState, useEffect } from 'react';
// Si vous utilisez 'Link' de react-router-dom dans ce composant,
// vous devrez l'importer :
// import { Link } from 'react-router-dom';

// 1. Définition des constantes de prix et de liens Stripe
const BASE_FEE = 73; 
const PICKUP_PRICES: { [key: number]: number } = { 0: 0, 1: 35, 2: 60, 3: 80 };
const STRIPE_LINKS: { [key: number]: string } = {
    0: "https://buy.stripe.com/7sY28tgwE45VcuJb8ycfK01",
    1: "https://buy.stripe.com/aFa28ta8gfOD8etekKcfK03",
    2: "https://buy.stripe.com/5kQdRb3JSeKzdyNekKcfK06",
    3: "https://buy.stripe.com/7sYbJ3a8g1XNfGV5OecfK07"
};

const Payment: React.FC = () => {
    // 2. Gestion de l'état de l'option sélectionnée
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [pickupPrice, setPickupPrice] = useState<number>(PICKUP_PRICES[0]);
    const [totalPrice, setTotalPrice] = useState<number>(BASE_FEE + PICKUP_PRICES[0]);
    const [finalLink, setFinalLink] = useState<string>(STRIPE_LINKS[0]);
    
    // 3. Logique de sélection dans une fonction de gestion d'événement
    const selectOption = (qty: number) => {
        const newPickupPrice = PICKUP_PRICES[qty];
        const newTotalPrice = BASE_FEE + newPickupPrice;
        const newFinalLink = STRIPE_LINKS[qty];

        setSelectedOption(qty);
        setPickupPrice(newPickupPrice);
        setTotalPrice(newTotalPrice);
        setFinalLink(newFinalLink);
    };

    // 4. Définir le texte du résumé
    const getPickupLabel = (qty: number) => {
        if (qty === 0) return "Airport Transfer (None)";
        if (qty === 1) return "Airport Transfer (1 Person)";
        return `Airport Transfer (Group of ${qty})`;
    };
    
    // 5. Utiliser useEffect pour initialiser les valeurs (équivalent à window.onload)
    // Nous appelons selectOption(0) uniquement au premier rendu (le tableau vide [])
    // Note: C'est déjà fait avec le useState initialisé à 0, mais laissons-le par clarté.
    // useEffect(() => {
    //     selectOption(0);
    // }, []);

    // Conversion du HTML:
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            
            <header className="mb-8 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Secure Your Accommodation <span className="text-sherpa-blue">& Get Ready</span>
                </h1>
                <p className="mt-2 text-gray-600 text-lg">Finalize your file to guarantee your booking.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                <main className="lg:col-span-2 space-y-6">

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden opacity-90">
                        <div className="p-6 flex items-start justify-between bg-gray-50 border-b border-gray-100">
                            <div className="flex gap-4">
                                <div className="bg-green-100 p-2 rounded-full h-fit">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Sherpa Service Fee</h3>
                                    <p className="text-sm text-green-700 font-medium mt-1">✅ Mandatory for key handover</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-bold text-gray-900">73€</span>
                                <span className="text-xs text-gray-500">for 1 person</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">RECOMMENDED</div>
                        
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                🚌 Option: VIP Airport Transfer
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Certified Sherpa driver. Direct drop-off. No stress.
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50">
                            <label className="block text-sm font-semibold text-gray-700 mb-4">Select your transfer preference:</label>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Les cartes d'options sont converties en composants React */}
                                {[
                                    { qty: 0, title: "No thanks", subtitle: "I'll manage alone", price: 0, badge: null },
                                    { qty: 1, title: "Solo", subtitle: "1 person", price: 35, badge: null },
                                    { qty: 2, title: "Duo", subtitle: "2 people", price: 60, badge: "-10€" },
                                    { qty: 3, title: "Trio", subtitle: "3 people", price: 80, badge: "Best Deal" }
                                ].map(({ qty, title, subtitle, price, badge }) => (
                                    <div 
                                        key={qty}
                                        className={`option-card rounded-xl p-4 cursor-pointer bg-white relative 
                                            ${selectedOption === qty ? 'selected' : ''}`}
                                        onClick={() => selectOption(qty)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                {/* Le cercle radio est stylé via la classe 'selected' dans le CSS global ou importé */}
                                                <div id={`radio-${qty}`} className="radio-circle w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
                                                <div>
                                                    <span className="block font-bold text-gray-800">
                                                        {title} 
                                                        {badge && (
                                                            <span className={`text-xs px-1 rounded ml-1 
                                                                ${qty === 2 ? 'text-green-600 bg-green-100' : 'text-green-600 bg-green-100'}`}
                                                            >
                                                                {badge}
                                                            </span>
                                                        )}
                                                    </span>
                                                    <span className="text-xs text-gray-500">{subtitle}</span>
                                                </div>
                                            </div>
                                            <span className={`font-bold ${qty === 0 ? 'text-gray-400' : 'text-sherpa-blue'}`}>
                                                {qty === 0 ? `+${price}€` : `+${price}€`}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Alerte pour les groupes */}
                            <div id="group-alert" className={`mt-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r fade-in ${selectedOption > 1 ? '' : 'hidden'}`}>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-orange-700 font-bold">Important for Groups:</p>
                                        <p className="text-sm text-orange-700 mt-1">
                                            This payment covers the transport for the whole group, but includes only <strong>1 Sherpa Service Fee (Yours)</strong>.
                                            <br/><span className="text-orange-800 italic">Your roommates must pay their 73€ fee separately (selecting "No thanks" for transfer).</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                {/* Sidebar (Résumé de la commande) */}
                <aside className="hidden lg:block lg:sticky lg:top-8">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Order Summary</h3>
                        
                        <div className="space-y-3 text-sm mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Sherpa Fee (1 Person)</span>
                                <span className="font-medium">73€</span>
                            </div>
                            <div className="flex justify-between text-sherpa-blue font-medium">
                                <span id="summary-pickup-text">{getPickupLabel(selectedOption)}</span>
                                <span id="summary-pickup-price">{selectedOption > 0 ? `+${pickupPrice}€` : "0€"}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-6">
                            <span className="text-lg font-bold text-gray-900">Total to pay</span>
                            <span id="summary-total" className="text-2xl font-extrabold text-sherpa-blue">{totalPrice}€</span>
                        </div>

                        <a id="main-cta" href={finalLink} className="block w-full bg-sherpa-blue hover:bg-sherpa-dark text-white text-center font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1">
                            SECURE MY ACCOMMODATION ➔
                        </a>
                        <p className="text-center text-xs text-gray-400 mt-4">Secure payment via Stripe</p>
                    </div>
                </aside>
            </div>
        
            {/* Barre mobile (bas de page) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div>
                        <span className="text-xs text-gray-500 block">Total to pay</span>
                        <span id="mobile-total" className="text-xl font-extrabold text-sherpa-blue">{totalPrice}€</span>
                    </div>
                    <a id="mobile-cta" href={finalLink} className="bg-sherpa-blue text-white px-6 py-3 rounded-xl font-bold shadow-lg">Pay Now</a>
                </div>
            </div>
        </div>
    );
};

export default Payment;