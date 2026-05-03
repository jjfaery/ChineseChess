import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 h-16 md:h-[72px] flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Home"
        >
          <img
            src="http://images.squarespace-cdn.com/content/v1/554a9481e4b0ada23516d9fd/1453504037843-8XLB1T8BX9Q02ZW4NHOW/JayJayHe_Logo.png?format=1500w"
            alt="Jay Jay He"
            className="h-6 invert brightness-0 invert-100"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.05em] uppercase text-white/70">
          <button onClick={() => scrollTo("work")} className="hover:text-white transition-colors">
            Work
          </button>
          <button onClick={() => scrollTo("case-studies")} className="hover:text-white transition-colors">
            Case Studies
          </button>
          <button onClick={() => scrollTo("leadership")} className="hover:text-white transition-colors">
            Leadership
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
