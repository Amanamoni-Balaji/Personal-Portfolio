import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Layers,
  LineChart,
  Brain,
  Wrench,
  Sparkles,
  Search
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import TechLogo from '../components/TechLogo';
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
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
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
          Structured across programming, core fundamentals, artificial intelligence, full-stack web architectures, data analytics, and tools. Every technology listed has been verified in shipped applications and internships — with authentic brand logos and zero arbitrary percentages.
        </p>

        {/* Search Bar & Filter Switcher */}
        <div className="pt-4 space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. Python, React, SQL, Django)..."
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

                    {/* Skills Grid with Authentic Technology Brand Logos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryGroup.items.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4.5 rounded-2xl bg-[#07090e]/95 border border-white/[0.07] hover:border-blue-500/35 hover:bg-[#0b0f1a] transition-all duration-300 group flex flex-col justify-between space-y-3 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_25px_rgba(37,99,235,0.15)] relative overflow-hidden"
                        >
                          {/* Ambient glow accent on hover */}
                          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

                          {/* Top Row: Authentic Brand Logo + Skill Name & Level Badge */}
                          <div className="flex items-start justify-between gap-3 relative z-10">
                            <div className="flex items-start gap-3 min-w-0">
                              <div className="w-11 h-11 rounded-xl bg-[#0e1322] border border-white/10 group-hover:border-blue-500/30 p-2 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300 mt-0.5">
                                <TechLogo name={skill.name} size={26} className="w-6.5 h-6.5 object-contain" />
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-sm font-bold text-white group-hover:text-accent-sky transition-colors font-mono leading-snug">
                                  {skill.name}
                                </h3>
                                <span className="text-[10px] font-mono text-ink-400 block mt-0.5">
                                  {categoryGroup.category}
                                </span>
                              </div>
                            </div>

                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-ink-300 border border-white/10 shrink-0 group-hover:border-blue-500/30 group-hover:text-ink-100 transition-colors">
                              {skill.level}
                            </span>
                          </div>

                          {/* Descriptive Context */}
                          <p className="text-xs text-ink-400 leading-relaxed font-sans pt-2 border-t border-white/[0.04] relative z-10">
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
