/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, ChevronDown, Award, Users, ShieldAlert, Cpu, Layers } from 'lucide-react';
import { PageId, PricingPlan } from '../types';
import Scheduler from '../components/Scheduler';

interface PricingProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function PricingPage({ setCurrentTab }: PricingProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter Plan',
      description: 'Ideal for pre-revenue startups needing Greenfield AWS setup and automated deployments.',
      price: '$2,900',
      billingFrequency: '/ month',
      features: [
        'Complete Greenfield 100% Declarative Terraform setup',
        'Secure multi-subnet public/private AWS VPC partitioning',
        'Auto-scaling AWS ECS Fargate tasks deployment configuration',
        'Automated CI/CD pipelines (GitHub Actions deployment keys)',
        'Full DNS setup, CDN assets caching, HTTPS SSL provisioning',
        'Direct connection to AWS secrets manager variables'
      ],
      specs: {
        supportType: 'Dedicated Slack Workspace',
        responseTime: 'Next-business-day response pathways',
        deliveryTime: '5 Business Days Initial Onboarding',
        sla: 'Ongoing scheduled cloud project updates'
      }
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      description: 'Our most popular tier. Full-stack active cloud management, monitoring, and ongoing optimization.',
      price: '$4,900',
      billingFrequency: '/ month',
      features: [
        'Everything in the Starter Plan plus continuous active management',
        'Routine AWS bills diagnostics targeting cost optimizations',
        'Telemetry monitoring setup under structured alerts and notification paths',
        'Weekly deployment optimization guidelines, logs reviews, and database updates',
        'Monthly security audits with SOC2 framework tracking checklists',
        'Dedicated Senior Cloud Solution Architects on speed dial'
      ],
      specs: {
        supportType: 'Dedicated Slack Channel',
        responseTime: 'Escalation paths for priority items',
        deliveryTime: 'Immediate Active Continuous Operations',
        sla: 'Designed to reduce operational risk'
      },
      isHighlighted: true
    },
    {
      id: 'scale',
      name: 'Scale Plan',
      description: 'Designed for Series-A+ tech startups with multi-region scaling and advanced security compliance.',
      price: '$8,900',
      billingFrequency: '/ month',
      features: [
        'All elements in Growth + Dedicated Enterprise Scale architecture',
        'Kubernetes setup (EKS/Kubernetes migration execution and scaling)',
        'Advanced Multi-Region database clustering design (Aurora serverless)',
        'In-depth penetration security group reviews and active perimeter checks',
        'Rigorous SOC2 Type II, HIPAA, or ISO 27001 audit readiness prep',
        'Custom multi-account organization consolidation (AWS Control Tower Setup)'
      ],
      specs: {
        supportType: 'Dedicated Slack & Phone Escalation Pager',
        responseTime: 'Direct escalation pathways for P1 items',
        deliveryTime: 'Ongoing Multi-team Engineering Coordination',
        sla: 'High-availability architecture plans'
      }
    }
  ];

  const pricingFaqs = [
    {
      id: 'hidden-fees',
      question: 'Are there any hidden costs or setup fees?',
      answer: 'Zero setup fees. We map our partnerships entirely around transparent flat-rate monthly agreements. You will never receive unexpected invoices detailing "consulting hours" or "overtime configs." The price on this page is exactly what you pay.'
    },
    {
      id: 'lock-in',
      question: 'Do we have a long-term contractual obligation?',
      answer: 'Absolutely not. All of our plan agreements operate strictly on a month-to-month billing configuration. You are free to upgrade, downgrade, or cancel your partnership at any point with 30 days notice. All IaC code (Terraform states, actions YAMLs) is yours to keep in your private Git repositories.'
    },
    {
      id: 'how-do-we-pay',
      question: 'How are invoice collections handled?',
      answer: 'We collect payments securely at the start of your billing period via Credit Card, ACH, or wire transfers. Your company pays AWS directly for infrastructure cloud computing bills; DevShip invoices are solely for senior engineering services.'
    },
    {
      id: 'outgrow',
      question: 'What happens if we outgrow our current plan boundaries?',
      answer: 'Startups scale rapidly, and that is our goal. If your container cluster scales from single-endpoint setups to multi-account organizations running advanced AWS EKS networks, we simply coordinate a seamless transition to the Scale tier. Your architecture continues running cleanly without service hiccups.'
    }
  ];

  const triggerScrollToContact = () => {
    const section = document.getElementById('scheduler-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentTab('contact');
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* Page Title */}
      <section className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Flat Predictable Subscriptions</span>
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">Fair, Developer-First Pricing</h1>
        <p className="text-sm text-[#8888A0] leading-relaxed">
          Avoid the high-risk gamble of internal DevOps hiring cycles. Choose a flat predictable plan and get senior infrastructure engineering immediately.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative bg-[#111118] border rounded-xl p-6 flex flex-col justify-between shadow-2xl transition-all ${
                  plan.isHighlighted 
                    ? 'border-[#4F6EF7] shadow-indigo-600/[0.04] scale-100 lg:scale-[1.03] z-10' 
                    : 'border-[#1E1E2E] hover:border-zinc-700'
                }`}
              >
                {/* Highlight Badge */}
                {plan.isHighlighted && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#4F6EF7] text-white text-[10px] font-mono tracking-widest uppercase py-1 px-3.5 rounded-full font-bold">
                    RECOMMENDED STARTUP PLAN
                  </span>
                )}

                <div className="space-y-6">
                  {/* Title & Price */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-bold text-[#F8F8FF]">{plan.name}</h3>
                    <p className="text-xs text-[#8888A0] leading-relaxed min-h-[40px]">{plan.description}</p>
                    
                    <div className="flex items-baseline space-x-1.5 pt-4">
                      <span className="text-3xl md:text-4xl font-mono text-[#F8F8FF] font-bold">{plan.price}</span>
                      <span className="text-xs font-mono text-[#8888A0]">{plan.billingFrequency}</span>
                    </div>
                  </div>

                  {/* Support & Reliability Framework block */}
                  <div className="bg-[#0A0A0F] border border-[#1E1E2E]/80 rounded-lg p-3.5 space-y-2.5">
                    <span className="text-[10px] font-mono text-[#4F6EF7] uppercase tracking-wider block font-semibold">Support & Reliability Framework</span>
                    
                    <div className="space-y-1.5 text-[11px] font-mono text-[#8888A0]">
                      <div>
                        <span className="text-white block">Channels:</span>
                        <span>{plan.specs.supportType}</span>
                      </div>
                      <div className="border-t border-[#1E1E2E] pt-1.5 mt-1.5">
                        <span className="text-white block">Target Response:</span>
                        <span className="text-indigo-400 font-semibold">{plan.specs.responseTime}</span>
                      </div>
                      <div className="border-t border-[#1E1E2E] pt-1.5 mt-1.5">
                        <span className="text-white block">Service Standard:</span>
                        <span>{plan.specs.sla}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#1E1E2E]" />

                  {/* Feature Lists */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#8888A0] uppercase block font-semibold">Key Operations Included</span>
                    
                    <div className="space-y-2">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-[#8888A0]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug text-zinc-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    id={`btn-select-plan-${plan.id}`}
                    onClick={triggerScrollToContact}
                    className={`w-full text-center py-3 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      plan.isHighlighted 
                        ? 'bg-[#4F6EF7] hover:bg-[#4d69eb] text-white shadow-xl shadow-[#4F6EF7]/10' 
                        : 'bg-[#1E1E2E] hover:bg-[#222233] text-white border border-[#1E1E2E]'
                    }`}
                  >
                    Select {plan.name} Package
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing FAQs Accordion below prices */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block font-semibold">Underwriting details</span>
          <h2 className="text-2xl font-sans font-bold text-[#F8F8FF] tracking-tight">Billing & Agreement FAQ</h2>
        </div>

        <div className="space-y-3">
          {pricingFaqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-[#111118] border border-[#1E1E2E] rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  id={`pricing-faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 flex items-center justify-between text-xs md:text-sm font-sans font-semibold text-[#F8F8FF] hover:bg-[#1E1E2E]/30 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#8888A0] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="bg-[#0A0A0F] p-4 border-t border-[#1E1E2E] text-xs md:text-sm text-[#8888A0] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Scheduler wrapper */}
      <section id="scheduler-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest block font-semibold">Secure Your Time Slot</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">Schedule Your Account Review</h2>
          <p className="text-xs text-[#8888A0]">Ready to deploy? Pick a business day to schedule a secure screen mapping review of waste areas.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Scheduler />
        </div>
      </section>

    </div>
  );
}
