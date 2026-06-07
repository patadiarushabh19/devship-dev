/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Eye, HelpCircle } from 'lucide-react';

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
            We do not cache, copy, or sell your private database logs, client telemetry, IP parameters, or configuration secrets. When you map our access keys via AWS IAM Cross-Account Roles, we only access target metadata descriptors (such as count metrics, region specifications, and security group bounds) to optimize costs and security.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">2. Strict Credential Sovereignty</h2>
          <p>
            You retain absolute billing and control ownership of your AWS accounts. We access configurations solely using Least Privilege Role boundaries (limiting direct terminal root access completely). At no point does DevShip staff ask for password metrics or credit cards outside designated banking processors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">3. Corporate Mutual NDAs</h2>
          <p>
            Prior to any screening or read-only credential exchange, DevShip and our clients negotiate a comprehensive, binding mutual Non-Disclosure Agreement (NDA). All disclosures regarding your software, development frameworks, and architectures are covered strictly under governing trade laws.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">4. Third-Party Integrations</h2>
          <p>
            We use secure, enterprise-grade processors for our workflows, including PagerDuty for continuous telemetry paging, Zendesk/Slack for ticket routing, and Stripe for subscription billing.
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
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">1. DevOps-As-A-Service Terms</h2>
          <p>
            DevShip deliverables represent a structured ongoing operations partnership. We do not guarantee absolute absence of database outages caused by AWS internal service failures, core container disruptions, or developer application coding errors. We commit to professional support target response windows within your subscribed tier.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">2. Predictable Billing & Payments</h2>
          <p>
            Subscriptions are billed securely in advance on a recurring monthly cycle. All invoices must be cleared within 5 business days of the billing start. In instances of non-clearance, we hold the absolute right to freeze continuous operations page telemetry until payments are satisfied.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">3. Code Ownership Transfer</h2>
          <p>
            Any custom configuration files, automation scripts, Terraform modules, build structures, and Actions templates constructed specifically for your accounts during active subscriptions are fully owned by your company. Pushing code updates directly to your private Git repositories transfers ownership instantly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-sans font-semibold text-[#F8F8FF] uppercase tracking-wide">4. Limitation of Liability</h2>
          <p>
            DevShip will not be held liable for any indirect, consequential, or accidental monetary damages (including sudden AWS over-billing spikes resulting from developer code loops, third-party software breaches, or data lost during migration transfers) exceeding the total amount paid by you to DevShip in the three months prior.
          </p>
        </section>
      </div>
    </div>
  );
}
