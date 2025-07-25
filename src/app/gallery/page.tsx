"use client";
import Header from "@/components/layout/Header";
import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen pb-16">
      <Header />
      <div className="mt-40 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
          معرض الصور
        </h1>

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
