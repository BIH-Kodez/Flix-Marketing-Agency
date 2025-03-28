import React from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
      {/* Optimized Heading - Reduced CLS */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          <span className="text-red-500">WE CREATE</span> INTERNET{' '}
          <span className="block sm:inline">MARKETING <span className="text-red-500">RESULTS.</span></span>
        </h1>
      </motion.div>

      {/* Performance-optimized paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="max-w-xl"
      >
        <p className="text-lg md:text-xl mb-6">
          Why do organizations choose FLIX to manage their organic digital marketing?
        </p>
        <p className="text-lg md:text-xl mb-8">
          Listen to one of our clients discuss their unique partnership with FLIX.
        </p>
      </motion.div>

      {/* Button with size constraints */}
      <motion.a
        href="#"
        className="flex items-center bg-transparent border-2 border-white text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200 text-sm md:text-base"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Watch client testimonial"
      >
        <FaPlayCircle className="mr-2 flex-shrink-0" />
        WATCH TESTIMONIAL
      </motion.a>
    </div>
  );
};

export default React.memo(Hero);


