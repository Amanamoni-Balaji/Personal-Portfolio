import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  Award,
  Trophy,
  Mail,
  FileText,
  Github,
  Linkedin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FloatingDock({ onOpenResume }) {
  const location = useLocation();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const items = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'About', icon: User, path: '/about' },
    { label: 'Skills', icon: Code2, path: '/skills' },
    { label: 'Projects', icon: FolderGit2, path: '/projects' },
    { label: 'Experience', icon: Briefcase, path: '/experience' },
    { label: 'Certifications', icon: Award, path: '/certifications' },
    { label: 'Achievements', icon: Trophy, path: '/achievements' },
    { label: 'Contact', icon: Mail, path: '/contact' },
    { label: 'Resume', icon: FileText, onClick: onOpenResume, isAction: true },
    { label: 'GitHub', icon: Github, href: portfolioData.personal.github, isExternal: true, hideOnMobile: true },
    { label: 'LinkedIn', icon: Linkedin, href: portfolioData.personal.linkedin, isExternal: true, hideOnMobile: true },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[96vw]">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a0d14]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.85)]"
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isActive = item.path && (item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path));
          const isHovered = hoveredIdx === idx;

          const content = (
            <motion.div
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ scale: 1.25, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className={`relative p-2 sm:p-2.5 rounded-full transition-colors flex items-center justify-center ${
                isActive
                  ? 'bg-blue-500/25 text-blue-400 border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.35)]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              } ${item.hideOnMobile ? 'hidden sm:flex' : ''}`}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -30, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute px-2.5 py-1 rounded-md bg-[#0a0d14] text-[10px] font-mono font-medium text-white border border-white/15 shadow-xl whitespace-nowrap pointer-events-none"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );

          if (item.isAction) {
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`focus:outline-none ${item.hideOnMobile ? 'hidden sm:block' : ''}`}
                aria-label={item.label}
              >
                {content}
              </button>
            );
          }

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`focus:outline-none ${item.hideOnMobile ? 'hidden sm:block' : ''}`}
                aria-label={item.label}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.path}
              className="focus:outline-none"
              aria-label={item.label}
            >
              {content}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
