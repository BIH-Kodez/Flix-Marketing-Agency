import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import { FiArrowRight } from 'react-icons/fi';

const caseStudies = [
    {
      id: 1,
      category: "E-Commerce",
      title: "Boosted Online Sales by 240%",
      client: "Fashion Forward",
      summary: "Transformed an emerging fashion brand's digital presence and tripled revenue in 6 months through targeted social ads and influencer partnerships.",
      results: "240% revenue growth • 180% more traffic • 65% lower CAC",
      duration: "6 month campaign"
    },
    {
      id: 2,
      category: "SaaS",
      title: "From Startup to Market Leader",
      client: "CloudAnalytics",
      summary: "Growth strategy that helped this SaaS platform dominate their niche and secure $15M Series B funding.",
      results: "300% user growth • 5x MRR • 40% lower churn",
      duration: "Ongoing partnership"
    },
    {
      id: 3,
      category: "Healthcare",
      title: "500% Increase in Patient Leads",
      client: "VitalCare Clinics",
      summary: "Local SEO and conversion rate optimization for a healthcare network expanding to new markets.",
      results: "500% more leads • 3.2x ROI • Top 3 local rankings",
      duration: "4 month project"
    },
    {
      id: 4,
      category: "Restaurant",
      title: "Fully Booked 3 Months in Advance",
      client: "Bistro Moderno",
      summary: "Rebranding and digital marketing for a fine dining establishment struggling with visibility.",
      results: "Reservations up 320% • 4.8★ average reviews • $120K saved annually",
      duration: "8 week turnaround"
    },
    {
      id: 5,
      category: "Non-Profit",
      title: "Doubled Donations in 90 Days",
      client: "Green Earth Initiative",
      summary: "Digital storytelling and donor acquisition strategy for environmental non-profit.",
      results: "2x more donations • 400% social shares • 70% email open rate",
      duration: "3 month campaign"
    }
  ];

const CaseStudiesPage = () => {
  return (
    <section className="pt-40 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Success <span className="text-red-600">Stories</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real results from businesses we've helped transform through strategic digital marketing.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 0.77, 0.47, 0.97]
              }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 group">
            See More Case Studies
            <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;