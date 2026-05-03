import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent/20">
      <Nav />
      <Hero />
      <Work />
      <CaseStudies />
      <Leadership />
      <About />
      <Contact />
    </main>
  );
}
