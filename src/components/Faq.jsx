import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaWrench,
  FaShieldAlt,
  FaHandshake,
  FaPhoneAlt,
} from "react-icons/fa";
import bgImage from "../assets/bgf.jpg"; // Use a background showing industry or machinery

const faqCategories = {
  "General Questions": {
    icon: <FaCogs className="text-gray-800 text-xl" />,
    faqs: [
      {
        question: "What products does Cosmi Hydraulic Industries manufacture?",
        answer:
          "We specialize in manufacturing high-quality hydraulic power packs, hydraulic cylinders, presses, and customized hydraulic systems for industrial applications.",
      },
      {
        question: "Do you provide custom hydraulic solutions?",
        answer:
          "Yes. We design and develop tailor-made hydraulic solutions to meet specific industrial requirements — ensuring efficiency, durability, and reliability.",
      },
      {
        question: "Where does Cosmi Hydraulic Industries operate?",
        answer:
          "We serve clients across India, supplying and servicing hydraulic equipment for manufacturing, automotive, and construction sectors.",
      },
      {
        question: "Are your products quality certified?",
        answer:
          "Absolutely. All our products undergo strict quality testing and are built following ISO and industrial safety standards.",
      },
    ],
  },

  "Installation & Maintenance": {
    icon: <FaWrench className="text-[#0095FF] text-xl" />,
    faqs: [
      {
        question: "Do you offer installation services for your systems?",
        answer:
          "Yes. Our team provides complete installation support, ensuring that your hydraulic systems are properly configured and tested before handover.",
      },
      {
        question: "Do you provide AMC (Annual Maintenance Contracts)?",
        answer:
          "Yes. We offer reliable AMC services that include regular maintenance, inspection, and timely replacement of worn components.",
      },
      {
        question: "Can you repair or upgrade old hydraulic systems?",
        answer:
          "Of course. We provide system modernization, component retrofitting, and performance upgrades for older hydraulic machines.",
      },
      {
        question: "How often should hydraulic systems be serviced?",
        answer:
          "We recommend servicing every 3 to 6 months depending on operational intensity to maintain peak performance and prevent downtime.",
      },
    ],
  },

  "Pricing & Warranty": {
    icon: <FaHandshake className="text-[#C1121F] text-xl" />,
    faqs: [
      {
        question: "How is product pricing determined?",
        answer:
          "Pricing depends on system specifications such as pressure capacity, oil volume, automation level, and materials used in manufacturing.",
      },
      {
        question: "Do you offer warranty on your products?",
        answer:
          "Yes. All our hydraulic systems come with a standard 12-month warranty covering manufacturing defects and performance issues.",
      },
      {
        question: "Are spare parts easily available?",
        answer:
          "Yes. We maintain an inventory of genuine spare parts for all our models to ensure quick replacements and minimal downtime.",
      },
      {
        question: "Do you provide technical consultation before purchase?",
        answer:
          "Absolutely. Our engineering team provides free technical guidance and design consultation to help you select the right hydraulic solution.",
      },
    ],
  },

  "Safety & Support": {
    icon: <FaShieldAlt className="text-green-500 text-xl" />,
    faqs: [
      {
        question: "What safety measures do your systems include?",
        answer:
          "All our hydraulic units are equipped with pressure relief valves, emergency stop mechanisms, and leak-proof fittings to ensure operator safety.",
      },
      {
        question: "Do you provide emergency support?",
        answer:
          "Yes. Our after-sales support team is available 24/7 for on-site or remote troubleshooting and emergency repairs.",
      },
      {
        question: "Are your technicians certified and trained?",
        answer:
          "Yes, our service engineers and technicians are professionally trained to handle all hydraulic installations and maintenance tasks safely.",
      },
      {
        question: "How can I contact Cosmi Hydraulic Industries?",
        answer:
          "You can reach us via our official phone number, email, or by submitting a contact form on our website. Our team responds promptly to all inquiries.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General Questions");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-10 px-4 md:px-10 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Whitish overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-7xl mx-auto rounded-3xl shadow-xl bg-white/90 backdrop-blur-md z-10 border border-gray-200">
        {/* Header */}
        <div className="text-center py-14 px-6 border-b border-gray-300">
          <h2 className="text-4xl font-semibold mb-3 text-[#004AAD]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6C757D] max-w-2xl mx-auto text-sm sm:text-base">
            Got questions about Cosmi Hydraulic Industries? Find clear answers
            below or contact our team for technical assistance.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Tabs */}
          <div className="md:w-1/3 bg-[#F8F9FB] p-6 border-r border-gray-300 flex flex-col gap-4">
            {Object.entries(faqCategories).map(([category, data], idx) => (
              <motion.button
                key={idx}
                onClick={() => handleTabChange(category)}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer text-left w-full px-5 py-4 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-200 ${
                  activeTab === category
                    ? "bg-[#004AAD] text-white shadow-md"
                    : "bg-transparent text-[#1F1F1F] hover:text-[#0095FF]"
                }`}
              >
                {data.icon}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>

          {/* Right FAQs */}
          <div className="md:w-2/3 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {faqCategories[activeTab].faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 py-4 transition-all"
                  >
                    <button
                      className="cursor-pointer w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg text-[#1F1F1F] hover:text-[#004AAD] transition-colors duration-300"
                      onClick={() =>
                        setOpenIndex(index === openIndex ? null : index)
                      }
                    >
                      {faq.question}
                      <span className="text-[#C1121F] text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#6C757D] mt-3 text-sm leading-relaxed overflow-hidden"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
