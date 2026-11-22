import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
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
  Activity,
  Cpu,
  Brain,
  Database
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Rotating Typewriter Subtitle
  const roles = [
    'AI & Machine Learning Engineer',
    'Clinical Pathway Process Mining Specialist',
    'Full-Stack Software Developer',
    'Datanyx 2025 Datathon Runner-Up'
  ];
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

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

  const handleResumeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38BDF8', '#818CF8', '#34D399']
    });
    if (onOpenResume) onOpenResume();
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-accent-blue/10 via-accent-violet/10 to-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 editorial-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-mono text-zinc-300 shadow-elevated"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{personal.availability}</span>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <span className="text-accent-sky hidden sm:inline">Hyderabad, India</span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-sans leading-[1.05]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                  Amanamoni Balaji
                </span>
              </h1>

              {/* Dynamic Rotating Role Title */}
              <div className="h-9 sm:h-10 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIdx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-lg sm:text-xl lg:text-2xl font-mono font-semibold text-accent-sky tracking-tight"
                  >
                    ✦ {roles[roleIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* High-Conviction Bio Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Information Technology undergraduate at <strong className="text-white font-semibold">Matrusri Engineering College (CGPA 9.6/10)</strong>. I architect intelligent AI systems, clinical process mining engines, and production-grade full-stack web applications.
            </motion.p>

            {/* Core Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {['Python', 'Streamlit & PM4Py', 'React.js & TypeScript', 'Django REST', 'Scikit-Learn', 'Deep Learning'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-white/10 bg-white/5 text-zinc-300 hover:border-white/25 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                to="/projects"
                className="btn-primary text-sm py-3 px-6 shadow-glow-sky font-semibold"
              >
                <span>Explore 8 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleResumeClick}
                className="btn-secondary text-sm py-3 px-6 font-semibold"
              >
                <Download className="w-4 h-4 text-accent-sky" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                title="Copy direct email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-xs font-mono text-zinc-400"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-600">&bull;</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-accent-sky" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-zinc-400">9.6 CGPA &bull; Class of '27</span>
            </motion.div>
          </div>

          {/* Right Column: High-End Circular Portrait Centerpiece with Floating Satellites */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer Iridescent Ambient Ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-tr from-accent-blue via-accent-violet to-emerald-400 shadow-[0_0_60px_rgba(59,130,246,0.35)]">
                {/* Inner Masked Image Frame */}
                <div className="w-full h-full rounded-full overflow-hidden bg-obsidian-950 border-4 border-obsidian-950 relative group">
                  <picture>
                    <source srcSet={personal.avatarWebp} type="image/webp" />
                    <img
                      src={personal.avatar}
                      alt="Amanamoni Balaji"
                      className="w-full h-full object-cover object-[center_22%] filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Satellite 1: Top Left (CareFlow & PM4Py) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-3 -left-4 sm:-left-8 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>CareFlow &bull; PM4Py</span>
              </motion.div>

              {/* Floating Satellite 2: Top Right (Academic GPA) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-3 -right-4 sm:-right-6 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-accent-blue/40 text-accent-sky text-xs font-mono font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <GraduationCap className="w-3.5 h-3.5 text-accent-sky" />
                <span>9.6 / 10 CGPA</span>
              </motion.div>

              {/* Floating Satellite 3: Bottom Left (MediAssist AI) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-4 sm:-left-8 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-accent-violet/40 text-violet-300 text-xs font-mono font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <Brain className="w-3.5 h-3.5 text-accent-violet" />
                <span>MediAssist AI &bull; NLP</span>
              </motion.div>

              {/* Floating Satellite 4: Bottom Right (Datanyx Datathon Runner-Up) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-3 -right-4 sm:-right-6 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <span>🏆 Datanyx '25</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
