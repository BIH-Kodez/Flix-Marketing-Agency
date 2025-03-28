import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ service, isOpen, onClick }) => {
  return (
    <motion.div 
      className={`overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200 group ${isOpen ? 'border-red-500' : ''}`}
      initial={false}
      animate={{ 
        height: isOpen ? 'auto' : '280px',
      }}
      whileHover={{ 
        backgroundColor: '#ef4444', // bg-red-500
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="p-8 h-full flex flex-col group-hover:text-white">
        {/* Always visible summary section */}
        <div className="flex items-start mb-4">
          <span className="text-3xl mr-4 group-hover:text-white">{service.icon}</span>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white">{service.title}</h3>
            <p className="text-gray-600 text-lg group-hover:text-white">{service.summary}</p>
          </div>
        </div>

        {/* Expandable details section */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.2, ease: "easeIn" }
              }}
              className="mt-4"
            >
              <div className="pt-4 border-t border-gray-200 group-hover:border-gray-300">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed group-hover:text-white">{service.details}</p>
                <button 
                  className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-200 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button at bottom */}
        <button 
          onClick={onClick}
          className="mt-auto self-end focus:outline-none"
          aria-expanded={isOpen}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-2xl group-hover:text-white"
          >
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;