import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Layers, Activity } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Category-specific visual differentiation
  const isProcessMining = project.category?.includes('Process Mining') || project.id === 'careflow';
  const isHealthcareNLP = project.category?.includes('NLP') || project.id === 'mediassist-ai';

  const cardBorderClass = isProcessMining
    ? 'border-emerald-500/35 hover:border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:shadow-[0_0_30px_rgba(16,185,129,0.22)]'
    : isHealthcareNLP
    ? 'border-sky-500/35 hover:border-sky-400/80 shadow-[0_0_20px_rgba(14,165,233,0.08)] hover:shadow-[0_0_30px_rgba(14,165,233,0.22)]'
    : 'border-editorial-line hover:border-editorial-lineFocus shadow-subtle hover:shadow-card-hover';

  const categoryBadgeClass = isProcessMining
    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40'
    : isHealthcareNLP
    ? 'bg-sky-950/90 text-sky-300 border-sky-500/40'
    : 'bg-obsidian-950/80 text-ink-300 border-editorial-line';

  const badgeAccentClass = isProcessMining
    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    : isHealthcareNLP
    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
    : 'bg-obsidian-950/85 text-accent-sky border-editorial-line';

  const titleHoverClass = isProcessMining
    ? 'group-hover:text-emerald-400'
    : isHealthcareNLP
    ? 'group-hover:text-sky-400'
    : 'group-hover:text-accent-sky';

  const actionTextClass = isProcessMining
    ? 'text-emerald-400 hover:text-emerald-300'
    : isHealthcareNLP
    ? 'text-sky-400 hover:text-sky-300'
    : 'text-accent-sky hover:text-white';

  // Subtle 3D tilt effect on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group relative rounded-2xl bg-obsidian-850/90 border overflow-hidden flex flex-col justify-between transition-all duration-300 ${cardBorderClass}`}
    >
      {/* Top Media / Screenshot Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-950 border-b border-editorial-line">
        <img
          src={project.primaryImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent pointer-events-none" />

        {/* Category & Badge Tags */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono border backdrop-blur-md ${categoryBadgeClass}`}>
            {project.category}
          </span>
          {project.badge && (
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur-md ${badgeAccentClass}`}>
              {project.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className={`text-lg font-bold text-ink-50 transition-colors font-sans ${titleHoverClass}`}>
              <Link to={`/projects/${project.id}`} className="focus:outline-none">
                {project.shortTitle}
              </Link>
            </h3>
            <Link
              to={`/projects/${project.id}`}
              className="p-1.5 rounded-lg text-ink-400 group-hover:text-white group-hover:bg-editorial-line transition-all shrink-0"
              aria-label={`View ${project.shortTitle} case study`}
            >
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <p className="text-xs text-accent-sky/90 font-mono mb-2">
            {project.subtitle}
          </p>

          <p className="text-xs text-ink-400 line-clamp-3 leading-relaxed">
            {project.tagline || project.overview}
          </p>
        </div>

        {/* Tech Stack Tags & Actions */}
        <div className="pt-3 border-t border-editorial-line/70 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-400 bg-obsidian-900 border border-editorial-line"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-500 bg-obsidian-900">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-1">
            <Link
              to={`/projects/${project.id}`}
              className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors ${actionTextClass}`}
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink-400 hover:text-white inline-flex items-center gap-1.5 transition-colors font-mono"
                aria-label={`${project.shortTitle} repository`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
