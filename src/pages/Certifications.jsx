import React, { useState, useMemo } from 'react';
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
  Briefcase,
  Search
} from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { professionalCertifications, internshipCertificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Search filtering logic across both sets
  const filteredProfCerts = useMemo(() => {
    let list = profCategory === 'All'
      ? professionalCertifications
      : professionalCertifications.filter((c) => c.category === profCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((c) =>
        c.title.toLowerCase().includes(q) ||
        (c.organization && c.organization.toLowerCase().includes(q)) ||
        (c.issuer && c.issuer.toLowerCase().includes(q)) ||
        (c.skills && c.skills.some((s) => s.toLowerCase().includes(q))) ||
        (c.credentialId && c.credentialId.toLowerCase().includes(q))
      );
    }
    return list;
  }, [profCategory, professionalCertifications, searchQuery]);

  const filteredInternCerts = useMemo(() => {
    let list = internCategory === 'All'
      ? internshipCertificates
      : internshipCertificates.filter((c) => c.category === internCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((c) =>
        c.title.toLowerCase().includes(q) ||
        (c.organization && c.organization.toLowerCase().includes(q)) ||
        (c.role && c.role.toLowerCase().includes(q)) ||
        (c.skills && c.skills.some((s) => s.toLowerCase().includes(q))) ||
        (c.credentialId && c.credentialId.toLowerCase().includes(q))
      );
    }
    return list;
  }, [internCategory, internshipCertificates, searchQuery]);

  const showProfessional = activeSection === 'all' || activeSection === 'professional';
  const showInternships = activeSection === 'all' || activeSection === 'internship';

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Editorial Page Header */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Official Verified Credentials Vault &bull; {professionalCertifications.length + internshipCertificates.length} Total Documents</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          Certifications &amp; Accreditations
        </h1>

        <p className="text-sm sm:text-base text-ink-300 max-w-3xl leading-relaxed">
          Comprehensive repository of verified credentials, academic honors, technical certifications, and official internship completion documents. Every certificate is backed by original PDF files available for in-browser inspection and download.
        </p>

        {/* Live Search Bar */}
        <div className="relative max-w-md pt-2">
          <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 23 verified credentials by title, issuer, or skill..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0d16] border border-white/10 text-xs text-white placeholder:text-ink-500 focus:outline-none focus:border-accent-blue transition-colors font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-ink-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Section Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
              activeSection === 'all'
                ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#0a0d16] text-ink-300 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            All Verified Documents ({professionalCertifications.length + internshipCertificates.length})
          </button>

          <button
            onClick={() => setActiveSection('professional')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
              activeSection === 'professional'
                ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#0a0d16] text-ink-300 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Professional Certifications ({professionalCertifications.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('internship')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
              activeSection === 'internship'
                ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#0a0d16] text-ink-300 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship Certificates ({internshipCertificates.length})</span>
          </button>
        </div>
      </BlurFade>

      {/* DEDICATED SECTION 1: PROFESSIONAL CERTIFICATIONS (NOT INTERNSHIPS) */}
      {showProfessional && (
        <section id="professional-certifications" className="space-y-8">
          <BlurFade delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
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
              <p className="text-xs sm:text-sm text-ink-300 max-w-2xl leading-relaxed font-sans">
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
                    className={`relative px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                      isSelected
                        ? 'text-white border-blue-500/80 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                        : 'text-ink-400 border-white/10 bg-[#0a0d16]/80 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="profCatPill"
                        className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    <span>{item === 'All' ? `All (${professionalCertifications.length})` : item}</span>
                  </button>
                );
              })}
            </div>
          </BlurFade>

          {/* Professional Certifications Grid */}
          {filteredProfCerts.length === 0 ? (
            <div className="p-8 text-center rounded-3xl bg-[#0a0d16] border border-white/10 text-xs text-ink-400 font-mono">
              No professional certifications match your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfCerts.map((cert, idx) => (
                <BlurFade key={cert.id} delay={idx * 0.04}>
                  <div className="group h-full rounded-3xl bg-[#0a0d16]/95 border border-white/[0.08] hover:border-white/25 p-6 flex flex-col justify-between space-y-5 shadow-elevated hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden">
                    <div className="space-y-3.5">
                      {/* Header Row: Issuer Badge & Status */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono font-medium text-accent-sky">
                          <Building className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate max-w-[140px]">{cert.issuerLogoText || cert.issuer}</span>
                        </div>

                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-accent-sky border border-blue-500/30 bg-blue-500/10 shrink-0">
                          {cert.badge || cert.status}
                        </span>
                      </div>

                      {/* Real Certificate Preview Thumbnail */}
                      {cert.imageUrl && (
                        <div
                          onClick={() => setSelectedCert(cert)}
                          className="relative w-full h-36 rounded-2xl overflow-hidden border border-white/10 group-hover:border-accent-sky/50 cursor-pointer bg-black/40 transition-all shadow-inner my-1"
                        >
                          <img
                            src={cert.imageUrl}
                            alt={cert.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-transparent to-transparent opacity-70" />
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/80 backdrop-blur-sm border border-white/20 text-accent-sky flex items-center gap-1 font-semibold">
                            <Eye className="w-3 h-3 text-accent-sky" /> Preview
                          </span>
                        </div>
                      )}

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-accent-sky transition-colors leading-snug font-sans tracking-tight">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-ink-300 font-mono mt-1">
                          {cert.organization || cert.issuer}
                        </p>
                      </div>

                      {/* Dates & Credential IDs */}
                      <div className="p-3 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-1.5 text-xs font-mono">
                        <div className="flex items-center justify-between text-ink-400">
                          <span className="text-ink-500">Date</span>
                          <span className="text-white">{cert.date}</span>
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
                      <p className="text-xs text-ink-300 leading-relaxed line-clamp-2 font-sans">
                        {cert.description}
                      </p>

                      {/* Skills Validated */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {cert.skills.slice(0, 3).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-ink-300 bg-white/5 border border-white/10"
                          >
                            {s}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-500 bg-white/5">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="btn-glow-sky light-sweep text-xs py-2 px-3.5 flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl font-semibold shadow-sm"
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
                            className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all"
                            title="Open PDF in new browser tab"
                            aria-label="Open in new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={cert.pdfUrl}
                            download
                            className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
                            title="Download certificate PDF"
                            aria-label="Download PDF"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          )}
        </section>
      )}

      {/* DEDICATED SECTION 2: INTERNSHIP CERTIFICATES (SEPARATE SECTION) */}
      {showInternships && (
        <section id="internship-certificates" className="space-y-8 pt-8 border-t border-editorial-line">
          <BlurFade delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-editorial-line pb-6">
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
              <p className="text-xs sm:text-sm text-ink-300 max-w-2xl leading-relaxed font-sans">
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
                    className={`relative px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                      isSelected
                        ? 'text-white border-blue-500/80 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                        : 'text-ink-400 border-white/10 bg-[#0a0d16]/80 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="internCatPill"
                        className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    <span>{item === 'All' ? `All Internships (${internshipCertificates.length})` : item}</span>
                  </button>
                );
              })}
            </div>
          </BlurFade>

          {/* Internship Certificates Cards Grid */}
          {filteredInternCerts.length === 0 ? (
            <div className="p-8 text-center rounded-3xl bg-[#0a0d16] border border-white/10 text-xs text-ink-400 font-mono">
              No internship certificates match your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternCerts.map((cert, idx) => (
                <BlurFade key={cert.id} delay={idx * 0.05}>
                  <div className="group h-full rounded-3xl bg-[#0a0d16]/95 border border-white/[0.08] hover:border-white/25 p-6 flex flex-col justify-between space-y-5 shadow-elevated hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden">
                    {/* Accent Top Bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                        cert.accentColor || 'from-accent-blue to-accent-sky'
                      }`}
                    />

                    <div className="space-y-3.5">
                      {/* Header Row */}
                      <div className="flex items-start justify-between gap-3 pt-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono font-medium text-accent-sky">
                          <Building className="w-3.5 h-3.5" />
                          <span>{cert.issuerLogoText || cert.organization}</span>
                        </div>

                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-500/10">
                          {cert.badge || cert.status}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-accent-sky transition-colors leading-snug font-sans tracking-tight">
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
                      <div className="p-3 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-1.5 text-xs font-mono">
                        <div className="flex items-center justify-between text-ink-400">
                          <span className="text-ink-500">Duration</span>
                          <span className="text-white">{cert.duration}</span>
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
                      <p className="text-xs text-ink-300 leading-relaxed line-clamp-2 font-sans">
                        {cert.description}
                      </p>

                      {/* Skills Validated */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {cert.skills.slice(0, 3).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-ink-300 bg-white/5 border border-white/10"
                          >
                            {s}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-500 bg-white/5">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="btn-glow-sky light-sweep text-xs py-2 px-3.5 flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl font-semibold shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>

                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all"
                        title="Open PDF in new browser tab"
                        aria-label="Open in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={cert.pdfUrl}
                        download
                        className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
                        title="Download certificate PDF"
                        aria-label="Download PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          )}
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
