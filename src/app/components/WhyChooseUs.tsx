// components/WhyChooseUs.tsx
"use client";
import { motion } from "framer-motion";
import { FaHeadset, FaDollarSign, FaGlobeAmericas, FaStar } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "خدمة عملاء 24/7",
    desc: "دعم سريع طوال اليوم لمساعدتك في كل استفساراتك.",
    icon: <FaHeadset size={40} />,
  },
  {
    id: 2,
    title: "أسعار تنافسية",
    desc: "أفضل العروض بأعلى جودة وخدمات ممتازة.",
    icon: <FaDollarSign size={40} />,
  },
  {
    id: 3,
    title: "وجهات متنوعة",
    desc: "اختر من بين أكثر الوجهات السياحية إثارة حول العالم.",
    icon: <FaGlobeAmericas size={40} />,
  },
  {
    id: 4,
    title: "خبرة أكثر من 15 سنة",
    desc: "فريقنا يضمن لك رحلة آمنة وممتعة مع خبرة طويلة في المجال.",
    icon: <FaStar size={40} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        لماذا تختارنا؟
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition transform hover:scale-[1.03] text-center border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex justify-center mb-6 text-blue-600 group-hover:text-blue-700 transition">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
