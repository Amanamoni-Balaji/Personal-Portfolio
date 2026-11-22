import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Layers, Activity } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

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
      className="group relative rounded-2xl bg-obsidian-850/90 border border-editorial-line hover:border-editorial-lineFocus overflow-hidden flex flex-col justify-between shadow-subtle hover:shadow-card-hover transition-colors duration-300"
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
          <span className="badge-editorial bg-obsidian-950/80 backdrop-blur-md text-[11px]">
            {project.category}
          </span>
          {project.badge && (
            <span className="badge-accent bg-obsidian-950/85 backdrop-blur-md text-[10px]">
              {project.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-ink-50 group-hover:text-accent-sky transition-colors font-sans">
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
              className="text-xs font-semibold text-accent-sky hover:text-white inline-flex items-center gap-1 transition-colors"
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
