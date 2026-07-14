import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown, Mail, Linkedin, Instagram, Compass } from "lucide-react";
import { useEffect, useState } from "react";

const WORDS = ["3D ARTIST", "3D MODELING", "TEXTURE ARTIST", "LOOKDEV ARTIST"];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);

  // Cycle words every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Spring physics for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 1 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["20%", "80%"]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["20%", "80%"]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalized values between -0.5 and 0.5
      const normX = (clientX / innerWidth) - 0.5;
      const normY = (clientY / innerHeight) - 0.5;
      
      x.set(normX);
      y.set(normY);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#0D0D0D] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Grid Background with Radial Orange Spotlight */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.08)_0%,rgba(13,13,13,1)_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"
      />

      {/* Interactive spotlight follow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-brand/5 blur-[120px] pointer-events-none z-0 hidden md:block transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          top: 0,
          left: 0,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand/20 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:pl-24 lg:pr-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left column: Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          
          {/* Animated small subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 text-brand font-mono text-xs tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            3D ARTIST & LOOKDEV SPECIALIST
          </motion.div>

          {/* Hero Heading: Large bold typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-bebas text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-[0.85] text-white select-none">
              BHANU<br />
              <div className="relative h-[1.1em] overflow-hidden w-full text-5xl sm:text-7xl lg:text-8xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -35 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block stroke-text absolute left-0 top-0 w-full whitespace-nowrap"
                  >
                    {WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg max-w-lg mt-6 mb-10 leading-relaxed font-sans"
          >
            Specializing in high-fidelity 3D modeling, photorealistic product rendering, and immersive environment design. Crafting meticulously detailed digital experiences and production-ready CGI assets with cinematic light and atmosphere.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-brand text-white font-mono text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand/20 cursor-pointer flex items-center gap-2 group"
            >
              View Portfolio
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-mono text-xs tracking-widest uppercase rounded-full hover:border-brand hover:text-brand transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center gap-2"
            >
              Let's Talk
              <span>↗</span>
            </button>
          </motion.div>
        </div>

        {/* Right column: Floating Interactive 3D Sphere Card */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] aspect-square rounded-[32px] p-1 bg-gradient-to-b from-white/10 to-transparent cursor-pointer select-none"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full bg-[#141414] rounded-[30px] overflow-hidden group shadow-2xl border border-white/5"
            >
              {/* Dynamic glare highlight */}
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_var(--glow-x,50%)_var(--glow-y,50%),rgba(255,90,31,0.25)_0%,transparent_60%)] z-10 pointer-events-none"
                style={{
                  // Injecting standard CSS variables that are updated by Framer Motion values
                  //@ts-ignore
                  "--glow-x": glowX,
                  //@ts-ignore
                  "--glow-y": glowY,
                }}
              />

              {/* Floating hard-surface sphere render */}
              <img
                src="/src/assets/images/hero_3d_sphere_1784007800651.jpg"
                alt="Bhanu floating 3D hard-surface device portfolio piece"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating Overlay Decals */}
              <div 
                style={{ transform: "translateZ(30px)" }}
                className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl flex items-center justify-between pointer-events-none"
              >
                <div>
                  <div className="text-white font-mono text-xs tracking-widest uppercase">CORE COMPONENT</div>
                  <div className="text-brand font-bebas text-lg tracking-wider">HARD-SURFACE DEVICE</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand/50 flex items-center justify-center text-brand">
                  <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Left side fixed-positioned social rail (Desktop only) */}
      <div className="hidden lg:flex absolute left-8 bottom-12 flex-col items-center gap-6 z-20">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-brand transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-brand transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:bp69356@gmail.com"
          className="text-gray-500 hover:text-brand transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-20 bg-white/15" />
        <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 rotate-90 origin-left translate-x-[3px] translate-y-3 whitespace-nowrap">
          SCROLL TO EXPLORE
        </span>
      </div>

      {/* Mouse scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer" onClick={scrollToPortfolio}>
        <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-brand" />
        </motion.div>
      </div>
    </section>
  );
}
