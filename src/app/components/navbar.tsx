// components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "الرحلات", href: "/tours" },
    { name: "الخدمات", href: "/services" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Good <span className="text-gray-800">Tour</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="hidden md:inline-block  rounded-lg shadow text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 transition"
        >
          احجز الآن
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-white shadow-lg px-4 py-2"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="block mt-3 text-blue-700 border-2 border-blue-700 px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            احجز الآن
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
