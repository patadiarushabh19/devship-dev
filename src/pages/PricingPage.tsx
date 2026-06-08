/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Database, 
  Network, 
  ShieldAlert, 
  Zap, 
  FileText, 
  ClipboardList, 
  ChevronDown, 
  ArrowRight, 
  Layers, 
  Activity, 
  HelpCircle 
} from 'lucide-react';
import { PageId } from '../types';
import Scheduler from '../components/Scheduler';

interface PricingProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function PricingPage({ setCurrentTab }: PricingProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  const deliverables = [
    {
      title: 'Asset Inventory',
      desc: 'Automatically discover servers, applications, databases, services, storage systems, and network components.',
      icon: Database,
      tag: 'INVENTORY_DISCOVERY'
    },
    {
      title: 'Dependency Mapping',
      desc: 'Visualize how applications, databases, services, and infrastructure components interact.',
      icon: Network,
      tag: 'TOPOLOGY_MAPPING'
    },
    {
      title: 'Risk Assessment',
      desc: 'Identify hidden risks, single points of failure, unsupported systems, security concerns, and migration blockers.',
      icon: ShieldAlert,
      tag: 'THREAT_MODELING'
    },
    {
      title: 'Optimization Opportunities',
      desc: 'Discover underutilized resources, consolidation opportunities, cost reduction potential, and infrastructure improvements.',
      icon: Zap,
      tag: 'COST_EFFICIENCY'
    },
    {
      title: 'Migration Readiness Report',
      desc: 'Understand which workloads are ready for migration and which require remediation.',
      icon: ClipboardList,
      tag: 'MIGRATION_TELEMETRY'
    },
    {
      title: 'Executive Summary',
      desc: 'Receive a business-friendly report with actionable recommendations and strategic insights.',
      icon: FileText,
      tag: 'STRATEGIC_OUTCOMES'
    }
  ];

  const assessmentFaqs = [
    {
      id: 'how-long',
      question: 'How long does an initial discovery engagement require?',
      answer: 'Typically, discovery and scanning are fully operational within 48 hours of connection credentials setup, with the final comprehensive reports delivered within 10 to 14 business days.'
    },
    {
      id: 'credentials-security',
      question: 'What access level is required for the infrastructure audit?',
      answer: 'We operate strictly under Read-Only boundaries. We integrate using standardized cross-account ReadOnly IAM roles, VPC metadata scanners, and standard audit parameters. We build our analysis entirely without writing or deleting any state or resources.'
    },
    {
      id: 'custom-footprint',
      question: 'How is the final structural engagement priced?',
      answer: 'We do not enforce standard startup tiers. Following our initial assessment and discovery review, we present a transparent, environment-scaled engagement proposal tailored exactly to your cloud footprint size, service density, and ongoing operational requirements.'
    },
    {
      id: 'nda-requirements',
      question: 'Do you provide pre-signed NDAs prior to the initial discovery call?',
      answer: 'Yes, this is standard protocol. We respect the confidentiality of proprietary system maps. You can download and request a mutual pre-signed Non-Disclosure Agreement directly prior to the initial review.'
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
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-12">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">
          Infrastructure Assessment & Discovery Engagement
        </span>
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">
          Understand Your Infrastructure Before Making Critical Decisions
        </h1>
        <p className="text-sm md:text-base text-[#8888A0] leading-relaxed max-w-2xl mx-auto">
          Gain complete visibility into your infrastructure, dependencies, risks, optimization opportunities, and migration readiness before investing in modernization, cloud adoption, consolidation, or migration initiatives.
        </p>
      </section>

      {/* Deliverables Section: Premium Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0F] border border-indigo-500/10 flex items-center justify-center text-[#4F6EF7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-medium text-[#8888A0] uppercase tracking-wider bg-[#0a0a0f] px-2 py-0.5 rounded border border-[#1e1e2e]">
                      {item.tag}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-sans font-bold text-[#F8F8FF] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8888A0] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Positioning Block */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F6EF7]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono text-[#4F6EF7] uppercase tracking-wider font-semibold block">
              ENGAGEMENT PRINCIPLES
            </span>
            <h2 className="text-xl md:text-2xl font-sans font-bold text-[#F8F8FF] tracking-tight">
              Every Infrastructure Environment Is Unique
            </h2>
            <p className="text-xs md:text-sm text-[#8888A0] leading-relaxed">
              Infrastructure complexity varies significantly across organizations. Our team evaluates infrastructure size, architecture complexity, technology stack, operational requirements, and business objectives before recommending the most suitable engagement model.
            </p>
            <p className="text-xs md:text-sm text-[#8888A0] leading-relaxed">
              This ensures recommendations remain accurate, relevant, and aligned with business outcomes. We do not apply rigid cookie-cutter packages to mature network setups.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest block font-semibold">
            Operational Boundaries
          </span>
          <h2 className="text-2xl font-sans font-bold text-[#F8F8FF] tracking-tight">
            Engagement Details & Protocols
          </h2>
        </div>

        <div className="space-y-3">
          {assessmentFaqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-[#111118] border border-[#1E1E2E] rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  id={`assessment-faq-toggle-${faq.id}`}
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

      {/* Primary CTA Section & Scheduler */}
      <section id="scheduler-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest block font-semibold">
              Primary Engagement Channel
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">
              Schedule an Infrastructure Discovery Session
            </h2>
            <p className="text-xs md:text-sm text-[#8888A0] leading-relaxed">
              Speak with an infrastructure specialist to discuss your environment, challenges, and modernization goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              id="btn-discovery-call"
              onClick={() => {
                const form = document.getElementById('discovery-scheduler');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-semibold px-6 py-3 rounded-lg flex items-center space-x-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/10"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button 
              id="btn-request-assessment"
              onClick={() => {
                const s = document.getElementById('contact-form-anchor');
                if (s) {
                  s.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setCurrentTab('contact');
                }
              }}
              className="bg-[#1E1E2E] hover:bg-[#252538] text-white text-xs font-semibold px-6 py-3 rounded-lg border border-[#1E1E2E] transition-colors cursor-pointer"
            >
              Request Assessment
            </button>
          </div>
        </div>

        {/* Calendar Scheduler Card */}
        <div id="discovery-scheduler" className="max-w-4xl mx-auto pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-mono text-zinc-500 block">SUPPORTED INTEGRATION</span>
            <h3 className="text-lg font-sans font-bold text-[#F8F8FF]">Select a Standard Review Slot</h3>
          </div>
          <Scheduler />
        </div>
      </section>

    </div>
  );
}
