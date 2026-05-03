import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 md:py-48 bg-[#0A0A0A] relative border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-white/20 mb-12"></div>
          
          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            Let's make something worth remembering.
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl mb-16 max-w-xl mx-auto font-light">
            Open to creative direction, brand partnerships, and design leadership opportunities.
          </p>

          <a 
            href="mailto:hello@example.com" 
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-medium tracking-[0.15em] uppercase text-[11px] overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get in touch</span>
            <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100 z-0"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
