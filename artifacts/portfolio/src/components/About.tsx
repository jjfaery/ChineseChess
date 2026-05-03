import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-black/5 overflow-hidden">
               {/* Abstract placeholder or real photo for Jay Jay He. Since we didn't generate one, we'll use a very minimal abstract dark block with a subtle texture, as it fits the architectural vibe */}
               <div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
                 <div className="text-white/20 uppercase tracking-[0.5em] text-xs transform -rotate-90 origin-center whitespace-nowrap">Jay Jay He</div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <h2 className="text-[13px] font-semibold tracking-[0.15em] text-black/50 uppercase mb-8">About</h2>
            
            <div className="space-y-6 text-lg md:text-xl text-black/80 font-light leading-relaxed max-w-2xl">
              <p>
                I am a Creative Director and Product Design leader focused on shaping AI-driven platforms, complex data products, and robust design systems.
              </p>
              <p>
                Over the past decade, I've led multidisciplinary design teams to build enterprise-scale solutions that balance surgical precision with elegant, human-centric experiences. I believe that the best design is invisible—it empowers users by making the complex feel effortless.
              </p>
              <p>
                My work exists at the intersection of business strategy, technical feasibility, and uncompromising craft.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-black/10 text-xs font-medium uppercase tracking-wider text-black/60 rounded-full">Creative Direction</span>
              <span className="px-4 py-2 border border-black/10 text-xs font-medium uppercase tracking-wider text-black/60 rounded-full">Product Design</span>
              <span className="px-4 py-2 border border-black/10 text-xs font-medium uppercase tracking-wider text-black/60 rounded-full">Design Systems</span>
              <span className="px-4 py-2 border border-black/10 text-xs font-medium uppercase tracking-wider text-black/60 rounded-full">AI Platforms</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
