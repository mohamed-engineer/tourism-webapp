// components/Testimonials.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "محمد علي",
    feedback: "تجربة رائعة! الرحلة كانت منظمة وكل شيء كان ممتاز. أنصح الجميع بالتعامل معهم.",
    img: "/testimonial-2.jpg",
  },
  {
    id: 2,
    name: "سارة أحمد",
    feedback: "أفضل شركة تعاملت معها! ساعدوني في اختيار الرحلة المناسبة وكانت الخدمة ممتازة.",
    img: "/about.jpg",
  },
  {
    id: 3,
    name: "خالد يوسف",
    feedback: "خدمة ممتازة وأسعار مناسبة جدًا، رحلتي للمالديف كانت أجمل تجربة في حياتي.",
    img: "/testimonial-1.jpg",
  },
  {
    id: 4,
    name: "أسماء محمود",
    feedback: "الدعم كان سريع جدًا وساعدوني في كل الاستفسارات. شكراً لكم!",
    img: "/girl.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 px-6 md:px-16 text-right">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        آراء عملائنا
      </motion.h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="pb-12"
        dir="rtl"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              className="relative bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:scale-[1.03] h-full flex flex-col border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {/* أيقونة الاقتباس */}
              <div className="absolute top-7 right-6 bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
                <span className="text-3xl font-bold">“</span>
              </div>
              {/* صورة واسم العميل */}
              <div className="flex flex-col items-center mb-6 mt-6">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-4 border-blue-500 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-3">{testimonial.name}</h3>
              </div>
              {/* نص التعليق */}
              <p className="text-gray-600 leading-relaxed text-center text-base">
                {testimonial.feedback}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
