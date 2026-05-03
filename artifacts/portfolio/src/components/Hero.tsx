import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`${import.meta.env.BASE_URL}hero-poster.png`}
          className="w-full h-full object-cover opacity-60"
        >
          <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-20 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="text-[11px] md:text-[13px] font-medium tracking-[0.15em] text-accent uppercase">
              Creative Director · Product Design Leadership
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-5xl md:text-[84px] leading-[1.05] font-bold text-white mb-8 tracking-[-0.03em] max-w-3xl"
          >
            Designing intelligence into digital experiences.
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light"
          >
            Creative Director and Product Design leader shaping AI-driven platforms, design systems, and business-impactful digital products.
          </motion.p>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToWork}
        className="absolute bottom-12 left-6 md:left-20 flex items-center gap-3 text-[13px] uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors group focus:outline-none"
        aria-label="Scroll to work"
      >
        <span className="relative overflow-hidden h-4 w-4">
          <ArrowDown className="w-4 h-4 transform group-hover:translate-y-full transition-transform duration-300 absolute inset-0" />
          <ArrowDown className="w-4 h-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 absolute inset-0" />
        </span>
        Scroll to explore
      </motion.button>
    </section>
  );
}
