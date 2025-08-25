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

    // Get current path without the locale prefix
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(`/${locale}`, "");

    // Navigate to the same path with the new locale
    router.replace(`/${nextLocale}${pathWithoutLocale}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label={
          locale === "ar" ? "Switch to English" : "تغيير اللغة إلى العربية"
        }
      >
        <FaGlobe className="text-2xl" />
        <span className="hidden sm:inline-block font-medium">
          {locale === "ar" ? "English" : "العربية"}
        </span>
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
