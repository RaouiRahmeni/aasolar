"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSun, FiHome, FiBriefcase, FiTrendingUp } from "react-icons/fi";
import { ReactElement } from "react";
import Image from "next/image";
import project1 from "@/assets/img5.jpg";
import project2 from "@/assets/img6.jpg";
import project3 from "@/assets/img7.jpg";
import project4 from "@/assets/img9.jpg";
import Link from "next/link";

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
}

interface Project {
  id: number;
  image: any;
  title: string;
  link?: string;
}

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    { id: 1, image: project1, title: "مشروع سكني بالرياض", link: "#" },
    { id: 2, image: project2, title: "مصنع الطاقة الشمسية", link: "#" },
    { id: 3, image: project3, title: "مجمع سكني بالدمام", link: "#" },
    { id: 4, image: project4, title: "نظام الطاقة التجاري", link: "#" },
  ];

  // ... (keep your existing services array and variants)
 const parallaxVariants: Variants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };
  return (
    <section id="services" className="bg-gray-50" ref={ref}>
      {/* ... (keep your existing services section code) */}

      {/* Modern Projects Gallery */}
      <div className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          {/* ... (keep your existing gallery header) */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={parallaxVariants}
                className="relative group overflow-hidden rounded-2xl shadow-xl h-80 md:h-96"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-15 text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <Link href={project.link || "#"} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                      onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                    >
                      عرض التفاصيل
                    </motion.button>
                  </Link>
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