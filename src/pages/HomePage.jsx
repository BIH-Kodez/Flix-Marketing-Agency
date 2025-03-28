// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import Testimonials from "../components/Testimonials";
import KnowledgeSection from '../components/KnowledgeSection';
import TeamSection from '../components/TeamSection';
import SuccessSection from '../components/SuccessSection';
import ServicesSection from '../components/ServicesSection';
import ROIContactSection from '../components/ROIContactSection';

const HomePage = () => {
  return (
    <>
      {/* Hero Section - now with proper video container */}
      <div className="video-container">
        <HeroVideo />
        <Hero />
      </div>
      <Testimonials />
      <KnowledgeSection />
      <TeamSection />
      <SuccessSection />
      <ServicesSection />
      <ROIContactSection />
    </>
  );
};

export default HomePage;