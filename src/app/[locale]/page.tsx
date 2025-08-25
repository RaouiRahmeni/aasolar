import Image from "next/image";
import Hero from "../Hero";
import AboutUs from "../Aboutus";
import ServicesSection from "../Services";
import ContactNow from "../ContactNow ";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="mt-40 overflow-hidden">
      <Header />
      <div>
        <Hero />
        <AboutUs />
        <ServicesSection />
        <ContactNow />
      </div>
      <Footer />
    </div>
  );
}
