import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

// Import images from /src/assets/images/testimonials
import testimonial1 from "../assets/images/testimonials/testimonial1.jpg";
import testimonial2 from "../assets/images/testimonials/testimonial2.jpg";
import testimonial3 from "../assets/images/testimonials/testimonial3.jpg";
import testimonial4 from "../assets/images/testimonials/testimonial4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Dexter Whitney & Jasen Jones",
    company: "Old Kinderhook",
    image: testimonial1,
  },
  {
    id: 2,
    name: "Tamara Keefe",
    company: "Clementine's Naughty & Nice Creamery",
    image: testimonial2,
  },
  {
    id: 3,
    name: "Eric Schneider",
    company: "StraightUp Solar",
    image: testimonial3,
  },
  {
    id: 4,
    name: "Chris Britt",
    company: "Helibacon",
    image: testimonial4,
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 md:px-12">
      <motion.h2
        className="text-3xl md:text-4xl text-white font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Internet Marketing & Web Design Company in St. Louis
      </motion.h2>

      <motion.p
        className="text-red-500 text-center font-semibold mb-10 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        More kind words from Clix's partners
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            aria-labelledby={`testimonial-${testimonial.id}-title`}
          >
            {/* Image with optimized loading and aspect ratio */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src={testimonial.image}
                alt={`${testimonial.name} from ${testimonial.company}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={400}
                height={500}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
                aria-hidden="true"
              />
            </div>

            {/* Testimonial Content - Moved lower with padding-bottom */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 text-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mb-3 flex items-center border-2 border-white px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition opacity-0 group-hover:opacity-100"
                aria-label={`Watch testimonial from ${testimonial.name}`}
              >
                <FaPlayCircle className="mr-2" aria-hidden="true" />
                Watch Testimonial
              </motion.button>

              <h3 
                id={`testimonial-${testimonial.id}-title`}
                className="text-white text-lg font-bold mb-1"
              >
                {testimonial.company}
              </h3>
              <p className="text-white text-sm">
                {testimonial.name}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Testimonials);



