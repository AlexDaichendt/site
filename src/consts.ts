import type { ImageMetadata } from "astro";
import optimizer1 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_52_AM.png";
import optimizer2 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_53_AM.png";
import optimizer3 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_54_AM.png";
import optimizer4 from "./assets/projects/optimizer/Discretize-Gear-Optimizer-08-05-2025_11_55_AM.png";

export const SITE_TITLE = "Alex Daichendt";
export const SITE_DESCRIPTION =
  "Alex Daichendt's personal website, blog, and portfolio.";

export interface Project {
  title: string;
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
  // {
  //   title: "daichendt.one (this site)",
  //   live_url: "https://www.youtube.com/watch?v=XfELJU1mRMg",
  //   repo_url: "https://github.com/AlexDaichendt/site",
  //   description: "Personal website and blog.",
  //   tech_stack: ["Astro", "Tailwind CSS"],
  //   duration: "2022 - Present",
  //   deliverables: [
  //     "Cloudflare Workers & KV Integration",
  //     "Lightweight & easy to maintain",
  //   ],
  // },
  // {
  //   title: "Radio Player",
  //   live_url: "https://video.taxi/en/functions/simultaneous-interpreting/",
  //  description: "A radio player for the VIDEO.TAXI website. Allows users to listen to radio stations with dubbed audio with the voice of the original speaker.",
  //  tech_stack: ["React", "TypeScript", "Vite", "Go", "Docker"],
  // duration: "2024 - Present",
  // complexity: 4,
  // company: "TV1 GmbH",
  // },
  {
    title: "VIDEO.TAXI Meetings",
    live_url: "https://meetings.video.taxi/",
    description:
      "Records, transcribes, and translates meetings (Webex, Teams, Zoom). Interfaces with the GraphQL API of VIDEO.TAXI. Architecure, development, and deployment all done by me. Greenfield project.",
    tech_stack: [
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "OpenAPI",
    ],
    duration: "2024 - Present",
    company: "TV1 GmbH",
    deliverables: [
      "Live Updating Dashboard",
      "Meeting Bots for Teams, Zoom and Webex",
      "Keycloak integration",
    ],
    images: [],
  },
  // {
  //   title: "Netbox PDU Plugin",
  //   repo_url: "https://github.com/AlexDaichendt/axians-netbox-plugin-pdu",
  //   description:
  //     "Netbox plugin to read out power usage of PDUs. Forked and maintained from the original plugin by Axians. Used in production by multiple companies.",
  //   tech_stack: ["Python", "Django", "Netbox"],
  //   duration: "2023 - Present",
  //   complexity: 4,
  //   company: "TV1 GmbH",
  // },
  // {
  //   title: "Latency IRQ Analyzer",
  //   repo_url: "https://github.com/AlexDaichendt/latency-irq-analyzer",
  //   description:
  //     "Quick uni project for overlaying latency files with IRQ data.",
  //   tech_stack: ["NodeJS", "Highcharts"],
  //   duration: "2024",
  //   complexity: 2,
  // },
  // {
  //   title: "Netbox Agent",
  //   description:
  //     "Reads out lshw, dmidecode and other data of a server and creates Netbox devices. Forked from the original project.",
  //   tech_stack: ["Python"],
  //   duration: "2023 - Present",
  //   complexity: 2,
  //   company: "TV1 GmbH",
  // },
  // {
  //   title: "magewell-exporter",
  //   repo_url: "https://github.com/TV1-EU/magewell-exporter",
  //   description:
  //     "Prometheus exporter for Magewell AiO encoders. Allows monitoring of the capture card status and video signal. Used in production by TV1.",
  //   tech_stack: ["NodeJs", "Typescript"],
  //   duration: "2023",
  //   complexity: 4,
  //   company: "TV1 GmbH",
  // },
  {
    title: "Discretize: Gear Optimizer",
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
  // {
  //   title: "Discretize -- UI Library",
  //   repo_url: "https://github.com/discretize/discretize-ui",
  //   description:
  //     "A beautiful component library with tooltips for the popular MMORPG Guild Wars 2. Allows websites to look and feel like the game. Integral part of the Discretize ecosystem.",
  //   live_url:
  //     "https://discretize.github.io/discretize-ui/gw2-ui/?path=/story/components-attribute--boon-duration",
  //   tech_stack: ["React", "TypeScript", "Storybook"],
  //   duration: "2021 - Present",
  //   complexity: 5,
  // },
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
