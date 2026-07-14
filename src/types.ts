export interface Project {
  id: string;
  title: string;
  category: "Modeling" | "UV Unwrap" | "Texturing" | "Rendering" | "Environment Design" | "Product Design";
  software: string[];
  year: string;
  image: string;
  description: string;
  featured: boolean;
  bentoSize?: "large" | "medium" | "small";
  details?: {
    polycount?: string;
    textures?: string;
    renderEngine?: string;
    duration?: string;
  };
}

export interface SoftwareTool {
  name: string;
  category: string;
  icon: string;
  percentage: number;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}
