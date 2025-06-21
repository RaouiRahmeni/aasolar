import Image from "next/image";
import Hero from "./Hero";
import AboutUs from "./Aboutus";
import ServicesSection from "./Services";
import ContactNow from "./ContactNow ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="mt-40">
      <Hero/>
      <AboutUs/>
      <ServicesSection/>
      <ContactNow/>
      <Footer/>
    
    </div>
  );
}
