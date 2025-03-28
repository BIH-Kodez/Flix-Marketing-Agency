import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine } from "react-icons/fa";

const ROIContactSection = React.memo(() => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold">
            <FaChartLine className="mr-2" />
            ROI FOCUSED
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Transform</span> Your ROI?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Let's discuss how we can optimize your digital marketing strategy for maximum returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-4 text-lg font-semibold text-white rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              aria-label="Contact us to improve your ROI"
            >
              <span className="relative z-10 flex items-center">
                CONTACT OUR TEAM <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#cases"
              className="group relative overflow-hidden border-2 border-white/20 hover:border-white/40 px-8 py-4 text-lg font-semibold text-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              aria-label="View our case studies"
            >
              <span className="relative z-10 flex items-center">
                SEE CASE STUDIES <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ROIContactSection;