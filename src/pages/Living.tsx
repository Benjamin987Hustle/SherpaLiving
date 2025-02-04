import React from 'react';
import { Shield, Users, ClipboardCheck, Search } from 'lucide-react';
import Hero from '../components/Hero';

const Living = () => {
  return (
    <div>
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
        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80"
                alt="International Students Housing" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <Search className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="text-xl font-bold mb-2">International Students Housing</h3>
              <p className="text-gray-600">Find verified housing options tailored for international students.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                alt="Property Verification" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <ClipboardCheck className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="text-xl font-bold mb-2">Property Verification</h3>
              <p className="text-gray-600">Every property is thoroughly verified for your peace of mind.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80"
                alt="Housing Report" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <Shield className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="text-xl font-bold mb-2">Housing Report</h3>
              <p className="text-gray-600">Detailed reports on properties and neighborhoods.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Roommate Finder" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <Users className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="text-xl font-bold mb-2">Roommate Finder</h3>
              <p className="text-gray-600">Connect with compatible roommates in your area.</p>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How Does It Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80"
                alt="Browse Listings"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Browse Listings</h3>
              <p className="text-gray-600">Explore our verified properties and find your perfect match.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
                alt="Book a Viewing"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Book a Viewing</h3>
              <p className="text-gray-600">Schedule virtual or in-person viewings at your convenience.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                alt="Secure Your Home"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Secure Your Home</h3>
              <p className="text-gray-600">We'll guide you through the entire rental process.</p>
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
