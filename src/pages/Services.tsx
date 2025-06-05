import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, Layout, Paintbrush, BarChart, PieChart, Users, Mail, 
  CreditCard, ChevronRight, CheckCircle, Code, ArrowRight 
} from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    shortDescription: 'Custom websites, responsive designs, and web applications.',
    fullDescription: 'Our web development services include creating custom-built websites, progressive web applications, and responsive designs that work seamlessly across all devices. We use modern frameworks and technologies to ensure your website is fast, secure, and scalable.',
    features: [
      'Custom website development',
      'Responsive design for all devices',
      'E-commerce solutions',
      'Web application development',
      'API integrations',
      'Performance optimization'
    ],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'website-redesign',
    icon: Paintbrush,
    title: 'Website Redesigning',
    shortDescription: 'Modernizing and improving existing websites.',
    fullDescription: 'Our website redesigning services focus on transforming outdated websites into modern, user-friendly digital assets. We analyze your current website, identify areas for improvement, and implement changes that enhance both aesthetics and functionality.',
    features: [
      'UX/UI improvement',
      'Modern design implementation',
      'Content restructuring',
      'Performance enhancement',
      'Mobile responsiveness',
      'Conversion rate optimization'
    ],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'digital-marketing',
    icon: BarChart,
    title: 'Digital Marketing',
    shortDescription: 'SEO, SMO, Google & Facebook Ads, Email Marketing.',
    fullDescription: 'Our comprehensive digital marketing services help businesses increase online visibility and drive targeted traffic. We develop strategies that align with your business goals and deliver measurable results through various digital channels.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Analytics and reporting'
    ],
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'management-solutions',
    icon: PieChart,
    title: 'Management Solutions',
    shortDescription: 'Business management, project tracking, team collaboration.',
    fullDescription: 'Our management solutions help businesses streamline their operations, improve team collaboration, and increase productivity. We offer custom-built tools for various industries including Class Management, Gym Management, Shop Management, and Builder Management Systems.',
    features: [
      'Class Management System',
      'Gym Management System',
      'Shop/Retail Management',
      'Builder Management System',
      'Inventory Management',
      'Team Collaboration Tools'
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'social-media',
    icon: Users,
    title: 'Social Media Handling',
    shortDescription: 'Social media strategy and account management.',
    fullDescription: 'Our social media handling services help businesses establish a strong presence on social platforms, engage with their audience, and build brand awareness. We create and implement comprehensive social media strategies tailored to your business goals.',
    features: [
      'Social media strategy development',
      'Content creation and scheduling',
      'Community management',
      'Social media advertising',
      'Performance analysis',
      'Competitor monitoring'
    ],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'email-design',
    icon: Mail,
    title: 'Custom Email Designing',
    shortDescription: 'Professional email templates for campaigns.',
    fullDescription: 'Our custom email designing services help businesses create professional, branded email templates that drive engagement and conversions. We design responsive emails that look great on all devices and align with your brand identity.',
    features: [
      'Custom email template design',
      'Responsive emails for all devices',
      'Brand-consistent designs',
      'Newsletter templates',
      'Promotional campaign emails',
      'Transactional email templates'
    ],
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'virtual-cards',
    icon: CreditCard,
    title: 'Virtual Visiting Cards',
    shortDescription: 'Digital business cards with clickable links.',
    fullDescription: 'Our virtual visiting card services bring traditional business cards into the digital age. We create interactive digital business cards with clickable links, making networking seamless and efficient in the digital world.',
    features: [
      'Interactive digital business cards',
      'Custom design aligned with brand',
      'Click-to-call, email, and website links',
      'Social media profile integration',
      'Analytics to track engagement',
      'Easy sharing via QR code or link'
    ],
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'api-integration',
    icon: Code,
    title: 'API Integration',
    shortDescription: 'Seamless integration of third-party APIs and services.',
    fullDescription: "We specialize in integrating various APIs and third-party services to enhance your application&apos;s functionality. From payment gateways to social media APIs, we ensure smooth and secure integration.",
    features: [
      'Payment gateway integration',
      'Social media API integration',
      'Custom API development',
      'Third-party service integration',
      'API documentation',
      'Security implementation'
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const servicePackages = [
  {
    title: 'Basic',
    description: 'Essential features for small businesses and startups',
    features: [
      'Professional Website Design',
      'Mobile Responsive',
      'Up to 5 Pages',
      'Basic SEO Setup',
      'Contact Form',
      '3 Rounds of Revisions',
      'Basic Management System'
    ]
  },
  {
    title: 'Advanced',
    description: 'Comprehensive solution for growing businesses',
    popular: true,
    features: [
      'Everything in Basic +',
      'Up to 10 Pages',
      'Advanced SEO Optimization',
      'Blog/News Section',
      'Social Media Integration',
      'Google Analytics Setup',
      'Advanced Management System',
      '5 Rounds of Revisions'
    ]
  },
  {
    title: 'Premium',
    description: 'Complete digital solution for established businesses',
    features: [
      'Everything in Advanced +',
      'Custom Functionalities',
      'E-commerce Capabilities',
      'Content Creation',
      'Monthly Maintenance',
      'Priority Support',
      'Enterprise Management System',
      'Unlimited Revisions'
    ]
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services - TrishulTechs';
  }, []);

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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We offer a wide variety of digital services to help businesses establish a strong online presence and achieve their goals.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="What We Offer"
            subtitle="Comprehensive digital solutions tailored to your business needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={service.id} delay={index * 0.1}>
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                <a href={`#${service.id}`} className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Connect Now Section */}
          <motion.div
            className="mt-12 glass-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-700 mb-6">Let's discuss how we can help you achieve your digital goals.</p>
            <Link to="/contact">
              <Button variant="primary" className="inline-flex items-center">
                Connect Now <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section id={service.id} key={service.id} className={`section ${index % 2 === 0 ? 'bg-gradient-to-b from-white to-secondary-light' : 'bg-gradient-to-b from-secondary-light to-white'}`}>
          <div className="container-custom">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </motion.div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                </div>

                <motion.p
                  className="text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {service.fullDescription}
                </motion.p>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link to="/contact">
                    <Button variant="primary" className="inline-flex items-center">
                      Request a Quote <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Packages */}
      <section className="section bg-gradient-to-b from-white to-secondary-light">
        <div className="container-custom">
          <SectionTitle
            title="Service Packages"
            subtitle="Choose the package that best suits your business needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className={`glass-card relative ${pkg.popular ? 'border-primary border-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-lg font-medium text-primary mb-6">Contact for Pricing</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <Button
                    variant={pkg.popular ? 'primary' : 'outline'}
                    className="w-full inline-flex items-center justify-center"
                  >
                    Get Started <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-12 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Need a custom solution? <Link to="/contact" className="text-primary font-medium hover:underline">Contact us</Link> for a personalized quote.
          </motion.p>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Services;