"use client";
import { TiArrowBackOutline } from "react-icons/ti";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo-bg.png";
// ✅ Import your 14 images from assets/gallery/
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/5.jpeg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/1.jpeg";
import img6 from "@/assets/2.jpeg";
import img7 from "@/assets/3.jpeg";
import img8 from "@/assets/4.jpeg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// 📸 Group them into an array
const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function GalleryPage() {
  const router = useRouter();
  const t = useTranslations("gallery");

  const goBack = () => {
    router.back();
  };
  return (
    <div className="min-h-screen pb-16">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full border-b-4 border-green-500 bg-white shadow-md z-50"
        dir="ltr" // RTL direction for Arabic
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={Logo}
              alt="أضواء العاصمة"
              width={120}
              height={30}
              priority
              className="cursor-pointer"
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav
            className="flex items-center gap-2 hover:cursor-pointer hover:text-green-500"
            onClick={goBack}
          >
            <p>{t("previous")}</p>
            <TiArrowBackOutline className="text-2xl" />
          </nav>
        </div>
      </motion.header>
      <div className="mt-40 px-4 max-w-7xl mx-auto">
        {/* 🧱 Pinterest-style masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={img}
                alt={`صورة ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                placeholder="blur"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
