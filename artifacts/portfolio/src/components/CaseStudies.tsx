import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-playfair text-3xl md:text-5xl font-bold tracking-tight mb-4">Confidential Work</h2>
            <p className="text-white/50 max-w-xl text-lg">Deep dives into brand strategy, campaign direction, and unreleased visual systems.</p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-[0.15em] font-medium"
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
              className="group relative aspect-[16/9] bg-[#111] overflow-hidden flex items-center justify-center border border-white/5"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center p-8 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 transform group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                <Lock className="w-6 h-6 text-white/40 mb-6" strokeWidth={1.5} />
                <h3 className="font-playfair text-2xl font-bold mb-3">Project {i === 1 ? "A" : "B"}</h3>
                <p className="text-xs text-white/50 uppercase tracking-[0.2em] mb-6">Visual Identity System</p>
                <div className="text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 text-white/40">Protected</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
