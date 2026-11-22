import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Star,
  Users,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Eye,
  Download,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import CertificateModal from '../components/CertificateModal';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  const icons = {
    'iste-ramanujan-level2': Trophy,
    'iste-ramanujan-level1': Award,
    'scrs-ml-course': Sparkles,
    'datanyx-runnerup': Trophy,
    'hackwithhyd': Award,
    'smart-india-hackathon': Star,
    'tech-tycoons': Users,
    'academic-excellence': ShieldCheck
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
          Verifiable national competition standings, hackathon finalist selections, mathematics honors, and technical student chapter leadership. Backed by authenticated credentials and official certificates.
        </p>
      </BlurFade>

      {/* Editorial Achievements Grid */}
      <div className="space-y-6">
        {achievements.map((item, idx) => {
          const Icon = icons[item.id] || Award;
          const isFeatured =
            item.id === 'datanyx-runnerup' ||
            item.id === 'iste-ramanujan-level2';

          return (
            <BlurFade key={item.id} delay={idx * 0.06}>
              <div
                className={`rounded-3xl bg-[#0a0d16]/90 border p-6 sm:p-8 space-y-5 transition-all shadow-elevated ${
                  isFeatured
                    ? 'border-blue-500/40 shadow-[0_0_35px_rgba(59,130,246,0.15)] bg-gradient-to-br from-[#0c1222] via-[#0a0d16] to-[#07090e]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${
                        isFeatured
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
                        isFeatured
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

                {/* If Achievement has a Certificate Image, show Preview Banner */}
                {item.imageUrl && (
                  <div
                    onClick={() =>
                      setSelectedCert({
                        title: item.title,
                        organization: item.organization,
                        badge: item.badge,
                        pdfUrl: item.pdfUrl,
                        imageUrl: item.imageUrl,
                        description: item.description
                      })
                    }
                    className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-sky/50 cursor-pointer bg-black/40 transition-all shadow-inner group"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg text-xs font-mono bg-black/80 backdrop-blur-md border border-white/20 text-accent-sky flex items-center gap-1.5 font-semibold shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-accent-sky" /> Inspect Official Certificate
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Impact Note */}
                {item.impact && (
                  <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] flex items-start gap-2.5 text-xs text-ink-300 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Demonstrated Impact:</strong> {item.impact}
                    </span>
                  </div>
                )}

                {/* Actions row if certificate is available */}
                {(item.pdfUrl || item.imageUrl) && (
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() =>
                        setSelectedCert({
                          title: item.title,
                          organization: item.organization,
                          badge: item.badge,
                          pdfUrl: item.pdfUrl,
                          imageUrl: item.imageUrl,
                          description: item.description
                        })
                      }
                      className="btn-glow-sky light-sweep text-xs py-2 px-4 inline-flex items-center gap-2 rounded-xl font-semibold shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Official Certificate</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={item.pdfUrl || item.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all"
                        title="Open in new browser tab"
                        aria-label="Open in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={item.pdfUrl || item.imageUrl}
                        download
                        className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
                        title="Download certificate"
                        aria-label="Download certificate"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </BlurFade>
          );
        })}
      </div>

      {/* Interactive Certificate Viewing Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
