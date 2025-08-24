import type { ImageMetadata } from "astro";
import discretizeui_demo from "./assets/projects/discretizeui/demo.png";
import discretizeui_languages from "./assets/projects/discretizeui/languages.png";
import discretizeui_tooltip from "./assets/projects/discretizeui/tooltip.png";
import optimizer1 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_52_AM.png";
import optimizer2 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_53_AM.png";
import optimizer3 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_54_AM.png";
import optimizer4 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_55_AM.png";
import videovault_dashboard from "./assets/projects/videovault/dashboard.png";
import videovault_edit from "./assets/projects/videovault/edit.png";
import videovault_frontpage from "./assets/projects/videovault/frontpage.png";
import videovault_player from "./assets/projects/videovault/player.png";

export const SITE_TITLE = "Alex Daichendt";
export const SITE_DESCRIPTION =
  "Alex Daichendt's personal website, blog, and portfolio.";

export interface Project {
  title: string;
  featured: boolean;
  live_url?: string;
  repo_url?: string;
  description: string;
  tech_stack: string[];
  duration: string;
  deliverables: string[];
  company?: string;
  images: {
    src: ImageMetadata;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "VideoVault",
    featured: true,
    live_url: "https://videovault.shiverpeak.xyz/",
    repo_url: "https://github.com/AlexDaichendt/VideoVault",
    description:
      "A private, self-hosted video vault for your personal use. Supports multiple video transcodes, search, and is blazingly fast thanks to a backend written in Rust and a zero-js (vanilla) frontend.",
    tech_stack: [
      "Rust",
      "Axum",
      "sqlx",
      "Tera Templates",
      "Tailwind CSS",
      "Node.js",
      "pnpm",
      "cargo",
      "ffmpeg",
    ],
    duration: "2025 - Present",
    deliverables: [
      "HLS Streaming of videos",
      "Video Scrubbing",
      "Aspect Ratio Awareness",
      "Multiple Video Transcodes",
      "External Transcoding Workers",
      "Responsive, lightweight design",
      "User Accounts via local, LDAP or OIDC",
      "Sharing with timestamps",
      "Quick and simple deployment (Docker)",
    ],
    images: [
      {
        alt: "Frontpage",
        src: videovault_frontpage,
      },
      {
        alt: "VideoVault Dashboard",
        src: videovault_dashboard,
      },
      {
        alt: "VideoVault Video Player",
        src: videovault_player,
      },
      {
        alt: "VideoVault Edit",
        src: videovault_edit,
      },
    ],
  },

  {
    title: "Discretize: Gear Optimizer",
    featured: true,
    live_url: "https://optimizer.discretize.eu/",
    repo_url: "https://github.com/discretize/discretize-gear-optimizer",
    description:
      "A gear optimizer for the popular MMORPG Guild Wars 2. The optimizer is used by thousands of players daily to find the best gear combinations for their characters.",
    tech_stack: ["React", "Redux", "Rust", "Vite", "MaterialUI"],
    duration: "2021 - Present",
    deliverables: [
      "User-friendly interface",
      "Rust/WASM calculation core",
      "Internationalization",
      "Keyboard Navigation",
    ],
    images: [
      {
        src: optimizer1,
        alt: "Discretize Gear Optimizer Screenshot",
      },
      {
        src: optimizer2,
        alt: "Discretize Gear Optimizer Screenshot",
      },
      {
        src: optimizer3,
        alt: "Discretize Gear Optimizer Screenshot",
      },
      {
        src: optimizer4,
        alt: "Discretize Gear Optimizer Screenshot",
      },
    ],
  },
  {
    title: "@discretize/gw2-ui-new",
    featured: false,
    live_url: "https://discretize.github.io/discretize-ui/gw2-ui",
    repo_url: "https://github.com/discretize/discretize-ui",
    description: `A modern, lightweight React component library for Guild Wars 2 UI elements. Used by all Discretize applications.`,
    tech_stack: ["React", "TypeScript", "CSS Modules", "Storybook"],
    duration: "2023 – Present",
    deliverables: [
      "Refactored all components to TypeScript",
      "Replaced CSS-in-JS with CSS Modules",
      "Better performance by caching, batching",
    ],
    images: [
      {
        src: discretizeui_demo,
        alt: "Production Demo of the component library",
      },

      {
        src: discretizeui_tooltip,
        alt: "Tooltip component",
      },
      {
        src: discretizeui_languages,
        alt: "Supports multiple languages",
      },
    ],
  },
  // {
  //   title: "Discretize -- Rewritten Website",
  //   description:
  //     "Rewritten website for the Discretize community. Contains guides, builds, and other useful information for the popular MMORPG Guild Wars 2. Awaiting last few changes and content updates by players before deployment.",
  //   live_url: "https://next.discretize.eu/",
  //   repo_url: "https://github.com/discretize/discretize.eu-rewrite",
  //   tech_stack: ["Astro", "React", "TypeScript", "Tailwind CSS"],
  //   duration: "2022 - Present",
  //   complexity: 5,
  // },
  // {
  //   title: "Discretize -- CC Tool",
  //   description:
  //     "Allows players to create skill schedules with drag and drop. Used by high-end players to optimize and coordinate their gameplay.",
  //   live_url: "https://cc-tool.pages.dev/",
  //   repo_url: "https://github.com/discretize/cc-tool",
  //   tech_stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
  //   duration: "2024 - Present",
  //   complexity: 3,
  // },
  // {
  //   title: "Discretize -- Random Builds",
  //   description:
  //     "Generates random builds for the popular MMORPG Guild Wars 2. Meant as a way to force players out of their comfort zone and try new things.",
  //   live_url: "https://random-builds.discretize.eu/",
  //   tech_stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
  //   duration: "2022",
  //   complexity: 3,
  // },
  // {
  //   title: "Discretize -- Old Website",
  //   description:
  //     "Currently deployed website for the Discretize community. Contains guides, builds, and other useful information for the popular MMORPG Guild Wars 2. Inherited project from previous maintainer. Several hundred thousand monthly users.",
  //   live_url: "https://discretize.eu/",
  //   tech_stack: ["React", "Gatsby", "Material UI"],
  //   duration: "2019 - Present",
  //   complexity: 3,
  // },
  // {
  //   title: "Minecraft LandLord Spigot Plugin",
  //   live_url: "https://www.spigotmc.org/resources/landlord-2.44398/",
  //   repo_url: "https://github.com/LandlordPlugin/LandLord",
  //   description:
  //     "Landlord aims to keep the Minecraft experience simple and fluid for players while also protecting their land. The idea for this plugin is to protect player builds with minimal game-play interference, while also allowing them to tweak the protection details in a simple and user-friendly way. Handed over the project to a new group of maintainers in 2019.",
  //   tech_stack: ["Java"],
  //   duration: "2017 - 2019",
  //   complexity: 2,
  // },
];
