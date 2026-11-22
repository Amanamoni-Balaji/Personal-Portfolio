import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { Layers, Sparkles, Filter } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Healthcare Analytics & Process Mining',
    'AI Healthcare & NLP Systems',
    'AI & Predictive Analytics',
    'Deep Learning & AgriTech',
    'Full Stack & Web Systems',
    'Optimization & Full Stack',
    'Generative AI & SRE Operations'
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase()) ||
          filter.toLowerCase().includes(p.category.toLowerCase())
        );

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Portfolio Archive &amp; Technical Case Studies
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-3xl leading-relaxed">
          Deep-dives into intelligent software applications, machine learning models, and full-stack systems. Each case study features problem statements, solution architecture, my individual contributions, and authentic screenshots.
        </p>

        {/* Filters with Animated Layout Indicator */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                    : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="projectCategoryPill"
                    className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                  />
                )}
                <span>{cat === 'All' ? 'All Projects' : cat.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Recruiter Footnote */}
      <div className="p-6 rounded-2xl bg-obsidian-900 border border-editorial-line text-xs font-mono text-ink-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-ink-200 font-bold block mb-1">Authentic Project Artifacts</span>
          All screenshots, wireframes, and implementation descriptions reflect verified academic, internship, and hackathon project deliverables.
        </div>
        <span className="badge-status text-xs shrink-0">
          Open Source Code Available
        </span>
      </div>
    </div>
  );
}
