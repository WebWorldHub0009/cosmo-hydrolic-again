// src/components/TestimonialSliderCosmo.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blue: "#1E3A8A", // blue-900
  gray: "#A0AEC0",
};

const testimonials = [
  {
    name: "Arjun Mehta",
    title: "Mechanical Engineer, Delhi",
    text: "Cosmo Hydraulic Industries delivered exceptional hydraulic systems that exceeded our technical expectations. Performance and durability are top-notch.",
  },
  {
    name: "Priya Sharma",
    title: "Plant Manager, Gurugram",
    text: "Their hydraulic cylinders transformed our production line. Precision, quality, and service were excellent throughout the project.",
  },
  {
    name: "Ravi Patel",
    title: "Maintenance Head, Pune",
    text: "We have been using Cosmo’s hydraulic valves for years — unmatched efficiency and flawless reliability under heavy conditions.",
  },
  {
    name: "Neha Verma",
    title: "Project Consultant, Lucknow",
    text: "Their team understands industrial-grade engineering perfectly. From installation to support, everything was seamless and professional.",
  },
  {
    name: "Amit Khanna",
    title: "Operations Director, Noida",
    text: "We upgraded to Cosmo hydraulic systems last year. Our machine uptime improved by 40%, and energy efficiency is excellent.",
  },
  {
    name: "Sonal Jain",
    title: "Automation Expert, Hyderabad",
    text: "Top-class quality and a modern engineering approach. Cosmo’s hydraulic solutions are dependable and built to last.",
  },
  {
    name: "Vikram Singh",
    title: "Factory Owner, Kanpur",
    text: "They combine innovation and precision — our hydraulic presses now perform smoother and more powerfully than ever before.",
  },
  {
    name: "Rajesh Kumar",
    title: "Quality Engineer, Jaipur",
    text: "Every product from Cosmo reflects engineering excellence. The material strength and design precision are truly superior.",
  },
  {
    name: "Isha Gupta",
    title: "Industrial Designer, Mumbai",
    text: "Cosmo’s hydraulic systems fit perfectly into our designs — sleek, powerful, and performance-driven. Highly recommended.",
  },
  {
    name: "Anand Tiwari",
    title: "Production Supervisor, Bhopal",
    text: "From consultation to delivery, their process is smooth and transparent. Excellent technical guidance and after-sales support.",
  },
  {
    name: "Deepak Yadav",
    title: "Procurement Manager, Chandigarh",
    text: "The team at Cosmo truly understands industrial needs. Their hydraulic pumps are reliable, efficient, and cost-effective.",
  },
  {
    name: "Manisha Reddy",
    title: "Architect, Bengaluru",
    text: "Their customized hydraulic systems enhanced both form and function in our project. Fantastic attention to engineering detail!",
  },
];

export default function TestimonialSliderCosmo() {
  return (
    <section className="relative w-full py-10 px-6 md:px-10 font-[Poppins] overflow-hidden bg-gradient-to-b from-white via-gray-50 to-blue-50">
      {/* Floating Blue Glow */}
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-900/20 blur-[200px] rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] bg-black/10 blur-[150px] rounded-full animate-pulse"></div>

      {/* Section Title */}
      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          What Our{" "}
          <span className="text-blue-900 drop-shadow-md">Clients Say</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          “Trusted by manufacturers and engineers nationwide — powering the future of hydraulic technology with precision and reliability.”
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative bg-white/70 backdrop-blur-xl border border-blue-900/10 p-10 rounded-2xl shadow-xl hover:shadow-[0_15px_40px_rgba(30,58,138,0.25)] transition-all duration-500 group">
              {/* Metallic Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Quote Icon */}
              <div className="flex justify-center items-center mb-6 text-blue-900">
                <FaQuoteLeft className="text-5xl opacity-80" />
              </div>

              {/* Text */}
              <p className="text-gray-800 text-lg italic leading-relaxed mb-6 text-center">
                {item.text}
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-xl text-blue-900">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  {item.title}
                </p>
              </div>

              {/* Floating Highlight */}
              <span className="absolute -top-4 right-6 text-[10px] tracking-widest font-semibold uppercase px-3 py-1 rounded-full bg-blue-900 text-white shadow-md">
                Verified Client
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-blue-900/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            }}
          ></span>
        ))}
      </div>

      {/* Bottom Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.gray}
          fillOpacity="1"
          d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,176C840,181,960,203,1080,213.3C1200,224,1320,224,1380,224L1440,224V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
