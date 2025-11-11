import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const LocationMap = () => {
  return (
    <section className="relative bg-white text-black py-10 px-6 lg:px-20 font-[Quicksand] overflow-hidden">
      {/* Decorative SVG Pattern Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Blue Accent Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-900 opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700 opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaMapMarkedAlt className="text-6xl text-blue-900 drop-shadow-md" />
            <h2 className="text-4xl sm:text-5xl font-[Orbitron] font-extrabold leading-tight text-blue-900">
              Find <span className="text-black">Cosmo Hydraulic Industries</span>
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Visit our state-of-the-art manufacturing facility and explore
            premium hydraulic fittings and industrial solutions. We’re proud to
            be located in the heart of Greater Noida’s Surajpur Industrial Area,
            known for excellence and innovation.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
            {/* Glow Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-30"></div>

            <h4 className="text-xl font-semibold mb-3 text-blue-900 relative z-10 font-[Orbitron]">
              Address
            </h4>
            <p className="text-gray-800 relative z-10">
              Cosmo Hydraulic Industries, near ARE Metal, I-149 Site C, Surajpur
              Industrial Area, Surajpur, Greater Noida, Uttar Pradesh 201306
            </p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
          <iframe
            title="Cosmo Hydraulic Industries Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112183.85914847662!2d77.43271418850226!3d28.51730084300848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d0313844cfa09%3A0xcbffafc649d50ccd!2sCosmo%20Hydraulic%20Industries%2C%20near%20ARE%20Metal%2C%20I-149%20Site%20C%2C%20Surajpur%20Industrial%20Area%2C%20Surajpur%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!3m2!1d28.517325699999997!2d77.5151156!5e0!3m2!1sen!2sin!4v1754125921151!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-3xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
