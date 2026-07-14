import { SOFTWARE_TOOLS } from "../data";
import { motion } from "motion/react";
import { Box, Paintbrush, Aperture, Image, Film, Gamepad, Award } from "lucide-react";

export default function Software() {
  // Map icons to tools
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "box":
        return <Box className="w-6 h-6 text-brand" />;
      case "paint-brush":
        return <Paintbrush className="w-6 h-6 text-brand" />;
      case "aperture":
        return <Aperture className="w-6 h-6 text-brand" />;
      case "image":
        return <Image className="w-6 h-6 text-brand" />;
      case "film":
        return <Film className="w-6 h-6 text-brand" />;
      case "gamepad":
        return <Gamepad className="w-6 h-6 text-brand" />;
      default:
        return <Award className="w-6 h-6 text-brand" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0D0D0D] border-t border-white/5 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-brand font-mono text-xs tracking-[0.2em] uppercase block mb-3">
            TECHNICAL TOOLSET
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white">
            TOOLS I USE <span className="text-brand">.</span>
          </h2>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {SOFTWARE_TOOLS.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center p-6 bg-[#141414] border border-white/5 hover:border-brand/50 rounded-2xl transition-all duration-400 cursor-pointer shadow-xl overflow-hidden"
            >
              {/* Radial Orange Glow Backdrop (Hover triggered) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#1d1d1d] flex items-center justify-center mb-4 border border-white/5 group-hover:bg-brand/10 group-hover:border-brand/40 transition-all duration-300">
                {getIcon(tool.icon)}
              </div>

              {/* Title & Category */}
              <h3 className="font-bebas text-lg text-white tracking-wider group-hover:text-brand transition-colors mb-1 uppercase">
                {tool.name}
              </h3>
              <p className="text-gray-400 font-mono text-[9px] uppercase tracking-wider mb-4">
                {tool.category}
              </p>

              {/* Custom Mini Progress Bar */}
              <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-brand h-full rounded-full"
                />
              </div>
              <span className="text-gray-500 font-mono text-[9px] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.percentage}% PROFICIENCY
              </span>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
