import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background overlay with glassmorphism effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          filter: "blur(1px)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-black/50"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Innovative Web Solutions to Boost Your Business
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-secondary-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We create stunning websites and digital experiences that help businesses establish a strong online presence and achieve their goals.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/services">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Our Services <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="glass" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#FFFFFF">
          <path fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;