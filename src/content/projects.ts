export type ProjectCategory = "ai" | "web" | "mobile";
export type ProjectCover =
  "tender" | "slack" | "blink" | "barber" | "expenses" | "smartbite";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tag: string;
  summary: string;
  tech: string[];
  githubUrl?: string;
  demoUrl: string;
  image: string;
  cover: ProjectCover;
  caseStudy?: {
    problem: string;
    built: string;
    how: string[];
    hardParts?: string;
    results: string;
  };
  details?: { problem: string; built: string; how: string; results: string };
};

export const projects: Project[] = [
  {
    slug: "tender-agent",
    title: "Tender Scraper Agent",
    category: "ai",
    tag: "AI agent · Professional work",
    summary:
      "Give it a tender website and it explores the site, writes a scraper, tests it and fixes its own errors until it works. Used on 280+ real government tender websites.",
    tech: ["TypeScript", "LLM agents", "MCP tools", "browser automation"],
    demoUrl: "",
    image: "",
    cover: "tender",
    caseStudy: {
      problem:
        "A tender-aggregation platform tracks hundreds of government and bank tender sites. Each needed a hand-written scraper, and sites change often.",
      built:
        "An agent that, given a URL, surveys the site, finds the tender list, chooses fields (title, deadline, value, documents), writes a scraping recipe, runs it on the real scraping engine and repairs it from structured errors. Admins approve with one click.",
      how: [
        "Explore — survey the website and locate the tender list, detail pages and documents.",
        "Write — choose the fields and produce a scraping recipe for the existing engine.",
        "Test and repair — run the recipe on the real scraping engine, read structured errors and fix the recipe within the job budget.",
        "Approve — hand the working recipe to an admin for one-click approval.",
      ],
      hardParts:
        "Pagination, detail pages, document downloads, pop-ups and many date formats all needed handling without site-specific code. Image CAPTCHAs use an AI solver with a human fallback. Every job has a 2-hour budget.",
      results:
        "Shipped to the team's dev environment across 3 codebases; QA uses it on 280+ tender websites. The agent produced working recipes for the majority of sites without human help.",
    },
  },
  {
    slug: "slack-hr-agent",
    title: "Slack HR Onboarding Agent",
    category: "ai",
    tag: "AI agent · Professional work",
    summary:
      "HR tags the agent in Slack with a new joiner; it creates their company email, sends the Slack invite and emails the onboarding details. For leavers, it revokes all access.",
    tech: ["LLM agent", "Slack API", "Google Workspace"],
    demoUrl: "",
    image: "",
    cover: "slack",
    caseStudy: {
      problem:
        "A new joiner needs a company email, a Slack invite and onboarding details. When someone leaves, their access needs to be revoked. These steps span Slack, email and Google Workspace.",
      built:
        "An HR agent that works from a Slack mention. HR tags the agent with a new joiner; it creates their company email, sends the Slack invite and emails the onboarding details. For leavers, it revokes all access.",
      how: [
        "Start in Slack — HR tags the agent with a new joiner.",
        "Create access — the agent creates the company email through Google Workspace and sends the Slack invite.",
        "Send the details — the agent emails the onboarding information to the joiner.",
        "Offboard — for leavers, the agent revokes access across the connected services.",
      ],
      results:
        "The onboarding workflow brings company email creation, Slack invitations and onboarding emails into one Slack interaction. The agent also handles access revocation for leavers.",
    },
  },
  {
    slug: "blink",
    title: "Blink",
    category: "ai",
    tag: "AI app",
    summary:
      "Type one sentence and get a working web app or game in seconds. The code streams in live, the app runs in a sandbox, and you can remix it in plain English.",
    tech: [
      "TypeScript",
      "Node",
      "LLM streaming (SSE)",
      "sandboxed iframes + CSP",
    ],
    githubUrl: "https://github.com/Yashkhurana13/blink",
    demoUrl: "",
    image: "",
    cover: "blink",
    details: {
      problem:
        "Turning an idea for a small web app or game into something you can try usually starts with writing code.",
      built:
        "A prompt-to-app experience: describe an idea in one sentence, watch the code stream in, then try and remix the result in plain English.",
      how: "A TypeScript and Node app streams generated code using server-sent events (SSE). The generated app runs in a sandboxed iframe with a Content Security Policy (CSP).",
      results:
        "A working web app or game that can be tried in the sandbox and remixed through another prompt.",
    },
  },
  {
    slug: "royal-barber",
    title: "Royal Barber",
    category: "web",
    tag: "Full-stack web app",
    summary:
      "A salon booking platform: time-slot booking, customer and admin dashboards, OTP login, Razorpay payments and refunds, and an AI support assistant.",
    tech: ["Django", "Python", "MySQL", "Razorpay", "Gemini"],
    githubUrl: "https://github.com/Yashkhurana13/my-salon-website",
    demoUrl: "",
    image: "",
    cover: "barber",
    details: {
      problem:
        "Salon bookings need a clear way to choose time slots, manage appointments and handle payments and refunds.",
      built:
        "A salon booking platform with customer and admin dashboards, OTP login, Razorpay payments and refunds, and an AI support assistant.",
      how: "Django and MySQL support bookings and dashboards. Customers log in with an OTP, book a time slot and pay through Razorpay. Gemini powers the support assistant.",
      results:
        "A complete booking flow, with separate customer and admin views and support for payments and refunds.",
    },
  },
  {
    slug: "shared-expenses",
    title: "Shared Expenses + CSV Import",
    category: "web",
    tag: "Web app · Fintech",
    summary:
      "A Splitwise-style app that imports messy bank CSVs, flags duplicates, math errors and membership problems, and asks for approval instead of guessing.",
    tech: ["JavaScript", "data validation", "anomaly detection"],
    githubUrl: "https://github.com/Yashkhurana13/SplitWise",
    demoUrl: "",
    image: "",
    cover: "expenses",
    details: {
      problem:
        "Messy bank CSVs can contain duplicate transactions, math errors and expenses that do not match the group's membership.",
      built:
        "A Splitwise-style shared-expense app with CSV import, validation and an approval step for uncertain entries.",
      how: "JavaScript validation and anomaly detection flag duplicates, math errors and membership problems during import. Flagged entries ask for approval instead of being silently accepted.",
      results:
        "A reviewable CSV import flow that surfaces problematic entries before they become shared expenses.",
    },
  },
  {
    slug: "smartbite",
    title: "SmartBite",
    category: "mobile",
    tag: "Mobile app · AI",
    summary:
      "An Android app that recognises food from a photo, tracks meals and nutrition against your goal, sends reminders and exports PDF reports.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "ML Kit"],
    githubUrl: "https://github.com/Yashkhurana13/ai_food_intaker",
    demoUrl: "",
    image: "",
    cover: "smartbite",
    details: {
      problem:
        "Tracking meals means identifying food, recording nutrition and keeping that information connected to a personal goal.",
      built:
        "An Android app that recognises food from a photo, tracks meals and nutrition, sends reminders and exports PDF reports.",
      how: "Kotlin and Jetpack Compose provide the Android interface. ML Kit supports food recognition, with Firebase supporting the app's data. Meal and nutrition tracking follows the user's goal.",
      results:
        "Photo-based food recognition, goal-based meal tracking, reminders and exportable PDF reports in one Android app.",
    },
  },
];
