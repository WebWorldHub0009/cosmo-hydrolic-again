import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaPhoneAlt,
  FaGlobeAsia,
  FaArrowRight,
  FaCog,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/images/newlogo2d.png";
// import footerBg from "../assets/images/footer-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  "Hydraulic Fittings",
  "Hydraulic Ferrules",
  "Dowty Seal",
  "Equal Elbow",
  "Equal Tee",
  "Hydraulic Clamps",
  "Swivel Elbow",
  "Bulkhead Fittings",
  "Banjo Fittings",
];

const quickLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Showcase", "/showcase"],
  ["Contact", "/contact"],
  ["Documents", "/documents"],
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative overflow-hidden px-6 md:px-16 pt-10 pb-5 font-orbitron bg-black"
      style={{
        backgroundImage: `url(${""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Background Accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-blue-500 blur-[130px] opacity-20 rounded-full -z-0" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-blue-700 blur-[150px] opacity-20 rounded-full -z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative text-gray-200">
        {/* About Cosmo Hydraulic */}
        <div className="flex flex-col space-y-3 mt-2">
          <img src={logo} alt="Cosmo Hydraulic Industries Logo" className="w-[150px] md:w-[200px]" />
          <h4 className="text-blue-300 text-2xl font-semibold mt-6 font-[Orbitron]">About Cosmo Hydraulic</h4>
          <p className="leading-relaxed text-gray-300 font-[Orbitron]">
            Cosmo Hydraulic Industries, based in Surajpur, Greater Noida, is a trusted name in
            high-performance hydraulic fittings and industrial solutions — offering precision
            manufacturing with innovation since inception.
          </p>
        </div>

        {/* Quick Links + Contact */}
        <div>
          <h4 className="text-blue-300 text-2xl font-semibold mb-4 font-[Orbitron]">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 font-[Orbitron]">
            {quickLinks.map(([text, link], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                >
                  <FaArrowRight className="text-blue-400" />
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-blue-300 text-2xl font-semibold font-[Orbitron]">Contact</h4>
          <ul className="mt-2 space-y-2 text-gray-300 font-[Orbitron]"> 
            <li>
              <a
                href="mailto:Info@cosmohydraulic.com"
                className="flex items-center space-x-2 hover:text-blue-400 transition"
              >
                <FaEnvelope className="text-blue-400" />
                <span>Info@cosmohydraulic.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+918587044434"
                className="flex items-center space-x-2 hover:text-blue-400 transition"
              >
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 85870 44434</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Raw Materials / Products */}
        <div>
          <h4 className="text-blue-300 text-2xl font-semibold mb-4 font-[Orbitron]">Raw Materials</h4>
          <ul className="space-y-2 text-gray-300 font-[Orbitron]">
            {services.map((item, i) => (
              <li key={i}>
                <Link
                  to="/products"
                  className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                >
                  <FaCog className="text-blue-400" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h4 className="text-blue-300 text-2xl font-semibold mb-4 font-[Orbitron]">Our Address</h4>
          <ul className="space-y-2 text-gray-300 mb-4 font-[Orbitron]">
            <li className="flex items-center gap-2">
           <FaMapMarkerAlt className="text-blue-400" /> Cosmo Hydraulic Industries
            </li>
            <li className="flex items-center gap-2">
               Near ARE Metal, I-149 Site C
            </li>
            <li className="flex items-center gap-2">
              Surajpur Industrial Area, Surajpur
            </li>
            <li className="flex items-center gap-2">
               Greater Noida, Uttar Pradesh 201306
            </li>
          </ul>

          <div className="flex">
            <Translator />
            <div className="w-32 md:w-16"></div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918587044434"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/cosmohyrdaulic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/cosmohydraulic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://share.google/zAcBdiaAZ86CLkt6m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 transition"
            >
              <FaGlobeAsia size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 text-center text-xs text-gray-300 border-t border-gray-500 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Cosmo Hydraulic Industries. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-300 hover:text-blue-400 transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
