import Leadership from "@/components/Leadership";
import { motion } from "framer-motion";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-10"
        >
          <div className="flex justify-start items-center mb-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Approach</span>
          </div>
          <div className="w-full h-[1px] bg-[var(--border)] mb-0" />
        </motion.div>
      </div>
      <Leadership />
    </main>
  );
}
