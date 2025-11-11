import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactBg from "../assets/c.jpg"; // Replace with your background image

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* Pulsing Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <div className="p-5 bg-[#3b82f6]/20 rounded-full border border-blue-900 shadow-lg animate-pulse">
            <FaPhoneAlt className="md:text-4xl text-3xl text-[#07398a]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900"
        >
          Let’s Connect Today
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-black max-w-2xl mx-auto text-lg"
        >
          Whether you need hydraulic fittings, custom solutions, or technical assistance,  
          Cosmo Hydraulic Industries is just a call or message away.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+918587044434"
            className="flex items-center justify-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#2563eb] transition-all duration-300"
          >
            <FaPhoneAlt className="text-lg" /> Call Now
          </a>
          <a
            href="mailto:Info@cosmohydraulic.com"
            className="flex items-center justify-center gap-2 bg-transparent border border-[#3b82f6] text-[#3b82f6] px-6 py-3 rounded-full font-medium hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
          >
            <FaEnvelope className="text-lg" /> Send Message
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
