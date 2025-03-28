import React from "react";
import { FaMapMarkerAlt, FaPhone, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">ABOUT CLIX</h3>
            <p className="text-lg leading-relaxed">
              Clix is an internet marketing and web design agency based in St. Louis, MO. 
              We specialize in comprehensive internet marketing strategies that drive growth 
              for businesses around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">USEFUL LINKS</h3>
            <ul className="space-y-3">
              {['Internet Marketing', 'Meet the Team', 'Testimonials', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-red-500">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">LOCATIONS</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">St. Louis Headquarters</p>
                  <p>Lorem Ipsum Tu Pico</p>
                  <p>St. Louis, MO 63101</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-red-500 flex-shrink-0" />
                <a href="tel:3142222582" className="hover:text-white transition-colors">
                  (314) 222-2222
                </a>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">CERTIFICATIONS</h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <p className="font-medium">Google Ads Certified</p>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <p className="font-medium">Bing Ads Accredited</p>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <p className="font-medium">HubSpot Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Flix. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Internet Marketing Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;