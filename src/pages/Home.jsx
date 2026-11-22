import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Sparkles,
  Layers,
  Code2,
  Briefcase,
  Award,
  Trophy,
  Star,
  Terminal,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Activity,
  CheckCircle2
} from 'lucide-react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';

export default function Home({ onOpenResume, onShowToast }) {
  const { personal, projects, skills, internships, achievements } = portfolioData;

  const quickStats = [
    { label: 'B.E. IT CGPA', value: '9.6 / 10', icon: GraduationCap, sub: 'Matrusri Eng College', link: '/about' },
    { label: 'Featured Projects', value: `${projects.length} Systems`, icon: Layers, sub: 'AI, Analytics & Web', link: '/projects' },
    { label: 'Internship Certificates', value: '5 Verified', icon: Award, sub: 'Google, Blackbucks & more', link: '/certifications' },
    { label: 'Datathon Runner-Up', value: 'Datanyx 2025', icon: Trophy, sub: 'AgroTech Track', link: '/achievements' },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero onOpenResume={onOpenResume} onShowToast={onShowToast} />

      {/* Metrics Bar Inspired by GitHub & Kaggle */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 border-y border-editorial-line bg-obsidian-900/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Link
                  key={idx}
                  to={stat.link}
                  className="p-4 rounded-xl bg-obsidian-850/80 border border-editorial-line hover:border-editorial-lineFocus transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-editorial-line flex items-center justify-center text-accent-sky group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-ink-500 group-hover:text-accent-sky group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-ink-50 font-mono tracking-tight group-hover:text-accent-sky transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-ink-300 mt-0.5">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-ink-500 font-mono">
                      {stat.sub}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
            <div>
              <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
                Featured Engineering Work
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-50 tracking-tight mt-1 font-sans">
                Production-Quality Systems &amp; Case Studies
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-sky hover:text-white transition-colors"
            >
              <span>View all projects ({projects.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Featured Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.slice(0, 6).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Official Credentials Vault Banner */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-editorial-line bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-sky text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>23 Verified Certificates &amp; Documents</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink-50 font-sans tracking-tight">
              Verified Technical Credentials &amp; Internship Accreditations
            </h3>
            <p className="text-xs sm:text-sm text-ink-400 max-w-2xl leading-relaxed">
              Every certificate—including Google &amp; AICTE EduSkills, Tata &amp; Forage, Oracle Academy, IIT Bombay, Blackbucks, and HP Foundation—is available for direct in-browser inspection and PDF download.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/certifications"
              className="btn-primary text-xs py-2.5 px-5"
            >
              <Award className="w-4 h-4" />
              <span>Explore Credentials Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Matrix Preview Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-editorial-line bg-obsidian-900/50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
            <div>
              <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
                Technical Proficiencies
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 tracking-tight mt-1 font-sans">
                Core Engineering Stack
              </h2>
              <p className="text-xs sm:text-sm text-ink-400 mt-1 max-w-xl">
                Rigorous foundations in machine learning algorithms, modern frontend frameworks, and robust server logic.
              </p>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-sky hover:text-white transition-colors"
            >
              <span>Explore full skill matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Categorized Skills Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.slice(0, 6).map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-obsidian-850/70 border border-editorial-line hover:border-editorial-lineFocus transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-ink-100 font-mono">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-ink-500">
                    {group.items.length} items
                  </span>
                </div>
                <p className="text-xs text-ink-400 mb-4 line-clamp-1">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-ink-300 bg-obsidian-900 border border-editorial-line"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements Snapshot */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-editorial-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Experience Timeline Preview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-editorial-line pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
                  Work History
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-ink-50 mt-1">
                  Internships &amp; Roles
                </h3>
              </div>
              <Link
                to="/experience"
                className="text-xs font-mono text-accent-sky hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>All details &rarr;</span>
              </Link>
            </div>

            <div className="space-y-4">
              {internships.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-xl bg-obsidian-850/60 border border-editorial-line space-y-2 hover:border-editorial-lineFocus transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-ink-100">{exp.role}</h4>
                      <p className="text-xs text-accent-sky font-mono mt-0.5">{exp.company}</p>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      exp.status === 'Ongoing'
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : exp.status === 'Scheduled'
                        ? 'border-accent-blue/30 text-accent-sky bg-accent-blue/10'
                        : 'border-editorial-line text-ink-400 bg-obsidian-900'
                    }`}>
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs text-ink-400 leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Achievements & Honors */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-editorial-line pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
                  Honors
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-ink-50 mt-1">
                  Key Achievements
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
                  className="p-4 rounded-xl bg-obsidian-850/60 border border-editorial-line space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold text-ink-100">{ach.title}</p>
                    <span className="badge-editorial text-[10px] shrink-0">
                      {ach.badge}
                    </span>
                  </div>
                  <p className="text-xs text-ink-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Call to Action Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-editorial-line bg-obsidian-900/60">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-obsidian-850 to-obsidian-900 border border-editorial-lineLight p-8 sm:p-12 text-center space-y-6 shadow-elevated">
          <span className="badge-status">
            Actively Seeking Internships &amp; Entry-Level Engineering Roles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-50 tracking-tight max-w-2xl mx-auto">
            Ready to Build Meaningful Software Together?
          </h2>
          <p className="text-sm text-ink-400 max-w-xl mx-auto leading-relaxed">
            Whether you are exploring candidates for AI/ML engineering, full-stack development, or clinical/agronomic data analytics, I welcome conversations.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-6"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onOpenResume}
              className="btn-secondary text-sm py-2.5 px-6"
            >
              <Download className="w-4 h-4 text-accent-sky" />
              <span>Download Official Resume</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
