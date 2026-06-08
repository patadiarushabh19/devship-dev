/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Coins, HardHat, TrendingDown, Hourglass, FileCheck } from 'lucide-react';

export default function CostCalculator() {
  const [computeSpend, setComputeSpend] = useState<number>(8500); // monthly compute/server bill in USD
  const [devOpsHours, setDevOpsHours] = useState<number>(15); // hours spent on infra by existing team per week

  // Calculated Metrics
  const estimatedComputeSavings = Math.round(computeSpend * 0.42); // Average 42% immediate optimization
  const yearComputeSavings = estimatedComputeSavings * 12;

  // Reclaimed engineer hours value (Assumed average hourly cost of standard fullstack developer is $85)
  const monthlyDevHoursReclaimed = Math.round(devOpsHours * 4.3);
  const developerValueReclaimed = Math.round(monthlyDevHoursReclaimed * 85);
  const yearDeveloperValue = developerValueReclaimed * 12;

  const totalAtlasBenefit = estimatedComputeSavings + developerValueReclaimed;

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
          {/* Slider 1: Monthly Compute Spend */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="range-compute-spend" className="text-xs font-mono text-[#8888A0] uppercase">Monthly Infrastructure Spend</label>
              <span className="text-sm font-mono text-[#F8F8FF] font-semibold">${computeSpend.toLocaleString()} USD</span>
            </div>
            <input
              id="range-compute-spend"
              type="range"
              min="1000"
              max="150000"
              step="1000"
              value={computeSpend}
              onChange={(e) => setComputeSpend(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#1E1E2E] rounded-lg appearance-none cursor-pointer accent-[#4F6EF7]"
            />
            <div className="flex justify-between font-mono text-[9px] text-[#8888A0]">
              <span>$1,000</span>
              <span>$75,000</span>
              <span>$150,000</span>
            </div>
          </div>

          {/* Slider 2: DevOps Hour overhead */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="range-devops-hours" className="text-xs font-mono text-[#8888A0] uppercase">Weekly Team Infrastructure Overhead</label>
              <span className="text-sm font-mono text-[#F8F8FF] font-semibold">{devOpsHours} hrs / wk</span>
            </div>
            <input
              id="range-devops-hours"
              type="range"
              min="2"
              max="80"
              step="1"
              value={devOpsHours}
              onChange={(e) => setDevOpsHours(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#1E1E2E] rounded-lg appearance-none cursor-pointer accent-[#4F6EF7]"
            />
            <div className="flex justify-between font-mono text-[9px] text-[#8888A0]">
              <span>2 hrs (Minimal)</span>
              <span>40 hrs (1 Fulltime)</span>
              <span>80 hrs (2 Fulltime)</span>
            </div>
          </div>

          {/* Dynamic Advisory notice depending on sliders */}
          {devOpsHours >= 15 && (
            <div className="bg-red-500/5 border border-red-500/10 rounded-md p-3.5 flex items-start space-x-3 text-red-400">
              <HardHat className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs font-mono leading-relaxed">
                Your product developers are spending equivalent to <strong className="text-white">{(devOpsHours / 40 * 100).toFixed(0)}% of a full-scale hire</strong> on devops config. Uptime vulnerabilities and pipeline bottlenecks increase exponentially inside this allocation.
              </div>
            </div>
          )}

          {devOpsHours < 15 && (
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-md p-3.5 flex items-start space-x-3 text-amber-500">
              <FileCheck className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs font-mono">
                Early-stage optimization opportunity. Restructuring systems pipelines now secures automated scaling paths before product-market bottlenecks disrupt growth.
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
                <span className="text-lg font-mono text-[#F8F8FF] font-semibold">${estimatedComputeSavings.toLocaleString()}</span>
                <span className="text-[9px] font-mono text-[#8888A0] block">-${yearComputeSavings.toLocaleString()}/yr</span>
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
                <span className="text-emerald-400 font-semibold">${totalAtlasBenefit.toLocaleString()} / mo</span>
              </div>
              <div className="w-full bg-[#1E1E2E] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[70%]" />
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-[#1E1E2E] flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#111118]/50 p-3 rounded-md">
            <div>
              <span className="text-[9px] text-[#8888A0] uppercase font-mono block">Atlas Discovery Engagement</span>
              <span className="text-xs font-sans text-[#F8F8FF] font-semibold">
                Discover, map, and assessment analysis tailored to your footprint.
              </span>
            </div>
            
            <button
              onClick={() => {
                document.getElementById('scheduler-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-center bg-[#4F6EF7] hover:bg-[#4d69eb] font-medium text-white text-xs px-4 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer"
            >
              Book Discovery Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
