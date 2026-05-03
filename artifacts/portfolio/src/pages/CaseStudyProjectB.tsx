import { motion } from "framer-motion";
import { Link } from "wouter";

export default function CaseStudyProjectB() {
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
            Campaign Direction
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Category</span>
              <span className="text-sm font-medium">Campaign Direction & Art Direction</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Year</span>
              <span className="text-sm font-medium">2022</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Client</span>
              <span className="text-sm font-medium">Consumer Brand Launch</span>
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
          src="/project-b-hero.png" 
          alt="Campaign Direction Hero" 
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          onError={(e) => {
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
              Orchestrate a high-impact consumer brand launch spanning OOH, digital, and motion across 12 major cities. The campaign needed to introduce a bold new aesthetic to a crowded market with immediate cultural resonance.
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
              Executing a massive production scale while maintaining an intimate, editorial look and feel. Every touchpoint needed to feel authored and deeply integrated into the overarching narrative, avoiding the generic tropes of traditional mass advertising.
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
            <span>Art Direction</span>
            <span className="text-white/20">&mdash;</span>
            <span>Campaign Strategy</span>
            <span className="text-white/20">&mdash;</span>
            <span>OOH</span>
            <span className="text-white/20">&mdash;</span>
            <span>Digital</span>
            <span className="text-white/20">&mdash;</span>
            <span>Motion Direction</span>
          </div>
        </motion.div>
      </div>

      {/* Process */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-12">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Concept", desc: "Defining the core emotional hook and visual vocabulary." },
            { step: "02", title: "Art Direction", desc: "Extensive moodboarding, casting, and styling alignment." },
            { step: "03", title: "Production", desc: "On-set direction ensuring every frame captured the precise tone." }
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
            <img src="/project-b-gal1.png" alt="Gallery image 1" className="w-full h-full object-cover opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[3/4] bg-[#111] relative overflow-hidden mt-0 md:mt-24"
          >
            <img src="/project-b-gal2.png" alt="Gallery image 2" className="w-full h-full object-cover opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-32 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 border-y border-white/10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-white">12</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Cities</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-white">6</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Channels</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="font-playfair text-6xl md:text-8xl font-bold mb-4 text-white">1</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Voice</div>
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
          <Link href="/case-study/project-a" className="group flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Previous Project</span>
            <span className="font-playfair text-3xl md:text-4xl font-bold group-hover:text-white/80 transition-colors">Brand Identity System</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
