import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Layers, Activity } from 'lucide-react';
import BlurFade from './BlurFade';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Category-specific visual differentiation
  const isProcessMining = project.category?.includes('Process Mining') || project.id === 'careflow';
  const isHealthcareNLP = project.category?.includes('NLP') || project.id === 'mediassist-ai';

  const cardBorderClass = isProcessMining
    ? 'border-emerald-500/30 hover:border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.06)] hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]'
    : isHealthcareNLP
    ? 'border-sky-500/30 hover:border-sky-400/80 shadow-[0_0_20px_rgba(14,165,233,0.06)] hover:shadow-[0_0_35px_rgba(14,165,233,0.22)]'
    : 'border-white/[0.08] hover:border-white/25 shadow-subtle hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]';

  const categoryBadgeClass = isProcessMining
    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40'
    : isHealthcareNLP
    ? 'bg-sky-950/90 text-sky-300 border-sky-500/40'
    : 'bg-black/80 text-ink-300 border-white/10';

  const badgeAccentClass = isProcessMining
    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    : isHealthcareNLP
    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
    : 'bg-black/85 text-accent-sky border-white/10';

  const titleHoverClass = isProcessMining
    ? 'group-hover:text-emerald-400'
    : isHealthcareNLP
    ? 'group-hover:text-sky-400'
    : 'group-hover:text-accent-sky';

  const actionButtonClass = isProcessMining
    ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]'
    : isHealthcareNLP
    ? 'text-sky-300 bg-sky-500/10 border-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(14,165,233,0.35)]'
    : 'text-ink-100 bg-white/5 border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]';

  // 3D tilt effect on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 160, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 160, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

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
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <BlurFade delay={index * 0.06} className="h-full">
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
        className={`group relative h-full rounded-3xl bg-[#0a0d16]/95 border overflow-hidden flex flex-col justify-between transition-all duration-300 ${cardBorderClass}`}
      >
        {/* Top Media / Screenshot Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-white/[0.08]">
          <img
            src={project.primaryImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
          />

          {/* Ambient Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-transparent to-transparent pointer-events-none" />

          {/* Category & Badge Tags */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border backdrop-blur-md ${categoryBadgeClass}`}>
              {project.category}
            </span>
            {project.badge && (
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border backdrop-blur-md ${badgeAccentClass}`}>
                {project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className={`text-lg font-bold text-white transition-colors font-sans tracking-tight ${titleHoverClass}`}>
                <Link to={`/projects/${project.id}`} className="focus:outline-none">
                  {project.shortTitle}
                </Link>
              </h3>
              <Link
                to={`/projects/${project.id}`}
                className="p-1.5 rounded-lg text-ink-400 group-hover:text-white group-hover:bg-white/10 transition-all shrink-0"
                aria-label={`View ${project.shortTitle} case study`}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <p className="text-xs text-accent-sky font-mono mb-2">
              {project.subtitle}
            </p>

            <p className="text-xs text-ink-300 line-clamp-3 leading-relaxed font-sans">
              {project.tagline || project.overview}
            </p>
          </div>

          {/* Tech Stack Tags & Actions with Glowing Feedback */}
          <div className="pt-3 border-t border-white/[0.06] space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-300 bg-white/5 border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-400 bg-white/5">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-1">
              <Link
                to={`/projects/${project.id}`}
                className={`light-sweep text-xs font-semibold px-3 py-1.5 rounded-lg border inline-flex items-center gap-1.5 transition-all ${actionButtonClass}`}
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light-sweep text-xs text-ink-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 inline-flex items-center gap-1.5 transition-all font-mono"
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
    </BlurFade>
  );
}
