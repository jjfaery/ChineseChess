import { motion } from "framer-motion";
import { Link } from "wouter";

const stats = [
  { label: "Role", value: "Creative Director" },
  { label: "Discipline", value: "Editorial / Identity" },
  { label: "Year", value: "2021" },
  { label: "Category", value: "Cultural Publication" },
];

export default function CaseStudyProjectC() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/45 mb-6">Case Study</p>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight mb-6">Editorial Retrospective</h1>
          <p className="max-w-3xl text-xl md:text-2xl font-light text-white/75 leading-relaxed mb-12">A publication-led identity system that frames a 50-year archive through typography, pacing, and image rhythm.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {stats.map((item) => (
              <div key={item.label}><div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-2">{item.label}</div><div className="text-sm md:text-base text-white/85">{item.value}</div></div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-20 space-y-20">
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">Challenge</p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">Translate a deep archive into a contemporary editorial object that felt rigorous, collectible, and culturally current.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">Creative Direction</p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">We used a restrained monochrome palette, strong typographic hierarchy, and asymmetric layouts to make the book feel timeless.</p>
          </div>
        </section>
        <section className="border-t border-white/10 pt-10 grid gap-8 md:grid-cols-3">
          {["Research", "Pagination", "Production"].map((title, i) => (
            <div key={title} className="border border-white/10 p-6 bg-white/[0.02]">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4">0{i + 1}</div>
              <h3 className="font-playfair text-2xl mb-3">{title}</h3>
              <p className="text-white/65 leading-relaxed">Placeholder editorial development phase and systems thinking.</p>
            </div>
          ))}
        </section>
        <section className="grid gap-8 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.02] p-8 aspect-video flex items-center justify-center text-white/35">Placeholder video area</div>
          <div className="border border-white/10 bg-white/[0.02] p-8 flex items-center"><blockquote className="text-2xl md:text-3xl font-playfair leading-tight text-white/90">An editorial object that gives the archive a new point of view.</blockquote></div>
        </section>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10">
          <Link href="/case-study/project-b" className="text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors">Previous Project</Link>
          <Link href="/case-study/project-d" className="text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors">Next Project</Link>
          <Link href="/work" className="text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors">Back to Work</Link>
        </div>
      </div>
    </main>
  );
}
