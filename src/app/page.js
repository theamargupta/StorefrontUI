import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/NavbarComp";
import ProductsSection from "@/Components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <Footer/>
    </>
  );
}
