"use client";

import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(`/${locale}`, "");
    router.replace(`/${nextLocale}${pathWithoutLocale}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for a "snappier" feel
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={toggleLanguage}
        className="group relative flex items-center gap-3 px-5 py-3 
                   bg-white/70 dark:bg-slate-900/70 backdrop-blur-md 
                   border border-slate-200 dark:border-slate-800
                   text-slate-900 dark:text-slate-100
                   rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                   hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                   hover:border-sky-500/50 dark:hover:border-sky-400/50
                   transition-all duration-300"
        aria-label={
          locale === "ar" ? "Switch to English" : "تغيير اللغة إلى العربية"
        }
      >
        {/* Subtle background glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <FaGlobe className="text-lg text-sky-500 group-hover:rotate-12 transition-transform duration-500" />

        <span className="text-sm font-semibold tracking-wide">
          {locale === "ar" ? "ENGLISH" : "العربية"}
        </span>

        {/* Indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
