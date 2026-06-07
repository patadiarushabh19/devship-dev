/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Server, Activity, DollarSign, Database, Shield, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MOCK_LOGS_UNOPTIMIZED = [
  "[warning] EC2 instance i-0af18c3938b29f9cf peak CPU < 2.5% over last 30 days. Recommend downsizing.",
  "[warning] EBS Volume vol-032a4ae39f9bbf231 (1000GB GP2) attached to inactive instance. Idle waste.",
  "[danger] Security Group 'sg-default-03fa' allows unrestricted ingress (0.0.0.0/0) to TCP Port 22 (SSH).",
  "[info] RDS database 'prod-db-replica' running Multi-AZ in dev subnet. Redundant replication overhead.",
  "[warning] S3 bucket 'assets-archive' has no lifecycle expiration policies. 4.2TB of uncompressed raw logs.",
  "[warning] NAT Gateway nat-08fc782a9db3f1 routed 3,240 GB of analytics traffic to S3... incurring $145.80 data charges.",
  "[critical] IAM user 'deploy-key' has admin-level policy attached directly instead of assuming cross-account role."
];

const MOCK_LOGS_OPTIMIZED = [
  "[info] Init terraform backend connection... [SUCCESS]",
  "[info] Applied VPC S3 Gateways. Redirected internal analytical logs via private route. NAT costs optimized.",
  "[info] Migrating EBS volumes from GP2 to GP3... Status: Complete [100% Volume Group]",
  "[info] Downsized underutilized EC2 instances into a serverless AWS ECS Fargate Task Definition.",
  "[info] Enforced strict Principal IAM checks. Rotated non-active infrastructure API keys.",
  "[info] Audited S3 archives. Mounted lifecycle policies. Compressed and migrated old logs to S3 Glacier Deep Archive.",
  "[success] Deployment Pipeline Optimized | Drift Reduced to 0 | AWS Infrastructure Continuous Optimization Applied."
];

