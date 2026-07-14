import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["home", "portfolio", "skills", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-nav" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-bebas text-2xl tracking-widest text-white hover:text-brand transition-colors cursor-pointer"
          id="nav-logo"
        >
          BHANU
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer relative py-2 ${
                activeSection === item.id
                  ? "text-brand font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 group cursor-pointer shadow-lg shadow-brand/10"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brand transition-colors"
          aria-label="Toggle menu"
          id="mobile-nav-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[68px] left-0 w-full h-screen bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/5 z-40 px-8 py-12 flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-bebas tracking-wider uppercase text-left py-2 border-b border-white/5 ${
                  activeSection === item.id ? "text-brand" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-6 flex items-center justify-between bg-brand text-white px-6 py-4 rounded-xl font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              Hire Me
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
