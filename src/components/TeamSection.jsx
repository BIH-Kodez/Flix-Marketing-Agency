import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUsers } from "react-icons/fa";
import teamImage from "../assets/images/team/team-collab.jpg";

const TeamSection = React.memo(() => {
  return (
    <section className="flex flex-col md:flex-row items-stretch min-h-[500px]">
      {/* Left - Optimized Image Section */}
      <motion.div
        className="w-full md:w-1/2 h-[500px] md:h-auto relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ 
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <img
          src={teamImage}
          alt="Team collaborating at a table"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent md:hidden" />
      </motion.div>

      {/* Right - Optimized Content Section */}
      <motion.div
        className="w-full md:w-1/2 bg-red-600 text-white flex flex-col justify-center p-8 sm:p-12 md:p-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ 
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
          Marketing Is A Team Sport
        </h2>

        <div className="w-14 h-1 bg-white mb-6 rounded-full" aria-hidden="true" />

        <div className="space-y-5 text-base sm:text-lg leading-relaxed">
          <p>
            We'll tell you right up front that you're going to hear from a lot of
            people, but there's a good reason for it: your campaign gets our
            entire team's attention.
          </p>

          <p>
            Everyone at Flix has their own specialty, so{" "}
            <strong className="font-semibold">
              every aspect of your campaign is handled by the appropriate expert.
            </strong>{" "}
            In fact, that's another reason why we insist on a comprehensive
            strategy.
          </p>

          <p>
            We're ready to start working—take a minute to learn more about our
            team and our Internet marketing services.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <motion.a
            href="#team"
            className="border-2 border-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-lg flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Meet the team"
          >
            MEET THE TEAM <FaUsers className="ml-2.5" aria-hidden="true" />
          </motion.a>

          <motion.a
            href="#contact"
            className="border-2 border-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-lg flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Contact us"
          >
            DROP US A LINE <FaPaperPlane className="ml-2.5" aria-hidden="true" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
});

export default TeamSection;
