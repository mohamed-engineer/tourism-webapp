// components/FeaturedTours.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "رحلة إلى باريس",
    desc: "استمتع بجولة رومانسية في مدينة الحب.",
    img: "/paris.avif",
    price: "1200$",
  },
  {
    id: 2,
    title: "جزر المالديف",
    desc: "إجازة فاخرة على أجمل الشواطئ.",
    img: "/maldives.jpeg",
    price: "2000$",
  },
  {
    id: 3,
    title: "رحلة إلى دبي",
    desc: "استمتع بمزيج الفخامة والمغامرة في دبي.",
    img: "/dubai.jpg",
    price: "1500$",
  },

];

export default function FeaturedTours() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16 text-right">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        عروضنا المميزة
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tours.map((tour, i) => (
          <motion.div
            key={tour.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <Image
              src={tour.img}
              alt={tour.title}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">{tour.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-600">{tour.price}</span>
                <Link
                  href={`/tours/${tour.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  التفاصيل
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
