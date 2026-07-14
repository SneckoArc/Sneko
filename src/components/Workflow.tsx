import { WORKFLOW_STEPS } from "../data";
import { motion } from "motion/react";
import { Layers, ArrowRight, ArrowDown } from "lucide-react";

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-[#0D0D0D] border-t border-white/5 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-brand font-mono text-xs tracking-[0.2em] uppercase block mb-3">
            TECHNICAL PIPELINE
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white">
            MY WORKFLOW <span className="text-brand">.</span>
          </h2>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative">
          {/* Main timeline connectors */}
          <div className="absolute top-[42px] left-8 right-8 h-[2px] bg-white/10 hidden xl:block z-0" />

          {/* Steps Grid / Scroll Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center xl:items-start text-center xl:text-left bg-[#141414] border border-white/5 hover:border-brand/40 p-6 rounded-2xl transition-all duration-400 relative"
              >
                {/* Node Circle */}
                <div className="w-12 h-12 rounded-full bg-black border-2 border-white/10 group-hover:border-brand group-hover:bg-brand/10 flex items-center justify-center text-white font-mono text-xs mb-6 relative z-10 shadow-lg transition-all duration-300">
                  <span className="group-hover:text-brand font-bold">{step.step}</span>
                </div>

                {/* Content */}
                <h3 className="font-bebas text-xl text-white tracking-wide group-hover:text-brand transition-colors mb-1.5 uppercase">
                  {step.title}
                </h3>
                <h4 className="font-mono text-[10px] text-brand uppercase tracking-wider mb-3 font-medium">
                  {step.subtitle}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed font-sans mt-1">
                  {step.description}
                </p>

                {/* Mobile indicators */}
                <div className="xl:hidden mt-4 flex justify-center text-brand/30">
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
