/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Server, Zap, Compass, CheckCircle2, ArrowRight, ShieldCheck, Database, HardHat } from 'lucide-react';
import { PageId } from '../types';

interface ServicesProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function Services({ setCurrentTab }: ServicesProps) {
  
  const servicesList = [
    {
      id: 'managed',
      icon: Server,
      name: 'Managed AWS Infrastructure Support',
      tagline: 'Your dedicated DevOps partner. Active incident monitoring and operations.',
      overview: 'We support the daily operational maintenance of your AWS cloud stack. We configure routine upgrades, database snapshots, credential reviews, log aggregations, and cost visibility controls. We act as an integrated arm of your engineering team, responding based on documented runbooks and clear escalation paths so your developers spend their energy shipping features.',
      outcome: 'Resilient and stable cluster availability, continuous cost visibility and active optimization of underutilized instances, and structured automation matching team processes.',
      timeline: 'Continuous. Partnership initiates with audit integration in 48 hours.',
      pricing: 'Starts at $4,900 / month flat. Zero hidden extras.',
      deliverables: [
        'Alerting and notification telemetry configurations with structured escalation paths',
        'Continuous AWS Cost Explorer analysis to identify and terminate idle resources',
        'Declarative Terraform module drift checks and monthly state updates',
        'VPC Security Group updates & IAM permissions auditing and role refinement',
        'Daily encrypted databases snapshot policy configuration and pass verification',
        'Weekly logs review across CloudTrail, CloudWatch & Container logs',
        'Weekly sync call with Senior Cloud Solution Architects'
      ],
      color: 'border-indigo-500/20 text-[#4F6EF7]'
    },
    {
      id: 'migration',
      icon: Compass,
      name: 'Cloud Migration & Database Modernization',
      tagline: 'Migrate layout structures from Heroku, Vercel, or raw EC2 pools with minimized disruption.',
      overview: 'Heroku and Vercel are ideal for early mockups, but fast-growing startups quickly discover memory limits and high add-on markup fees. We safely migrate your databases, backend container workloads, caches, and CDN assets to highly optimized isolated AWS subnets using standard Docker container definitions. We design the target structure and test deployments in staging beforehand to support a highly stable, smooth transition.',
      outcome: 'Compute pricing reduced significantly, modular staging replication, and structural control of your own AWS VPC limits.',
      timeline: 'Fully completed and transitioned in 14 to 21 Business Days.',
      pricing: 'Fixed project pricing based on container sizes. Usually $9,500 – $14,000.',
      deliverables: [
        'Complete Dockerization of runtime services (Multi-stage, optimized builds)',
        'Transition database assets securely using isolated RDS Aurora replicas',
        'Setup S3 assets migration with private VPC route endpoints (NAT cost reduction)',
        'Establish automated multi-branch testing pipelines (GitHub staging environments)',
        'Full DNS transition matching ACM HTTPS certificates and Route 53 aliases',
        'Complete documentation handover detailing secret parameters management',
        '2 weeks post-migration DevOps support and performance metric profiling'
      ],
      color: 'border-blue-500/20 text-blue-400'
    },
    {
      id: 'greenfield',
      icon: Zap,
      name: 'Greenfield AWS Setup (SOC2/Compliance Ready)',
      tagline: 'Production-ready, highly secure enterprise AWS cloud setup in 5 Days.',
      overview: 'Launching a new SaaS or healthtech service? Avoid starting with insecure defaults. We provision an enterprise-ready AWS account structure from scratch using dry Declarative Terraform. We configure isolated public/private VPC partitions, KMS envelope encryption, strict IAM roles mapping, cloud monitoring logs, and continuous deploy automations. The entire template aligns with modern security audits like SOC2 Type II, HIPAA, or ISO 27001.',
      outcome: 'Rigorous CIS Benchmark compliance-ready infrastructure operational in days. Solid foundation for investor technical due-diligence.',
      timeline: 'Completed and online in 5 Business Days.',
      pricing: 'Flat fixed one-time onboarding of $7,500.',
      deliverables: [
        'Isolated Multi-VPC Architecture with private database subnets',
        'Automated continuous deployment (GitHub Actions -> AWS ECS Fargate)',
        'Strict IAM Least-Privilege configuration (Eliminating all root-level keys access)',
        'WAF / AWS Shield perimeter security configuration defending SQL injections',
        'AWS Secret Manager configs integrating environment files seamlessly',
        'CloudTrail secure audit logs forwarded directly to encrypted S3 logs pools',
        '100% complete Terraform states code directory pushed to your private Git repositories'
      ],
      color: 'border-emerald-500/20 text-emerald-400'
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
    <div className="space-y-20 pb-20">
      
      {/* Intro Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-12">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Full Capabilities Map</span>
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">Our Core DevOps Deliverables</h1>
        <p className="text-sm text-[#8888A0] leading-relaxed">
          No generic advice. We write operational code, design declarative Terraform structures, and assume absolute responsibility for cloud health of high-growth tech startups.
        </p>
      </section>

      {/* Services List Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesList.map((srv, idx) => {
          const IconComponent = srv.icon;
          return (
            <div 
              key={srv.id}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Left description block: Column spanning 7 */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-[#0A0A0F] border ${srv.color} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sans font-bold text-[#F8F8FF]">{srv.name}</h3>
                      <span className="text-xs font-sans text-indigo-400 font-medium">{srv.tagline}</span>
                    </div>
                  </div>

                  <div className="text-xs md:text-sm text-[#8888A0] leading-relaxed space-y-3">
                    <p>{srv.overview}</p>
                  </div>
                </div>

                {/* Sub Metadata parameters panel */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0A0A0F] p-4 rounded-lg border border-[#1E1E2E] mt-6">
                  <div>
                    <span className="text-[9px] font-mono text-[#8888A0] uppercase block">Guaranteed Outcome</span>
                    <span className="text-xs text-[#F8F8FF] font-medium block mt-0.5 leading-snug">{srv.outcome}</span>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-x border-[#1E1E2E] pt-3 sm:pt-0 sm:px-4">
                    <span className="text-[9px] font-mono text-[#8888A0] uppercase block">Delivery Timeline</span>
                    <span className="text-xs text-[#F8F8FF] font-semibold block mt-0.5">{srv.timeline}</span>
                  </div>
                  <div className="border-t sm:border-t-0 pt-3 sm:pt-0">
                    <span className="text-[9px] font-mono text-indigo-400 uppercase block font-semibold">Predictable Cost</span>
                    <span className="text-xs text-[#F8F8FF] font-bold block mt-0.5">{srv.pricing}</span>
                  </div>
                </div>
              </div>

              {/* Right checklist elements details: Column spanning 5 */}
              <div className="lg:col-span-5 bg-[#0A0A0F] border-t lg:border-t-0 lg:border-l border-[#1E1E2E] p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-[#F8F8FF] uppercase tracking-wider block font-semibold">Included Scope Deliverables</span>
                  
                  <div className="space-y-3">
                    {srv.deliverables.map((dl, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-[#8888A0]">
                        <CheckCircle2 className="w-4 h-4 text-[#4F6EF7] shrink-0 mt-0.5" />
                        <span className="leading-snug">{dl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    id={`btn-service-cta-${srv.id}`}
                    onClick={triggerScrollToContact}
                    className="w-full bg-[#1E1E2E] hover:bg-[#252538] text-white text-xs font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 border border-[#1E1E2E] transition-all cursor-pointer"
                  >
                    <span>Request This Scope Audit</span>
                    <ArrowRight className="w-4 h-4 text-[#4F6EF7]" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* NDA Banner Call */}
      <section className="max-w-4xl mx-auto px-4 select-none">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">CONFIDENTIALITY PACT</span>
              <h4 className="text-sm font-sans font-semibold text-[#F8F8FF]">Need a signature before disclosing your current cluster setup?</h4>
              <p className="text-xs text-[#8888A0] leading-relaxed">
                No problem. We require strict NDAs internally for all architectures. Simply call or submit your detail form in the scheduler below, and our team will automatically forward our pre-signed security agreement.
              </p>
            </div>
          </div>
          <button 
            id="btn-trigger-nda-sched"
            onClick={triggerScrollToContact}
            className="bg-[#1E1E2E] hover:bg-[#222233] border border-[#1E1E2E] px-4 py-2.5 text-xs text-[#F8F8FF] rounded font-mono shrink-0 whitespace-nowrap cursor-pointer"
          >
            Request Draft NDA
          </button>
        </div>
      </section>

    </div>
  );
}
