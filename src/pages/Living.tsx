import React from 'react';
import { Shield, Users, ClipboardCheck, Search, Sparkles, UtensilsCrossed, Plane, Languages } from 'lucide-react';
import Hero from '../components/Hero';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Living = () => {
  const services = [
    {
      title: "International Students Housing",
      description: "Find verified housing options tailored for international students.",
      icon: <Search className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80"
    },
    {
      title: "Property Verification",
      description: "Every property is thoroughly verified for your peace of mind.",
      icon: <ClipboardCheck className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
    },
    {
      title: "Housing Report",
      description: "Detailed reports on properties and neighborhoods.",
      icon: <Shield className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80"
    },
    {
      title: "Roommate Finder",
      description: "Connect with compatible roommates in your area.",
      icon: <Users className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
    },
    {
      title: "Cleaning Services",
      description: "Professional cleaning services to keep your living space spotless.",
      icon: <Sparkles className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
    },
    {
      title: "Meal Plans",
      description: "Flexible meal plans with local and international cuisine options.",
      icon: <UtensilsCrossed className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80"
    },
    {
      title: "Airport Pick-up",
      description: "Reliable transportation service from the airport to your new home.",
      icon: <Plane className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
    },
    {
      title: "Translation & Mediation",
      description: "Professional translation and mediation services to help you navigate.",
      icon: <Languages className="h-6 w-6 text-blue-600 mb-2" />,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    }
  ];

  const swiperStyles = {
    '.swiper': {
      padding: '20px 0',
    },
    '.swiper-button-next, .swiper-button-prev': {
      color: '#2563eb !important',
    },
    '.swiper-pagination-bullet-active': {
      background: '#2563eb !important',
    }
  };

  return (
    <div>
      <style>
        {`
          .swiper {
            padding: 20px 0;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #2563eb !important;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important;
          }
        `}
      </style>

      <Hero
        title="Sherpa Living Services"
        subtitle="Your trusted partner in finding the perfect home abroad"
        imageUrl="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80"
      >
        <a
          href="https://creatorapp.zohopublic.ca/sherpaliving/landlords-appartemnt/form-perma/Student_Request/pu2kVvQyaX16sFx9V07fUkPYKFF7rEUEUvO1x2tTxZDswbE38aP09AD7XVB3TE50AXatB4mf3pOeW0dUqP8NMy5nuQtrZzh7bUnq" // URL to navigate to
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice for external links
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Get Started
        </a>
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section avec Carrousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                  <img 
                    src={service.image}
                    alt={service.title} 
                    className="w-full h-40 object-cover rounded-lg mb-4" 
                  />
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How Does It Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="/Images/fill_forms.png"
                alt="Fill in the form"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Fill in the Form</h3>
              <p className="text-gray-600">Tell us your preferences and requirements for your ideal home.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/Images/Live_video_tour.png"
                alt="Live Video Tour"
                className="w-full h-48 object-cover rounded-lg mb-4 object-[center_30%]" // Retrait de scale-110
              />
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Live Video Property Tour</h3>
              <p className="text-gray-600">Take a real-time virtual tour of your selected properties.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/Images/secure_home.png"  // Le chemin doit correspondre exactement à la structure des dossiers
                alt="Secure Your Home"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Secure Your Home</h3>
              <p className="text-gray-600">We'll handle all the paperwork and make your move-in smooth.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "I had a lot of problems with my first landlords and appartment, I had to leave it in the first months. Fortunately, the team at Sherpa stepped in and made the impossible happen—finding me a new apartment in less than 48 hours. Their swift and supportive response turned a stressful situation into a comfortable and enjoyable living experience for the rest of my stay. I can't thank them enough!"
              </p>
              <p className="font-bold">"Paul"</p>
              <p className="text-sm text-gray-500">"Switzerland Jan-July 2024"</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "I came to study abroad here in Monterrey for one semester, so I had to find a place to live. At first, it was difficult to find a place because we didn't have much information. It's complicated to take a flat that you haven't visited and is on the other side of the world. Also, the university didn't really help us with this. At one point, I was thinking of going without any apartment and finding one when I arrived. But then, I found Mauricio's contact, and he introduced me to his work with Sherpa Living. They helped me a lot to find the place I'm living in now, and everything was easy thanks to them. I'm very happy to have found them because, thanks to them, I'm having a great experience here, and I met my roommates through them."
              </p>
              <p className="font-bold">"Oscar"</p>
              <p className="text-sm text-gray-500">"France Jan-Jun 2024"</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "Moving to a country as distant and different from Europe as Mexico was initially overwhelming. Thanks to Sherpa, I didn't have to worry about the complexities of finding housing. They not only quickly secured a fantastic apartment for me but also handled the contract details, making the process incredibly stress-free. This saved me so much time! Thanks to Sherpa's, my transition was smooth and worry-free!"
              </p>
              <p className="font-bold">"Barbara"</p>
              <p className="text-sm text-gray-500">"Czech Republic Jan-Jun 2024"</p>
            </div>

            {/* Nouveau témoignage */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "I had a great experience with Sherpa Living when finding my apartment in Monterrey. Mau was incredibly helpful and made the whole process smooth and stress-free. Not only did he find me a great place, but he also helped me integrate quickly into my new environment. He’s super friendly, funny, and always ready to assist with anything I needed. The apartment itself is really nice, exactly what we were looking for. I highly recommend Sherpa Living to anyone moving to Monterrey."
              </p>
              <p className="font-bold">"Maurice Marti"</p>
              <p className="text-sm text-gray-500">"Switzerland January 2025"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Living;
