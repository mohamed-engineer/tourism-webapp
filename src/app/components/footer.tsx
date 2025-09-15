// components/Footer.tsx
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 text-right">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">شركة السياحة</h3>
          <p>نقدم لك أفضل الرحلات والعروض السياحية حول العالم.</p>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">الرئيسية</a></li>
            <li><a href="/tours" className="hover:text-white">العروض</a></li>
            <li><a href="/services" className="hover:text-white">الخدمات</a></li>
            <li><a href="/contact" className="hover:text-white">تواصل معنا</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">تابعنا</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
