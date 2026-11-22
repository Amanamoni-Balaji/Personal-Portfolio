import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Database,
  Layers,
  LineChart,
  Brain,
  Wrench,
  CheckCircle2,
  Filter,
  Sparkles,
  Search,
  Activity,
  ArrowRight
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skills.map((s) => s.category)];

  const categoryIcons = {
    Programming: Terminal,
    'Core Fundamentals': Code2,
    'AI & Machine Learning': Brain,
    'Web Development': Layers,
    'Data Analytics': LineChart,
    'Tools & Platforms': Wrench,
  };

  // Filter skills based on category and search query
  const filteredSkills = useMemo(() => {
    let result = activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result
        .map((catGroup) => ({
          ...catGroup,
          items: catGroup.items.filter(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.context.toLowerCase().includes(q) ||
              item.level.toLowerCase().includes(q)
          ),
        }))
        .filter((catGroup) => catGroup.items.length > 0);
    }

    return result;
  }, [activeCategory, searchQuery, skills]);

  const totalSkillCount = skills.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-14">
      {/* Editorial Header */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Capabilities Matrix &bull; {totalSkillCount} Verified Technologies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          Technical Skills &amp; Stack
        </h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-3xl leading-relaxed">
          Structured across data engineering, artificial intelligence, process mining, full-stack web architectures, and algorithms. Every technology listed has been verified in shipped applications and internships — no arbitrary rating percentages.
        </p>

        {/* Search Bar & Filter Switcher */}
        <div className="pt-4 space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. Python, PM4Py, React, SQL, NLP)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0d16] border border-white/10 text-xs text-white placeholder:text-ink-500 focus:outline-none focus:border-accent-blue transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-ink-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills with Animated Layout Indicator */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? 'text-white border-blue-500/70 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                      : 'text-ink-400 border-white/10 bg-[#0a0d16]/80 hover:text-white hover:border-white/20'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="skillTabPill"
                      className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </BlurFade>

      {/* Visual System Architecture & Data Engineering Pipeline */}
      <BlurFade delay={0.1}>
        <div className="rounded-3xl bg-gradient-to-r from-[#0b0e17] via-[#0f1422] to-[#0b0e17] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle ambient blur light */}
          <div className="absolute top-0 right-1/4 w-72 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-accent-sky uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                <span>Cross-Disciplinary System Flow</span>
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white font-sans">
                Applied Engineering Pipeline Architecture
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono text-ink-300 bg-white/5 border border-white/10 self-start sm:self-auto">
              From Raw Logs to Intelligent Interfaces
            </span>
          </div>

          {/* 4-Stage Architectural Layers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#07090e]/80 border border-white/[0.08] space-y-3 hover:border-blue-400/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-accent-sky border border-blue-500/30 font-bold">
                  STAGE 01
                </span>
                <Database className="w-4 h-4 text-accent-sky" />
              </div>
              <h3 className="text-sm font-bold text-white font-sans">Data &amp; Ingestion Layer</h3>
              <p className="text-xs text-ink-400 leading-relaxed font-sans">
                Clinical event-log validation, meteorological time series, SQLite relational schemas, and Pandas cleaning pipelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#07090e]/80 border border-white/[0.08] space-y-3 hover:border-emerald-400/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                  STAGE 02
                </span>
                <Brain className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-sm font-bold text-white font-sans">AI &amp; Mining Engines</h3>
              <p className="text-xs text-ink-400 leading-relaxed font-sans">
                PM4Py Directly-Follows Graphs, NLTK/TF-IDF intent classification, CNN crop pathology vision, and regression models.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#07090e]/80 border border-white/[0.08] space-y-3 hover:border-indigo-400/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 font-bold">
                  STAGE 03
                </span>
                <Layers className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="text-sm font-bold text-white font-sans">Backend &amp; API Gateway</h3>
              <p className="text-xs text-ink-400 leading-relaxed font-sans">
                Django REST Framework services, JWT authentication, constraint satisfaction solvers, and modular micro-endpoints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#07090e]/80 border border-white/[0.08] space-y-3 hover:border-sky-400/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30 font-bold">
                  STAGE 04
                </span>
                <Terminal className="w-4 h-4 text-sky-400" />
              </div>
              <h3 className="text-sm font-bold text-white font-sans">Interactive Frontend UI</h3>
              <p className="text-xs text-ink-400 leading-relaxed font-sans">
                React + TypeScript interfaces, Streamlit analytical dashboards, Tailwind styling, and real-time Plotly charts.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Categorized Skills Grid */}
      <div className="space-y-8">
        <AnimatePresence mode="wait">
          {filteredSkills.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-12 text-center rounded-3xl bg-[#0a0d16] border border-white/10 space-y-3"
            >
              <p className="text-sm text-ink-300">
                No technical skills matched "<span className="text-white font-mono">{searchQuery}</span>".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="btn-secondary text-xs py-2 px-4"
              >
                Reset Search Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {filteredSkills.map((categoryGroup, idx) => {
                const Icon = categoryIcons[categoryGroup.category] || Code2;
                return (
                  <div
                    key={idx}
                    className="rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] p-6 sm:p-8 space-y-6 shadow-elevated"
                  >
                    {/* Category Header */}
                    <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-sky">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-white font-sans">
                            {categoryGroup.category}
                          </h2>
                          <p className="text-xs text-ink-400 mt-0.5 font-sans">
                            {categoryGroup.description}
                          </p>
                        </div>
                      </div>
                      <span className="badge-editorial text-xs shrink-0">
                        {categoryGroup.items.length} proficiencies
                      </span>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryGroup.items.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] hover:border-white/25 transition-all group flex flex-col justify-between space-y-2 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-sm font-bold text-white group-hover:text-accent-sky transition-colors font-mono">
                              {skill.name}
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-ink-300 border border-white/10">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-ink-400 leading-relaxed font-sans">
                            {skill.context}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Engineering Philosophy Notice */}
      <BlurFade delay={0.15}>
        <div className="p-6 rounded-3xl bg-[#0b0e17] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white font-sans">
              Commitment to Authentic Technical Communication
            </h3>
            <p className="text-xs text-ink-400 mt-1 max-w-2xl leading-relaxed">
              Proficiency is represented through actual shipped code, completed projects, and verified internship deliverables rather than arbitrary percentage ratings.
            </p>
          </div>
          <span className="badge-status text-xs shrink-0">
            Code-Verified Stack
          </span>
        </div>
      </BlurFade>
    </div>
  );
}
