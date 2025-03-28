import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhone
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { Icon: FaTwitter, label: "Twitter" },
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaPinterestP, label: "Pinterest" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
    { Icon: FaYoutube, label: "YouTube" },
    { Icon: FaInstagram, label: "Instagram" }
  ];

  const navItems = [
    { id: 1, label: "Who We Are", path: "/who-we-are" },
    { id: 2, label: "What We Do", path: "/what-we-do" }, // Updated to full page route
    { id: 3, label: "Case Studies", path: "/case-studies" }, // Consider creating this page too
    { id: 4, label: "Contact Us", path: "/contact" } // Consider creating this page too
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      {/* Top Social Bar - unchanged */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-gray-900 text-white">
        <div className="flex space-x-4">
          {socialLinks.map(({ Icon, label }) => (
            <motion.a
              key={label}
              href="#"
              aria-label={label}
              className="hover:text-red-500 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="text-base" />
            </motion.a>
          ))}
        </div>
        <motion.a 
          href="tel:3142222582"
          className="flex items-center font-medium hover:text-red-500 transition-colors"
          whileHover={{ scale: 1.03 }}
        >
          <FaPhone className="mr-2" />
          314-222-1111
        </motion.a>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/" className="flex items-center space-x-2" aria-label="Home">
              <span className="text-2xl font-bold text-gray-900">FLIX</span>
              <div className="w-3 h-3 border-r-4 border-t-4 border-red-500 rotate-45" />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className="font-medium text-gray-700 hover:text-red-500 px-1 py-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 text-white overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="border-b border-gray-800 pb-3"
                >
                  <Link 
                    to={item.path}
                    className="block py-2 hover:text-red-500 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <div className="flex space-x-4 justify-center">
                  {socialLinks.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="text-white hover:text-red-500 transition-colors"
                    >
                      <Icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default React.memo(Navbar);
