import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPaperPlane, FaChevronRight } from "react-icons/fa";

const steps = [
  {
    id: 1,
    number: 1,
    title: "Discovery & Onboarding",
    description: "We align with your mission, audit your current efforts, and create a customized strategy built around your goals.",
    iconColor: "bg-red-100 text-red-600"
  },
  {
    id: 2,
    number: 2,
    title: "Goals & KPIs",
    description: "We help define your key performance indicators (KPIs) and success metrics based on what matters most to your business.",
    iconColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    number: 3,
    title: "Audience Research",
    description: "We identify personas, demographics, and buying behavior to ensure messaging resonates with your target market.",
    iconColor: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    number: 4,
    title: "Strategic Roadmap",
    description: "We craft a comprehensive digital marketing plan to guide campaigns, timelines, and optimization cycles.",
    iconColor: "bg-purple-100 text-purple-600"
  },
  {
    id: 5,
    number: 5,
    title: "Team Collaboration",
    description: "Our team works alongside yours with transparent reporting, feedback loops, and shared success metrics.",
    iconColor: "bg-yellow-100 text-yellow-600"
  },
  {
    id: 6,
    number: 6,
    title: "Data-Driven Reporting",
    description: "We track, report, and pivot based on performance data to continuously improve results and ROI.",
    iconColor: "bg-indigo-100 text-indigo-600"
  },
];

const SuccessSection = React.memo(() => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-10 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -ml-32 -mb-32" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left: Content - Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-10"
          >
            <div className="mb-2 text-sm font-semibold text-red-600 uppercase tracking-wider">
              Proven Process
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Success</span> Together
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-8 rounded-full" aria-hidden="true" />

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Digital marketing thrives on <strong className="font-semibold text-gray-800">transparency, strategy, and true partnership</strong>. 
                We don't just execute campaigns—we align with your vision to drive meaningful business outcomes.
              </p>

              <p>
                Our methodology ensures every initiative is <strong className="font-semibold text-gray-800">data-driven, measurable, and ROI-focused</strong>. 
                From initial consultation to ongoing optimization, we're with you at every milestone.
              </p>

              <p>
                Ready to elevate your digital presence? <strong className="font-semibold text-gray-800">Let's create your success story.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.a
                href="#services"
                className="group relative overflow-hidden border-2 border-gray-800 px-6 py-3.5 text-sm font-semibold rounded-lg flex items-center justify-center hover:text-white transition-all"
                whileHover={{ 
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
                aria-label="Explore our services"
              >
                <span className="relative z-10 flex items-center">
                  OUR SERVICES <FaSearch className="ml-3" />
                </span>
                <span className="absolute inset-0 bg-gray-800 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-semibold text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
                aria-label="Contact our team"
              >
                <span className="relative z-10 flex items-center">
                  START TODAY <FaPaperPlane className="ml-3" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Steps - Creative Redesign */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                whileHover={{ 
                  y: -3,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="group relative overflow-hidden bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-start gap-5">
                  <div className={`${step.iconColor} w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-lg font-bold`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <FaChevronRight className="ml-1.5 text-xs" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SuccessSection;