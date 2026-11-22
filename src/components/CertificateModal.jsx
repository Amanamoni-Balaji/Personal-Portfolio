import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, CheckCircle, FileText, Download } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen || !certificate) return null;

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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-2xl bg-obsidian-900 border border-editorial-lineLight rounded-2xl shadow-elevated overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-editorial-line bg-obsidian-850">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-sky">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink-50">
                  {certificate.title}
                </h3>
                <p className="text-xs text-ink-400 font-mono">
                  {certificate.issuer} &bull; {certificate.status}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-ink-400 hover:text-white rounded-lg hover:bg-obsidian-800 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            <div>
              <p className="text-xs font-mono font-semibold text-ink-400 uppercase tracking-wider mb-1.5">
                Credential Description
              </p>
              <p className="text-sm text-ink-200 leading-relaxed">
                {certificate.description}
              </p>
            </div>

            <div>
              <p className="text-xs font-mono font-semibold text-ink-400 uppercase tracking-wider mb-2">
                Competencies &amp; Skills Validated
              </p>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="badge-editorial text-xs"
                  >
                    <CheckCircle className="w-3 h-3 text-accent-sky" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* If PDF is available */}
            {certificate.pdfUrl && (
              <div className="p-4 rounded-xl bg-obsidian-850 border border-editorial-line flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-accent-sky" />
                  <div>
                    <p className="text-xs font-medium text-ink-100">Official Certificate Document</p>
                    <p className="text-[11px] text-ink-400 font-mono">Verified PDF credential on file</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-1.5 px-3"
                  >
                    <span>View PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={certificate.pdfUrl}
                    download
                    className="btn-primary text-xs py-1.5 px-3"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-editorial-line bg-obsidian-850 flex items-center justify-between text-xs text-ink-400 font-mono">
            <span>Verified Student Credential</span>
            <button
              onClick={onClose}
              className="text-ink-300 hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
