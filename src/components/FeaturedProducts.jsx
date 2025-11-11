// src/components/FeaturedProducts.jsx
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Import your product images here
import p1 from "../assets/productsPage/p1.png";
import p2 from "../assets/productsPage/p2.png";
import p3 from "../assets/productsPage/p3.png";
import p4 from "../assets/productsPage/p4.png";
import p5 from "../assets/productsPage/p5.png";
import p6 from "../assets/productsPage/p6.png";
import p7 from "../assets/productsPage/p7.png";
import p8 from "../assets/productsPage/p8.png";
import p9 from "../assets/productsPage/p9.png";
import p10 from "../assets/productsPage/p10.png";
import p11 from "../assets/productsPage/p11.png";
import p12 from "../assets/productsPage/p12.png";
import p13 from "../assets/productsPage/p13.png";
import p14 from "../assets/productsPage/p14.png";
import p15 from "../assets/productsPage/p15.png";
import p16 from "../assets/productsPage/p16.png";
import p17 from "../assets/productsPage/17.png";
import p18 from "../assets/productsPage/18.png";
import p19 from "../assets/productsPage/19.png";
import p20 from "../assets/productsPage/20.png";
import p21 from "../assets/productsPage/21.png";
import p22 from "../assets/productsPage/p22.jpg";
import p23 from "../assets/productsPage/p23.jpg";
import p24 from "../assets/productsPage/p24.jpg";
import p25 from "../assets/productsPage/p25.png";
import p26 from "../assets/productsPage/p26.png";
import p27 from "../assets/productsPage/p27.jpg";
import p28 from "../assets/productsPage/p28.png";
import p29 from "../assets/productsPage/p29.jpg";
import p30 from "../assets/productsPage/p30.jpg";
import p31 from "../assets/productsPage/p31.jpg";
import p32 from "../assets/productsPage/p32.webp";
import p33 from "../assets/productsPage/p33.png";
import p35 from "../assets/productsPage/p35.png";
import p36 from "../assets/productsPage/p36.png";
import p37 from "../assets/productsPage/p37.jpg";
import p38 from "../assets/productsPage/p38.jpg";
import p40 from "../assets/productsPage/p40.png";
import p41 from "../assets/productsPage/p41.jpg";
import p42 from "../assets/productsPage/p42.png";
import p43 from "../assets/productsPage/p43.jpg";
import p44 from "../assets/productsPage/p44.jpg";

const colors = {
  white: "#FFFFFF",
  offWhite: "#F8F9FA",
  blue: "#007BFF",
  black: "#1C1C1C",
  gray: "#B0B0B0",
};

