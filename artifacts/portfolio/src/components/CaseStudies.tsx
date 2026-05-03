import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Confidential Work</h2>
            <p className="text-white/50 max-w-xl">Deep dives into enterprise strategy, organizational transformation, and unreleased products.</p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 py-3 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
          >
            Request Access
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[16/9] bg-white/5 overflow-hidden flex items-center justify-center border border-white/5"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center p-8 bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 p-8 transform group-hover:scale-105 transition-transform duration-500">
                <Lock className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-medium mb-2">Project {i === 1 ? "Alpha" : "Omega"}</h3>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-6">Enterprise SaaS</p>
                <div className="text-xs uppercase tracking-[0.2em] border-b border-accent/30 pb-1 text-accent">Protected</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
