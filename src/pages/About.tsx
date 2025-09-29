import React from 'react';

// --- Founder Bio Inner Component ---
// To keep the main code clean, we create a specific component for the founder cards.
const FounderBio = ({ name, role, imageUrl, bio }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
    <img 
      className={`w-full h-64 object-cover ${
        name === 'Benjamin Egretaud' 
          ? 'object-[center_20%]' // CORRECTION: Une valeur < 50% remonte le cadrage pour voir le visage
          : 'object-center'      // Position par défaut pour les autres
      }`} 
      src={imageUrl} 
      alt={`Portrait of ${name}`} 
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold font-serif text-gray-800">{name}</h3>
      <p className="text-blue-600 font-semibold">{role}</p>
      {/* The 'whitespace-pre-wrap' class respects line breaks (\n) in your text */}
      <p className="mt-4 text-gray-600 whitespace-pre-wrap">{bio}</p>
    </div>
  </div>
);

// --- Founders Data ---
// Nothing changes here, it's already very good.
const founders = [
  {
    name: 'Mauricio Carrillo',
    role: 'Co-Founder',
    imageUrl: '/Images/Mauricio.png', // Changed to use local image
    bio: 'After studying in Ireland, France, Australia and Germany, I understood: I\'m a traveler. Meeting people, going on adventures, and learning from different cultures have become my passion.\n\nFor the last 5 years, I\'ve helped thousands of international students from all around the world find a home in Mexico. Kindness goes a long way.'
  },
  {
    name: 'Benjamin Egretaud',
    role: 'Co-Founder',
    imageUrl: '/Images/benjamin.jpg', // Changed to use local image
    bio: 'Having experienced coming to Monterrey as an international student, I understood first hand a service like Sherpa Living was needed. The risk of falling victim to a scam can potentially ruin your entire semester when you are on a tight budget.\n\nHaving someone you can rely on, who understands your situation makes all the difference in the world, and that is what we want to be for upcoming students. Not just a housing service but a community who can welcome you and help you have the best semester of your life.'
  }
];

// --- Main About Page Component ---
const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center overflow-hidden">
        {/* IMPROVEMENT: The image is now in an <img> tag for better SEO and accessibility */}
        <img
          src="https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&w=1920&q=80"
          alt="Warm interior of a welcoming home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* IMPROVEMENT: Added a dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative py-32 md:py-48 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-white">
            Your Home Away From Home
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200">
            Welcome to Sherpa Living, your trusted partner in finding safe and secure housing for international students in Mexico.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-700">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 font-serif">Our Mission</h2>
            <p className="mb-4 text-lg">
              After five years of helping thousands of students, our understanding of the unique challenges (language barriers, scam risks) has given us the experience to offer an integral service, tailored to your needs.
            </p>
            <p className="text-lg">
              At Sherpa Living, we want to offer you peace of mind with reliable housing solutions, so that your transition to Mexico is as smooth and stress-free as possible.
            </p>
          </div>
          <div>
            {/* IMPROVEMENT: Replace the stock image with an authentic photo of your team or students */}
            <img
              src="/Images/happy_stud.png" // MISE À JOUR: Utilisation d'une image locale
              alt="Group of smiling international students"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* The order is reversed to vary the layout */}
          <div className="order-last md:order-first">
             <img
              src="/Images/journey.png" // MISE À JOUR: Utilisation d'une image locale
              alt="Map of Mexico with pins symbolizing travel"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-gray-700 order-first md:order-last">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 font-serif">Our Journey</h2>
            <p className="mb-4 text-lg">
              As travelers, we know that every departure is difficult, but the heart grows with every memory. Studying abroad is a transformative experience, but it comes with its share of challenges.
            </p>
            <p className="text-lg">
              Feeling lost, lonely, or confused... we know this firsthand. That's why we created an organization dedicated to helping you through this transition, going far beyond just housing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-16 font-serif text-gray-800">
              Our Core Values
            </h2>
            {/* IMPROVEMENT: Using flexbox for better alignment and spacing */}
            <div className="flex flex-wrap justify-center gap-10">
              
              {/* Value 1: Safety */}
              <div className="flex flex-col items-center text-center max-w-xs p-6">
                 {/* IMPROVEMENT: Using SVG for sharp and consistent icons */}
                <svg className="w-16 h-16 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">Safety</h3>
                <p className="text-gray-600">
                  We prioritize your safety by rigorously vetting all properties to ensure your complete peace of mind.
                </p>
              </div>

              {/* Value 2: Personalized Attention */}
              <div className="flex flex-col items-center text-center max-w-xs p-6">
                <svg className="w-16 h-16 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h4M5 8h2m4 0h2" /></svg>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">Personalized Attention</h3>
                <p className="text-gray-600">
                  No bots, no answering machines. Our team offers you tailored support and constant updates.
                </p>
              </div>

              {/* Value 3: Integrity */}
              <div className="flex flex-col items-center text-center max-w-xs p-6">
                <svg className="w-16 h-16 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty and transparency, ensuring you have accurate information to trust us.
                </p>
              </div>

            </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 md:px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16 font-serif text-gray-800">Our Founders</h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12">
          {founders.map((founder, index) => (
            <FounderBio key={index} {...founder} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;


