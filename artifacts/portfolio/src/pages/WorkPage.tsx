import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/20 pt-8"
        >
          <h1 className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6">Index</h1>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold tracking-tight text-white max-w-3xl">
            Selected Works
          </h2>
        </motion.div>
      </div>
      <Work />
      <CaseStudies />
    </main>
  );
}
