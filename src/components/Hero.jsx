import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Sparkles,
  Terminal,
  Layers,
  Copy,
  Check,
  Code2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const { personal, projects } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Subtle interactive mouse spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Copied to Clipboard',
        message: `${personal.email} is ready to paste.`
      });
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden editorial-vignette group/hero"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 editorial-grid-bg opacity-40 pointer-events-none" />

      {/* Subtle Mouse-following Spotlight (restrained dark indigo/blue glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.07),
              transparent 80%
            )
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Headline & Intros */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Indicator Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-editorial-line bg-obsidian-900/90 text-xs font-mono text-ink-300 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>{personal.availability}</span>
              </div>
            </motion.div>

            {/* Name and Professional Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-4">
                {/* Mobile/Tablet Portrait Thumbnail */}
                <div className="lg:hidden relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-accent-blue/40 shadow-elevated bg-obsidian-950">
                    <picture>
                      <source srcSet={personal.avatarWebp} type="image/webp" />
                      <img
                        src={personal.avatar}
                        alt="Amanamoni Balaji"
                        className="w-full h-full object-cover object-[center_20%]"
                      />
                    </picture>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-obsidian-900 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                </div>

                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-50 font-sans leading-[1.12]">
                    Amanamoni Balaji
                  </h1>
                </div>
              </div>
              
              {/* Animated Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 72 }}
                transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                className="h-1 bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-sky rounded-full"
              />

              <p className="text-lg sm:text-xl font-medium text-accent-sky font-mono pt-1">
                {personal.headline}
              </p>
            </motion.div>

            {/* Introduction Narrative */}
            <motion.div variants={itemVariants} className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg text-ink-200 leading-relaxed font-light">
                "{personal.heroIntro}"
              </p>
              <p className="text-sm text-ink-400 leading-relaxed">
                {personal.positioning}
              </p>
            </motion.div>

            {/* Focus Areas Micro Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              <span className="badge-editorial text-xs py-1 px-2.5">
                AI &amp; Machine Learning
              </span>
              <span className="badge-editorial text-xs py-1 px-2.5">
                Data Analytics &amp; Process Mining
              </span>
              <span className="badge-editorial text-xs py-1 px-2.5">
                Full Stack Web Engineering
              </span>
            </motion.div>

            {/* Primary Action Buttons with Micro-interactions */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="btn-primary text-sm py-2.5 px-5 shadow-sm"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
                <button
                  onClick={onOpenResume}
                  className="btn-secondary text-sm py-2.5 px-5"
                >
                  <Download className="w-4 h-4 text-accent-sky" />
                  <span>View Resume</span>
                </button>
              </motion.div>

              <Link
                to="/contact"
                className="btn-ghost text-xs py-2 px-3 text-ink-400 hover:text-ink-100"
              >
                <span>Contact Me &rarr;</span>
              </Link>
            </motion.div>

            {/* Social Links & Direct Email Action */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-editorial-line/60 flex flex-wrap items-center gap-4 text-xs font-mono text-ink-400"
            >
              <span className="text-ink-500">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-ink-600">&bull;</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-ink-600">&bull;</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-ink-300 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedEmail ? 'Copied' : personal.email}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Editorial Recruiter Card with Executive Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-obsidian-900 border border-editorial-lineLight p-5 sm:p-6 shadow-elevated space-y-5"
            >
              {/* Executive Portrait Frame */}
              <div className="relative group/portrait overflow-hidden rounded-xl bg-obsidian-950 border border-editorial-line/80 shadow-inner">
                {/* Image Container with Subtle Zoom on Hover */}
                <div className="relative aspect-[4/3.8] sm:aspect-[4/3.5] w-full overflow-hidden">
                  <picture>
                    <source srcSet={personal.avatarWebp} type="image/webp" />
                    <img
                      src={personal.avatar}
                      alt="Amanamoni Balaji - Professional Profile"
                      className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover/portrait:scale-105"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                  {/* Subtle Gradient Overlay at the base for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Top-Right Badge: Verified Candidate */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-950/85 border border-accent-blue/40 text-accent-sky text-[11px] font-mono font-medium shadow-elevated backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified Candidate</span>
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-lg bg-obsidian-900/90 border border-editorial-line/80 backdrop-blur-md flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h2 className="text-sm font-bold text-ink-50 font-sans tracking-tight">
                      Amanamoni Balaji
                    </h2>
                    <p className="text-[11px] text-accent-sky font-mono">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-ink-400 font-mono block">CUMULATIVE GPA</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">9.6 / 10 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Verified Education Spotlight */}
              <div className="p-3.5 rounded-xl bg-obsidian-850/80 border border-editorial-line space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-400">Education Track</span>
                  <span className="text-ink-300">2023–2027</span>
                </div>
                <p className="text-sm font-semibold text-ink-100">
                  Matrusri Engineering College
                </p>
                <p className="text-xs text-ink-400 font-mono">
                  B.E. Information Technology &bull; 9.6 CGPA
                </p>
              </div>

              {/* Engineering Focus Matrix */}
              <div className="space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-ink-400 font-semibold">
                  Core Engineering Tracks
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-obsidian-850/50 border border-editorial-line text-ink-300">
                    <span className="block text-[10px] text-ink-500">AI / ML</span>
                    Predictive &amp; Vision Models
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-850/50 border border-editorial-line text-ink-300">
                    <span className="block text-[10px] text-ink-500">Analytics</span>
                    Process Mining &amp; EDA
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-850/50 border border-editorial-line text-ink-300">
                    <span className="block text-[10px] text-ink-500">Full Stack</span>
                    React &bull; Django &bull; APIs
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-850/50 border border-editorial-line text-ink-300">
                    <span className="block text-[10px] text-ink-500">Datathon</span>
                    Datanyx '25 Runner-Up
                  </div>
                </div>
              </div>

              {/* Activity Feed / Case Studies Spotlight */}
              <div className="p-3 rounded-lg bg-obsidian-950 border border-editorial-line/80 font-mono text-[11px] space-y-1.5">
                <div className="flex items-center gap-2 text-ink-400 pb-1 border-b border-editorial-line/50">
                  <Terminal className="w-3.5 h-3.5 text-accent-sky" />
                  <span>Active Engineering Projects</span>
                </div>
                <div className="text-ink-400 flex items-center justify-between">
                  <span>krishiai/</span>
                  <span className="text-ink-300 text-[10px]">rainfall &amp; crop advisory</span>
                </div>
                <div className="text-ink-400 flex items-center justify-between">
                  <span>travelmate/</span>
                  <span className="text-ink-300 text-[10px]">full stack django booking</span>
                </div>
                <div className="text-ink-400 flex items-center justify-between">
                  <span>timetrackers/</span>
                  <span className="text-ink-300 text-[10px]">sih timetable scheduler</span>
                </div>
                <div className="text-ink-400 flex items-center justify-between">
                  <span>agro_guardian/</span>
                  <span className="text-ink-300 text-[10px]">crop disease &amp; CNN</span>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
