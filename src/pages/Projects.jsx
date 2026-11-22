import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Search } from 'lucide-react';
import BlurFade from '../components/BlurFade';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Healthcare & AI Systems',
    'Deep Learning & AgriTech',
    'Full Stack & Web Systems',
    'Optimization & Solvers',
  ];

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category match
      let matchesCat = true;
      if (filter === 'Healthcare & AI Systems') {
        matchesCat = p.category.includes('Healthcare') || p.category.includes('NLP') || p.category.includes('Process Mining');
      } else if (filter === 'Deep Learning & AgriTech') {
        matchesCat = p.category.includes('Deep Learning') || p.category.includes('AgriTech') || p.category.includes('Predictive');
      } else if (filter === 'Full Stack & Web Systems') {
        matchesCat = p.category.includes('Full Stack') || p.category.includes('Web') || p.category.includes('SRE');
      } else if (filter === 'Optimization & Solvers') {
        matchesCat = p.category.includes('Optimization') || p.category.includes('Smart Classroom');
      }

      // Search match
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = p.title.toLowerCase().includes(q) || p.shortTitle.toLowerCase().includes(q);
        const inTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        const inDesc = p.overview.toLowerCase().includes(q) || (p.tagline && p.tagline.toLowerCase().includes(q));
        const inCat = p.category.toLowerCase().includes(q);
        matchesSearch = inTitle || inTech || inDesc || inCat;
      }

      return matchesCat && matchesSearch;
    });
  }, [projects, filter, searchQuery]);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Header */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Case Studies Archive &bull; 8 Verified Systems</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-3xl leading-relaxed">
          In-depth technical case studies spanning healthcare process mining, intelligent conversational triage, agricultural computer vision, and constraint-based scheduling algorithms. Each study features real system architectures, metrics, and verified screenshots.
        </p>

        {/* Live Search & Filter Controls */}
        <div className="pt-4 space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. PM4Py, NLP, React, CNN, Django)..."
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
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? 'text-white border-blue-500/80 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                      : 'text-ink-400 border-white/10 bg-[#0a0d16]/80 hover:text-white hover:border-white/20'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="projectFilterPill"
                      className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                  <span>{cat === 'All' ? `All (${projects.length})` : cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </BlurFade>

      {/* Complete Projects Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-sans">
            {filter === 'All' ? 'All Engineering Projects' : `${filter} Projects`} ({filteredProjects.length})
          </h2>
          <span className="text-xs font-mono text-ink-400">Interactive Technical Archive</span>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#0a0d16] border border-white/10 space-y-3">
            <p className="text-sm text-ink-300">
              No projects matched your search for "<span className="text-white font-mono">{searchQuery}</span>".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setFilter('All'); }}
              className="btn-secondary text-xs py-2 px-4"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
