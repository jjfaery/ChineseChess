import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black pt-16 md:pt-[72px]">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}hero-poster.png`} className="w-full h-full object-cover opacity-55">
          <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_22%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end min-h-[calc(100dvh-7rem)]">
          <div className="lg:col-span-6 xl:col-span-7 max-w-4xl">
            <motion.div variants={item} className="mb-6">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-[#9F8CFF]">Creative Director · Brand Systems · Digital Experience</span>
            </motion.div>
            <motion.h1 variants={item} className="font-playfair text-[clamp(3.5rem,8vw,7.6rem)] leading-[0.9] font-extrabold text-white tracking-[-0.055em] max-w-4xl uppercase">
              Designing systems that align brand, experience, and execution.
            </motion.h1>
            <motion.p variants={item} className="mt-8 text-base md:text-xl text-white/72 max-w-2xl leading-relaxed font-light">
              I translate strategy into cohesive systems—connecting brand, campaigns, digital, and environment into a unified experience.
            </motion.p>
            <motion.div variants={item} className="mt-10">
              <a href="#work" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors">
                View selected work <span>→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
