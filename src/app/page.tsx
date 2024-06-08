import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import FeaturedBooks from "@/Components/FeaturedBooks";
import Testimonial from "@/Components/Testimonial";
import SpecialOffers from "@/Components/SpecialOffers";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <SpecialOffers/>
      <FeaturedBooks/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
