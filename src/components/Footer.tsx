import React from 'react';
import { Link } from 'react-router-dom';
import { Indent as Trident, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="TrishulTechs Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">TrishulTechs</span>
            </Link>
            <p className="mb-6 text-secondary-light opacity-80">
              Innovative web solutions to boost your business with cutting-edge technology and creative designs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-secondary transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-secondary transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-secondary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-secondary-light opacity-80">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3 text-secondary-light opacity-80">
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Website Redesigning</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Management Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Social Media Handling</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-secondary-light">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, Web Valley, Digital City, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+12345678901" className="hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@trishultechs.com" className="hover:text-white transition-colors duration-300">info@trishultechs.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-secondary-light opacity-20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light opacity-80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TrishulTechs. All rights reserved.
          </p>
          <div className="text-sm text-secondary-light opacity-80 flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;