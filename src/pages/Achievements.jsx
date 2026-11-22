import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Star,
  Users,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  const icons = {
    'datanyx-runnerup': Trophy,
    'hackwithhyd': Award,
    'smart-india-hackathon': Star,
    'tech-tycoons': Users
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Honors, Hackathons &amp; Community Contributions
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Achievements &amp; Activities
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-2xl leading-relaxed">
          Verifiable competition standings, national hackathon contributions, and university technical leadership. Focus on real outcomes and collaborative engineering.
        </p>
      </div>

      {/* Editorial Achievements Grid */}
      <div className="space-y-6">
        {achievements.map((item, idx) => {
          const Icon = icons[item.id] || Award;
          const isRunnerUp = item.id === 'datanyx-runnerup';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className={`rounded-2xl bg-obsidian-850/90 border p-6 sm:p-8 space-y-4 transition-all ${
                isRunnerUp
                  ? 'border-accent-blue/50 shadow-card-hover'
                  : 'border-editorial-line hover:border-editorial-lineFocus'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-editorial-line pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                      isRunnerUp
                        ? 'bg-accent-blue/15 border-accent-blue/40 text-accent-sky'
                        : 'bg-obsidian-900 border-editorial-line text-ink-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-ink-50">
                      {item.title}
                    </h2>
                    <p className="text-xs text-accent-sky font-mono mt-0.5">
                      {item.organization} &bull; {item.track}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                      isRunnerUp
                        ? 'border-accent-blue/40 text-accent-sky bg-accent-blue/10 font-bold'
                        : 'border-editorial-line text-ink-400 bg-obsidian-900'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-ink-500">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                {item.description}
              </p>

              {/* Impact Note */}
              {item.impact && (
                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-editorial-line flex items-start gap-2.5 text-xs text-ink-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Demonstrated Impact:</strong> {item.impact}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
