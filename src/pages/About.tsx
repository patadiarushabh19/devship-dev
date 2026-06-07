/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Server, Trophy, Users, Terminal, ArrowRight, HeartHandshake } from 'lucide-react';
import { PageId } from '../types';

interface AboutProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function About({ setCurrentTab }: AboutProps) {
  
  const values = [
    {
      title: 'Declarative Standardisation',
      desc: 'We do not build custom scripting silos. Every subnet path, load balancer gateway, and database snap policy is codified entirely as standard, declarative Terraform. Your setup remains cleanly reproducible.',
      icon: Terminal
    },
    {
      title: 'Boring is Reliable',
      desc: 'Startups do not need fragile, exotic cloud tools. We build highly standard, boring architectures (like AWS ECS Fargate & isolated RDS servers). It eliminates operational anomalies and reduces configuration drift.',
      icon: Server
    },
    {
      title: '100% Client Sovereignty',
      desc: 'Your cloud keys belong entirely to your company. We do not host resources under our billing umbrellas or trap clients inside custom portals. All access mappings use cross-account OIDC roles that can be destroyed instantly.',
      icon: ShieldCheck
    },
    {
      title: 'Actionable Technical Transparency',
      desc: 'We are skeptical of consulting buzzwords and marketing fluff. We talk to founders and CTOs using direct code metrics, structured operational support, and clear architectural layouts.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* Manifesto Intro */}
      <section className="relative pt-12">
        <div className="absolute inset-0 bg-blue-950/5 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">DevShip Corporate Manifesto</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight leading-tight">
            Production-Grade DevOps Shouldn't <br className="hidden md:block" />
            Require a <span className="text-[#4F6EF7]">$180K Hire</span>
          </h1>
          <p className="text-sm md:text-base text-[#8888A0] leading-relaxed max-w-2xl mx-auto">
            We launched DevShip to solve a painful engineering paradox: early-stage startups need secure, resilient cloud architecture immediately, but standard, pre-scale environments require less than 10 hours of active weekly maintenance.
          </p>
        </div>
      </section>

      {/* The Crux of Why We Exist */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">The Core Industry Flaw</span>
            <h3 className="text-xl font-sans font-bold text-[#F8F8FF] tracking-tight">The Pre-Scale Talent Allocation Mistake</h3>
            <p className="text-xs md:text-sm text-[#8888A0] leading-relaxed">
              When venture-backed companies raise initial seed rounds, hiring a full-time Senior Cloud Architect is highly standard. Yet once they configure standard, automated deployment pipelines and mount RDS replication boundaries, those engineers often spend weeks optimizing microservices configuration files.
            </p>
            <p className="text-xs md:text-sm text-[#8888A0] leading-relaxed">
              This results in massive capital waste, slowing developer speed. By utilizing DevShip, you acquire a direct line to multiple senior SOLUTIONS Architects on speed dial for an accessible flat rate.
            </p>
          </div>

          <div className="border border-[#1E1E2E] bg-[#0A0A0F] rounded-lg p-6 space-y-4 font-mono text-xs text-indigo-400 leading-relaxed relative overflow-hidden">
            <div className="absolute top-2 right-3 flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            
            <p className="text-[#8888A0]"># DevShip Operational Mandate</p>
            <p>
              <span className="text-white">1. Codify everything:</span> If it is not in a private Terraform module, it does not exist. Manual console changes are strictly forbidden.
            </p>
            <p>
              <span className="text-white">2. Standardize boundaries:</span> Use managed services (ALB, ECS, RDS Aurora) instead of heavy, custom-built VM pools.
            </p>
            <p>
              <span className="text-white">3. Complete transparency:</span> Every alert is routed automatically. Status dashboard remains accessible with zero secrets gatekeeping.
            </p>
          </div>
        </div>
      </section>

      {/* Our Operating Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Primary Tenets</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">Our Operational Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 hover:border-zinc-750 transition-colors space-y-4"
              >
                <div className="w-9 h-9 rounded-md bg-[#0A0A0F] border border-[#1E1E2E] flex items-center justify-center text-[#4F6EF7]">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-sans font-bold text-[#F8F8FF] uppercase tracking-wide">{v.title}</h3>
                  <p className="text-[11px] md:text-xs text-[#8888A0] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* final CTA container */}
      <section id="scheduler-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 select-none">
        <div className="bg-gradient-to-r from-indigo-950/20 via-[#4F6EF7]/5 to-indigo-950/20 border border-[#1E1E2E] p-8 md:p-12 rounded-2xl text-center space-y-6 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Commitment Free Screening</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F8FF] tracking-tight">
            Schedule a Confidential Architecture Audit
          </h2>
          <p className="text-xs md:text-sm text-[#8888A0] leading-relaxed max-w-xl mx-auto">
            Discover where your AWS bill is leaking cash, secure over-exposed IAM subnets, and check your deployment pipelines in real-time.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                const s = document.getElementById('scheduler-section');
                if (s) s.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-semibold px-6 py-3.5 rounded-lg inline-flex items-center space-x-2 transition-all cursor-pointer"
            >
              <span>Book Your Free AWS Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
