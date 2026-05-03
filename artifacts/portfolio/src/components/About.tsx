import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 overflow-hidden relative group">
               <div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay pointer-events-none" />
               <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center text-white/5 font-playfair font-bold text-8xl tracking-widest leading-[0.8] select-none">
                 <span>J</span>
                 <span>J</span>
                 <span>H</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="space-y-8 text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              <p>
                I am a Creative Director and Digital Design Director focused on shaping visual systems, campaigns, and digital experiences that communicate with precision and intent.
              </p>
              <p>
                My work spans brand expression, graphic design, and integrated campaigns, driving creative vision from concept to scale. I believe in establishing strong, scalable design languages that anchor brands across all touchpoints.
              </p>
              <p>
                Leading multidisciplinary teams, I champion a fearless creative culture where every typographic choice, composition, and interaction is deliberate and crafted.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Creative Direction",
                  "Digital Design",
                  "Graphic Design",
                  "Visual Systems",
                  "Brand Expression",
                  "Campaigns",
                  "Storytelling"
                ].map(skill => (
                  <span key={skill} className="px-4 py-2 border border-white/10 text-[11px] font-medium uppercase tracking-[0.1em] text-white/70 rounded-full hover:border-white/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-10 text-[11px] font-mono tracking-widest text-white/30 uppercase">Est. &mdash;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
