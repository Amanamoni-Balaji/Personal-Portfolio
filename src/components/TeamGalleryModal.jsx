import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Users,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  Grid,
  Trophy,
  Sparkles,
  Eye
} from 'lucide-react';

export default function TeamGalleryModal({ isOpen, onClose, photos = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Reset selected image when modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedIndex(null);
    }
  }, [isOpen]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, selectedIndex, photos.length, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

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
          className="relative z-10 w-full max-w-5xl max-h-[92vh] sm:max-h-[88vh] bg-obsidian-900 border border-editorial-lineLight rounded-2xl sm:rounded-3xl shadow-elevated overflow-hidden flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-editorial-line bg-obsidian-850 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-accent-sky/15 border border-accent-sky/30 flex items-center justify-center text-accent-sky shrink-0 shadow-inner">
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-bold text-white font-sans tracking-tight truncate">
                    DATANYX 2025 — Team &amp; Hackathon Moments
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-accent-sky bg-blue-500/10 border border-blue-500/30 shrink-0">
                    Team Aurum &bull; Runner-Up
                  </span>
                </div>
                <p className="text-xs text-ink-400 font-mono truncate">
                  MJCET, Hyderabad &bull; 29–30 November 2025 &bull; {photos.length} Verified Photos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {selectedIndex !== null && (
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-sky/40 text-xs font-mono text-ink-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="Return to gallery grid view"
                >
                  <Grid className="w-3.5 h-3.5 text-accent-sky" />
                  <span className="hidden sm:inline">All Photos</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-ink-300 hover:text-white transition-all"
                aria-label="Close team gallery"
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
                    <span>Click any photograph below to inspect in high-resolution preview</span>
                  </span>
                  <span>{photos.length} Photographs</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {photos.map((photo, idx) => (
                    <motion.div
                      key={photo.id || idx}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedIndex(idx)}
                      className="group rounded-2xl bg-[#07090e] border border-white/10 hover:border-accent-sky/50 transition-all p-3 space-y-3 cursor-pointer shadow-md hover:shadow-[0_8px_25px_rgba(14,165,233,0.18)] flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedIndex(idx);
                        }
                      }}
                      aria-label={`View ${photo.title}`}
                    >
                      <div className="space-y-2">
                        {/* Image Container with contain-style layout to preserve all faces and quality */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#030508] border border-white/[0.06] flex items-center justify-center group-hover:border-accent-sky/30 transition-all">
                          <img
                            src={photo.imageUrl}
                            alt={photo.title}
                            className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/85 backdrop-blur-md border border-white/20 text-accent-sky flex items-center gap-1 font-semibold">
                              <Eye className="w-3 h-3 text-accent-sky" /> Enlarge
                            </span>
                            <span className="text-[10px] font-mono text-ink-300">
                              Photo {idx + 1} of {photos.length}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="text-xs sm:text-sm font-bold text-white font-sans group-hover:text-accent-sky transition-colors line-clamp-1">
                          {photo.title}
                        </h4>

                        {/* Caption */}
                        <p className="text-[11px] text-ink-400 font-sans leading-relaxed line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-ink-500">
                        <span>Photo {idx + 1}</span>
                        <span className="text-accent-sky group-hover:underline">Inspect Photo &rarr;</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              /* --- ENLARGED LIGHTBOX VIEW --- */
              <div className="space-y-4">
                <div className="relative w-full h-[54vh] sm:h-[58vh] rounded-2xl bg-[#030508] border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* The Enlarged Image - strictly object-contain to never crop anyone */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhoto.imageUrl}
                      src={currentPhoto.imageUrl}
                      alt={currentPhoto.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-contain p-2 select-none"
                    />
                  </AnimatePresence>

                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white hover:text-accent-sky hover:border-accent-sky/60 backdrop-blur-md transition-all shadow-lg focus:outline-none"
                    aria-label="Previous photograph"
                    title="Previous (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white hover:text-accent-sky hover:border-accent-sky/60 backdrop-blur-md transition-all shadow-lg focus:outline-none"
                    aria-label="Next photograph"
                    title="Next (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Counter Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-accent-sky font-semibold">
                    {selectedIndex + 1} / {photos.length}
                  </div>

                  {/* Open in Tab Button */}
                  <a
                    href={currentPhoto.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-ink-300 hover:text-white transition-all"
                    title="Open full resolution in new tab"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Caption Bar */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 max-w-3xl">
                    <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                      {currentPhoto.title}
                    </h4>
                    <p className="text-xs text-ink-300 leading-relaxed font-sans">
                      {currentPhoto.caption}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="btn-glow-sky light-sweep text-xs py-2 px-3.5 rounded-xl font-semibold inline-flex items-center gap-1.5 shrink-0 self-start sm:self-center"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    <span>Back to Gallery</span>
                  </button>
                </div>

                {/* Filmstrip Navigation Thumbnails */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
                  {photos.map((p, idx) => (
                    <button
                      key={p.id || idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border transition-all p-0.5 bg-[#030508] ${
                        idx === selectedIndex
                          ? 'border-accent-sky ring-2 ring-accent-sky/30 shadow-lg scale-105'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                      aria-label={`Jump to photo ${idx + 1}`}
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
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
