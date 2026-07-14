import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Grid, RefreshCw } from "lucide-react";

interface ExploreWorkProps {
  onProjectClick: (project: Project) => void;
}

export default function ExploreWork({ onProjectClick }: ExploreWorkProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isRotating, setIsRotating] = useState(false);

  const filters = [
    "All",
    "Modeling",
    "UV Unwrap",
    "Texturing",
    "Rendering",
    "Environment Design",
    "Product Design"
  ];

  // Filter projects based on category
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const handleLoadMore = () => {
    setIsRotating(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
      setIsRotating(false);
    }, 600);
  };

  return (
    <section id="explore-work" className="py-24 bg-[#0D0D0D] relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title & Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand font-mono text-xs tracking-[0.2em] uppercase block mb-3">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white">
              EXPLORE MY WORK <span className="text-brand">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
            <Grid className="w-4 h-4 text-brand" />
            <span>SHOWING {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? "S" : ""}</span>
          </div>
        </div>

        {/* Animated Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(6); // Reset count on filter change
                }}
                className={`px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-brand text-white border-brand shadow-lg shadow-brand/20"
                    : "bg-[#171717] text-gray-400 border border-white/5 hover:bg-[#222] hover:text-white"
                }`}
              >
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid with Framer Motion AnimatePresence and layout transformations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => onProjectClick(project)}
                className="group relative h-[360px] rounded-3xl overflow-hidden bg-[#141414] border border-white/5 hover:border-brand/50 transition-all duration-500 cursor-pointer shadow-xl"
              >
                {/* Background image & gradient overlay */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-80 z-10" />
                  <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500" />
                </div>

                {/* Card details */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between pointer-events-none">
                  
                  {/* Top Right: Year and Software tools used */}
                  <div className="flex items-start justify-between w-full">
                    <span className="text-[10px] font-mono text-gray-400 bg-black/50 px-2.5 py-1 rounded-full border border-white/5">
                      {project.year}
                    </span>
                    <div className="flex flex-wrap gap-1 justify-end max-w-[70%]">
                      {project.software.slice(0, 2).map((sw) => (
                        <span
                          key={sw}
                          className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-mono uppercase text-white/95 border border-white/5"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="flex items-end justify-between w-full">
                    <div>
                      <span className="text-brand font-mono text-[10px] tracking-widest uppercase block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bebas tracking-wide text-white group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Animated arrow icon */}
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-3 bg-[#171717] hover:bg-brand text-white hover:text-white border border-white/5 hover:border-brand px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-black/10 group"
            >
              <span>LOAD MORE PROJECTS</span>
              <RefreshCw className={`w-4 h-4 transition-transform duration-500 ${isRotating ? "animate-spin" : "group-hover:rotate-180"}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
