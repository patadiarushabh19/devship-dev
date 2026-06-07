/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, BadgePercent, Lock, HardHat, CheckCircle2, ChevronRight, FileDown, Mail, AlertTriangle, CloudRain, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COST_ITEMS = [
  { id: 'idle-rds', title: 'Idle RDS Database Replication Active', description: 'Multi-AZ replication turned on in Development, Staging, or Preview environments.', wasteCost: 350 },
  { id: 'gp2-ebs', title: 'EBS Storage Volumes Still Bound to GP2', description: 'Older GP2 volumes cost 20% more than the modernized GP3 volume group offering higher baseline IOPS.', wasteCost: 180 },
  { id: 'nat-leak', title: 'Routing Private App S3 Logs via Public NAT Gateway', description: 'Incurring $0.045 per GB egress data processing instead of routing internally with a free private S3 VPC Endpoint.', wasteCost: 520 },
  { id: 'unattached-ebs', title: 'Orphaned EBS Disk Storage Volumes', description: 'Active drive storage remaining allocated and billed after instances or servers have been terminated.', wasteCost: 140 },
  { id: 'no-instance-stop', title: 'Staging Servers Left Running 24/7 Over Weekends', description: 'Keeping preview, dev, or sandbox environments provisioned outside standard product development hours.', wasteCost: 450 },
  { id: 'overprovision-containers', title: 'Oversized Container Task Memory Profiles', description: 'Hardcoded 2.0x peak virtual allocation on ECS tasks despite average telemetry CPU being under 5%.', wasteCost: 320 }
];

const SECURITY_QUESTIONS = [
  {
    id: 'iam-role',
    text: 'How do your CI/CD pipelines access AWS accounts?',
    options: [
      { text: 'Permanent Admin IAM user access keys (AccessKeyID/SecretAccessKey) stored in GitHub secrets.', score: 10, priority: 'CRITICAL', advisory: 'Replace static keys immediately. Configure OIDC cross-account trust roles so GitHub assumes temporary 1-hour STS credentials via AWS STS.' },
      { text: 'Access keys with restricted custom IAM policies mapped specifically to deployment services.', score: 50, priority: 'HIGH', advisory: 'Static credentials can leak. Prefer OIDC AWS IAM Identity Providers.' },
      { text: 'OIDC integration mapping temporary sessions without hardcoded root access key configurations.', score: 100, priority: 'HEALTHY', advisory: 'Excellent. Standard best-practice.' }
    ]
  },
  {
    id: 'ssh-ingress',
    text: 'What ingress paths are open to your databases/servers?',
    options: [
      { text: 'Port 22 (SSH) or Port 5432/3306 (Postgres/MySQL) is open to the public internet (0.0.0.0/0).', score: 5, priority: 'CRITICAL', advisory: 'Exposing relational database ports publicly invites continuous brute-force attacks. Shield databases inside isolated private subnets, allowing access only via AWS Systems Manager (SSM) Session Manager or specialized bastion hosts.' },
      { text: 'Whitelisted developer IP addresses mapped directly in Security Group config files.', score: 60, priority: 'MEDIUM', advisory: 'Prone to credential rotation issues. We recommend shifting to AWS client VPN or SSM Tunneling.' },
      { text: 'No direct public ingress. Private subnets isolated. VPN or SSM Session Manager mandatory.', score: 100, priority: 'HEALTHY', advisory: 'Perfect. Your network boundary is isolated successfully.' }
    ]
  },
  {
    id: 'cloudtrail-audit',
    text: 'Is AWS CloudTrail logs actively forwarded and protected?',
    options: [
      { text: 'Not sure / CloudTrail is disabled or only tracking local events on a 90-day retention loop.', score: 15, priority: 'HIGH', advisory: 'If an account gets compromised, you will have no audit tail. Enable custom CloudTrail routing to a multi-region encrypted S3 bucket protected with Object Lock policy.' },
      { text: 'Enabled but not actively monitored or alerted for critical root logins or anomaly signals.', score: 60, priority: 'MEDIUM', advisory: 'Establish Simple Notification Service (SNS) alerting triggers mapping root console authorizations.' },
      { text: 'Enabled, encrypted, forwarded to isolated account log-archives with automated security telemetry alerts.', score: 100, priority: 'HEALTHY', advisory: 'Secure audit pipeline active.' }
    ]
  }
];

