// src/components/HeroSection.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSettings, FiTool, FiBox, FiTruck, FiCpu } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import baseImage from "../assets/images/hero/bg5.png";

import steelPipe from "../assets/images/hero/bg1.jpg";
import hydraulicPump from "../assets/images/hero/bg2.png";
import bolts from "../assets/images/hero/bg3.jpg";
import heavyMachinery from "../assets/images/hero/bg4.png";

const slides = [
  {
    id: 1,
    title: "Precision Hydraulic Solutions",
    subtitle: "High-quality pumps, valves & custom systems",
    rightTitle: "Hydraulic Systems",
    rightSubtitle: "Reliable & Durable",
    icon: <FiCpu />,
    img: hydraulicPump || baseImage,
    phone: "+91 85870 44434",
  },
  {
    id: 2,
    title: "Industrial-Grade Steel Pipes",
    subtitle: "Strong, rust-resistant, and built to last",
    rightTitle: "Steel Pipes",
    rightSubtitle: "Strength You Trust",
    icon: <FiTool />,
    img: steelPipe || baseImage,
    phone: "+91 85870 44434",
  },
  {
    id: 3,
    title: "Bolts, Nuts & Fasteners",
    subtitle: "Precision engineered for every industry",
    rightTitle: "Fasteners",
    rightSubtitle: "Unmatched Quality",
    icon: <FiBox />,
    img: bolts || baseImage,
    phone: "+91 85870 44434",
  },
  {
    id: 4,
    title: "Heavy Machinery Components",
    subtitle: "Reliable parts for maximum performance",
    rightTitle: "Machinery Parts",
    rightSubtitle: "Power & Efficiency",
    icon: <FiTruck />,
    img: heavyMachinery || baseImage,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const activeSlide = slides[activeIndex];
  const bgKey = useMemo(() => `bg-${activeIndex}`, [activeIndex]);

  const handleSlideClick = (i) => {
    setActiveIndex(i);
    setLoaded(false);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-[Orbitron] flex flex-col lg:flex-row">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgKey}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeSlide.img || baseImage})` }}
          >
            {!loaded && <div className="absolute inset-0 bg-gray-900 animate-pulse" />}
            <img
              src={activeSlide.img}
              alt={activeSlide.title}
              onLoad={() => setLoaded(true)}
              className="hidden"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/60 to-black/90" />
      </div>

      {/* LEFT MENU (Desktop only) */}
      <div className="hidden lg:flex flex-col justify-center bg-black/60 w-[30%] min-w-[280px] px-8 xl:px-16 py-10 backdrop-blur-md">
        <ul className="space-y-6 w-full max-w-sm">
          {slides.map((slide, i) => {
            const isActive = i === activeIndex;
            return (
              <li
                key={slide.id}
                onClick={() => handleSlideClick(i)}
                className="relative cursor-pointer group transition-all duration-300"
              >
                {isActive && (
                  <span className="absolute -left-4 top-0 bottom-0 w-1 rounded bg-blue-400" />
                )}
                <p
                  className={`text-sm mb-1 ${
                    isActive ? "text-blue-400" : "text-gray-400"
                  }`}
                >
                  {slide.id.toString().padStart(2, "0")} .
                </p>
                <h3
                  className={`leading-tight transition-all ${
                    isActive
                      ? "text-xl xl:text-[10px] font-semibold text-white"
                      : "text-lg text-gray-300 group-hover:text-white"
                  }`}
                >
                  {slide.title}
                </h3>
                <p
                  className={`mt-0.5 text-sm ${
                    isActive ? "text-gray-200" : "text-gray-400/80"
                  }`}
                >
                  {slide.subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-end text-white px-6 sm:px-10 md:px-16 xl:px-24 py-16 text-center lg:text-right">
        <motion.h2
          key={activeSlide.id + "-sub"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg font-light mb-2 text-blue-400 tracking-widest uppercase"
        >
          {activeSlide.rightSubtitle}
        </motion.h2>

        <motion.h1
          key={activeSlide.id + "-title"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
        >
          {activeSlide.rightTitle}
        </motion.h1>

        {/* Phone CTA */}
        {activeSlide.phone && (
          <a
            href={`tel:${activeSlide.phone.replace(/\s+/g, "")}`}
            className="group mt-8 inline-flex items-center gap-3 text-base sm:text-lg font-semibold text-white px-5 sm:px-6 py-2 rounded-full bg-blue-500/90 hover:bg-blue-500 shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute left-3 w-8 h-8 rounded-full bg-blue-400 opacity-30 animate-ping"></span>
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black group-hover:bg-gray-800 transition">
              <FaPhoneAlt />
            </span>
            <span className="relative z-10">{activeSlide.phone}</span>
          </a>
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-lg mx-auto lg:ml-auto text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Elevating excellence through engineering — at{" "}
          <span className="text-blue-400 font-semibold">
            Cosmo Hydraulic Industries
          </span>
          , we craft precision-driven hydraulic systems and components that
          power industries across the globe.
        </motion.p>
      </div>

      {/* 📱 Mobile Slide Buttons */}
      <div className="absolute bottom-6 left-0 w-full px-4 lg:hidden">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 justify-center">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => handleSlideClick(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-md ${
                i === activeIndex
                  ? "bg-blue-500 text-white font-semibold scale-105"
                  : "bg-white/20 text-white/80 hover:bg-white/30"
              }`}
            >
              <span className="text-base">{slide.icon}</span>
              {slide.rightTitle}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
