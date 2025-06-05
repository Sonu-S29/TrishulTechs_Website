import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, BarChart, ArrowRight, Smartphone, Paintbrush, Mail, MessageSquare } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites tailored to your specific needs with responsive design for optimal viewing on any device.'
  },
  {
    icon: Paintbrush,
    title: 'Website Redesigning',
    description: 'Transform your outdated website into a modern, user-friendly digital asset that converts visitors to customers.'
  },
  {
    icon: BarChart,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to increase your online visibility and drive targeted traffic.'
  },
  {
    icon: Smartphone,
    title: 'Social Media Handling',
    description: 'Strategic social media management to build your brand presence and engage with your audience effectively.'
  },
  {
    icon: Mail,
    title: 'Custom Email Designing',
    description: 'Eye-catching email templates that represent your brand and drive engagement for your campaigns.'
  },
  {
    icon: MessageSquare,
    title: 'Virtual Visiting Cards',
    description: 'Digital business cards with clickable links to make networking seamless in the digital age.'
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-secondary-light">
      <div className="container-custom">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer comprehensive digital solutions to help your business thrive in the online world."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services">
            <Button variant="primary" className="inline-flex items-center">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;