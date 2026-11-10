export const APOLLO_EXTENSION_URL =
  "https://chromewebstore.google.com/detail/apolloio-free-b2b-phone-n/alhgpfoeiimagjlnfekdhkjlkiomcapa";

export const EMAIL = "canonizadocarlos@gmail.com";

export const navLinks = [
  { id: "work", label: "Work experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills and interests" },
  { id: "contact", label: "Contact me" },
] as const;

export const quickFacts = [
  { k: "role", v: "Tech Lead" },
  { k: "at", v: "First Mate Technologies" },
  { k: "prev", v: "Eng. Manager, Apollo.io" },
  { k: "based", v: "Manila, Philippines" },
  { k: "focus", v: "AI agents · frontend · browser extensions" },
  { k: "alma", v: "BS Computer Science, UPLB" },
];

export type Role = { title: string; dates: string; bullets: string[] };
export type Job = { idx: string; company: string; location: string; roles: Role[] };

export const jobs: Job[] = [
  {
    idx: "NOW",
    company: "First Mate Technologies",
    location: "San Francisco, CA, USA / Manila, Philippines",
    roles: [
      {
        title: "Tech Lead",
        dates: "October 2025 – Present",
        bullets: [
          "Designed and shipped conversational AI workflows or AOPs (Agent Operating Procedures) for various enterprise clients across chat, email, and voice channels.",
          "Tuned AI agent behavior against live transcripts, cutting unnecessary escalations to live agents.",
          "Built Python tools and scripts executed in a sandboxed runtime that connect AI agents to client systems of record for ticket creation, customer lookup, and live-agent handoff.",
          "Migrated legacy hardcoded backend AOPs, tools, and knowledge article syncers into self-serve coded versions, removing per-client deployments from the release path and expediting changes.",
        ],
      },
    ],
  },
  {
    idx: "2020 – 2024",
    company: "Apollo.io",
    location: "San Francisco, CA, USA",
    roles: [
      {
        title: "Engineering Manager",
        dates: "August 2022 – August 2024",
        bullets: [
          "Managed a team of five frontend engineers for the Apollo Chrome extension, collaborating with cross-functional partners to plan and execute roadmap initiatives.",
          "Increased Chrome extension installs from 100k to 600k+ by delivering multiple major versions, integrating HubSpot and Salesforce, and ensuring feature parity with the Apollo web app (React, Redux, SCSS).",
          "Developed a proactive bug detection framework using Sentry and PagerDuty, achieving consistent SLAs across severities.",
          "Led the migration from Manifest V2 to V3, improving security, performance, and compatibility with all Chromium browsers.",
          "Designed and executed A/B experiments, increasing adoption of Apollo Everywhere and CRM features from 10% to 30% through targeted extension enablement strategies.",
        ],
      },
      {
        title: "Senior Frontend Engineer II",
        dates: "January 2022 – August 2022",
        bullets: [
          "Designed and built the Google Calendar extension, providing users with real-time company and employee insights in their events.",
          "Optimized extension performance by implementing a state caching system with IndexedDB, reducing initial load times by 10x.",
          "Reduced Pusher Channels’ concurrent connections and messages sent daily by 60% by leveraging the SharedWorker API for improved resource management.",
          "Authored onboarding documentation and modularized projects, enabling other teams to contribute with minimal ramp-up time.",
          "Contributed to the TypeScript migration of both the web app and extension, enhancing code maintainability and scalability.",
        ],
      },
      {
        title: "Senior Frontend Engineer",
        dates: "January 2021 – January 2022",
        bullets: [
          "Led the development of Apollo Everywhere, providing access to real-time employee and company data across all websites.",
          "Developed an end-to-end testing framework for the extension using Cypress, increasing test coverage for critical features.",
          "Implemented a Chrome Store review module, leveraging behavioral tracking to triple the frequency of high user ratings.",
          "Integrated Amplitude analytics, providing data-driven insights into product adoption and engagement metrics.",
        ],
      },
      {
        title: "Frontend Engineer",
        dates: "April 2020 – January 2021",
        bullets: [
          "Transformed the Apollo extension from an external iframe to a seamless in-website experience, dynamically adjusting functionalities based on the active website.",
          "Integrated third-party platforms (Outreach, Salesloft) for syncing of contacts and automated email campaign workflows.",
          "Migrated components to a new design system and authored extensive documentation using Storybook, improving UI consistency.",
        ],
      },
    ],
  },
  {
    idx: "2019 – 2020",
    company: "Samsung Research and Development",
    location: "Taguig, Philippines",
    roles: [
      {
        title: "React Developer",
        dates: "April 2019 – April 2020",
        bullets: [
          "Refactored and maintained the Samsung Cloud web app, ensuring compliance with web accessibility standards (WCAG) using React, Redux, and Styled Components.",
          "Developed a health management platform, consolidating and visualizing data from multiple health providers.",
          "Increased test coverage across both applications using Jest and Enzyme, improving software reliability.",
        ],
      },
    ],
  },
  {
    idx: "2019",
    company: "Futurity Learning",
    location: "Manila, Philippines",
    roles: [
      {
        title: "Part-time Flutter Developer",
        dates: "March 2019 – June 2019",
        bullets: [
          "Built a mobile app (iOS & Android) using Flutter and Firebase, providing real-time environmental data and alerts in the Philippines.",
          "Integrated live feeds from BloomSky, enabling users to monitor conditions in thousands of locations.",
        ],
      },
    ],
  },
];

