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
      id: 'discovery',
      icon: Compass,
      name: 'Infrastructure Discovery & Assessment',
      tagline: 'Deep operational mapping and configuration audits for absolute transparency.',
      overview: 'Our platform automatically discovers and maps infrastructure assets across complex architectures including physical, virtual, and cloud systems to eliminate blind spots. We audit servers, services, security postures, storage parameters, and egress routing, providing actionable, quantitative, and risk-rated diagnostic metrics.',
      outcome: 'Full configuration clarity, identified risk zones, and a definitive baseline for capacity consolidation.',
      timeline: 'Completed and mapped within 5 Business Days.',
      pricing: 'Fixed Assessment Engagement (Scale-aligned).',
      deliverables: [
        'Asset Inventory across physical, virtual, and cloud environments',
        'Automatic multi-tier Dependency Mapping maps and maps of service intersections',
        'Continuous Risk Assessment locating security drifts and lone ingress doors',
        'Comprehensive Infrastructure Health Report with benchmark ratings',
        'C-Suite Executive Summary translating system risks into business cost models'
      ],
      color: 'border-blue-500/20 text-blue-400'
    },
    {
      id: 'architecture',
      icon: Server,
      name: 'Infrastructure Architecture & Design',
      tagline: 'Custom system layouts designed for continuous availability and technical credibility.',
      overview: 'We layout highly resilient, enterprise-grade architecture blueprints across bare metal hosting, virtual machines, hypervisors, and multi-cloud providers. Our designs ensure data integrity, maximum resource density, private networking tunnels, and structured access configurations adhering to rigorous uptime guidelines.',
      outcome: 'Validated high-performance architecture blueprints perfectly tuned to your business operational goals.',
      timeline: 'Delivered in 5 to 10 Business Days.',
      pricing: 'Project-based Scope (Environment-scaled).',
      deliverables: [
        'Bare Metal Architecture & multi-site layout design mapping',
        'VPS Architecture & private sub-network segregation plans',
        'High Availability Design eliminating single points of failure across system stacks',
        'Robust Disaster Recovery Planning with recovery time objective (RTO) targets',
        'Hybrid Infrastructure Design bridging legacy hardware with cloud endpoints'
      ],
      color: 'border-indigo-500/20 text-[#4F6EF7]'
    },
    {
      id: 'modernization',
      icon: Zap,
      name: 'Infrastructure Modernization',
      tagline: 'Transform legacy workloads, hypervisors, and container platforms.',
      overview: 'Legacy systems limit feature velocity and burn excessive operational budgets. We modernise, cluster, and repackage legacy workloads. This includes transitioning heavy virtualized setups, moving hypervisors, and containerizing monoliths into standard, lightweight, declarative structures.',
      outcome: 'Platform consolidation, significant compute overhead reduction, and rapid build pipelines.',
      timeline: 'Executed in 10 to 14 Business Days.',
      pricing: 'Project-based Scope (Environment-scaled).',
      deliverables: [
        'Legacy Infrastructure Transformation consolidating heavy compute stacks',
        'VMware Modernization and transition to modern hypervisors like Proxmox',
        'Platform Consolidation scaling down obsolete resource pools',
        'Performance Optimization identifying slow execution layers and bottleneck subnets',
        'Infrastructure Refresh Projects deploying state-of-the-art server profiles'
      ],
      color: 'border-emerald-500/20 text-emerald-400'
    },
    {
      id: 'migration',
      icon: Database,
      name: 'Migration & Transformation Services',
      tagline: 'Seamlessly shift environments with absolute compliance and zero downtime.',
      overview: 'Moving critical production environments demands absolute precision. We handle migrations of databases, container nodes, and legacy networks with zero operational disruption. We thoroughly test pipelines in staging, validating every DNS alias, security firewall, and secret configuration beforehand.',
      outcome: 'Production data shifted beautifully, verified network boundaries, and zero downtime transitions.',
      timeline: 'Fully completed in 14 to 21 Business Days.',
      pricing: 'Custom Monthly Retainer or Fixed Project Pricing.',
      deliverables: [
        'Data Center Migrations shifting physical server tasks to modern facilities',
        'Infrastructure Consolidation reducing sprawling environments to tight units',
        'Virtualization Migrations from legacy systems into Proxmox or Cloud hypervisors',
        'Cloud Migrations transitioning workloads cleanly into GCP, AWS, or Azure subnets',
        'Hybrid Infrastructure Projects establishing secure high-throughput VPN tunnels'
      ],
      color: 'border-rose-500/20 text-rose-500'
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
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">Infrastructure Intelligence & Modernization</h1>
        <p className="text-sm text-[#8888A0] leading-relaxed">
          Unlock complete visibility, robust high-availability designs, and seamless legacy transitions across bare metal, hypervisors, and leading global cloud providers.
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
                    <span className="text-[9px] font-mono text-indigo-400 uppercase block font-semibold">Engagement Model</span>
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
