import { motion } from "framer-motion";
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
          className="max-w-5xl"
        >
          <motion.div variants={item} className="mb-6">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Creative Director · Digital Design · Brand
              </span>
              <div className="w-12 h-[1px] bg-white/30"></div>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-playfair text-5xl md:text-[88px] lg:text-[100px] leading-[1.02] font-extrabold text-white mb-8 tracking-[-0.04em] max-w-5xl"
          >
            Designing bold visual systems for digital experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light"
          >
            Creative Director shaping brand expression, digital design, and visual storytelling across modern platforms.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
