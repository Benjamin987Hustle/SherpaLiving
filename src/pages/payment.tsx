import React, { useState, useEffect } from 'react';

// 1. Définition des constantes de prix et de liens Stripe - MODIFIÉE pour les zones
const BASE_FEE = 73;

// Prices par zone
const ZONE_PRICES: { [key: string]: { [key: number]: number } } = {
  tec: { 0: 0, 1: 25, 2: 35, 3: 45 },
  udem: { 0: 0, 1: 35, 2: 45, 3: 55 }
};

// Stripe links par zone
const STRIPE_LINKS: { [key: string]: { [key: number]: string } } = {
  tec: {
    0: "https://buy.stripe.com/7sY28tgwE45VcuJb8ycfK01",
    1: "https://buy.stripe.com/aFa28ta8gfOD8etekKcfK03",
    2: "https://buy.stripe.com/5kQdRb3JSeKzdyNekKcfK06",
    3: "https://buy.stripe.com/7sYbJ3a8g1XNfGV5OecfK07"
  },
  udem: {
    0: "https://buy.stripe.com/7sY28tgwE45VcuJb8ycfK01",
    1: "https://buy.stripe.com/9B63cx0xG6e38et3G6cfK08",
    2: "https://buy.stripe.com/7sY14p4NW31RamBb8ycfK09",
    3: "https://buy.stripe.com/9B68wR1BK9qf0M17WmcfK0a"
  }
};

