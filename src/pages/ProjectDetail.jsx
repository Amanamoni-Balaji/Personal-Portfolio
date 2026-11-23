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
  Sliders,
  Target,
  Grid,
  Images
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import ProjectGalleryModal from '../components/ProjectGalleryModal';
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
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
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
        <h2 className="text-2xl font-bold text-white font-sans">Project Not Found</h2>
        <p className="text-sm text-ink-400">
          The requested case study could not be located in the portfolio archive.
        </p>
        <Link to="/projects" className="btn-primary text-xs py-2 px-4 rounded-xl">
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
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Back button & Breadcrumb */}
      <BlurFade delay={0.03} className="flex items-center justify-between text-xs font-mono text-ink-400 border-b border-white/[0.08] pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
        <span className="badge-editorial text-[11px]">{project.category}</span>
      </BlurFade>

      {/* Project Title & Hero Header */}
      <BlurFade delay={0.06} className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.badge && (
            <span className="badge-accent text-xs">{project.badge}</span>
          )}
          <span className="badge-editorial text-xs">Technical Case Study</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-accent-sky font-mono">
          {project.subtitle}
        </p>
        <p className="text-sm sm:text-base text-ink-300 max-w-3xl leading-relaxed font-sans">
          {project.overview}
        </p>
      </BlurFade>

      {/* Actions & Repository Links */}
      <BlurFade delay={0.09} className="flex flex-wrap items-center gap-3 pt-1">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-5 shadow-sm rounded-xl"
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
            className="btn-secondary text-xs py-2.5 px-5 rounded-xl"
          >
            <span>Live Demonstration</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </BlurFade>

      {/* Interactive Screenshot Carousel / Slider */}
      <BlurFade delay={0.12} className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-ink-400 gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-ink-300 font-semibold">
            <Sliders className="w-3.5 h-3.5 text-accent-sky" />
            <span>Interactive Visual Artifacts &amp; Screenshots</span>
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsGalleryModalOpen(true)}
              className="text-accent-sky hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:border-blue-400 transition-all font-semibold"
              title="Open full interactive screenshot gallery"
            >
              <Images className="w-3.5 h-3.5" />
              <span>View Full Gallery ({slides.length} Screens)</span>
            </button>
            <span>
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>

        {/* Main Display Screen */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl group aspect-[16/10]">
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
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
            <p className="text-xs sm:text-sm text-white font-mono drop-shadow">
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
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/80 hover:bg-neutral-900 border border-white/15 text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 shadow-xl"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Navigation Controls: Next */}
          {slides.length > 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/80 hover:bg-neutral-900 border border-white/15 text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 shadow-xl"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Enlarge / Lightbox Button */}
          <button
            onClick={() => setSelectedImage(slides[currentSlide].src)}
            className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/80 hover:bg-neutral-900 border border-white/15 text-white backdrop-blur-md transition-colors shadow-xl"
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
                className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                  currentSlide === idx
                    ? 'border-blue-500 ring-2 ring-blue-500/40 scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100'
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
      </BlurFade>

      {/* Structured Case Study Grid: Problem vs Solution */}
      <BlurFade delay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Problem Statement */}
        <div className="p-7 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] space-y-3 shadow-elevated">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem Statement</span>
          </div>
          <p className="text-sm text-ink-300 leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        {/* Proposed Solution */}
        <div className="p-7 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] space-y-3 shadow-elevated">
          <div className="flex items-center gap-2 text-accent-sky text-xs font-mono font-bold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>The Proposed Solution</span>
          </div>
          <p className="text-sm text-ink-300 leading-relaxed font-sans">
            {project.solution}
          </p>
        </div>
      </BlurFade>

      {/* Project Objectives */}
      {project.objectives && project.objectives.length > 0 && (
        <BlurFade delay={0.18}>
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] space-y-4 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-sky uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Project Objectives &amp; Scope</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] flex items-start gap-3"
                >
                  <span className="text-xs font-mono font-bold text-accent-sky mt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      )}

      {/* Key Features & System Capabilities */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <BlurFade delay={0.2}>
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] space-y-4 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Key Features &amp; Technical Capabilities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      )}

      {/* Individual Contribution */}
      <BlurFade delay={0.22}>
        <div className="p-7 sm:p-8 rounded-3xl bg-[#0b0e17] border border-white/10 space-y-3 shadow-2xl">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>My Individual Contribution &amp; Ownership</span>
          </div>
          <p className="text-sm sm:text-base text-ink-200 leading-relaxed font-sans">
            {project.contribution}
          </p>
        </div>
      </BlurFade>

      {/* Interactive System Architecture & Pipeline Explorer */}
      {project.architectureSteps && (
        <BlurFade delay={0.24}>
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0d16] border border-white/10 space-y-6 shadow-elevated">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Workflow className="w-4 h-4 text-accent-sky" />
                <span>System Architecture &amp; Data Pipeline Flow</span>
              </div>
              <span className="text-[11px] font-mono text-ink-400">
                Select stage to inspect engineering details
              </span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {project.architectureSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    activeStep === idx
                      ? 'bg-blue-600/20 border-blue-500 text-accent-sky shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                      : 'bg-[#07090e] border-white/10 text-ink-400 hover:text-white hover:border-white/20'
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
            <div className="p-5 rounded-2xl bg-[#07090e] border border-white/[0.08] flex items-start gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-500/20 text-accent-sky border border-blue-500/30 shrink-0">
                Stage {project.architectureSteps[activeStep].step}
              </span>
              <div className="space-y-1">
                <p className="text-sm font-bold text-white font-sans">
                  {project.architectureSteps[activeStep].name}
                </p>
                <p className="text-xs text-ink-300 leading-relaxed font-sans">
                  {project.architectureSteps[activeStep].detail}
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      )}

      {/* Technology Stack Badges */}
      <BlurFade delay={0.26} className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-400 uppercase tracking-wider">
          <Cpu className="w-4 h-4 text-accent-sky" />
          <span>Technologies &amp; Frameworks</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="badge-editorial text-xs py-1.5 px-3 bg-[#0a0d16] border border-white/10 text-ink-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </BlurFade>

      {/* Implementation Details List */}
      <BlurFade delay={0.28}>
        <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] space-y-4 shadow-elevated">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-200 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-accent-sky" />
            <span>Implementation Notes &amp; Engineering Specifications</span>
          </div>
          <ul className="space-y-3">
            {project.implementationDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky mt-2 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      {/* Verified Results & Learnings */}
      {project.results && project.results.length > 0 && (
        <BlurFade delay={0.3}>
          <div className="p-7 rounded-3xl bg-[#0b0e17] border border-white/10 space-y-3 shadow-elevated">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Results &amp; Takeaways</span>
            </div>
            <ul className="space-y-2">
              {project.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-300 font-sans">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      )}

      {/* Prev / Next Navigation Footer */}
      <BlurFade delay={0.32} className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
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
      </BlurFade>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0a0d16] border border-white/20 rounded-3xl p-2 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-black/80 text-white hover:bg-neutral-800 border border-white/20 transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="w-full max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Project Image Gallery Modal */}
      <ProjectGalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        project={project}
      />
    </div>
  );
}
