import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Menu,
  X,
  FileText,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050507]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Clean Personal Wordmark: Amanamoni Balaji */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-sans">
                Amanamoni Balaji
              </span>
            </Link>

            {/* Desktop Navigation Links (Capsule Design) */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0c101a]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-lg">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 font-sans ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-ink-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-white/15 rounded-full -z-10 border border-white/20 shadow-sm"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Resume Download Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 shadow-sm transition-all duration-200 active:scale-95"
                aria-label="Open Resume Modal"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-ink-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#07090e]/98 border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.path);

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-600/20 text-accent-sky font-semibold border border-blue-500/30'
                          : 'text-ink-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-accent-sky animate-pulse" />}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Footer Links */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-ink-400 font-mono">
                  {portfolioData.personal.email}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-ink-400 hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-ink-400 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
