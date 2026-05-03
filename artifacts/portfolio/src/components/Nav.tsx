import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@assets/IMG_3801_1777799555347.webp";

export default function Nav() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/10 h-16 md:h-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 h-full flex items-center justify-between">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Home"
          >
            <img
              src={logo}
              alt="Jay Jay He"
              className="h-8 md:h-9 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-[12px] font-medium tracking-[0.12em] uppercase">
            {links.map((link) => {
              const isActive = location === link.href || (location.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-all duration-300 hover:tracking-[0.2em] ${isActive ? "text-white" : "text-white/50 hover:text-white"}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col"
          >
            <div className="h-16 md:h-[72px] px-6 flex items-center justify-between border-b border-white/10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:opacity-70 transition-opacity focus:outline-none"
                aria-label="Home"
              >
                <img
                  src={logo}
                  alt="Jay Jay He"
                  className="h-8 md:h-9 object-contain"
                />
              </Link>
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-12 gap-8 text-2xl uppercase tracking-widest font-medium">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${location === link.href ? "text-white" : "text-white/50"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
