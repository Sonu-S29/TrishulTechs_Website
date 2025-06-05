import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import TechStack from '../components/ui/TechStack';
import CtaSection from '../components/sections/CtaSection';

interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 'skp-classes',
    title: 'SKP Classes Website',
    client: 'SKP Classes',
    description: 'A comprehensive learning management system with student portal, online course delivery, and attendance tracking.',
    image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'education'
  },
  {
    id: 'fitness-hub',
    title: 'Fitness Hub Management',
    client: 'PowerFit Gym',
    description: 'Complete gym management solution with membership tracking, workout plans, and attendance system.',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600',
    technologies: ['React', 'Firebase', 'Material UI'],
    category: 'fitness'
  },
  {
    id: 'retail-plus',
    title: 'RetailPlus POS',
    client: 'Metro Mart',
    description: 'Modern point of sale system with inventory management and sales analytics.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    category: 'retail'
  },
  {
    id: 'property-connect',
    title: 'PropertyConnect Portal',
    client: 'Skyline Builders',
    description: 'Property management system for real estate developers with project tracking and client management.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'real-estate'
  },
  {
    id: 'restaurant-os',
    title: 'RestaurantOS',
    client: 'Spice Garden',
    description: 'Restaurant management system with order processing, kitchen display, and inventory management.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    technologies: ['React', 'Firebase', 'Node.js'],
    category: 'hospitality'
  },
  {
    id: 'fashion-store',
    title: 'Fashion Store',
    client: 'Style Studio',
    description: 'E-commerce platform for fashion retail with inventory management and order processing.',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'e-commerce'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'education', name: 'Education' },
  { id: 'fitness', name: 'Fitness' },
  { id: 'retail', name: 'Retail' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'e-commerce', name: 'E-commerce' }
];

const technologies = [
  'React', 'Node.js', 'MongoDB', 'Firebase', 'PostgreSQL',
  'Express', 'Material UI', 'Redux', 'TypeScript', 'AWS'
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    document.title = 'Our Projects - TrishulTechs';
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary-dark to-primary">
        <div className="container-custom text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our portfolio of successful projects across various industries and technologies.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="Featured Projects"
            subtitle="A showcase of our best work across different industries"
            centered
          />
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'glass hover:bg-primary hover:bg-opacity-10'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group h-[400px] perspective-1000"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-full transition-transform duration-1000 transform-style-3d hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 glass rounded-xl overflow-hidden backface-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">Client: {project.client}</p>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="absolute inset-0 glass rounded-xl p-6 backface-hidden rotate-y-180">
                    <div className="h-full flex flex-col">
                      <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                      <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary bg-opacity-10 rounded-full text-sm text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-700">No projects found in this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Technology Stack */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <SectionTitle 
            title="Technologies We Use" 
            subtitle="We leverage the best technologies to build robust and scalable solutions"
            centered
            className="text-white [&>h2]:text-white [&>p]:text-white [&>p]:opacity-80"
          />
          
          <TechStack technologies={technologies} />
        </div>
      </section>
      
      <CtaSection />
    </div>
  );
};

export default Projects;