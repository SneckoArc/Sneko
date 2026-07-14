import { Project, SoftwareTool, WorkflowStep } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "headphones",
    title: "Limitless AI Headphones",
    category: "Product Design",
    software: ["Blender", "Substance Painter", "Marmoset Toolbag"],
    year: "2026",
    image: "/src/assets/images/project_headphones_1784007835796.jpg",
    description: "High-end product visualization render of matte black sleek futuristic headphones with subtle glowing orange neon LED accents and premium tactile leather materials.",
    featured: true,
    bentoSize: "large",
    details: {
      polycount: "84,000 Polys",
      textures: "4K UDIM PBR Textures",
      renderEngine: "Marmoset Toolbag 4 Real-time",
      duration: "4 Days"
    }
  },
  {
    id: "sanctuary",
    title: "Forgotten Sanctuary",
    category: "Environment Design",
    software: ["Blender", "Unreal Engine", "Photoshop"],
    year: "2026",
    image: "/src/assets/images/project_sanctuary_1784007851446.jpg",
    description: "Mystical ancient circular stone arch portal overgrown with lush green moss, ferns, and wild vines inside a dense dark forest, featuring dramatic golden volumetric rays.",
    featured: true,
    bentoSize: "medium",
    details: {
      polycount: "1,200,000 Polys (Nanite)",
      textures: "8K Tileable Material Sets",
      renderEngine: "Unreal Engine 5.4 (Lumen)",
      duration: "12 Days"
    }
  },
  {
    id: "keyboard",
    title: "Mechanical Keyboard",
    category: "Product Design",
    software: ["Blender", "Substance Painter", "Marmoset Toolbag"],
    year: "2026",
    image: "/src/assets/images/project_keyboard_1784007866793.jpg",
    description: "Custom premium mechanical keyboard featuring custom orange translucent keycaps, double-shot custom legends, anodized charcoal aluminum housing, and ambient glowing backlights.",
    featured: true,
    bentoSize: "small",
    details: {
      polycount: "142,000 Polys (CAD converted)",
      textures: "2K & 4K Sub-materials",
      renderEngine: "Cycles & Marmoset 4",
      duration: "3 Days"
    }
  },
  {
    id: "truck",
    title: "Range Energy Truck",
    category: "Rendering",
    software: ["Blender", "Substance Painter", "Marmoset Toolbag"],
    year: "2026",
    image: "/src/assets/images/project_truck_1784007881094.jpg",
    description: "Automotive render of an electric delivery truck in an industrial warehouse scene. Emphasizes clean panel gaps, aerodynamic curves, and thin glowing orange LED headlights.",
    featured: true,
    bentoSize: "small",
    details: {
      polycount: "650,000 Polys",
      textures: "4K Specialized Carpaint Shaders",
      renderEngine: "Cycles Render Engine",
      duration: "6 Days"
    }
  },
  {
    id: "perfume",
    title: "Luxury Obsidian Perfume",
    category: "Rendering",
    software: ["Blender", "Photoshop"],
    year: "2026",
    image: "/src/assets/images/project_perfume_1784007896025.jpg",
    description: "Premium black glass perfume bottle filled with gold-tinted active liquid, perched on a wet volcanic rock surrounded by realistic condensation and morning dew drops.",
    featured: true,
    bentoSize: "medium",
    details: {
      polycount: "35,000 Polys",
      textures: "Procedural Shaders & Decals",
      renderEngine: "Blender Cycles (1200 Samples)",
      duration: "2 Days"
    }
  },
  {
    id: "drone",
    title: "Sci-Fi Heavy Drone",
    category: "Modeling",
    software: ["Blender", "Substance Painter"],
    year: "2025",
    image: "/src/assets/images/project_drone_1784007911716.jpg",
    description: "Autonomous heavy-duty security quadcopter drone with advanced sensor pods, carbon landing struts, and glowing orange directional thrusters.",
    featured: false,
    details: {
      polycount: "210,000 Polys (Sub-D)",
      textures: "4K PBR Military Wear",
      renderEngine: "Marmoset Toolbag 4",
      duration: "7 Days"
    }
  },
  {
    id: "interior",
    title: "Modernist Concrete Interior",
    category: "Environment Design",
    software: ["Blender", "Photoshop"],
    year: "2025",
    image: "/src/assets/images/project_interior_1784007926642.jpg",
    description: "Warm architectural viz of an open concrete living room structure featuring light oak wood panels, dynamic natural volumetric sunlight, and handcrafted modern furniture.",
    featured: false,
    details: {
      polycount: "450,000 Polys",
      textures: "Archviz Material Libraries",
      renderEngine: "Cycles (2000 Samples)",
      duration: "5 Days"
    }
  },
  {
    id: "unwrapped_chassis",
    title: "Timberland BOA Frame",
    category: "UV Unwrap",
    software: ["Blender", "Substance Painter"],
    year: "2026",
    image: "/src/assets/images/project_drone_1784007911716.jpg", // We can use the drone or truck for a technical look
    description: "Highly optimized 10-UDIM set for a heavy machinery chassis, maintaining perfect texel density across all structural carbon and metal plates.",
    featured: false,
    details: {
      polycount: "180,000 Polys",
      textures: "10 UDIMs (4K each)",
      renderEngine: "Blender Viewport",
      duration: "3 Days"
    }
  },
  {
    id: "tactical_wear",
    title: "Tactical Exo-Boots",
    category: "Texturing",
    software: ["Substance Painter", "Marmoset Toolbag"],
    year: "2026",
    image: "/src/assets/images/project_headphones_1784007835796.jpg", // Re-use headphones / can do stylized card
    description: "Realistic texturing on an exoskeleton combat boot mesh. Material attributes cover weathered ballistic nylon, oil-stained rubber treads, and active fiber-optic cables.",
    featured: false,
    details: {
      polycount: "64,000 Polys",
      textures: "4K PBR (Albedo, Roughness, Metal, Normal, Emissive)",
      renderEngine: "Marmoset Toolbag 4",
      duration: "4 Days"
    }
  }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: "Blender", category: "Modeling / Rendering", icon: "box", percentage: 95 },
  { name: "Substance Painter", category: "PBR Texturing", icon: "paint-brush", percentage: 90 },
  { name: "Marmoset Toolbag", category: "Baking / Lookdev", icon: "aperture", percentage: 85 },
  { name: "Photoshop", category: "Post-Processing", icon: "image", percentage: 80 },
  { name: "After Effects", category: "VFX / Compositing", icon: "film", percentage: 75 },
  { name: "Unreal Engine", category: "Environment / Real-time", icon: "gamepad", percentage: 85 }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Reference",
    subtitle: "Collection & Research",
    description: "Gathering high-resolution blueprints, material references, real-world lighting samples, and mood boards before touching any polygons."
  },
  {
    step: "02",
    title: "Modeling",
    subtitle: "High & Low Poly modeling",
    description: "Creating clean topology sub-D hard surface models, optimizing mesh density, and ensuring perfect bevels and edge flows for shading."
  },
  {
    step: "03",
    title: "UV Unwrap",
    subtitle: "Clean & Efficient UVs",
    description: "Optimizing UDIM sheets, minimizing texture stretching, matching texel densities across assets, and hiding seams in unnoticeable crevice regions."
  },
  {
    step: "04",
    title: "Texturing",
    subtitle: "PBR Materials & Weathering",
    description: "Baking ambient occlusion, curvature, and normal maps, and painting realistic multi-layered materials with subtle dust, wear, and rust."
  },
  {
    step: "05",
    title: "Lighting",
    subtitle: "Mood & Cinematic Lighting",
    description: "Setting up three-point product lighting, creating atmospheric volumetric fog, tweaking HDRI maps, and configuring dynamic key highlights."
  },
  {
    step: "06",
    title: "Rendering",
    subtitle: "High Quality Renders",
    description: "Rendering high-sample sequences in Cycles, Octane, or Unreal Engine, configuring cryptomattes, depth passes, and denoising algorithms."
  },
  {
    step: "07",
    title: "Final Touch",
    subtitle: "Post Production & Polish",
    description: "Color grading, chromatic aberration adjustments, subtle lens flares, noise overlays, and finalizing presentation layouts in Photoshop."
  }
];

export const CLIENT_LOGOS = [
  { name: "NIANTIC", industry: "AR Gaming" },
  { name: "SAMSUNG", industry: "Hardware Product Visuals" },
  { name: "Gensler", industry: "Archviz Visualization" },
  { name: "KANE", industry: "Creative Agency" },
  { name: "OAKLEY", industry: "Active Eyewear 3D" },
  { name: "BRITA", industry: "Industrial CAD Render" },
  { name: "RO", industry: "Digital Interactive Design" },
  { name: "EPIC GAMES", industry: "Environment Contributor" }
];
