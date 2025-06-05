import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  delay = 0,
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-3 opacity-90">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <Link to="#" className="inline-flex items-center text-sm font-medium hover:underline">
            View Project <ExternalLink size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;