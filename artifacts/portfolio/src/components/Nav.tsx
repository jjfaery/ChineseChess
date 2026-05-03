import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)] h-16 md:h-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 h-full flex items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-70 transition-opacity focus:outline-none" aria-label="Home">
            <img
              src="http://images.squarespace-cdn.com/content/v1/554a9481e4b0ada23516d9fd/1453504037843-8XLB1T8BX9Q02ZW4NHOW/JayJayHe_Logo.png?format=1500w"
              alt="Jay Jay He"
              className="h-8 md:h-9 invert brightness-0 invert-100 [html[data-theme='light']_&]:invert-0 [html[data-theme='light']_&]:brightness-0"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-10 text-[12px] font-medium tracking-[0.12em] uppercase">
              {links.map((link) => {
                const isActive = location === link.href || (location.startsWith(link.href) && link.href !== "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 transition-all duration-300 hover:tracking-[0.2em] ${isActive ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--foreground)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button className="text-[var(--foreground)] focus:outline-none" onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--background)] flex flex-col"
          >
            <div className="h-16 md:h-[72px] px-6 flex items-center justify-between border-b border-[var(--border)]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity focus:outline-none" aria-label="Home">
                <img
                  src="http://images.squarespace-cdn.com/content/v1/554a9481e4b0ada23516d9fd/1453504037843-8XLB1T8BX9Q02ZW4NHOW/JayJayHe_Logo.png?format=1500w"
                  alt="Jay Jay He"
                  className="h-8 md:h-9 invert brightness-0 invert-100 [html[data-theme='light']_&]:invert-0 [html[data-theme='light']_&]:brightness-0"
                />
              </Link>
              <button className="text-[var(--foreground)] focus:outline-none" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-12 gap-8 text-2xl uppercase tracking-widest font-medium text-[var(--foreground)]">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${location === link.href ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}
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
