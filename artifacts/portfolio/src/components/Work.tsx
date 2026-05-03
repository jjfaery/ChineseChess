import { motion } from "framer-motion";
import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "Brand System Architecture",
    category: "Creative Direction",
    description: "Establishing a holistic visual language bridging print, digital, and spatial touchpoints for a global luxury brand.",
    image: "work-1.png",
    featured: true,
  },
  {
    id: 2,
    title: "Fall/Winter Campaign",
    category: "Campaign Direction",
    description: "Art direction and production for a seasonal campaign emphasizing materiality and light.",
    image: "work-2.png",
    featured: false,
  },
  {
    id: 3,
    title: "Editorial Retrospective",
    category: "Brand Identity",
    description: "A definitive volume cataloging 50 years of design heritage through meticulous typography.",
    image: "work-3.png",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Ecosystem",
    category: "Visual Systems",
    description: "A comprehensive digital design system built on core brand principles.",
    image: "work-4.png",
    featured: false,
  }
];

export default function Work() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] relative z-10 text-[var(--foreground)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-[11px] font-mono text-[var(--muted-foreground)]">— 01</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Selected Work</span>
          </div>
          <div className="w-full h-[1px] bg-[var(--border)] mb-8" />
          <p className="font-playfair text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] max-w-3xl mb-8">
            Narrative depth and visual precision.
          </p>
          <div className="w-full h-[1px] bg-[var(--border)]" />
        </motion.div>

        <div className="flex flex-col gap-32">
          <div className="group cursor-pointer relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[16/9] w-full overflow-hidden bg-[var(--surface)] mb-8 relative"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[0].image}`} 
                alt={projects[0].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="overflow-hidden">
                   <span className="block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-[11px] uppercase tracking-widest text-[var(--foreground)] font-medium bg-[var(--background)]/70 px-4 py-2 backdrop-blur-md border border-[var(--border)] rounded-full">View Project</span>
                </div>
              </div>
            </motion.div>
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-[13px] text-[var(--muted-foreground)] font-mono tracking-widest leading-none">01</span>
              <h3 className="font-playfair text-3xl md:text-5xl font-bold leading-tight">{projects[0].title}</h3>
            </div>
            <p className="text-[13px] uppercase tracking-wider text-[var(--muted-foreground)] ml-[2.25rem]">
              &mdash; {projects[0].category}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 group cursor-pointer md:ml-[8%]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-3/5 aspect-[3/4] overflow-hidden bg-[var(--surface)] relative"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[1].image}`} 
                alt={projects[1].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="overflow-hidden">
                   <span className="block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-[11px] uppercase tracking-widest text-[var(--foreground)] font-medium bg-[var(--background)]/70 px-4 py-2 backdrop-blur-md border border-[var(--border)] rounded-full">View Project</span>
                </div>
              </div>
            </motion.div>
            <div className="w-full md:w-2/5 flex flex-col">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[13px] text-[var(--muted-foreground)] font-mono tracking-widest leading-none">02</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold leading-tight">{projects[1].title}</h3>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-6 ml-[2.25rem]">&mdash; {projects[1].category}</p>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed ml-[2.25rem]">{projects[1].description}</p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 group cursor-pointer md:mt-20">
            <div className="w-full md:w-2/5 flex flex-col md:mr-[8%]">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[13px] text-[var(--muted-foreground)] font-mono tracking-widest leading-none">03</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold leading-tight">{projects[2].title}</h3>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-6 ml-[2.25rem]">&mdash; {projects[2].category}</p>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-md ml-[2.25rem]">{projects[2].description}</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full md:w-3/5 aspect-[16/9] overflow-hidden bg-[var(--surface)] relative"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[2].image}`} 
                alt={projects[2].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="overflow-hidden">
                   <span className="block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-[11px] uppercase tracking-widest text-[var(--foreground)] font-medium bg-[var(--background)]/70 px-4 py-2 backdrop-blur-md border border-[var(--border)] rounded-full">View Project</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-20">
             <div className="group cursor-pointer">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[4/3] w-full overflow-hidden bg-[var(--surface)] mb-6 relative"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}${projects[3].image}`} 
                    alt={projects[3].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="overflow-hidden">
                       <span className="block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-[11px] uppercase tracking-widest text-[var(--foreground)] font-medium bg-[var(--background)]/70 px-4 py-2 backdrop-blur-md border border-[var(--border)] rounded-full">View Project</span>
                    </div>
                  </div>
                </motion.div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[11px] text-[var(--muted-foreground)] font-mono tracking-widest leading-none">04</span>
                  <h3 className="font-playfair text-2xl font-bold">{projects[3].title}</h3>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-[var(--muted-foreground)] ml-[2rem]">
                  &mdash; {projects[3].category}
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
