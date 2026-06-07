/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Check, ArrowRight, ShieldCheck, Video, HelpCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TIMEZONES = [
  { value: 'America/New_York', label: 'Eastern Standard Time (EST)' },
  { value: 'Europe/London', label: 'London GMT' },
  { value: 'America/Vancouver', label: 'Pacific Standard Time (PST)' },
  { value: 'Australia/Sydney', label: 'Sydney AEST' }
];

const TIME_SLOTS = [
  { id: '1', label: '09:00 AM', utcOffset: -4 },
  { id: '2', label: '10:30 AM', utcOffset: -4 },
  { id: '3', label: '11:00 AM', utcOffset: -4 },
  { id: '4', label: '01:30 PM', utcOffset: -4 },
  { id: '5', label: '02:00 PM', utcOffset: -4 },
  { id: '6', label: '03:30 PM', utcOffset: -4 },
  { id: '7', label: '04:00 PM', utcOffset: -4 }
];

export default function Scheduler() {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Date/Time, 2: Details Form, 3: Completed State
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedTimezone, setSelectedTimezone] = useState<string>('America/New_York');

  // Contact Details
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cloudProvider: 'aws',
    monthlySpend: '$5k - $20k',
    objective: 'Cost Optimization',
    message: ''
  });

  // Calculate next 10 business days for the calendar starting from local current time 2026-06-07
  const getNextBusinessDays = () => {
    const days = [];
    const current = new Date('2026-06-07T08:10:36Z'); // Fixed UTC mock date based on metadata context
    
    let added = 0;
    while (added < 10) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // skip Sat, Sun
        const dayStr = current.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const valStr = current.toISOString().split('T')[0];
        days.push({ label: dayStr, value: valStr });
        added++;
      }
    }
    return days;
  };

  const businessDays = getNextBusinessDays();

  // Populate first available date automatically
  if (!selectedDate && businessDays.length > 0) {
    setSelectedDate(businessDays[0].value);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const executeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      alert('Please fill out all required fields.');
      return;
    }
    // Perform simulated save to localStorage
    const savedBooking = {
      ...formData,
      date: selectedDate,
      time: TIME_SLOTS.find(t => t.id === selectedSlot)?.label || '09:00 AM',
      timezone: selectedTimezone,
      bookedAt: new Date().toISOString()
    };
    localStorage.setItem('devship_booked_audit', JSON.stringify(savedBooking));
    setStep(3);
  };

  const progressToForm = () => {
    if (!selectedSlot) {
      alert('Please select a preferred meeting time slot to proceed.');
      return;
    }
    setStep(2);
  };

  return (
    <div className="w-full bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-hidden shadow-2xl relative">
      {/* Decorative top strip */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-[#4F6EF7] to-indigo-600"></div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step-calendar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 md:p-8 space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E1E2E] pb-5">
              <div>
                <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-wider font-semibold">Step 1 of 2</span>
                <h3 className="text-xl font-sans font-medium text-[#F8F8FF] tracking-tight mt-1">Book Your Free AWS Infrastructure Audit</h3>
                <p className="text-sm text-[#8888A0] mt-1">Select a business day and secure 30-minute workspace review.</p>
              </div>

              {/* Timezone picker */}
              <div className="flex flex-col">
                <label className="text-[10px] font-mono text-[#8888A0] uppercase mb-1">Your Timezone</label>
                <select
                  id="select-timezone"
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="bg-[#0A0A0F] border border-[#1E1E2E] rounded text-xs text-[#F8F8FF] p-2 focus:border-[#4F6EF7] outline-none"
                >
                  {TIMEZONES.map(z => (
                    <option key={z.value} value={z.value}>{z.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick benefits strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#0A0A0F] p-4 rounded-lg border border-[#1E1E2E]/80">
              <div className="flex items-center space-x-2 text-xs text-[#8888A0]">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-minute high-signal video call</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#8888A0]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDA protected prior to review</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#8888A0]">
                <Video className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google Meet link provided</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Day selection */}
              <div>
                <span className="text-xs font-mono text-[#8888A0] uppercase block mb-3">Available Business Days</span>
                <div className="grid grid-cols-2 gap-2">
                  {businessDays.map(day => (
                    <button
                      id={`day-select-${day.value}`}
                      key={day.value}
                      onClick={() => setSelectedDate(day.value)}
                      className={`p-3 text-left rounded-lg text-xs font-mono border transition-all ${
                        selectedDate === day.value 
                          ? 'bg-[#4F6EF7]/10 border-[#4F6EF7] text-white font-semibold' 
                          : 'bg-[#0A0A0F] border-[#1E1E2E] text-[#8888A0] hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <span className="block text-[10px] text-[#8888A0] font-normal mb-0.5">
                        {selectedDate === day.value ? '● Selected' : 'Available'}
                      </span>
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slots selection */}
              <div>
                <span className="text-xs font-mono text-[#8888A0] uppercase block mb-3">Available Time Slots ({selectedTimezone.split('/')[1]?.replace('_', ' ')})</span>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map(slot => (
                    <button
                      id={`slot-select-${slot.id}`}
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot.id)}
                      className={`p-3 text-center rounded-lg text-xs font-mono border transition-all ${
                        selectedSlot === slot.id 
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-semibold shadow-inner' 
                          : 'bg-[#0A0A0F] border-[#1E1E2E] text-[#8888A0] hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>

                {!selectedSlot && (
                  <p className="text-xs text-[#8888A0] italic mt-4 text-center">
                    Please click a green highlighted slot to map your schedule.
                  </p>
                )}
              </div>
            </div>

            {/* Complete calendar validation section */}
            <div className="flex justify-between items-center border-t border-[#1E1E2E] pt-5">
              <div className="text-xs text-[#8888A0]">
                {selectedDate && selectedSlot ? (
                  <span>
                    Selected: <strong className="text-[#F8F8FF] font-mono">{businessDays.find(d => d.value === selectedDate)?.label}</strong> at <strong className="text-emerald-400 font-mono">{TIME_SLOTS.find(t => t.id === selectedSlot)?.label}</strong>
                  </span>
                ) : (
                  <span>Pick date and time to continue.</span>
                )}
              </div>
              <button
                id="btn-confirm-date-time"
                onClick={progressToForm}
                disabled={!selectedDate || !selectedSlot}
                className="bg-[#4F6EF7] hover:bg-[#4d69eb] disabled:opacity-50 disabled:hover:bg-[#4F6EF7] text-white text-xs font-medium px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>Enter Company Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step-details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 md:p-8"
          >
            <div className="flex items-center justify-between border-b border-[#1E1E2E] pb-5 mb-5">
              <div>
                <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-wider font-semibold">Step 2 of 2</span>
                <h3 className="text-xl font-sans font-medium text-[#F8F8FF] tracking-tight mt-1">Who Are We Auditing AWS For?</h3>
                <p className="text-sm text-[#8888A0]">Provide technical metrics so we can analyze before our slot.</p>
              </div>
              <button 
                onClick={() => setStep(1)} 
                className="text-xs text-[#8888A0] hover:text-white flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            </div>

            {/* Main Details Form */}
            <form onSubmit={executeSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-xs font-mono text-[#8888A0] uppercase block">Your Full Name*</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    name="name"
                    placeholder="e.g. Richard Hendricks"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-xs font-mono text-[#8888A0] uppercase block">Developer Email*</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    name="email"
                    placeholder="e.g. rhendricks@piedpiper.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="company-input" className="text-xs font-mono text-[#8888A0] uppercase block">Company Name*</label>
                  <input
                    id="company-input"
                    type="text"
                    required
                    name="company"
                    placeholder="e.g. Pied Piper"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="objective-select" className="text-xs font-mono text-[#8888A0] uppercase block">Main Objective</label>
                  <select
                    id="objective-select"
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                  >
                    <option value="Cost Optimization">Fix AWS Costs (40-70% reduction)</option>
                    <option value="Cloud Migration">Migrate from Heroku / Vercel to AWS</option>
                    <option value="Greenfield Setup">Secure Architecture Setup (5 Days)</option>
                    <option value="CI/CD Infrastructure">Optimize CI/CD Pipelines & SLOs</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="provider-select" className="text-xs font-mono text-[#8888A0] uppercase block">Current Cloud Provider</label>
                  <select
                    id="provider-select"
                    name="cloudProvider"
                    value={formData.cloudProvider}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                  >
                    <option value="aws">AWS (Amazon Web Services)</option>
                    <option value="heroku">Heroku</option>
                    <option value="vercel">Vercel / Netlify</option>
                    <option value="gcp">Google Cloud Platform</option>
                    <option value="multi">Multi-cloud / Non-cloud</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="spend-select" className="text-xs font-mono text-[#8888A0] uppercase block">Estimated AWS Monthly Spend</label>
                  <select
                    id="spend-select"
                    name="monthlySpend"
                    value={formData.monthlySpend}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                  >
                    <option value="< $2k">&lt; $2,000 USD / month</option>
                    <option value="$2k - $5k">$2,000 - $5,000 USD / month</option>
                    <option value="$5k - $20k">$5,000 - $20,000 USD / month</option>
                    <option value="$20k - $50k">$20,000 - $50,000 USD / month</option>
                    <option value="$50k+">$50,000+ USD / month</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message-textarea" className="text-xs font-mono text-[#8888A0] uppercase block">Infrastructure context / special pain points</label>
                <textarea
                  id="message-textarea"
                  name="message"
                  rows={2}
                  placeholder="e.g., We have high ECS spend we cannot trace, or deployment failures in ECS Fargate tasks with no logs."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded p-2.5 text-sm text-[#F8F8FF] focus:border-[#4F6EF7] outline-none"
                />
              </div>

              <div className="flex md:items-center space-x-2 text-xs text-[#8888A0] bg-[#0A0A0F] p-3 rounded border border-[#1E1E2E]/80 mt-4">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>DevShip respects privacy. We sign full-security enterprise NDAs on your first request and never share account telemetry.</span>
              </div>

              <div className="flex justify-end pt-5 border-t border-[#1E1E2E]">
                <button
                  id="btn-submit-booking"
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 font-medium text-white text-xs px-6 py-3 rounded-lg flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span className="font-semibold">Confirm AWS Audit Slot</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step-complete"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <Check className="w-8 h-8" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold block">Audit Call Confirmed</span>
              <h3 className="text-2xl font-sans font-medium text-[#F8F8FF] tracking-tight">Your AWS Security & Cost Audit Is Scheduled</h3>
              <p className="text-sm text-[#8888A0]">
                We are excited to review your cloud stack. Meeting details below have been sent to <strong className="text-white">{formData.email}</strong>.
              </p>
            </div>

            <div className="w-full max-w-lg bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-5 text-left grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-[#8888A0] uppercase block">Meeting Details</span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-[#F8F8FF]">
                    <Clock className="w-4 h-4 text-[#4F6EF7]" />
                    <span>30 Minutes Review</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#F8F8FF]">
                    <CalendarIcon className="w-4 h-4 text-[#4F6EF7]" />
                    <span className="font-mono">
                      {businessDays.find(d => d.value === selectedDate)?.label || 'Selected Date'} at {TIME_SLOTS.find(t => t.id === selectedSlot)?.label || '09:00 AM'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#F8F8FF]">
                    <Video className="w-4 h-4 text-[#4F6EF7]" />
                    <span className="font-mono text-emerald-400 underline decoration-emerald-500/30">meet.google.com/devship-audit-{Math.floor(Math.random() * 900) + 100}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#1E1E2E] pt-4 md:pt-0 md:pl-4">
                <span className="text-[10px] font-mono text-[#8888A0] uppercase block">Preparation Steps</span>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2 text-xs text-[#8888A0]">
                    <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Locate your top AWS bill categories in Cost Explorer.</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-[#8888A0]">
                    <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Verify that your core infrastructure is fully in git (Terraform/CloudFormation).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-4">
              <button
                id="btn-rebook"
                onClick={() => {
                  setStep(1);
                  setSelectedSlot('');
                }}
                className="text-xs text-[#8888A0] hover:text-[#F8F8FF] border border-[#1E1E2E] px-4 py-2 rounded transition-all"
              >
                Schedule Another Call
              </button>
              <button
                onClick={() => {
                  window.location.hash = '#services';
                  // trigger state routing mechanically or window refresh
                }}
                className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs px-5 py-2 rounded flex items-center space-x-1.5 font-medium transition-all"
              >
                <span>Browse Our Core Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
