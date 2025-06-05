import React from 'react';
import { motion } from 'framer-motion';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          className="glass px-4 py-2 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;