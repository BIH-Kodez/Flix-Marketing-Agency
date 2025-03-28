import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import devicesImage from "../assets/images/knowledge/knowledge-devices.jpg";

const KnowledgeSection = React.memo(() => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
        {/* Left Content - Optimized */}
        <motion.div
          className="w-full md:w-1/2 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] // Smoother easing
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Knowledge <span className="text-gray-800">+ Experience</span>
          </h2>

          <div className="w-16 h-1 bg-red-600 mb-6 rounded-full" aria-hidden="true" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-8">
            The 'plus' part is what really matters. In an industry that changes
            by the day, it's essential to have a team who can keep up. From
            staying up to date on news to having the wisdom needed to spot
            digital and web design trends, we do what it takes to put a full
            in-house marketing team at your disposal.
          </p>

          <motion.a
            href="#contact"
            className="mt-7 inline-flex items-center border-2 border-gray-800 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-all hover:bg-red-600 hover:border-red-600 hover:text-white text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(220, 38, 38, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Learn more about Clix"
          >
            Get to know Flix 
            <FaUsers className="ml-2.5" aria-hidden="true" />
          </motion.a>
        </motion.div>

        {/* Right Image - Optimized */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 0.7, 
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <img
            src={devicesImage}
            alt="Website display on desktop, tablet, and mobile"
            className="w-full h-auto rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
            width={720}
            height={540}
          />
        </motion.div>
      </div>
    </section>
  );
});

export default KnowledgeSection;