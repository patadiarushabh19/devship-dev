/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, Layers, DollarSign, Database, ShieldCheck, Zap, Server, Activity, Users, FileLock, HelpCircle, AlertCircle, ChevronDown, Award } from 'lucide-react';
import DashboardMockup from '../components/DashboardMockup';
import Scheduler from '../components/Scheduler';
import CostCalculator from '../components/CostCalculator';
import Checklists from '../components/Checklists';
import InteractiveWorkflow from '../components/InteractiveWorkflow';
import { PageId } from '../types';

interface HomeProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function Home({ setCurrentTab }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  const problemCards = [
    {
      title: 'Bleeding AWS Outlays',
      problem: 'Oversized EC2 instances, redundant Multi-AZ configs in staging, and unassigned EBS disk pools run unnoticed.',
      impact: 'Up to 50% of the standard monthly cloud bill is entirely wasted compute.',
      businessCost: '$1,200 – $6,500 monthly capital burn without product outputs.',
      icon: DollarSign,
      color: 'text-amber-400 border-amber-500/20'
    },
    {
      title: 'Brittle Deployment Pipelines',
      problem: 'Brittle scripting with manual SSH deployments, unversioned configs, and failing build packages.',
      impact: 'Product updates take 45+ minutes with high deployment failure rates and sudden outages.',
      businessCost: 'Engineering momentum stalled. Lost customer confidence during outages.',
      icon: ShieldAlert,
      color: 'text-rose-400 border-rose-500/20'
    },
    {
      title: 'Critical Security Risks',
      problem: 'Over-privileged static root IAM keys, exposed RDS/SSH network ports, and empty audit logs.',
      impact: 'High exposure to malicious port scans, credentials leakage, and API exploitation.',
      businessCost: 'Devastating system compromises and contract-ending client liability.',
      icon: FileLock,
      color: 'text-[#ef4444] border-red-500/20'
    },
    {
      title: 'DevOps Hiring Bottlenecks',
      problem: 'Spending 3-6 months searching for limited senior DevOps talent demanding $180K+ in payroll.',
      impact: 'Core developers are distracted from product velocity to play amateur sysadmin.',
      businessCost: 'Project launch timelines delayed by 4-6 months, slowing market traction.',
      icon: Users,
      color: 'text-blue-400 border-blue-500/20'
    }
  ];

  const comparisonData = [
    { metric: 'Avg. Fully Burdened SaaS Cost', hire: '$180K – $220K / yr', freelancer: '$140 – $200 / hr (Bespoke)', devship: 'Fixed predictable monthly fee. Zero equity.', highlight: true },
    { metric: 'Time to Initiate Setup', hire: '90 – 120 Days (Search & Onboard)', freelancer: '14 – 30 Days (Availability-dependent)', devship: 'Structured onboarding. Operations online within 48 hrs.', highlight: true },
    { metric: 'Expertise Footprint', hire: 'Limited to single engineer experience profile', freelancer: 'Varies. Prone to shortcutting.', devship: 'Collective knowledge of veteran senior DevOps architects.', highlight: true },
    { metric: 'Continuous Availability', hire: 'Prone to vacation, illness, and attrition gaps', freelancer: 'Vanishes as soon as contract hourly cap finishes', devship: 'Continuous monitoring and structured overlapping support workflows.', highlight: true },
    { metric: 'Infrastructure Risk', hire: 'High bottleneck of a single engineer setup silo', freelancer: 'Left with undocumented customized infrastructure', devship: 'Absolute knowledge sharing. Standard clean declarative IaC.', highlight: true }
  ];

  const faqItems = [
    {
      id: 'internal',
      question: 'Why shouldn’t we simply recruit a full-time Senior DevOps engineer?',
      answer: 'Hiring a full-time Devops headcount is highly inefficient for pre-scale companies. Aside from costing over $200K/year loaded, once secure pipelines and standardized Terraform containers are provisioned, the maintenance footprint of pre-scale startups requires under 5 hours per month. Under DevShip, you get enterprise senior outcomes without the payroll bloat.'
    },
    {
      id: 'already-aws',
      question: 'What if we already have a functional custom AWS architecture?',
      answer: 'Perfect. We do not destroy working setups. We execute an instant, zero-touch Read-Only Cloud Audit to target over-provisioned nodes, slow NAT routing tables, and loose IAM roles. We then draft a staging branch to migrate structures modularly with zero operational downtime.'
    },
    {
      id: 'ownership',
      question: 'Do we retain 100% ownership of our AWS accounts?',
      answer: 'Absolutely. We do not host your setups under our umbrella accounts. You retain full root administration and billing ownership of your AWS accounts. We coordinate access securely via AWS IAM Cross-Account Roles with automated credentials rotation. You can revoke DevShip permission keys instantly in a single click.'
    },
    {
      id: 'cancel',
      question: 'What occurs if we decide to cancel our partnership?',
      answer: 'No lock-ins. All IaC code (Terraform templates, Dockerfiles, GitHub Actions YAML scripts, AWS SSM configs) is checked directly into your private repos. Your environment is completely native, formatted to industry-standard benchmarks. You retain your infrastructure cleanly with zero technical translation problems.'
    },
    {
      id: 'k8s',
      question: 'Can your team support complex Kubernetes (EKS/ECS) environments?',
      answer: 'Yes. We are certified Kubernetes Administrators (CKA). We transition complex microservices to containerized AWS setups. Depending on scaling parameters, we often advise high-performance, lower-overhead models like AWS ECS Fargate, which reduces maintenance work by 90% compared to heavy Kubernetes configurations.'
    }
  ];

  const techIcons = [
    { name: 'Terraform', desc: 'Secure IaC Declarations' },
    { name: 'AWS Cloud', desc: 'Enterprise Stack Foundations' },
    { name: 'Docker / Containers', desc: 'Isolated Portable Compute' },
    { name: 'AWS ECS Fargate', desc: 'Serverless Managed Scaling' },
    { name: 'GitHub Actions', desc: 'Continuous Delivery Pipelines' },
    { name: 'AWS Aurora DB', desc: 'Auto-Scaling Relational Subnets' },
    { name: 'Prometheus / Grafana', desc: 'Enterprise Health telemetry' },
    { name: 'AWS Shield / WAF', desc: 'Realtime Perimeter Protection' }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* SECTION 1: HERO VIEW */}
      <section className="relative pt-12 md:pt-20">
        
        {/* Subtle grid background accent */}
        <div className="absolute inset-0 bg-[#0A0A0F] bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Tagline micro headers */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-mono tracking-tight"
            >
              <Award className="w-3.5 h-3.5" />
              <span>DevOps-as-a-Service for Series-A & seed Startups</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-sans font-bold text-[#F8F8FF] tracking-tight leading-none"
            >
              Stop Managing AWS. <br />
              <span className="text-[#4F6EF7]">Start Shipping Product.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-[#8888A0] max-w-2xl leading-relaxed mt-2"
            >
              DevShip is your dedicated remote DevOps team. We design, manage, secure, and optimize AWS cloud setups for a predictable monthly fee. Get senior infrastructure engineering without high hiring headaches.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button
                id="hero-cta-book"
                onClick={() => {
                  document.getElementById('scheduler-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-semibold px-6 py-3.5 rounded-lg flex items-center space-x-2 transition-all cursor-pointer shadow-xl shadow-indigo-600/15"
              >
                <span>Book Your Free AWS Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-cta-pricing"
                onClick={() => setCurrentTab('pricing')}
                className="text-xs text-[#8888A0] hover:text-[#F8F8FF] font-mono border border-[#1E1E2E] bg-[#111118] px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
              >
                See Predictable Pricing
              </button>
            </motion.div>

            {/* Quick trust metrics beneath CTAs */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1E1E2E]/60 max-w-md w-full text-center"
            >
              <div>
                <span className="text-[10px] font-mono text-[#4F6EF7] block font-bold uppercase">Best Practices</span>
                <span className="text-xs font-mono font-medium text-[#F8F8FF] mt-0.5 block">Standard Aligned</span>
              </div>
              <div className="border-x border-[#1E1E2E]">
                <span className="text-[10px] font-mono text-[#4F6EF7] block font-bold uppercase">Ownership</span>
                <span className="text-xs font-mono font-medium text-[#F8F8FF] mt-0.5 block">100% Stays Yours</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#4F6EF7] block font-bold uppercase">Commitment</span>
                <span className="text-xs font-mono font-medium text-[#F8F8FF] mt-0.5 block">Cancel Anytime</span>
              </div>
            </motion.div>
          </div>

          {/* S1.2: INTERACTIVE DASHBOARD PREVIEW */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-6"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: THE PROBLEM ANALYSIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#ef4444] uppercase tracking-widest font-semibold block">Vulnerability Diagnostics</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">Infrastructure Shouldn't Be Your Full-Time Job.</h2>
          <p className="text-xs md:text-sm text-[#8888A0]">Are you managing servers and routing tables, or writing product code for customers?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problemCards.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className={`w-9 h-9 rounded-md bg-[#0A0A0F] border ${p.color} flex items-center justify-center`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-sans font-semibold text-[#F8F8FF]">{p.title}</h3>
                    <p className="text-[11px] text-[#8888A0] leading-relaxed">{p.problem}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#1E1E2E] space-y-2">
                  <div>
                    <span className="text-[9px] font-mono text-[#8888A0] uppercase block">Operational Impact</span>
                    <p className="text-[10.5px] text-[#F8F8FF] leading-snug">{p.impact}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#ef4444] uppercase block">Hard Business Cost</span>
                    <strong className="text-[11px] text-[#F8F8FF] font-medium font-mono">{p.businessCost}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: THE STRATEGIC WHY DEVSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Market Alternatives comparison</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">How DevShip Restructures Your DevOps Stack</h2>
          <p className="text-xs md:text-sm text-[#8888A0]">Compare standard options to locate your most capital-efficient team model.</p>
        </div>

        {/* Comparison grid representation */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-x-auto shadow-xl">
          <table className="w-full min-w-[640px] text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-[#0A0A0F] border-b border-[#1E1E2E]">
                <th className="p-4 text-xs font-mono text-[#8888A0] uppercase w-[28%]">Comparative Parameter</th>
                <th className="p-4 text-xs font-mono text-[#8888A0] uppercase w-[24%]">1 Full-Time Employee</th>
                <th className="p-4 text-xs font-mono text-[#8888A0] uppercase w-[24%]">Bespoke Freelancer</th>
                <th className="p-4 text-xs font-mono text-indigo-400 uppercase w-[24%] bg-indigo-500/[0.04]">DevShip Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E1E2E] text-xs">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#111118]/60 transition-colors">
                  <td className="p-4 text-[#F8F8FF] font-sans font-medium">{row.metric}</td>
                  <td className="p-4 text-[#8888A0] font-sans">{row.hire}</td>
                  <td className="p-4 text-[#8888A0] font-sans">{row.freelancer}</td>
                  <td className="p-4 text-white font-semibold font-sans bg-indigo-500/[0.04] border-l border-indigo-500/20">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{row.devship}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 10: TCO DYNAMIC CALCULATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Interactive Analytics</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">Evaluate Your Setup's Hidden Leaks</h2>
          <p className="text-xs md:text-sm text-[#8888A0]">Review mathematical models to quantify developer time reclaimed by offloading ops burden.</p>
        </div>
        <CostCalculator />
      </section>

      {/* SECTION 4: THE CORE DELIVERABLES SERVICES IN BRIEF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Our Operations Scope</span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight mt-1">Specialized Infrastructure Practices</h2>
          </div>
          <button
            id="home-services-more"
            onClick={() => setCurrentTab('services')}
            className="text-xs font-mono text-[#4F6EF7] hover:text-white flex items-center space-x-1 uppercase tracking-wide cursor-pointer pb-1 border-b border-transparent hover:border-[#4F6EF7]"
          >
            <span>Browse Full Deliverables list</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#4F6EF7] uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 inline-block font-semibold">Continuous Operations</span>
              <h3 className="text-lg font-sans font-bold text-[#F8F8FF]">Managed AWS Infrastructure</h3>
              <p className="text-xs text-[#8888A0] leading-relaxed">
                24/7 dedicated system administrators managing backups, configuration drifts, security upgrades, log aggregations, and active incidents. We absorb your daily operational operations so your developers write business logic.
              </p>
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-indigo-400 uppercase block font-semibold">Standard Outcomes</span>
                <div className="space-y-1.5 text-xs text-[#F8F8FF]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>Cost optimization up to 70%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>Real-time monitoring telemetry</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E1E2E] flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#8888A0] block">Delivery timeline</span>
                <span className="text-xs font-sans text-[#F8F8FF] font-medium">On-going continuous</span>
              </div>
              <button onClick={() => setCurrentTab('pricing')} className="bg-[#1E1E2E] hover:bg-[#252538] text-white text-xs px-3.5 py-1.5 rounded transition-colors cursor-pointer-button font-medium">
                See Pricing
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#4F6EF7] uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 inline-block font-semibold">System Migration</span>
              <h3 className="text-lg font-sans font-bold text-[#F8F8FF]">Cloud Migration & Drift Auditing</h3>
              <p className="text-xs text-[#8888A0] leading-relaxed">
                Shifting platforms cleanly from Heroku, Vercel, or digital ocean to isolated AWS setups. We containerize core codes into Docker structures, map variables to AWS Secrets Manager, and setup high-fidelity databases with zero downtime.
              </p>
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-indigo-400 uppercase block font-semibold font-semibold">Standard Outcomes</span>
                <div className="space-y-1.5 text-xs text-[#F8F8FF]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>Total compute pricing cut in half</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>Reproducible local staging setups</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E1E2E] flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#8888A0] block">Delivery timeline</span>
                <span className="text-xs font-sans text-[#F8F8FF] font-medium">Completed in 14-21 Days</span>
              </div>
              <button onClick={() => setCurrentTab('services')} className="bg-[#1E1E2E] hover:bg-[#252538] text-white text-xs px-3.5 py-1.5 rounded transition-colors cursor-pointer-button font-medium">
                See Deliverables
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#4F6EF7] uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 inline-block font-semibold font-semibold">VPC Greenfield Code</span>
              <h3 className="text-lg font-sans font-bold text-[#F8F8FF]">Greenfield AWS Launch</h3>
              <p className="text-xs text-[#8888A0] leading-relaxed">
                Designing highly secure, enterprise-grade architecture blueprints using 100% declarative Terraform. Ready for HIPAA, SOC2 Type II, or GDPR benchmarks. Complete isolated VPC structure with continuous deploy tooling.
              </p>
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-indigo-400 uppercase block font-semibold">Standard Outcomes</span>
                <div className="space-y-1.5 text-xs text-[#F8F8FF]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>Compliance ready CIS architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>Automated deploy pipelines online</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E1E2E] flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#8888A0] block">Delivery timeline</span>
                <span className="text-xs font-sans text-[#F8F8FF] font-medium">Delivered within 5 Business Days</span>
              </div>
              <button onClick={() => setCurrentTab('services')} className="bg-[#1E1E2E] hover:bg-[#252538] text-white text-xs px-3.5 py-1.5 rounded transition-colors cursor-pointer-button font-medium">
                See Scope
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 11: DYNAMIC CHECKLIST MODULE */}
      <section id="checklist-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Self-Service Diagnostics</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">Interactive Cloud Assessment Deck</h2>
          <p className="text-xs md:text-sm text-[#8888A0]">Evaluate your live environment posture, calculate secret leaks, or get PDF configurations immediately.</p>
        </div>
        <Checklists />
      </section>

      {/* SECTION 5: HOW THE TIMELINE WORKS */}
      <InteractiveWorkflow />

      {/* SECTION 6: THE CREDIBILITY / TECH BADGES GRID */}
      <section className="bg-[#111118]/40 border-y border-[#1E1E2E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-lg mx-auto space-y-2">
            <span className="text-xs font-mono text-[#8888A0] uppercase tracking-widest block font-medium">Standards Compatibility Matrix</span>
            <h2 className="text-xl font-sans font-bold text-[#F8F8FF] tracking-tight">Automated Using Industry-Trusted Frameworks</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {techIcons.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#111118] border border-[#1E1E2E] p-4 rounded-lg flex flex-col justify-center text-center space-y-1.5"
              >
                <div className="flex items-center justify-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                  <span className="text-xs font-mono text-[#F8F8FF] font-semibold">{t.name}</span>
                </div>
                <span className="text-[10px] font-mono text-[#8888A0]">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION SECTION */}
      <section id="faq-section" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Clearing Security Prejudices</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">AWS Operations Objections Addressed</h2>
          <p className="text-xs text-[#8888A0]">Clear, modular, direct technical metrics evaluating access compliance policies.</p>
        </div>

        <div className="space-y-3.5">
          {faqItems.map((faq, idx) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div 
                key={idx} 
                className="bg-[#111118] border border-[#1E1E2E] rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4.5 flex items-center justify-between text-xs md:text-sm font-sans font-semibold text-[#F8F8FF] hover:bg-[#1E1E2E]/30 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4.5 h-4.5 text-[#8888A0] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="bg-[#0A0A0F] p-4.5 border-t border-[#1E1E2E] text-xs md:text-sm text-[#8888A0] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: THE PRIMARY SCHEDULING ENTRANCE (SCROLL TARGET) */}
      <section id="scheduler-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 bg-[#4F6EF7]/10 border border-[#4F6EF7]/30 px-3 py-1 rounded-full text-xs text-[#4F6EF7] font-mono tracking-wider font-semibold uppercase">
            Let's Review Your Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#F8F8FF] tracking-tight leading-none">
            Secure Your Free AWS Cost Audit
          </h2>
          <p className="text-sm text-[#8888A0] leading-relaxed">
            No long commitments. NDA signed prior to scheduling. Secure a dedicated screen review mapping waste vectors in under 30 minutes.
          </p>
        </div>

        <Scheduler />
      </section>

    </div>
  );
}
