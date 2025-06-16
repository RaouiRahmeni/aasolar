"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSun, FiHome, FiBriefcase, FiTrendingUp } from "react-icons/fi";
import { ReactElement } from "react";

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      icon: <FiSun className="w-8 h-8" />,
      title: "أنظمة الطاقة الشمسية للمنازل",
      description: "حلول متكاملة لتوفير الطاقة للمنازل مع ضمان كفاءة عالية وتوفير في الفواتير",
      features: ["تركيب الألواح", "أنظمة التخزين", "مراقبة الأداء"],
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "حلول الطاقة للشركات",
      description: "أنظمة مصممة خصيصًا للشركات والمصانع لتقليل التكاليف التشغيلية",
      features: ["حلول متكاملة", "صيانة دورية", "تقارير الأداء"],
    },
    {
      icon: <FiHome className="w-8 h-8" />,
      title: "أنظمة الطاقة للمجمعات السكنية",
      description: "تصميم وتنفيذ أنظمة الطاقة الشمسية للمجمعات السكنية الكبيرة",
      features: ["تصميم مخصص", "تركيب متكامل", "صيانة شاملة"],
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "تحسين كفاءة الطاقة",
      description: "تحليل وتحسين أنظمة الطاقة الحالية لزيادة الكفاءة وتقليل الهدر",
      features: ["فحص الطاقة", "توصيات التحسين", "تنفيذ الحلول"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  return (
    <section id="services" className="py-40 bg-gray-50"  ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            خدماتنا المتكاملة
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            نقدم حلولاً مبتكرة في مجال الطاقة الشمسية تلبي جميع احتياجاتك من المنازل إلى المشاريع الكبيرة
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            //   whileHover={hoverEffect}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex justify-center items-center flex-col h-full"
            >
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-green-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-end">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow text-end">{service.description}</p>
              <ul className="space-y-2 ">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex justify-end items-center text-gray-700">
                    {feature}
                    <span className="w-2 h-2 bg-green-500 rounded-full ms-2"></span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                المزيد من التفاصيل
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;