import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Creative Vision",
    description: "Setting visual and conceptual direction anchoring brands and campaigns with clear intent."
  },
  {
    num: "02",
    title: "Art Direction",
    description: "Orchestrating visual storytelling through photography, motion, and digital execution with editorial precision."
  },
  {
    num: "03",
    title: "Brand Systems",
    description: "Building scalable, robust design languages that extend fluidly across every consumer touchpoint."
  },
  {
    num: "04",
    title: "Digital Experience",
    description: "Shaping connected digital ecosystems — from UI design systems to immersive web experiences — that express a brand's deepest character."
  },
  {
    num: "05",
    title: "Team Leadership",
    description: "Empowering multidisciplinary creative teams to push boundaries while maintaining rigorous standards of craft."
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
          className="mb-8 md:mb-10"
        >
          <div className="flex justify-start items-center mb-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">Approach</span>
          </div>
          <div className="max-w-4xl pb-12 border-b border-white/10">
            <p className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Directing with purpose and precision.
            </p>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
              Creative leadership is about establishing a clear vision and empowering teams to execute it flawlessly across all mediums.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col"
            >
              <div className="w-full h-[1px] bg-white/10 mb-6" />
              <span className="block mb-4 text-[11px] text-white/30 font-mono tracking-widest">{pillar.num}</span>
              <h3 className="text-xl font-semibold mb-4 text-white">{pillar.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
