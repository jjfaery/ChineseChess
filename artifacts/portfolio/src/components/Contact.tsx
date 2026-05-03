import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#0A0A0A] relative border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-16 h-[1px] bg-accent/50 mb-12"></div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8">
            Let's build something exceptional.
          </h2>
          
          <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto">
            Currently open to new opportunities, collaborations, and discussions about the future of design and AI.
          </p>

          <a 
            href="mailto:hello@example.com" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium tracking-wide uppercase text-sm overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get in touch</span>
            <div className="absolute inset-0 bg-[#0A0A0A] border border-white transform scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100 z-0"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
