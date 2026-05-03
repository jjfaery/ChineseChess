import { motion } from "framer-motion";

const pillars = [
  {
    title: "Creative Vision",
    description: "Setting visual and conceptual direction anchoring brands and campaigns with clear intent."
  },
  {
    title: "Visual Systems",
    description: "Building scalable design languages and brand systems for every touchpoint, ensuring narrative consistency."
  },
  {
    title: "Creative Leadership",
    description: "Building and directing multidisciplinary creative teams, fostering a fearless and collaborative creative culture."
  },
  {
    title: "Craft & Intent",
    description: "Holding a precise standard for craft — every typographic choice, composition, and motion decision is deliberate."
  }
];

export default function Leadership() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Directing with purpose and precision.
            </p>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
              Creative leadership is about establishing a clear vision and empowering teams to execute it flawlessly across all mediums.
            </p>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/20 pt-8"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
