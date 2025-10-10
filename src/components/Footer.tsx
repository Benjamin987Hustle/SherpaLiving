import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@sherpaliving.com">contact@sherpaliving.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+49 (174) 8168174 </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Monterrey Nuevo Leon, Mexico</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/living" className="hover:text-blue-400">Sherpa Living</a></li>
              <li><a href="/study" className="hover:text-blue-400">Sherpa Study</a></li>
              <li><a href="/work-with-us" className="hover:text-blue-400">Work With Us</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Sherpa Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
