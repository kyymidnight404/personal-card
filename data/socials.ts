
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
 * Core identity & content configuration
 * for the KyyMidnight Digital Identity Card.
 */
export const IDENTITY_CONTENT = {
  name: "KYYMIDNIGHT",
  tagline: "UI/UX DESIGNER & DEVELOPER",

  aboutMe:
    "I'm a developer exploring UI/UX design and web development, passionate about creating thoughtful digital experiences.",

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
    "Tech",
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
        "TypeScript",
        "React",
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
 */
export const CONTACT_CONFIG = {
  name: "KyyMidnight",
  role: "UI/UX Designer & Developer",

  email: "kyymidnight404@gmail.com",

  github: "https://github.com/kyymidnight404",
  instagram: "https://instagram.com/kyymidnight",
  discord: "https://discord.com/users/1271411215997997175",
  website: "https://kyymidnight.web.id",

  location: "Bandung, Indonesia // Remote Worldwide",
  timezone: "GMT+7 (WIB)",

  availability: {
    isAvailable: true,
    statusText: "Open to creative projects",
    detailText:
      "Currently open to selected creative projects, design systems, interactive web experiences, and frontend development collaborations.",
    responseWindow: "Within 24–48 hours",
  },
};

/**
 * Ordered Connect links:
 * 1. Email
 * 2. GitHub
 * 3. Instagram
 * 4. Discord
 * 5. Personal Website
 */
export const CONNECT_LINKS: ConnectLinkItem[] = [
  {
    id: "email",
    label: "Email",
    displayText: "Email",
    href: `mailto:${CONTACT_CONFIG.email}`,
    isPlaceholder: false,
    ariaLabel: `Send email to ${CONTACT_CONFIG.email}`,
  },
  {
    id: "github",
    label: "GitHub",
    displayText: "GitHub",
    href: CONTACT_CONFIG.github,
    ariaLabel:
      "Visit KyyMidnight on GitHub (kyymidnight404, opens in new tab)",
  },
  {
    id: "instagram",
    label: "Instagram",
    displayText: "Instagram",
    href: CONTACT_CONFIG.instagram,
    ariaLabel:
      "Visit KyyMidnight on Instagram (@kyymidnight, opens in new tab)",
  },
  {
    id: "discord",
    label: "Discord",
    displayText: "Discord",
    href: CONTACT_CONFIG.discord,
    ariaLabel:
      "Connect with KyyMidnight on Discord (opens in new tab)",
  },
  {
    id: "website",
    label: "Website",
    displayText: "Website",
    href: CONTACT_CONFIG.website,
    ariaLabel:
      "Visit KyyMidnight personal website (kyymidnight.web.id)",
  },
];

/**
 * Social platforms configuration.
 */
export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "email",
    name: "Email",
    label: "DIRECT INQUIRY",
    handle: CONTACT_CONFIG.email,
    description:
      "Project inquiries, collaboration opportunities, and professional communication.",
    href: `mailto:${CONTACT_CONFIG.email}`,
    actionLabel: "Send Email",
  },
  {
    id: "github",
    name: "GitHub",
    label: "CODE REPOSITORIES",
    handle: "github.com/kyymidnight404",
    description:
      "Open-source projects, development experiments, and frontend implementations.",
    href: CONTACT_CONFIG.github,
    actionLabel: "Explore GitHub",
  },
  {
    id: "instagram",
    name: "Instagram",
    label: "SOCIAL PRESENCE",
    handle: "@kyymidnight",
    description:
      "Personal updates, creative activities, and visual inspirations.",
    href: CONTACT_CONFIG.instagram,
    actionLabel: "Visit Instagram",
  },
  {
    id: "discord",
    name: "Discord",
    label: "REAL-TIME CHANNEL",
    handle: "KyyMidnight",
    description:
      "Direct communication for discussions, gaming, and creative collaborations.",
    href: CONTACT_CONFIG.discord,
    actionLabel: "Connect on Discord",
  },
  {
    id: "website",
    name: "Website",
    label: "PERSONAL PORTFOLIO",
    handle: "kyymidnight.web.id",
    description:
      "Explore my digital identity, projects, and creative portfolio.",
    href: CONTACT_CONFIG.website,
    actionLabel: "Visit Website",
  },
];

/**
 * Professional expertise.
 */
export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: "ui-ux",
    index: "01",
    title: "UI/UX Design",
    subtitle: "Spatial Clarity & Systems Thinking",
    description:
      "Designing intuitive interfaces with disciplined typography, visual hierarchy, and scalable design systems using Figma.",
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
    subtitle: "Modern Web Engineering",
    description:
      "Building responsive web applications using React, Next.js, TypeScript, and Tailwind CSS with a focus on maintainability and performance.",
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
    subtitle: "Motion & Interactive Experiences",
    description:
      "Combining design and development to create engaging digital experiences through animations, micro-interactions, and interactive interfaces.",
    deliverables: [
      "Interactive Web Animations",
      "Scroll-Based Experiences",
      "Micro-Interactions",
      "Luau & Real-Time UI Systems",
    ],
  },
  {
    id: "interactive",
    index: "04",
    title: "Interactive Experiences",
    subtitle: "Memorable Digital Identities",
    description:
      "Creating distinctive digital experiences, portfolio websites, and interactive showcases with attention to usability and visual consistency.",
    deliverables: [
      "Editorial Web Experiences",
      "Interactive UI Components",
      "Fluid Page Transitions",
      "Cross-Device Responsiveness",
    ],
  },
];

/**
 * Technologies & tools.
 */
export const TECH_STACK: TechStackItem[] = [
  {
    name: "Laravel",
    category: "Backend Architecture",
    tag: "PHP / API Core",
    description:
      "Server-side application development, RESTful APIs, and database integration.",
  },
  {
    name: "React",
    category: "UI Library",
    tag: "Component Model",
    description:
      "Building reusable and composable user interfaces with predictable state management.",
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    tag: "App Router / SSR",
    description:
      "Modern React framework for server rendering, routing, and optimized web applications.",
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    tag: "Static Type Safety",
    description:
      "Improving code reliability and maintainability through static typing.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling Framework",
    tag: "Utility-First CSS",
    description:
      "Building consistent and responsive interfaces using utility-based styling.",
  },
  {
    name: "Figma",
    category: "Design Tool",
    tag: "Systems & Prototyping",
    description:
      "Creating wireframes, high-fidelity interfaces, interactive prototypes, and design systems.",
  },
  {
    name: "Luau",
    category: "Scripting Language",
    tag: "Roblox Development",
    description:
      "Developing interactive gameplay systems, interfaces, and game mechanics for Roblox.",
  },
  {
    name: "MySQL",
    category: "Database",
    tag: "Relational Database",
    description:
      "Managing structured data and relational database architectures.",
  },
];
