import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWorks from "./components/FeaturedWorks";
import ExploreWork from "./components/ExploreWork";
import AboutMe from "./components/AboutMe";
import Workflow from "./components/Workflow";
import Software from "./components/Software";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import { Project } from "./types";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white selection:bg-brand selection:text-white overflow-x-hidden">
      
      {/* Cinematic Navigation bar */}
      <Navbar />

      {/* Hero Landing */}
      <Hero />

      {/* Curated Bento Grid of Highlights */}
      <FeaturedWorks onProjectClick={handleProjectClick} />

      {/* Filterable Full Grid & Archive */}
      <ExploreWork onProjectClick={handleProjectClick} />

      {/* Biographical Bio & Counters */}
      <AboutMe />

      {/* Step by Step Timeline */}
      <Workflow />

      {/* Software Toolset with Proficiency bars */}
      <Software />

      {/* Infinite Client Marquee */}
      <Clients />

      {/* Dynamic contact and social channels */}
      <Contact />

      {/* Minimal branding base footer */}
      <Footer />

      {/* Fullspec Interactive Project Modal Card */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>

    </div>
  );
}
