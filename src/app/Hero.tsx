"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import slide1 from "@/assets/img1.jpg";
import slide2 from "@/assets/img2.jpg";
import { motion } from "framer-motion";
const slides = [
  {
    image: slide1.src,
    title: "أضواء العاصمة",
    subtitle: "مستقبل الطاقة الشمسية في السعودية",
    description: "حلول مبتكرة للطاقة النظيفة.",
    cta: {
      label: "اطلب استشارتك الآن",
      href: "#contact",
    },
  },
  {
    image: slide2.src,
    title: "أضواء العاصمة",
    subtitle: "مستقبل الطاقة الشمسية في السعودية",
    description: "حلول مبتكرة للطاقة النظيفة.",
    cta: {
      label: "تواصل معنا",
      href: "#contact",
    },
  },
];
const Hero = () => {

const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5-second transition
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative  min-h-[70vh] top-40 m-5 rounded-2xl overflow-hidden">
      {/* Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center h-full text-white text-center p-6 mt-10">
        <motion.div
          key={currentIndex} // re-trigger animation on slide change
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-green-500">{slides[currentIndex].title}</span>
            <br />
            {slides[currentIndex].subtitle}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {slides[currentIndex].description}
          </p>
          {slides[currentIndex].cta && (
            <Link
              href={slides[currentIndex].cta.href}
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
            >
              {slides[currentIndex].cta.label}
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
