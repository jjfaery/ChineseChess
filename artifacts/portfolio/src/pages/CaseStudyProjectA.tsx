import { motion } from "framer-motion";
import { Link } from "wouter";

export default function CaseStudyProjectA() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-32">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20"></span>
            CASE STUDY &mdash; CONFIDENTIAL
          </p>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight text-white mb-12">
            Brand Identity System
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Category</span>
              <span className="text-sm font-medium">Brand Identity & Visual Systems</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Year</span>
              <span className="text-sm font-medium">2023</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Client</span>
              <span className="text-sm font-medium">Global Media Company</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Role</span>
              <span className="text-sm font-medium">Creative Director</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full aspect-[21/9] md:aspect-[21/8] bg-[#111] relative overflow-hidden mb-24"
      >
        <img 
          src="/project-a-hero.png" 
          alt="Brand Identity System Hero" 
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          onError={(e) => {
            // fallback if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Brief & Challenge */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">The Brief</h2>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
              A global media brand required a comprehensive identity overhaul to unify its presence across 40+ international markets, establishing a coherent visual language that translates seamlessly from broadcast to digital platforms.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">The Challenge</h2>
            <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed">
              The existing architecture was fragmented, leading to diluted brand equity. The challenge was to create a flexible yet rigorous system capable of accommodating diverse local content while maintaining strict global brand recognition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Role & Scope */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 border-y border-white/10"
        >
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-8">Role & Scope</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-lg font-medium text-white/90">
            <span>Creative Direction</span>
            <span className="text-white/20">&mdash;</span>
            <span>Brand Strategy</span>
            <span className="text-white/20">&mdash;</span>
            <span>Visual Identity</span>
            <span className="text-white/20">&mdash;</span>
            <span>Design System</span>
            <span className="text-white/20">&mdash;</span>
            <span>Art Direction</span>
            <span className="text-white/20">&mdash;</span>
            <span>Typographic System</span>
          </div>
        </motion.div>
      </div>

      {/* Process */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-12">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Discovery", desc: "Auditing existing touchpoints and establishing core brand principles." },
            { step: "02", title: "Direction", desc: "Developing multiple conceptual territories and typographic systems." },
            { step: "03", title: "Delivery", desc: "Formalizing the chosen route into a scalable, documented design language." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="text-[13px] font-mono tracking-widest text-white/30 mb-4">{item.step}</div>
              <h3 className="text-2xl font-playfair font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] bg-[#111] relative overflow-hidden"
          >
            <img src="/project-a-gal1.png" alt="Gallery image 1" className="w-full h-full object-cover opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[3/4] bg-[#111] relative overflow-hidden mt-0 md:mt-24"
          >
            <img src="/project-a-gal2.png" alt="Gallery image 2" className="w-full h-full object-cover opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 border-y border-white/10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-white">40+</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Markets</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-white">3</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Brand Tiers</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-white">1</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Unified Language</div>
          </motion.div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-8">
          <Link href="/work" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white transition-colors"></span>
            Back to Work
          </Link>
          <Link href="/case-study/project-b" className="group flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Next Project</span>
            <span className="font-playfair text-3xl md:text-4xl font-bold group-hover:text-white/80 transition-colors">Campaign Direction</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