// ✅ Cosmo Hydraulic Industries Product List
const products = [
  { img: p1, title: "Hydraulic Ferrule Fittings", slug: "hydraulic-ferrule-fittings" },
  { img: p2, title: "Hydraulic Fittings", slug: "hydraulic-fittings" },
  { img: p3, title: "SS Fittings", slug: "ss-fittings" },
  { img: p4, title: "Equal Elbow", slug: "equal-elbow" },
  { img: p5, title: "Equal Tee", slug: "equal-tee" },
  { img: p6, title: "Dowty Seal", slug: "dowty-seal" },
  { img: p7, title: "Swivel Elbow", slug: "swivel-elbow" },
  { img: p8, title: "Bulkhead Union", slug: "bulkhead-union" },
  { img: p9, title: "Male Connector", slug: "male-connector" },
  { img: p10, title: "Stainless Steel Pipe", slug: "stainless-steel-pipe" },
  { img: p11, title: "Stainless Steel Coil", slug: "stainless-steel-coil" },
  { img: p12, title: "Galvanized Steel Coil", slug: "galvanized-steel-coil" },
  { img: p13, title: "Galvanized Steel Sheet", slug: "galvanized-steel-sheet" },
  { img: p14, title: "PPGI Coil", slug: "ppgi-coil" },
  { img: p15, title: "Aluminium Sheet", slug: "aluminium-sheet" },
  { img: p16, title: "Hydraulic PVC Clamp", slug: "hydraulic-pvc-clamp" },
  { img: p17, title: "PVC Heavy Clamp", slug: "pvc-heavy-clamp" },
  { img: p18, title: "Rubber Coated Clamp", slug: "rubber-coated-clamp" },
  { img: p19, title: "U-Bolt Clamp", slug: "u-bolt-clamp" },
  { img: p20, title: "Heavy Duty Pipe Clamp", slug: "heavy-duty-pipe-clamp" },
  { img: p21, title: "Split Type Clamp", slug: "split-type-clamp" },
  { img: p22, title: "Allen Plug", slug: "allen-plug" },
  { img: p23, title: "Banjo Tee Connector", slug: "banjo-tee-connector" },
  { img: p24, title: "Bonded Seal", slug: "bonded-seal" },
  { img: p25, title: "Banjo Connector", slug: "banjo-connector" },
  { img: p26, title: "Bulkhead Elbow Coupling", slug: "bulkhead-elbow-coupling" },
  { img: p27, title: "Coupling Nut", slug: "coupling-nut" },
  { img: p28, title: "Equal Cross Coupling", slug: "equal-cross-coupling" },
  { img: p29, title: "Half Adapter", slug: "half-adapter" },
  { img: p30, title: "Hex Plug", slug: "hex-plug" },
  { img: p31, title: "Hose Elbow", slug: "hose-elbow" },
  { img: p32, title: "Hose Nut", slug: "hose-nut" },
  { img: p33, title: "Hydraulic Adapter", slug: "hydraulic-adapter" },
  { img: p35, title: "Hydraulic Check Valve", slug: "hydraulic-check-valve" },
  { img: p36, title: "Hydraulic Ferrule", slug: "hydraulic-ferrule" },
  { img: p37, title: "Hydraulic Flow Control Valve", slug: "hydraulic-flow-control-valve" },
  { img: p38, title: "Hydraulic Welding Nipple", slug: "hydraulic-welding-nipple" },
  { img: p40, title: "Quick Release Coupling", slug: "quick-release-coupling" },
  { img: p41, title: "Straight Equal Coupling", slug: "straight-equal-coupling" },
  { img: p42, title: "Swivel Elbow Coupling", slug: "swivel-elbow-coupling" },
  { img: p43, title: "Swivel Male Stud Coupling", slug: "swivel-male-stud-coupling" },
  { img: p44, title: "Thread Reducer", slug: "thread-reducer" },
];

export default function FeaturedProducts() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen py-8 px-6 md:px-20 overflow-hidden font-[Poppins]">
      {/* Background Lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-[-1] opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {[20, 40, 60, 80].map((x, i) => (
          <line
            key={i}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke={colors.gray}
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />
        ))}
      </svg>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          Our <span className="text-blue-900">Hydraulic Excellence</span> Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Explore precision-engineered hydraulic fittings and components built for performance and reliability.
        </motion.p>
      </div>

      {/* Slider Controls */}
      <div className="relative flex justify-center items-center gap-4 mb-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 bg-white shadow-md rounded-full hover:bg-[#007BFF] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 bg-white shadow-md rounded-full hover:bg-[#007BFF] hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Product Slider */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-8 px-2 md:px-6 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] bg-white/80 backdrop-blur-md border border-gray-200 
                       rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer snap-center"
          >
            <Link to={`/products/${product.slug}`}>
             <div className="relative overflow-hidden h-[200px] md:h-[250px] flex items-center justify-center bg-white">
              <motion.img
                src={product.img}
                alt={product.title}
                className="max-h-[80%] max-w-[80%] object-contain hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition duration-500" />
            </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 text-[#1C1C1C]">
                  {product.title}
                </h3>
                <div
                  className="w-10 h-1 mx-auto rounded-full"
                  style={{ background: colors.blue }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-center mt-6"
      >
        <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
          Premium <span className="text-blue-900" >Hydraulic Components</span> — Built for Precision and Durability
        </h2>
      </motion.div>
      <div className="flex justify-center items-center mt-3">
        <Link to={"/products"}>
        
        <button className="font-[Orbitron] px-8 py-2 bg-blue-900 text-white font-bold rounded-3xl cursor-pointer">
          See More
        </button>
        </Link>
      </div>
    </section>
  );
}
