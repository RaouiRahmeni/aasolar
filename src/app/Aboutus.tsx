"use client";

import { motion, useInView, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import aboutImage from "@/assets/img3.jpg"; // Replace with your actual image
import { useRef } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface CTA {
  text: string;
  link: string;
}

interface AboutData {
  title: string;
  description: string[];
  stats: StatItem[];
  cta: CTA;
}

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Dynamic content that could come from CMS or props
  const aboutData: AboutData = {
    title: "من نحن",
    description: [
      "نحن شركة سعودية رائدة في مجال حلول الطاقة الشمسية، نقدم أنظمة ذكية ومتكاملة تناسب احتياجات المنازل، المصانع، والشركات.",
      "بخبرة تزيد عن 20 سنوات في السوق، قمنا بتنفيذ أكثر من 500 مشروع ناجح في مختلف أنحاء المملكة.",
      "نؤمن أن مستقبل المملكة يكمن في التحول إلى طاقة نظيفة، ونحن هنا لنكون شركاء في رحلتك نحو الاستدامة."
    ],
    stats: [
      { value: "20+", label: "سنوات من الخبرة" },
      { value: "500+", label: "مشروع ناجح" },
      { value: "95%", label: "رضا العملاء" }
    ],
    cta: {
      text: "تواصل معنا",
      link: "#contact"
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  const statVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="about" className="py-40 bg-white text-gray-800 overflow-hidden " ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center text-end text-lg">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {aboutData.title}
          </motion.h2>

          {aboutData.description.map((paragraph, index) => (
            <motion.p 
              key={index}
              variants={itemVariants}
              className="text-xl leading-relaxed mb-4"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 my-8"
          >
            {aboutData.stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statVariants}
                className="bg-green-100 p-4 rounded-lg text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-md font-bold text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage as StaticImageData}
              alt="About our company"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-1 bg-green-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;