import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import Footer from '../components/Footer';
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

  // Full Name for single-line presentation
  const fullName = 'AMANAMONI BALAJI';

  // Cinematic name character animation setup
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.08,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 22,
      filter: 'blur(8px)',
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 190,
      },
    },
  };

  // 3D Tilt calculations for the circular portrait
  const photoCardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['20%', '80%']);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['20%', '80%']);

  const handleMouseMove = (e) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
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
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 editorial-grid-bg opacity-30 pointer-events-none" />

      {/* Main Balanced Hero Container */}
      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto w-full pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8 my-auto">
        
        {/* 1. Small introductory text: HELLO, I'M */}
        <BlurFade delay={0.05}>
          <p className="text-xs sm:text-sm font-mono tracking-[0.28em] text-accent-sky uppercase font-semibold">
            HELLO, I'M
          </p>
        </BlurFade>

        {/* 2. My Complete Name: AMANAMONI BALAJI (Single Line on Desktop) */}
        <div className="overflow-visible flex items-center justify-center">
          <motion.h1
            variants={nameContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-extrabold tracking-tight font-sans leading-none select-none whitespace-nowrap overflow-hidden flex items-center justify-center drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)]"
          >
            {fullName.split('').map((char, index) => {
              if (char === ' ') {
                return (
                  <span
                    key={`space-${index}`}
                    className="inline-block w-2.5 sm:w-4 md:w-5 lg:w-6"
                  />
                );
              }
              const isLastName = index >= 10;
              return (
                <motion.span
                  key={`char-${index}`}
                  variants={charVariants}
                  whileHover={{ y: -5, scale: 1.08 }}
                  className={`inline-block bg-gradient-to-b ${
                    isLastName
                      ? 'from-white via-sky-100 to-indigo-300'
                      : 'from-white via-neutral-100 to-neutral-400'
                  } bg-clip-text text-transparent transition-transform cursor-default`}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
        </div>

        {/* 3. Professional Headline */}
        <BlurFade delay={0.14}>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-mono font-bold text-accent-sky tracking-wider sm:tracking-widest uppercase">
            AI/ML | DATA ANALYTICS | FULL-STACK DEVELOPMENT
          </p>
        </BlurFade>

        {/* 4. Short Professional Introduction */}
        <BlurFade delay={0.18}>
          <p className="text-base sm:text-lg text-ink-300 max-w-2xl mx-auto leading-relaxed font-normal">
            I'm an Information Technology student passionate about building practical solutions using AI, data, and web technologies. I enjoy learning new technologies and turning ideas into useful projects.
          </p>
        </BlurFade>

        {/* 5. Circular Profile Photograph with 3D Tilt, Rotating Ring & Ambient Aura */}
        <BlurFade delay={0.22} className="flex justify-center perspective-container py-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Continuous Gentle Floating Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              ref={photoCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative group cursor-pointer"
            >
              {/* Outer Radiant Breathing Aura */}
              <motion.div
                animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-emerald-500/20 blur-2xl pointer-events-none"
                style={{ borderRadius: '50%' }}
              />

              {/* Rotating Dual-Gradient Circular Border Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 opacity-75 group-hover:opacity-100 blur-[2px] transition-opacity pointer-events-none"
                style={{ borderRadius: '50%' }}
              />

              {/* Perfect Circular 1:1 Container */}
              <div
                className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 aspect-square rounded-full p-1.5 bg-[#050507] shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.2)] overflow-hidden"
                style={{ borderRadius: '50%' }}
              >
                {/* Inner Circle Image Container */}
                <div
                  className="w-full h-full rounded-full overflow-hidden relative bg-black"
                  style={{ borderRadius: '50%' }}
                >
                  <picture>
                    <source srcSet={personal.avatarWebp} type="image/webp" />
                    <img
                      src={personal.avatar}
                      alt="Amanamoni Balaji - Professional Portrait"
                      className="w-full h-full object-cover object-[center_20%] rounded-full filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ borderRadius: '50%' }}
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>

                  {/* Dynamic Specular Sheen Reflection Layer (Circular) */}
                  <motion.div
                    style={{
                      background:
                        'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.26) 0%, transparent 65%)',
                      left: sheenX,
                      top: sheenY,
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                    }}
                    className="absolute w-48 h-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Subtle Circular Radial Edge Vignette */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none"
                    style={{ borderRadius: '50%' }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </BlurFade>

        {/* 6. GitHub, LinkedIn, Email, and WhatsApp Contact Options in ONE Single Row */}
        <BlurFade delay={0.26}>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
            {/* 1. GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-github light-sweep inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all group shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            {/* 2. LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-linkedin light-sweep inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all group shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            {/* 3. Email */}
            <a
              href={`mailto:${personal.email}`}
              className="btn-glow-cyan light-sweep inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all group shadow-sm"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>

            {/* 4. WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-emerald light-sweep inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all group shadow-sm"
              aria-label="Open WhatsApp conversation"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </div>
        </BlurFade>

        {/* 7. Main Action Buttons: Explore My Work & Download Resume */}
        <BlurFade delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
            <Link
              to="/projects"
              className="btn-glow-sky light-sweep text-sm py-3 px-6 rounded-xl font-semibold inline-flex items-center gap-2 group shadow-md"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={handleResumeClick}
              className="btn-glow-indigo light-sweep text-sm py-3 px-6 rounded-xl font-semibold inline-flex items-center gap-2 group shadow-md"
            >
              <Download className="w-4 h-4 text-accent-sky transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </BlurFade>

        {/* Subtle Explore Prompt (Encouraging Visitors to Explore Dedicated Pages) */}
        <BlurFade delay={0.34} className="pt-4 text-center">
          <Link
            to="/about"
            className="inline-flex flex-col items-center gap-1 text-ink-400 hover:text-white transition-colors group focus:outline-none"
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

      {/* 8. The Complete Footer Section (Appearing ONLY on the Home Page) */}
      <div className="w-full mt-12">
        <Footer onOpenResume={onOpenResume} />
      </div>

    </div>
  );
}
