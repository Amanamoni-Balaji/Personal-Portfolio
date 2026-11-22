import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Terminal,
  ShieldCheck,
  Eye,
  ExternalLink,
  Download,
  FileText
} from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { internships, internshipCertificates } = portfolioData;
  const [expandedId, setExpandedId] = useState('infotact');
  const [selectedCert, setSelectedCert] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleOpenCertificate = (exp) => {
    // Find matching certificate in internshipCertificates or construct credential object
    const match = internshipCertificates.find((c) =>
      c.id.includes(exp.id) || exp.id.includes(c.id) || c.organization.toLowerCase().includes(exp.company.toLowerCase())
    );

    if (match) {
      setSelectedCert(match);
    } else {
      setSelectedCert({
        title: `${exp.role} – ${exp.company}`,
        issuer: exp.company,
        organization: exp.company,
        duration: exp.duration,
        pdfUrl: exp.certificatePdf,
        skills: exp.technologies,
        description: exp.description,
        badge: exp.status,
        credentialId: exp.credentialId
      });
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Industry Experience &bull; 4 Practical Engagements</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          Internships &amp; Practical Roles
        </h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-2xl leading-relaxed">
          Chronological record of software engineering, artificial intelligence, and data analytics internships. Each role includes verified deliverables, applied technical stacks, and immediate access to original institution-issued completion certificates.
        </p>
      </BlurFade>

      {/* Professional Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-12">
        {internships.map((exp, idx) => {
          const isOngoing = exp.status === 'Ongoing';
          const isScheduled = exp.status === 'Scheduled';
          const isExpanded = expandedId === exp.id;

          return (
            <BlurFade key={exp.id} delay={idx * 0.08}>
              <div className="relative space-y-3">
                {/* Timeline Marker Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 bg-black flex items-center justify-center transition-colors ${
                    isOngoing
                      ? 'border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                      : isScheduled
                      ? 'border-accent-sky shadow-[0_0_12px_rgba(14,165,233,0.5)]'
                      : 'border-white/30'
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
                  className={`rounded-3xl bg-[#0a0d16]/90 border p-6 sm:p-8 space-y-5 transition-all shadow-elevated ${
                    isOngoing
                      ? 'border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.08)]'
                      : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-xl font-bold text-white font-sans">
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
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${
                          isOngoing
                            ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10 font-bold'
                            : isScheduled
                            ? 'border-blue-500/40 text-accent-sky bg-blue-500/10'
                            : 'border-white/10 text-ink-300 bg-white/5'
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
                  <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities Accordion */}
                  {exp.responsibilities && (
                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
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
                            className="space-y-2.5 pt-2 overflow-hidden"
                          >
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li
                                key={rIdx}
                                className="flex items-start gap-2.5 text-xs text-ink-300 leading-relaxed font-sans"
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
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono text-ink-300 bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Official Certificate & Document Action Bar */}
                  {exp.certificatePdf && (
                    <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#07090e]/80 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-4 sm:p-5 rounded-b-3xl">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="truncate">{exp.documentType || 'Official Verified Credential'}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleOpenCertificate(exp)}
                          className="btn-glow-sky light-sweep text-xs py-1.5 px-3.5 inline-flex items-center gap-1.5 shadow-sm rounded-xl font-semibold"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </button>

                        <a
                          href={exp.certificatePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all"
                          title="Open PDF in new tab"
                          aria-label="Open PDF in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={exp.certificatePdf}
                          download
                          className="p-2 text-ink-300 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
                          title="Download certificate PDF"
                          aria-label="Download PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>

      {/* Bottom Banner to Full Certifications Gallery */}
      <BlurFade delay={0.2}>
        <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0b0e17] via-[#0f1422] to-[#0b0e17] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-sky">
              <Sparkles className="w-4 h-4" />
              <span>Official Accreditation Vault</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
              Explore All 5 Official Internship Certificates &amp; Accreditations
            </h3>
            <p className="text-xs text-ink-300 max-w-xl leading-relaxed font-sans">
              Directly inspect and download official documents from Google for Developers &bull; EduSkills, Blackbucks Education, Innovation Hacks, Blend Vidya, and Infotact Solutions.
            </p>
          </div>

          <Link
            to="/certifications"
            className="btn-primary text-xs py-3 px-6 shrink-0 inline-flex items-center gap-2 shadow-md rounded-xl"
          >
            <span>Explore Certificates Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </BlurFade>

      {/* Shared Interactive Certificate Preview Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
