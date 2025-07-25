"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo-bg.png";

// Arabic navigation items
const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "تواصل معنا", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full border-b-4 border-green-500 bg-white shadow-md z-50"
      dir="ltr" // RTL direction for Arabic
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={Logo}
            alt="أضواء العاصمة"
            width={120}
            height={30}
            priority
            className="cursor-pointer"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 space-x-8 space-x-reverse text-lg">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-gray-700 hover:text-emerald-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 right-0 h-0.5 bg-emerald-600 origin-right"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ width: "100%", transformOrigin: "right" }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <motion.button
          className="lg:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="قائمة التنقل"
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" fill="currentColor">
            {menuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-inner overflow-hidden"
            dir="rtl"
          >
            <div className="flex flex-col px-4 py-2 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="py-3 px-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#demo"
                className="mt-2 block text-center bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                احصل على عرض
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
