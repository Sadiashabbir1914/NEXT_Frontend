export const CATEGORIES = [
  {
    slug: "web-development",
    name: "Web Development",
    icon: "◈",
    color: "#c9a84c",
    description: "Build modern, responsive web applications from the ground up.",
    courseCount: 42,
    level: "Beginner → Advanced",
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    icon: "◉",
    color: "#7eb8f7",
    description: "Understand and implement intelligent systems using real-world data.",
    courseCount: 28,
    level: "Intermediate → Advanced",
  },
  {
    slug: "devops-cloud",
    name: "DevOps & Cloud",
    icon: "◇",
    color: "#a78bfa",
    description: "Automate, scale, and deploy software with modern cloud infrastructure.",
    courseCount: 19,
    level: "Intermediate",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    icon: "◎",
    color: "#f87171",
    description: "Protect systems, networks, and data from digital attacks.",
    courseCount: 17,
    level: "Beginner → Advanced",
  },
  {
    slug: "mobile-development",
    name: "Mobile Development",
    icon: "⊡",
    color: "#34d399",
    description: "Create polished iOS and Android apps with cross-platform frameworks.",
    courseCount: 22,
    level: "Beginner → Intermediate",
  },
  {
    slug: "system-design",
    name: "System Design",
    icon: "⊞",
    color: "#fb923c",
    description: "Architect scalable, fault-tolerant distributed systems.",
    courseCount: 14,
    level: "Advanced",
  },
  {
    slug: "databases",
    name: "Databases",
    icon: "◻",
    color: "#f0abfc",
    description: "Master relational, NoSQL, and time-series database systems.",
    courseCount: 16,
    level: "Beginner → Advanced",
  },
  {
    slug: "blockchain",
    name: "Blockchain & Web3",
    icon: "◆",
    color: "#fbbf24",
    description: "Build decentralized applications and smart contracts.",
    courseCount: 11,
    level: "Intermediate → Advanced",
  },
];

export const PATHS = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    tagline: "From fundamentals to production-grade React applications",
    icon: "◈",
    color: "#c9a84c",
    duration: "6 months",
    level: "Beginner → Senior",
    courses: [1, 2],
    outcomes: [
      "Build full-stack Next.js applications",
      "Write robust TypeScript at scale",
      "Master state management and performance optimization",
      "Deploy to production with CI/CD pipelines",
    ],
    steps: [
      { phase: "Foundation", courses: [2], weeks: 4, desc: "TypeScript and modern JavaScript patterns" },
      { phase: "Core Skills", courses: [1], weeks: 8, desc: "Next.js App Router, SSR, and data fetching" },
      { phase: "Specialization", courses: [7], weeks: 6, desc: "System thinking for frontend architecture" },
    ],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    tagline: "Build intelligent systems from data to deployment",
    icon: "◉",
    color: "#7eb8f7",
    duration: "9 months",
    level: "Intermediate → Expert",
    courses: [3, 11],
    outcomes: [
      "Train and evaluate machine learning models",
      "Build RAG-powered LLM applications",
      "Deploy ML systems to production at scale",
      "Design agentic AI workflows",
    ],
    steps: [
      { phase: "ML Foundations", courses: [3], weeks: 10, desc: "Python, data science, and classical ML" },
      { phase: "Deep Learning", courses: [3], weeks: 8, desc: "Neural networks, NLP, and transformers" },
      { phase: "LLM Engineering", courses: [11], weeks: 10, desc: "Production AI apps and agentic systems" },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Engineer",
    tagline: "Automate, scale, and operate modern infrastructure",
    icon: "◇",
    color: "#a78bfa",
    duration: "7 months",
    level: "Intermediate → Senior",
    courses: [4, 10],
    outcomes: [
      "Architect multi-region AWS infrastructure",
      "Operate production Kubernetes clusters",
      "Implement GitOps and CI/CD pipelines",
      "Design for reliability and cost efficiency",
    ],
    steps: [
      { phase: "Cloud Foundations", courses: [4], weeks: 8, desc: "AWS architecture and certification prep" },
      { phase: "Containers & Orchestration", courses: [10], weeks: 10, desc: "Docker and production Kubernetes" },
      { phase: "SRE Practices", courses: [10], weeks: 6, desc: "Observability, SLOs, and incident management" },
    ],
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    tagline: "Protect systems by learning to break them",
    icon: "◎",
    color: "#f87171",
    duration: "5 months",
    level: "Intermediate → Advanced",
    courses: [5],
    outcomes: [
      "Conduct professional penetration tests",
      "Identify and exploit common vulnerabilities",
      "Write detailed security assessment reports",
      "Prepare for OSCP certification",
    ],
    steps: [
      { phase: "Recon & Network", courses: [5], weeks: 6, desc: "OSINT, scanning, and network exploitation" },
      { phase: "Web & Application", courses: [5], weeks: 8, desc: "OWASP Top 10 and web attack techniques" },
      { phase: "Advanced Exploitation", courses: [5], weeks: 6, desc: "Post-exploitation and report writing" },
    ],
  },
];


export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export function getPathBySlug(slug) {
  return PATHS.find((p) => p.slug === slug) ?? null;
}
