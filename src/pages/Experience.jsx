import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Building,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { internships } = portfolioData;
  const [expandedId, setExpandedId] = useState('infotact');

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Professional Engagements &amp; Industry Experience
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Internships &amp; Practical Roles
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-2xl leading-relaxed">
          Chronological record of software engineering, artificial intelligence, and data analytics internships. Clearly distinguished between ongoing engagements, completed terms, and upcoming appointments.
        </p>
      </div>

      {/* Professional Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-editorial-line space-y-10">
        {internships.map((exp, idx) => {
          const isOngoing = exp.status === 'Ongoing';
          const isScheduled = exp.status === 'Scheduled';
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="relative space-y-3"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 bg-obsidian-950 flex items-center justify-center transition-colors ${
                  isOngoing
                    ? 'border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                    : isScheduled
                    ? 'border-accent-sky shadow-[0_0_8px_rgba(14,165,233,0.4)]'
                    : 'border-editorial-lineLight'
                }`}
              >
                {isOngoing && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
                {isScheduled && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`rounded-2xl bg-obsidian-850/90 border transition-all duration-300 p-6 sm:p-7 space-y-4 shadow-subtle ${
                  isOngoing
                    ? 'border-emerald-500/30 hover:border-emerald-500/50'
                    : 'border-editorial-line hover:border-editorial-lineFocus'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-editorial-line pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-ink-50">
                        {exp.role}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-sky font-mono mt-0.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                        isOngoing
                          ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10 font-bold'
                          : isScheduled
                          ? 'border-accent-blue/40 text-accent-sky bg-accent-blue/10'
                          : 'border-editorial-line text-ink-400 bg-obsidian-900'
                      }`}
                    >
                      {exp.duration}
                    </span>
                    <span className="text-xs font-mono text-ink-500">
                      ({exp.type})
                    </span>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                {exp.responsibilities && (
                  <div className="space-y-2 pt-2 border-t border-editorial-line/60">
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center justify-between w-full text-xs font-mono font-semibold text-ink-400 hover:text-white transition-colors py-1"
                    >
                      <span className="uppercase tracking-wider">
                        Key Deliverables &amp; Responsibilities ({exp.responsibilities.length})
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-accent-sky' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-2 pt-1 overflow-hidden"
                        >
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="flex items-start gap-2.5 text-xs text-ink-300 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-sky shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Technologies Applied */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-ink-400 bg-obsidian-900 border border-editorial-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
