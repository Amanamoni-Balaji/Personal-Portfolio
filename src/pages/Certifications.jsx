import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  FileCheck,
  CheckCircle,
  FileText,
  Download,
  Filter,
  ShieldCheck
} from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('All');

  const issuers = ['All', 'Cisco Networking Academy', 'EduSkills', 'Oracle', 'SCRS'];

  const filteredCerts =
    filter === 'All'
      ? certifications
      : certifications.filter((c) =>
          c.issuer.includes(filter) || filter.includes(c.issuer)
        );

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Verified Credentials &amp; Certifications
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-2xl leading-relaxed">
          Formal credentials earned across cloud artificial intelligence, machine learning, networking, and relational database systems. Select any credential to view validated skills and certificates.
        </p>

        {/* Filter Badges with Animated Layout Indicator */}
        <div className="flex flex-wrap gap-2 pt-4">
          {issuers.map((item) => {
            const isSelected = filter === item;
            return (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                    : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="certIssuerPill"
                    className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                  />
                )}
                <span>{item === 'All' ? 'All Issuers' : item}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Certifications Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl bg-obsidian-850/80 border border-editorial-line hover:border-editorial-lineFocus p-6 flex flex-col justify-between space-y-4 shadow-subtle hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-obsidian-900 border border-editorial-line flex items-center justify-center text-accent-sky group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="badge-editorial text-[10px] text-accent-sky">
                    {cert.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-ink-100 group-hover:text-accent-sky transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-ink-400 font-mono mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-ink-400 line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-editorial-line/80 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-ink-400 bg-obsidian-900 border border-editorial-line"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-500 bg-obsidian-900">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-accent-sky pt-1">
                  <span className="group-hover:underline">Inspect Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Modal for Certificate Preview */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
