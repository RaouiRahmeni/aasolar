"use client";

import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FiAward, FiUsers, FiCheckCircle } from "react-icons/fi";
import { useTranslations } from "next-intl";
import aboutImage from "@/assets/img3.jpg";

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function AboutUs() {
  const t = useTranslations("About");

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const stats: StatItem[] = [
    {
      label: t("stat1"),
      value: "10+",
      icon: <FiAward size={28} />,
    },
    {
      label: t("stat2"),
      value: "150+",
      icon: <FiCheckCircle size={28} />,
    },
    {
      label: t("stat3"),
      value: "50+",
      icon: <FiUsers size={28} />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center ">
        {/* IMAGE */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={item}
          className="relative"
        >
          <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage as StaticImageData}
              alt={t("imageAlt")}
              fill
              priority
              className="object-cover  border-b-8 border-sky-500"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>

          {/* floating stat card */}
          <div className="absolute -bottom-10 -right-6 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4">
            <FiAward className="text-sky-600" size={28} />
            <div>
              <p className="text-lg font-bold">10+</p>
              <p className="text-sm text-gray-500">{t("experience")}</p>
            </div>
          </div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {t("title")}
          </motion.h2>

          <motion.div
            variants={item}
            className="w-20 h-1 bg-sky-500 mt-6 mb-8 rounded"
          />

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed mb-6"
          >
            {t("desc1")}
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed mb-6"
          >
            {t("desc2")}
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed mb-10"
          >
            {t("desc3")}
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={item}
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-sky-500/20 transition"
          >
            {t("cta")}
          </motion.a>

          {/* STATS */}
          <motion.div
            variants={container} // Ensure your parent container has staggerChildren
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group relative p-4 mt-4 rounded-2xl bg-white border border-slate-100 
                 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] 
                 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] 
                 hover:-translate-y-2 transition-all duration-300 ease-out 
                 flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Subtle Background Decoration */}
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-sky-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                <div className="relative z-10 text-sky-500 bg-sky-50 p-4 rounded-xl mb-4 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
