import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  UserCheck,
  Cpu,
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  FileText,
  Workflow,
  Sparkles,
  Sliders
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = portfolioData;

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  // Carousel slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  // Reset slide and step on project change
  useEffect(() => {
    setCurrentSlide(0);
    setActiveStep(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div className="pt-36 pb-20 px-4 text-center max-w-lg mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-ink-50 font-sans">Project Not Found</h2>
        <p className="text-sm text-ink-400">
          The requested case study could not be located in the portfolio archive.
        </p>
        <Link to="/projects" className="btn-primary text-xs py-2 px-4">
          &larr; Return to Projects
        </Link>
      </div>
    );
  }

  const slides = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.primaryImage, caption: project.title }];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-400 border-b border-editorial-line pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
        <span className="badge-editorial text-[11px]">{project.category}</span>
      </div>

      {/* Project Title & Hero Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.badge && (
            <span className="badge-accent text-xs">{project.badge}</span>
          )}
          <span className="badge-editorial text-xs">Technical Case Study</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-accent-sky font-mono">
          {project.subtitle}
        </p>
        <p className="text-sm sm:text-base text-ink-300 max-w-3xl leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Actions & Repository Links */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2 px-4"
          >
            <span>Live Demonstration</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Interactive Screenshot Carousel / Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-ink-400">
          <span className="flex items-center gap-1.5 text-ink-300 font-semibold">
            <Sliders className="w-3.5 h-3.5 text-accent-sky" />
            <span>Interactive Visual Artifacts &amp; Screenshots</span>
          </span>
          <span>
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>

        {/* Main Display Screen */}
        <div className="relative rounded-2xl overflow-hidden border border-editorial-line bg-obsidian-950 shadow-elevated group aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].src}
              alt={slides[currentSlide].caption || project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="w-full h-full object-cover object-top filter brightness-[0.96]"
            />
          </AnimatePresence>

          {/* Vignette Overlay for Captions */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
            <p className="text-xs sm:text-sm text-ink-100 font-mono drop-shadow">
              {slides[currentSlide].caption}
            </p>
            <span className="text-[11px] font-mono text-ink-400 hidden sm:inline-block">
              Click maximize icon to inspect in full resolution
            </span>
          </div>

          {/* Navigation Controls: Previous */}
          {slides.length > 1 && (
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-obsidian-950/80 hover:bg-obsidian-900 border border-editorial-line text-ink-200 hover:text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 shadow-elevated"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Navigation Controls: Next */}
          {slides.length > 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-obsidian-950/80 hover:bg-obsidian-900 border border-editorial-line text-ink-200 hover:text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 shadow-elevated"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Enlarge / Lightbox Button */}
          <button
            onClick={() => setSelectedImage(slides[currentSlide].src)}
            className="absolute top-4 right-4 p-2.5 rounded-xl bg-obsidian-950/80 hover:bg-obsidian-900 border border-editorial-line text-ink-200 hover:text-white backdrop-blur-md transition-colors shadow-subtle"
            aria-label="Enlarge image"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail Navigation Strip */}
        {slides.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                  currentSlide === idx
                    ? 'border-accent-blue ring-2 ring-accent-blue/30 scale-105'
                    : 'border-editorial-line opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={s.src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Structured Case Study Grid: Problem vs Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Problem Statement */}
        <div className="p-6 rounded-2xl bg-obsidian-850/80 border border-editorial-line space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem Statement</span>
          </div>
          <p className="text-sm text-ink-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Proposed Solution */}
        <div className="p-6 rounded-2xl bg-obsidian-850/80 border border-editorial-line space-y-3">
          <div className="flex items-center gap-2 text-accent-sky text-xs font-mono font-bold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>The Proposed Solution</span>
          </div>
          <p className="text-sm text-ink-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Individual Contribution */}
      <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-editorial-lineLight space-y-3 shadow-subtle">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
          <UserCheck className="w-4 h-4" />
          <span>My Individual Contribution &amp; Ownership</span>
        </div>
        <p className="text-sm sm:text-base text-ink-200 leading-relaxed">
          {project.contribution}
        </p>
      </div>

      {/* Interactive System Architecture & Pipeline Explorer */}
      {project.architectureSteps && (
        <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-850 border border-editorial-line space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-editorial-line pb-4">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-ink-100 uppercase tracking-wider">
              <Workflow className="w-4 h-4 text-accent-sky" />
              <span>System Architecture &amp; Data Pipeline Flow</span>
            </div>
            <span className="text-[11px] font-mono text-ink-500">
              Select stage to inspect engineering details
            </span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {project.architectureSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeStep === idx
                    ? 'bg-accent-blue/15 border-accent-blue text-accent-sky shadow-subtle'
                    : 'bg-obsidian-900 border-editorial-line text-ink-400 hover:text-ink-200 hover:border-editorial-lineFocus'
                }`}
              >
                <span className="block text-[10px] font-mono text-ink-500 mb-1">
                  Stage {step.step}
                </span>
                <span className="text-xs font-bold font-sans block truncate">
                  {step.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Callout */}
          <div className="p-4 rounded-xl bg-obsidian-900/90 border border-editorial-line flex items-start gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-accent-blue/20 text-accent-sky border border-accent-blue/30 shrink-0">
              Stage {project.architectureSteps[activeStep].step}
            </span>
            <div className="space-y-1">
              <p className="text-sm font-bold text-ink-50">
                {project.architectureSteps[activeStep].name}
              </p>
              <p className="text-xs text-ink-300 leading-relaxed font-sans">
                {project.architectureSteps[activeStep].detail}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Technology Stack Badges */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-400 uppercase tracking-wider">
          <Cpu className="w-4 h-4 text-accent-sky" />
          <span>Technologies &amp; Frameworks</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="badge-editorial text-xs py-1.5 px-3 bg-obsidian-850"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Implementation Details List */}
      <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-850 border border-editorial-line space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-200 uppercase tracking-wider">
          <Layers className="w-4 h-4 text-accent-sky" />
          <span>Implementation Notes &amp; Engineering Specifications</span>
        </div>
        <ul className="space-y-3">
          {project.implementationDetails.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sky mt-2 shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Verified Results & Learnings */}
      {project.results && project.results.length > 0 && (
        <div className="p-6 rounded-2xl bg-obsidian-900 border border-editorial-line space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Results &amp; Takeaways</span>
          </div>
          <ul className="space-y-2">
            {project.results.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-300">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Prev / Next Navigation Footer */}
      <div className="pt-8 border-t border-editorial-line flex items-center justify-between">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="flex items-center gap-2 text-xs font-mono text-ink-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev: {prevProject.shortTitle}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.id}`}
            className="flex items-center gap-2 text-xs font-mono text-ink-400 hover:text-white transition-colors"
          >
            <span>Next: {nextProject.shortTitle}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/92 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-obsidian-900 border border-editorial-lineLight rounded-2xl p-2 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-obsidian-950/80 text-white hover:bg-obsidian-800 border border-editorial-line transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
