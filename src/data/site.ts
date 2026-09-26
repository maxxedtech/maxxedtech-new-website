import {
  Bot,
  Brush,
  Code2,
  Gauge,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "MaxxedTech Ltd",
  tagline: "Building smart digital solutions for businesses that mean business.",
  phoneDisplay: "+234 806 625 7117",
  phoneHref: "tel:+2348066257117",
  whatsappDisplay: "+234 912 712 5877",
  whatsappHref: "https://wa.me/2349127125877",
  whatsappMessageHref:
    "https://wa.me/2349127125877?text=Hello%2C%20I'm%20interested%20in%20your%20services",
  email: "contact@maxxedtech.com",
  emailHref: "mailto:contact@maxxedtech.com",
  facebook: "https://www.facebook.com/maxxedtech",
  instagram: "https://www.instagram.com/maxxedtech",
  tiktok: "https://www.tiktok.com/@maxxedtech",
  siteUrl: "https://maxxedtech.com",
  founded: "2024",
  copyright: "2026",
} as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    description:
      "Fast, conversion-focused websites built around your goals—not a recycled template.",
    benefit:
      "Launch with a polished digital presence that earns trust, attracts qualified leads, and stays easy to manage.",
    icon: Code2,
    features: [
      "Custom responsive design",
      "Conversion-focused pages",
      "SEO foundations",
      "Fast load speeds",
      "Analytics setup",
      "30-day launch support",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    shortTitle: "AI Solutions",
    description:
      "Practical AI tools that answer customers, reduce repetitive work, and keep your business moving.",
    benefit:
      "Give your team more time for high-value work while reliable automations handle routine tasks around the clock.",
    icon: Bot,
    features: [
      "Customer support chatbots",
      "Lead qualification",
      "Workflow automation",
      "Knowledge assistants",
      "AI integrations",
      "Performance monitoring",
    ],
  },
  {
    slug: "brand-identity",
    title: "Logo & Brand Identity Design",
    shortTitle: "Brand Identity",
    description:
      "Distinct brand systems that make your business clear, credible, and easy to remember.",
    benefit:
      "Show up consistently across every touchpoint with an identity built for long-term growth.",
    icon: Brush,
    features: [
      "Brand strategy",
      "Logo system",
      "Colour palette",
      "Typography system",
      "Social templates",
      "Brand guidelines",
    ],
  },
  {
    slug: "maintenance",
    title: "Website Maintenance & Support",
    shortTitle: "Maintenance",
    description:
      "Dependable technical care that keeps your website secure, updated, and performing well.",
    benefit:
      "Avoid costly downtime and get expert support without hiring a full internal tech team.",
    icon: Headphones,
    features: [
      "Security updates",
      "Content updates",
      "Performance checks",
      "Backups",
      "Issue resolution",
      "Monthly reporting",
    ],
  },
  {
    slug: "optimization",
    title: "Digital Optimization & Scaling",
    shortTitle: "Optimization",
    description:
      "Focused improvements that turn a working digital product into a stronger growth engine.",
    benefit:
      "Find friction, improve performance, and scale your systems with a clear technical roadmap.",
    icon: Gauge,
    features: [
      "Technical audits",
      "SEO improvements",
      "Conversion reviews",
      "Speed optimization",
      "Infrastructure planning",
      "Growth consulting",
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  category: "Web Development" | "Branding" | "AI Solutions";
  year: string;
  description: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  visual: string;
  url?: string;
  isUnderConstruction?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Sunny Concepts",
    category: "Web Development",
    year: "2026",
    description: "An enterprise showcase and digital platform for engineering and modern solutions.",
    tags: ["Next.js", "React", "Tailwind CSS", "Enterprise"],
    challenge: "Sunny Concepts needed a sleek, high-performing digital platform to showcase their multi-faceted engineering and tech innovations to partners.",
    solution: "Engineered a lightning-fast web platform featuring interactive showcases, clean navigation, and direct lead consultation funnels.",
    result: "Significantly enhanced commercial credibility, boosted organic lead capture, and delivered sub-second load times.",
    visual: "project-visual-a",
    url: "https://sunnyconcepts.vercel.app",
  },
  {
    id: 2,
    title: "Campuspreneur",
    category: "Web Development",
    year: "2026",
    description: "An innovative digital ecosystem and hub engineered for student entrepreneurs.",
    tags: ["React", "TypeScript", "Venture", "Platform"],
    challenge: "Connecting student founders, campus innovators, and resources across higher education institutions.",
    solution: "Building a unified student-entrepreneur network featuring project incubation tracks, mentorship directories, and peer commerce.",
    result: "System architecture and UI design finalized; platform currently in development preparing for campus-wide rollout.",
    visual: "project-visual-b",
    url: "https://campusprenuer.vercel.app",
    isUnderConstruction: true,
  },
  {
    id: 3,
    title: "YoursPay",
    category: "Web Development",
    year: "2025",
    description: "A borderless, next-generation digital payments and fintech platform.",
    tags: ["Fintech", "Payments", "Security", "Web3"],
    challenge: "Delivering a seamless checkout and merchant payment experience that reduces transaction friction and establishes high trust.",
    solution: "Designed and built an end-to-end payment onboarding portal, real-time checkout experience, and developer documentation suite.",
    result: "Cut user drop-off during onboarding and provided a resilient foundation for multi-currency settlement.",
    visual: "project-visual-c",
    url: "https://yourspay.xyz",
  },
  {
    id: 4,
    title: "Maxxed AI Chatbot & Assistant",
    category: "AI Solutions",
    year: "2026",
    description: "An intelligent autonomous customer support and lead automation AI system.",
    tags: ["AI Automation", "LLM", "Chatbot", "Customer Care"],
    challenge: "A rapidly scaling business needed round-the-clock customer support without expanding human support overhead.",
    solution: "Developed an intelligent, context-aware chatbot trained on business FAQs, product specs, and automated booking flows.",
    result: "Now resolves over 80% of routine inquiries autonomously with instant response times, handing complex sales leads directly to managers.",
    visual: "project-visual-f",
  },
  {
    id: 5,
    title: "GreenPath Solutions",
    category: "Branding",
    year: "2025",
    description: "A confident identity system and brand architecture for a climate-focused consultancy.",
    tags: ["Identity", "Guidelines", "Social", "Brand Strategy"],
    challenge: "GreenPath's visual identity no longer matched the scale or credibility of its international advisory work.",
    solution: "We created a flexible identity, messaging system, and practical digital toolkit for proposals, events, and web.",
    result: "The refreshed brand elevated market perception across stakeholder presentations and multi-national proposals.",
    visual: "project-visual-d",
  },
  {
    id: 6,
    title: "Northstar Foods",
    category: "Branding",
    year: "2025",
    description: "A bold consumer brand built for retail shelves, packaging, and digital storefronts.",
    tags: ["Brand Strategy", "Packaging", "Design"],
    challenge: "A growing consumer foods business needed one recognizable, premium brand across an expanding product portfolio.",
    solution: "We developed a scalable visual system with vibrant typography, packaging guidelines, and social design kits.",
    result: "Empowered the business to secure regional retail shelf placement with high shelf appeal and brand recognition.",
    visual: "project-visual-e",
  },
];

