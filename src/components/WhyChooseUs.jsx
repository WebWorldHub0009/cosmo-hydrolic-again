// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaTools, FaDraftingCompass, FaUsers, FaCrown } from "react-icons/fa";

import img1 from "../assets/images/products/p1.jpg";
import img2 from "../assets/images/products/p2.jpg";
import img3 from "../assets/images/products/p3.jpg";
import img4 from "../assets/images/products/p4.jpg";

import bgOverlay from "../assets/images/sliderbg.jpg";

const reasons = [
  {
    id: 1,
    title: "High-Quality Materials",
    desc: "We use premium-grade steel, alloys, and hydraulic components to ensure unmatched durability.",
    img: img1,
    icon: <FaCogs className="text-[#60A5FA] text-3xl" />,
  },
  {
    id: 2,
    title: "Innovative Technology",
    desc: "Cutting-edge machinery and modern hydraulic solutions designed for Fittings that demand precision.",
    img: img2,
    icon: <FaTools className="text-[#60A5FA] text-3xl" />,
  },
  {
    id: 3,
    title: "Expert Engineering",
    desc: "Our team of skilled engineers and technicians deliver flawless designs and robust manufacturing.",
    img: img3,
    icon: <FaDraftingCompass className="text-[#60A5FA] text-3xl" />,
  },
  {
    id: 4,
    title: "Customer-Centric Service",
    desc: "We prioritize client satisfaction with 24/7 support, on-time delivery, and customized solutions.",
    img: img4,
    icon: <FaUsers className="text-[#60A5FA] text-3xl" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-10 px-6 md:px-8 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgOverlay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Premium Badge - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 right-6 z-20"
      >
        <div className="relative flex mt-5 items-center gap-2 bg-gradient-to-r from-blue-400 to-[#D4AF37] px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 border border-white/20 backdrop-blur-md">
          <FaCrown className="text-white text-xl animate-pulse" />
          <span className="text-white font-[Orbitron] tracking-wide text-sm md:text-base">
            Premium Excellence
          </span>
          {/* Glow Effect */}
          <span className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl animate-ping"></span>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 relative">
          <h2 className="text-xl md:text-xl font-[Orbitron] text-white/60 ">
            CHI
          </h2>
          <h3 className="text-3xl md:text-4xl font-[Orbitron] mt-2 text-white">
            Why Choose Us
          </h3>
          <p className="mt-4 max-w-3xl text-gray-300 font-[Orbitron] leading-relaxed">
            At{" "}
            <span className="text-[#60A5FA] font-[Orbitron] font-semibold">
              Cosmo Hydraulic Fittings
            </span>
            , we redefine excellence with precision engineering, robust
            solutions, and innovation that transforms Fittings worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Image Section */}
              <div className="w-full h-74 overflow-hidden rounded-xl relative group">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                  {reason.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="mt-2 text-center hover:shadow-xl transition-all duration-500">
                <h4 className="text-lg font-orbitron text-white mb-2 font-[Orbitron]">
                  {reason.title}
                </h4>
                <p className="text-sm text-gray-300 font-quicksand line-clamp-2">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