const Payment: React.FC = () => {
    // 2. Gestion de l'état avec la zone sélectionnée
    const [selectedZone, setSelectedZone] = useState<string>('tec');
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [pickupPrice, setPickupPrice] = useState<number>(ZONE_PRICES['tec'][0]);
    const [totalPrice, setTotalPrice] = useState<number>(BASE_FEE + ZONE_PRICES['tec'][0]);
    const [finalLink, setFinalLink] = useState<string>(STRIPE_LINKS['tec'][0]);
    
    // 3. Fonction pour changer la zone
    const selectZone = (zone: string) => {
        setSelectedZone(zone);
        setSelectedOption(0); // Réinitialiser l'option de transfert
        const newPickupPrice = ZONE_PRICES[zone][0];
        const newTotalPrice = BASE_FEE + newPickupPrice;
        setPickupPrice(newPickupPrice);
        setTotalPrice(newTotalPrice);
        setFinalLink(STRIPE_LINKS[zone][0]);
    };

    // 4. Logique de sélection du transfert
    const selectOption = (qty: number) => {
        const newPickupPrice = ZONE_PRICES[selectedZone][qty];
        const newTotalPrice = BASE_FEE + newPickupPrice;
        const newFinalLink = STRIPE_LINKS[selectedZone][qty];

        setSelectedOption(qty);
        setPickupPrice(newPickupPrice);
        setTotalPrice(newTotalPrice);
        setFinalLink(newFinalLink);
    };

    // 5. Définir le texte du résumé
    const getPickupLabel = (qty: number) => {
        if (qty === 0) return "Airport Transfer (None)";
        if (qty === 1) return "Airport Transfer (1 Person)";
        return `Airport Transfer (Group of ${qty})`;
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            
            <header className="mb-8 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Secure Your Accommodation <span className="text-sherpa-blue">&amp; Get Ready</span>
                </h1>
                <p className="mt-2 text-gray-600 text-lg">Finalize your file to guarantee your booking.</p>
            </header>

            {/* NOUVEAU : Sélecteur de zone */}
            <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Where is your university located?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => selectZone('tec')}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                            selectedZone === 'tec'
                                ? 'border-sherpa-blue bg-blue-50 text-sherpa-blue'
                                : 'border-gray-200 bg-white text-gray-700 hover:border-sherpa-blue'
                        }`}
                    >
                        🏫 TEC Zone
                    </button>
                    <button
                        onClick={() => selectZone('udem')}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                            selectedZone === 'udem'
                                ? 'border-sherpa-blue bg-blue-50 text-sherpa-blue'
                                : 'border-gray-200 bg-white text-gray-700 hover:border-sherpa-blue'
                        }`}
                    >
                        🏫 UDEM Zone
                    </button>
                </div>
            </div>

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
                                    { qty: 0, title: "No thanks", subtitle: "I'll manage alone", badge: null },
                                    { qty: 1, title: "Solo", subtitle: "1 person", badge: null },
                                    { qty: 2, title: "Duo", subtitle: "2 people", badge: null },
                                    { qty: 3, title: "Trio", subtitle: "3 people", badge: "Best Deal" }
                                ].map(({ qty, title, subtitle, badge }) => {
                                    const price = ZONE_PRICES[selectedZone][qty];
                                    return (
                                        <div 
                                            key={qty}
                                            className={`option-card rounded-xl p-4 cursor-pointer bg-white relative 
                                                ${selectedOption === qty ? 'selected' : ''}`}
                                            onClick={() => selectOption(qty)}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center gap-3">
                                                    <div id={`radio-${qty}`} className="radio-circle w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
                                                    <div>
                                                        <span className="block font-bold text-gray-800">
                                                            {title} 
                                                            {badge && (
                                                                <span className={`text-xs px-1 rounded ml-1 text-green-600 bg-green-100`}>
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
                                    );
                                })}
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
                                <span>Zone</span>
                                <span className="font-medium uppercase">{selectedZone}</span>
                            </div>
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

                        <a id="main-cta" href={finalLink} className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1">
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
                        <span id="mobile-total" className="text-xl font-extrabold text-blue-600">{totalPrice}€</span>
                    </div>
                    <a id="mobile-cta" href={finalLink} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg">Pay Now</a>
                </div>
            </div>

            {/* --- Terms and Conditions (small) --- */}
            <section className="mt-6 mb-12 max-w-6xl mx-auto px-4">
              <details className="bg-white border border-gray-100 rounded-lg p-4 text-sm text-gray-700">
                <summary className="font-semibold cursor-pointer">Terms and Conditions of Service – Airport Pickup (Sherpa Living)</summary>
                <div className="mt-3 space-y-3">
                  <p>These terms govern the "Airport Pickup" service provided by Sherpa Living. By booking this service, the client agrees to the following conditions.</p>

                  <div>
                    <strong>1. Service Description</strong>
                    <p className="mt-1">Sherpa Living agrees to provide private or shared transport service from the airport to the client's residence or any other agreed-upon location.</p>
                  </div>

                  <div>
                    <strong>2. Booking and Availability</strong>
                    <p className="mt-1"><strong>Availability Guarantee:</strong> To guarantee vehicle availability, the service must be requested at least 48 hours in advance. Requests made with less than 48 hours' notice are subject to driver availability and cannot be guaranteed.</p>
                    <p><strong>Procedure:</strong> Following the booking request, a link to a Google Form will be sent to the client via email.</p>
                    <p><strong>Required Information:</strong> This form is used to collect essential details (flight number, arrival time, number of bags, destination address).</p>
                    <p><strong>Client Commitment:</strong> The client agrees to fill out this form as soon as they have all their travel details. The successful execution of the service depends on the accuracy of this data.</p>
                  </div>

                  <div>
                    <strong>3. Rates and Payment</strong>
                    <p className="mt-1">The rate is fixed and determined in advance based on the destination. Full payment is made securely via Stripe. The booking is confirmed once payment is received.</p>
                  </div>

                  <div>
                    <strong>4. Flight Delays and Waiting Time</strong>
                    <p className="mt-1">Flight Tracking: We track flight status in real-time to adjust the pickup time.</p>
                    <p>No Late Fees: In the event of a flight delay or an extended wait at customs and immigration, no additional costs will be charged. The driver will wait for the client's arrival at no extra charge.</p>
                  </div>

                  <div>
                    <strong>5. Cancellation and Refund</strong>
                    <p className="mt-1"><strong>Cancellation by the Client:</strong></p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>More than 48 hours before scheduled arrival: Full refund (100%).</li>
                      <li>Less than 48 hours before scheduled arrival: No refund will be issued.</li>
                    </ul>
                    <p className="mt-1"><strong>Service Failure (Sherpa Living):</strong> If the driver does not show up or if a technical issue attributable to Sherpa Living prevents the service from being carried out, Sherpa Living agrees to fully refund the trip to the client.</p>
                  </div>

                  <div>
                    <strong>6. Luggage</strong>
                    <p className="mt-1">Quantity: The client must respect the number of bags indicated in the Google Form so that we can provide a suitable vehicle.</p>
                    <p>Oversized Luggage: Any bulky items (instruments, trunks, bicycles) must be declared via the form.</p>
                  </div>

                  <div>
                    <strong>7. Meeting Point</strong>
                    <p className="mt-1">The driver will wait for the client at International Arrivals holding a sign. If the client has trouble finding the driver, they are invited to use the airport's free Wi‑Fi to contact the provided emergency number (WhatsApp: [Number]).</p>
                  </div>

                  <div>
                    <strong>8. Liability</strong>
                    <p className="mt-1">Sherpa Living strives to ensure transport but cannot be held liable for consequences related to force majeure events (complete road closures, extreme storms) that physically prevent access to the airport or traffic circulation.</p>
                  </div>
                </div>
              </details>
            </section>
        </div>
    );
};

export default Payment;