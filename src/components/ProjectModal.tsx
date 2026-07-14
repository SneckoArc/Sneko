import { Project } from "../types";
import { X, Cpu, HardDrive, Hourglass, Box, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop glass blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer z-0"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl bg-[#141414] border border-white/10 rounded-[28px] overflow-hidden z-10 shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-brand text-white hover:text-white border border-white/10 hover:border-brand transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: High-res Render Image */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[480px] relative overflow-hidden bg-black select-none">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#141414] to-transparent hidden md:block" />
        </div>

        {/* Right Side: Detailed spec sheet content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-left">
          <div>
            <span className="text-brand font-mono text-[10px] tracking-[0.25em] uppercase block mb-2">
              {project.category}
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl tracking-wider text-white mb-4">
              {project.title}
            </h3>
            
            <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              Year: {project.year}
            </span>

            <p className="text-gray-300 font-sans text-sm leading-relaxed mt-6 mb-8">
              {project.description}
            </p>

            {/* Software used badges */}
            <div className="mb-8">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">PIPELINE TOOLS</span>
              <div className="flex flex-wrap gap-2">
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="px-3 py-1.5 bg-[#1d1d1d] text-white font-mono text-xs rounded-lg border border-white/5"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Spec Sheet Metrics Grid */}
            {project.details && (
              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                <div>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                    <Box className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[9px] font-mono uppercase tracking-wider">Polycount</span>
                  </div>
                  <span className="text-xs font-mono text-white font-medium">{project.details.polycount || "N/A"}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                    <HardDrive className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[9px] font-mono uppercase tracking-wider">Textures</span>
                  </div>
                  <span className="text-xs font-mono text-white font-medium">{project.details.textures || "N/A"}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[9px] font-mono uppercase tracking-wider">Engine</span>
                  </div>
                  <span className="text-xs font-mono text-white font-medium">{project.details.renderEngine || "N/A"}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                    <Hourglass className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[9px] font-mono uppercase tracking-wider">Timeline</span>
                  </div>
                  <span className="text-xs font-mono text-white font-medium">{project.details.duration || "N/A"}</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-transparent text-gray-400 hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors cursor-pointer"
            >
              ← Back to gallery
            </button>
            <span className="text-[10px] font-mono text-brand/60 uppercase">
              CINEMATIC PORTFOLIO V2026
            </span>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
