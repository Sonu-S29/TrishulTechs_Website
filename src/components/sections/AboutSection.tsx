import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const features = [
  'Expert team with years of industry experience',
  'Cutting-edge technology and innovative solutions',
  'Tailored approaches to meet your specific needs',
  'Focus on user experience and interface design',
  'Ongoing support and maintenance services',
  'Proven track record of successful projects'
];

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary opacity-10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-10 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="TrishulTechs Team" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </motion.div>
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <SectionTitle 
              title="About TrishulTechs"
              subtitle="Building digital experiences that transform businesses since 2018"
            />
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              At TrishulTechs, we specialize in creating innovative web solutions that help businesses establish a strong online presence. Our team of experts combines creativity with technical expertise to deliver outstanding digital experiences that drive results.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-0.5">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/about">
                <Button variant="primary">Learn More About Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;