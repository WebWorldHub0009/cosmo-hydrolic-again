// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/showcase/g1.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="relative w-full py-8 md:py-8  overflow-hidden">
      {/* SVG Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L0 0 0 60"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <circle cx="200" cy="300" r="100" fill="url(#glowGradient)" />
        <circle cx="800" cy="700" r="150" fill="url(#glowGradient)" />
      </svg>
      <div className="mb-3">
        <h1 className="text-center"> 
          About Cosmo Hydrolic 
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Driving <span className="text-blue-400">Innovation</span> in{" "}
            <span className="text-black">Hydraulic Solutions</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">Cosmo Hydraulic Industries</span>, 
            we specialize in delivering precision-engineered products like{" "}
            <span className="text-blue-400 font-medium">hydraulic pumps, steel pipes, fasteners, and heavy machinery parts</span>. 
            With years of expertise, we provide solutions that power industries across construction, 
            automotive, oil & gas, and manufacturing.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to combine durability with innovation—offering 
            <span className="font-medium"> superior performance, long-lasting reliability, and cutting-edge designs</span>. 
            Whether you need custom hydraulic systems or industrial-grade materials, 
            Cosmo ensures premium quality and customer satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 text-gray-900 font-semibold rounded-full border border-gray-300 hover:border-blue-400 hover:text-blue-400 transition transform hover:-translate-y-1"
            >
              View More
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-80 md:h-[450px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-blue-400/20">
            <img
              src={aboutImg}
              alt="Cosmo Hydraulic Industries"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-black/70 text-white px-5 py-3 rounded-xl shadow-md backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wide text-blue-400">
                Since 2012
              </p>
              <h3 className="text-lg md:text-xl font-bold">13+ Years of Excellence</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
