// components/ToursFilter.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = ["باريس", "دبي", "المالديف", "تركيا", "تايلاند"];
const durations = ["3 أيام", "5 أيام", "7 أيام", "10 أيام+"];
const budgets = ["أقل من 500$", "500$ - 1000$", "1000$ - 2000$", "أكثر من 2000$"];

const sampleTours = [
  { id: 1, title: "رحلة الأحلام إلى باريس", destination: "باريس", duration: "5 أيام", budget: "1000$ - 2000$", img: "/paris.avif" },
  { id: 2, title: "استجمام فاخر في المالديف", destination: "المالديف", duration: "7 أيام", budget: "أكثر من 2000$", img: "/maldives.jpeg" },
  { id: 3, title: "مغامرة رائعة في دبي", destination: "دبي", duration: "3 أيام", budget: "500$ - 1000$", img: "/dubai.jpg" },
  { id: 4, title: "جولة ثقافية في تركيا", destination: "تركيا", duration: "10 أيام+", budget: "1000$ - 2000$", img: "/turkey.jpg" },
  { id: 5, title: "استكشاف جمال تايلاند", destination: "تايلاند", duration: "7 أيام", budget: "500$ - 1000$", img: "/tailand.jpg" },

];

export default function ToursFilter() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [filteredTours, setFilteredTours] = useState<any[]>([]);

  const handleFilter = () => {
    const results = sampleTours.filter((tour) => {
      return (
        (selectedDestination ? tour.destination === selectedDestination : true) &&
        (selectedDuration ? tour.duration === selectedDuration : true) &&
        (selectedBudget ? tour.budget === selectedBudget : true)
      );
    });
    setFilteredTours(results);
  };

  return (
    <section id="tours" className="py-20 bg-white px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        ابحث عن رحلتك المثالية
      </h2>
      {/* الفلتر */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
        <select
          value={selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
          className="border bg-blue-700 rounded-lg p-3"
        >
          <option value="">الوجهة</option>
          {destinations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="border text-black rounded-lg p-3"
        >
          <option className="" value="">المدة</option>
          {durations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="border text-black rounded-lg p-3"
        >
          <option value="">الميزانية</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700 transition"
        >
          اعرض الرحلات
        </button>
      </div>

      {/* النتائج */}
      <AnimatePresence>
        {filteredTours.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredTours.map((tour) => (
              <motion.div
                key={tour.id}
                className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img src={tour.img} alt={tour.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-right">
                  <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
                  <p className="text-gray-500 text-sm">{tour.destination} • {tour.duration}</p>
                  <p className="text-blue-600 font-bold mt-2">{tour.budget}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
