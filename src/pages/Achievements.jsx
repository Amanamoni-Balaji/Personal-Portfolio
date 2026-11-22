import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Star,
  Users,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Eye,
  Download,
  ShieldCheck
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import CertificateModal from '../components/CertificateModal';
import TeamGalleryModal from '../components/TeamGalleryModal';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const [isTeamGalleryOpen, setIsTeamGalleryOpen] = useState(false);

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
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
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
          Verifiable national competition standings, hackathon selections, academic honors, and technical leadership. Backed by authenticated credentials and official certificates.
        </p>
      </BlurFade>

      {/* Balanced, Compact Achievements Feed */}
      <div className="space-y-6">
        {achievements.map((item, idx) => {
          const Icon = icons[item.id] || Award;
          const isFeatured = item.id === 'datanyx-runnerup';
          const hasMultipleCerts = item.certificates && item.certificates.length > 0;
          const hasSingleImage = !hasMultipleCerts && Boolean(item.imageUrl);

          return (
            <BlurFade key={item.id} delay={idx * 0.05}>
              <div
                id={item.id}
                className={`rounded-2xl bg-[#0a0d16]/95 border transition-all duration-300 shadow-elevated ${
                  isFeatured
                    ? 'p-5 sm:p-6 border-blue-500/35 shadow-[0_0_30px_rgba(59,130,246,0.12)] bg-gradient-to-br from-[#0c1222] via-[#0a0d16] to-[#07090e] space-y-5'
                    : hasSingleImage
                    ? 'p-4 sm:p-5 border-white/[0.08] hover:border-white/20'
                    : 'p-5 sm:p-6 border-white/[0.08] hover:border-white/20 space-y-4'
                }`}
              >
                {/* CASE 1: FEATURED CARD WITH MULTIPLE CERTIFICATES (DATANYX 2025) */}
                {hasMultipleCerts ? (
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-blue-500/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 text-accent-sky flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.25)]">
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

                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono px-3 py-1 rounded-full border border-blue-500/40 text-accent-sky bg-blue-500/10 font-bold">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-ink-400 font-semibold">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Dual Certificate Showcase (Larger, prominent thumbnails) */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono text-ink-400">
                        <span className="flex items-center gap-1.5 text-accent-sky font-medium">
                          <ShieldCheck className="w-4 h-4 text-accent-sky shrink-0" />
                          <span className="text-white font-semibold">Official Credentials</span>
                          <span>&bull; {item.certificates.length} Verified Documents</span>
                        </span>
                        <span className="text-[11px] text-ink-500 hidden sm:inline">Click thumbnail to inspect</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {item.certificates.map((cert) => (
                          <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className="group/card rounded-xl bg-[#05070d] border border-white/10 hover:border-accent-sky/50 transition-all p-3 space-y-2 cursor-pointer shadow-sm hover:shadow-[0_6px_20px_rgba(14,165,233,0.12)] flex flex-col justify-between"
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
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-white group-hover/card:text-accent-sky transition-colors truncate">
                                {cert.label || cert.title}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-accent-sky bg-blue-500/10 border border-blue-500/25 shrink-0">
                                {cert.badge}
                              </span>
                            </div>

                            {/* Crisp, large thumbnail display */}
                            <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden bg-[#07090e] border border-white/[0.08] flex items-center justify-center group/thumb">
                              <img
                                src={cert.imageUrl}
                                alt={cert.title}
                                className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover/card:scale-[1.03]"
                                loading="lazy"
                              />
                              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/85 backdrop-blur-md border border-white/20 text-accent-sky flex items-center gap-1 font-semibold group-hover/card:border-accent-sky/60 group-hover/card:text-white transition-all">
                                <Eye className="w-3 h-3 text-accent-sky" /> Preview
                              </span>
                            </div>

                            <div className="pt-1.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                              <span className="text-ink-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>Verified Document</span>
                              </span>
                              <span className="text-accent-sky group-hover/card:underline inline-flex items-center gap-1 font-medium">
                                Inspect <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans pt-1">
                      {item.description}
                    </p>

                    {/* Demonstrated Impact Callout */}
                    {item.impact && (
                      <div className="p-3 rounded-xl bg-blue-500/[0.04] border border-blue-500/15 flex items-start gap-2.5 text-xs text-ink-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">Demonstrated Impact:</strong> {item.impact}
                        </span>
                      </div>
                    )}

                    {/* Actions Row */}
                    <div className="pt-3 border-t border-blue-500/20 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {item.certificates.map((cert) => (
                          <button
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className="btn-glow-sky light-sweep text-xs py-2 px-3 inline-flex items-center gap-1.5 rounded-xl font-semibold shadow-sm"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View {cert.label}</span>
                          </button>
                        ))}
                        {item.teamGallery && item.teamGallery.length > 0 && (
                          <button
                            onClick={() => setIsTeamGalleryOpen(true)}
                            className="btn-glow-sky light-sweep text-xs py-2 px-3.5 inline-flex items-center gap-1.5 rounded-xl font-bold shadow-sm bg-gradient-to-r from-blue-600/30 to-sky-600/30 border border-sky-400/50 text-white cursor-pointer"
                          >
                            <Users className="w-3.5 h-3.5 text-accent-sky" />
                            <span>View Team Gallery</span>
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {item.certificates.map((cert) => (
                          <a
                            key={`tab-${cert.id}`}
                            href={cert.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_12px_rgba(14,165,233,0.2)] transition-all"
                            title={`Open ${cert.label} in new browser tab`}
                            aria-label={`Open ${cert.label} in new tab`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : hasSingleImage ? (
                  /* CASE 2: SINGLE-CERTIFICATE CARDS WITH BALANCED HORIZONTAL SPLIT */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                    {/* Left Column: Prominent, Large Certificate Thumbnail */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
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
                        className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-accent-sky/50 cursor-pointer bg-[#05070d] transition-all duration-300 shadow-md group flex items-center justify-center p-2"
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
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/85 backdrop-blur-md border border-white/20 text-accent-sky flex items-center gap-1 font-semibold shadow-md group-hover:border-accent-sky/60 group-hover:text-white transition-all">
                          <Eye className="w-3 h-3 text-accent-sky" /> Inspect Document
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Clean Content & Information Hierarchy */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
                      {/* Card Header */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-accent-sky flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h2 className="text-base sm:text-lg font-bold text-white font-sans tracking-tight leading-snug">
                                {item.title}
                              </h2>
                              <p className="text-xs text-accent-sky font-mono mt-0.5">
                                {item.organization} &bull; {item.track}
                              </p>
                            </div>
                          </div>

                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 text-ink-300 bg-white/5 shrink-0 hidden sm:inline-block">
                            {item.year}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-blue-500/30 text-accent-sky bg-blue-500/10 font-semibold">
                            {item.badge}
                          </span>
                          <span className="text-[11px] font-mono text-ink-400 sm:hidden">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Demonstrated Impact Callout */}
                      {item.impact && (
                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2 text-xs text-ink-300 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-white">Demonstrated Impact:</strong> {item.impact}
                          </span>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-3">
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
                          className="btn-glow-sky light-sweep text-xs py-2 px-3.5 inline-flex items-center gap-2 rounded-xl font-semibold shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{item.id === 'academic-excellence' ? 'View Official Grade Report' : 'View Official Certificate'}</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={item.pdfUrl || item.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_12px_rgba(14,165,233,0.2)] transition-all"
                            title="Open in new browser tab"
                            aria-label="Open in new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={item.pdfUrl || item.imageUrl}
                            download
                            className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all"
                            title="Download document"
                            aria-label="Download document"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* CASE 3: TEXT-BASED CARD WITHOUT IMAGE (TECH TYCOONS) */
                  <div className="space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-accent-sky flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-base sm:text-lg font-bold text-white font-sans tracking-tight">
                            {item.title}
                          </h2>
                          <p className="text-xs text-accent-sky font-mono mt-0.5">
                            {item.organization} &bull; {item.track}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-white/10 text-ink-300 bg-white/5 font-semibold">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-ink-400">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {item.impact && (
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-ink-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">Demonstrated Impact:</strong> {item.impact}
                        </span>
                      </div>
                    )}
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

      {/* Interactive Team & Teammates Photo Gallery Modal */}
      <TeamGalleryModal
        photos={achievements.find((a) => a.id === 'datanyx-runnerup')?.teamGallery || []}
        isOpen={isTeamGalleryOpen}
        onClose={() => setIsTeamGalleryOpen(false)}
      />
    </div>
  );
}
