import { motion } from "framer-motion";
import { Link } from "wouter";

const stats = [
  { label: "Role", value: "Creative Director" },
  { label: "Discipline", value: "Campaign / Art Direction" },
  { label: "Year", value: "2022" },
  { label: "Client", value: "Consumer Brand Launch" },
];

const gallery = ["/project-b-gal1.png", "/project-b-gal2.png", "/project-b-gal1.png"];

export default function CaseStudyProjectB() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/45 mb-6">Case Study</p>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight mb-6">Campaign Direction</h1>
          <p className="max-w-3xl text-xl md:text-2xl font-light text-white/75 leading-relaxed mb-12">An editorial campaign built to launch a consumer brand with cinematic pacing, strong art direction, and a premium visual tone.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-2">{item.label}</div>
                <div className="text-sm md:text-base text-white/85">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-0 md:px-6 mt-14 mb-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} className="aspect-[21/9] md:aspect-[21/8] bg-[#111] overflow-hidden border-y border-white/10">
          <img src="/project-b-hero.png" alt="Campaign Direction hero" className="h-full w-full object-cover opacity-90" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-24">
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">Challenge</p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">Launch a high-visibility campaign across digital, motion, and outdoor while keeping the visual language intimate and authored.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">Creative Direction</p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">We leaned into scale, shadow, and editorial framing to create a campaign that felt more like a magazine spread than an ad buy.</p>
          </div>
        </section>

        <section className="border-t border-white/10 pt-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-8">Process</p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Concept", "Defined the emotional anchor and campaign narrative."],
              ["Production", "Cast, styling, and framing were designed to feel cinematic."],
              ["Launch", "Delivered a system of stills, motion, and OOH-ready compositions."],
            ].map(([title, text], i) => (
              <div key={title} className="border border-white/10 p-6 bg-white/[0.02]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4">0{i + 1}</div>
                <h3 className="font-playfair text-2xl mb-3">{title}</h3>
                <p className="text-white/65 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">Execution</p>
            <p className="text-white/70 leading-relaxed mb-6">The campaign system was designed for consistency across formats, with strong crops, flexible overlays, and a refined motion language.</p>
            <p className="text-white/90 text-lg italic leading-relaxed border-l border-white/20 pl-5">“Every frame had to hold on its own, yet still feel part of one connected world.”</p>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">Outcome</p>
            <p className="text-white/70 leading-relaxed">The launch delivered a unified campaign language that supported omnichannel rollout while maintaining a distinctly premium point of view.</p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">Gallery</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/25">Selected frames</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div key={src + i} className="aspect-[4/5] overflow-hidden border border-white/10 bg-[#111]">
                <img src={src} alt={`Project B gallery ${i + 1}`} className="h-full w-full object-cover opacity-85" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 aspect-video">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">Video / Embed</p>
            <div className="h-full w-full border border-dashed border-white/15 flex items-center justify-center text-white/35 text-sm">Placeholder motion area</div>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 flex items-center">
            <blockquote className="text-2xl md:text-3xl font-playfair leading-tight text-white/90">A campaign story with a cinematic pulse and enough restraint to feel timeless.</blockquote>
          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10">
          <Link href="/work" className="text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors">Back to Work</Link>
          <Link href="/case-study/project-a" className="text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors">Previous Project</Link>
        </div>
      </div>
    </main>
  );
}
