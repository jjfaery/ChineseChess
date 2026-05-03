import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI Analytics Platform",
    category: "Product Design",
    role: "Creative Director",
    description: "Designing a comprehensive ecosystem for enterprise data teams, turning complex ML models into intuitive, actionable interfaces.",
    image: "work-1.png",
    featured: true,
  },
  {
    id: 2,
    title: "Global Design System",
    category: "Systems & Scalability",
    role: "Lead Designer",
    description: "A unified component library scaling across 40+ engineering teams, ensuring consistency and velocity.",
    image: "work-2.png",
    featured: false,
  },
  {
    id: 3,
    title: "Consumer Mobile App",
    category: "UX/UI Design",
    role: "Product Design Lead",
    description: "A premium mobile experience bringing sophisticated financial tools to everyday users with immense restraint.",
    image: "work-3.png",
    featured: false,
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 md:py-48 bg-[#0A0A0A] relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-[13px] font-medium tracking-[0.15em] text-white/50 uppercase mb-4">Selected Work</h2>
          <p className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl">
            Building systems that scale and experiences that resonate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-8">
          {/* Featured Project */}
          <div className="col-span-1 md:col-span-12 relative group cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[16/9] w-full overflow-hidden bg-white/5 mb-8"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[0].image}`} 
                alt={projects[0].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-4xl font-semibold mb-2">{projects[0].title}</h3>
                <div className="flex items-center gap-3 text-[13px] uppercase tracking-wider text-accent">
                  <span>{projects[0].category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{projects[0].role}</span>
                </div>
              </div>
              <p className="text-white/60 max-w-md text-base leading-relaxed md:text-right">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Secondary Projects */}
          <div className="col-span-1 md:col-span-6 group cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/3] w-full overflow-hidden bg-white/5 mb-6"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[1].image}`} 
                alt={projects[1].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{projects[1].title}</h3>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-accent mb-4">
              <span>{projects[1].category}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{projects[1].role}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {projects[1].description}
            </p>
          </div>

          <div className="col-span-1 md:col-span-6 md:mt-32 group cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="aspect-[4/3] w-full overflow-hidden bg-white/5 mb-6"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${projects[2].image}`} 
                alt={projects[2].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{projects[2].title}</h3>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-accent mb-4">
              <span>{projects[2].category}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{projects[2].role}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {projects[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
