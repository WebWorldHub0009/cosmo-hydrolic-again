import React from "react";
import {
  FaCogs,
  FaTools,
  FaClipboardCheck,
  FaShippingFast,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Requirement & Design Discussion",
    description:
      "We consult with you to understand your exact hydraulic fitting or adapter requirements. Customization options are discussed based on use-case.",
    icon: <FaClipboardCheck className="text-4xl text-blue-900" />,
    extra:
      "Precision planning ensures the right fit, minimizing production downtime and errors.",
  },
  {
    id: 2,
    title: "Material Selection & Preparation",
    description:
      "Top-grade materials such as brass sheets and mild steel are carefully selected and prepared for machining using modern tools.",
    icon: <FaTools className="text-4xl text-blue-900" />,
    extra:
      "We never compromise on raw material quality—ensuring longevity and performance.",
  },
  {
    id: 3,
    title: "Advanced Manufacturing Process",
    description:
      "Our team manufactures with ultra-modern machines ensuring precision in cutting, threading, and finishing of hydraulic parts.",
    icon: <FaCogs className="text-4xl text-blue-900" />,
    extra:
      "All components are produced with care and undergo rigorous dimensional checks.",
  },
  {
    id: 4,
    title: "Quality Check & On-Time Delivery",
    description:
      "Each item is verified for performance and fit before dispatch. We ensure fast and safe delivery to your destination.",
    icon: <FaShippingFast className="text-4xl text-blue-900" />,
    extra:
      "Our quality assurance process is strict, ensuring you receive flawless components every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-8 overflow-hidden">
      {/* SVG Background */}
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
              opacity="0.2"
            />
          </pattern>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {/* <circle cx="200" cy="300" r="120" fill="url(#glowGradient)" /> */}
        <circle cx="800" cy="700" r="180" fill="url(#glowGradient)" />
      </svg>

      {/* Section Content */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-sm text-blue-900 font-semibold uppercase tracking-wider font-[Orbitron]">
          Manufacturing Excellence Since 2012
        </p>
        <h2 className="text-4xl font-bold text-gray-900  font-[Orbitron]">How We Work at Cosmo</h2>
      </div>

      {/* Steps Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto z-10">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group border border-gray-200 rounded-xl p-6 bg-white/20 shadow-md hover:shadow-2xl transition duration-300"
          >
            {/* Number Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-blue-900 text-blue-900 font-bold text-sm group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                <span className="group-hover:hidden">{idx + 1}</span>
                <FaCheck className="hidden group-hover:block text-white text-sm" />
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4 mt-2">{step.icon}</div>

            {/* Title */}
            <h3 className="text-center font-semibold text-lg mb-2 text-gray-800 font-[Orbitron]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm mb-3">
              {step.description}
            </p>

            {/* Extra Info */}
            <p className="text-center text-gray-500 text-xs mb-6">{step.extra}</p>

            {/* Learn More Button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-6">
              <div className="opacity-0 translate-x-[-50%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link to={"/contact"}>
                  <button className="relative cursor-pointer top-8 w-full rounded-xl bg-blue-900 text-white text-sm py-2 hover:bg-blue-800 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Call To Action */}
      <div className="mt-7 text-center px-6 max-w-4xl mx-auto relative z-10">
        <p className="text-lg text-gray-700 font-medium mb-6 font-[Orbitron]">
          At Cosmo Hydraulic Fittings, our commitment to quality, trust, and
          timely delivery has made us a leading name in hydraulic components
          since 2015.
        </p>
        <Link to={"/contact"}>
          <button className="bg-blue-900 font-[Orbitron] cursor-pointer text-white px-6 py-3 rounded-full text-sm hover:bg-blue-800 transition">
            Contact Us For Bulk Orders
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