export default function Checklists() {
  const [activeTab, setActiveTab] = useState<'cost' | 'security' | 'guide'>('cost');

  // Cost state
  const [checkedCosts, setCheckedCosts] = useState<string[]>(['idle-rds', 'gp2-ebs']);
  const [costLeadSubmitted, setCostLeadSubmitted] = useState(false);
  const [costEmail, setCostEmail] = useState('');

  // Security state
  const [securityAnswers, setSecurityAnswers] = useState<Record<string, number>>({
    'iam-role': 10,
    'ssh-ingress': 5,
    'cloudtrail-audit': 15
  });
  const [secLeadSubmitted, setSecLeadSubmitted] = useState(false);
  const [secEmail, setSecEmail] = useState('');

  // Guide guide download state
  const [guideForm, setGuideForm] = useState({ name: '', email: '', company: '' });
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  // Toggle checklist cost items
  const handleCostToggle = (id: string) => {
    setCheckedCosts(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate total waste
  const totalMonthlyWaste = checkedCosts.reduce((acc, currentId) => {
    const item = COST_ITEMS.find(c => c.id === currentId);
    return acc + (item ? item.wasteCost : 0);
  }, 0);

  // Calculate Security Score
  const currentSecurityScore = Math.round(
    (Object.values(securityAnswers) as number[]).reduce((acc, score) => acc + score, 0) / SECURITY_QUESTIONS.length
  );

  const handleSecuritySelect = (questionId: string, score: number) => {
    setSecurityAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  return (
    <div className="w-full bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-hidden shadow-2xl">
      {/* Tabs navigation */}
      <div className="flex border-b border-[#1E1E2E] bg-[#0A0A0F] p-1">
        <button
          id="btn-cost-tab"
          onClick={() => setActiveTab('cost')}
          className={`flex-1 py-3 text-xs font-mono font-medium rounded transition-all text-center ${
            activeTab === 'cost' 
              ? 'bg-[#1E1E2E] text-[#F8F8FF] border-b border-[#4F6EF7]' 
              : 'text-[#8888A0] hover:text-[#F8F8FF]'
          }`}
        >
          AWS Cost Optimization Checklist
        </button>
        <button
          id="btn-sec-tab"
          onClick={() => setActiveTab('security')}
          className={`flex-1 py-3 text-xs font-mono font-medium rounded transition-all text-center ${
            activeTab === 'security' 
              ? 'bg-[#1E1E2E] text-[#F8F8FF] border-b border-[#4F6EF7]' 
              : 'text-[#8888A0] hover:text-[#F8F8FF]'
          }`}
        >
          AWS Security Scorecard
        </button>
        <button
          id="btn-guide-tab"
          onClick={() => setActiveTab('guide')}
          className={`flex-1 py-3 text-xs font-mono font-medium rounded transition-all text-center ${
            activeTab === 'guide' 
              ? 'bg-[#1E1E2E] text-[#F8F8FF] border-b border-[#4F6EF7]' 
              : 'text-[#8888A0] hover:text-[#F8F8FF]'
          }`}
        >
          Infrastructure Audit Guide
        </button>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {/* TAB 1: Cost checklist */}
          {activeTab === 'cost' && (
            <motion.div
              key="cost-checker"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E1E2E] pb-4">
                <div>
                  <h4 className="text-base font-sans font-medium text-[#F8F8FF]">Audit Your Account Leakages</h4>
                  <p className="text-xs text-[#8888A0] mt-0.5">Select configurations active in your cloud setups below to calculate direct savings.</p>
                </div>
                <div className="bg-[#0A0A0F] border border-[#1E1E2E] p-3 rounded-md text-right">
                  <span className="text-[10px] font-mono text-[#8888A0] block uppercase">Identified Waste Leak</span>
                  <span className="text-lg font-mono text-amber-400 font-bold">${totalMonthlyWaste.toLocaleString()} USD / mo</span>
                </div>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COST_ITEMS.map(item => {
                  const isChecked = checkedCosts.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleCostToggle(item.id)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                        isChecked 
                          ? 'border-amber-500/40 bg-amber-500/[0.04]' 
                          : 'border-[#1E1E2E] bg-[#0A0A0F]/50 hover:bg-[#0A0A0F]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // handled by parent div click
                        className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-amber-500 focus:ring-amber-500 accent-amber-500 cursor-pointer"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-sans font-semibold text-[#F8F8FF] leading-snug">{item.title}</span>
                          <span className="text-[10px] font-mono text-amber-500 ml-2 shrink-0">+${item.wasteCost}/mo</span>
                        </div>
                        <p className="text-[11px] text-[#8888A0] leading-normal">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lead Capture form */}
              <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-5 mt-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-7 space-y-1">
                  <span className="text-[10px] font-mono text-[#4F6EF7] uppercase block font-semibold">Immediate Remediation Available</span>
                  <h5 className="text-sm font-sans font-medium text-[#F8F8FF]">Want us to fix these 6 leaks in your account?</h5>
                  <p className="text-xs text-[#8888A0] leading-normal">
                    Submit your email and receive a 1-page step-by-step infrastructure file that maps the exact Terraform configurations required to resolve these leaks immediately.
                  </p>
                </div>

                <div className="md:col-span-5">
                  {costLeadSubmitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded text-xs text-center font-mono">
                      ✓ Script Sent. Please check your inbox.
                    </div>
                  ) : (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!costEmail) return;
                        setCostLeadSubmitted(true);
                        localStorage.setItem('cost_checklist_lead', costEmail);
                      }}
                      className="flex space-x-2"
                    >
                      <input
                        id="cost-lead-email"
                        type="email"
                        required
                        placeholder="CTO or Engineering Email"
                        value={costEmail}
                        onChange={(e) => setCostEmail(e.target.value)}
                        className="flex-1 bg-[#111118] border border-[#1E1E2E] rounded text-xs p-2.5 text-white outline-none focus:border-[#4F6EF7]"
                      />
                      <button
                        id="btn-submit-cost-lead"
                        type="submit"
                        className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs px-4 py-2.5 rounded font-medium shrink-0 transition-transform cursor-pointer"
                      >
                        Get Script
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Security compliance scanner */}
          {activeTab === 'security' && (
            <motion.div
              key="security-checker"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E1E2E] pb-4">
                <div>
                  <h4 className="text-base font-sans font-medium text-[#F8F8FF]">AWS Security Assessment Tool</h4>
                  <p className="text-xs text-[#8888A0] mt-0.5">Answer the questions below to evaluate your current benchmark configuration safety.</p>
                </div>
                <div className="bg-[#0A0A0F] border border-[#1E1E2E] p-3 rounded-md text-center min-w-[130px]">
                  <span className="text-[10px] font-mono text-[#8888A0] block uppercase">Compliance Score</span>
                  <span className={`text-xl font-mono font-bold ${currentSecurityScore > 70 ? 'text-emerald-400' : currentSecurityScore > 40 ? 'text-amber-400' : 'text-[#ef4444]'}`}>
                    {currentSecurityScore}%
                  </span>
                </div>
              </div>

              {/* Questions stack */}
              <div className="space-y-5">
                {SECURITY_QUESTIONS.map(q => {
                  return (
                    <div key={q.id} className="bg-[#0A0A0F]/30 border border-[#1E1E2E] p-4 rounded-lg space-y-3">
                      <span className="text-xs font-sans font-semibold text-[#F8F8FF] block">{q.text}</span>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                        {q.options.map(opt => {
                          const isSelected = securityAnswers[q.id] === opt.score;
                          return (
                            <button
                              id={`opt-${q.id}-${opt.score}`}
                              key={opt.score}
                              type="button"
                              onClick={() => handleSecuritySelect(q.id, opt.score)}
                              className={`p-3 rounded-md text-left text-[11px] leading-tight border transition-all flex flex-col justify-between h-24 ${
                                isSelected 
                                  ? 'border-[#4F6EF7] bg-[#4F6EF7]/5 text-white' 
                                  : 'border-[#1E1E2E] bg-[#0A0A0F] text-[#8888A0] hover:border-zinc-700'
                              }`}
                            >
                              <span>{opt.text}</span>
                              <span className={`text-[9px] font-mono mt-2 self-end ${isSelected ? 'text-[#4F6EF7]' : 'text-[#8888A0]'} uppercase font-bold`}>
                                {isSelected ? '● Picked' : 'Select'}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Dynamic Advisory output */}
                      <div className="bg-[#0A0A0F] p-3 rounded border border-[#1E1E2E]/80 text-[11px] text-[#8888A0] leading-relaxed flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${securityAnswers[q.id] === 100 ? 'bg-emerald-400' : securityAnswers[q.id] > 30 ? 'bg-amber-400' : 'bg-[#ef4444]'}`} />
                        <span>
                          <strong className="text-white uppercase font-mono mr-1">Advisory:</strong>
                          {q.options.find(o => o.score === securityAnswers[q.id])?.advisory}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PDF report capture form */}
              <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-5 mt-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-7 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block font-semibold">CIS Framework Compliant Report</span>
                  <h5 className="text-sm font-sans font-medium text-[#F8F8FF]">Download your customized security recommendations PDF</h5>
                  <p className="text-xs text-[#8888A0] leading-normal">
                    Enter your email to receive your score breakdown, complete remediation code snippets, and a free AWS security group checklist for developers.
                  </p>
                </div>

                <div className="md:col-span-5">
                  {secLeadSubmitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded text-xs text-center font-mono">
                      ✓ Audit Blueprint Sent. Check your spam if not received in 3 min.
                    </div>
                  ) : (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!secEmail) return;
                        setSecLeadSubmitted(true);
                        localStorage.setItem('security_checklist_lead', secEmail);
                      }}
                      className="flex space-x-2"
                    >
                      <input
                        id="security-lead-email"
                        type="email"
                        required
                        placeholder="Security or Lead Architect Email"
                        value={secEmail}
                        onChange={(e) => setSecEmail(e.target.value)}
                        className="flex-1 bg-[#111118] border border-[#1E1E2E] rounded text-xs p-2.5 text-white outline-none focus:border-[#4F6EF7]"
                      />
                      <button
                        id="btn-sub-sec-lead"
                        type="submit"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-4 py-2.5 rounded font-medium shrink-0 transition-transform cursor-pointer"
                      >
                        Export Report
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Infrastructure Audit Guide download */}
          {activeTab === 'guide' && (
            <motion.div
              key="guide-checker"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="max-w-2xl mx-auto py-4 space-y-6 text-center flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded bg-[#4F6EF7]/10 flex items-center justify-center text-[#4F6EF7] mb-2 border border-[#4F6EF7]/20">
                <FileDown className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-sans font-semibold text-[#F8F8FF] tracking-tight">The Startup Infrastructure Audit Guide (PDF)</h4>
                <p className="text-sm text-[#8888A0] max-w-lg leading-relaxed">
                  Our comprehensive, battle-tested 48-page operations guide used by AWS security architects. Learn how to configure robust IAM boundaries, map scalable VPC layouts, structure clean Terraform variables, and downsize databases securely.
                </p>
              </div>

              {guideSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-md text-xs font-mono max-w-md w-full">
                  <span className="font-semibold block mb-0.5">✓ REGISTRATION SUCCESSFUL</span>
                  The download link has been sent to your developer inbox. Check your emails.
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!guideForm.email || !guideForm.name) return;
                    setGuideSubmitted(true);
                    localStorage.setItem('guide_registered_lead', JSON.stringify(guideForm));
                  }}
                  className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-5 w-full max-w-md space-y-3 text-left"
                >
                  <span className="text-[10px] font-mono text-[#8888A0] uppercase block">Provide credentials to get absolute link</span>
                  
                  <div className="space-y-1">
                    <label htmlFor="guide-name" className="text-[10px] font-mono text-[#8888A0]">Full Name</label>
                    <input
                      id="guide-name"
                      type="text"
                      required
                      placeholder="e.g. Gilfoyle"
                      value={guideForm.name}
                      onChange={(e) => setGuideForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#111118] border border-[#1E1E2E] rounded text-xs p-2 focus:border-[#4F6EF7] text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="guide-email" className="text-[10px] font-mono text-[#8888A0]">Developer Email</label>
                    <input
                      id="guide-email"
                      type="email"
                      required
                      placeholder="e.g. gilfoyle@piedpiper.com"
                      value={guideForm.email}
                      onChange={(e) => setGuideForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#111118] border border-[#1E1E2E] rounded text-xs p-2 focus:border-[#4F6EF7] text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="guide-company" className="text-[10px] font-mono text-[#8888A0]">Company</label>
                    <input
                      id="guide-company"
                      type="text"
                      required
                      placeholder="Pied Piper Inc."
                      value={guideForm.company}
                      onChange={(e) => setGuideForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full bg-[#111118] border border-[#1E1E2E] rounded text-xs p-2 focus:border-[#4F6EF7] text-white outline-none"
                    />
                  </div>

                  <button
                    id="btn-download-guide"
                    type="submit"
                    className="w-full mt-4 bg-[#4F6EF7] hover:bg-[#4d69eb] font-semibold text-white text-xs py-3 rounded-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Download Comprehensive Guide (4.8MB)</span>
                    <FileDown className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
