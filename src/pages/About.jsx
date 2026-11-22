import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Terminal,
  Compass,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const interests = [
    {
      title: "Predictive AI & Deep Learning",
      description: "Developing robust convolutional models and predictive pipelines for high-stakes domains such as agronomic health and diagnostic classification."
    },
    {
      title: "Clinical Process Mining & Analytics",
      description: "Analyzing event logs to reconstruct organizational workflows, quantify operational bottlenecks, and derive data-driven clinical process intelligence."
    },
    {
      title: "Full-Stack Web Architectures",
      description: "Engineering responsive React interfaces backed by modular Django REST APIs, structured SQL databases, and performant state pipelines."
    },
    {
      title: "Algorithmic Resource Optimization",
      description: "Formulating constraint satisfaction algorithms to solve complex academic, timetable, and multi-department scheduling challenges."
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Editorial Profile &amp; Background
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          About Amanamoni Balaji
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-3xl leading-relaxed">
          {personal.positioning}
        </p>
      </div>

      {/* Main Narrative & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Biographical Narrative */}
        <div className="lg:col-span-7 space-y-6 text-sm text-ink-300 leading-relaxed font-normal">
          <div className="p-6 rounded-2xl bg-obsidian-850 border border-editorial-line space-y-4">
            <h2 className="text-lg font-bold text-ink-50">Professional Positioning</h2>
            <p className="leading-relaxed">
              I am an undergraduate in Information Technology at <strong>Matrusri Engineering College, Hyderabad</strong>, currently maintaining a <strong>9.6/10 CGPA</strong>. My technical journey is anchored in the belief that software should be both mathematically grounded and practically impactful.
            </p>
            <p className="leading-relaxed">
              Throughout my academic and internship engagements, I have focused on translating complex requirements into reliable data-driven solutions and intelligent software systems. From analyzing clinical event logs in <strong>CareFlow</strong> and developing NLP healthcare assistants in <strong>MediAssist AI</strong>, to predicting rainfall patterns in <strong>KrishiAI</strong>, diagnosing crop leaf pathologies in <strong>Agro_Guardian</strong>, and developing automated timetable scheduling engines in <strong>TimeTrackers</strong> (SIH), I build systems that solve real-world problems.
            </p>
            <p className="leading-relaxed">
              I avoid surface-level hype or exaggerated claims. Instead, I prioritize clean architectural foundations, systematic testing, verifiable metrics, and readable codebases.
            </p>
          </div>

          {/* Core Interests Grid */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-ink-50 font-sans">
              Areas of Technical Interest
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-obsidian-850/60 border border-editorial-line space-y-2 hover:border-editorial-lineFocus transition-colors"
                >
                  <p className="text-xs font-bold text-accent-sky font-mono">
                    {item.title}
                  </p>
                  <p className="text-xs text-ink-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Objectives */}
          <div className="p-5 rounded-xl bg-obsidian-900 border border-editorial-line space-y-2">
            <h3 className="text-xs font-mono font-bold text-ink-200 uppercase tracking-wider">
              Career Objectives
            </h3>
            <p className="text-xs text-ink-400 leading-relaxed">
              Aspiring to contribute to engineering teams building scalable machine learning services, data intelligence pipelines, or high-performance web products. Looking forward to challenging internship and software engineering roles where rigorous problem solving, clean code, and continuous learning are valued.
            </p>
          </div>
        </div>

        {/* Right Column: Portrait & Academic Record */}
        <div className="lg:col-span-5 space-y-6">
          {/* Executive Portrait Card in About */}
          <div className="rounded-2xl bg-obsidian-900 border border-editorial-lineLight overflow-hidden shadow-elevated group/portrait">
            <div className="relative aspect-[4/3.4] overflow-hidden bg-obsidian-950">
              <picture>
                <source srcSet={personal.avatarWebp} type="image/webp" />
                <img
                  src={personal.avatar}
                  alt="Amanamoni Balaji - Professional Portrait"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover/portrait:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-ink-50 font-sans">{personal.name}</h3>
                  <p className="text-[11px] text-accent-sky font-mono">B.E. Information Technology</p>
                </div>
                <span className="badge-editorial text-xs border-accent-blue/40 text-accent-sky">
                  CGPA: 9.6
                </span>
              </div>
            </div>
            <div className="p-4 border-t border-editorial-line bg-obsidian-850/60">
              <p className="text-xs text-ink-300 italic leading-relaxed">
                "{personal.heroIntro}"
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-obsidian-900 border border-editorial-lineLight p-6 space-y-6 shadow-elevated">
            <div className="flex items-center gap-2.5 pb-4 border-b border-editorial-line">
              <GraduationCap className="w-5 h-5 text-accent-sky" />
              <div>
                <h3 className="text-base font-bold text-ink-50">Educational History</h3>
                <p className="text-xs text-ink-400 font-mono">Academic Track Record</p>
              </div>
            </div>

            <div className="space-y-4">
              {personal.academicHistory.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-obsidian-850/80 border border-editorial-line space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-mono text-ink-500">{edu.period}</p>
                      <h4 className="text-sm font-bold text-ink-100">{edu.institution}</h4>
                      <p className="text-xs text-accent-sky font-mono mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="badge-editorial text-xs font-bold text-accent-sky shrink-0">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-xs text-ink-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-obsidian-850 border border-editorial-line text-xs font-mono text-ink-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-ink-500">Degree Status</span>
                <span className="text-emerald-400 font-semibold">Active (Expected 2027)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-500">Cumulative GPA</span>
                <span className="text-accent-sky font-bold">9.6 / 10.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-500">Department</span>
                <span>Information Technology</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-primary w-full text-xs py-2.5"
              >
                <span>Initiate Professional Discussion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
