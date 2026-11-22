import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Download,
  Sparkles,
  Layers,
  Code2,
  Briefcase,
  Award,
  Trophy,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Activity,
  CheckCircle2,
  Brain,
  Cpu,
  Terminal,
  Database
} from 'lucide-react';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import BlurFade from '../components/BlurFade';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';

export default function Home({ onOpenResume, onShowToast }) {
  const { personal, projects, skills, internships, achievements } = portfolioData;

  // Selected Spotlight Project for Interactive Showcase
  const [selectedSpotlightId, setSelectedSpotlightId] = useState('careflow');
  const spotlightProject = projects.find((p) => p.id === selectedSpotlightId) || projects[0];

  const handleResumeDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#38BDF8', '#818CF8', '#34D399']
    });
    if (onOpenResume) onOpenResume();
  };

  const quickStats = [
    { label: 'B.E. IT CGPA', value: '9.6 / 10', icon: GraduationCap, sub: 'Matrusri Eng College', link: '/about' },
    { label: 'Featured Systems', value: `${projects.length} Shipped`, icon: Layers, sub: 'AI, Analytics & Web', link: '/projects' },
    { label: 'Verified Vault', value: '23 Credentials', icon: Award, sub: 'Google, Tata & more', link: '/certifications' },
    { label: 'Datathon Standing', value: 'Runner-Up', icon: Trophy, sub: 'Datanyx 2025 AI Track', link: '/achievements' },
  ];

  const spotlightOptions = [
    { id: 'careflow', label: 'CareFlow (Process Mining)', badge: 'Healthcare Analytics' },
    { id: 'mediassist-ai', label: 'MediAssist AI (NLP Chatbot)', badge: 'Conversational AI' },
    { id: 'krishiai', label: 'KrishiAI (Advisory)', badge: 'Predictive ML' },
    { id: 'time-trackers', label: 'TimeTrackers (SIH)', badge: 'Resource Optimization' },
  ];

  return (
    <div className="relative pb-24">
      {/* 1. Cinematic Hero Section */}
      <Hero onOpenResume={onOpenResume} onShowToast={onShowToast} />

      {/* 2. Infinite Kinetic Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Quick Metrics Strip */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <BlurFade key={idx} delay={idx * 0.08}>
                  <Link
                    to={stat.link}
                    className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between hover:bg-neutral-900/90 shadow-elevated"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-sky group-hover:scale-110 transition-transform">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight group-hover:text-accent-sky transition-colors">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-zinc-300 mt-1 font-sans">
                        {stat.label}
                      </p>
                      <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                        {stat.sub}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Featured Project Spotlight (Bento Showcase) */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Header */}
          <BlurFade>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-accent-blue/30 bg-accent-blue/10 text-accent-sky inline-block">
                  Featured Engineering Systems
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter font-sans">
                  Crafted Systems &amp; Case Studies
                </h2>
                <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  Deep-dives into intelligent software applications, process-mining pipelines, and full-stack solutions.
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-sky hover:text-white transition-colors"
              >
                <span>View all 8 projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BlurFade>

          {/* Interactive Spotlight Switcher Tabs */}
          <BlurFade delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {spotlightOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedSpotlightId(opt.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                    selectedSpotlightId === opt.id
                      ? 'bg-white text-black border-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                      : 'bg-neutral-900/70 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </BlurFade>

          {/* Dynamic Hero Spotlight Card */}
          <BlurFade delay={0.15}>
            <AnimatePresence mode="wait">
              <motion.div
                key={spotlightProject.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-neutral-900/80 border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Media Preview */}
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black group shadow-2xl">
                  <img
                    src={spotlightProject.primaryImage}
                    alt={spotlightProject.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-black/80 backdrop-blur-md text-white border border-white/20 font-semibold">
                      {spotlightProject.category}
                    </span>
                  </div>
                </div>

                {/* Details & Case Study CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-accent-sky uppercase tracking-wider block">
                      {spotlightProject.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight leading-tight">
                      {spotlightProject.shortTitle}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {spotlightProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-light line-clamp-4">
                    {spotlightProject.tagline || spotlightProject.overview}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {spotlightProject.technologies.slice(0, 5).map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      to={`/projects/${spotlightProject.id}`}
                      className="btn-primary text-xs py-2.5 px-5 font-semibold"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {spotlightProject.githubUrl && (
                      <a
                        href={spotlightProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                      >
                        GitHub &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </BlurFade>

          {/* Grid of Other Shipped Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {projects.slice(1, 7).map((project, idx) => (
              <BlurFade key={project.id} delay={0.1 + idx * 0.08}>
                <ProjectCard project={project} index={idx} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The 4 Engineering Pillars */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-neutral-950/60">
        <div className="max-w-6xl mx-auto space-y-12">
          <BlurFade>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 inline-block">
                Architectural Domains
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter font-sans">
                Four Pillars of Technical Execution
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Applied across verified academic projects, national hackathons, and corporate internships.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Healthcare Analytics',
                tech: 'PM4Py • Streamlit • Python',
                desc: 'Process mining clinical event-logs, Directly-Follows Graphs, bottleneck discovery, and waiting-time reduction.',
                icon: Activity,
                color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
              },
              {
                step: '02',
                title: 'Conversational NLP',
                tech: 'NLTK • spaCy • LinearSVC • DRF',
                desc: 'Intent classification, medical entity extraction, sublinear TF-IDF retrieval, and emergency triage gates.',
                icon: Brain,
                color: 'text-accent-sky border-sky-500/30 bg-sky-500/10'
              },
              {
                step: '03',
                title: 'Agronomic Intelligence',
                tech: 'CNN Vision • TensorFlow • Scikit',
                desc: 'Crop disease prediction from foliage pathology and precipitation forecasting models for farmers.',
                icon: Cpu,
                color: 'text-amber-400 border-amber-500/30 bg-amber-500/10'
              },
              {
                step: '04',
                title: 'Full Stack Systems',
                tech: 'React • TypeScript • Django • SQL',
                desc: 'Clash-free timetable scheduling engines (SIH), scalable travel management, and responsive web apps.',
                icon: Layers,
                color: 'text-accent-violet border-violet-500/30 bg-violet-500/10'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <BlurFade key={idx} delay={idx * 0.08}>
                  <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all space-y-4 hover:-translate-y-1 shadow-elevated">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${pillar.color}`}>
                        {pillar.step}
                      </span>
                      <Icon className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-sans">{pillar.title}</h4>
                      <p className="text-[11px] font-mono text-zinc-400 mt-0.5">{pillar.tech}</p>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Verified Credentials Vault Preview */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900/90">
        <div className="max-w-6xl mx-auto rounded-3xl bg-neutral-900/80 border border-white/15 p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-accent-blue/30 bg-accent-blue/10 text-accent-sky inline-block">
                Official Credential Vault
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                23 Verified Certificates &amp; Documents
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Every certificate—including Google &amp; AICTE EduSkills, Tata &amp; Forage, Oracle Academy, IIT Bombay, Blackbucks, and HP Foundation—is available for direct in-browser inspection and PDF download.
              </p>
            </div>

            <Link
              to="/certifications"
              className="btn-primary text-xs py-3 px-6 font-semibold shrink-0"
            >
              <Award className="w-4 h-4" />
              <span>Explore All 23 Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Partner Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-4 border-t border-white/10 text-center font-mono text-xs text-zinc-300">
            {['Google | EduSkills', 'Tata & Forage', 'Oracle Academy', 'IIT Bombay', 'Blackbucks', 'Cisco Academy'].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Experience & Honors Snapshot */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work History */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
                  Verified Roles
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans mt-1">
                  Internships &amp; Practical Experience
                </h3>
              </div>
              <Link
                to="/experience"
                className="text-xs font-mono text-accent-sky hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Timeline &rarr;</span>
              </Link>
            </div>

            <div className="space-y-4">
              {internships.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-2 hover:border-white/25 transition-all shadow-subtle"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">{exp.role}</h4>
                      <p className="text-xs text-accent-sky font-mono mt-0.5">{exp.company}</p>
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      exp.status === 'Ongoing'
                        ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                        : exp.status === 'Scheduled'
                        ? 'border-accent-blue/40 text-accent-sky bg-accent-blue/10'
                        : 'border-white/10 text-zinc-400 bg-white/5'
                    }`}>
                      {exp.status} &bull; {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Hackathon Standings */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                  Competition Honors
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans mt-1">
                  Key Standings
                </h3>
              </div>
              <Link
                to="/achievements"
                className="text-xs font-mono text-accent-sky hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>View all &rarr;</span>
              </Link>
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-2 hover:border-white/25 transition-all shadow-subtle"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold text-white font-sans">{ach.title}</p>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300 shrink-0">
                      {ach.badge}
                    </span>
                  </div>
                  <p className="text-xs text-accent-sky font-mono">{ach.organization}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. Recruiter CTA with Confetti */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <BlurFade>
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-neutral-900 to-black border border-white/15 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 inline-block">
              Actively Seeking Internships &amp; Engineering Roles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter max-w-2xl mx-auto font-sans">
              Ready to Engineer High-Impact Systems Together?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
              Available for Machine Learning Engineering, Full-Stack Development, and Applied Healthcare/Agronomic Data Analytics roles.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-sm py-3 px-7 font-semibold"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleResumeDownload}
                className="btn-secondary text-sm py-3 px-7 font-semibold"
              >
                <Download className="w-4 h-4 text-accent-sky" />
                <span>Download Official Resume</span>
              </button>
            </div>
          </div>
        </BlurFade>
      </section>

    </div>
  );
}
