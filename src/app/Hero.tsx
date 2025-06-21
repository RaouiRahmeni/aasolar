"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import slide1 from "@/assets/img1.jpg";
import slide2 from "@/assets/img2.jpg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta?: {
    href: string;
    label: string;
  };
}

const slides: Slide[] = [
  {
    image: slide1.src,
    title: "أضواء العاصمة",
    subtitle: "مستقبل الطاقة الشمسية في السعودية",
    description: "حلول مبتكرة للطاقة النظيفة لتلبية احتياجات المملكة 2030",
    cta: {
      href: "#services",
      label: "اكتشف خدماتنا"
    }
  },
  {
    image: slide2.src,
    title: "طاقة مستدامة",
    subtitle: "للمستقبل الأخضر",
    description: "أنظمة شمسية متكاملة بجودة عالمية",
    cta: {
      href: "#contact",
      label: "تواصل معنا"
    }
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
  };

  return (
    <div className="relative w-10-12 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-none lg:rounded-2xl overflow-hidden mx-0 lg:mx-20">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 z-40 p-1 sm:p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="text-lg sm:text-xl md:text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 z-40 p-1 sm:p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight className="text-lg sm:text-xl md:text-2xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex gap-1 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-green-500 w-4 sm:w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          // variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-center px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-white max-w-4xl px-2 sm:px-4"
          >
            <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-2 sm:mb-4">
              <span className="text-green-400">
                {slides[currentIndex].title}
              </span>
              <br />
              {slides[currentIndex].subtitle}
            </motion.h1>
            <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8">
              {slides[currentIndex].description}
            </motion.p>
            {slides[currentIndex].cta && (
              <motion.a
                href={slides[currentIndex].cta?.href}
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all hover:shadow-lg hover:shadow-green-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentIndex].cta?.label}
              </motion.a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;