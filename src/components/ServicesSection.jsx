import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaSearch, FaAd, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaChartLine className="text-3xl text-red-600 group-hover:text-white transition-colors" />,
    title: "Strategic Digital Marketing",
    description: "Our comprehensive digital marketing solutions combine data-driven strategies with creative execution to maximize your online visibility and conversions. We tailor campaigns to your unique business objectives.",
    cta: "Explore Marketing Solutions"
  },
  {
    id: 2,
    icon: <FaSearch className="text-3xl text-red-600 group-hover:text-white transition-colors" />,
    title: "Advanced SEO Services",
    description: "Go beyond basic keyword targeting with our holistic SEO approach. We optimize technical infrastructure, content strategy, and backlink profiles for sustainable organic growth and top rankings.",
    cta: "Boost Your Search Rankings"
  },
  {
    id: 3,
    icon: <FaAd className="text-3xl text-red-600 group-hover:text-white transition-colors" />,
    title: "Precision PPC Advertising",
    description: "Our pay-per-click campaigns deliver targeted traffic through strategic bid management and conversion optimization. We maximize ROI while minimizing wasted ad spend.",
    cta: "Get More Qualified Leads"
  },
  {
    id: 4,
    icon: <FaLaptopCode className="text-3xl text-red-600 group-hover:text-white transition-colors" />,
    title: "Conversion-Focused Web Design",
    description: "We build high-performing websites that blend aesthetic appeal with technical excellence. Our designs prioritize user experience, accessibility, and measurable results.",
    cta: "See Our Design Portfolio"
  }
];

const ServiceSection = React.memo(() => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-red-600">Digital Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full" aria-hidden="true" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Elite digital marketing integrates proven methodologies with innovative strategies, technical expertise, and a client-first approach to deliver measurable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-red-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="mr-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow group-hover:text-white transition-colors">
                  {service.description}
                </p>
                
                <motion.a
                  href="#"
                  className="mt-auto inline-flex items-center text-red-600 font-semibold group-hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={service.cta}
                >
                  {service.cta}
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ServiceSection;

