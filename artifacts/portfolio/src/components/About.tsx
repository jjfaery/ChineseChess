import { motion } from "framer-motion";
import portrait from "@assets/IMG_3812_1777802612391.jpeg";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-10"
        >
          <div className="flex justify-start items-center mb-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">Profile</span>
          </div>
          <div className="w-full h-[1px] bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 overflow-hidden relative group">
               <img src={portrait} alt="Jay Jay He portrait" className="h-full w-full object-cover object-center" />
               <div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="space-y-8 text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-24">
              <p>
                I’m a Creative Director working across brand, campaigns, and digital experiences.
              </p>
              <p>
                My work focuses on shaping how ideas are communicated — translating strategy into clear, compelling visual systems and narratives that connect across every touchpoint. From identity development and campaign direction to digital execution, I’m interested in how design creates meaning and drives understanding.
              </p>
              <p>
                I lead multidisciplinary teams from concept through delivery, ensuring that work is both conceptually strong and visually precise — aligning brand, communication, and craft into a cohesive direction.
              </p>
              <p>
                I’m particularly drawn to projects where design plays a defining role in how a brand is experienced, not just seen.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-10">Expertise</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <div className="flex flex-col">
                  {[
                    "Creative Direction",
                    "Digital Design",
                    "Graphic Design",
                    "Visual Systems"
                  ].map(skill => (
                    <span key={skill} className="text-sm font-medium text-white/70 border-b border-white/10 pb-3 mb-3">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  {[
                    "Brand Expression",
                    "Campaigns",
                    "Art Direction",
                    "Team Leadership"
                  ].map(skill => (
                    <span key={skill} className="text-sm font-medium text-white/70 border-b border-white/10 pb-3 mb-3">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-16 text-[11px] font-mono tracking-widest text-white/30 uppercase">Est. &mdash;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
