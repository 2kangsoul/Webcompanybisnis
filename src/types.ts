export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  techStack: string[];
  startingPrice: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'ecommerce' | 'saas' | 'web-apps' | 'corporate';
  categoryLabel: string;
  client: string;
  description: string;
  results: string;
  image: string;
  tags: string[];
  liveUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  metric: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'tech';
}

export interface CalculatorOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDetails: string;
  selectedAddons: string[];
}
