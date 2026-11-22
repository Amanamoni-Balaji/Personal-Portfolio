import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  CheckCircle,
  FileCheck,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' or 'pdf'
  const { personal, internships, skills, education } = portfolioData;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl bg-obsidian-900 border border-editorial-lineLight rounded-2xl shadow-elevated overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-editorial-line bg-obsidian-850">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-sky">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink-50">
                  {personal.name} &mdash; Official Resume
                </h3>
                <p className="text-xs text-ink-400 font-mono">
                  B.E. IT &bull; CGPA 9.6 &bull; Verified Academic Credential
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personal.resumeUrl}
                download="Amanamoni_Balaji_Resume.pdf"
                className="btn-primary text-xs py-2 px-3.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 text-ink-400 hover:text-white rounded-lg hover:bg-obsidian-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub-navigation tabs */}
          <div className="flex items-center gap-2 px-6 py-2.5 border-b border-editorial-line bg-obsidian-950 text-xs font-mono">
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'summary'
                  ? 'bg-editorial-line text-ink-50 font-semibold'
                  : 'text-ink-400 hover:text-ink-200'
              }`}
            >
              Structured Overview
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'pdf'
                  ? 'bg-editorial-line text-ink-50 font-semibold'
                  : 'text-ink-400 hover:text-ink-200'
              }`}
            >
              PDF Document Viewer
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {activeTab === 'summary' ? (
              <div className="space-y-6 text-ink-200">
                {/* Contact & Headline */}
                <div className="p-4 rounded-xl bg-obsidian-850 border border-editorial-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-ink-50">{personal.name}</h4>
                    <p className="text-xs text-accent-sky font-mono mt-0.5">{personal.headline}</p>
                    <p className="text-xs text-ink-400 mt-1">{personal.location} &bull; {personal.email}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="badge-status">Available for Internships</span>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-300 uppercase tracking-wider mb-3">
                    <GraduationCap className="w-4 h-4 text-accent-sky" />
                    <span>Education</span>
                  </div>
                  <div className="space-y-2.5">
                    {personal.academicHistory.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-obsidian-850/60 border border-editorial-line flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <p className="text-sm font-semibold text-ink-100">{edu.institution}</p>
                          <p className="text-xs text-ink-400">{edu.degree}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-xs font-mono font-bold text-accent-sky">{edu.score}</p>
                          <p className="text-[11px] font-mono text-ink-500">{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Internships & Experience */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-300 uppercase tracking-wider mb-3">
                    <Briefcase className="w-4 h-4 text-accent-sky" />
                    <span>Internships & Experience</span>
                  </div>
                  <div className="space-y-3">
                    {internships.map((exp) => (
                      <div
                        key={exp.id}
                        className="p-4 rounded-lg bg-obsidian-850/60 border border-editorial-line space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-sm font-semibold text-ink-100">{exp.role}</span>
                            <span className="text-xs text-ink-400"> &mdash; {exp.company}</span>
                          </div>
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                            exp.status === 'Ongoing'
                              ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                              : 'border-editorial-line text-ink-400 bg-obsidian-900'
                          }`}>
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-xs text-ink-400 leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Technical Highlights */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-300 uppercase tracking-wider mb-3">
                    <Layers className="w-4 h-4 text-accent-sky" />
                    <span>Technical Proficiencies</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {skills.slice(0, 6).map((group, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-obsidian-850/40 border border-editorial-line">
                        <p className="text-xs font-mono text-accent-sky font-semibold mb-1">{group.category}</p>
                        <p className="text-xs text-ink-300">
                          {group.items.map(i => i.name).join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[65vh] rounded-lg overflow-hidden border border-editorial-line bg-obsidian-950 flex flex-col items-center justify-center p-4">
                <iframe
                  src={`${personal.resumeUrl}#toolbar=1&navpanes=0`}
                  title="Amanamoni Balaji Resume PDF"
                  className="w-full h-full rounded"
                />
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-3 border-t border-editorial-line bg-obsidian-850 flex items-center justify-between text-xs text-ink-400">
            <span>Verified document &bull; Updated for 2026</span>
            <div className="flex items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>Open in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
