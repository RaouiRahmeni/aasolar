"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslations } from "next-intl";

import slide1 from "@/assets/img1.jpg";
import slide2 from "@/assets/img2.jpg";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  label?: string;
}

export default function Hero() {
  const t = useTranslations("Hero");

  const slides: Slide[] = [
    {
      image: slide1.src,
      title: t("slide1.title"),
      subtitle: t("slide1.subtitle"),
      description: t("slide1.description"),
      href: "#services",
      label: t("slide1.cta"),
    },
    {
      image: slide2.src,
      title: t("slide2.title"),
      subtitle: t("slide2.subtitle"),
      description: t("slide2.description"),
      href: "#contact",
      label: t("slide2.cta"),
    },
  ];

  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => [(prev + dir + slides.length) % slides.length, dir]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1200 : -1200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -1200 : 1200,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden lg:px-16">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="hero image"
            fill
            priority
            className="object-cover"
            quality={100}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="max-w-3xl text-white px-6 md:px-12">
          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="text-sky-400">{slides[index].title}</span>
            <br />
            {slides[index].subtitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            {slides[index].description}
          </motion.p>

          {slides[index].href && (
            <motion.a
              href={slides[index].href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-sky-600/20"
            >
              {slides[index].label}
            </motion.a>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex items-center justify-center gap-6">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-sky-500" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
        >
          <FiChevronRight className="text-white text-2xl" />
        </button>
      </div>
    </section>
  );
}
