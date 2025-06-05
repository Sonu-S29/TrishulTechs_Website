import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import TechStack from '../ui/TechStack';

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 
  'PHP', 'Python', 'Java', 'MySQL', 'MongoDB', 
  'WordPress', 'Shopify'
];

const TechStackSection: React.FC = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Technology Stack" 
          subtitle="We use cutting-edge technologies to build robust and scalable solutions"
          centered
          className="text-white [&>h2]:text-white [&>p]:text-white [&>p]:opacity-80"
        />
        
        <TechStack technologies={technologies} />
      </div>
    </section>
  );
};

export default TechStackSection;