import React, { useState, useRef } from "react";
import { Send, Mail, Linkedin, Instagram, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("sending");

    // Simulate successful message submission with realistic delay
    setTimeout(() => {
      // Save locally to simulate persistence
      const savedMessages = JSON.parse(localStorage.getItem("bhanu_portfolio_messages") || "[]");
      savedMessages.push({
        ...formState,
        date: new Date().toISOString()
      });
      localStorage.setItem("bhanu_portfolio_messages", JSON.stringify(savedMessages));

      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const socialLinks = [
    { label: "INSTAGRAM", url: "https://instagram.com", icon: <Instagram className="w-4 h-4 text-brand" /> },
    { label: "LINKEDIN", url: "https://linkedin.com", icon: <Linkedin className="w-4 h-4 text-brand" /> },
    { label: "ARTSTATION", url: "https://artstation.com", icon: <Mail className="w-4 h-4 text-brand" /> }, // Mail as placeholder
    { label: "BEHANCE", url: "https://behance.net", icon: <ArrowUpRight className="w-4 h-4 text-brand" /> }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] border-t border-white/5 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Narrative & Links */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <span className="text-brand font-mono text-xs tracking-[0.2em] uppercase block mb-3">
                LET'S TALK
              </span>
              <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white leading-tight mb-6">
                LET'S CREATE<br />
                SOMETHING AMAZING <span className="text-brand">.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md font-sans">
                I'm currently available for freelance work, agency contracts, studio collaborations, and exciting full-time opportunities. Drop me a line!
              </p>
            </div>

            {/* Direct Email CTA Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 bg-[#141414] mb-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">DIRECT EMAIL</span>
              <a
                href="mailto:bp69356@gmail.com"
                className="text-lg sm:text-xl font-mono text-white hover:text-brand font-semibold flex items-center gap-2 transition-colors duration-300"
              >
                bp69356@gmail.com
                <ArrowUpRight className="w-5 h-5 text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Social Grid */}
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">SOCIAL PLATFORMS</span>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between bg-[#141414] hover:bg-[#1f1f1f] border border-white/5 hover:border-brand/40 px-4 py-3 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      {social.icon}
                      <span className="text-[10px] font-mono text-gray-300 group-hover:text-white tracking-widest uppercase">{social.label}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Premium Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/5 rounded-3xl p-6 sm:p-10 relative">
            
            {/* Status alerts */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-start gap-3 text-sm text-left"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-green-400 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. I'll get back to you within 24 hours.</span>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-3 text-sm text-left"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Form Validation Error</strong>
                    <span>{errorMessage}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2">
                    01. YOUR NAME <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand font-sans text-sm transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2">
                    02. EMAIL ADDRESS <span className="text-brand">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    className="bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand font-sans text-sm transition-colors"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2">
                  03. SUBJECT OF MESSAGE
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="What is this about?"
                  className="bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand font-sans text-sm transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2">
                  04. MESSAGE DETAILS <span className="text-brand">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your design, timeline, or job opportunity..."
                  className="bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand font-sans text-sm transition-colors resize-none"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-3 bg-brand text-white py-4.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-brand/10 hover:shadow-brand/20 ${
                  status === "sending" ? "opacity-75 cursor-not-allowed" : "hover:bg-white hover:text-black"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <span>SENDING MESSAGE...</span>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
