// src/components/CosmoNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaHome,
  FaIndustry,
  FaInfoCircle,
  FaPhoneAlt,
  FaCertificate,
  FaEnvelope,
  FaFileInvoice,
  FaIdCard,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo2d.png";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Industries", path: "/industries", icon: <FaIndustry className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
  { name: "Certificates", path: "/certificate", icon: <FaCertificate className="inline mr-1" /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/cosmohydraulic/",
  instagram: "https://www.instagram.com/cosmohyrdaulic/",
  whatsapp: "https://wa.me/+918587044434",
};

const CosmoNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 hover:text-[#D4AF37] ${
      pathname === path
        ? "text-[#60A5FA] font-semibold"
        : "text-[#111827]"
    }`;

  return (
    <>
      {/* ✅ Slim Top Header (Desktop Only) */}
      <div className="hidden md:block w-full bg-gradient-to-r from-[#111827] via-[#60A5FA] to-[#111827] text-white font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 text-xs md:text-sm gap-1">
          {/* Left: Email */}
          <a
            href="mailto:info@cosmohydraulic.com"
            className="flex items-center gap-2 hover:underline"
          >
            ✉️ info@cosmohydraulic.com
          </a>

          {/* Right: Numbers + GST + UDYAM */}
          <div className="flex flex-wrap gap-3">
            <span className="hover:underline">📄 GSTIN: 09BFSPK5332M1ZS</span>
            <span className="hover:underline">📃 UDYAM-UP-28-0082609</span>
            <a href="tel:+918587044434" className="hover:underline">
              📞 +91 85870 44434
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-2 bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Cosmo Hydraulic Industries Logo"
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Center Nav Items (Desktop) */}
          <ul className="hidden md:flex gap-6 text-sm font-medium uppercase font-[Orbitron]">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={navLinkClasses(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Social + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Desktop */}
            <div className="hidden md:flex gap-3 text-[#111827]">
              {Object.entries(socialLinks).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37]"
                >
                  {React.createElement(
                    {
                      facebook: FaFacebookF,
                      instagram: FaInstagram,
                      whatsapp: FaWhatsapp,
                    }[k],
                    { size: 16 }
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden text-[#111827]">
              <FaBars onClick={toggleMenu} className="cursor-pointer text-xl" />
            </div>
          </div>
        </div>

        {/* ✅ Mobile Panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Slide-out */}
            <div
              ref={panelRef}
              className="w-72 h-full bg-white shadow-xl px-6 py-4 flex flex-col"
            >
              {/* Mobile brand row */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={"" /* logo */}
                    alt="Cosmo Logo"
                    className="h-20 object-contain"
                  />
                </Link>
                <FaTimes
                  className="text-xl text-[#111827] cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4" />

              {/* Mobile Nav Items */}
              <nav className="flex flex-col gap-3 text-sm font-[Orbitron]">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 ${
                      pathname === item.path
                        ? "font-semibold text-[#60A5FA]"
                        : "text-[#111827]"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              <hr className="my-4" />

              {/* ✅ Mobile Contact Info */}
              <div className="py-4  text-[#111827] font-[Orbitron] text-sm font-semibold space-y-3">
                <a
                  href="mailto:info@cosmohydraulic.com"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition"
                >
                  <FaEnvelope className="text-lg" /> info@cosmohydraulic.com
                </a>
                <a
                  href="tel:+918587044434"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition"
                >
                  <FaPhoneAlt className="text-lg" /> +91 85870 44434
                </a>
                <div className="flex items-center gap-2">
                  <FaFileInvoice className="text-lg" /> GSTIN: 09BFSPK5332M1ZS
                </div>
                <div className="flex items-center gap-2">
                  <FaIdCard className="text-lg" /> UDYAM-UP-28-0082609
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-3">
                <a
                  href="https://wa.me/918587044434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold py-2 shadow hover:opacity-95 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Mobile Social */}
              <div className="mt-auto pt-4 border-t text-xs">
                <div className="flex gap-3 mt-3 text-lg text-[#111827]">
                  {Object.entries(socialLinks).map(([k, url]) => (
                    <a
                      key={k}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37]"
                    >
                      {React.createElement(
                        {
                          facebook: FaFacebookF,
                          instagram: FaInstagram,
                          whatsapp: FaWhatsapp,
                        }[k]
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/10 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default CosmoNavbar;
