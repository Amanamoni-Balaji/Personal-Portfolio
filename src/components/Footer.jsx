import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Crisp WhatsApp Vector Icon
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

export default function Footer({ onOpenResume }) {
  const { personal } = portfolioData;

  const cleanPhone = personal.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hi%20Balaji,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090e]/95 border-t border-editorial-line pt-14 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Profile Photo, Name, Summary & Education */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full overflow-hidden border border-accent-blue/40 shrink-0 shadow-md bg-black"
                style={{ borderRadius: '50%' }}
              >
                <picture>
                  <source srcSet={personal.avatarWebp} type="image/webp" />
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-[center_20%] rounded-full"
                    style={{ borderRadius: '50%' }}
                  />
                </picture>
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white font-sans tracking-tight block">
                  {personal.name}
                </span>
                <span className="text-xs font-mono text-accent-sky block">
                  AI/ML &bull; Data Analytics &bull; Full-Stack
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink-300 max-w-md leading-relaxed font-sans">
              {personal.positioning}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-mono text-ink-400">
              <GraduationCap className="w-4 h-4 text-accent-sky" />
              <span>
                {personal.education.college} &bull; CGPA {personal.education.cgpa}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & Credentials Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-xs text-ink-400 font-sans">
                <li>
                  <Link to="/" className="hover:text-accent-sky transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent-sky transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-accent-sky transition-colors">
                    Technical Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-accent-sky transition-colors">
                    Featured Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
                Credentials
              </p>
              <ul className="space-y-2 text-xs text-ink-400 font-sans">
                <li>
                  <Link to="/experience" className="hover:text-accent-sky transition-colors">
                    Experience &amp; Internships
                  </Link>
                </li>
                <li>
                  <Link to="/certifications" className="hover:text-accent-sky transition-colors">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link to="/achievements" className="hover:text-accent-sky transition-colors">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent-sky transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact, Social Media & Resume */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Connect
            </p>
            <p className="text-xs text-ink-300 leading-relaxed font-sans">
              Open to discussions regarding AI/ML engineering, data analytics roles, and software development collaborations.
            </p>

            <div className="flex items-center gap-2 pt-1 flex-wrap">
              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-sky-400/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-indigo-400/50 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] transition-all"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-emerald-400/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all"
                aria-label="Open WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Resume / CV Link */}
              {onOpenResume ? (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-accent-sky bg-accent-blue/10 border border-accent-blue/30 hover:bg-accent-blue/20 transition-colors"
                  title="View Resume"
                >
                  <span>CV.pdf</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              ) : (
                <a
                  href={personal.resumeUrl}
                  download="Amanamoni_Balaji_Resume.pdf"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-accent-sky bg-accent-blue/10 border border-accent-blue/30 hover:bg-accent-blue/20 transition-colors"
                  title="Download Resume"
                >
                  <span>CV.pdf</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 border-t border-editorial-line/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Amanamoni Balaji &bull; Matrusri Engineering College &bull; All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-ink-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
