import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    name: 'SKP Classes',
    company: 'Education',
    quote: 'TrishulTechs transformed our online presence with a user-friendly website that has significantly improved student engagement. Their team was professional and delivered beyond our expectations.',
    rating: 5
  },
  {
    name: 'Vedika Singh',
    company: 'Fashion Designer',
    quote: 'Working with TrishulTechs on our digital marketing campaign was a game-changer for my business. Their strategic approach helped us reach our target audience effectively.',
    rating: 5
  },
  {
    name: 'Dharmesh Yadav',
    company: 'Restaurant Owner',
    quote: 'The website and social media management services provided by TrishulTechs have been instrumental in growing our online presence. Highly recommended!',
    rating: 5
  },
  {
    name: 'Digiaffix',
    company: 'Digital Agency',
    quote: 'TrishulTechs developed a custom solution for our business that has streamlined our operations. Their technical expertise and dedication were impressive.',
    rating: 5
  },
  {
    name: 'Om Rewale',
    company: 'Startup Founder',
    quote: 'Outstanding service and support from the TrishulTechs team. They helped us establish a strong digital foundation for our startup.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialPerPage);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, [pageCount]);
  
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  };
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialPerPage,
    (currentPage + 1) * testimonialPerPage
  );

  return (
    <section className="section bg-gradient-to-b from-secondary-light to-white">
      <div className="container-custom">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="Don't just take our word for it - here's what our clients have to say"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${currentPage}-${index}`}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {pageCount > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full glass hover:bg-primary-light hover:bg-opacity-10 transition-colors duration-300"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentPage ? 'bg-primary' : 'bg-primary bg-opacity-30'
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full glass hover:bg-primary-light hover:bg-opacity-10 transition-colors duration-300"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;