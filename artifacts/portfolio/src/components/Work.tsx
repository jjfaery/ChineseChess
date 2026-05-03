import { motion } from "framer-motion";
import { Link } from "wouter";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Brand System Architecture",
    category: "Creative Direction",
    description: "Establishing a holistic visual language bridging print, digital, and spatial touchpoints for a global luxury brand.",
    image: "work-1.png",
    href: "/case-study/project-a",
  },
  {
    id: 2,
    title: "Fall/Winter Campaign",
    category: "Campaign Direction",
    description: "Art direction and production for a seasonal campaign emphasizing materiality and light.",
    image: "work-2.png",
    href: "/case-study/project-b",
  },
  {
    id: 3,
    title: "Editorial Retrospective",
    category: "Brand Identity",
    description: "A definitive volume cataloging 50 years of design heritage through meticulous typography.",
    image: "work-3.png",
    href: "/case-study/project-c",
  },
  {
    id: 4,
    title: "Digital Ecosystem",
    category: "Visual Systems",
    description: "A comprehensive digital design system built on core brand principles.",
    image: "work-4.png",
    href: "/case-study/project-d",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={project.href} className="group block">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="relative overflow-hidden bg-[var(--surface)] aspect-[16/9] border border-[var(--border)]">
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <span className="rounded-full border border-[var(--border)] bg-[var(--background)]/75 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--foreground)] backdrop-blur-md transition-all group-hover:border-white/40">View Project</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted-foreground)]">0{index + 1}</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-[13px] text-[var(--muted-foreground)] font-mono tracking-widest leading-none">0{index + 1}</span>
            <h3 className="font-playfair text-3xl md:text-5xl font-bold leading-tight">
              {project.title}
            </h3>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-4 ml-[2.25rem]">— {project.category}</p>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed ml-[2.25rem] max-w-xl">{project.description}</p>
        </div>
      </motion.article>
    </Link>
  );
}

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
          <div className="flex items-center mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Selected Work</span>
          </div>
          <div className="w-full h-[1px] bg-[var(--border)] mb-8" />
          <p className="font-playfair text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] max-w-3xl mb-8">Narrative depth and visual precision.</p>
          <div className="w-full h-[1px] bg-[var(--border)]" />
        </motion.div>

        <div className="flex flex-col gap-32">
          <ProjectCard project={projects[0]} index={0} />
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
          <ProjectCard project={projects[3]} index={3} />
        </div>
      </div>
    </section>
  );
}
