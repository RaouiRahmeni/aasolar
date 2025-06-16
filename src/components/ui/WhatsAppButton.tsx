"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "966123456789"; // Replace with your actual WhatsApp number
  const message = "مرحباً، أريد الاستفسار عن خدماتكم"; // Optional default message

  const handleClick = () => {
    // Open WhatsApp with your number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden sm:inline-block font-medium">تواصل معنا</span>
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;