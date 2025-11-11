import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaIndustry,
  FaGlobeAsia,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
import bgPattern from "../assets/images/contact-bg.avif";
import ContactHero from "../components/ContactHero";
import LocationMap from "../components/LocationMap";

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      {/* CONTACT SECTION */}
      <section
        id="contactsection"
        className="relative w-full py-8 flex flex-col lg:flex-row bg-white/40 text-[#1C1C1C] overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgPattern})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>

        {/* LEFT INFO SECTION */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-[Orbitron] font-bold mb-6 border-b-4 border-blue-900 inline-block pb-2">
                Let’s Connect
              </h1>
              <p className="text-lg tracking-wide italic mb-10 text-gray-600">
                For premium hydraulic fittings, industrial solutions, or
                partnership inquiries — we’re here to help.
              </p>

              <div className="space-y-6 text-gray-700">
                <div className="border-l-4 border-blue-900 pl-4">
                  <h4 className="font-bold text-blue-900">Phone</h4>
                  <p className="text-gray-700">+91 85870 44434</p>
                </div>

                <div className="border-l-4 border-blue-900 pl-4">
                  <h4 className="font-bold text-blue-900">Email</h4>
                  <p className="text-gray-700">info@cosmohydraulic.com</p>
                </div>

                <div className="border-l-4 border-blue-900 pl-4">
                  <h4 className="font-bold text-blue-900">Address</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cosmo Hydraulic Industries, near ARE Metal, I-149 Site C,
                    Surajpur Industrial Area, Surajpur, Greater Noida, Uttar
                    Pradesh 201306
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
           <div className="mt-2 flex flex-wrap  gap-6 text-3xl text-blue-900 relative z-10">
        <a
          href="https://share.google/zAcBdiaAZ86CLkt6m"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-black"
        >
          <SiGooglemaps />
        </a>

        <a
          href="https://www.indiamart.com/cosmohydraulicindustries/profile.html"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-black"
        >
          <FaHandshake />
        </a>

        <a
          href="https://www.instagram.com/cosmohyrdaulic/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-black"
        >
          <FaInstagram />
        </a>

        <a
          href="https://b2bstreets.com/cosmo-hydraulic-industries"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-black"
        >
          <FaIndustry />
        </a>

        <a
          href="https://www.facebook.com/cosmohydraulic/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-black"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.tradeindia.com/cosmo-hydraulic-industries-25155245/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform duration-300 hover:text-black"
        >
          <FaGlobeAsia/>
          </a>
          </div>
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16"
        >
          <div className="w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 sm:p-10 border border-blue-100">
            <h3 className="text-3xl font-[Orbitron] font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-8">
              Contact Form
            </h3>

            <form
              action="https://formsubmit.co/info@cosmohydraulic.com"
              method="POST"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-white border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-900 outline-none text-gray-800"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-white border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-900 outline-none text-gray-800"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-white border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-900 outline-none text-gray-800"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-white border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-900 outline-none text-gray-800"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're interested in"
                required
                className="col-span-1 sm:col-span-2 bg-white border border-gray-300 p-3 rounded-md h-28 resize-none focus:ring-2 focus:ring-blue-900 outline-none text-gray-800"
              ></textarea>
              <button
                type="submit"
                className="col-span-1 sm:col-span-2 bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-white hover:text-blue-900 border border-blue-900 transition-all duration-300"
              >
                Send Message
              </button>

              {/* Hidden Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://cosmohydraulic.com" />
            </form>
          </div>
        </motion.div>
      </section>
      <LocationMap/>
    </>
  );
};

export default ContactPage;
