import React from 'react';
import { FaArrowRight, FaChartLine, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Team member data
const teamMembers = [
  { name: "Sarah Johnson", role: "CEO & Founder", bio: "Digital marketing visionary with 15+ years experience" },
  { name: "Michael Chen", role: "CTO", bio: "Tech innovator specializing in scalable solutions" },
  { name: "David Rodriguez", role: "SEO Director", bio: "Search engine optimization expert" },
  { name: "Emily Wilson", role: "Content Strategist", bio: "Storyteller who crafts compelling narratives" },
  { name: "James Peterson", role: "PPC Specialist", bio: "Paid advertising maestro with ROI focus" },
  { name: "Lisa Nguyen", role: "Social Media Manager", bio: "Brand builder across digital platforms" },
  { name: "Robert Kim", role: "Data Analyst", bio: "Turns numbers into actionable insights" },
  { name: "Olivia Martinez", role: "UX Designer", bio: "Creates seamless user experiences" },
  { name: "Thomas Baker", role: "Developer Lead", bio: "Full-stack wizard with marketing focus" },
  { name: "Sophia Williams", role: "Account Manager", bio: "Client success champion" },
  { name: "Daniel Lee", role: "Growth Hacker", bio: "Rapid scaling specialist" },
  { name: "Emma Davis", role: "Creative Director", bio: "Brand identity expert" },
  { name: "Christopher Brown", role: "Email Marketer", bio: "Conversion-focused campaign strategist" },
  { name: "Ava Garcia", role: "Video Producer", bio: "Visual storytelling professional" },
  { name: "Matthew Taylor", role: "Marketing Strategist", bio: "Omnichannel campaign architect" }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const WhoWeAre = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      className="pt-40 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section (unchanged from previous) */}
        <div className="text-center mb-20 relative">
          <motion.div 
            variants={itemVariants}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          />
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative"
          >
            We Generate <span className="text-red-600">Results</span>
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto"
          >
            At Clix, we understand the importance of attracting <span className="font-semibold text-gray-800">relevant visitors</span> to your website.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We integrate <span className="font-semibold text-gray-800">proven strategies</span> with <span className="font-semibold text-gray-800">affordable pricing</span> to get your website in front of your ideal customers.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a 
              href="#difference" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group"
              aria-label="See how we are different"
            >
              SEE HOW WE ARE DIFFERENT 
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Value Proposition (unchanged from previous) */}
        <motion.div 
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 mb-24"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-100 rounded-lg mr-4">
                <FaHandshake className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Your Partner in Growth
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              We don't just work for you - we work with you. Transparent communication, rapid response times, and shared ownership of your business goals are at our core.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Data-Driven Approach
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Every decision is backed by quantifiable metrics. We continuously measure, analyze, and optimize to ensure your message reaches the right audience at the right time.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials (unchanged from previous) */}
        <motion.div 
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-2xl mb-24 text-white relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
            <div className="text-center italic text-2xl font-medium text-red-300">
              "Clix transformed our online presence completely"
            </div>
          </div>
        </motion.div>

        {/* Enhanced Team Section */}
        <motion.div 
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Meet The Minds Behind Clix
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Our team combines decades of experience in digital marketing, technology, and business growth to deliver exceptional results.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-16"
          />
          
          {/* Responsive Team Grid */}
          <motion.div 
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{ 
                  y: -10,
                  backgroundColor: "#ef4444", // bg-red-500
                  color: "#ffffff" // text-white
                }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                  {/* Placeholder for team member image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-100">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium mb-3 group-hover:text-white transition-colors">
                  {member.role}
                </p>
                <p className="text-gray-600 mt-auto group-hover:text-white transition-colors">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAre;