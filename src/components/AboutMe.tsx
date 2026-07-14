import React, { useEffect, useRef, useState } from "react";
import { Check, Heart, Briefcase, Cpu } from "lucide-react";
import { motion, useInView } from "motion/react";

export default function AboutMe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const coreSkillsList = [
    "Modeling",
    "UV Unwrap",
    "Texturing",
    "Rendering",
    "Environment Design",
    "Product Design"
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-[#0D0D0D] border-t border-white/5 relative z-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl p-1 bg-gradient-to-b from-brand/20 to-transparent shadow-2xl"
            >
              {/* Decorative Glow Elements */}
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand/10 blur-xl rounded-full" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand/5 blur-2xl rounded-full" />

              <div className="relative w-full h-full rounded-[20px] overflow-hidden group">
                <img
                  src="/src/assets/images/bhanu_portrait_1784007819605.jpg"
                  alt="Bhanu, Professional 3D Artist Profile"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Floating decorative badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl pointer-events-none flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center text-brand">
                    <Heart className="w-4 h-4 fill-brand" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block tracking-widest">ARTIST LOCATION</span>
                    <span className="text-xs font-mono text-white font-medium">BENGALURU, INDIA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-brand font-mono text-xs tracking-[0.2em] uppercase block mb-3">
                MEET THE CREATOR
              </span>
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white mb-6">
                ABOUT ME <span className="text-brand">.</span>
              </h2>

              <p className="text-lg sm:text-xl font-medium text-gray-200 mb-6 leading-relaxed font-sans">
                Hi, I'm <span className="text-brand font-semibold">Bhanu</span>, a passionate 3D Artist specializing in transforming complex concepts into stunning production-ready high-end visuals.
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm sm:text-base">
                I combine technical mastery of topology and texturing with a deep, cinematic appreciation for light, atmospheric composition, and physical realism. Using highly optimized pipelines, I deliver assets, product visualization renders, and interactive environments that exceed studio and commercial standards.
              </p>

              {/* Core Skill Bullets */}
              <div className="mb-10">
                <span className="text-xs font-mono tracking-wider text-gray-400 uppercase block mb-4">CORE FOCUS AREAS</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {coreSkillsList.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 bg-[#141414] border border-white/5 px-4 py-2.5 rounded-full text-xs font-mono text-gray-300"
                    >
                      <Check className="w-3.5 h-3.5 text-brand" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Counters Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <StatCounter 
                  targetValue={50} 
                  suffix="+" 
                  label="Projects Completed" 
                  icon={<Briefcase className="w-4 h-4 text-brand" />}
                  trigger={isInView}
                />
                <StatCounter 
                  targetValue={6} 
                  suffix="+" 
                  label="Core Skills" 
                  icon={<Cpu className="w-4 h-4 text-brand" />}
                  trigger={isInView}
                />
                <StatCounter 
                  targetValue={100} 
                  suffix="%" 
                  label="Passion" 
                  icon={<Heart className="w-4 h-4 text-brand" />}
                  trigger={isInView}
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Individual Stat Counter with animation */
interface StatCounterProps {
  targetValue: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  trigger: boolean;
}

function StatCounter({ targetValue, suffix, label, icon, trigger }: StatCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = targetValue / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setValue(targetValue);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, trigger]);

  return (
    <div className="text-left">
      <div className="flex items-center gap-1.5 text-gray-500 mb-1">
        {icon}
        <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400">{label}</span>
      </div>
      <div className="font-bebas text-3xl sm:text-5xl text-white tracking-wide">
        <span className="text-white">{value}</span>
        <span className="text-brand font-sans font-bold ml-0.5">{suffix}</span>
      </div>
    </div>
  );
}
