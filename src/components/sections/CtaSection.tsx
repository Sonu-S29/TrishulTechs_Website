import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-80 backdrop-blur-sm"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Partner with TrishulTechs to create innovative web solutions that will help your business grow. Let's start building your digital success story today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button 
                variant="glass" 
                size="lg"
                className="border-white hover:bg-white hover:bg-opacity-20"
              >
                Get Started Now <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;