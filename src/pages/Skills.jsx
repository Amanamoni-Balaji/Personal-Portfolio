import React, { useState } from 'react';
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
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const categoryIcons = {
    Programming: Terminal,
    'Core Fundamentals': Code2,
    'AI & Machine Learning': Brain,
    'Web Development': Layers,
    'Data Analytics': LineChart,
    'Tools & Platforms': Wrench,
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Technical Capabilities Matrix
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Technical Skills &amp; Stack
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-2xl leading-relaxed">
          Organized by domain with verified real-world application contexts. Authentic skills applied across production case studies and internships — no arbitrary percentage bars.
        </p>

        {/* Filter Pills with Animated Layout Indicator */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                    : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="skillTabPill"
                    className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual System Architecture & Data Engineering Pipeline */}
      <div className="rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-editorial-lineLight p-6 sm:p-8 space-y-6 shadow-elevated">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-editorial-line pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-accent-sky uppercase tracking-wider">
              Cross-Disciplinary System Flow
            </span>
            <h2 className="text-lg font-bold text-ink-50 font-sans">
              Applied Engineering Pipeline Architecture
            </h2>
          </div>
          <span className="badge-editorial text-[11px] self-start sm:self-auto">
            From Raw Data to User-Facing Intelligence
          </span>
        </div>

        {/* 4-Stage Architectural Layers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-obsidian-900/90 border border-editorial-line space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-blue/15 text-accent-sky border border-accent-blue/30 font-bold">
                STAGE 01
              </span>
              <Database className="w-4 h-4 text-ink-400" />
            </div>
            <h3 className="text-sm font-bold text-ink-100 font-sans">Data &amp; Ingestion Layer</h3>
            <p className="text-xs text-ink-400 leading-relaxed font-sans">
              Clinical event-log validation, meteorological time series, SQLite relational schemas, and Pandas cleaning pipelines.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/90 border border-editorial-line space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                STAGE 02
              </span>
              <Brain className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold text-ink-100 font-sans">AI &amp; Mining Engines</h3>
            <p className="text-xs text-ink-400 leading-relaxed font-sans">
              PM4Py Directly-Follows Graphs, NLTK/TF-IDF intent classification, CNN crop pathology vision, and regression models.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/90 border border-editorial-line space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/30 font-bold">
                STAGE 03
              </span>
              <Layers className="w-4 h-4 text-accent-indigo" />
            </div>
            <h3 className="text-sm font-bold text-ink-100 font-sans">Backend &amp; API Gateway</h3>
            <p className="text-xs text-ink-400 leading-relaxed font-sans">
              Django REST Framework services, JWT authentication, constraint satisfaction solvers, and modular micro-endpoints.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/90 border border-editorial-line space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30 font-bold">
                STAGE 04
              </span>
              <Terminal className="w-4 h-4 text-sky-400" />
            </div>
            <h3 className="text-sm font-bold text-ink-100 font-sans">Interactive Frontend UI</h3>
            <p className="text-xs text-ink-400 leading-relaxed font-sans">
              React + TypeScript interfaces, Streamlit 9-page analytical dashboards, Tailwind styling, and real-time Plotly charts.
            </p>
          </div>
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
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
                  className="rounded-2xl bg-obsidian-850/80 border border-editorial-line p-6 sm:p-8 space-y-6 shadow-subtle"
                >
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-editorial-line pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-obsidian-900 border border-editorial-line flex items-center justify-center text-accent-sky">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-ink-50 font-sans">
                          {categoryGroup.category}
                        </h2>
                        <p className="text-xs text-ink-400 mt-0.5">
                          {categoryGroup.description}
                        </p>
                      </div>
                    </div>
                    <span className="badge-editorial text-xs">
                      {categoryGroup.items.length} proficiencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryGroup.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-obsidian-900/90 border border-editorial-line/80 hover:border-editorial-lineFocus transition-all group flex flex-col justify-between space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-ink-100 group-hover:text-accent-sky transition-colors font-mono">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-800 text-ink-400 border border-editorial-line">
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
        </AnimatePresence>
      </div>

      {/* Engineering Philosophy Notice */}
      <div className="p-6 rounded-2xl bg-obsidian-900 border border-editorial-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-ink-100">
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
    </div>
  );
}
