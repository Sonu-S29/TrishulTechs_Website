import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const services = [
  'Web Development',
  'Website Redesigning',
  'Digital Marketing',
  'Management Solutions',
  'Social Media Handling',
  'Custom Email Designing',
  'Virtual Visiting Cards',
  'API Integration',
  'Other'
];

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - TrishulTechs';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a project in mind? Get in touch with our team to discuss how we can help bring your ideas to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <SectionTitle
                title="Get in Touch"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
              />
              
              {isSubmitted ? (
                <motion.div 
                  className="glass-card text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-success bg-opacity-10 p-4 rounded-full">
                      <CheckCircle size={48} className="text-success" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
                  <p className="text-gray-700 mb-6">Your message has been sent successfully. We'll get back to you shortly.</p>
                  <Button 
                    variant="primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-error' : 'border-gray-300'} focus:outline-none focus:border-primary`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-error' : 'border-gray-300'} focus:outline-none focus:border-primary`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-error' : 'border-gray-300'} focus:outline-none focus:border-primary`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="text-error text-sm mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-error' : 'border-gray-300'} focus:outline-none focus:border-primary`}
                      placeholder="Tell us about your project"
                    ></textarea>
                    {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⟳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="w-full lg:w-1/3">
              <SectionTitle
                title="Contact Information"
                subtitle="Feel free to reach out to us through any of these channels"
              />
              
              <div className="space-y-6">
                <motion.div
                  className="glass-card flex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full h-min mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
                    <a href="mailto:info@trishultechs.com" className="text-gray-700 hover:text-primary transition-colors duration-300">info@trishultechs.com</a>
                  </div>
                </motion.div>
                
                <motion.div
                  className="glass-card flex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full h-min mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                    <a href="tel:+12345678901" className="text-gray-700 hover:text-primary transition-colors duration-300">+1 (234) 567-890</a>
                  </div>
                </motion.div>
                
                <motion.div
                  className="glass-card flex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full h-min mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
                    <p className="text-gray-700">123 Tech Street, Web Valley<br />Digital City, 12345</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gradient-to-b from-white to-secondary-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Location"
            subtitle="Find us on the map"
            centered
          />
          
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537.754898142222!2d72.85402144999999!3d19.156841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b343fa868b%3A0xe4b6ee87244783bc!2sCama%20Industrial%20Estate%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1748671441859!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TrishulTechs Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our services"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">What services do you offer?</h3>
                <p className="text-gray-700">We offer a wide range of digital services including web development, website redesigning, digital marketing, management solutions, social media handling, custom email designing, and virtual visiting cards.</p>
              </motion.div>
              
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">How long does it take to complete a project?</h3>
                <p className="text-gray-700">Project timelines vary based on complexity and requirements. A simple website may take 2-4 weeks, while complex web applications or extensive marketing campaigns might take several months. We provide detailed timelines during the project planning phase.</p>
              </motion.div>
              
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">What is your pricing structure?</h3>
                <p className="text-gray-700">Our pricing is based on project requirements, complexity, and timeline. We offer different packages for various services, and can also provide custom quotes tailored to your specific needs. Please contact us for a detailed estimate.</p>
              </motion.div>
              
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">Do you provide ongoing support after project completion?</h3>
                <p className="text-gray-700">Yes, we offer various maintenance and support packages to ensure your website or application continues to function optimally. These include regular updates, security monitoring, content updates, and technical support.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;