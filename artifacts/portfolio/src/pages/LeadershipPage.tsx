import Leadership from "@/components/Leadership";
import { motion } from "framer-motion";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Approach</h1>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] font-mono">2025</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] max-w-3xl pb-10">
            Creative Direction & Leadership
          </h2>
          <div className="w-full h-[1px] bg-[var(--border)]" />
        </motion.div>
      </div>
      <Leadership />
    </main>
  );
}
