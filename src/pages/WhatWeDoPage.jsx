import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    title: "Internet Marketing",
    summary: "Integration of proven strategies to get your website in front of ideal customers.",
    details: "Our comprehensive digital marketing strategies combine SEO, PPC, content marketing, and social media to create a cohesive online presence that drives conversions and builds brand authority across all digital channels.",
    icon: "📈"
  },
  {
    title: "Search Engine Optimization",
    summary: "Much more than targeting the right keywords to reach your audience.",
    details: "We employ technical SEO audits, content optimization, and authoritative link-building strategies to improve your organic search rankings and drive qualified traffic that converts into customers.",
    icon: "🔍"
  },
  {
    title: "Web Design",
    summary: "Whether you need to optimize your current site or build one to engage customers.",
    details: "Conversion-focused web design that blends aesthetics with functionality. We create responsive, user-friendly websites with intuitive navigation, fast load times, and clear calls-to-action.",
    icon: "💻"
  },
  {
    title: "Local SEO",
    summary: "Increase visibility for businesses targeting geographically modified keywords.",
    details: "We optimize your Google My Business profile, manage local citations, and implement location-specific content strategies to dominate local search results and drive foot traffic.",
    icon: "📍"
  },
  {
    title: "Paid Search",
    summary: "PPC advertising that specifically targets your ideal audience.",
    details: "Strategic PPC campaigns on Google Ads and Microsoft Advertising that maximize your budget through precise targeting, compelling ad copy, and continuous optimization to improve quality scores.",
    icon: "💰"
  },
  {
    title: "Automation",
    summary: "Efficient communication with current and potential customers.",
    details: "We implement marketing automation tools that nurture leads, personalize customer journeys, and streamline repetitive tasks—from email sequences to chatbots—freeing you to focus on high-value interactions.",
    icon: "⚙️"
  },
  {
    title: "Multimedia Services",
    summary: "High-quality photos, graphics, and videos for your digital presence.",
    details: "Our creative team produces professional photography, engaging explainer videos, infographics, and interactive media that tell your brand story and capture audience attention across all platforms.",
    icon: "🎬"
  },
  {
    title: "Content Development",
    summary: "Custom copy and visuals to stand out among competitors.",
    details: "Data-driven content strategies that address your audience's pain points at each stage of the buyer's journey, from blog posts to case studies optimized for both readers and search engines.",
    icon: "✍️"
  },
  {
    title: "Social Media",
    summary: "Reach your customers where they're already active online.",
    details: "Platform-specific social media strategies that build authentic engagement, from organic content calendars to targeted advertising campaigns and influencer partnerships that amplify your brand's reach.",
    icon: "📱"
  }
];

const WhatWeDoPage = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="pt-40 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-gray-20">
      <div className="max-w-7xl mx-auto"> {/* Increased max-width */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-red-600">Comprehensive</span> Services
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We offer end-to-end digital solutions tailored to your business goals and designed to deliver measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              isOpen={openCard === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 group">
            Get Started Today
            <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoPage;