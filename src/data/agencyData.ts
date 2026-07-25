import { ServiceItem, PortfolioItem, TestimonialItem, ProcessStep, FAQItem, CalculatorOption } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    shortDesc: 'Bespoke, lightning-fast web applications built with modern frameworks like React and Next.js.',
    fullDesc: 'We architect and build tailored web solutions engineered for maximum performance, accessibility, and high search engine rankings. No clunky page builders—just clean, modular, scalable code.',
    iconName: 'Code',
    features: [
      'Custom React & Next.js Architecture',
      'Fully Responsive & Mobile-Optimized',
      'Headless CMS & API Integrations',
      'Sub-Second Page Load Speeds'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    startingPrice: '$1,999',
    popular: true
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Prototyping',
    shortDesc: 'User-centered digital experiences designed to engage visitors and convert clicks into long-term clients.',
    fullDesc: 'Our design team creates intuitive, visually stunning interface designs backed by behavioral user research, wireframing, interactive prototypes, and custom design systems.',
    iconName: 'Layout',
    features: [
      'Figma Interactive Prototypes',
      'Conversion-Rate Optimized Layouts',
      'Custom Design Systems & Style Guides',
      'User Journey & Wireframe Mapping'
    ],
    techStack: ['Figma', 'Design Systems', 'UX Wireframing', 'Prototyping'],
    startingPrice: '$1,499'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    shortDesc: 'High-converting online storefronts engineered to maximize sales, order value, and repeat buyers.',
    fullDesc: 'From custom Shopify themes to headless e-commerce platforms, we build seamless checkout experiences with instant search, secure payment gateways, and inventory management.',
    iconName: 'ShoppingBag',
    features: [
      'Shopify & Custom Storefront Development',
      'Secure Multi-Currency Payment Gateways',
      'Inventory & ERP System Sync',
      'Optimized Checkout Flow'
    ],
    techStack: ['Shopify', 'Stripe', 'Next.js Commerce', 'Tailwind', 'GraphQL'],
    startingPrice: '$2,499',
    popular: true
  },
  {
    id: 'saas-apps',
    title: 'SaaS & Web Applications',
    shortDesc: 'Complex web platforms, dashboards, and SaaS products built for growth and enterprise stability.',
    fullDesc: 'We turn ambitious business concepts into scalable SaaS applications. Featuring secure user authentication, multi-tenant databases, analytics dashboards, and automated workflows.',
    iconName: 'Cpu',
    features: [
      'Secure User Auth & Role Management',
      'Real-time Analytics Dashboards',
      'REST & GraphQL API Engineering',
      'Cloud Deployment & Microservices'
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Firebase'],
    startingPrice: '$3,999'
  },
  {
    id: 'seo-speed',
    title: 'Speed & SEO Optimization',
    shortDesc: 'Boost search rankings and retain visitors with 90+ Core Web Vitals scores and technical SEO.',
    fullDesc: 'A slow website directly hurts your revenue. We audit, refactor, and tune your existing codebase to achieve perfect PageSpeed insights scores and dominant SEO positioning.',
    iconName: 'Zap',
    features: [
      '100/100 Core Web Vitals Optimization',
      'Technical SEO & Schema Markup',
      'Image & Script Compression',
      'Lighthouse Audit Fixes'
    ],
    techStack: ['Core Web Vitals', 'Google Search Console', 'Lighthouse', 'CDN Setup'],
    startingPrice: '$899'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Care Plans',
    shortDesc: '24/7 technical monitoring, security updates, cloud backups, and dedicated monthly development hours.',
    fullDesc: 'Focus on scaling your business while our engineering team manages updates, downtime monitoring, security patches, content updates, and continuous improvements.',
    iconName: 'ShieldCheck',
    features: [
      '24/7 Server Uptime Monitoring',
      'Automated Daily Cloud Backups',
      'Priority Bug Fixes & Technical Support',
      'Monthly Security Audits & Updates'
    ],
    techStack: ['Cloudflare', 'AWS', 'Vercel', 'GitOps', 'Sentry'],
    startingPrice: '$299/mo'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'nexus-analytics',
    title: 'Nexus Cloud Analytics Dashboard',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    client: 'Nexus Data Inc.',
    description: 'A real-time financial analytics portal handling millions of daily events with zero latency and high-density custom chart visualizers.',
    results: '+240% User Engagement, 0.4s Page Load',
    image: '/src/assets/images/hero_dashboard_mockup_1785016689343.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Node.js'],
    liveUrl: 'https://example.com/nexus'
  },
  {
    id: 'luxe-storefront',
    title: 'LuxeLiving E-commerce Platform',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    client: 'LuxeLiving Home',
    description: 'Custom luxury furniture store with 3D product previews, instant faceted filtering, and optimized one-click checkout.',
    results: '3.2x Revenue Increase, 48% Cart Abandonment Drop',
    image: '/src/assets/images/portfolio_ecommerce_showcase_1785016703010.jpg',
    tags: ['Next.js', 'Shopify API', 'Tailwind v4', 'Stripe', 'Framer Motion'],
    liveUrl: 'https://example.com/luxeliving'
  },
  {
    id: 'apex-fintech',
    title: 'Apex Capital Web Portal',
    category: 'corporate',
    categoryLabel: 'Corporate / Fintech',
    client: 'Apex Global Investments',
    description: 'High-security institutional investor platform featuring live portfolio tracking, document vaulting, and compliance workflows.',
    results: '100% Security SLA, $50M+ Inquiries Managed',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'Express', 'Auth0'],
    liveUrl: 'https://example.com/apex'
  },
  {
    id: 'pulse-health',
    title: 'Pulse Telehealth Mobile & Web App',
    category: 'web-apps',
    categoryLabel: 'Web Application',
    client: 'Pulse Health Systems',
    description: 'HIPAA-compliant doctor consultation portal with automated scheduling, video consultations, and digital prescriptions.',
    results: '50k+ Active Monthly Patients, 4.9/5 Rating',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'WebRTC', 'Tailwind', 'PostgreSQL', 'Node.js'],
    liveUrl: 'https://example.com/pulse'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Chief Marketing Officer',
    company: 'Vanguard Retail',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Tri Web Solution completely transformed our online store. Our conversion rate jumped by 62% in the first month after launch! Their attention to speed and clean UI design is second to none.',
    rating: 5,
    metric: '+62% Conversions'
  },
  {
    id: '2',
    name: 'David Vance',
    role: 'Founder & CEO',
    company: 'SaaSFlow Technologies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Working with Tri Web Solution felt like having an elite in-house engineering team. They delivered our complex React dashboard 2 weeks ahead of schedule and under budget.',
    rating: 5,
    metric: '2 Weeks Ahead of Schedule'
  },
  {
    id: '3',
    name: 'Michael Chang',
    role: 'Head of Product',
    company: 'OmniHealth Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'The team at Tri Web Solution is top-tier. They re-architected our legacy platform into a lightning-fast web app that seamlessly handles tens of thousands of active users.',
    rating: 5,
    metric: '99.99% Server Uptime'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Lightning Performance & SEO',
    description: 'We write clean, modern code optimized for sub-second page loads and top search engine rankings.',
    icon: 'Zap'
  },
  {
    title: 'Custom Tailored Architecture',
    description: 'No generic page builders or bloated plugins. Every line of code is crafted specifically for your business goals.',
    icon: 'Code2'
  },
  {
    title: 'Agile & Transparent Communication',
    description: 'Weekly video check-ins, dedicated Slack channel access, and real-time staging previews so you are never in the dark.',
    icon: 'MessageSquare'
  },
  {
    title: 'Conversion-Focused UI/UX',
    description: 'We don’t just build pretty sites; we design strategic user journeys engineered to maximize signups and sales.',
    icon: 'TrendingUp'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Page Load Speed',
    triWeb: '< 0.8 Seconds (Sub-second)',
    others: '3.5 - 6.0 Seconds (Bloated plugins)'
  },
  {
    feature: 'Code Quality',
    triWeb: '100% Custom React / Next.js',
    others: 'Generic WordPress / Wix templates'
  },
  {
    feature: 'Core Web Vitals',
    triWeb: '95+ Score Guaranteed',
    others: 'Often red/orange warning state'
  },
  {
    feature: 'Security & Maintenance',
    triWeb: 'Proactive 24/7 Cloud Monitoring',
    others: 'Reactive only after downtime'
  },
  {
    feature: 'Project Ownership',
    triWeb: '100% IP & Source Code Ownership',
    others: 'Locked into proprietary builders'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business objectives, target audience, competitors, and technical requirements to build a clear project blueprint.',
    deliverables: ['Strategy Roadmap', 'Tech Stack Selection', 'Sitemap & Wireframes'],
    duration: 'Week 1'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Our design team crafts intuitive, responsive interfaces with custom typography, color harmony, and conversion-focused layouts.',
    deliverables: ['Figma Design System', 'Interactive Prototypes', 'Mobile & Desktop Specs'],
    duration: 'Week 2'
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'We transform designs into clean, production-grade React/Next.js code, integrating APIs, databases, and motion transitions.',
    deliverables: ['Staging Preview Link', 'API Integrations', 'QA & Cross-Browser Testing'],
    duration: 'Weeks 3-4'
  },
  {
    step: '04',
    title: 'Launch & Growth',
    description: 'After rigorous speed, SEO, and security audits, we deploy your platform to high-speed cloud edge servers and provide ongoing support.',
    deliverables: ['Domain & CDN Deployment', 'Analytics Setup', 'Source Code Transfer'],
    duration: 'Launch Day'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical web development project take?',
    answer: 'Most standard corporate websites take 2-4 weeks from initial kickoff to launch. Complex web applications, SaaS dashboards, or large e-commerce platforms typically take 4-8 weeks depending on custom feature requirements.',
    category: 'process'
  },
  {
    id: 'faq-2',
    question: 'Do you use WordPress/Wix, or custom code?',
    answer: 'We specialize in modern custom web development using React, Next.js, TypeScript, and Tailwind CSS. This ensures maximum speed, zero bloated code, superior SEO, and bulletproof security. However, if you require a user-friendly Content Management System (CMS), we integrate headless solutions like Sanity, Strapi, or Contentful.',
    category: 'tech'
  },
  {
    id: 'faq-3',
    question: 'What is your pricing structure?',
    answer: 'Our custom website projects start at $1,999, depending on complexity, page count, and integration requirements. We provide fixed-price transparent quotes with no hidden fees, as well as flexible milestone payment options.',
    category: 'pricing'
  },
  {
    id: 'faq-4',
    question: 'Will my website be mobile-friendly and fast?',
    answer: 'Absolutely. Every website we build is 100% responsive across smartphones, tablets, laptops, and ultra-wide desktops. We guarantee high Core Web Vitals scores and sub-second loading speeds out of the box.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Do I own the website code and intellectual property after launch?',
    answer: 'Yes! Upon project completion and final invoice payment, you own 100% of the source code, design assets, and intellectual property. We do not lock you into proprietary hosting platform traps.',
    category: 'general'
  },
  {
    id: 'faq-6',
    question: 'Do you offer ongoing maintenance and technical support?',
    answer: 'Yes, we offer monthly maintenance and growth plans starting at $299/mo. This includes uptime monitoring, cloud backups, security patches, content updates, and dedicated monthly development time.',
    category: 'pricing'
  }
];

export const CALCULATOR_TYPES: CalculatorOption[] = [
  { id: 'landing', name: 'Landing Page / One-Pager', price: 1499, description: 'Single high-converting landing page for products or leads.' },
  { id: 'business', name: 'Multi-Page Business Site', price: 2499, description: '5-10 page corporate website with service pages & blog.' },
  { id: 'ecommerce', name: 'E-commerce Online Store', price: 3499, description: 'Full storefront with cart, checkout, payment gateway, & product management.' },
  { id: 'saas', name: 'SaaS / Custom Web App', price: 4999, description: 'Web platform with user accounts, database, auth & API backends.' }
];

export const CALCULATOR_ADDONS: CalculatorOption[] = [
  { id: 'uiux', name: 'Custom Figma UI/UX Design', price: 799, description: 'Tailored pixel-perfect Figma designs before coding.' },
  { id: 'cms', name: 'Headless CMS Integration', price: 599, description: 'Easy content editing dashboard (Sanity/Strapi).' },
  { id: 'seo', name: 'Advanced Technical SEO Package', price: 499, description: 'Schema markup, meta optimization, & keyword structure.' },
  { id: 'speed', name: 'Core Web Vitals Speed Tuning', price: 399, description: 'Guarantee 95+ PageSpeed performance scores.' },
  { id: 'auth', name: 'User Auth & Portal', price: 899, description: 'Login, registration, password resets, & user dashboards.' },
  { id: 'payments', name: 'Stripe / PayPal Integration', price: 499, description: 'Custom checkout flow and subscription billing.' }
];
