import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUserCog,
  FaDraftingCompass,
  FaHardHat,
  FaWarehouse,
  FaTools,
} from "react-icons/fa";

const team = [
  { name: "Rahul Mehra", role: "Managing Director", icon: <FaUserTie /> },
  { name: "Priya Verma", role: "Head of Operations", icon: <FaUserCog /> },
  { name: "Arjun Thakur", role: "Design & CAD Engineer", icon: <FaDraftingCompass /> },
  { name: "Sunita Sharma", role: "Quality Control Manager", icon: <FaHardHat /> },
  { name: "Naveen Joshi", role: "Production Supervisor", icon: <FaTools /> },
  { name: "Kavita Desai", role: "Warehouse Head", icon: <FaWarehouse /> },
];

const TeamMembers = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-800 font-body overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Meet the <span className="text-blue-600">Core Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mt-4"
        >
          Driving force behind precision, innovation, and excellence at Cosmo Hydraulic Industries.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-600 transition-all duration-500 text-center transform hover:-translate-y-2"
          >
            {/* Animated Glowing Ring */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full z-0 bg-gradient-to-tr from-blue-400 to-blue-700 blur-2xl opacity-20 group-hover:scale-110 transition-transform duration-700" />

            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl text-blue-600 mb-4 relative z-10"
            >
              <span className="inline-block bg-blue-100 p-4 rounded-full shadow-inner group-hover:bg-blue-600 group-hover:text-white transition duration-500">
                {member.icon}
              </span>
            </motion.div>

            {/* Name and Role */}
            <h3 className="font-bold text-md uppercase tracking-wide text-gray-900 group-hover:text-blue-700 transition duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-blue-700 mt-1 font-medium uppercase group-hover:text-blue-500 transition duration-300">
              {member.role}
            </p>

            {/* Bottom glowing line */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </motion.div>
        ))}
      </div>

      {/* Glowing Background Elements */}
      <div className="absolute top-[-120px] left-[-100px] w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default TeamMembers;
