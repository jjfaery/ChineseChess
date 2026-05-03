import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 md:py-48 bg-[#0A0A0A] relative border-b border-white/10 text-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex justify-start items-center mb-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">V. Contact</span>
          </div>
          <div className="w-full h-[1px] bg-white/10 mb-16" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h2 className="font-playfair text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight text-white mb-20 text-left max-w-5xl leading-[1.05]">
            Let's make something worth remembering.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <a 
                href="mailto:hello@example.com" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium tracking-[0.15em] uppercase text-[11px] overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get in touch</span>
                <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100 z-0"></div>
              </a>
            </div>
            
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Open to creative direction, brand partnerships, and design leadership opportunities globally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
