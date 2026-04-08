"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { ReactElement } from "react";
import Image from "next/image";
import project1 from "@/assets/3.jpeg";
import project2 from "@/assets/img13.jpg";
import project3 from "@/assets/img10.jpg";
import project4 from "@/assets/img9.jpg";
import Link from "next/link";

interface Project {
  id: number;
  image: any;
  title: string;
  link?: string;
}

const ServicesSection = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = useTranslations("Services"); // 👈 namespace

  const projects: Project[] = [
    { id: 1, image: project1, title: t("projects.1.title"), link: "#" },
    { id: 2, image: project2, title: t("projects.2.title"), link: "#" },
    { id: 3, image: project3, title: t("projects.3.title"), link: "#" },
    { id: 4, image: project4, title: t("projects.4.title"), link: "#" },
  ];

  const parallaxVariants: Variants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <section id="services" className="bg-gray-50" ref={ref}>
      {/* Projects Gallery */}
      <div className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 px-4">
              {t("title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={parallaxVariants}
                className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-xl h-64 sm:h-80 md:h-96 border-b-4 sm:border-b-6 border-sky-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 p-4 sm:p-5 md:p-6 text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
