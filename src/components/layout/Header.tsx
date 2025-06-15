'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Logo from "@/assets/logo.png"

const Header = ()=> {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-gradient-to-l from-green-100 to-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Adwa Aleasima" width={100} height={20} priority />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-green-600 transition">Home</a>
          <a href="#services" className="text-gray-700 hover:text-green-600 transition">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-green-600 transition">Projects</a>
          <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
          <a href="#demo" className="ml-4 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Get a Demo
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="currentColor">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-inner"
        >
          <div className="flex flex-col px-4 py-2 space-y-2">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="py-2 text-gray-700 hover:text-green-600 border-b last:border-0"
              >
                {label}
              </a>
            ))}
            <a
              href="#demo"
              className="mt-2 block text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Get a Demo
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
export default Header