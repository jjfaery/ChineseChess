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
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative z-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-[13px] font-medium tracking-[0.2em] text-white/50 uppercase mb-4">Selected Work</h2>
          <p className="font-playfair text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl">
            Narrative depth and visual precision.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {/* Project 1: Featured Full Width */}
          <div className="group cursor-pointer relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[16/9] w-full overflow-hidden bg-white/5 mb-8 relative"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[0].image}`} 
                alt={projects[0].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8 backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-4">{projects[0].category}</span>
                <p className="text-white text-lg max-w-md">{projects[0].description}</p>
              </div>
            </motion.div>
            <h3 className="font-playfair text-3xl md:text-5xl font-bold mb-3">{projects[0].title}</h3>
            <p className="text-[13px] uppercase tracking-wider text-white/50">
              {projects[0].category}
            </p>
          </div>

          {/* Project 2: Left Aligned Portrait */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 group cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-3/5 aspect-[3/4] overflow-hidden bg-white/5"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[1].image}`} 
                alt={projects[1].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
            <div className="w-full md:w-2/5 flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">{projects[1].category}</span>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">{projects[1].title}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{projects[1].description}</p>
            </div>
          </div>

          {/* Project 3: Right Aligned Wide */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 group cursor-pointer md:mt-20">
            <div className="w-full md:w-2/5 flex flex-col md:items-end md:text-right">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">{projects[2].category}</span>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">{projects[2].title}</h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">{projects[2].description}</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full md:w-3/5 aspect-[16/9] overflow-hidden bg-white/5"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[2].image}`} 
                alt={projects[2].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>

          {/* Project 4: Side by Side (if we want to expand the list) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-20">
             <div className="group cursor-pointer">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[4/3] w-full overflow-hidden bg-white/5 mb-6"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}${projects[3].image}`} 
                    alt={projects[3].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </motion.div>
                <h3 className="font-playfair text-2xl font-bold mb-2">{projects[3].title}</h3>
                <p className="text-[11px] uppercase tracking-wider text-white/50">
                  {projects[3].category}
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
