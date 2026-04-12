"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhatsAppButton = () => {
  const t = useTranslations("WhatsAppButton");

  const phoneNumber = "966123456789";
  const message = t("defaultMessage");

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.2, // Slightly more delay than the language switcher for a staggered entrance
        ease: [0.23, 1, 0.32, 1],
      }}
      // Placed at bottom-24 to stay above the Language Switcher (which is bottom-8)
      className="fixed bottom-24 right-8 z-50"
    >
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-3 px-5 py-3 
                   bg-white/70 dark:bg-slate-900/70 backdrop-blur-md 
                   border border-slate-200 dark:border-slate-800
                   text-slate-900 dark:text-slate-100
                   rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                   hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                   hover:border-emerald-500/50 dark:hover:border-emerald-400/50
                   transition-all duration-300"
        aria-label={t("ariaLabel")}
      >
        {/* Hover background glow */}
        <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <FaWhatsapp className="text-xl text-emerald-500 group-hover:scale-110 transition-transform duration-300" />

        <span className="text-sm font-semibold tracking-wide uppercase">
          {t("button")}
        </span>

        {/* Status Indicator */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;
