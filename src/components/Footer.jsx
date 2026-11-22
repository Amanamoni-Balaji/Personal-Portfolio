import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-editorial-line pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Column 1: Wordmark & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-accent-blue/30 shrink-0 shadow-sm">
                <picture>
                  <source srcSet={personal.avatarWebp} type="image/webp" />
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </picture>
              </div>
              <span className="text-lg font-bold text-ink-50 font-sans tracking-tight">
                {personal.cleanWordmark}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ink-400 max-w-md leading-relaxed">
              {personal.positioning}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-ink-400">
              <GraduationCap className="w-4 h-4 text-accent-sky" />
              <span>{personal.education.college} &bull; CGPA {personal.education.cgpa}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-mono font-semibold text-ink-200 uppercase tracking-wider mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-xs text-ink-400">
                <li><Link to="/" className="hover:text-ink-100 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-ink-100 transition-colors">About Me</Link></li>
                <li><Link to="/skills" className="hover:text-ink-100 transition-colors">Technical Skills</Link></li>
                <li><Link to="/projects" className="hover:text-ink-100 transition-colors">Featured Projects</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold text-ink-200 uppercase tracking-wider mb-3">
                Credentials
              </p>
              <ul className="space-y-2 text-xs text-ink-400">
                <li><Link to="/experience" className="hover:text-ink-100 transition-colors">Experience & Internships</Link></li>
                <li><Link to="/certifications" className="hover:text-ink-100 transition-colors">Certifications</Link></li>
                <li><Link to="/achievements" className="hover:text-ink-100 transition-colors">Achievements</Link></li>
                <li><Link to="/contact" className="hover:text-ink-100 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold text-ink-200 uppercase tracking-wider">
              Connect
            </p>
            <p className="text-xs text-ink-400">
              Open to discussions regarding engineering internships, data analytics roles, and project collaborations.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-editorial-lineFocus transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-editorial-lineFocus transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-300 hover:text-white hover:border-editorial-lineFocus transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personal.resumeUrl}
                download="Amanamoni_Balaji_Resume.pdf"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-accent-sky bg-accent-blue/10 border border-accent-blue/30 hover:bg-accent-blue/20 transition-colors"
              >
                <span>CV.pdf</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 border-t border-editorial-line/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Amanamoni Balaji. Handcrafted with modern React &amp; Tailwind.
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
