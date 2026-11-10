export type ProjectCategory =
  | "All"
  | "UI/UX Design"
  | "Web Development"
  | "Creative Projects";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  role: string;
  description: string;
  editorialOverview: string;
  thumbnail: string;
  technologies: string[];
  metrics: string[];
  featured: boolean;
  editorialFeatured?: boolean;
  liveUrl: string;
  repoUrl?: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "UI/UX Design",
  "Web Development",
  "Creative Projects",
];

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "obsidian-spatial-design-system",
    title: "Obsidian Spatial UI System",
    category: "UI/UX Design",
    year: "2026",
    role: "Lead UI/UX Architect",
    description:
      "A multi-layered spatial interface architecture and token-driven design system engineered for high-density dark-mode software.",
    editorialOverview:
      "Obsidian reimagines complex desktop-class web applications through calibrated glassmorphism, sub-pixel metallic borders, and deterministic motion curves. Designed in Figma with 400+ variable tokens and brought to life with React and Tailwind CSS.",
    thumbnail: "/projects/obsidian-os.svg",
    technologies: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    metrics: ["420+ Variable Tokens", "Zero-Latency Theme Engine", "WCAG AAA Contrast"],
    featured: true,
    editorialFeatured: true,
    liveUrl: "https://example.com/projects/obsidian-spatial-system",
  },
  {
    id: "02",
    slug: "nocturne-interactive-exhibition",
    title: "Nocturne Digital Exhibition",
    category: "Creative Projects",
    year: "2026",
    role: "Creative Developer",
    description:
      "An Awwwards-inspired choreographed digital exhibition blending kinetic typography, GSAP scroll timelines, and tactile soundscapes.",
    editorialOverview:
      "Built as an exploration of silence and brutalist architecture on the web, Nocturne pairs smooth inertial scrolling via Lenis with custom GSAP ScrollTrigger timelines that respond fluidly to user velocity.",
    thumbnail: "/projects/nocturne-studio.svg",
    technologies: ["Next.js", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
    metrics: ["60 FPS Motion Pipeline", "100 Lighthouse Performance", "Custom Timeline Engine"],
    featured: true,
    liveUrl: "https://example.com/projects/nocturne-exhibition",
  },
  {
    id: "03",
    slug: "aether-institutional-terminal",
    title: "Aether Liquidity Terminal",
    category: "Web Development",
    year: "2025",
    role: "Senior Frontend Engineer",
    description:
      "High-frequency analytics and liquidity execution workspace featuring real-time telemetry, keyboard-first navigation, and modular panels.",
    editorialOverview:
      "Engineered for institutional analysts who demand clarity under pressure. Aether eliminates visual noise in favor of high-contrast typographic hierarchy and instantaneous state transitions.",
    thumbnail: "/projects/aether-protocol.svg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
    metrics: ["Sub-2ms UI Render", "Modular Workspace Grid", "Keyboard Command Palette"],
    featured: true,
    liveUrl: "https://example.com/projects/aether-terminal",
  },
  {
    id: "04",
    slug: "hyperion-luau-interface-engine",
    title: "Hyperion Tactical HUD Engine",
    category: "Creative Projects",
    year: "2025",
    role: "UI Systems & Luau Developer",
    description:
      "A declarative, spring-driven HUD and interactive interface framework built in Luau for next-generation immersive experiences.",
    editorialOverview:
      "Bridging modern web reactive paradigms into Luau, Hyperion provides deterministic state management, 60fps spring interpolation, and resolution-independent vector scaling.",
    thumbnail: "/projects/hyperion-engine.svg",
    technologies: ["Luau", "Figma", "TypeScript", "Motion"],
    metrics: ["0.4ms Frame Budget", "Reactive State Graph", "Custom Spring Solver"],
    featured: false,
    liveUrl: "https://example.com/projects/hyperion-engine",
  },
  {
    id: "05",
    slug: "chrono-vault-enterprise-archive",
    title: "ChronoVault Distributed Archive",
    category: "Web Development",
    year: "2025",
    role: "Full-Stack UI Engineer",
    description:
      "Full-stack immutable document orchestration platform powered by a Laravel API core and an ultra-responsive Next.js client.",
    editorialOverview:
      "ChronoVault unifies cryptographic audit trails with an effortless editorial interface, enabling engineering teams to inspect, verify, and trace versioned snapshots in real time.",
    thumbnail: "/projects/chrono-vault.svg",
    technologies: ["Laravel", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    metrics: ["99.99% Uptime Architecture", "Instant Index Search", "End-to-End Type Safety"],
    featured: false,
    liveUrl: "https://example.com/projects/chrono-vault",
  },
  {
    id: "06",
    slug: "monolith-monochrome-ui-kit",
    title: "Monolith Editorial Component Kit",
    category: "UI/UX Design",
    year: "2024",
    role: "Product Designer",
    description:
      "A comprehensive monochrome design language and Figma component library crafted for luxury digital products and developer tools.",
    editorialOverview:
      "Monolith establishes a strict geometric grid, optical typographic scales, and realistic glass surface recipes that translate 1:1 from Figma canvas to production CSS.",
    thumbnail: "/projects/monolith-design.svg",
    technologies: ["Figma", "Tailwind CSS", "React", "TypeScript"],
    metrics: ["180+ Production Components", "1:1 Code Parity", "Auto-Layout Architecture"],
    featured: false,
    liveUrl: "https://example.com/projects/monolith-ui-kit",
  },
];
