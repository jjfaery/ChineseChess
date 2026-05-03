import { motion } from "framer-motion";

const pillars = [
  {
    title: "Brand Systems",
    description: "Building structured, scalable foundations that ensure consistency across products, campaigns, and environments."
  },
  {
    title: "Campaign Direction",
    description: "Translating strategy into clear creative direction—ensuring ideas carry through with intent and precision."
  },
  {
    title: "Digital Experience",
    description: "Designing interfaces and systems that prioritize clarity, usability, and performance."
  },
  {
    title: "Spatial & Environmental Design",
    description: "Extending brand into physical space—creating cohesive experiences beyond the screen."
  },
  {
    title: "Creative Leadership",
    description: "Leading teams and cross-functional work to align vision, elevate craft, and deliver at scale."
  }
];

export default function Leadership() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-12"
        >
          <div className="flex justify-start items-center mb-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9F8CFF]">III. Approach</span>
          </div>
          <div className="max-w-4xl space-y-6 pb-10 border-b border-white/10">
            <p className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Approach
            </p>
            <div className="space-y-5 text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl">
              <p>
                I approach design as a system—aligning brand, communication, and execution into a cohesive direction that works across every touchpoint.
              </p>
              <p>
                I’m drawn to work where design defines how a brand is experienced, not just how it looks.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
              This approach carries across five core areas of expertise:
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl">
          <div className="border-t border-white/10" />
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 md:py-10 border-b border-white/10"
            >
              <h3 className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                {pillar.description}
              </p>
            </motion.div>
          ))}
          <div className="pt-10 md:pt-12 max-w-3xl">
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              The goal is not just to create design—but to ensure it works as a connected system across every touchpoint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
