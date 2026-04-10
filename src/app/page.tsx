import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import CorporateEvents from "@/components/CorporateEvents";
import Amenities from "@/components/Amenities";
import Testimonial from "@/components/Testimonial";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Properties />
        <CorporateEvents />
        <Amenities />
        <Testimonial />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
