import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent/20">
      <Nav />
      <Hero />
      <Work />
      <CaseStudies />
      <Leadership />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
