import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "../assets/afac.jpg"; // your background image

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden text-white/40 font-[Poppins]">
      {/* Background Image */}
      <img
        src={bg}
        alt="Cosmo Hydraulic Industries"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Blue + Black Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-16"
      >
        {/* Left Heading */}
        <div className="text-left md:w-1/2 space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            The <span className="text-blue-900">#1 Hydraulic</span> Experts.
            <br />
            The next generation of{" "}
            <span className="text-blue-900">Engineering.</span>
            <br />
            One powerful <span className="text-blue-900">industrial suite.</span>
          </h1>
        </div>

        {/* Right Subtext */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-gray-300">
          <p className="text-sm md:text-base leading-relaxed border-l border-gray-400 pl-4">
            At <span className="font-semibold text-white">Cosmo Hydraulic Industries</span>, 
            we bring next-gen hydraulic technology crafted with precision, power, 
            and performance — redefining industrial standards with advanced 
            engineering and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <Link
              to="/services"
              className="px-6 py-2 border border-white rounded-md text-sm font-semibold hover:bg-blue-900 hover:border-blue-900 transition-all duration-300"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-white text-blue-900 rounded-md text-sm font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Subtle Light Sweep Animation */}
      <motion.div
        className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12"
        animate={{ x: ["-50%", "50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
