import React from "react";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

const MissionVisionValues = () => {
  return (
    <section className="relative  py-10 px-6 md:px-20 font-[Quicksand]">
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
        {/* <circle cx="200" cy="300" r="100" fill="url(#glowGradient)" /> */}
        <circle cx="800" cy="700" r="150" fill="url(#glowGradient)" />
      </svg>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-8">
        <h2
          className="text-4xl md:text-5xl font-[Orbitron] font-extrabold text-blue-900 mb-4 tracking-wide"
          style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}
        >
          Our Mission, Vision & Values
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Driven by excellence, innovation, and integrity — we power the
          hydraulic industry forward.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Top Row - Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 mb-10">
          {/* Mission */}
          <div className="flex flex-col items-center">
            <div className="text-blue-900 text-6xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-[Orbitron] font-bold text-black mb-4">
              Mission
            </h3>
            <p className="text-gray-700 max-w-md text-lg leading-relaxed">
              Our mission is to deliver top-quality hydraulic solutions that
              empower industries with efficiency, reliability, and innovation.
              We aim to set new standards in performance and customer
              satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <div className="text-blue-900 text-6xl mb-6">
              <FaEye />
            </div>
            <h3 className="text-3xl font-[Orbitron] font-bold text-black mb-4">
              Vision
            </h3>
            <p className="text-gray-700 max-w-md text-lg leading-relaxed">
              Our vision is to become a global leader in hydraulic engineering,
              providing cutting-edge solutions that drive sustainable industrial
              growth and technological excellence.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col items-center">
          <div className="text-blue-900 text-6xl mb-6">
            <FaGem />
          </div>
          <h3 className="text-3xl font-[Orbitron] font-bold text-black mb-4">
            Values
          </h3>
          <p className="text-gray-700 max-w-2xl mb-6 text-lg leading-relaxed">
            At Cosmo Hydraulic Industries, our values define our culture and
            commitment:
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Integrity and trust in every interaction.</li>
              <li>Commitment to quality and innovation.</li>
              <li>Customer-first approach and lasting partnerships.</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>Continuous improvement through technology.</li>
              <li>Safety, sustainability, and operational excellence.</li>
              <li>Empowering teams to achieve remarkable results.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
