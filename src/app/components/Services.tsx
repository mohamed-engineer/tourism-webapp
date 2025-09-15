// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPassport } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "حجز تذاكر الطيران",
    desc: "أفضل العروض على الرحلات الجوية لجميع الوجهات.",
    icon: <FaPlane size={40} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "حجوزات الفنادق",
    desc: "إقامة فاخرة بأسعار مناسبة حول العالم.",
    icon: <FaHotel size={40} className="text-blue-600" />,
  },
  {
    id: 3,
    title: "تنظيم الرحلات السياحية",
    desc: "برامج سياحية متكاملة تناسب جميع الأذواق.",
    icon: <FaUmbrellaBeach size={40} className="text-blue-600" />,
  },
  {
    id: 4,
    title: "خدمات الفيزا",
    desc: "مساعدتك في استخراج التأشيرات بسهولة وسرعة.",
    icon: <FaPassport size={40} className="text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white px-6 md:px-16 text-right">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        خدماتنا
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
