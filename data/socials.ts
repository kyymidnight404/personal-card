export interface SocialPlatform {
  id: string;
  name: string;
  label: string;
  handle: string;
  description: string;
  href: string;
  actionLabel: string;
}

export interface ConnectLinkItem {
  id: "email" | "github" | "instagram" | "discord" | "website";
  label: string;
  displayText: string;
  href: string;
  isPlaceholder?: boolean;
  ariaLabel: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ExpertiseItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechStackItem {
  name: string;
  category: string;
  tag: string;
  description: string;
}

/**
 * Core identity & content configuration for the KyyMidnight Digital Identity Card.
 */
export const IDENTITY_CONTENT = {
  name: "KYYMIDNIGHT",
  tagline: "UI/UX DESIGNER & DEVELOPER",
  aboutMe:
    "I'm a student developer exploring UI/UX design and web development, passionate about creating thoughtful digital experiences.",
  currentFocus:
    "Designing intuitive interfaces & building modern websites.",
  expertise: [
    "UI/UX Design",
    "Web Development",
    "Front-end Development",
    "Prototyping",
    "Responsive Design",
  ],
  interests: [
    "Gaming",
    "Music",
    "Design",
    "Technology",
  ],
  skillCategories: [
    {
      id: "design",
      title: "Design",
      items: [
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Responsive Design",
      ],
    },
    {
      id: "development",
      title: "Development",
      items: [
        "Front-end Development",
        "Web Development",
        "Database Management",
      ],
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      items: [
        "Figma",
        "HTML / CSS",
        "JavaScript",
        "Laravel",
        "Next.js",
        "MySQL",
        "Git",
      ],
    },
  ] satisfies SkillCategoryGroup[],
} as const;

/**
 * Configurable contact & identity settings.
 * Uses existing project handles and clear placeholders where live endpoints are not yet configured.
 */
export const CONTACT_CONFIG = {
  name: "KyyMidnight",
  role: "UI/UX Designer & Developer",
  email: "hello@kyymidnight.example.com",
  github: "https://github.com/kyymidnight404",
  instagram: "https://instagram.com/kyymidnight",
  discord: "https://discord.com/users/1271411215997997175",
  website: "https://kyymidnight.web.id",
  location: "Jakarta, Indonesia // Remote Worldwide",
  timezone: "GMT+7 (WIB)",
  availability: {
    isAvailable: true,
    statusText: "Open to creative projects",
    detailText:
      "Currently accepting select Q2/Q3 commissions for design systems, interactive web experiences, and frontend architecture.",
    responseWindow: "Within 24–48 hours",
  },
};

/**
 * Ordered Connect links following priority:
 * 1. Email
 * 2. GitHub
 * 3. Instagram
 * 4. Discord
 * 5. Personal Website (kyymidnight.web.id)
 */
export const CONNECT_LINKS: ConnectLinkItem[] = [
  {
    id: "email",
    label: "Email",
    displayText: "Email",
    href: `mailto:${CONTACT_CONFIG.email}`,
    isPlaceholder: true,
    ariaLabel: `Send email to ${CONTACT_CONFIG.email} (placeholder address)`,
  },
  {
    id: "github",
    label: "GitHub",
    displayText: "GitHub",
    href: CONTACT_CONFIG.github,
    ariaLabel: "Visit KyyMidnight on GitHub (kyymidnight404, opens in new tab)",
  },
  {
    id: "instagram",
    label: "Instagram",
    displayText: "Instagram",
    href: CONTACT_CONFIG.instagram,
    ariaLabel: "Visit KyyMidnight on Instagram (@kyymidnight, opens in new tab)",
  },
  {
    id: "discord",
    label: "Discord",
    displayText: "Discord",
    href: CONTACT_CONFIG.discord,
    ariaLabel: "Connect with KyyMidnight on Discord (opens in new tab)",
  },
  {
    id: "website",
    label: "Website",
    displayText: "Website",
    href: CONTACT_CONFIG.website,
    ariaLabel: "Visit KyyMidnight personal website kyymidnight.web.id (opens in new tab)",
  },
];

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "email",
    name: "Email",
    label: "DIRECT INQUIRY",
    handle: CONTACT_CONFIG.email,
    description: "Project briefs, consulting inquiries, and creative collaborations.",
    href: `mailto:${CONTACT_CONFIG.email}`,
    actionLabel: "Send Message",
  },
  {
    id: "github",
    name: "GitHub",
    label: "CODE REPOSITORIES",
    handle: "github.com/kyymidnight-placeholder",
    description: "Open-source experiments, UI architectures, and frontend systems.",
    href: "https://github.com",
    actionLabel: "Explore GitHub",
  },
  {
    id: "discord",
    name: "Discord",
    label: "REAL-TIME CHANNEL",
    handle: "kyymidnight#0000 (Placeholder)",
    description: "Direct synchronous discussions for ongoing engineering & Luau projects.",
    href: "https://discord.com",
    actionLabel: "Connect on Discord",
  },
  {
    id: "figma",
    name: "Figma",
    label: "DESIGN SYSTEMS",
    handle: "@kyymidnight-placeholder",
    description: "Component libraries, spatial glass tokens, and interactive prototypes.",
    href: "https://figma.com",
    actionLabel: "View Figma Profile",
  },
];

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: "ui-ux",
    index: "01",
    title: "UI/UX Design",
    subtitle: "Spatial Clarity & Systems Thinking",
    description:
      "Architecting intuitive interfaces with disciplined typography, optical balance, and scalable Figma token systems that elevate complex products.",
    deliverables: [
      "Design Systems & Tokens",
      "Interactive Prototyping",
      "Information Architecture",
      "High-Contrast Dark UI",
    ],
  },
  {
    id: "frontend",
    index: "02",
    title: "Frontend Development",
    subtitle: "Production-Grade Engineering",
    description:
      "Building resilient, type-safe web applications using Next.js, React, TypeScript, and Tailwind CSS with obsessive attention to Core Web Vitals.",
    deliverables: [
      "Next.js App Router Architecture",
      "TypeScript Component Libraries",
      "Accessible Semantic Markup",
      "API & Laravel Integration",
    ],
  },
  {
    id: "creative-dev",
    index: "03",
    title: "Creative Development",
    subtitle: "Choreographed Motion & Depth",
    description:
      "Bridging design and physics through custom GSAP timelines, inertial scrolling, and tactile shaders that make digital surfaces feel alive.",
    deliverables: [
      "GSAP Timeline Choreography",
      "ScrollTrigger Storytelling",
      "Micro-Interaction Physics",
      "Luau & Real-Time UI Systems",
    ],
  },
  {
    id: "interactive",
    index: "04",
    title: "Interactive Experiences",
    subtitle: "Memorable Digital Identities",
    description:
      "Crafting bespoke web experiences, flagship product launches, and interactive showcases that leave a lasting sensory impression.",
    deliverables: [
      "Editorial Web Experiences",
      "Custom Cursor & Magnetic UI",
      "Fluid Page Transitions",
      "Cross-Device Responsiveness",
    ],
  },
];

export const TECH_STACK: TechStackItem[] = [
  {
    name: "Laravel",
    category: "Backend Architecture",
    tag: "PHP / API Core",
    description: "Robust server-side architecture, RESTful APIs, and secure data orchestration.",
  },
  {
    name: "React",
    category: "UI Library",
    tag: "Component Model",
    description: "Declarative, composable user interfaces with predictable state flows.",
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    tag: "App Router / SSR",
    description: "Hybrid server rendering, route optimization, and instant edge performance.",
  },
  {
    name: "TypeScript",
    category: "Language",
    tag: "Strict Type Safety",
    description: "End-to-end static typing for maintainable, self-documenting codebases.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling Engine",
    tag: "Design Tokens",
    description: "Precision utility system tailored for bespoke monochrome glass aesthetics.",
  },
  {
    name: "Figma",
    category: "Design Tool",
    tag: "Systems & Variables",
    description: "High-fidelity wireframing, interactive prototyping, and multi-mode variable tokens.",
  },
  {
    name: "Luau",
    category: "Scripting Engine",
    tag: "Real-Time Interactive",
    description: "High-performance typed scripting for interactive HUDs and physics-driven systems.",
  },
];
