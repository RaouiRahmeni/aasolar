"use client";

import { motion, useInView, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import aboutImage from "@/assets/img3.jpg";
import { useRef } from "react";
import { FiAward, FiUsers, FiCheckCircle } from "react-icons/fi";

interface StatItem {
  label: string;
  icon?: React.ReactNode;
}

interface AboutData {
  title: string;
  description: string[];
  stats: StatItem[];
  cta: {
    text: string;
    link: string;
  };
}

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutData: AboutData = {
    title: "من نحن",
    description: [
      "نحن شركة سعودية رائدة في مجال حلول الطاقة الشمسية، نقدم أنظمة ذكية ومتكاملة تناسب احتياجات المنازل، المصانع، والشركات.",
      "بخبرة تزيد عن 20 سنوات في السوق، قمنا بتنفيذ أكثر من 500 مشروع ناجح في مختلف أنحاء المملكة.",
      "نؤمن أن مستقبل المملكة يكمن في التحول إلى طاقة نظيفة، ونحن هنا لنكون شركاء في رحلتك نحو الاستدامة."
    ],
    stats: [
      { 
        label: "سنوات من الخبرة",
        icon: <FiAward className="w-6 h-6 mx-auto" />
      },
      { 
        label: "مشروع ناجح",
        icon: <FiCheckCircle className="w-6 h-6 mx-auto" />
      },
      { 
        label: "رضا العملاء",
        icon: <FiUsers className="w-6 h-6 mx-auto" />
      }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0, rotate: -2 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
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
        delay: i * 0.15 + 0.5,
        duration: 0.6,
        type: "spring",
        stiffness: 120
      }
    })
  };

  const underlineVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-28 bg-white text-gray-800 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center text-end">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="order-2 md:order-1"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight relative inline-block">
              {aboutData.title}
              <motion.span
                variants={underlineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute -bottom-2 md:-bottom-3 right-0 h-1 bg-green-500 origin-right"
              />
            </h2>
          </motion.div>

          {aboutData.description.map((paragraph, index) => (
            <motion.p 
              key={index}
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-700"
            >
              {paragraph}
            </motion.p>
          ))}

        {/*  <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 my-6 md:my-10"
          >
            {aboutData.stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statVariants}
                className="bg-green-50 p-4 md:p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -8 }}
              >
                {stat.icon && (
                  <div className="text-green-600 mb-2 md:mb-3">
                    {stat.icon}
                  </div>
                )}
                <div className="text-sm md:text-md font-medium text-gray-600">{stat.label}</div>
              </motion.div>
             ))}
          </motion.div>
*/} 
          <motion.div variants={itemVariants}>
            <motion.a
              href={aboutData.cta.link}
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-all hover:shadow-lg hover:shadow-green-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {aboutData.cta.text}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="order-1 md:order-2 relative"
        >
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
            <Image
              src={aboutImage as StaticImageData}
              alt="About our company"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            <motion.div 
              variants={underlineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute bottom-0 right-0 h-1 md:h-1.5 bg-green-500 origin-right"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;