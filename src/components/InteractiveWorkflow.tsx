import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, ShieldCheck, Cpu, Layers, Database, Activity, CheckCircle2, 
  ArrowRight, GitBranch, Shield, Zap, RefreshCw, Sparkles, TrendingDown, Eye, AlertCircle
} from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technicalLabel: string;
  checklist: string[];
  metrics: { label: string; value: string; trend?: string }[];
}

export default function InteractiveWorkflow() {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Stage details
  const stages: Stage[] = [
    {
      id: 1,
      title: 'Infrastructure Discovery & Audit',
      subtitle: 'Read-only analysis isolated by secure session limits',
      description: 'We connect safely using read-only API tokens or secure audit tools to inspect server capacity, virtualization structures, container configurations, storage rules, and network topologies.',
      technicalLabel: 'STAGE_01_RESOURCES_AUDIT',
      checklist: [
        'Secure read-only access credential mapping',
        'Analyze host core & RAM utilization ranges',
        'Identify firewall settings & access boundaries',
        'Draft complete architectural footprint map'
      ],
      metrics: [
        { label: 'System Scanners Configured', value: 'Multi-Arch Scanners' },
        { label: 'Cost Inefficiencies Located', value: 'Analyzed Continuously' }
      ]
    },
    {
      id: 2,
      title: 'Architecture Blueprints',
      subtitle: 'Declarative multi-environment topologies mapped for scale',
      description: 'We layout highly isolated virtual networks, custom private segments, private subnets, secure bastion hosts, compute limits, and structure-mapped role boundaries.',
      technicalLabel: 'STAGE_02_TOPOLOGY_BLUEPRINTS',
      checklist: [
        'Secure multi-segment private networks',
        'Configure least-privileged service roles',
        'Establish isolated secure database staging pools',
        'Align network security with industry benchmarks'
      ],
      metrics: [
        { label: 'Environment Segments', value: 'Production / Staging' },
        { label: 'Regulatory Frameworks', value: 'SOC2 & ISO 27001 Aligned' }
      ]
    },
    {
      id: 3,
      title: 'Infrastructure as Code (IaC)',
      subtitle: 'Reproducible declarative definitions via Terraform',
      description: 'Every resource is formatted cleanly into version-controlled, modular files. This eliminates manual mouse-clicking in admin panels and reduces environment drift over time.',
      technicalLabel: 'STAGE_03_DECLARATIVE_TERRAFORM',
      checklist: [
        'Modular atomic infrastructure code templates',
        'Encrypted remote state locked in secure directories',
        'Automated code dry-run validation',
        'PR-driven infrastructure deployments'
      ],
      metrics: [
        { label: 'Asset Modules mapped', value: '18 Modules' },
        { label: 'Configuration Tracking', value: '100% Declarative' }
      ]
    },
    {
      id: 4,
      title: 'CI/CD Deployment Pipelines',
      subtitle: 'GitOps workflows designed to minimize deployment disruption',
      description: 'We transition deployment routines into professional pipelines. Code is packaged, linted, tested, and shipped automatically into container pools using zero-downtime rolling patterns.',
      technicalLabel: 'STAGE_04_DEPLOYMENT_GITOPS',
      checklist: [
        'Continuous integration bundle packaging',
        'Multi-stage Docker builds',
        'Workflows designed to minimize disruption',
        'Automated task rollback on failures'
      ],
      metrics: [
        { label: 'Deployment State', value: 'Fully Automated' },
        { label: 'Interception Protocol', value: 'Automatic Rollback' }
      ]
    },
    {
      id: 5,
      title: 'Monitoring & Scaling Optimization',
      subtitle: 'Continuous health alerts, centralized logs, and optimization guidelines',
      description: 'We configure structured telemetry targeting resource latency, memory patterns, database queues, and traffic spikes, keeping your team updated on resource thresholds.',
      technicalLabel: 'STAGE_05_TELEMETRY_HEALTH',
      checklist: [
        'Real-time CPU/Ram traffic alerts',
        'Unified centralized logging pools',
        'Database cluster scaling thresholds',
        'Ingress controller health checks configured'
      ],
      metrics: [
        { label: 'Recovery Procedures', value: 'Documented Runbooks' },
        { label: 'Infrastructure Health', value: 'Actively Monitored' }
      ]
    }
  ];

  // Intercept scroll/intersection observer to auto-progress
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1
    };

    const blockObservers = stages.map(stg => {
      const el = document.getElementById(`workflow-step-card-${stg.id}`);
      if (!el) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveStage(stg.id);
          }
        });
      }, observerOptions);

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      blockObservers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  // Interval rotation when user is resting and wants automatic system logs display
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev % 5) + 1);
    }, 9000); // 9 seconds per phase
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative bg-[#07070B] border-y border-[#1E1E2E]/80 py-24 overflow-hidden">
      {/* Background Matrix/Dotted Tech Overlay */}
      <div className="absolute inset-0 bg-[#07070B] bg-[linear-gradient(to_right,#141424_1px,transparent_1px),linear-gradient(to_bottom,#141424_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      
      {/* Absolute Decorative Glow Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#4F6EF7]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-4 border-b border-[#1E1E2E]/40">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-mono tracking-tight uppercase">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping shrink-0" />
              <span>DevOps Operational Flow Integration</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight leading-none">
              How Atlas Takes Infrastructure <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Off Your Plate
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#8888A0] max-w-2xl leading-relaxed">
              From audit to production-ready infrastructure, every step is visible, documented, and engineered for reliability.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0 bg-[#11111B] border border-[#1E1E2E] px-3.5 py-2 rounded-lg text-xs font-mono">
            <span className="text-[#8888A0]">Live Demo Simulation:</span>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-2.5 py-1 rounded text-center font-bold tracking-tight uppercase transition-all ${
                isPlaying 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                  : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              {isPlaying ? 'ACTIVE AUTOPLAY' : 'PAUSED'}
            </button>
          </div>
        </div>

        {/* WORKFLOW TRACK NAVIGATION LINE (DESKTOP) */}
        <div className="hidden lg:block relative z-10">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#141424] -translate-y-1/2" />
          
          {/* Active progress indicator line */}
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-indigo-500 transition-all duration-700 ease-in-out -translate-y-1/2" 
            style={{ width: `${((activeStage - 1) / 4) * 100}%` }}
          />

          <div className="grid grid-cols-5 gap-4 relative justify-between">
            {stages.map((stg) => {
              const isActive = activeStage === stg.id;
              const isPassed = activeStage > stg.id;

              return (
                <button
                  key={stg.id}
                  onClick={() => {
                    setActiveStage(stg.id);
                    setIsPlaying(false);
                    document.getElementById(`workflow-step-card-${stg.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="flex flex-col items-center group focus:outline-none pointer-events-auto"
                >
                  {/* Circle Pin node */}
                  <div 
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-[#0A0A10] border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(79,110,247,0.4)] scale-110' 
                        : isPassed 
                        ? 'bg-indigo-500 border-indigo-500 text-[#07070B]' 
                        : 'bg-[#07070B] border-[#1E1E2E] text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-5 h-5" /> : `0${stg.id}`}
                    
                    {/* Visual Ping effect when dynamic stage is active */}
                    {isActive && (
                      <span className="absolute -inset-1.5 border border-indigo-500/40 rounded-full animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Node title */}
                  <span className={`text-[11px] font-mono mt-3 uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-indigo-400 font-bold' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    {stg.title.split(' ')[0]} {stg.title.split(' ')[1] || ''}
                  </span>
                  
                  <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5">
                    {stg.technicalLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN DUAL SPLIT MISSION CONTROL DESK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: STEP FLOW CARDS WITH BENEFITS & SPECS (SCROLLABLE ANCHOR GROUP) */}
          <div ref={scrollContainerRef} className="lg:col-span-5 space-y-6 max-h-[800px] lg:overflow-y-auto pr-0 lg:pr-3 custom-scroll">
            {stages.map((stg) => {
              const isActive = activeStage === stg.id;

              return (
                <div
                  key={stg.id}
                  id={`workflow-step-card-${stg.id}`}
                  onClick={() => {
                    setActiveStage(stg.id);
                    setIsPlaying(false);
                  }}
                  className={`border rounded-xl p-6 transition-all duration-300 cursor-pointer relative ${
                    isActive 
                      ? 'bg-[#11111E] border-indigo-500/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]' 
                      : 'bg-[#111118]/80 border-[#1E1E2E]/60 hover:border-zinc-800 hover:bg-[#111118]'
                  }`}
                >
                  {/* Decorative Stage Number Indicator tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold tracking-widest uppercase">
                      [ NODE_SEQUENCE // 0{stg.id} ]
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isActive 
                        ? 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5' 
                        : 'text-zinc-500 border-zinc-800'
                    }`}>
                      {stg.technicalLabel}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h3 className={`text-base font-sans font-bold transition-colors ${
                      isActive ? 'text-[#F8F8FF]' : 'text-[#8888A0]'
                    }`}>
                      {stg.title}
                    </h3>
                    <p className={`text-[#88888F] text-xs font-mono leading-tight ${isActive ? 'text-[#4F6EF7] font-semibold' : ''}`}>
                      {stg.subtitle}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1 font-sans">
                      {stg.description}
                    </p>
                  </div>

                  {/* Checklist (only fully reveals details when active or on mobile) */}
                  <div className="mt-4 pt-4 border-t border-[#1E1E2E]/60 space-y-2.5">
                    {stg.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start space-x-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isActive ? 'text-indigo-400 animate-pulse' : 'text-zinc-600'}`} />
                        <span className="font-sans leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Nested visual simulation triggers solely for mobile (visible under lg media) */}
                  <div className="lg:hidden mt-6 overflow-hidden">
                    <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-4 overflow-hidden relative">
                      <div className="absolute top-1.5 right-1.5 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest font-bold">SIM ACTIVE</span>
                      </div>
                      <StageVisualsPane stageId={stg.id} />
                    </div>
                  </div>

                  {/* Stage Metrics panel */}
                  <div className="mt-5 pt-3.5 border-t border-[#1E1E2E]/40 grid grid-cols-2 gap-4">
                    {stg.metrics.map((met, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-tight">{met.label}</span>
                        <span className="text-xs font-mono font-bold text-zinc-200 mt-0.5 block flex items-center space-x-1">
                          <span>{met.value}</span>
                          {met.trend === 'down' && (
                            <TrendingDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: THE STICKY "MISSION CONTROL" HIGH FIDELITY SIMULATION TERMINAL (DESKTOP ONLY) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28 self-start bg-[#0D0D14] border border-[#1E1E2E] rounded-xl overflow-hidden shadow-2xl">
            
            {/* Terminal Header */}
            <div className="bg-[#0B0B0F] border-b border-[#22222E]/80 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* Simulated Apple-like control window tags */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                
                <span className="text-[10px] font-mono text-indigo-400 pl-4 uppercase font-bold tracking-widest flex items-center space-x-1.5">
                  <Terminal className="w-3 h-3 text-indigo-400" />
                  <span>DEVSHIP OPS MISSION CONTROL v2.84</span>
                </span>
              </div>

              <div className="flex items-center space-x-3 text-[9px] font-mono text-zinc-500">
                <span className="bg-[#12121E] px-2 py-0.5 border border-[#1E1E2D] rounded uppercase font-bold text-zinc-400 animate-pulse">
                  SIM://NODE_0{activeStage}
                </span>
                <span>LATENCY: 12ms</span>
              </div>
            </div>

            {/* Simulated Live Console view */}
            <div className="p-6 h-[510px] flex flex-col justify-between relative overflow-hidden bg-radial-gradient">
              {/* Inner ambient scanning shadows */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,110,247,0.1),transparent_50%)] pointer-events-none" />

              {/* Top-Right Absolute Floating Metrics Box */}
              <div className="absolute top-4 right-4 bg-[#11111E]/80 border border-[#1E1E2E] rounded p-2.5 space-y-1 z-10 text-[9px] font-mono text-zinc-400 backdrop-blur-sm">
                <div className="flex items-center justify-between space-x-4">
                  <span>HOST_SUBNET:</span>
                  <strong className="text-zinc-200">10.0.1.0/24</strong>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span>STATUS:</span>
                  <strong className="text-emerald-400 uppercase">SYNCHRONIZED</strong>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span>DEPLOYED_BY:</span>
                  <strong className="text-indigo-400">IAC://PIPELINE</strong>
                </div>
              </div>

              {/* Dynamic Animated Core Panels according to stage */}
              <div className="flex-1 flex items-center justify-center pt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex flex-col justify-center"
                  >
                    <StageVisualsPane stageId={activeStage} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal Logs footer ticker streaming in live */}
              <div className="bg-[#08080C] border border-[#1E1E2E] rounded-lg p-3 font-mono text-[10px] space-y-1 relative z-10 overflow-hidden">
                <div className="absolute top-1.5 right-2 text-[8px] text-zinc-600 font-bold uppercase select-none">
                  Telemetry logs
                </div>
                <LogsTicker stageId={activeStage} />
              </div>

            </div>
          </div>

        </div>

        {/* MISSION COMPLETED: FINAL INTEGRATED INFRASTRUCTURE STATE BOARD */}
        <div className="bg-gradient-to-b from-[#11111E] to-[#0A0A12] border border-indigo-500/20 rounded-2xl p-8 max-w-7xl mx-auto space-y-8 relative">
          
          {/* Subtle sparkles ambient node */}
          <div className="absolute -top-3.5 -right-3.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full p-2 text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>

          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl md:text-2xl font-sans font-bold text-[#F8F8FF] tracking-tight">
              Operational Outcomes Completed
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              Proving expertise through disciplined engineering practices and repeatable workflows.
            </p>
          </div>

          {/* Operational Outcomes Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 max-w-5xl mx-auto py-4 border-y border-[#1E1E2E]/60">
            {[
              "Infrastructure Audited",
              "Risks Identified",
              "Infrastructure as Code Established",
              "Deployment Pipeline Operational",
              "Monitoring & Alerting Enabled",
              "Cost Visibility Enabled",
              "Security Controls Implemented",
              "Documentation Delivered",
              "Full Identity Ownership Retained"
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-sans font-medium">{outcome}</span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="workflow-cta-book"
              onClick={() => {
                document.getElementById('scheduler-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-semibold px-8 py-4 rounded-xl flex items-center space-x-2.5 transition-all cursor-pointer shadow-lg shadow-indigo-600/10 pointer-events-auto"
            >
              <span>Book Discovery Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] font-mono text-zinc-500 max-w-sm text-center sm:text-left">
              * Connect securely with standard NDAs. Receive actionable infrastructure optimization and savings analysis.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ========================================================================================
   SUB-COMPONENT: LOGS TICKER SIMULATING REALTIME BACKEND AUDITS & PROCESS STREAMING
   ======================================================================================== */
function LogsTicker({ stageId }: { stageId: number }) {
  const [tickerLines, setTickerLines] = useState<string[]>([]);
  
  const stageLogs: Record<number, string[]> = {
    1: [
      'SYS: Initializing Cross-Account IAM role validation... [PASS]',
      'AUDIT: Multi-AZ discovery triggered targeting cluster node pools...',
      'SCANNER: Isolated oversized ec2.xlarge pools consuming massive static budgets.',
      'SECURITY: Scanning port 22 security gates. Loose SG ingress mapped for amendment.',
      'TALLY: Isolating resource list: [EBS: 147 unassigned, RDS-Aurora: Idle multi-AZ staging].',
      'COMPLETED: Ready for greenfield migration staging branch. Health index: 92% Secure.'
    ],
    2: [
      'SYS: Building target network diagram matching high-reliability patterns...',
      'VPC: Drafting VPC cidr [10.0.0.0/16] inside multi-AZ subnet templates [us-east-1].',
      'IAM: Isolating cross-organizational privileges. Least-privileged access policies configured.',
      'STAGING: Segregating dev / staging / production database replication parameters.',
      'COMPOSER: Drawing topology layers... Production <-> Staging gateway mapped securely.',
      'RESULT: Network architecture blueprints saved to target catalog successfully.'
    ],
    3: [
      'GIT: Merged PR #421 to mainline: devops/greenfield-vpc [APPROVED]',
      'IAC: Standard Terraform module loading initiated on secure state backends...',
      'PLAN: terraform validate... Syntax verification successful. [OK]',
      'SEC: security scanner scanning declarative structures... [0 CVE Alerts Found]',
      'TERRAFORM APPLY: Adding 18 resource modules... Production segment mapped with direct state records.',
      'COMPLETED: Terraform synchronization complete. Drift tracker operational: 0% drift.'
    ],
    4: [
      'GITHUB_ACTIONS: Executing build container bundle tag v2.4.15...',
      'DOCKER: Packing image modules. Caching Layers... Image compilation successful.',
      'TEST: Running structural package validations, SSL handshakes, and node integrity gates... [PASS]',
      'DEPLOY: Rolling cluster task pool updates... Terminating outdated containers cleanly.',
      'INTEGRITY: Standard ingress route probe validation: Active connection 200 OK.',
      'COMPLETED: Cluster pipeline finished. Sync finished in 48 seconds.'
    ],
    5: [
      'PROMETHEUS: Live system telemetry connected at port :9090 [ESTABLISHED]',
      'GRAFANA: Database connection pools and CPU latency charts syncing continuously...',
      'OPTIMIZATION: Unassigned NAT Gateway instances decommissioned cleanly. Savings tracked!',
      'ALERTING: Incident threshold alarm validation: Active metrics perfectly nominal.',
      'SCALER: ECS Fargate auto-scaling loop checked. Auto-heal latency checks calibrated.',
      'COMPLETED: Devops mission control telemetry is live. Status: 100% HEALTHY'
    ]
  };

  useEffect(() => {
    // Instant reload with initial 3 lines
    const logs = stageLogs[stageId] || [];
    setTickerLines(logs.slice(0, 3));

    let index = 3;
    const interval = setInterval(() => {
      setTickerLines(prev => {
        // Roll the lines to look like scrolling terminal logs
        const nextLine = logs[index % logs.length];
        index++;
        return [...prev.slice(1), nextLine];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [stageId]);

  return (
    <div className="space-y-1 relative z-15 font-mono select-none antialiased">
      {tickerLines.map((line, idx) => {
        const isErrorAlert = line.includes('Loose SG') || line.includes('unassigned') || line.includes('ALERT');
        const isPass = line.includes('[PASS]') || line.includes('[OK]') || line.includes('100% HEALTHY') || line.includes('[0 CVE');
        const isCompleted = line.includes('COMPLETED:') || line.includes('RESULT:');

        return (
          <div key={idx} className="flex items-start space-x-1.5 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-[#3b82f6] select-none">&gt;</span>
            <span className={`
              ${isErrorAlert ? 'text-amber-400' : ''}
              ${isPass ? 'text-emerald-400' : ''}
              ${isCompleted ? 'text-[#a78bfa] font-semibold' : ''}
              ${!isErrorAlert && !isPass && !isCompleted ? 'text-zinc-300' : ''}
            `}>
              {line}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ========================================================================================
   SUB-COMPONENT: STAGE VISUALS PANE (THE RENDERER CORRESPONDING TO ACTIVE SIMULATION)
   ======================================================================================== */
function StageVisualsPane({ stageId }: { stageId: number }) {
  
  // RENDER STAGE 1: DISCOVERY & AUDIT (SCANNING)
  if (stageId === 1) {
    return <Stage1AuditSim />;
  }

  // RENDER STAGE 2: ARCHITECTURE BLUEPRINTS (TOPOLOGY DIAGRAM DRAWING)
  if (stageId === 2) {
    return <Stage2BlueprintSim />;
  }

  // RENDER STAGE 3: INFRASTRUCTURE AS CODE (TERRAFORM WRITING)
  if (stageId === 3) {
    return <Stage3IacSim />;
  }

  // RENDER STAGE 4: CI/CD DEPLOYMENT PIPELINE
  if (stageId === 4) {
    return <Stage4PipelineSim />;
  }

  // RENDER STAGE 5: MONITORING & TELEMETRY HEALTH
  if (stageId === 5) {
    return <Stage5MonitoringSim />;
  }

  return null;
}

/* ----------------------------------------------------------------------------------------
   STAGE 1 SIMULATOR DETAILS
   ---------------------------------------------------------------------------------------- */
function Stage1AuditSim() {
  const [scanProgress, setScanProgress] = useState(0);
  const [discoveredCount, setDiscoveredCount] = useState(0);
  const [savedCounter, setSavedCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress((prev) => (prev + 1.2) % 100);
    }, 40);

    const countsTimer = setInterval(() => {
      setDiscoveredCount((prev) => {
        if (prev >= 174) return 24; // reset or stay
        return prev + Math.floor(Math.random() * 8) + 1;
      });
      setSavedCounter((prev) => {
        if (prev >= 3840) return 300;
        return prev + Math.floor(Math.random() * 150) + 12;
      });
    }, 180);

    return () => {
      clearInterval(timer);
      clearInterval(countsTimer);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#0A0A0F]/80 rounded-lg relative overflow-hidden select-none border border-[#1E1E2E]">
      
      {/* Visual Scanning beam laser overlay */}
      <div 
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_8px_rgba(79,110,247,0.8)] opacity-60 pointer-events-none transition-all duration-75"
        style={{ top: `${scanProgress}%` }}
      />

      <div className="flex items-center justify-between border-b border-[#1E1E2E]/60 pb-2.5">
        <div className="flex items-center space-x-1.5 font-mono text-[10px] text-zinc-400">
          <Shield className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>CYBER_SCANNER://REALTIME_ASSET_DISCOVERY</span>
        </div>
        <span className="text-[10px] font-mono text-indigo-400 font-bold capitalize">DISCOVERING...</span>
      </div>

      {/* Nodes Map under scan */}
      <div className="grid grid-cols-4 gap-3 py-6 relative">
        {[
          { label: 'IAM ROLES', desc: '48 Audited', isAlert: true },
          { label: 'EC2 COMPUT', desc: '14 Idle', isAlert: true },
          { label: 'EBS DISKS', desc: '12 Unlinked', isAlert: true },
          { label: 'RDS POOL', desc: '2 Oversized', isAlert: true },
          { label: 'NAT GATS', desc: '2 Redundant', isAlert: false },
          { label: 'ELB GATES', desc: '5 active', isAlert: false },
          { label: 'S3 BUCKET', desc: '22 Secured', isAlert: false },
          { label: 'SSM SECRE', desc: '18 Encryp', isAlert: false }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className={`border rounded p-2 text-center space-y-1 transition-all duration-300 relative bg-[#111118]/60 ${
              scanProgress > (idx * 12) && scanProgress < (idx * 12) + 20
                ? 'border-indigo-400 bg-indigo-500/10 scale-105'
                : item.isAlert 
                ? 'border-amber-500/20 hover:border-amber-500/40' 
                : 'border-zinc-800/80'
            }`}
          >
            <span className="text-[8px] font-mono text-zinc-500 block">{item.label}</span>
            <span className={`text-[9px] font-mono block ${item.isAlert ? 'text-amber-400 font-semibold' : 'text-zinc-200'}`}>
              {item.desc}
            </span>
            {item.isAlert && (
              <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-amber-400 animate-ping" />
            )}
          </div>
        ))}
      </div>

      {/* Quick Discovery Stats Card */}
      <div className="grid grid-cols-2 gap-4 bg-[#11111E]/80 border border-[#1E1E2E] rounded-lg p-3">
        <div>
          <span className="text-[8px] font-mono text-zinc-500 block uppercase">STRUCTURES MAP COUNT</span>
          <span className="text-sm font-mono font-bold text-zinc-100">{discoveredCount} resources</span>
        </div>
        <div className="border-l border-[#1E1E2E]/60 pl-4">
          <span className="text-[8px] font-mono text-amber-400 block uppercase tracking-tight">EST. MONTHLY BUDGET LEAK</span>
          <span className="text-sm font-mono font-bold text-amber-400">${savedCounter} / USD</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------------------
   STAGE 2 SIMULATOR DETAILS
   ---------------------------------------------------------------------------------------- */
function Stage2BlueprintSim() {
  const [stepTimer, setStepTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepTimer((prev) => (prev % 6) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#0A0A0F]/80 rounded-lg relative overflow-hidden select-none border border-[#1E1E2E]">
      <div className="flex items-center justify-between border-b border-[#1E1E2E]/60 pb-2.5">
        <span className="text-[10px] font-mono text-zinc-400 flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span>BLUEPRINT_ASSEMBLY://VPC-01.JSON</span>
        </span>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tight">Multi-AZ Subnets</span>
      </div>

      {/* Interactive Topology canvas SVG simulation */}
      <div className="flex-1 flex items-center justify-center py-4 relative">
        <svg className="w-full max-w-[340px] h-36" viewBox="0 0 400 180">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* VPC Boundary box */}
          <rect x="10" y="10" width="380" height="160" rx="6" fill="#111118" fillOpacity="0.4" stroke="#222238" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="25" y="28" fill="#52526b" fontSize="8" fontFamily="monospace">SEGMENT: atlas-production-net (10.0.0.0/16)</text>

          {/* Subnet segregated lines */}
          <line x1="130" y1="40" x2="130" y2="150" stroke="#1f1f2e" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="260" y1="40" x2="260" y2="150" stroke="#1f1f2e" strokeWidth="1" strokeDasharray="4 2" />

          {/* Nodes */}
          {/* Node 1: IGW (Internet Gateway) */}
          <g transform="translate(45, 90)" className="transition-all duration-300">
            <circle r="14" fill="#151525" stroke={stepTimer >= 1 ? '#4F6EF7' : '#1f1f2e'} strokeWidth="1.5" />
            <text y="3" textAnchor="middle" fill={stepTimer >= 1 ? '#E4E4E7' : '#52526b'} fontSize="7" fontFamily="monospace">IGW</text>
            <text y="24" textAnchor="middle" fill="#71717a" fontSize="6" fontFamily="sans-serif">Gateway</text>
          </g>

          {/* Node 2: LB (Load Balancer) */}
          <g transform="translate(145, 90)">
            <circle r="14" fill="#151525" stroke={stepTimer >= 2 ? '#4F6EF7' : '#1f1f2e'} strokeWidth="1.5" />
            <text y="3" textAnchor="middle" fill={stepTimer >= 2 ? '#E4E4E7' : '#52526b'} fontSize="7" fontFamily="monospace">ALB</text>
            <text y="24" textAnchor="middle" fill="#71717a" fontSize="6" fontFamily="sans-serif">Load Balancer</text>
          </g>

          {/* Node 3: ECS tasks (Compute) */}
          <g transform="translate(265, 55)">
            <circle r="14" fill="#151525" stroke={stepTimer >= 3 ? '#a78bfa' : '#1f1f2e'} strokeWidth="1.5" />
            <text y="3" textAnchor="middle" fill={stepTimer >= 3 ? '#E4E4E7' : '#52526b'} fontSize="7" fontFamily="monospace">TAS_A</text>
            <text y="24" textAnchor="middle" fill="#71717a" fontSize="6" fontFamily="sans-serif">App Fargate 1</text>
          </g>

          {/* Node 4: ECS tasks 2 (Compute) */}
          <g transform="translate(265, 125)">
            <circle r="14" fill="#151525" stroke={stepTimer >= 4 ? '#a78bfa' : '#1f1f2e'} strokeWidth="1.5" />
            <text y="3" textAnchor="middle" fill={stepTimer >= 4 ? '#E4E4E7' : '#52526b'} fontSize="7" fontFamily="monospace">TAS_B</text>
          </g>

          {/* Node 5: Aurora (DB) */}
          <g transform="translate(355, 90)">
            <circle r="14" fill="#151525" stroke={stepTimer >= 5 ? '#10b981' : '#1f1f2e'} strokeWidth="1.5" />
            <text y="3" textAnchor="middle" fill={stepTimer >= 5 ? '#E4E4E7' : '#52526b'} fontSize="7" fontFamily="monospace">RDS</text>
            <text y="24" textAnchor="middle" fill="#71717a" fontSize="6" fontFamily="sans-serif">Aurora Multi-AZ</text>
          </g>

          {/* Connection Lines (Paths) */}
          {stepTimer >= 2 && (
            <path d="M 59 90 L 131 90" stroke="#4F6EF7" strokeWidth="1.5" strokeDasharray="3 3" fill="none" className="animate-pulse" />
          )}
          {stepTimer >= 3 && (
            <path d="M 159 90 L 251 55" stroke="#a78bfa" strokeWidth="1.2" fill="none" />
          )}
          {stepTimer >= 4 && (
            <path d="M 159 90 L 251 125" stroke="#a78bfa" strokeWidth="1.2" fill="none" />
          )}
          {stepTimer >= 5 && (
            <>
              <path d="M 279 55 L 341 90" stroke="#10b981" strokeWidth="1.2" fill="none" />
              <path d="M 279 125 L 341 90" stroke="#10b981" strokeWidth="1.2" fill="none" />
            </>
          )}
        </svg>

        {/* Float Environment tags layered */}
        <div className="absolute bottom-2.5 left-4 flex gap-2 font-mono text-[8px] scale-95 uppercase">
          <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded">PRODUCTION</span>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">STAGING</span>
          <span className="bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">CI/CD PIPELINE</span>
        </div>
      </div>

      {/* Floating Assembly status overlay */}
      <div className="bg-[#11111E]/80 border border-[#1E1E2E] rounded-md p-2 flex items-center justify-between text-[9px] font-mono leading-tight">
        <span className="text-zinc-400">Topology Integrity Verification:</span>
        <strong className="text-emerald-400">100% SECURE & REDUNDANT</strong>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------------------
   STAGE 3 SIMULATOR DETAILS
   ---------------------------------------------------------------------------------------- */
function Stage3IacSim() {
  const [lineIdx, setLineIdx] = useState(0);

  const terraformCode = [
    '# DECLARATIVE DEVSHIP TERRAFORM BLOCKS',
    'resource "aws_security_group" "alb_ingress" {',
    '  name        = "production-alb-sg"',
    '  vpc_id      = aws_vpc.main.id',
    '',
    '  ingress {',
    '    from_port   = 443',
    '    to_port     = 443',
    '    protocol    = "tcp"',
    '    cidr_blocks = ["0.0.0.0/0"]',
    '  }',
    '}',
    '',
    'resource "aws_ecs_service" "app" {',
    '  name            = "production-web-fargate"',
    '  cluster         = aws_ecs_cluster.production.id',
    '  task_definition = aws_ecs_task_definition.web.arn',
    '  desired_count   = 3',
    '  launch_type     = "FARGATE"',
    '}'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLineIdx((prev) => (prev >= terraformCode.length ? 0 : prev + 1));
    }, 450);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#08080E] rounded-lg relative overflow-hidden select-none border border-[#1E1E2E]/60">
      
      {/* Mini code window headers */}
      <div className="flex items-center justify-between border-b border-[#1E1E2E]/60 pb-2.5">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span className="text-[10px] font-mono text-zinc-400">/terraform/production/main.tf</span>
        </div>
        <span className="text-[9px] font-mono text-[#a78bfa] block font-semibold animate-pulse">IaC COMPILED</span>
      </div>

      {/* Editor simulation space */}
      <div className="flex-1 font-mono text-[9px] text-zinc-300 py-3 overflow-y-auto space-y-0.5 custom-scroll max-h-[180px]">
        {terraformCode.slice(0, lineIdx + 1).map((line, idx) => {
          const isComment = line.startsWith('#');
          const isResource = line.startsWith('resource');
          const isClosing = line.trim() === '}';

          return (
            <div key={idx} className="flex">
              <span className="w-5 text-zinc-600 text-right select-none pr-2.5">{idx + 1}</span>
              <pre className={`
                ${isComment ? 'text-zinc-500 italic' : ''}
                ${isResource ? 'text-indigo-400 font-bold' : ''}
                ${isClosing ? 'text-indigo-400' : ''}
                ${!isComment && !isResource && !isClosing ? 'text-zinc-200' : ''}
              `}>
                {line}
              </pre>
            </div>
          );
        })}
        {lineIdx < terraformCode.length && (
          <div className="flex pl-5">
            <span className="w-2.5 h-3.5 bg-indigo-500 animate-pulse inline-block" />
          </div>
        )}
      </div>

      {/* Code dry run validations check */}
      <div className="bg-[#11111E]/80 border border-[#1E1E2E] rounded-lg p-3 space-y-1.5 font-mono text-[9px]">
        <div className="flex items-center justify-between">
          <span className="text-zinc-400">IaC Static Security Scan:</span>
          <strong className="text-emerald-400 flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>0 Vulnerabilities (tfsec)</span>
          </strong>
        </div>
        <div className="flex items-center justify-between border-t border-[#1E1E2E]/40 pt-1.5">
          <span className="text-zinc-400">Terraform Plan Target:</span>
          <span className="text-sky-400">+18 resources, 0 altered, 0 destroyed</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------------------
   STAGE 4 SIMULATOR DETAILS
   ---------------------------------------------------------------------------------------- */
function Stage4PipelineSim() {
  const [pipelineState, setPipelineState] = useState<number>(1);
  const [elapsed, setElapsed] = useState<number>(12);

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setPipelineState((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000);

    const secondsTimer = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= 55) return 8;
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cycleTimer);
      clearInterval(secondsTimer);
    };
  }, []);

  const steps = [
    { id: 1, name: 'BUILD CONTAINER', detail: 'multi-stage' },
    { id: 2, name: 'INTEGRITY TEST', detail: 'check security' },
    { id: 3, name: 'TERRAFORM APPLY', detail: 'rolling update' },
    { id: 4, name: 'INGRESS PROBE', detail: '200 OK verify' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#0A0A0F]/80 rounded-lg relative overflow-hidden select-none border border-[#1E1E2E]">
      <div className="flex items-center justify-between border-b border-[#1E1E2E]/60 pb-2.5">
        <div className="flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
          <span className="text-[10px] font-mono text-zinc-400">GITHUB_ACTIONS://WORKFLOWS/SHIPPED-FARGATE.YML</span>
        </div>
        <span className="text-[9px] font-mono text-indigo-400 uppercase font-bold">Deploy: #1480</span>
      </div>

      {/* CI/CD step visual flow */}
      <div className="grid grid-cols-2 gap-3 py-4">
        {steps.map((st) => {
          const isActive = pipelineState === st.id;
          const isPassed = pipelineState > st.id;

          return (
            <div 
              key={st.id} 
              className={`border rounded-lg p-3 flex items-center justify-between transition-all duration-300 bg-[#111118]/60 ${
                isActive 
                  ? 'border-indigo-500 shadow-[0_0_8px_rgba(79,110,247,0.3)]' 
                  : isPassed 
                  ? 'border-emerald-500/40 opacity-80' 
                  : 'border-zinc-800 opacity-40'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-zinc-500 uppercase block">STEP_0{st.id}</span>
                <span className="text-[10px] font-sans font-bold text-zinc-200 block">{st.name}</span>
                <span className="text-[8px] font-mono text-zinc-400 block">{st.detail}</span>
              </div>

              <div>
                {isPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : isActive ? (
                  <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin" />
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full border border-zinc-700 block" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deployment status tracking overlay */}
      <div className="bg-[#11111E]/80 border border-[#1E1E2E] rounded-lg p-3 flex items-center justify-between text-[9px] font-mono">
        <div>
          <span className="text-zinc-500 block">ELAPSED PIPELINE TIME</span>
          <span className="text-zinc-200">00:{elapsed < 10 ? `0${elapsed}` : elapsed} Seconds</span>
        </div>
        <div className="text-right border-l border-[#1E1E2E]/60 pl-3.5">
          <span className="text-zinc-500 block uppercase">DEPLOYMENT OUTAGE</span>
          <span className="text-emerald-400 font-bold block">0 SECONDS (ROLLING)</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------------------
   STAGE 5 SIMULATOR DETAILS
   ---------------------------------------------------------------------------------------- */
function Stage5MonitoringSim() {
  const [trafficPoints, setTrafficPoints] = useState<number[]>([24, 32, 28, 45, 38, 55, 48, 62, 54, 70, 65, 80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficPoints((prev) => {
        const next = Math.max(30, Math.min(95, prev[prev.length - 1] + Math.floor(Math.random() * 20) - 10));
        return [...prev.slice(1), next];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#0A0A0F]/80 rounded-lg relative overflow-hidden select-none border border-[#1E1E2E]">
      <div className="flex items-center justify-between border-b border-[#1E1E2E]/60 pb-2.5">
        <div className="flex items-center space-x-1.5 font-mono text-[10px] text-zinc-400">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>PROMETHEUS://CONTAINER_METRICS</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-tight">NOMINAL // 100% HEALTHY</span>
      </div>

      {/* SVG Monitoring graph */}
      <div className="flex-1 flex flex-col justify-center py-2">
        <svg className="w-full h-24" viewBox="0 0 320 100">
          <path
            d={`M ${trafficPoints.map((pt, idx) => `${(idx * 28) + 10} ${100 - pt}`).join(' L ')}`}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            className="transition-all duration-1000 ease-in-out"
          />
          <path
            d={`M 10 100 L ${trafficPoints.map((pt, idx) => `${(idx * 28) + 10} ${100 - pt}`).join(' L ')} L 318 100 Z`}
            fill="url(#gradientGreen)"
            fillOpacity="0.08"
            className="transition-all duration-1000 ease-in-out"
          />
          
          <defs>
            <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Guidelines */}
          <line x1="10" y1="20" x2="310" y2="20" stroke="#1c1c30" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="10" y1="50" x2="310" y2="50" stroke="#1c1c30" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="10" y1="80" x2="310" y2="80" stroke="#1c1c30" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Label coordinates inside graph */}
          <text x="12" y="16" fill="#4b4b66" fontSize="6" fontFamily="monospace">LOAD: 100% Max Threshold</text>
          <text x="12" y="46" fill="#4b4b66" fontSize="6" fontFamily="monospace">LOAD: 50% Standard</text>
        </svg>
      </div>

      {/* Performance KPIs scorecard */}
      <div className="grid grid-cols-3 gap-2 text-center bg-[#11111E]/80 border border-[#1E1E2E] rounded-lg p-2.5">
        <div>
          <span className="text-[8px] font-mono text-zinc-500 block uppercase">ECS TASK POOL</span>
          <span className="text-xs font-mono font-bold text-zinc-200">5 Tasks (A-Z)</span>
        </div>
        <div className="border-x border-[#1E1E2E]/60">
          <span className="text-[8px] font-mono text-zinc-500 block uppercase">AVG CONTAINER CPU</span>
          <span className="text-xs font-mono font-bold text-[#10b981]">28.6% Nominal</span>
        </div>
        <div>
          <span className="text-[8px] font-mono text-zinc-500 block uppercase">MONTHLY SAVINGS</span>
          <span className="text-xs font-mono font-bold text-emerald-400 font-semibold flex items-center justify-center space-x-1">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>$4,250</span>
          </span>
        </div>
      </div>
    </div>
  );
}
