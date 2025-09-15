// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white text-right">
    

      {/* Right Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src="/header.jpg" // ضع صورة هنا في public/images
          alt="رحلة سياحية"
          width={500}
          height={500}
          className=""
        />
      </motion.div>

        {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl text-right md:text-6xl font-bold text-gray-900 leading-snug">
          اكتشف <span className="text-blue-600">العالم</span> معنا
        </h1>
        <p className="text-lg text-right text-gray-600 max-w-md mx-auto md:mx-0">
          استمتع بأفضل الرحلات السياحية إلى أجمل الوجهات العالمية مع عروض خاصة وحجوزات سريعة.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            href="#tours"
            className="bg-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition"
          >
            استكشف الرحلات
          </Link>
          <Link
            href="/booking"
            className="border-1 border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 px-6 py-3 rounded-lg text-lg shadow-lg transition"
          >
            احجز الآن
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
