"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "@/assets/logo.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: t("quickLinksTitle"),
      namespace: "quickLinks", // Added this
      links: [
        { key: "home", href: "#" },
        { key: "services", href: "#services" },
        { key: "projects", href: "#projects" },
        { key: "about", href: "#about" },
      ],
    },
    {
      title: t("servicesTitle"),
      namespace: "services", // Added this
      links: [
        { key: "residential", href: "#" },
        { key: "commercial", href: "#" },
        { key: "efficiency", href: "#" },
        { key: "maintenance", href: "#" },
      ],
    },
  ];
  const socialLinks = [
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-8 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Image
              src={logo}
              alt={t("logoAlt")}
              width={160}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  className="group p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <motion.div variants={itemVariants} key={section.title}>
              <h4 className="text-slate-900 font-semibold mb-6 tracking-tight">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} className="...">
                      <span className="mr-1">
                        {/* Use the namespace from the section object */}
                        {t(`${section.namespace}.${link.key}`)}
                      </span>
                      {/* <FiArrowUpRight className="..." /> */}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-md bg-sky-50 text-sky-600">
                  <FiPhone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Call us
                  </p>
                  <p className="text-sm text-slate-600 font-medium group-hover:text-sky-600 transition-colors">
                    {t("contact.phone")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-md bg-sky-50 text-sky-600">
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Email us
                  </p>
                  <p className="text-sm text-slate-600 font-medium group-hover:text-sky-600 transition-colors">
                    {t("contact.email")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-widest"
        >
          <p>© {currentYear} — Aflak solar</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
