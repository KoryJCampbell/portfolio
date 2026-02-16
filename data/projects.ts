export interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "LegacyBridge",
    description:
      "API wrapper platform for government legacy systems. Connects to Oracle, DB2, and mainframe systems and exposes modern REST/GraphQL APIs — zero migration required.",
    tags: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/koryjcampbell",
  },
  {
    name: "BookingFlow",
    description:
      "Unified inbox web app for talent bookers — real-time messaging, drag-and-drop organization, and contact management with keyboard shortcuts and mobile-responsive design.",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Zustand", "dnd-kit"],
    github: "https://github.com/koryjcampbell",
  },
  {
    name: "BookingFlow Mobile",
    description:
      "Companion mobile app for BookingFlow built with React Native and Expo. Offline-capable with cloud sync, native gestures, and swappable data layer.",
    tags: ["React Native", "Expo", "NativeWind", "TanStack Query", "Zustand"],
    github: "https://github.com/koryjcampbell",
  },
  {
    name: "GovTech Tool Suite",
    description:
      "Collection of developer tools for federal contractors — ATO compliance scanner, FedRAMP project scaffolder, SBOM generator, and federal auth libraries.",
    tags: ["Node.js", "TypeScript", "CLI", "GitHub Actions", "NIST 800-53"],
    github: "https://github.com/koryjcampbell",
  },
];
