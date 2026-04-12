"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import project1 from "@/assets/3.jpeg";
import project2 from "@/assets/img13.jpg";
import project3 from "@/assets/img10.jpg";
import project4 from "@/assets/img9.jpg";

interface Project {
  id: number;
  image: any;
  title: string;
  link?: string;
}

export default function ServicesSection() {
  const t = useTranslations("Services");

  const projects: Project[] = [
    { id: 1, image: project1, title: t("projects.1.title"), link: "#" },
    { id: 2, image: project2, title: t("projects.2.title"), link: "#" },
    { id: 3, image: project3, title: t("projects.3.title"), link: "#" },
    { id: 4, image: project4, title: t("projects.4.title"), link: "#" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gray-50 overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("title")}
          </h2>

          <div className="w-20 h-1 bg-sky-500 mx-auto mt-6 mb-6 rounded" />

          <p className="text-lg text-gray-600">{t("description")}</p>
        </div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              className="group relative rounded-3xl overflow-hidden shadow-xl h-[340px] border-b-4 border-sky-500"
            >
              {/* image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-8  text-white translate-y-6 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
