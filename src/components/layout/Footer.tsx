"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "@/assets/logo.png";

const socialLinks = [
  { icon: FaTwitter, url: "#" },
  { icon: FaLinkedin, url: "#" },
  { icon: FaInstagram, url: "#" },
];

const fadeIn = (i: number) => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  },
});

const Footer = () => {
  const t = useTranslations("Footer");

  const quickLinks = [
    { key: "home", href: "#" },
    { key: "services", href: "#services" },
    { key: "projects", href: "#projects" },
    { key: "about", href: "#about" },
    { key: "contact", href: "#contact" },
  ];

  const services = [
    { key: "residential", href: "#" },
    { key: "commercial", href: "#" },
    { key: "complexes", href: "#" },
    { key: "efficiency", href: "#" },
    { key: "maintenance", href: "#" },
  ];

  const contactItems = [
    { icon: FiPhone, text: t("contact.phone") },
    { icon: FiMail, text: t("contact.email") },
    { icon: FiMapPin, text: t("contact.address") },
  ];

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10"
        >
          {/* Brand */}
          <motion.div variants={fadeIn(0)} className="text-end">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <Image
                src={logo}
                alt={t("logoAlt")}
                width={140}
                height={40}
                className="mx-auto sm:mx-0"
              />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {t("description")}
              </p>
            </div>

            <div className="flex sm:justify-end justify-center gap-3">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  className="p-3 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 transition-colors"
                  variants={fadeIn(i + 1)}
                  aria-label={t("socialAria")}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn(1)} className="text-end">
            <h4 className="text-xl font-bold mb-4 border-b border-green-500 inline-block pb-1">
              {t("quickLinksTitle")}
            </h4>
            <ul className="space-y-3 mt-4">
              {quickLinks.map(({ key, href }, i) => (
                <motion.li key={key} variants={fadeIn(i + 2)}>
                  <a
                    href={href}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {t(`quickLinks.${key}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn(2)} className="text-end">
            <h4 className="text-xl font-bold mb-4 border-b border-green-500 inline-block pb-1">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-3 mt-4">
              {services.map(({ key, href }, i) => (
                <motion.li key={key} variants={fadeIn(i + 3)}>
                  <a
                    href={href}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {t(`services.${key}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-200 text-center text-sm text-gray-500 pt-6"
        >
          {t("copyright", { year: new Date().getFullYear() })}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
