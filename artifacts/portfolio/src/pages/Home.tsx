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
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center py-3 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">— 01</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">WORK</span>
        </div>
      </div>
      <Work />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center py-3 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">— 02</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">CONFIDENTIAL WORK</span>
        </div>
      </div>
      <CaseStudies />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center py-3 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">— 03</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">LEADERSHIP</span>
        </div>
      </div>
      <Leadership />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center py-3 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">— 04</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">ABOUT</span>
        </div>
      </div>
      <About />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center py-3 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">— 05</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">CONTACT</span>
        </div>
      </div>
      <Contact />
      
      <Footer />
    </main>
  );
}
