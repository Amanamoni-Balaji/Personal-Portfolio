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
  Layers,
  GraduationCap,
  BookOpen,
  Briefcase
} from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { professionalCertifications, internshipCertificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  // Top Section View Filter
  const [activeSection, setActiveSection] = useState('all'); // 'all', 'professional', 'internship'

  // Category Filter for Professional Certifications
  const [profCategory, setProfCategory] = useState('All');
  const profCategories = [
    'All',
    'AI & Machine Learning',
    'Programming & Software',
    'Database & Cloud',
    'Data Analytics',
    'Cybersecurity & Systems',
    'Mathematics & Honors',
    'Professional Memberships'
  ];

  // Category Filter for Internship Certificates
  const [internCategory, setInternCategory] = useState('All');
  const internCategories = ['All', 'AI & Machine Learning', 'Web Development', 'Data Analytics'];

  // Filtered lists
  const filteredProfCerts =
    profCategory === 'All'
      ? professionalCertifications
      : professionalCertifications.filter((c) => c.category === profCategory);

  const filteredInternCerts =
    internCategory === 'All'
      ? internshipCertificates
      : internshipCertificates.filter((c) => c.category === internCategory);

  const showProfessional = activeSection === 'all' || activeSection === 'professional';
  const showInternships = activeSection === 'all' || activeSection === 'internship';

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Editorial Page Header */}
      <div className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-sky text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Official Verified Credentials Vault</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Certifications &amp; Accreditations
        </h1>

        <p className="text-sm sm:text-base text-ink-400 max-w-3xl leading-relaxed">
          Comprehensive repository of verified credentials, academic honors, technical certifications, and official internship completion documents. Every certificate is backed by original PDF files available for in-browser inspection and download.
        </p>

        {/* Section Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-3">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
              activeSection === 'all'
                ? 'bg-accent-blue text-white border-accent-blue shadow-sm'
                : 'bg-obsidian-850 text-ink-300 border-editorial-line hover:text-white hover:border-editorial-lineFocus'
            }`}
          >
            All Verified Documents ({professionalCertifications.length + internshipCertificates.length})
          </button>

          <button
            onClick={() => setActiveSection('professional')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
              activeSection === 'professional'
                ? 'bg-accent-blue text-white border-accent-blue shadow-sm'
                : 'bg-obsidian-850 text-ink-300 border-editorial-line hover:text-white hover:border-editorial-lineFocus'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Professional Certifications ({professionalCertifications.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('internship')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
              activeSection === 'internship'
                ? 'bg-accent-blue text-white border-accent-blue shadow-sm'
                : 'bg-obsidian-850 text-ink-300 border-editorial-line hover:text-white hover:border-editorial-lineFocus'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship Certificates ({internshipCertificates.length})</span>
          </button>
        </div>
      </div>

      {/* DEDICATED SECTION 1: PROFESSIONAL CERTIFICATIONS (NOT INTERNSHIPS) */}
      {showProfessional && (
        <section id="professional-certifications" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-sky" />
                <span className="text-xs font-mono font-bold text-accent-sky uppercase tracking-wider">
                  Academic, Technical &amp; Industry Credentials
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 font-sans tracking-tight">
                Professional Certifications
              </h2>
              <p className="text-xs sm:text-sm text-ink-400 max-w-2xl leading-relaxed">
                Accreditations and industry job simulations from Tata &amp; Forage, Oracle Academy, IIT Bombay, HP Foundation, Cisco Networking Academy, Soft Computing Research Society (SCRS), ISTE Srinivasa Ramanujan Mathematics, and IEI.
              </p>
            </div>

            {/* Category Filter Pills for Professional Certs */}
            <div className="flex flex-wrap gap-2">
              {profCategories.map((item) => {
                const isSelected = profCategory === item;
                return (
                  <button
                    key={item}
                    onClick={() => setProfCategory(item)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                      isSelected
                        ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                        : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="profCatPill"
                        className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    <span>{item === 'All' ? `All (${professionalCertifications.length})` : item}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Professional Certifications Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProfCerts.map((cert) => (
                <motion.div
                  layout
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl bg-obsidian-850/90 border border-editorial-line hover:border-editorial-lineFocus p-6 flex flex-col justify-between space-y-5 shadow-subtle hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden"
                >
                  <div className="space-y-3.5">
                    {/* Header Row: Issuer Badge & Status */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-900 border border-editorial-line text-[11px] font-mono font-medium text-accent-sky">
                        <Building className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate max-w-[140px]">{cert.issuerLogoText || cert.issuer}</span>
                      </div>

                      <span className="badge-editorial text-[10px] text-accent-sky border-accent-blue/30 bg-accent-blue/10 shrink-0">
                        {cert.badge || cert.status}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="text-base font-bold text-ink-50 group-hover:text-accent-sky transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-ink-300 font-mono mt-1">
                        {cert.organization || cert.issuer}
                      </p>
                    </div>

                    {/* Dates & Credential IDs */}
                    <div className="p-3 rounded-xl bg-obsidian-900/80 border border-editorial-line space-y-1.5 text-xs font-mono">
                      <div className="flex items-center justify-between text-ink-400">
                        <span className="text-ink-500">Date</span>
                        <span className="text-ink-200">{cert.date}</span>
                      </div>

                      {cert.credentialId && (
                        <div className="flex items-center justify-between text-ink-400">
                          <span className="text-ink-500">Credential ID</span>
                          <span className="text-accent-sky truncate max-w-[170px]" title={cert.credentialId}>
                            {cert.credentialId}
                          </span>
                        </div>
                      )}

                      {cert.score && (
                        <div className="flex items-center justify-between text-ink-400">
                          <span className="text-ink-500">Performance</span>
                          <span className="text-emerald-400 font-semibold">{cert.score}</span>
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

                    {cert.pdfUrl && (
                      <>
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-ink-400 hover:text-white rounded-lg bg-obsidian-900 border border-editorial-line hover:border-editorial-lineFocus transition-colors"
                          title="Open PDF in new browser tab"
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
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      )}

      {/* DEDICATED SECTION 2: INTERNSHIP CERTIFICATES (SEPARATE SECTION) */}
      {showInternships && (
        <section id="internship-certificates" className="space-y-8 pt-8 border-t border-editorial-line">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Workplace &amp; Virtual Internships
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 font-sans tracking-tight">
                Internship Certificates &amp; Appointments
              </h2>
              <p className="text-xs sm:text-sm text-ink-400 max-w-2xl leading-relaxed">
                Official completion certificates and appointment documentation from Google for Developers &bull; EduSkills, Blackbucks Education, Innovation Hacks, Blend Vidya, and Infotact Solutions.
              </p>
            </div>

            {/* Category Filter Pills for Internship Certs */}
            <div className="flex flex-wrap gap-2">
              {internCategories.map((item) => {
                const isSelected = internCategory === item;
                return (
                  <button
                    key={item}
                    onClick={() => setInternCategory(item)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                      isSelected
                        ? 'text-white border-accent-blue/80 font-semibold shadow-sm'
                        : 'text-ink-400 border-editorial-line bg-obsidian-850 hover:text-white hover:border-editorial-lineFocus'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="internCatPill"
                        className="absolute inset-0 bg-accent-blue rounded-lg -z-10"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    <span>{item === 'All' ? `All Internships (${internshipCertificates.length})` : item}</span>
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
                    {/* Header Row */}
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

                    {/* Duration & Metadata */}
                    <div className="p-3 rounded-xl bg-obsidian-900/80 border border-editorial-line space-y-1.5 text-xs font-mono">
                      <div className="flex items-center justify-between text-ink-400">
                        <span className="text-ink-500">Duration</span>
                        <span className="text-ink-200">{cert.duration}</span>
                      </div>

                      {cert.credentialId && (
                        <div className="flex items-center justify-between text-ink-400">
                          <span className="text-ink-500">Credential ID</span>
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
                      title="Open PDF in new browser tab"
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
      )}

      {/* Full-Screen Interactive Certificate Preview Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
