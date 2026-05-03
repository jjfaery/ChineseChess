import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 md:py-48 bg-[var(--background)] relative border-b border-[var(--border)] text-[var(--foreground)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="w-full h-[1px] bg-[var(--border)] mb-6" />
          <div className="flex justify-between items-center mb-8">
            <span className="text-[11px] font-mono text-[var(--muted-foreground)]">— 05</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Contact</span>
          </div>
          <div className="w-full h-[1px] bg-[var(--border)] mb-16" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h2 className="font-playfair text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight text-[var(--foreground)] mb-20 text-left max-w-5xl leading-[1.05]">
            Let's make something worth remembering.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <a 
                href="mailto:hello@example.com" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[var(--foreground)] text-[var(--primary-foreground)] font-medium tracking-[0.15em] uppercase text-[11px] overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]">Get in touch</span>
                <div className="absolute inset-0 bg-[var(--background)] transform scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100 z-0"></div>
              </a>
            </div>
            
            <p className="text-[var(--muted-foreground)] text-lg md:text-xl font-light leading-relaxed max-w-md">
              Open to creative direction, brand partnerships, and design leadership opportunities globally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
