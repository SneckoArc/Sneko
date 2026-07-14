import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { motion } from "motion/react";

interface FeaturedWorksProps {
  onProjectClick: (project: Project) => void;
}

export default function FeaturedWorks({ onProjectClick }: FeaturedWorksProps) {
  // Select the 5 featured projects for the Bento Grid layout
  const featuredList = PROJECTS.filter((p) => p.featured).slice(0, 5);

  // Group items by bento mapping
  const headphones = featuredList.find((p) => p.id === "headphones");
  const sanctuary = featuredList.find((p) => p.id === "sanctuary");
  const keyboard = featuredList.find((p) => p.id === "keyboard");
  const truck = featuredList.find((p) => p.id === "truck");
  const perfume = featuredList.find((p) => p.id === "perfume"); // Use perfume or chassis

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] border-t border-white/5 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-brand font-mono text-xs tracking-[0.2em] uppercase block mb-3">
              CURATED SELECTION
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white">
              FEATURED WORKS <span className="text-brand">.</span>
            </h2>
          </div>
          <button
            onClick={() => scrollToSection("explore-work")}
            className="flex items-center gap-2 border border-white/10 hover:border-brand hover:text-brand px-6 py-3 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 group cursor-pointer"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Contains Headphones (landscape) & Truck (landscape) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {headphones && (
              <BentoCard project={headphones} onClick={onProjectClick} isLandscape />
            )}
            {truck && (
              <BentoCard project={truck} onClick={onProjectClick} isLandscape />
            )}
          </div>

          {/* MIDDLE COLUMN: Tall Forgotten Sanctuary Portal */}
          <div className="md:col-span-4 h-full">
            {sanctuary && (
              <BentoCard project={sanctuary} onClick={onProjectClick} isTall />
            )}
          </div>

          {/* RIGHT COLUMN: Contains Luxury Perfume (square) & Mechanical Keyboard (square) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {perfume && (
              <BentoCard project={perfume} onClick={onProjectClick} isLandscape />
            )}
            {keyboard && (
              <BentoCard project={keyboard} onClick={onProjectClick} isLandscape />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

/* Reusable Bento Grid Card Component */
interface BentoCardProps {
  project: Project;
  onClick: (project: Project) => void;
  isTall?: boolean;
  isLandscape?: boolean;
}

function BentoCard({ project, onClick, isTall = false }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden rounded-[24px] cursor-pointer bg-[#141414] border border-white/5 hover:border-brand/50 transition-all duration-500 shadow-xl flex flex-col ${
        isTall ? "h-full min-h-[500px] md:min-h-[590px]" : "h-[280px]"
      }`}
    >
      {/* Glow highlight behind card */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80 z-10 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500 pointer-events-none" />

      {/* Image container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Card Content Overlay */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between h-full pointer-events-none">
        
        {/* Top: Software Tags */}
        <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.software.slice(0, 2).map((sw) => (
            <span
              key={sw}
              className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full text-[9px] font-mono tracking-wider uppercase text-white/90 border border-white/5"
            >
              {sw}
            </span>
          ))}
        </div>

        {/* Bottom details */}
        <div className="w-full flex items-end justify-between">
          <div>
            <span className="text-brand font-mono text-[10px] tracking-widest uppercase block mb-1">
              {project.category}
            </span>
            <h3 className="text-xl font-bebas tracking-wide text-white group-hover:text-brand transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Animated Arrow Icon */}
          <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
