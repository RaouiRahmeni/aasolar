"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { GoLinkExternal } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage =
    languages.find((lang) => pathname.startsWith(`/${lang.code}`)) ||
    languages[0];

  const navItems = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("contactus"), href: "#contact" },
    {
      label: t("gallery"),
      href: `/${currentLanguage.code}/gallery`,
      icon: <GoLinkExternal className="w-4 h-4" />,
      external: true,
    },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed top-0 w-full bg-white/50 backdrop-blur-md shadow-sm z-50"
      dir="ltr"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative z-10"
          >
            <Link href="/" className="block">
              <Image
                src={Logo}
                alt="أضواء العاصمة"
                width={160}
                height={40}
                priority
                className="w-32 sm:w-40 h-auto cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-sky-600 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.icon && (
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                  )}

                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-10 p-2 text-gray-700 hover:text-sky-600 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              style={{ top: "4rem" }}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 rounded-lg transition-all duration-200 group"
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.icon && (
                        <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                          {item.icon}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA Button in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="#demo"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    احصل على عرض
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
