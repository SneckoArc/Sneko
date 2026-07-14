import { Heart } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/5 py-12 px-6 relative z-10 text-center sm:text-left">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left trademark info */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <button
            onClick={handleScrollTop}
            className="font-bebas text-2xl tracking-widest text-white hover:text-brand transition-colors cursor-pointer"
          >
            BHANU
          </button>
          <span className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
            3D ARTIST & VISUAL DEVELOPER
          </span>
        </div>

        {/* Center credits */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
          <span>Designed with</span>
          <Heart className="w-3.5 h-3.5 text-brand fill-brand animate-pulse" />
          <span>Blender & Coffee</span>
        </div>

        {/* Right copyright */}
        <div className="text-gray-500 font-mono text-[10px] tracking-wider uppercase">
          © {new Date().getFullYear()} Bhanu. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
