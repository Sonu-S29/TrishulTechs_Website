import React from 'react';
import { Star } from 'lucide-react';
import GlassCard from './GlassCard';

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  quote,
  rating,
  delay = 0,
}) => {
  return (
    <GlassCard className="h-full flex flex-col" delay={delay}>
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={index < rating ? "fill-warning text-warning" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">"{quote}"</p>
      <div className="mt-auto">
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;