export default function DashboardMockup() {
  const [isOptimized, setIsOptimized] = useState(true);
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isPipelinesActive, setIsPipelinesActive] = useState(true);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Rotate logs over time
  useEffect(() => {
    const activeList = isOptimized ? MOCK_LOGS_OPTIMIZED : MOCK_LOGS_UNOPTIMIZED;
    setLogs(activeList.slice(0, activeLogIndex + 1));
  }, [isOptimized, activeLogIndex]);

  useEffect(() => {
    setActiveLogIndex(0);
  }, [isOptimized]);

  useEffect(() => {
    if (!isPipelinesActive) return;

    const interval = setInterval(() => {
      const activeList = isOptimized ? MOCK_LOGS_OPTIMIZED : MOCK_LOGS_UNOPTIMIZED;
      setActiveLogIndex((prev) => {
        if (prev < activeList.length - 1) {
          return prev + 1;
        }
        return prev; // hold at the end
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isPipelinesActive, isOptimized]);

  const resetPipeline = () => {
    setActiveLogIndex(0);
    setIsPipelinesActive(true);
  };

  return (
    <div className="w-full bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-hidden shadow-2xl">
      {/* Visual Workspace Bar */}
      <div className="bg-[#0A0A0F] border-b border-[#1E1E2E] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 bg-red-500/80 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-yellow-500/80 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-emerald-500/80 rounded-full inline-block"></span>
          </div>
          <span className="ml-3 font-mono text-xs text-[#8888A0] tracking-tight">devship-infra-monitor-v2.0</span>
        </div>

        {/* State Toggle for Legacy vs Optimized */}
        <div className="flex items-center bg-[#1E1E2E] rounded-lg p-1">
          <button
            id="btn-legacy-infra"
            onClick={() => { setIsOptimized(false); }}
            className={`px-3 py-1 font-mono text-xs rounded-md transition-all ${
              !isOptimized 
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                : 'text-[#8888A0] hover:text-white'
            }`}
          >
            Legacy AWS Setup
          </button>
          <button
            id="btn-optimized-infra"
            onClick={() => { setIsOptimized(true); }}
            className={`px-3 py-1 font-mono text-xs rounded-md transition-all ${
              isOptimized 
                ? 'bg-[#4F6EF7]/20 text-[#4F6EF7] border border-[#4F6EF7]/40' 
                : 'text-[#8888A0] hover:text-white'
            }`}
          >
            DevShip Optimized
          </button>
        </div>
      </div>

      {/* Main Grid UI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#1E1E2E]">
        {/* Core Metrics Widgets */}
        <div className="lg:col-span-4 p-5 bg-[#111118] flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-sans font-medium text-[#F8F8FF] tracking-tight">Financial Health</h3>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isOptimized ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
              {isOptimized ? 'Cost Efficient' : 'Waste Detected'}
            </span>
          </div>

          <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-4 space-y-2">
            <span className="text-xs font-mono text-[#8888A0]">AWS Current Monthly Spend</span>
            <div className="flex items-baseline space-x-2">
              <span className={`text-2xl font-mono tracking-tight font-bold transition-all ${isOptimized ? 'text-emerald-400' : 'text-rose-500'}`}>
                ${isOptimized ? '1,895' : '5,420'}
              </span>
              <span className="text-[10px] text-[#8888A0] font-mono">/ month</span>
            </div>
            {isOptimized && (
              <span className="text-xs text-emerald-400/90 font-mono block">
                ✓ Saved $3,525/mo (65% off)
              </span>
            )}
          </div>

          {/* Infrastructure Health SLA and Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-3">
              <div className="flex items-center space-x-1 mb-1">
                <Activity className="w-3.5 h-3.5 text-[#4F6EF7]" />
                <span className="text-[10px] font-mono text-[#8888A0]">Platform Stability</span>
              </div>
              <span className={`text-base font-mono font-semibold ${isOptimized ? 'text-[#F8F8FF]' : 'text-amber-400'}`}>
                {isOptimized ? 'Stable' : 'Risk Drift'}
              </span>
            </div>

            <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-3">
              <div className="flex items-center space-x-1 mb-1">
                <Zap className="w-3.5 h-3.5 text-[#4F6EF7]" />
                <span className="text-[10px] font-mono text-[#8888A0]">Deploy DX</span>
              </div>
              <span className={`text-base font-mono font-semibold ${isOptimized ? 'text-[#F8F8FF]' : 'text-amber-400'}`}>
                {isOptimized ? '1.8 min' : '22.5 min'}
              </span>
            </div>
          </div>

          {/* Security Compliance Score */}
          <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-4 space-y-2 flex-grow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-[#4F6EF7]" />
                <span className="text-xs font-mono text-[#8888A0]">CIS Benchmark Score</span>
              </div>
              <span className={`text-xs font-mono ${isOptimized ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isOptimized ? '98%' : '44%'}
              </span>
            </div>

            <div className="w-full bg-[#1E1E2E] h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full rounded-full ${isOptimized ? 'bg-emerald-500' : 'bg-red-500'}`}
                initial={{ width: '44%' }}
                animate={{ width: isOptimized ? '98%' : '44%' }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <span className="text-[10px] font-mono text-[#8888A0] block leading-tight">
              {isOptimized 
                ? 'All IAM users rotated. CloudTrail secure pipelines mapped. KMS Encryption enforced across S3 and RDS.'
                : 'Over-privileged IAM user API keys stored. Ingress ports open on legacy servers.'
              }
            </span>
          </div>
        </div>

        {/* Live Active Infrastructure Node Diagram Visual */}
        <div className="lg:col-span-5 p-5 bg-[#111118] flex flex-col justify-between border-t lg:border-t-0 border-[#1E1E2E]">
          <div>
            <span className="text-xs font-mono text-[#8888A0] block mb-3">Enterprise Cloud Architecture</span>
            <div className="relative py-4 px-2 bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg flex flex-col items-center justify-center space-y-4 min-h-[220px]">
              
              {/* Route 53 Gateway */}
              <div className="relative z-10 w-44 bg-[#111118] border border-[#1E1E2E] p-1.5 rounded-md text-center flex items-center justify-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
                <span className="text-[10px] font-mono text-[#F8F8FF] tracking-tight">Route 53 CNAME Gateway</span>
              </div>

              {/* Connected Connector Line */}
              <div className="w-px h-6 bg-[#1E1E2E]"></div>

              {/* ALB Layer */}
              <div className="relative z-10 w-44 bg-[#111118] border border-[#1E1E2E] p-1.5 rounded-md text-center flex items-center justify-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full inline-block ${isOptimized ? 'bg-emerald-500' : 'bg-amber-400 animate-pulse'}`}></span>
                <span className="text-[10px] font-mono text-[#F8F8FF] tracking-tight">Application Load Balancer</span>
              </div>

              {/* Grid connectors */}
              <div className="w-px h-6 bg-[#1E1E2E]"></div>

              {/* Subnet Cluster box Wrapper */}
              <div className={`p-3 relative z-10 w-full border ${isOptimized ? 'border-indigo-500/20 bg-indigo-950/5' : 'border-red-500/20 bg-red-950/5'} rounded-lg transition-all`}>
                <div className="absolute top-1 left-2">
                  <span className="text-[8px] font-mono text-[#8888A0]">Isolated Private DevShip VPC</span>
                </div>
                
                <div className="flex justify-around mt-4">
                  {/* ECS Task vs EC2 instances */}
                  <div className={`w-[45%] p-2 rounded-md border flex flex-col items-center justify-center ${isOptimized ? 'border-indigo-500/30 bg-[#111118]' : 'border-amber-500/30 bg-[#111118]'}`}>
                    <Server className={`w-4 h-4 mb-1 ${isOptimized ? 'text-indigo-400' : 'text-amber-400'}`} />
                    <span className="text-[9px] font-mono text-[#F8F8FF] whitespace-nowrap">
                      {isOptimized ? 'ECS Fargate Tasks' : 'EC2 t3.large Host'}
                    </span>
                    <span className="text-[7px] font-mono text-[#8888A0] mt-0.5">
                      {isOptimized ? 'Scale: 2-10 serverless' : 'Uptime Leak (Static)'}
                    </span>
                  </div>

                  {/* RDS / Database */}
                  <div className={`w-[45%] p-2 rounded-md border flex flex-col items-center justify-center ${isOptimized ? 'border-emerald-500/30 bg-[#111118]' : 'border-rose-500/30 bg-[#111118]'}`}>
                    <Database className={`w-4 h-4 mb-1 ${isOptimized ? 'text-emerald-400' : 'text-rose-400'}`} />
                    <span className="text-[9px] font-mono text-[#F8F8FF] whitespace-nowrap">
                      {isOptimized ? 'RDS Aurora Postgre' : 'Bespoke DB Server'}
                    </span>
                    <span className="text-[7px] font-mono text-[#8888A0] mt-0.5">
                      {isOptimized ? 'Serverless Automanaged' : 'Unencrypted Local'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] font-mono text-[#8888A0] leading-normal pt-2">
            {isOptimized 
              ? '★ High Performance setup. Highly available, auto-scaling, completely automated via isolated private Terraform.'
              : '⚠ Heavy single point of failure risk. Over-allocated EC2 resources running constant idle state, high backup risk.'
            }
          </p>
        </div>

        {/* Console Infrastructure Operations Output */}
        <div className="lg:col-span-3 p-5 bg-[#0A0A0F] border-t lg:border-t-0 lg:border-l border-[#1E1E2E] flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#8888A0]">Automation CLI Logs</span>
              <div className="flex items-center space-x-2">
                <button 
                  id="btn-play-pause-logs"
                  onClick={() => setIsPipelinesActive(!isPipelinesActive)}
                  className="text-[#8888A0] hover:text-white transition-colors"
                  title={isPipelinesActive ? "Pause Pipeline Pipeline" : "Resume Pipeline Pipeline"}
                >
                  <Play className={`w-3.5 h-3.5 ${isPipelinesActive ? 'text-emerald-400 animate-pulse' : 'text-[#8888A0]'}`} />
                </button>
                <button 
                  id="btn-reset-logs"
                  onClick={resetPipeline}
                  className="text-[#8888A0] hover:text-white transition-colors"
                  title="Reset CLI Sequence"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Simulated interactive black Terminal */}
            <div 
              ref={logContainerRef}
              className="bg-[#040406] border border-[#1E1E2E] rounded p-3 h-56 overflow-y-auto font-mono text-[9px] leading-relaxed space-y-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
            >
              {logs.map((log, index) => {
                let colorClass = 'text-gray-400';
                if (log.includes('[warning]')) colorClass = 'text-amber-400';
                if (log.includes('[danger]') || log.includes('[critical]')) colorClass = 'text-rose-500 font-semibold';
                if (log.includes('[success]')) colorClass = 'text-emerald-400 font-semibold';
                if (log.includes('[info]')) colorClass = 'text-blue-400';

                return (
                  <div key={index} className="transition-all duration-300">
                    <span className="text-[#8888A0] mr-1">$</span>
                    <span className={colorClass}>{log}</span>
                  </div>
                );
              })}
              {isPipelinesActive && activeLogIndex < (isOptimized ? MOCK_LOGS_OPTIMIZED.length : MOCK_LOGS_UNOPTIMIZED.length) - 1 && (
                <div id="logs-loading-indicator" className="text-indigo-400 flex items-center space-x-1 animate-pulse">
                  <span>❯</span>
                  <span className="w-1.5 h-3.5 bg-indigo-400 inline-block"></span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3">
            <span className="text-[10px] font-mono text-[#8888A0] block mb-1">Infrastructure Provisioning Status</span>
            <div className="flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full inline-block ${isOptimized ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500 animate-pulse'}`}></span>
              <span className="text-xs font-mono text-[#F8F8FF]">
                {isOptimized ? 'Healthy & Optimized' : 'Needs Optimization Cloud Audit'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
