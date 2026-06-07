/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Terminal, Shield, EyeOff, Globe, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const navigateToTab = (tab: PageId) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1E1E2E] text-[#8888A0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Company Profile */}
          <div className="md:col-span-4 space-y-4">
            <div 
              onClick={() => navigateToTab('home')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#4F6EF7]/10 border border-[#4F6EF7]/30 flex items-center justify-center text-[#4F6EF7]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-sans font-semibold text-base text-[#F8F8FF]">
                Dev<span className="text-[#4F6EF7]">Ship</span>
              </span>
            </div>
            
            <p className="text-xs leading-relaxed max-w-sm">
              Your dedicated DevOps team. Designs, secures, optimizes, and manages production-grade AWS setups for a predictable monthly fee. Zero hiring headaches.
            </p>

            <div className="flex flex-col space-y-2.5 pt-2">
              <div className="flex items-center space-x-2 text-[10px] uppercase font-mono">
                <Shield className="w-3.5 h-3.5 text-[#4F6EF7]" />
                <span className="text-[#F8F8FF] font-semibold">100% Certified AWS DevOps Specialists</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] uppercase font-mono">
                <EyeOff className="w-3.5 h-3.5 text-[#4F6EF7]" />
                <span className="text-[#F8F8FF] font-semibold">Pre-Engaged SecNDAs on File</span>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-[#F8F8FF] uppercase tracking-wider font-semibold block">Architecture</span>
            <ul className="space-y-2 text-xs">
              <li>
                <button id="footer-link-services" onClick={() => navigateToTab('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Core Services
                </button>
              </li>
              <li>
                <button id="footer-link-pricing" onClick={() => navigateToTab('pricing')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Predictable Tiers
                </button>
              </li>
              <li>
                <button id="footer-link-about" onClick={() => navigateToTab('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Operational Philosophy
                </button>
              </li>
              <li>
                <button id="footer-link-faq" onClick={() => navigateToTab('faq')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Objections & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Lead tools links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-[#F8F8FF] uppercase tracking-wider font-semibold block">Interactive Handbooks</span>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => {
                    navigateToTab('home');
                    setTimeout(() => {
                      document.getElementById('checklist-block')?.scrollIntoView({ behavior: 'smooth' });
                      document.getElementById('btn-cost-tab')?.click();
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 bg-[#4F6EF7] rounded-full inline-block"></span>
                  <span>AWS Optimization Checklist</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigateToTab('home');
                    setTimeout(() => {
                      document.getElementById('checklist-block')?.scrollIntoView({ behavior: 'smooth' });
                      document.getElementById('btn-sec-tab')?.click();
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 bg-[#4F6EF7] rounded-full inline-block"></span>
                  <span>AWS Security Compliance Assessment</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigateToTab('home');
                    setTimeout(() => {
                      document.getElementById('checklist-block')?.scrollIntoView({ behavior: 'smooth' });
                      document.getElementById('btn-guide-tab')?.click();
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 bg-[#4F6EF7] rounded-full inline-block"></span>
                  <span>Infrastructure Audit Report (PDF)</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab('blog')} className="hover:text-white transition-colors text-left cursor-pointer flex items-center space-x-1.5">
                  <span className="w-1 h-1 bg-[#4F6EF7] rounded-full inline-block"></span>
                  <span>Searchable Tech Blog</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal / Target Markets */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-[#F8F8FF] uppercase tracking-wider font-semibold block">SaaS Operations</span>
            <ul className="space-y-2 text-xs">
              <li>
                <button id="footer-link-privacy" onClick={() => navigateToTab('privacy')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Privacy Protection Rules
                </button>
              </li>
              <li>
                <button id="footer-link-terms" onClick={() => navigateToTab('terms')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Terms of Service Agreement
                </button>
              </li>
              <li className="flex items-center space-x-1.5 pt-2">
                <Globe className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span className="text-[10px] text-zinc-500 font-mono">USA • UK • CAN • AUS Managed Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="border-t border-[#1E1E2E] mt-12 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[11px] font-mono whitespace-nowrap">
            &copy; {new Date().getFullYear()} DevShip operations. All assets protected. AWS partner standard configuration.
          </p>
          <div className="flex items-center space-x-1 text-[10px] font-mono text-zinc-500">
            <span>Reliability standards: Multi-AZ isolated topologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
