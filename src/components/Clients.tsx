import { CLIENT_LOGOS } from "../data";

export default function Clients() {
  // Duplicate list to ensure visual continuity in the infinite scroll
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="clients" className="py-16 bg-[#0B0B0B] border-t border-b border-white/5 relative z-10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left flex items-center justify-between">
        <div>
          <span className="text-brand font-mono text-[10px] tracking-[0.25em] uppercase block mb-1">
            COLLABORATIONS
          </span>
          <h3 className="font-bebas text-2xl tracking-wide text-white uppercase">
            CLIENTS & COLLABORATIONS <span className="text-brand">.</span>
          </h3>
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full flex overflow-x-hidden border-t border-b border-white/5 py-8 bg-[#0D0D0D]">
        
        {/* Soft edge gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 transition-colors duration-300"
            >
              <div className="font-bebas text-3xl sm:text-4xl text-gray-600 hover:text-brand tracking-widest transition-colors duration-300">
                {client.name}
              </div>
              <span className="font-mono text-[9px] text-gray-500 bg-white/5 px-2.5 py-1 rounded-full uppercase">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
