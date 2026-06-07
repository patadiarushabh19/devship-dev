/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ShieldCheck, Check, Clock, Phone, AlertCircle } from 'lucide-react';
import Scheduler from '../components/Scheduler';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    provider: 'aws',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      alert('Please fill out all required credentials.');
      return;
    }
    // Perform simulated save to localStorage
    const savedSubmission = {
      ...formData,
      formType: 'general_contact_form',
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('devship_contact_inquiry', JSON.stringify(savedSubmission));
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Intro Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3 pt-12">
        <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">Continuous Communication</span>
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">Initiate Operational Audit</h1>
        <p className="text-sm text-[#8888A0] leading-relaxed">
          Book your AWS cloud overview immediately using our interactive scheduler, or drop general operational specifications to our engineering team.
        </p>
      </section>

      {/* Main Grid: Scheduler vs Contact Form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Span 7: Interactive Scheduler Workspace */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono text-[#F8F8FF] uppercase tracking-wider block font-semibold">Priority calendar scheduling</span>
          <Scheduler />
        </div>

        {/* Right Span 5: Minimal Form & Creds */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6.5 space-y-6">
            <span className="text-[10px] font-mono text-[#8888A0] uppercase tracking-wider block font-bold">Email General Enquiry</span>
            
            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-lg text-center space-y-3 font-mono text-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold block text-[#F8F8FF] uppercase">Message Logged Successfully</span>
                  <span className="text-zinc-400">Our Solutions engineering advocates will review the query and contact you at <strong className="text-white">{formData.email}</strong>.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="space-y-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label htmlFor="input-contact-name" className="text-[#8888A0] uppercase block">Full Name*</label>
                  <input
                    id="input-contact-name"
                    type="text"
                    required
                    name="name"
                    placeholder="e.g. Richard Hendricks"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-xs text-[#F8F8FF] outline-none focus:border-[#4F6EF7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-contact-email" className="text-[#8888A0] uppercase block">Developer Email*</label>
                  <input
                    id="input-contact-email"
                    type="email"
                    required
                    name="email"
                    placeholder="e.g. rhendricks@piedpiper.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-xs text-[#F8F8FF] outline-none focus:border-[#4F6EF7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-contact-company" className="text-[#8888A0] uppercase block">Company Name*</label>
                  <input
                    id="input-contact-company"
                    type="text"
                    required
                    name="company"
                    placeholder="e.g. Pied Piper"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-xs text-[#F8F8FF] outline-none focus:border-[#4F6EF7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="select-contact-provider" className="text-[#8888A0] uppercase block">Current Cloud Provider</label>
                  <select
                    id="select-contact-provider"
                    name="provider"
                    value={formData.provider}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-xs text-[#F8F8FF] outline-none focus:border-[#4F6EF7]"
                  >
                    <option value="aws">AWS (Amazon Web Services)</option>
                    <option value="heroku">Heroku</option>
                    <option value="vercel">Vercel / Netlify</option>
                    <option value="gcp">Google Cloud Platform</option>
                    <option value="multi">Multi-cloud / Non-cloud</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="textarea-contact-message" className="text-[#8888A0] uppercase block">Operational Message / Objective*</label>
                  <textarea
                    id="textarea-contact-message"
                    required
                    name="message"
                    rows={4}
                    placeholder="e.g., We require custom Terraform modules for multi-AZ Aurora setups or need security keys rotation."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-xs text-[#F8F8FF] outline-none focus:border-[#4F6EF7] leading-relaxed"
                  />
                </div>

                <button
                  id="btn-submit-contact"
                  type="submit"
                  className="w-full bg-[#4F6EF7] hover:bg-[#4d69eb] text-white font-sans font-semibold py-3 rounded-lg transition-all text-center cursor-pointer text-xs"
                >
                  Deliver Message to Operations
                </button>
              </form>
            )}
          </div>

          {/* Quick SLA Specs panel */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#8888A0] uppercase block font-semibold leading-none">Global Operations Contacts</span>
            
            <div className="space-y-3.5 text-xs text-[#8888A0]">
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#4F6EF7] shrink-0" />
                <span>Clear escalation paths and structured engineering support</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#4F6EF7] shrink-0" />
                <span>General routing queue: operations@devship.engineering</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#4F6EF7] shrink-0" />
                <span>PGP encryption security keys available on file upon request.</span>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
