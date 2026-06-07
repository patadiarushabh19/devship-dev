/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Coins, HardHat, TrendingDown, Hourglass, HelpCircle, FileCheck, ShieldAlert } from 'lucide-react';

export default function CostCalculator() {
  const [awsSpend, setAwsSpend] = useState<number>(8500); // monthly AWS bill in USD
  const [devOpsHours, setDevOpsHours] = useState<number>(15); // hours spent on infra by existing team per week

  // Calculated Metrics
  const estimatedAwsSavings = Math.round(awsSpend * 0.42); // Average 42% immediate optimization
  const yearAwsSavings = estimatedAwsSavings * 12;

  // Reclaimed engineer hours value (Assumed average hourly cost of standard fullstack developer is $85)
  const monthlyDevHoursReclaimed = Math.round(devOpsHours * 4.3);
  const developerValueReclaimed = Math.round(monthlyDevHoursReclaimed * 85);
  const yearDeveloperValue = developerValueReclaimed * 12;

  const totalDevShipBenefit = estimatedAwsSavings + developerValueReclaimed;
  const devshipPlanCost = awsSpend <= 5000 ? 2900 : awsSpend <= 20000 ? 4900 : 8900; 
  const pureNetSavings = totalDevShipBenefit - devshipPlanCost;

  return (
    <div className="w-full bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 md:p-8 shadow-2xl space-y-6">
      <div className="border-b border-[#1E1E2E] pb-4">
        <div className="flex items-center space-x-2">
          <Coins className="w-4 h-4 text-[#4F6EF7]" />
          <span className="text-xs font-mono text-[#8888A0] uppercase tracking-wider font-semibold">TCO ROI Analytics</span>
        </div>
        <h3 className="text-lg font-sans font-medium text-[#F8F8FF] mt-1">Calculate Your DevOps Resource Bleed</h3>
        <p className="text-xs text-[#8888A0]">Quantify the hidden overhead of engineering hours spent on cloud overhead rather than feature velocity.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Interactive Sliders */}
        <div className="space-y-6">
          {/* Slider 1: Monthly AWS Spend */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="range-aws-spend" className="text-xs font-mono text-[#8888A0] uppercase">Monthly AWS Cloud Spend</label>
              <span className="text-sm font-mono text-[#F8F8FF] font-semibold">${awsSpend.toLocaleString()} USD</span>
            </div>
            <input
              id="range-aws-spend"
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={awsSpend}
              onChange={(e) => setAwsSpend(Number(e.target.value))}
              className="w-full h-1 bg-[#1E1E2E] rounded-lg appearance-none cursor-pointer accent-[#4F6EF7]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8888A0]">
              <span>$1,000</span>
              <span>$25,000</span>
              <span>$50k+</span>
            </div>
          </div>

          {/* Slider 2: DevOps hours spent by product devs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="range-devops-hours" className="text-xs font-mono text-[#8888A0] uppercase">Hours/Week Your Team Spends on infrastructure</label>
              <span className="text-sm font-mono text-[#F8F8FF] font-semibold">{devOpsHours} hours/week</span>
            </div>
            <input
              id="range-devops-hours"
              type="range"
              min="2"
              max="40"
              step="1"
              value={devOpsHours}
              onChange={(e) => setDevOpsHours(Number(e.target.value))}
              className="w-full h-1 bg-[#1E1E2E] rounded-lg appearance-none cursor-pointer accent-[#4F6EF7]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8888A0]">
              <span>2 hours (Minor Config)</span>
              <span>20 hours (Part-time support)</span>
              <span>40 hours (Full-time leak)</span>
            </div>
          </div>

          {/* Critical Risk Banner if hours exceed 15 */}
          {devOpsHours >= 15 && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3.5 flex items-start space-x-3 text-red-400">
              <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold font-mono block mb-0.5">HIGH RESOURCE BLEED WARNING</span>
                Your product developers are spending equivalent to <strong className="text-white">{(devOpsHours / 40 * 100).toFixed(0)}% of a full-scale hire</strong> on devops config. Uptime vulnerabilities and pipeline bottlenecks increase exponentially inside this allocation.
              </div>
            </div>
          )}

          {devOpsHours < 15 && (
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-md p-3.5 flex items-start space-x-3 text-amber-500">
              <FileCheck className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs font-mono">
                Early-stage optimization opportunity. Restructuring AWS pipelines now secures automated scaling paths before product-market bottlenecks disrupt growth.
              </div>
            </div>
          )}
        </div>

        {/* Dynamic calculation results */}
        <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#8888A0] uppercase block">Monthly Capital Reclaimed</span>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111118] border border-[#1E1E2E] p-3 rounded-md space-y-1">
                <div className="flex items-center space-x-1">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-mono text-[#8888A0] uppercase">Bill Saved</span>
                </div>
                <span className="text-lg font-mono text-[#F8F8FF] font-semibold">${estimatedAwsSavings.toLocaleString()}</span>
                <span className="text-[9px] font-mono text-[#8888A0] block">-${yearAwsSavings.toLocaleString()}/yr</span>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] p-3 rounded-md space-y-1">
                <div className="flex items-center space-x-1">
                  <Hourglass className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[10px] font-mono text-[#8888A0] uppercase font-semibold">Dev Time Restored</span>
                </div>
                <span className="text-lg font-mono text-[#F8F8FF] font-semibold">${developerValueReclaimed.toLocaleString()}</span>
                <span className="text-[9px] font-mono text-[#8888A0] block">${yearDeveloperValue.toLocaleString()}/yr reclaimed</span>
              </div>
            </div>

            {/* Total Combined savings bar */}
            <div className="border-t border-[#1E1E2E] pt-4 mt-2">
              <div className="flex justify-between text-xs font-mono text-[#8888A0] mb-1">
                <span>Monthly Reclaimed Resource Output</span>
                <span className="text-emerald-400 font-semibold">${totalDevShipBenefit.toLocaleString()} / mo</span>
              </div>
              <div className="w-full bg-[#1E1E2E] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[70%]" />
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-[#1E1E2E] flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#111118]/50 p-3 rounded-md">
            <div>
              <span className="text-[9px] text-[#8888A0] uppercase font-mono block">DevShip Recommended Tier</span>
              <span className="text-xs font-mono text-[#F8F8FF] font-semibold">
                {awsSpend <= 5000 ? 'Starter Plan ($2,900/mo)' : awsSpend <= 20000 ? 'Growth Plan ($4,900/mo)' : 'Scale Plan ($8,900/mo)'}
              </span>
            </div>
            
            <button
              onClick={() => {
                document.getElementById('scheduler-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-center bg-[#4F6EF7] hover:bg-[#4d69eb] font-medium text-white text-xs px-4 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer"
            >
              Claim Your Bill Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
