import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CaseStudyCard = ({ study }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200 h-full"
      whileHover={{ 
        backgroundColor: '#ef4444',
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-8 h-full flex flex-col group-hover:text-white">
        <div className="flex-1">
          <span className="text-sm font-semibold text-red-600 group-hover:text-red-200 mb-2 block">
            {study.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4">
            {study.title}
          </h3>
          <p className="text-gray-600 group-hover:text-white mb-6">
            {study.summary}
          </p>
        </div>
        
        <div className="border-t border-gray-200 group-hover:border-gray-300 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 group-hover:text-white text-sm">
              {study.results}
            </span>
            <button className="inline-flex items-center text-red-600 font-semibold group-hover:text-white transition-colors">
              View Case Study
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Client logo overlay */}
      <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {study.clientLogo && (
          <img 
            src={study.clientLogo} 
            alt={study.client} 
            className="h-16 object-contain"
          />
        )}
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;