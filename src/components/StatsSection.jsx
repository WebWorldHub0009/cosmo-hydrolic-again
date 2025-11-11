// src/components/StatsSection.jsx
import React from "react";
import factoryImg from "../assets/images/products/p8.jpg"; 
import clientImg from "../assets/images/testimonials/img2.jpg"; 
import {
  FaTools,
  FaIndustry,
  FaHandshake,
  FaAward,
} from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaIndustry className="text-[#0095FF] text-3xl" />,
    value: "10,000+",
    label: "Hydraulic Systems Delivered",
  },
  {
    icon: <FaHandshake className="text-[#A5D610] text-3xl" />,
    value: "1,200+",
    label: "Satisfied Clients",
  },
  {
    icon: <FaTools className="text-[#004AAD] text-3xl" />,
    value: "15+",
    label: "Years of Engineering Excellence",
  },
  {
    icon: <FaAward className="text-[#D72638] text-3xl" />,
    value: "45+",
    label: "Industry Recognitions",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const StatsSection = () => {
  return (
    <section className="bg-[#F8F9FB] py-10 px-6 md:px-12 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            Powering <span className="text-blue-900">Hydraulic Innovation</span>
          </h2>
          <p className="text-[#6C757D] mb-10 text-base md:text-lg leading-relaxed">
            At <strong>Cosmi Hydraulic Fittings</strong>, we’re dedicated to
            precision engineering and reliable performance. From hydraulic
            cylinders to custom power packs, our commitment to innovation and
            quality has driven industrial success across India for over a
            decade.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 group transition-transform duration-300 hover:scale-105"
                whileHover={{ y: -4 }}
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#004AAD] group-hover:text-[#C1121F] transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-[#6C757D] text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image + Testimonial */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={factoryImg}
            alt="Cosmi Hydraulic Fittings"
            className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 hover:scale-[1.02] border-l-4 border-[#004AAD]"
          />

          {/* Testimonial Card */}
          <div className="absolute bottom-[-25px] left-6 bg-white rounded-xl shadow-xl p-4 w-[90%] max-w-xs border-l-4 border-[#D72638] hover:border-[#C1121F] transition-all duration-300">
            <p className="text-sm text-[#1F1F1F] italic mb-2">
              “Cosmi Hydraulic’s precision and reliability have made a real
              difference in our production line. Their team truly understands
              industrial performance.”
            </p>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={clientImg}
                alt="Client"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-[#004AAD]">Arjun Verma</p>
                <p className="text-[#6C757D] text-xs">
                  Operations Head, Precision Auto Parts
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
