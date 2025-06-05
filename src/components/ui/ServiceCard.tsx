import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import GlassCard from './GlassCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <GlassCard className="h-full" delay={delay}>
      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </GlassCard>
  );
};

export default ServiceCard;