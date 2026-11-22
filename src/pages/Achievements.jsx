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

  React.useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, []);

  const icons = {
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
          const isFeatured = item.id === 'datanyx-runnerup';

          return (
            <BlurFade key={item.id} delay={idx * 0.06}>
              <div
                id={item.id}
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

                {/* Certificate Gallery (Multi-Certificate or Single) */}
                {item.certificates && item.certificates.length > 0 ? (
                  <div className="space-y-3 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-ink-400 gap-1.5">
                      <span className="flex items-center gap-2 flex-wrap">
                        <ShieldCheck className="w-4 h-4 text-accent-sky shrink-0" />
                        <span className="text-white font-semibold">Official Credentials Gallery</span>
                        <span className="text-accent-sky">&bull; {item.certificates.length} Verified Certificates</span>
                      </span>
                      <span className="text-[11px] text-ink-500 hidden sm:inline">Click thumbnail to inspect original document</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.certificates.map((cert) => (
                        <div
                          key={cert.id}
                          onClick={() => setSelectedCert(cert)}
                          className="group/card rounded-2xl bg-[#05070d] border border-white/10 hover:border-accent-sky/50 transition-all p-3 space-y-2.5 cursor-pointer shadow-md hover:shadow-[0_8px_25px_rgba(14,165,233,0.15)] flex flex-col justify-between"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedCert(cert);
                            }
                          }}
                          aria-label={`Inspect ${cert.title}`}
                        >
                          <div className="space-y-2">
                            {/* Card sub-header with badge */}
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-bold text-white group-hover/card:text-accent-sky transition-colors font-sans">
                                {cert.label || cert.title}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-accent-sky bg-blue-500/10 border border-blue-500/30 shrink-0">
                                {cert.badge}
                              </span>
                            </div>

                            {/* Thumbnail container with contain-style fitting preserving full text & signatures */}
                            <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden bg-[#07090e] border border-white/[0.08] flex items-center justify-center group/thumb">
                              <img
                                src={cert.imageUrl}
                                alt={cert.title}
                                className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover/card:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                              <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/85 backdrop-blur-md border border-white/20 text-accent-sky flex items-center gap-1 font-semibold shadow-md group-hover/card:border-accent-sky/60 group-hover/card:text-white transition-all">
                                <Eye className="w-3 h-3 text-accent-sky" /> Preview
                              </span>
                            </div>
                          </div>

                          {/* Quick Inspect Sub-row */}
                          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2">
                            <span className="text-[11px] text-ink-400 font-mono flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>Verified Document</span>
                            </span>
                            <span className="text-xs text-accent-sky font-mono font-semibold group-hover/card:underline inline-flex items-center gap-1">
                              Inspect <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : item.imageUrl ? (
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
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-64 sm:max-h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-sky/50 cursor-pointer bg-[#05070d] transition-all shadow-inner group flex items-center justify-center"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedCert({
                          title: item.title,
                          organization: item.organization,
                          badge: item.badge,
                          pdfUrl: item.pdfUrl,
                          imageUrl: item.imageUrl,
                          description: item.description
                        });
                      }
                    }}
                    aria-label={`Inspect ${item.title}`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg text-xs font-mono bg-black/80 backdrop-blur-md border border-white/20 text-accent-sky flex items-center gap-1.5 font-semibold shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-accent-sky" /> Inspect Official Certificate
                    </span>
                  </div>
                ) : null}

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

                {/* Actions row if certificate(s) are available */}
                {item.certificates && item.certificates.length > 0 ? (
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.certificates.map((cert) => (
                        <button
                          key={cert.id}
                          onClick={() => setSelectedCert(cert)}
                          className="btn-glow-sky light-sweep text-xs py-2 px-3.5 inline-flex items-center gap-1.5 rounded-xl font-semibold shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View {cert.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {item.certificates.map((cert) => (
                        <a
                          key={`tab-${cert.id}`}
                          href={cert.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all"
                          title={`Open ${cert.label} in new browser tab`}
                          aria-label={`Open ${cert.label} in new tab`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (item.pdfUrl || item.imageUrl) ? (
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
                      <span>{item.id === 'academic-excellence' ? 'View Official Grade Report' : 'View Official Certificate'}</span>
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
                ) : null}
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
