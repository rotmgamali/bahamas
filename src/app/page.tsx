import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Venues from "@/components/sections/Venues";
import Packages from "@/components/sections/Packages";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Venues />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
