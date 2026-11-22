import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { Layers, Sparkles, Filter, Search, Activity, Cpu, ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  // CareFlow and MediAssist AI for Flagship Spotlight
  const careflow = projects.find((p) => p.id === 'careflow');
  const mediassist = projects.find((p) => p.id === 'mediassist-ai');

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14">
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

      {/* Flagship Healthcare Projects Spotlight (Shown when filter is 'All' and no search query) */}
      {filter === 'All' && !searchQuery && (
        <BlurFade delay={0.1} className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-base sm:text-lg font-bold text-white font-sans">
                Latest Flagship Healthcare Innovations
              </h2>
            </div>
            <span className="text-xs font-mono text-ink-400">Featured Releases</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CareFlow Spotlight Banner */}
            {careflow && (
              <div className="group rounded-3xl bg-gradient-to-br from-[#071a14] via-[#09151c] to-[#070b10] border border-emerald-500/30 hover:border-emerald-400/60 p-6 sm:p-7 space-y-5 transition-all shadow-[0_0_30px_rgba(16,185,129,0.08)] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Clinical Process Mining</span>
                  </div>
                  <span className="text-xs font-mono text-ink-400">PM4Py &bull; Streamlit</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors font-sans tracking-tight">
                    <Link to={`/projects/${careflow.id}`}>{careflow.title}</Link>
                  </h3>
                  <p className="text-xs text-ink-300 leading-relaxed font-sans line-clamp-3">
                    {careflow.overview}
                  </p>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-emerald-500/20 bg-black">
                  <img
                    src={careflow.primaryImage}
                    alt={careflow.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-emerald-500/20">
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Streamlit', 'PM4Py', 'Data Analytics'].map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {careflow.githubUrl && (
                      <a
                        href={careflow.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-ink-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/50 inline-flex items-center gap-1.5 transition-all font-mono"
                        aria-label={`${careflow.shortTitle} repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                    <Link
                      to={`/projects/${careflow.id}`}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-sans"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* MediAssist AI Spotlight Banner */}
            {mediassist && (
              <div className="group rounded-3xl bg-gradient-to-br from-[#081525] via-[#09151c] to-[#070b10] border border-sky-500/30 hover:border-sky-400/60 p-6 sm:p-7 space-y-5 transition-all shadow-[0_0_30px_rgba(14,165,233,0.08)] hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-mono">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Healthcare NLP Chatbot</span>
                  </div>
                  <span className="text-xs font-mono text-ink-400">NLTK &bull; Streamlit</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors font-sans tracking-tight">
                    <Link to={`/projects/${mediassist.id}`}>{mediassist.title}</Link>
                  </h3>
                  <p className="text-xs text-ink-300 leading-relaxed font-sans line-clamp-3">
                    {mediassist.overview}
                  </p>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-sky-500/20 bg-black">
                  <img
                    src={mediassist.primaryImage}
                    alt={mediassist.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-sky-500/20">
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Streamlit', 'NLP (NLTK)', 'TF-IDF'].map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/60 text-sky-300 border border-sky-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {mediassist.githubUrl && (
                      <a
                        href={mediassist.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-ink-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-sky-400/50 inline-flex items-center gap-1.5 transition-all font-mono"
                        aria-label={`${mediassist.shortTitle} repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                    <Link
                      to={`/projects/${mediassist.id}`}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-sans"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </BlurFade>
      )}

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
