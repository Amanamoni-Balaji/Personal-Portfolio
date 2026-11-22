import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Award,
  ExternalLink,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileText,
  CheckCircle2,
  Maximize2,
  Minimize2,
  ShieldCheck,
  FileCheck,
  Building,
  Image as ImageIcon
} from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [zoom, setZoom] = useState(100);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasImage = Boolean(
    certificate?.imageUrl ||
      (certificate?.pdfUrl && /\.(jpe?g|png|webp)$/i.test(certificate.pdfUrl))
  );
  const imageUrl = certificate?.imageUrl || (hasImage ? certificate?.pdfUrl : null);
  const pdfUrl =
    certificate?.pdfUrl && /\.pdf$/i.test(certificate.pdfUrl)
      ? certificate.pdfUrl
      : null;

  const [activeView, setActiveView] = useState(hasImage ? 'image' : 'pdf');

  // Reset zoom & active view on document change
  useEffect(() => {
    setZoom(100);
    setActiveView(hasImage ? 'image' : 'pdf');
  }, [certificate, hasImage]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 15, 175));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoom(100);

  const currentHref =
    activeView === 'image' && imageUrl
      ? imageUrl
      : pdfUrl || imageUrl || certificate.pdfUrl;
  const downloadHref = pdfUrl || imageUrl || certificate.pdfUrl;
  const fileName = downloadHref ? downloadHref.split('/').pop() : 'certificate.pdf';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative z-10 w-full bg-obsidian-900 border border-editorial-lineLight rounded-2xl shadow-elevated overflow-hidden flex flex-col transition-all duration-300 ${
            isExpanded
              ? 'max-w-[98vw] h-[96vh]'
              : 'max-w-5xl h-[90vh] sm:h-[88vh]'
          }`}
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 border-b border-editorial-line bg-obsidian-850">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-sky shrink-0 shadow-inner">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-bold text-ink-50 truncate">
                    {certificate.title}
                  </h3>
                  <span className="badge-editorial text-[10px] text-accent-sky shrink-0">
                    {certificate.badge || certificate.status || 'Verified'}
                  </span>
                </div>
                <p className="text-xs text-ink-400 font-mono truncate">
                  {certificate.organization || certificate.issuer}
                  {certificate.credentialId && ` • ID: ${certificate.credentialId}`}
                  {certificate.duration && ` • ${certificate.duration}`}
                </p>
              </div>
            </div>

            {/* Toolbar Controls */}
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center flex-wrap">
              {/* Dual View Toggle if both Image and PDF exist */}
              {hasImage && pdfUrl && (
                <div className="flex items-center rounded-lg bg-obsidian-950 border border-editorial-line p-0.5 text-xs font-mono mr-1">
                  <button
                    onClick={() => setActiveView('image')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      activeView === 'image'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-ink-400 hover:text-white'
                    }`}
                  >
                    HD Image
                  </button>
                  <button
                    onClick={() => setActiveView('pdf')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      activeView === 'pdf'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-ink-400 hover:text-white'
                    }`}
                  >
                    Original PDF
                  </button>
                </div>
              )}

              {/* Zoom Controls */}
              {currentHref && (
                <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-obsidian-950 border border-editorial-line text-xs font-mono mr-1">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 75}
                    className="p-1 text-ink-300 hover:text-white disabled:opacity-30 disabled:hover:text-ink-300 transition-colors"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-11 text-center font-semibold text-accent-sky">
                    {zoom}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 175}
                    className="p-1 text-ink-300 hover:text-white disabled:opacity-30 disabled:hover:text-ink-300 transition-colors"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1 text-ink-400 hover:text-white transition-colors ml-0.5"
                    title="Reset Zoom (100%)"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Fullscreen Expand Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex p-2 text-ink-300 hover:text-white rounded-lg hover:bg-obsidian-800 transition-colors"
                title={isExpanded ? 'Restore Viewport' : 'Expand Fullscreen'}
                aria-label="Toggle Fullscreen"
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              {/* Open in New Tab */}
              {currentHref && (
                <a
                  href={currentHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-ink-300 bg-obsidian-850 hover:bg-obsidian-800 border border-editorial-line hover:text-white transition-colors"
                  title="Open certificate in a new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-accent-sky" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
              )}

              {/* Download Certificate */}
              {downloadHref && (
                <a
                  href={downloadHref}
                  download={fileName}
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1.5 shadow-sm"
                  title="Download Certificate"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 text-ink-400 hover:text-white rounded-lg hover:bg-obsidian-800 transition-colors ml-1"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub-Header Notice */}
          <div className="px-5 py-2 bg-obsidian-950 border-b border-editorial-line/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-ink-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Candidate: Amanamoni Balaji
              </span>
              <span>•</span>
              <span>Matrusri Engineering College</span>
            </div>

            {certificate.pages && certificate.pages > 1 && (
              <span className="text-accent-sky bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/30 text-[11px]">
                Multi-Page Document ({certificate.pages} Pages) — Scroll inside viewer to inspect all pages
              </span>
            )}
          </div>

          {/* Interactive Document Viewport */}
          <div className="flex-1 bg-obsidian-950 overflow-auto relative p-2 sm:p-4 flex items-center justify-center">
            {activeView === 'image' && imageUrl ? (
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-200 p-2 sm:p-4 overflow-auto"
                style={{
                  transform: zoom !== 100 ? `scale(${zoom / 100})` : 'none',
                  transformOrigin: 'top center'
                }}
              >
                <img
                  src={imageUrl}
                  alt={certificate.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl border border-editorial-line/80 bg-white shadow-2xl"
                />
              </div>
            ) : pdfUrl || certificate.pdfUrl ? (
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-200"
                style={{
                  transform: zoom !== 100 ? `scale(${zoom / 100})` : 'none',
                  transformOrigin: 'top center'
                }}
              >
                <iframe
                  src={`${pdfUrl || certificate.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                  title={certificate.title}
                  className="w-full h-full min-h-[480px] sm:min-h-[600px] rounded-xl border border-editorial-line/80 bg-white shadow-2xl"
                />
              </div>
            ) : (
              <div className="p-8 text-center space-y-4 max-w-md mx-auto">
                <FileText className="w-12 h-12 text-ink-500 mx-auto" />
                <h4 className="text-base font-bold text-ink-100">
                  Document Preview Unavailable
                </h4>
                <p className="text-xs text-ink-400 leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 border-t border-editorial-line bg-obsidian-850 flex items-center justify-between text-xs font-mono text-ink-400">
            <div className="flex items-center gap-2 truncate">
              {certificate.skills && certificate.skills.length > 0 && (
                <div className="hidden sm:flex items-center gap-1.5 truncate">
                  <span className="text-ink-500 text-[11px]">Validated:</span>
                  {certificate.skills.slice(0, 4).map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] bg-obsidian-900 border border-editorial-line text-ink-300"
                    >
                      {s}
                    </span>
                  ))}
                  {certificate.skills.length > 4 && (
                    <span className="text-[10px] text-ink-500">
                      +{certificate.skills.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0 ml-auto">
              <span className="text-[11px] text-ink-500 hidden md:inline">
                ESC to close
              </span>
              <button
                onClick={onClose}
                className="btn-secondary text-xs py-1 px-3 text-ink-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
