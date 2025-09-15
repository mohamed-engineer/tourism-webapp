import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedTours from "./components/FeaturedTours";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/footer";
import ToursFilter from "./components/ToursFilter";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyChooseUs />
    <FeaturedTours />
    <Services />
    <ToursFilter />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  );
}
