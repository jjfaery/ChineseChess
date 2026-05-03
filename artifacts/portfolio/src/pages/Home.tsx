import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <div className="flex justify-between items-center py-3 border-t border-[var(--border)]/50">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] font-mono">— {number}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] font-mono">{label}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent/20">
      <Nav />
      <Hero />
      <SectionMarker number="01" label="WORK" />
      <Work />
      <SectionMarker number="02" label="CONFIDENTIAL WORK" />
      <CaseStudies />
      <SectionMarker number="03" label="LEADERSHIP" />
      <Leadership />
      <SectionMarker number="04" label="ABOUT" />
      <About />
      <SectionMarker number="05" label="CONTACT" />
      <Contact />
      <Footer />
    </main>
  );
}
