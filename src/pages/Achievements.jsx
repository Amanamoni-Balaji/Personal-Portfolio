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
import BlurFade from '../components/BlurFade';
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
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-14">
      {/* Header */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono">
          <Trophy className="w-3.5 h-3.5" />
          <span>Honors, Competitions &amp; Technical Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          Achievements &amp; Activities
        </h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-2xl leading-relaxed">
          Verifiable national competition standings, hackathon finalist selections, and technical student chapter leadership. Driven by real-world system implementations and collaborative engineering.
        </p>
      </BlurFade>

      {/* Editorial Achievements Grid */}
      <div className="space-y-6">
        {achievements.map((item, idx) => {
          const Icon = icons[item.id] || Award;
          const isRunnerUp = item.id === 'datanyx-runnerup';

          return (
            <BlurFade key={item.id} delay={idx * 0.08}>
              <div
                className={`rounded-3xl bg-[#0a0d16]/90 border p-6 sm:p-8 space-y-5 transition-all shadow-elevated ${
                  isRunnerUp
                    ? 'border-blue-500/40 shadow-[0_0_35px_rgba(59,130,246,0.15)] bg-gradient-to-br from-[#0c1222] via-[#0a0d16] to-[#07090e]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${
                        isRunnerUp
                          ? 'bg-blue-500/20 border-blue-400/40 text-accent-sky shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-white/5 border-white/10 text-ink-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-xl font-bold text-white font-sans tracking-tight">
                        {item.title}
                      </h2>
                      <p className="text-xs text-accent-sky font-mono mt-0.5">
                        {item.organization} &bull; {item.track}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${
                        isRunnerUp
                          ? 'border-blue-500/40 text-accent-sky bg-blue-500/10 font-bold'
                          : 'border-white/10 text-ink-300 bg-white/5'
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
                <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Impact Note */}
                {item.impact && (
                  <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] flex items-start gap-2.5 text-xs text-ink-300 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Demonstrated Impact:</strong> {item.impact}</span>
                  </div>
                )}
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
