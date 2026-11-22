export const site = {
  name: "Yash Khurana",
  url: "https://yashkhurana.dev",
  email: "khuranay250@gmail.com",
  emailUrl: "mailto:khuranay250@gmail.com?subject=Project%20enquiry",
  githubUrl: "https://github.com/Yashkhurana13",
  linkedinUrl: "https://www.linkedin.com/in/yashkhurana13",
  upworkUrl: "https://www.upwork.com/freelancers/~01a7a8e3529eeaa766",
  fiverrUrl: "",
  title: "Yash Khurana — AI agents & full-stack web apps",
  description:
    "I'm Yash, a developer building AI agents, automations and full-stack web apps. Explore my work and start a freelance project. Based in Hyderabad, working worldwide.",
  hero: {
    eyebrow: "Available for freelance work",
    heading: "AI agents and web apps,",
    accent: "built to earn their keep.",
    intro:
      "I'm Yash, a developer who builds AI agents, automations and full-stack web apps, and ships them to real users. By day I build AI agents at an AI product studio; I take on freelance projects worldwide.",
  },
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "Django",
    "LLM agents & MCP",
    "OpenAI",
    "Gemini",
    "Postgres",
    "MySQL",
    "Docker",
    "AWS",
    "Android (Kotlin)",
  ],
  services: [
    {
      title: "AI agents & automation",
      description:
        "Chatbots on your own data, and agents that do real work in Slack, email, your CRM or any website.",
      symbol: "agent",
    },
    {
      title: "Web scraping & data",
      description:
        "Reliable, scheduled data from any website into your sheet, database or API.",
      symbol: "data",
    },
    {
      title: "Full-stack web apps",
      description:
        "MVPs, booking systems and dashboards with login and payments, from idea to live site.",
      symbol: "app",
    },
  ],
  process: [
    {
      title: "Free 20-minute call",
      description:
        "You explain the problem; I tell you honestly if I can help.",
    },
    {
      title: "Clear quote",
      description: "Scope, price and date agreed up front.",
    },
    {
      title: "Weekly demos",
      description: "You see working software every week.",
    },
    {
      title: "Handover",
      description: "You own the code, with docs and a short walkthrough video.",
    },
  ],
  about:
    "Computer Science student (B.Tech 2027) who already ships production AI agents at an AI product studio in Hyderabad. Oracle Certified Generative AI Professional and Data Science Professional. Top 1,500 in Google Big Code 2026. I work with clients worldwide and reply within 24 hours.",
  contact: {
    heading: "Have a project in mind?",
    description: "Tell me about it. I reply within 24 hours.",
  },
};

export function profileLinks() {
  return [
    { label: "Email", href: site.emailUrl },
    { label: "GitHub", href: site.githubUrl },
    { label: "LinkedIn", href: site.linkedinUrl },
    { label: "Upwork", href: site.upworkUrl },
    { label: "Fiverr", href: site.fiverrUrl },
  ].filter((link) => link.href);
}
