import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Destination from "@/components/Destination";
import FeaturedProperty from "@/components/FeaturedProperty";
import Properties from "@/components/Properties";
import CorporateEvents from "@/components/CorporateEvents";
import Amenities from "@/components/Amenities";
import WhyFreeport from "@/components/WhyFreeport";
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
        <Destination />
        <FeaturedProperty />
        <Properties />
        <CorporateEvents />
        <WhyFreeport />
        <Amenities />
        <Testimonial />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
