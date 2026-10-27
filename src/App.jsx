import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  Sparkles,
  Bot,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';

// Custom SVG Icons for Brands
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function App() {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(40);

  const annualHoursSaved = Math.round(hoursPerWeek * 50);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);

  const projects = [
    {
      id: "omni-agent",
      title: "Omni-Web Automation Agent",
      badge: "Core Framework",
      tagline: "Autonomous self-healing Playwright framework",
      metrics: [
        { label: "Execution Reliability", value: "99.4%" },
        { label: "DOM Failure Recovery", value: "< 250ms" },
        { label: "Throughput Gain", value: "4.2x" }
      ],
      desc: "An enterprise browser orchestration engine equipped with dynamic self-healing selectors, DOM mutation observers, and automated fallback logic for high-frequency web workflows.",
      tags: ["Python", "Playwright", "AsyncIO", "Pydantic v2"],
      codeSnippet: `async def locate_element(page, selector: str):\n    try:\n        return await page.wait_for_selector(selector, timeout=3000)\n    except Exception:\n        return await heal_and_retry(page, selector)`
    },
    {
      id: "crew-triage",
      title: "CrewAI Multi-Agent Email Triage",
      badge: "Agentic Architecture",
      tagline: "Automated routing & structured extraction",
      metrics: [
        { label: "Classification Latency", value: "1.1s" },
        { label: "Human Oversight Drop", value: "85%" },
        { label: "Accuracy Rate", value: "98.7%" }
      ],
      desc: "Collaborative two-agent swarm designed to parse, classify, and validate high-volume business communications, generating structured JSON payloads for downstream ERP ingest.",
      tags: ["Python", "CrewAI", "LangChain", "Gemini API"],
      codeSnippet: `crew = Crew(\n    agents=[classifier, validator],\n    tasks=[triage_task, extract_task],\n    process=Process.sequential\n)`
    },
    {
      id: "enterprise-n8n",
      title: "Enterprise Inventory Alert Pipeline",
      badge: "Production RPA",
      tagline: "Sub-second multi-channel operational routing",
      metrics: [
        { label: "Alert Latency", value: "< 800ms" },
        { label: "Manual Triage Effort", value: "Zero" },
        { label: "Uptime Reliability", value: "99.9%" }
      ],
      desc: "Mission-critical pipeline monitoring real-time stock thresholds, parsing parts manifests, and triggering immediate Telegram/WhatsApp dispatches with zero manual intervention.",
      tags: ["n8n", "Webhooks", "Telegram Bot API", "PostgreSQL"],
      codeSnippet: `{\n  "trigger": "inventory_threshold_breach",\n  "dispatch": ["telegram_ops_bot", "log_audit_trail"]\n}`
    }
  ];

  return (
    <div className="min-h-screen bg-[#05110d] text-slate-200 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b2b20]/40 via-[#05110d] to-[#020705] -z-10" />

      {/* Navigation - ROI Button Enabled for Mobile */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#05110d]/90 border-b border-emerald-950/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse"></div>
            <span className="font-mono font-bold text-sm sm:text-lg tracking-wider text-white">
              SATYA<span className="text-emerald-400">.ENG</span>
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            <a href="#projects" className="text-slate-400 hover:text-emerald-400 transition">Projects</a>
            {/* ROI Visible on Mobile Now */}
            <a href="#calculator" className="text-slate-400 hover:text-emerald-400 transition">ROI</a>
            <a href="#contact" className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition shadow-[0_0_15px_rgba(16,185,129,0.1)] text-xs sm:text-sm whitespace-nowrap">
              Let's Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Perfectly Scaled for Mobile & Desktop */}
      {/* Hero Section - Centered 3-Line on Mobile & Original Left on Desktop */}
      {/* Hero Section - Perfectly Padded Mobile View */}
      {/* Hero Section - Clean 2-Line Layout with Extended Spacing */}
      <section className="pt-12 pb-28 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-b border-emerald-950/50 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-8 shadow-[0_0_12px_rgba(16,185,129,0.15)] w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          AVAILABLE FOR HIGH-IMPACT AUTOMATION CONTRACTS
        </div>
        
        {/* 2 Lines: & at line 1, no period at line 2 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-normal text-white tracking-tight leading-[1.2] lg:leading-[1.1] mb-8">
          <span className="block">Deterministic Automation &amp;</span>
          <span className="text-[#10b981] block">
            Autonomous Agentic Systems
          </span>
        </h1>

        {/* Supporting Paragraph with extra space below */}
        <p className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-3xl leading-relaxed mb-12">
          I build resilient browser automation pipelines and LLM multi-agent swarms that eliminate manual operational drag and scale mission-critical enterprise workflows.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3.5 bg-emerald-500/10 border border-emerald-500/40 hover:bg-emerald-500/20 text-emerald-400 font-semibold rounded-lg transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] text-base cursor-pointer"
          >
            View Case Studies <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
          <a 
            href="https://github.com/satyanarayana51115" 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-3.5 bg-[#081812] border border-emerald-950 hover:border-slate-700 text-slate-300 font-medium rounded-lg transition flex items-center justify-center gap-2 hover:text-white text-base cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-slate-400" /> GitHub Repos
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-14 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-b border-emerald-950/50">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Engineered Systems</h2>
          <p className="text-slate-400 text-xs sm:text-base">Production-ready architectures built for resilience and zero-downtime execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#081812]/80 border border-emerald-950/80 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-[0_4px_25px_rgba(16,185,129,0.12)] transition duration-300"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  {project.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-4 mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">{project.desc}</p>
                
                {/* Code Snippet Box without ugly horizontal scrollbars */}
                <div className="bg-[#040b08] border border-emerald-950 rounded-lg p-3 my-4 font-mono text-[11px] sm:text-xs text-emerald-300/90 overflow-x-auto [scrollbar-width:none]">
                  <pre>{project.codeSnippet}</pre>
                </div>

                <div className="space-y-2 mb-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex justify-between text-xs border-b border-emerald-950/50 pb-1.5">
                      <span className="text-slate-500">{m.label}</span>
                      <span className="font-mono text-emerald-400 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-emerald-950/60">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] sm:text-[11px] font-mono text-emerald-400/90 bg-[#0c241b] border border-emerald-900/40 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-14 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-b border-emerald-950/50">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Interactive ROI Impact Calculator</h2>
          <p className="text-slate-400 text-xs sm:text-base">Estimate how much operational capital your team saves by eliminating manual repetitive tasks.</p>
        </div>

        <div className="bg-[#081812]/90 border border-emerald-900/50 rounded-2xl p-5 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8">
            <div className="bg-[#040b08]/80 p-4 rounded-xl border border-emerald-950">
              <div className="flex justify-between text-xs sm:text-sm mb-3">
                <span className="text-slate-300 font-medium">Manual Hours Wasted Weekly</span>
                <span className="font-mono text-emerald-400 font-bold">{hoursPerWeek} hrs</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="80" 
                value={hoursPerWeek} 
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-emerald-950 rounded-lg appearance-none"
              />
            </div>
            <div className="bg-[#040b08]/80 p-4 rounded-xl border border-emerald-950">
              <div className="flex justify-between text-xs sm:text-sm mb-3">
                <span className="text-slate-300 font-medium">Blended Hourly Cost</span>
                <span className="font-mono text-emerald-400 font-bold">${hourlyRate}/hr</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="150" 
                value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-emerald-950 rounded-lg appearance-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-[#040b08] border border-emerald-900/40 rounded-xl p-5 sm:p-6 text-center">
            <div className="p-2">
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mb-1 tracking-wider">ANNUAL CAPACITY UNLOCKED</div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{annualHoursSaved.toLocaleString()} hrs</div>
            </div>
            <div className="p-2">
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mb-1 tracking-wider">PROJECTED ANNUAL SAVINGS</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono shadow-[0_0_15px_rgba(16,185,129,0.2)]">${annualCostSaved.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Automate / Contact Section */}
      <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="bg-[#081812]/90 border border-emerald-900/60 rounded-2xl p-6 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            START A CONVERSATION
          </span>
          <h2 className="text-xl sm:text-4xl font-bold text-white mt-4 mb-3">
            Have a Workflow to Automate?
          </h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need autonomous browser agents, resilient n8n pipelines, or custom Python tools, let's discuss your operational bottlenecks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=satyanarayana51115@gmail.com&su=Automation%20Inquiry" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500/10 border border-emerald-500/40 hover:bg-emerald-500/20 text-emerald-400 font-semibold rounded-lg transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 text-emerald-400" /> Send Email Directly
            </a>
            <a 
              href="https://www.linkedin.com/in/manepalli-satyanarayana-a931382b9/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#081812] border border-emerald-950 hover:border-slate-700 text-slate-300 font-medium rounded-lg transition flex items-center justify-center gap-2 hover:text-white text-sm sm:text-base"
            >
              <LinkedinIcon className="w-4 h-4 text-slate-400" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-emerald-950/40 text-center text-xs text-slate-500">
        <div className="flex justify-center items-center gap-5 mb-4">
          <a 
            href="https://github.com/satyanarayana51115" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub Profile" 
            className="p-2.5 rounded-lg bg-[#081812] border border-emerald-950 text-slate-400 hover:text-emerald-400 hover:border-emerald-600/40 transition"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/manepalli-satyanarayana-a931382b9/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn Profile" 
            className="p-2.5 rounded-lg bg-[#081812] border border-emerald-950 text-slate-400 hover:text-emerald-400 hover:border-emerald-600/40 transition"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=satyanarayana51115@gmail.com&su=Automation%20Inquiry" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Send Email" 
            className="p-2.5 rounded-lg bg-[#081812] border border-emerald-950 text-slate-400 hover:text-emerald-400 hover:border-emerald-600/40 transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="mb-1 text-slate-400 font-medium">MANEPALLI SATYANARAYANA — Automation Architecture & Python Engineering</p>
        <p className="font-mono text-[11px] text-slate-600">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  );
}