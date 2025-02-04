import React from 'react';
import FounderBio from '../components/FounderBio';

const founders = [
  {
    name: 'Mauricio Carrillo',
    role: 'Co-Founder',
    imageUrl: '/Images/Mauricio.png',
    bio: 'After studying in Ireland, France, Australia and Germany, I understood: I\'m a traveler. Meeting people, going on adventures, and learning from different cultures have become my passion.\n\nFor the last 5 years, I\'ve helped thousands of international students from all around the world find a home in Mexico. Kindness goes a long way.'
  },
  {
    name: 'Benjamin Egretaud',
    role: 'Co-Founder',
    imageUrl: '/Images/benjamin.jpg',
    bio: 'Having experienced coming to Monterrey as an international student, I understood first hand a service like Sherpa Living was needed. The risk of falling victim to a scam can potentially ruin your entire semester when you are on a tight budget.\n\nHaving someone you can rely on, who understands your situation makes all the difference in the world, and that is what we want to be for upcoming students. Not just a housing service but a community who can welcome you and help you have the best semester of your life.'
  }
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-100 py-24 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&w=1920&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1haXNvbnxlbnwwfHwwfHx8MA%3D%3D)',
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
          <h1 className="text-6xl font-extrabold font-serif text-gray-800">
            Your Home Away From Home
          </h1>
          <p className="mt-6 text-2xl text-gray-600">
            Welcome to Sherpa Living, your trusted partner in finding safe and secure housing for international students in Mexico.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-gray-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-700">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 font-serif">Our Mission</h2>
            <p>
              After five years of helping thousands of international students from all around the world successfully transition to their new life in Mexico, our deep understanding of the difficulties faced by students—including language barriers, potential scams, and misleading advertisements—gave us the required insights and experience to offer an integral service catering to international students’ particular needs.
            </p>
            <p className="mt-4">
              At Sherpa Living, we understand the unique challenges and risks involved in renting a place in a new country. Our mission is to provide peace of mind by offering reliable and easy-to-navigate housing solutions, ensuring that your transition to life in Mexico is as smooth and stress-free as possible.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531346964807-212929d6126a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9zc2llcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Mission"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlbWlufGVufDB8fDB8fHww"
              alt="Journey"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-gray-700">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 font-serif">Our Journey</h2>
            <p>
              If there is something travelers like us can agree on, it’s how hard it is to say goodbye. How your heart will never be truly complete anymore, but at the same time, is bigger than ever, holding cherished memories and unforgettable bonds.
            </p>
            <p className="mt-4">
              Studying abroad is a transformative experience, one of the best of your life, but it doesn’t come without complications: language barriers, cultural shock, a million requirements, and risks. It is also a significant financial investment and requires commitment. There will be times when you might feel lost, lonely, or confused, and we know this firsthand.
            </p>
            <p className="mt-4">
              We created an organization dedicated to helping international students through this transition. We’ve helped them with all sorts of things, from airport pickups, buddy programs, hospital visits, abusive landlords, personal emergencies, insurance claims, recommendations, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 text-center bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
          <h2 className="text-5xl font-bold text-blue-800 mb-4 font-serif">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is to create a global network of support for anyone transitioning to a new country. We aim to be the leading provider of housing and relocation services for international students and expatriates, known for our commitment to safety, personalized attention, and comprehensive support. By expanding our reach and continuously improving our services, we strive to make the world a more accessible and welcoming place for everyone pursuing opportunities abroad.
          </p>
        </div>
      </section>

      {/* Values Section */}
<section className="py-16 px-8 bg-gradient-to-r from-gray-50 to-gray-200">
  <h2 className="text-4xl font-extrabold text-center mb-12 font-serif text-gray-800">
    Our Values
  </h2>
  <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <li className="flex items-center bg-white p-6 rounded-lg shadow-md">
      <img src="/Images/Hand.png" alt="Safety" className="w-20 h-20 mr-6 self-center" />
      <div>
        <h3 className="font-bold text-lg text-gray-800">Safety:</h3>
        <p className="text-gray-600">
          We prioritize the safety and security of our clients by thoroughly vetting all housing options and providing reliable information to ensure peace of mind.
        </p>
      </div>
    </li>

    <li className="flex items-center bg-white p-6 rounded-lg shadow-md">
      <img src="/Images/Personnalized1.png" alt="Personalized Attention" className="w-20 h-20 mr-6 self-center" />
      <div>
        <h3 className="font-bold text-lg text-gray-800">Personalized Attention:</h3>
        <p className="text-gray-600">
          We believe in offering tailored support to meet the unique needs of each individual. Our team is dedicated to providing personalized care and constant updates throughout the entire process. No bots, no answering machines.
        </p>
      </div>
    </li>

    <li className="flex items-center bg-white p-6 rounded-lg shadow-md">
      <img src="/Images/Integrity1.png" alt="Integrity" className="w-32 h-32 mr-6 self-center" />
      <div>
        <h3 className="font-bold text-lg text-gray-800">Integrity:</h3>
        <p className="text-gray-600">
          We operate with honesty and transparency, ensuring that our clients have accurate information and can trust us to act in their best interests.
        </p>
      </div>
    </li>

    <li className="flex items-center bg-white p-6 rounded-lg shadow-md">
      <img src="/Images/Excellence1.png" alt="Excellence" className="w-32 h-32 mr-6 self-center" />
      <div>
        <h3 className="font-bold text-lg text-gray-800">Excellence:</h3>
        <p className="text-gray-600">
          We are committed to maintaining high standards in everything we do, from the quality of our housing options to the level of support we provide.
        </p>
      </div>
    </li>

  </ul>
</section>


      {/* Founders Section */}
<section className="py-16 px-8 bg-white">
  <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Founders</h2>
  
  {/* Center the founders' cards */}
  <div className="flex flex-wrap justify-center gap-8">
    {founders.map((founder, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
        <FounderBio {...founder} />
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default About;
