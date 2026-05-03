import { motion } from "framer-motion";

const pillars = [
  {
    title: "Product Thinking",
    description: "Design is not just how it looks, but how it works. I focus on solving the right problems, aligning user needs with business objectives to create sustainable value."
  },
  {
    title: "Systems & Scalability",
    description: "Building foundations that empower teams. From component libraries to design ops, I create systems that increase velocity while maintaining quality."
  },
  {
    title: "Team Leadership",
    description: "Fostering environments where creativity thrives. I mentor designers, establish clear critique rituals, and build cross-functional bridges with engineering and product."
  },
  {
    title: "Business Impact",
    description: "Connecting design metrics to business outcomes. Beautiful interfaces only matter if they drive conversion, retention, and enterprise value."
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="text-[13px] font-medium tracking-[0.15em] text-accent uppercase mb-6">Leadership & Approach</h2>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
              How I Lead Design
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Design leadership is about orchestration. It's about aligning vision, talent, and resources to build products that matter.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/10 pt-8"
              >
                <h3 className="text-xl font-medium mb-4 text-white">{pillar.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
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
