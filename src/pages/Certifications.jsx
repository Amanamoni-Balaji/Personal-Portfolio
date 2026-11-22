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
  ShieldCheck,
  Building,
  Calendar,
  Eye,
  Sparkles,
  Layers
} from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications, internshipCertificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  // Filters for Internship Certificates
  const [internFilter, setInternFilter] = useState('All');
  const internCategories = ['All', 'AI & Machine Learning', 'Web Development', 'Data Analytics'];

  // Filters for General Certifications
  const [certFilter, setCertFilter] = useState('All');
  const issuers = ['All', 'Cisco', 'EduSkills', 'Oracle', 'SCRS'];

  const filteredInternCerts =
    internFilter === 'All'
      ? internshipCertificates
      : internshipCertificates.filter((c) => c.category === internFilter);

  const filteredGeneralCerts =
    certFilter === 'All'
      ? certifications
      : certifications.filter((c) =>
          c.issuer.toLowerCase().includes(certFilter.toLowerCase())
        );

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Top Editorial Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-sky text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Official Verified Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-3xl leading-relaxed">
          Verifiable credentials earned across artificial intelligence, machine learning, data analytics, and modern full-stack web architectures. Select any document to inspect the official PDF, zoom in, or download.
        </p>
      </div>

      {/* DEDICATED SECTION 1: INTERNSHIP CERTIFICATES */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-accent-sky uppercase tracking-wider">
              Workplace &amp; Virtual Internships
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 font-sans tracking-tight">
              Internship Certificates
            </h2>
            <p className="text-xs sm:text-sm text-ink-400 max-w-2xl leading-relaxed">
              Official completion certificates and appointment documentation from Google for Developers &bull; EduSkills, Blackbucks Education, Innovation Hacks, Blend Vidya, and Infotact Solutions.
            </p>
          </div>

          {/* Internship Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {internCategories.map((item) => {
              const isSelected = internFilter === item;
              return (
                <button
                  key={item}
                  onClick={() => setInternFilter(item)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                      : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="internFilterPill"
                      className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                  <span>{item === 'All' ? 'All Internships (5)' : item}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Internship Certificates Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredInternCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl bg-obsidian-850/90 border border-editorial-line hover:border-editorial-lineFocus p-6 flex flex-col justify-between space-y-5 shadow-subtle hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    cert.accentColor || 'from-accent-blue to-accent-sky'
                  }`}
                />

                <div className="space-y-3.5">
                  {/* Card Header: Issuer Tag & Status */}
                  <div className="flex items-start justify-between gap-3 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-900 border border-editorial-line text-[11px] font-mono font-medium text-accent-sky">
                      <Building className="w-3.5 h-3.5" />
                      <span>{cert.issuerLogoText || cert.organization}</span>
                    </div>

                    <span className="badge-editorial text-[10px] text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                      {cert.badge || cert.status}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-base font-bold text-ink-50 group-hover:text-accent-sky transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-ink-300 font-mono mt-1">
                      {cert.role}
                    </p>
                    <p className="text-[11px] text-ink-500 font-mono mt-0.5">
                      {cert.organization}
                    </p>
                  </div>

                  {/* Duration & Credential Metadata */}
                  <div className="p-3 rounded-xl bg-obsidian-900/80 border border-editorial-line space-y-1.5 text-xs font-mono">
                    <div className="flex items-center justify-between text-ink-400">
                      <span className="text-ink-500">Duration</span>
                      <span className="text-ink-200">{cert.duration}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center justify-between text-ink-400">
                        <span className="text-ink-500">ID</span>
                        <span className="text-accent-sky truncate max-w-[170px]" title={cert.credentialId}>
                          {cert.credentialId}
                        </span>
                      </div>
                    )}

                    {cert.grade && (
                      <div className="flex items-center justify-between text-ink-400">
                        <span className="text-ink-500">Evaluation</span>
                        <span className="text-emerald-400 font-semibold">{cert.grade}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-ink-400 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Skills Validated */}
                  <div className="flex flex-wrap gap-1 pt-1">
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
                </div>

                {/* Actions Row */}
                <div className="pt-4 border-t border-editorial-line/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="btn-primary text-xs py-2 px-3.5 flex-1 inline-flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-ink-400 hover:text-white rounded-lg bg-obsidian-900 border border-editorial-line hover:border-editorial-lineFocus transition-colors"
                    title="Open in new browser tab"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={cert.pdfUrl}
                    download
                    className="p-2 text-ink-400 hover:text-white rounded-lg bg-obsidian-900 border border-editorial-line hover:border-editorial-lineFocus transition-colors"
                    title="Download certificate PDF"
                    aria-label="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECTION 2: TECHNICAL & INDUSTRY ACCREDITATIONS */}
      <section className="space-y-8 pt-6 border-t border-editorial-line">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-accent-sky uppercase tracking-wider">
              Technical Foundations &amp; Academics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 font-sans tracking-tight">
              Technical &amp; Academic Certifications
            </h2>
            <p className="text-xs sm:text-sm text-ink-400 max-w-2xl leading-relaxed">
              Formal accreditations in networking, Python computing, data analytics essentials, and collegiate hackathons.
            </p>
          </div>

          {/* Issuer Filters */}
          <div className="flex flex-wrap gap-2">
            {issuers.map((item) => {
              const isSelected = certFilter === item;
              return (
                <button
                  key={item}
                  onClick={() => setCertFilter(item)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                      : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="certIssuerFilterPill"
                      className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                  <span>{item === 'All' ? 'All Accreditations' : item}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* General Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGeneralCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl bg-obsidian-850/80 border border-editorial-line hover:border-editorial-lineFocus p-6 flex flex-col justify-between space-y-4 shadow-subtle hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
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

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="btn-primary text-xs py-1.5 px-3 flex-1 inline-flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </button>

                    {cert.pdfUrl && (
                      <>
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-ink-400 hover:text-white rounded-lg bg-obsidian-900 border border-editorial-line transition-colors"
                          title="Open in new tab"
                          aria-label="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={cert.pdfUrl}
                          download
                          className="p-1.5 text-ink-400 hover:text-white rounded-lg bg-obsidian-900 border border-editorial-line transition-colors"
                          title="Download PDF"
                          aria-label="Download PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Full-Screen Interactive Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
