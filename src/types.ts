/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 
  | 'home' 
  | 'services' 
  | 'pricing' 
  | 'about' 
  | 'blog' 
  | 'contact' 
  | 'faq' 
  | 'privacy' 
  | 'terms';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  outcome: string;
  timeline: string;
  deliverables: string[];
  pricingRange: string;
  detailedOverview: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billingFrequency: string;
  features: string[];
  specs: {
    supportType: string;
    responseTime: string;
    deliveryTime: string;
    sla: string;
  };
  isHighlighted?: boolean;
}

export interface ChecklistItem {
  id: string;
  label: string;
  impact: string;
  potentialSavings: number; // in USD per month
  checked: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
