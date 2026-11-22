import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Sparkles,
  ExternalLink,
  GraduationCap,
  MapPin,
  Compass
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

export default function Home({ onOpenResume, onShowToast }) {
  const { personal } = portfolioData;

  const handleResumeClick = () => {
    confetti({
      particleCount: 55,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38BDF8', '#818CF8', '#34D399']
    });
    if (onOpenResume) onOpenResume();
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 1. Atmospheric Luxury Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 editorial-grid-bg opacity-25 pointer-events-none" />

      {/* 2. Main Centered / Balanced Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Essential Professional Introduction */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <BlurFade delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-mono text-ink-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Available for AI/ML &amp; Full-Stack Roles</span>
                <span className="text-ink-600 hidden sm:inline">&bull;</span>
                <span className="text-accent-sky hidden sm:inline font-medium">Hyderabad, India</span>
              </div>
            </BlurFade>

            {/* Full Name & Grand Typography */}
            <BlurFade delay={0.1} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans leading-[1.08]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white via-sky-100 to-indigo-200 bg-clip-text text-transparent">
                  Amanamoni Balaji
                </span>
              </h1>

              {/* Strong Professional Headline */}
              <p className="text-lg sm:text-xl lg:text-2xl font-mono font-medium text-accent-sky tracking-tight">
                AI/ML Engineer &bull; Data Analytics &bull; Full-Stack Developer
              </p>
            </BlurFade>

            {/* Concise 2-3 Line Engaging Introduction */}
            <BlurFade delay={0.15}>
              <p className="text-base sm:text-lg text-ink-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Information Technology undergraduate at <strong className="text-white font-semibold">Matrusri Engineering College (9.6/10 CGPA)</strong>. I engineer mathematically grounded machine learning models, clinical process mining engines, and scalable full-stack web architectures.
              </p>
            </BlurFade>

            {/* Core Focus Badges (Clean & Tasteful) */}
            <BlurFade delay={0.2}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {[
                  'Clinical Process Mining',
                  'Predictive AI & NLP',
                  'React & TypeScript',
                  'Django REST Framework'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono text-ink-300 bg-white/5 border border-white/10 hover:border-white/25 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </BlurFade>

            {/* Two Main Actions: Explore My Work & Download Resume */}
            <BlurFade delay={0.25}>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/projects"
                  className="btn-primary text-sm py-3 px-6 rounded-xl font-semibold shadow-glow-sky group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={handleResumeClick}
                  className="btn-secondary text-sm py-3 px-6 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Download className="w-4 h-4 text-accent-sky transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </BlurFade>

            {/* Minimal Professional Social Links */}
            <BlurFade delay={0.3}>
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs font-mono text-ink-400">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                <span className="text-ink-700">&bull;</span>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-accent-sky" />
                  <span>LinkedIn</span>
                </a>

                <span className="text-ink-700">&bull;</span>

                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Email</span>
                </a>
              </div>
            </BlurFade>

          </div>

          {/* Right Column: Elegant Sculpted Profile Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <BlurFade delay={0.2}>
              <motion.div
                whileHover={{ y: -4, rotate: 0.5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative group"
              >
                {/* Ambient Soft Glow Behind Photo Frame */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-emerald-500/15 rounded-[3rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Elegant Geometric Frame (Sculpted Rounded-Rectangle) */}
                <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/4.8] rounded-[2.5rem] p-2 bg-[#0c101a]/90 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden">
                  
                  {/* Photo Container */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative">
                    <picture>
                      <source srcSet={personal.avatarWebp} type="image/webp" />
                      <img
                        src={personal.avatar}
                        alt="Amanamoni Balaji - Professional Portrait"
                        className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </picture>

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                    {/* Minimal Floating Badge on Portrait */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-ink-200">
                        <span>B.E. Information Technology</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-blue-500/20 border border-blue-400/40 backdrop-blur-md text-xs font-mono font-bold text-accent-sky">
                        9.6 CGPA
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </BlurFade>
          </div>

        </div>
      </div>

      {/* 3. Subtle Explore Indicator (Encouraging Visitors to Explore Dedicated Pages) */}
      <BlurFade delay={0.35} className="relative z-10 pt-10 text-center">
        <Link
          to="/about"
          className="inline-flex flex-col items-center gap-1.5 text-ink-400 hover:text-white transition-colors group focus:outline-none"
          aria-label="Explore dedicated portfolio sections"
        >
          <span className="text-[11px] font-mono tracking-wider uppercase text-ink-500 group-hover:text-accent-sky transition-colors">
            Explore dedicated sections
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-ink-400 group-hover:text-accent-sky transition-colors" />
          </motion.div>
        </Link>
      </BlurFade>

    </div>
  );
}