export type Project = {
  idx: string;
  title: string;
  img: string;
  alt: string;
  link?: string;
  desc: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    idx: "P/01",
    title: "Komunidad",
    img: "/projects/komunidad.jpg",
    alt: "Screenshot of the Komunidad mobile app",
    desc: [
      "Komunidad is a mobile application meant to monitor and check the status (like weather) of different communities. It collects images and data from hundreds to thousands of cameras around the Philippines that users can eventually see.",
      "Administrators of the application can post announcements and alerts; users can add their own locations as well. Since the application is made with Flutter, this application is compatible with both Android and iOS devices.",
    ],
    tags: ["Flutter", "Firebase", "Java"],
  },
  {
    idx: "P/02",
    title: "Sign Me Up",
    img: "/projects/sign-me-up.jpg",
    alt: "Screenshot of the Sign Me Up sign language translator",
    link: "https://github.com/ccanonizado/sign-language-translator",
    desc: [
      "Sign Me Up is the undergraduate research output that I presented which is equivalent to a thesis project. It is a sign language translator that captures still images of hand signs and then translates them into letter/words. It also has a database of hand signals that people can refer to if they want to communicate with a deaf person.",
      "Convolutional Neural Network was used to train the data with the help of TensorFlow. This project won best in research for the Computer Science category during the 2nd ICS Mini-Symposium held at the University of the Philippines, Los Baños, Laguna.",
    ],
    tags: ["Android Studio", "TensorFlow"],
  },
  {
    idx: "P/03",
    title: "Super Smash Bros",
    img: "/projects/super-smash-bros.jpg",
    alt: "Screenshot of the Super Smash Bros multiplayer game",
    link: "https://github.com/ccanonizado/super-smash-bros",
    desc: [
      "Super Smash Bros is a Python and Protobuf implementation of the classic Super Smash Bros arcade game. This game is multiplayer and can accommodate up to 6 players. It also has a chat functionality among its players.",
      "This is the first multiplayer game that I, along with my teammates, created. This project also got featured in the UPLB Institute of Computer Science exhibit last 2019.",
    ],
    tags: ["Python", "Pygame", "Protobuf"],
  },
];

export type Skill = { name: string; icon: string };
export type SkillRow = { idx: string; title: string; items: Skill[] };

const s = (name: string, icon: string): Skill => ({ name, icon: `/icons/${icon}.svg` });

export const skills: SkillRow[] = [
  {
    idx: "S/01",
    title: "Development",
    items: [
      s("LLMs", "llms"),
      s("Python", "python"),
      s("JavaScript", "javascript"),
      s("TypeScript", "typescript"),
      s("React", "react"),
      s("Redux", "redux"),
      s("Context", "context"),
      s("Next.js", "nextjs"),
      s("Browser Extensions", "browser-extensions"),
      s("RESTful APIs", "restful-apis"),
      s("HTML", "html"),
      s("CSS", "css"),
      s("SCSS", "scss"),
      s("Styled Components", "styled-components"),
      s("Tailwind", "tailwind"),
      s("Shadcn", "shadcn"),
      s("Cypress", "cypress"),
      s("Jest", "jest"),
      s("Playwright", "playwright"),
      s("Enzyme", "enzyme"),
      s("Docker", "docker"),
      s("Pusher", "pusher"),
      s("Dart", "dart"),
      s("Flutter", "flutter"),
      s("Firebase", "firebase"),
    ],
  },
  {
    idx: "S/02",
    title: "Tools",
    items: [
      s("Claude", "claude"),
      s("Codex", "codex"),
      s("Cursor", "cursor"),
      s("Git", "git"),
      s("GitHub Actions", "github-actions"),
      s("Jira", "jira"),
      s("Figma", "figma"),
      s("Storybook", "storybook"),
      s("Sentry", "sentry"),
      s("Sprig", "sprig"),
      s("PagerDuty", "pagerduty"),
      s("Amplitude", "amplitude"),
      s("Notion", "notion"),
      s("Linear", "linear"),
    ],
  },
  {
    idx: "S/03",
    title: "Others",
    items: [
      s("Agile Methodology", "agile"),
      s("Product Management", "product-management"),
      s("Design Systems", "design-systems"),
      s("User Research", "user-research"),
      s("UI/UX", "ui-ux"),
      s("Accessibility", "accessibility"),
    ],
  },
];

export const socials = [
  { name: "TikTok", url: "https://www.tiktok.com/@cholocmc", icon: "/icons/tiktok.svg" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/cholocmc", icon: "/icons/linkedin.svg" },
  { name: "GitHub", url: "https://www.github.com/cholocmc", icon: "/icons/github.svg" },
  { name: "Facebook", url: "https://www.facebook.com/cholocmc", icon: "/icons/facebook.svg" },
  { name: "Instagram", url: "https://www.instagram.com/cholocmc", icon: "/icons/instagram.svg" },
  { name: "Threads", url: "https://www.threads.com/@cholocmc", icon: "/icons/threads.svg" },
];
