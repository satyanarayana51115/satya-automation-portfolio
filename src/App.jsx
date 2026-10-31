import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  CheckCircle2,
  Layers,
  Activity
} from 'lucide-react';

// Pure GitHub SVG
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Pure LinkedIn SVG
function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [hoursWasted, setHoursWasted] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(40);

  const annualHoursSaved = hoursWasted * 50;
  const annualSavings = annualHoursSaved * hourlyCost;
  const engineeringEfficiencyGain = Math.min(Math.round((hoursWasted / 40) * 100), 100);

  return (
    <div className="min-h-screen bg-[#020b08] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased overflow-x-hidden">
      
      {/* ================= 1. NAVIGATION BAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020b08]/85 backdrop-blur-md border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Glowing Animated Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 text-white tracking-tight hover:opacity-90 transition"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981] shadow-[0_0_10px_#10b981]"></span>
            </span>
            <span className="font-semibold text-sm sm:text-base tracking-wider text-white">
              SATYA <span className="text-[#10b981] font-mono">. ENG</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-xs uppercase tracking-widest font-mono text-slate-300 hover:text-emerald-400 transition">
              Home
            </a>
            <a href="#projects" className="text-xs uppercase tracking-widest font-mono text-slate-300 hover:text-emerald-400 transition">
              Projects
            </a>
            <a href="#roi" className="text-xs uppercase tracking-widest font-mono text-slate-300 hover:text-emerald-400 transition">
              ROI
            </a>
          </div>

          {/* Connect Button */}
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_0_12px_rgba(16,185,129,0.1)] cursor-pointer shrink-0"
          >
            Let's Connect
          </a>

        </div>
      </nav>

    
      {/* ================= 2. HERO SECTION (RESPONSIVE: CENTER ON MOBILE, LEFT ON DESKTOP) ================= */}
      <section 
        id="home" 
        className="w-full min-h-[calc(100vh-4rem)] pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-b border-emerald-950/50 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs md:text-sm font-mono tracking-wider uppercase mb-7 shadow-[0_0_14px_rgba(16,185,129,0.15)] w-fit shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          AVAILABLE FOR HIGH-IMPACT AUTOMATION CONTRACTS
        </div>
        
        {/* Responsive Heading */}
        <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[5.1rem] font-light tracking-tight lg:tracking-[-0.035em] leading-[1.2] lg:leading-[1.07] mb-6 w-full antialiased text-slate-100 break-words">
          <span className="block font-normal lg:whitespace-nowrap">
            Deterministic Automation &amp;
          </span>
          <span className="block text-[#10b981] mt-1.5 lg:mt-2 font-normal drop-shadow-[0_0_18px_rgba(16,185,129,0.18)] lg:whitespace-nowrap">
            Autonomous Agentic Systems
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl leading-relaxed mb-8 sm:mb-9 font-normal">
          I build resilient browser automation pipelines and LLM multi-agent swarms that eliminate manual operational drag and scale mission-critical enterprise workflows.
        </p>

        {/* Action Buttons */}
        {/*Neon/Glow Borders) */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
          {/* 1. View Case Studies Button (Green Text + Green Border + Bright Green Glow on Hover) */}
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#020b08] border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.10)] hover:shadow-[0_0_22px_rgba(16,185,129,0.35)] text-xs sm:text-sm md:text-base cursor-pointer"
          >
            View Case Studies <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>

          {/* 2. GitHub Repos Button (White Text + White Border + Bright White Glow on Hover) */}
          <a 
            href="https://github.com/satyanarayana51115" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#020b08] border border-white/30 hover:border-white text-slate-100 hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] text-xs sm:text-sm md:text-base cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-slate-200" /> GitHub Repos
          </a>
        </div>
      </section>

      {/* 3. ENGINEERED SYSTEMS (PROJECTS) */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto border-b border-emerald-950/50">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Layers className="w-4 h-4" />
            <span>Architecture &amp; Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Engineered Systems</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Production-ready architectures built for resilience, determinism, and zero-downtime automated execution.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {/* Project 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#04120c]/80 border border-emerald-950/80 hover:border-emerald-500/30 transition duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">Core Autonomous Framework</span>
              <span className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Status: Production Verified
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Omni-Web Automation Agent</h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              An enterprise-grade autonomous browser orchestration engine equipped with dynamic self-healing selectors, DOM mutation observers, and automated fallback logic.
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-[#020b08] border border-emerald-950 font-mono text-[11px] sm:text-xs text-emerald-300 mb-6 overflow-x-auto leading-relaxed">
              <div className="text-slate-500 select-none mb-1.5"># Autonomous Self-Healing Selector Hook</div>
              <div><span className="text-emerald-500 font-semibold">async def</span> <span className="text-yellow-200">locate_and_act</span>(page, selector: str, action: str):</div>
              <div className="pl-4">try:</div>
              <div className="pl-8">target = await page.wait_for_selector(selector, timeout=3000)</div>
              <div className="pl-8">return await execute_action(target, action)</div>
              <div className="pl-4">except Exception:</div>
              <div className="pl-8 text-emerald-400"># Fallback to visual anchor reasoning</div>
              <div className="pl-8">healed_selector = await agent_visual_resolve(page, selector)</div>
              <div className="pl-8">return await page.click(healed_selector)</div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-emerald-950/60 mb-6 text-center bg-emerald-950/10 rounded-lg">
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Execution Reliability</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400 mt-1">99.4%</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">DOM Failure Recovery</div>
                <div className="text-base sm:text-xl font-bold text-white mt-1">&lt; 250ms</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Throughput Gain</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400 mt-1">4.2x</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Playwright', 'AsyncIO', 'Pydantic v2', 'Pytest'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-emerald-950/50 border border-emerald-900/60 text-slate-300 text-xs font-mono">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#04120c]/80 border border-emerald-950/80 hover:border-emerald-500/30 transition duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">Agentic Architecture</span>
              <span className="text-slate-400 text-xs font-mono">Multi-Agent Coordination</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">CrewAI Multi-Agent Email Triage Swarm</h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Autonomous multi-agent system coordinating structured classification, context-aware draft generation, and human-in-the-loop escalation logic.
            </p>

            <div className="p-3 sm:p-4 rounded-xl bg-[#020b08] border border-emerald-950 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto leading-relaxed">
              crew = Crew(<br />
              &nbsp;&nbsp;agents=[<span className="text-emerald-400">classifier</span>, <span className="text-emerald-400">validator</span>],<br />
              &nbsp;&nbsp;tasks=[<span className="text-emerald-300">triage_task</span>, <span className="text-emerald-300">extract_task</span>],<br />
              &nbsp;&nbsp;process=Process.sequential<br />
              )
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-emerald-950/60 mb-6 text-center bg-emerald-950/10 rounded-lg">
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Manual Drag Reduced</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400 mt-1">82%</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Response Latency</div>
                <div className="text-base sm:text-xl font-bold text-white mt-1">&lt; 45s</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Routing Precision</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400 mt-1">98.1%</div>
              </div>
            </div>
            <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Deterministic Intent Extraction using strictly validated Pydantic schemas.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Automated context grounding with vector similarity search on knowledge bases.</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['CrewAI', 'LangChain', 'Python', 'n8n Webhooks', 'Supabase Postgres', 'Gemini Flash'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-emerald-950/50 border border-emerald-900/60 text-slate-300 text-xs font-mono">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#04120c]/80 border border-emerald-950/80 hover:border-emerald-500/30 transition duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">Computer Vision &amp; Diagnostics</span>
              <span className="text-slate-400 text-xs font-mono">Visual Intelligence</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Chest X-Ray Visual Heat Map Analysis Agent</h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Automated medical visual diagnostics workflow pairing OpenCV image matrix processing with multimodal LLMs to identify pulmonary irregularities with clear visual overlays.
            </p>

            {/* Code Box 3: Chest X-Ray Vision Pipeline (Rich Emerald Syntax Highlight) */}
            <div className="p-3 sm:p-4 rounded-xl bg-[#020b08] border border-emerald-950 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto leading-relaxed">
              <span className="text-slate-500"># Multimodal Vision Overlay &amp; Heat Map Extraction</span><br />
              <span className="text-emerald-400">async def</span> <span className="text-emerald-300 font-semibold">generate_heatmap_overlay</span>(image_bytes: <span className="text-emerald-400">bytes</span>):<br />
              &nbsp;&nbsp;matrix = <span className="text-emerald-400">cv2.imdecode</span>(np.frombuffer(image_bytes, np.uint8), <span className="text-emerald-300">cv2.IMREAD_COLOR</span>)<br />
              &nbsp;&nbsp;heatmap = <span className="text-emerald-400">cv2.applyColorMap</span>(cv2.GaussianBlur(matrix, (15, 15), 0), <span className="text-emerald-300">cv2.COLORMAP_JET</span>)<br />
              &nbsp;&nbsp;visual_blend = <span className="text-emerald-400">cv2.addWeighted</span>(matrix, 0.65, heatmap, 0.35, 0)<br />
              &nbsp;&nbsp;<span className="text-emerald-400 font-semibold">return await</span> <span className="text-emerald-300">multimodal_agent_verify</span>(visual_blend)
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-emerald-950/60 mb-6 text-center bg-emerald-950/10 rounded-lg">
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Inference Time</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400 mt-1">1.8s</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Overlay Clarity</div>
                <div className="text-base sm:text-xl font-bold text-white mt-1">High-Res</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Anomaly Flagging</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400 mt-1">100% Deterministic</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['OpenCV', 'Python', 'NumPy', 'Multimodal LLM', 'FastAPI'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-emerald-950/50 border border-emerald-900/60 text-slate-300 text-xs font-mono">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. INTERACTIVE ROI IMPACT CALCULATOR ================= */}
      <section id="roi" className="min-h-[calc(100vh-4rem)] py-16 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto flex flex-col justify-center border-b border-emerald-950/50">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide mb-3">
            <Activity className="w-3.5 h-3.5" /> CAPITAL RECOVERY METRICS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Interactive ROI Impact Calculator
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Estimate how much operational capital your team saves by eliminating manual repetitive tasks.
          </p>
        </div>

        {/* Compact Card Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#04120c] border border-emerald-950 shadow-xl flex flex-col gap-6">
          
          {/* Side-by-Side on Desktop/Tablet, Single on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Slider 1: Hours */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="hours-slider" className="text-xs font-semibold text-slate-300">
                  Manual Hours Wasted Weekly
                </label>
                <span className="text-xs font-bold font-mono text-emerald-400">
                  {hoursWasted} hrs
                </span>
              </div>
              <input 
                id="hours-slider"
                type="range" 
                min="5" 
                max="60" 
                value={hoursWasted} 
                onChange={(e) => setHoursWasted(Number(e.target.value))}
                className="w-full h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Slider 2: Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="rate-slider" className="text-xs font-semibold text-slate-300">
                  Blended Hourly Cost
                </label>
                <span className="text-xs font-bold font-mono text-emerald-400">
                  ${hourlyCost}/hr
                </span>
              </div>
              <input 
                id="rate-slider"
                type="range" 
                min="20" 
                max="150" 
                value={hourlyCost} 
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

          </div>

          {/* Results Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            <div className="p-5 rounded-xl bg-[#020b08] border border-emerald-900/40 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                Annual Capacity Unlocked
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {annualHoursSaved.toLocaleString()} hrs
              </span>
              <span className="text-[10px] text-emerald-400/80 font-mono mt-1">
                Equivalent to ~{engineeringEfficiencyGain}% FTE capacity
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#020b08] border border-emerald-900/40 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                Projected Annual Savings
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                ${annualSavings.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">
                Direct bottom-line ROI recovery
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. CONTACT & FOOTER ================= */}
      <section 
        id="contact" 
        className="min-h-[calc(100vh-4rem)] pt-16 pb-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto flex flex-col justify-center items-center"
      >
        
        {/* Bordered Card Container */}
        <div className="w-full p-8 sm:p-10 md:p-12 rounded-2xl bg-[#04120c]/90 border border-emerald-500/20 shadow-[0_0_30px_rgba(2,11,8,0.9)] text-center flex flex-col items-center mb-10 sm:mb-12">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-mono tracking-wide mb-5">
            START A CONVERSATION
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Have a Workflow to Automate?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you need autonomous browser agents, resilient n8n pipelines, or custom Python tools, let's discuss your operational bottlenecks.
          </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            {/* 1. Send Email Button (Green Text + Green Border + Bright Green Glow on Hover) */}
            <a 
              href="mailto:satyanarayana51115@gmail.com" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#020b08] border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.10)] hover:shadow-[0_0_22px_rgba(16,185,129,0.35)] text-xs sm:text-sm cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" /> Send Email Directly
            </a>

            {/* 2. LinkedIn Button (White Text + White Border + Bright White Glow on Hover) */}
            <a 
              href="https://www.linkedin.com/in/manepalli-satyanarayana-a931382b9/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#020b08] border border-white/30 hover:border-white text-slate-100 hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] text-xs sm:text-sm cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4 text-slate-200 group-hover:text-white" /> Connect on LinkedIn
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center w-full">
          <div className="flex justify-center items-center gap-5 mb-3">
            <a href="https://github.com/satyanarayana51115" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/manepalli-satyanarayana-a931382b9/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="mailto:contact@satyanarayana.eng" className="text-slate-400 hover:text-emerald-400 transition">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-xs text-slate-400 font-mono tracking-wider">
            MANEPALLI SATYANARAYANA — Automation Architecture &amp; Python Engineering
          </p>
        </div>
      </section>
    </div>
  );
}