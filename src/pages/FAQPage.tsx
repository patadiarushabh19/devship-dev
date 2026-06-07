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
      name: 'Procurement & Operations',
      items: [
        {
          id: 'why-not-hire',
          question: 'Why should we partner with DevShip instead of hiring internally?',
          answer: 'Hiring a senior cloud engineer burns $180K+ in salary, months of recruiter attention, and equity dilution. More importantly, once your core pipelines and VPC configurations are code-declared, early-stage maintenance needs under 10 hours of active monthly review. With DevShip, you pay for elite outcomes as-a-service without the financial deadweight.'
        },
        {
          id: 'outgrow-boundaries',
          question: 'What occurs if we outgrow our current plan boundaries?',
          answer: 'That is exactly the goal of high-growth tech startups. If your traffic spikes or engineering coordinates multi-region AWS configurations, we transition your stack from our Starter or Growth plans to our Scale Plan using workflows designed to minimize service disruptions or database downtime.'
        },
        {
          id: 'cancel-anytime',
          question: 'What happens if we decide to cancel our monthly partnership?',
          answer: 'All of our ongoing active agreements are on a month-to-month calendar basis. If you cancel, all of our custom Terraform modules, actions YAMLs, build dockerfiles, and secrets configurations remain checked into your private Git repositories. You retain complete operational ownership of the native setup.'
        }
      ]
    },
    {
      name: 'Security & Access Autonomy',
      items: [
        {
          id: 'aws-account-ownership',
          question: 'Do we keep 100% root ownership of our AWS accounts?',
          answer: 'Absolutely. We do not host resources inside proprietary DevShip cloud accounts. All databases, servers, and networks of your setup reside inside your own AWS billing framework. You provide access permissions tightly controlled via secure IAM cross-account trust roles that can be deleted with a single click in your AWS console.'
        },
        {
          id: 'nda-disclosures',
          question: 'Can our team sign a mutual NDA prior to discussing cloud secrets?',
          answer: 'Yes, this is standard engineering protocol. All of our structural audits run under complete security coverage. Click our scheduler to set up a time, and a mutual pre-signed Non-Disclosure Agreement will automatically forward to your developer inbox.'
        },
        {
          id: 'compliance-readiness',
          question: 'Is the infrastructure designed by DevShip ready for HIPAA or SOC2 reviews?',
          answer: 'Yes. Every setup we construct aligns with mature security standard frameworks, specifically including CIS Benchmarks, SOC2 Type II controls, and HIPAA compliance specifications. We mount AWS CloudTrail audits, S3 encryption boundaries, and strict security groups with full documentation.'
        }
      ]
    },
    {
      name: 'Technology Support Scope',
      items: [
        {
          id: 'already-existing-aws',
          question: 'What if we already run an active, complex AWS cloud setup?',
          answer: 'We do not run destructive configurations. We use AWS Read-Only audit permissions to verify configuration drifts, pinpoint billing waste leaks, and trace security anomalies. We then coordinate upgrades in parallel staging branches with workflows designed to minimize disruptions to live operations.'
        },
        {
          id: 'k8s-kubernetes',
          question: 'Do you configure and support complex Kubernetes EKS environments?',
          answer: 'Yes. Our senior solutions architects are CKAs. However, for most early-stage and seed startups, we find configuring EKS container overhead represents high capital inefficiency. We often design streamlined serverless ECS Fargate patterns, reducing operations complexity by 90% while achieving identical scaling.'
        },
        {
          id: 'terraform-iac',
          question: 'Do you support cloud modules written in CloudFormation or Pulumi?',
          answer: 'While AWS natively operates CloudFormation, we write, manage, and deliver 100% of our infrastructure using Terraform. Terraform is the industry-standard multi-cloud declarative engine, ensuring you avoid AWS proprietary lock-ins.'
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
          Comprehensive, direct technical responses assessing our pricing models, cloud access boundaries, custom Terraform delivery, and continuous operations support.
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
