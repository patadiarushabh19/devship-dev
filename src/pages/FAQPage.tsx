/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle, Shield, ArrowRight, CornerDownRight } from 'lucide-react';
import { PageId } from '../types';

interface FAQProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function FAQPage({ setCurrentTab }: FAQProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  const categories = [
    {
      name: 'Engagement & Operations',
      items: [
        {
          id: 'why-not-hire',
          question: 'Why should we partner with Atlas instead of hiring internally?',
          answer: 'Hiring a senior cloud or systems engineer burns $180K+ in salary, months of recruiter attention, and equity dilution. More importantly, once your core pipelines and server configurations are mapped, early-stage systems maintenance needs very little active weekly overhead. With Atlas, you secure senior solutions architects onto your design objectives instantly without the financial payroll bloat.'
        },
        {
          id: 'outgrow-boundaries',
          question: 'How is the discovery engagement scoped?',
          answer: 'Our discovery engagements align directly with your overall footprint of physical servers, VM hypervisors, database endpoints, or active container subnets. We establish a clear fixed-scope discovery proposal suited to your unique bare metal or multi-cloud topology.'
        },
        {
          id: 'cancel-anytime',
          question: 'What happens to the discovery output after the engagement?',
          answer: 'Complete ownership. All custom Terraform templates, automated pipeline scripts, system configuration files, and deep topology maps are validated and handed over directly inside your private Git systems or dashboards with zero provider lock-ins.'
        }
      ]
    },
    {
      name: 'Security & Access Autonomy',
      items: [
        {
          id: 'aws-account-ownership',
          question: 'Do we keep 100% root ownership of our credentials and assets?',
          answer: 'Absolutely. We do not host resources inside proprietary Atlas accounts. All databases, bare metal servers, and virtual nodes reside inside your own account or data center framework. Access is limited to Least Privilege and can be retired cleanly at any point.'
        },
        {
          id: 'nda-disclosures',
          question: 'Can our team sign a mutual NDA prior to discussing systems?',
          answer: 'Yes, this is standard enterprise protocol. All of our structural reviews run under complete security coverage. Click our scheduler to choose a time, and a mutual pre-signed Non-Disclosure Agreement will be sent to your inbox immediately.'
        },
        {
          id: 'compliance-readiness',
          question: 'Are the assessments and blueprints ready for HIPAA or SOC2 reviews?',
          answer: 'Yes. Every assessment we conduct aligns with mature standard frameworks, specifically including CIS Benchmarks, SOC2 Type II compliance regulations, and HIPAA security guidelines. We verify logging trails, subnet segregation boundaries, and authentication posture.'
        }
      ]
    },
    {
      name: 'Technology Support Scope',
      items: [
        {
          id: 'already-existing-aws',
          question: 'What if we already operate complex hybrid or hardware structures?',
          answer: 'We do not run destructive configurations. We use standard Read-Only discovery protocols to map resource drifts, locate compliance leaks, and trace security vulnerabilities with zero impact on live services.'
        },
        {
          id: 'k8s-kubernetes',
          question: 'Do you support complex Kubernetes clustering and modern hypervisors?',
          answer: 'Yes. Our advisors support physical hypervisors like VMware or Proxmox, alongside Docker, Kubernetes clusters, legacy VPS systems, and bare metal hosts. We match resources perfectly to your operational constraints.'
        },
        {
          id: 'terraform-iac',
          question: 'What tools do you support in mapping declarative assets?',
          answer: 'We write, manage, and audit infrastructure declarations using standard Terraform. Terraform is the industry-standard multi-cloud declarative engine, ensuring you avoid proprietary vendor lock-ins.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Search Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3 pt-12">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Clearing Obstacles</span>
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">Technical Operations FAQ</h1>
        <p className="text-sm text-[#8888A0] leading-relaxed">
          Comprehensive, direct technical responses assessing our engagement models, cloud access boundaries, custom Terraform delivery, and continuous operations support.
        </p>
      </section>

      {/* Accordion Map */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-4">
            <h3 className="text-xs font-mono text-[#F8F8FF] uppercase tracking-widest pb-2 border-b border-[#1E1E2E] font-bold">
              {cat.name}
            </h3>

            <div className="space-y-3">
              {cat.items.map((item) => {
                const isOpen = activeFaq === item.id;
                return (
                  <div 
                    key={item.id}
                    className="bg-[#111118] border border-[#1E1E2E] rounded-lg overflow-hidden transition-all duration-200"
                  >
                    <button
                      id={`faq-page-toggle-${item.id}`}
                      onClick={() => toggleFaq(item.id)}
                      className="w-full text-left p-4.5 flex items-center justify-between text-xs md:text-sm font-sans font-semibold text-[#F8F8FF] hover:bg-[#1E1E2E]/30 transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`w-4.5 h-4.5 text-[#8888A0] transition-transform duration-205 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="bg-[#0A0A0F] p-4.5 border-t border-[#1E1E2E] text-xs md:text-sm text-[#8888A0] leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </section>

      {/* NDA Banner Call */}
      <section className="max-w-4xl mx-auto px-4 select-none">
        <div className="bg-[#111118]/50 border border-[#1E1E2E] rounded-xl p-8.5 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#4F6EF7] mx-auto" />
          <h4 className="text-sm font-sans font-bold text-[#F8F8FF]">Have a highly specific cloud architectural query not answered here?</h4>
          <p className="text-xs text-[#8888A0] leading-relaxed max-w-xl mx-auto">
            Our Senior Architects are available for secure screen reviews to assess custom workloads, database metrics, and compliance logs directly.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                const s = document.getElementById('scheduler-section');
                if (s) s.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-semibold px-5  py-2.5 rounded transition-all cursor-pointer inline-flex items-center space-x-1"
            >
              <span>Schedule Free Tech Consulting Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
