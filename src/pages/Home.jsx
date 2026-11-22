import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
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
  Check
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

// Crisp Official WhatsApp Vector Icon
function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9a1 1 0 0 0-1 1c0 2.5 2 4.5 4.5 4.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5l-1-.2a.5.5 0 0 0-.5.2l-.3.3c-.5-.3-1.1-.9-1.4-1.4l.3-.3a.5.5 0 0 0 .2-.5l-.2-1a.5.5 0 0 0-.5-.5h-.6z" />
    </svg>
  );
}

export default function Home({ onOpenResume, onShowToast }) {
  const { personal } = portfolioData;

  // Actual phone number from resume: +91 7981591655
  // Format for WhatsApp: https://wa.me/917981591655
  const cleanPhone = personal.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hi%20Balaji,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  // 3D Tilt calculations for the portrait card
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['20%', '80%']);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['20%', '80%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
      {/* Ambient Lighting Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 editorial-grid-bg opacity-30 pointer-events-none" />

      {/* Main Centered / Balanced Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Essential Professional Introduction */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <BlurFade delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-mono text-ink-300 shadow-sm hover:border-white/20 transition-colors">
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

            {/* Action Buttons with Glowing Interactions */}
            <BlurFade delay={0.25} className="space-y-4 pt-2">
              {/* Row 1: Primary Work & Resume CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/projects"
                  className="btn-glow-sky light-sweep text-sm py-3 px-6 rounded-xl font-semibold group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={handleResumeClick}
                  className="btn-glow-indigo light-sweep text-sm py-3 px-6 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Download className="w-4 h-4 text-accent-sky transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Row 2: Direct Contact Channels — Email & WhatsApp (Immediately After Email) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {/* Email Contact Button */}
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-glow-cyan light-sweep inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all group"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4 text-sky-400 transition-transform group-hover:scale-110" />
                  <span>Email</span>
                </a>

                {/* WhatsApp Contact Button — Immediately after Email */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-emerald light-sweep inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all group"
                  aria-label="Open WhatsApp conversation"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </BlurFade>

            {/* Minimal Professional Social Links */}
            <BlurFade delay={0.3}>
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs font-mono text-ink-400">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <span className="text-ink-700">&bull;</span>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-accent-sky group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>

                <span className="text-ink-700">&bull;</span>

                <span className="text-ink-500">Matrusri IT &bull; CGPA 9.6</span>
              </div>
            </BlurFade>

          </div>

          {/* Right Column: Interactive 3D Cinematic Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center perspective-container">
            <BlurFade delay={0.2}>
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative group cursor-pointer"
              >
                {/* Outer Breathing Radiant Aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-emerald-500/20 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Sculpted 3D Geometric Frame */}
                <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/4.8] rounded-[2.5rem] p-2.5 bg-[#0c101a]/95 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden transition-all duration-300 group-hover:border-white/35">
                  
                  {/* Photo Canvas Container */}
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

                    {/* Dynamic Specular Sheen Layer that moves inversely with cursor */}
                    <motion.div
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22) 0%, transparent 60%)',
                        left: sheenX,
                        top: sheenY,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="absolute w-72 h-72 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Cinematic Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

                    {/* Minimal Floating Status Badge */}
                    <div
                      style={{ transform: 'translateZ(25px)' }}
                      className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none"
                    >
                      <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-ink-200">
                        <span>B.E. Information Technology</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-blue-500/20 border border-blue-400/40 backdrop-blur-md text-xs font-mono font-bold text-accent-sky shadow-[0_0_12px_rgba(59,130,246,0.3)]">
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

      {/* Subtle Explore Indicator (Encouraging Visitors to Explore Dedicated Pages) */}
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
