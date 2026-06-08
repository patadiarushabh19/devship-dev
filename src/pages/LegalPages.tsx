/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-xs md:text-sm text-[#8888A0] leading-relaxed">
      <div className="border-b border-[#1E1E2E] pb-5">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Sovereign Protection Rules</span>
        <h1 className="text-2xl md:text-3xl font-sans font-extrabold text-[#F8F8FF] tracking-tight mt-1">Privacy Policy</h1>
        <p className="text-xs text-[#8888A0] mt-1">Last revised: June 7, 2026</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">1. Information We Access</h2>
          <p>
            We do not cache, copy, or sell your private database logs, client telemetry, IP parameters, or configuration secrets. When we map access permissions to conduct our assessments, we only query configuration metadata descriptors (such as node counts, virtualization layouts, and security group bounds) to pinpoint optimization opportunities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">2. Strict Credential Sovereignty</h2>
          <p>
            You retain absolute billing and control ownership of your infrastructure and environments. We query metrics solely using Least Privilege access boundaries (limiting root shell access completely). At no point does Atlas staff request credentials or payment details outside standard designated processing systems.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">3. Corporate Mutual NDAs</h2>
          <p>
            Prior to any discovery review or read-only credentials exchange, Atlas and our clients negotiate a comprehensive, binding mutual Non-Disclosure Agreement (NDA). All disclosures regarding your software, development frameworks, and architectures are covered strictly under governing trade laws.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">4. Secure Integrations</h2>
          <p>
            We utilize secure, enterprise-grade tools for communication, customer ticket routing, and business operations. No customer configuration details are ever exposed.
          </p>
        </section>
      </div>
    </div>
  );
}

export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-xs md:text-sm text-[#8888A0] leading-relaxed">
      <div className="border-b border-[#1E1E2E] pb-5">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Corporate Operations Agreement</span>
        <h1 className="text-2xl md:text-3xl font-sans font-extrabold text-[#F8F8FF] tracking-tight mt-1">Terms of Service</h1>
        <p className="text-xs text-[#8888A0] mt-1">Last revised: June 7, 2026</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">1. Discovery & Assessment Terms</h2>
          <p>
            Atlas deliverables represent a structured discovery and infrastructure optimization assessment engagement. We do not guarantee absolute absence of database outages caused by external cloud providers, physical hardware failures, or developer application coding errors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">2. Transparent Scoping & Terms</h2>
          <p>
            All engagements are scoped accurately based on server counts and virtualization complexity. All upfront discovery projects are documented with clear timelines before execution.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">3. Blueprint & Map Transfer</h2>
          <p>
            Any custom configuration files, automation blueprints, Terraform models, and topology maps constructed specifically for your accounts during active engagements are fully owned by your company. Transfer occurs immediately upon completion of handover.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">4. Limitation of Liability</h2>
          <p>
            Atlas will not be held liable for any indirect, consequential, or accidental monetary damages (including sudden operational billing spikes, third-party software breaches, or data lost during migration transfers) exceeding the total amount paid by you to Atlas in the three months prior.
          </p>
        </section>
      </div>
    </div>
  );
}
