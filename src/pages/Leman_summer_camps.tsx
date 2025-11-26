import React from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Globe, Award, Zap, Anchor, Star } from 'lucide-react';

const LemanSummerCamps: React.FC = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-cdl-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">COLLÈGE DU LÉMAN</h1>
          <a href="#inscription" className="px-4 py-2 bg-cdl-red hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition duration-300">
            S'inscrire
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-96 md:h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://placehold.co/1200x600/004c99/ffffff?text=%20"
          alt="Enfants faisant une expérience scientifique au Camp d'Été"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 text-center p-6 bg-cdl-blue/80 rounded-xl shadow-2xl max-w-4xl mx-4 text-white">
          <p className="text-xl md:text-2xl font-light mb-2">Genève, Suisse</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Un Été Suisse Inoubliable pour Votre Enfant
          </h2>
          <p className="text-lg md:text-xl font-medium mb-6">
            Camp de Jour et Pensionnat pour les <span className="text-cdl-accent font-bold">8-18 ans</span>.
          </p>
          <a href="#inscription" className="inline-block px-8 py-4 text-lg font-bold bg-cdl-red rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-xl">
            Découvrez les Sessions 2026
          </a>
        </div>
      </div>

      {/* Create Your Perfect Summer */}
      <section className="py-16 px-4 md:py-24 md:px-16 bg-cdl-light">
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-cdl-blue">Créez Votre Été Parfait</h3>
          <p className="text-xl text-gray-600 mb-8">
            Cet été, votre enfant pourra naviguer sur le Lac Léman, perfectionner ses talents de pâtissier avec un chef, découvrir de nouveaux sports, apprendre une nouvelle langue, ou même lancer sa propre startup. Avec 10 activités matinales et 17 après-midis au choix, chaque session est unique, remplie de <span className="font-semibold">découverte, de défi et de joie</span>.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 md:py-24 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cdl-blue">Explorez les Possibilités</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Morning Activities */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-cdl-blue">
              <h4 className="text-2xl font-bold mb-4 text-cdl-blue flex items-center">
                <Zap className="w-6 h-6 mr-2 text-cdl-accent" />
                Les Matins Inspirés (Focus Apprentissage)
              </h4>
              <p className="text-lg font-medium mb-4">Mouvements, curiosité et créativité. Les cours de langues durent deux semaines complètes.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Langues:</span> Anglais ou Français (Immersion)</li>
                <li><span class="font-semibold">STEM & Innovation:</span> Labo Scientifique, Robotique, Programmation Informatique, Créer sa Startup</li>
                <li><span class="font-semibold">Créativité:</span> Arts, MasterChef Dessert</li>
                <li><span class="font-semibold">Sports:</span> Multi-Sports (Football, Basketball, Natation), Badminton</li>
              </ul>
            </div>

            {/* Afternoon Activities */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-cdl-red">
              <h4 className="text-2xl font-bold mb-4 text-cdl-blue flex items-center">
                <Anchor className="w-6 h-6 mr-2 text-cdl-accent" />
                Les Après-midis d'Action (Focus Aventure)
              </h4>
              <p className="text-lg font-medium mb-4">Énergie, découverte et aventure.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Activités Nautiques:</span> Stand-up Paddle, Canoë</li>
                <li><span className="font-semibold">Sports & Fitness:</span> Champions League (Foot), Fitness, Multi-Sports</li>
                <li><span className="font-semibold">Créativité:</span> Danse, Théâtre, Artisanat</li>
                <li><span className="font-semibold">Innovation & Tech:</span> Aventure Drone, Labo VR, Futurs Leaders</li>
              </ul>
            </div>
          </div>

          {/* Premium Options */}
          <div className="mt-12 text-center bg-cdl-blue/10 p-6 rounded-xl border border-cdl-blue/20">
            <h4 className="text-2xl font-bold mb-4 text-cdl-blue">Options Premium (Supplément)</h4>
            <p className="text-lg text-gray-700 mb-4">Améliorez vos après-midis avec des activités uniques pour un été inoubliable :</p>
            <div className="flex flex-wrap justify-center gap-4 text-cdl-blue font-semibold">
              <span className="px-3 py-1 bg-white rounded-full shadow-md border border-cdl-blue/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">🏌️ Golf</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-md border border-cdl-blue/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">🐎 Équitation</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-md border border-cdl-blue/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">⛵ Voile</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-md border border-cdl-blue/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">🎾 Tennis</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-md border border-cdl-blue/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">🏄 Wakeboard sur le Lac Léman</span>
            </div>
            <p className="mt-4 text-base italic text-cdl-red">Supplément : CHF 800 par semaine pour les options Premium.</p>
          </div>
        </div>
      </section>

      {/* Sessions & Rates */}
      <section className="py-16 px-4 md:py-24 md:px-16 bg-cdl-blue text-white" id="tarifs">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cdl-accent">Sessions et Tarifs 2026</h3>
          <p className="text-center text-lg mb-6">
            Chaque session dure 2 semaines. Choisissez une session ou combinez-en plusieurs pour une expérience estivale prolongée. <span className="font-semibold">Pensionnat (Boarding) ou Externe (Day Camp) disponibles.</span>
          </p>

          <div className="overflow-x-auto rounded-lg shadow-2xl">
            <table className="min-w-full bg-white text-gray-800">
              <thead className="bg-cdl-red text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider rounded-tl-lg">Session</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Dates 2026</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold uppercase tracking-wider">Pensionnat</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold uppercase tracking-wider rounded-tr-lg">Externe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap font-medium text-cdl-blue">Session 1</td>
                  <td className="px-4 py-4 whitespace-nowrap">28 juin - 11 juillet 2026</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right font-bold">CHF 6,830</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">CHF 3,360</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap font-medium text-cdl-blue">Session 2</td>
                  <td className="px-4 py-4 whitespace-nowrap">12 juillet - 25 juillet 2026</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right font-bold">CHF 6,830</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">CHF 3,360</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap font-medium text-cdl-blue">Session 3</td>
                  <td className="px-4 py-4 whitespace-nowrap">26 juillet - 8 août 2026</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right font-bold">CHF 6,830</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">CHF 3,360</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-sm italic opacity-80">
            Tarifs pour deux semaines. Les activités Premium impliquent un supplément de CHF 800 par semaine. Les activités sont indicatives et sujettes à modification.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 md:py-24 md:px-16 bg-cdl-light">
        <div className="container mx-auto max-w-3xl text-center">
          <Star className="mx-auto mb-4 text-cdl-red w-10 h-10" />
          <blockquote className="text-2xl italic font-serif leading-relaxed text-gray-700">
            "Notre fille a adoré son séjour au Camp d'été. Elle est rentrée plus confiante, plus indépendante, et avec des amis du monde entier avec qui elle est toujours en contact."
          </blockquote>
          <cite className="mt-4 block text-lg font-semibold text-cdl-blue">- Un Parent du Camp d'Été du CDL</cite>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 md:py-24 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-10 text-cdl-blue">Votre Expérience Suisse</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Advantage 1 */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-2 border-cdl-accent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-cdl-red" />
              <h4 className="text-xl font-bold mb-2 text-cdl-blue">Localisation Privilégiée</h4>
              <p className="text-gray-600">Situé à Versoix, à proximité de l'aéroport international de Genève, offrant un cadre magnifique et sécurisé au bord du Lac Léman.</p>
            </div>
            {/* Advantage 2 */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-2 border-cdl-accent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Calendar className="w-10 h-10 mx-auto mb-3 text-cdl-red" />
              <h4 className="text-xl font-bold mb-2 text-cdl-blue">Sessions Personnalisées</h4>
              <p className="text-gray-600">Sessions de 2 semaines à la carte. Choisissez le format Pensionnat (2 ou 4 semaines) ou Externe selon vos besoins.</p>
            </div>
            {/* Advantage 3 */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-2 border-cdl-accent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Globe className="w-10 h-10 mx-auto mb-3 text-cdl-red" />
              <h4 className="text-xl font-bold mb-2 text-cdl-blue">Voyage en Suisse (Optionnel)</h4>
              <p className="text-gray-600">Terminez l'expérience avec une semaine d'aventure supplémentaire, explorant les merveilles de la Suisse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Contact */}
      <section className="bg-cdl-red/90 text-white py-16 px-4 md:py-24 md:px-16" id="inscription">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à Rejoindre l'Aventure ?</h3>
          <p className="text-xl mb-8 font-light">
            Les places se remplissent rapidement. Réservez la place de votre enfant dès aujourd'hui.
          </p>

          <a href="mailto:camps@cdl.ch" className="inline-block px-10 py-4 text-xl font-bold bg-white text-cdl-red rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-xl mr-4 mb-4">
            S'inscrire Maintenant
          </a>
          <a href="#tarifs" className="inline-block px-10 py-4 text-xl font-bold border-2 border-white rounded-full hover:bg-white hover:text-cdl-red transition duration-300 transform hover:scale-105 shadow-xl mb-4">
            Voir les Tarifs
          </a>

          <div className="mt-10 pt-6 border-t border-white/30">
            <p className="text-lg font-semibold mb-2">Informations de Contact</p>
            <p className="mb-1">📧 <a href="mailto:camps@cdl.ch" className="hover:underline">camps@cdl.ch</a></p>
            <p className="mb-1">📞 <a href="tel:+41227755595" className="hover:underline">+41 (0) 22 775 55 95</a></p>
            <p className="text-sm mt-3 opacity-70">Visitez notre site web pour le programme complet : cdl.ch/camps</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cdl-blue text-white py-4">
        <div className="container mx-auto text-center text-sm opacity-80">
          &copy; 2024 Collège du Léman - International School. Genève.
        </div>
      </footer>
    </div >
  );
};

export default LemanSummerCamps;