export const testimonials = [
  {
    quote: "Maxxed Tech transformed our online presence completely. Our website traffic and lead inquiries doubled within 60 days of launch.",
    name: "Chidi Okafor",
    role: "CEO, TradeBridge",
    initials: "CO",
  },
  {
    quote: "The AI chatbot they built handles 80% of our customer inquiries automatically. Best investment we made this year.",
    name: "Amaka Nwachukwu",
    role: "Founder, ShopEase",
    initials: "AN",
  },
  {
    quote: "Professional, fast, and they actually listened. The brand identity and web experience they created exceeded all expectations.",
    name: "Tunde Adeyemi",
    role: "CMO, GreenPath Solutions",
    initials: "TA",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-website-growth-2026",
    title: "Why Modern Businesses Need a Custom Website in 2026",
    category: "Web Dev",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    excerpt: "A website should do more than look credible. It should make finding, trusting, and choosing your business seamless.",
    content: [
      "In 2026, a website is no longer a simple digital business card—it is your business's 24/7 flagship location.",
      "Off-the-shelf templates frequently bundle unnecessary scripts that slow down mobile load times across diverse network environments.",
      "A custom-engineered website delivers blazing speed, tight SEO architecture, and conversion funnels tailored exactly to how your target buyers make decisions.",
    ],
  },
  {
    slug: "ai-customer-support-smes",
    title: "How AI Automation Is Changing Customer Support for SMEs",
    category: "AI",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    excerpt: "Practical AI can answer routine questions instantly while your human team stays focused on high-value business deals.",
    content: [
      "Customer expectations for instant replies have reached an all-time high across WhatsApp, social channels, and web chats.",
      "Deploying intelligent, domain-trained AI assistants allows businesses to resolve 80% of recurring inquiries at zero marginal labor cost.",
      "Automations pass only high-intent qualified leads to sales reps, dramatically improving closing rates.",
    ],
  },
  {
    slug: "website-costing-customers",
    title: "5 Signs Your Website Is Costing You Customers",
    category: "Business Tips",
    date: "Sep 5, 2026",
    readTime: "4 min read",
    excerpt: "Slow pages, unclear offers, and weak mobile experiences quietly turn interested visitors directly to competitors.",
    content: [
      "If your site takes more than 3 seconds to load on mobile, over 50% of visitors abandon the page before reading a single word.",
      "Unclear call-to-actions, missing instant chat integration, and dated visual styling signal a lack of technical reliability.",
      "Modernizing your digital storefront directly unlocks revenue that is currently being left on the table.",
    ],
  },
  {
    slug: "startup-brand-identity-budget",
    title: "How to Build a Startup Brand Identity on a Budget",
    category: "Branding",
    date: "Aug 29, 2026",
    readTime: "7 min read",
    excerpt: "Focus on a few strong, repeatable visual decisions before paying for an overly complex library of assets.",
    content: [
      "Great brand identity isn't about having 50 graphics—it's about consistency, distinct typography, and memorable color geometry.",
      "Establish a core logo lockup, high-contrast palette, and sharp typography hierarchy first.",
    ],
  },
  {
    slug: "complete-website-seo-guide",
    title: "The Complete Guide to High-Ranking Website SEO",
    category: "SEO",
    date: "Aug 21, 2026",
    readTime: "9 min read",
    excerpt: "Build a commanding search presence with solid technical foundations, clean structure, and content your buyers seek.",
    content: [
      "Search visibility is one of the highest ROI organic marketing channels available today.",
      "Clean metadata, schema markup, and mobile Core Web Vitals form the bedrock of Google rankings.",
    ],
  },
  {
    slug: "hiring-a-digital-agency",
    title: "What to Look for When Hiring a Modern Digital Agency",
    category: "Business Tips",
    date: "Aug 14, 2026",
    readTime: "6 min read",
    excerpt: "The right partner asks sharp questions, communicates clearly, and connects every technical deliverable to a measurable business outcome.",
    content: [
      "Always evaluate an agency on production track record, code craftsmanship, and post-launch support commitments.",
      "Avoid vendors who lock you into opaque proprietary builders—insist on modern, performant web standards.",
    ],
  },
];