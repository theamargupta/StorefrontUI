import Footer from "@/Components/Footer";
import Navbar from "@/Components/NavbarComp";
import ProductDescription from "@/Components/ProductDescription";
import { products } from "@/Components/ProductSection";


export default function ProductDesc({params}) {
 
  return (
    <>
      <Navbar />
      <ProductDescription id={params.id}/>
      <Footer />
    </>
  );
}
