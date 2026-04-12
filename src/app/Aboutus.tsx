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
            variants={container}
            className="grid grid-cols-3 gap-6 mt-14"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-gray-50 hover:bg-sky-50 transition p-6 rounded-xl text-center border border-gray-100"
              >
                <div className="text-sky-600 flex justify-center mb-3">
                  {stat.icon}
                </div>

                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
