import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Replace with your actual image paths
import img1 from "../assets/images/hero/bg1.jpg";
import img2 from "../assets/images/hero/bg2.png";
import img3 from "../assets/images/hero/bg4.png";

const services = [
  {
    title: "Industrial Engineering",
    description:
      "We design and implement efficient hydraulic systems tailored to your manufacturing needs.",
    image: img1,
    link: "/products",
    layout: "image-top",
  },
  {
    title: "Precision Manufacturing",
    description:
      "Advanced machinery and skilled technicians produce top-tier components with unmatched accuracy.",
    image: img2,
    link: "/products",
    layout: "text-top",
  },
  {
    title: "Quality Assurance",
    description:
      "Strict multi-level quality checks ensure every product meets international standards.",
    image: img3,
    link: "/products",
    layout: "image-top",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white text-blue-900 py-10 px-6 md:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <div>
            <p className="uppercase tracking-wider text-sm font-semibold mb-2 text-blue-900">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Driving Excellence in Hydraulics
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-6 md:mt-0 inline-flex items-center bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition"
          >
            View All Products →
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-blue-100 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              {service.layout === "image-top" ? (
                <>
                  {/* Image on Top */}
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to={service.link}
                    className="mt-auto inline-block text-sm font-semibold text-blue-900 underline hover:text-blue-700 transition"
                  >
                    Learn More →
                  </Link>
                </>
              ) : (
                <>
                  {/* Text on Top */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-block text-sm font-semibold text-blue-900 underline hover:text-blue-700 transition mb-4"
                    >
                      Learn More →
                    </Link>
                  </div>
                  <div className="mt-4 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
