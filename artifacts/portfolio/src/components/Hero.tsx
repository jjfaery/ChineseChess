import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";

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

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black mt-[-64px] md:mt-[-72px]">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-20 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-white/70 uppercase">
              Creative Director · Digital Design · Brand
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="font-playfair text-5xl md:text-[84px] lg:text-[96px] leading-[1.05] font-extrabold text-white mb-8 tracking-[-0.03em] max-w-3xl"
          >
            Designing intelligence into digital experiences.
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light"
          >
            Creative Director shaping visual systems, brand expression, campaigns, and digital experiences that communicate with precision and intent.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-20 flex items-center gap-3 text-[13px] uppercase tracking-[0.1em] text-white/50"
      >
        <span className="relative overflow-hidden h-4 w-4">
          <ArrowDown className="w-4 h-4 animate-bounce absolute inset-0" />
        </span>
        Scroll
      </motion.div>
    </section>
  );
}
