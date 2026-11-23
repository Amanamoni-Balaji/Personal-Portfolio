import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  Grid,
  Sparkles,
  Layers,
  ArrowLeft
} from 'lucide-react';

export default function ProjectGalleryModal({ isOpen, onClose, project }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Reset selected image when modal opens, closes, or project changes
  useEffect(() => {
    if (!isOpen) {
      setSelectedIndex(null);
    }
  }, [isOpen, project?.id]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen || !project) return;
    const photos = project.gallery || [];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedIndex !== null) {
          setSelectedIndex(null); // Return to grid overview
        } else {
          onClose(); // Close modal
        }
      } else if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev + 1) % photos.length);
      } else if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, project, onClose]);

  if (!isOpen || !project || typeof document === 'undefined') return null;

  const photos = project.gallery || [];
  const currentPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (selectedIndex !== null) {
              setSelectedIndex(null);
            } else {
              onClose();
            }
          }}
          className="fixed inset-0 bg-obsidian-950/92 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-6xl max-h-[94vh] sm:max-h-[90vh] bg-obsidian-900 border border-editorial-lineLight rounded-2xl sm:rounded-3xl shadow-elevated overflow-hidden flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-editorial-line bg-obsidian-850 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-accent-sky/15 border border-accent-sky/30 flex items-center justify-center text-accent-sky shrink-0 shadow-inner">
                <Layers className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-bold text-white font-sans tracking-tight truncate">
                    {project.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-accent-sky bg-blue-500/10 border border-blue-500/30 shrink-0">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs text-ink-400 font-mono truncate">
                  {photos.length} Verified Screenshots &bull; {project.shortTitle} Architecture &amp; UI Gallery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {selectedIndex !== null && (
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-sky/40 text-xs font-mono text-ink-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="Return to gallery grid view"
                  aria-label="Return to gallery grid view"
                >
                  <Grid className="w-3.5 h-3.5 text-accent-sky" />
                  <span className="hidden sm:inline">All Screens</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-ink-300 hover:text-white transition-all"
                aria-label={`Close ${project.shortTitle} gallery`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {selectedIndex === null ? (
              /* --- GRID OVERVIEW VIEW --- */
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-ink-400 font-mono gap-1 border-b border-white/[0.06] pb-3">
                  <span className="flex items-center gap-1.5 text-ink-300">
                    <Sparkles className="w-3.5 h-3.5 text-accent-sky" />
                    <span>Click any screenshot to inspect full resolution preview &amp; architectural details</span>
                  </span>
                  <span>{photos.length} Verified Screenshots</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {photos.map((photo, idx) => (
                    <motion.div
                      key={photo.src || idx}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedIndex(idx)}
                      className="group cursor-pointer rounded-2xl bg-obsidian-950/80 border border-white/[0.08] hover:border-accent-sky/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.18)]"
                    >
                      {/* Image Thumbnail Container */}
                      <div className="relative aspect-[16/10] bg-black overflow-hidden border-b border-white/[0.06]">
                        <img
                          src={photo.src}
                          alt={photo.title || photo.caption || `${project.shortTitle} Screenshot ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Top Number Badge */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-black/85 text-ink-200 border border-white/20 backdrop-blur-md shadow-sm">
                            Screen {idx + 1} of {photos.length}
                          </span>
                        </div>

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-medium backdrop-blur-[2px]">
                          <span className="px-3 py-1.5 rounded-lg bg-blue-600/90 text-white flex items-center gap-1.5 shadow-lg border border-blue-400/40">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Inspect Screen</span>
                          </span>
                        </div>
                      </div>

                      {/* Details Box */}
                      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-1.5 bg-[#0a0d16]">
                        <h4 className="text-xs sm:text-sm font-bold text-white font-sans group-hover:text-accent-sky transition-colors line-clamp-1">
                          {photo.title || `Screenshot ${idx + 1}`}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-ink-300 font-sans leading-relaxed line-clamp-2">
                          {photo.description || photo.caption}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              /* --- HIGH-RESOLUTION PREVIEW VIEW --- */
              <div className="space-y-4">
                {/* Back to Grid Bar */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="inline-flex items-center gap-1.5 text-accent-sky hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to all {photos.length} screenshots</span>
                  </button>
                  <span className="text-ink-400">
                    Screenshot {selectedIndex + 1} of {photos.length}
                  </span>
                </div>

                {/* Main Image Stage */}
                <div className="relative rounded-2xl bg-black border border-white/[0.08] overflow-hidden min-h-[300px] max-h-[58vh] sm:max-h-[64vh] flex items-center justify-center p-2 sm:p-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhoto.src}
                      src={currentPhoto.src}
                      alt={currentPhoto.title || `Screenshot ${selectedIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="max-h-[54vh] sm:max-h-[60vh] max-w-full object-contain mx-auto rounded-lg shadow-2xl"
                    />
                  </AnimatePresence>

                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 hover:border-accent-sky/60 backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95"
                    title="Previous screenshot (Left Arrow)"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 hover:border-accent-sky/60 backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95"
                    title="Next screenshot (Right Arrow)"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Open Fullscreen / New Tab in corner */}
                  <a
                    href={currentPhoto.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-black/80 hover:bg-black text-ink-300 hover:text-white border border-white/20 text-xs font-mono inline-flex items-center gap-1.5 backdrop-blur-md transition-all"
                    title="Open original high-resolution image in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-accent-sky" />
                    <span className="hidden sm:inline">Original Res</span>
                  </a>
                </div>

                {/* Caption / Description Box */}
                <div className="p-4 rounded-2xl bg-obsidian-850 border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-accent-sky/15 text-accent-sky border border-accent-sky/30">
                      Screenshot {selectedIndex + 1} of {photos.length}
                    </span>
                    <span className="text-[11px] font-mono text-ink-400">
                      Use Arrow Keys (&larr; / &rarr;) or Esc to exit
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                    {currentPhoto.title || `Screenshot ${selectedIndex + 1}`}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                    {currentPhoto.description || currentPhoto.caption}
                  </p>
                </div>

                {/* Bottom Thumbnail Filmstrip */}
                <div className="pt-2 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono text-ink-400 mb-2">
                    All {photos.length} Screenshots in this Gallery:
                  </p>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {photos.map((photo, idx) => (
                      <button
                        key={photo.src || idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border transition-all ${
                          selectedIndex === idx
                            ? 'border-accent-sky ring-2 ring-accent-sky/50 scale-105 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                            : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                        }`}
                        title={photo.title || `Screenshot ${idx + 1}`}
                      >
                        <img
                          src={photo.src}
                          alt=""
                          className="w-full h-full object-cover object-top"
                        />
                        <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded text-[8px] font-mono bg-black/80 text-white">
                          #{idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
