// components/CTA.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-16 px-6 md:px-16 text-center text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        جاهز تبدأ رحلتك القادمة؟
      </motion.h2>
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        احجز معنا الآن واستمتع بأفضل العروض والخدمات المميزة.
      </motion.p>
      <Link
        href="/booking"
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-100 transition"
      >
        احجز الآن
      </Link>
    </section>
  );
}
