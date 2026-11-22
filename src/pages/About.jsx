import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  Trophy,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Users,
  Target
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const quickStats = [
    { label: "Academic CGPA", value: "9.6 / 10", note: "Matrusri Eng College" },
    { label: "Engineering Systems", value: "8 Shipped", note: "ML, Full-Stack & Mining" },
    { label: "Practical Internships", value: "4 Engagements", note: "AI, Full-Stack & Analytics" },
    { label: "Official Credentials", value: "23 Verified", note: "Original PDFs in Vault" }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-14">
      {/* 1. Header with First-Person Personal Introduction */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GET TO KNOW ME</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-ink-200 max-w-3xl leading-relaxed font-normal">
          I'm Amanamoni Balaji, an Information Technology undergraduate at Matrusri Engineering College, Hyderabad. I'm passionate about Artificial Intelligence, Machine Learning, Data Analytics, and Full Stack Development.
        </p>
        <p className="text-sm sm:text-base text-ink-300 max-w-3xl leading-relaxed font-normal">
          I enjoy exploring new technologies, building practical applications, solving problems, and turning ideas into meaningful solutions. Through my academic projects and internship experiences, I've gained hands-on experience working with different technologies and developing real-world solutions.
        </p>
      </BlurFade>

      {/* 2. Academic and Professional Highlights */}
      <BlurFade delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0b0e17]/80 border border-white/[0.08] hover:border-white/20 transition-all space-y-1 group"
            >
              <span className="text-[11px] font-mono text-ink-400 block uppercase tracking-wider">{stat.label}</span>
              <p className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight group-hover:text-accent-sky transition-colors">
                {stat.value}
              </p>
              <p className="text-[11px] text-ink-500 font-mono">{stat.note}</p>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* 3. Main Narrative & Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Background, Beyond Academics & Professional Goals */}
        <div className="lg:col-span-7 space-y-7 text-sm text-ink-300 leading-relaxed font-normal">
          
          {/* Card 1: My Background & Engineering Approach */}
          <BlurFade delay={0.15}>
            <div className="p-7 rounded-3xl bg-[#0b0e17]/90 border border-white/[0.08] space-y-4 shadow-elevated">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <h2 className="text-base sm:text-lg font-bold text-white font-sans flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-sky" />
                  <span>My Background &amp; Engineering Approach</span>
                </h2>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Verified 9.6 CGPA
                </span>
              </div>
              <p className="leading-relaxed text-ink-300">
                As an Information Technology undergraduate at <strong>Matrusri Engineering College, Hyderabad</strong> (maintaining a cumulative <strong>9.6 / 10 CGPA</strong>), my technical approach is rooted in building solutions that are practical, efficient, and genuinely useful to people.
              </p>
              <p className="leading-relaxed text-ink-300">
                Through my academic coursework and four industry internships, I've worked across the full software lifecycle—from analyzing clinical patient workflows in <strong>CareFlow</strong> and engineering medical triage chat engines in <strong>MediAssist AI</strong>, to building automated timetable constraint solvers in <strong>TimeTrackers (SIH)</strong> and deep learning plant pathology models in <strong>Agro_Guardian</strong>.
              </p>
              <p className="leading-relaxed text-ink-300">
                I believe in continuous learning, writing clean maintainable code, and letting real project outcomes speak for themselves. Everything documented in this portfolio is backed by reproducible code, verified datasets, and genuine institutional credentials.
              </p>
            </div>
          </BlurFade>

          {/* Card 2: Beyond Academics & Collaborative Impact */}
          <BlurFade delay={0.2}>
            <div className="p-7 rounded-3xl bg-[#0b0e17]/90 border border-white/[0.08] space-y-4 shadow-elevated">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <h2 className="text-base sm:text-lg font-bold text-white font-sans flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-accent-sky" />
                  <span>Beyond Academics &amp; Collaborative Experience</span>
                </h2>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-accent-sky border border-blue-500/30">
                  Competitions &amp; Community
                </span>
              </div>
              <p className="leading-relaxed text-ink-300">
                Beyond regular coursework, I actively participate in hackathons, competitive problem-solving, and technical communities. Working with teams under strict deadlines has strengthened both my architectural thinking and interpersonal collaboration skills:
              </p>
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#07090e] border border-white/[0.05] flex items-start gap-3 text-xs text-ink-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Datanyx 2025 Datathon Runner-Up:</strong> Built agricultural predictive intelligence models under competition constraints at MJCET, Hyderabad.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#07090e] border border-white/[0.05] flex items-start gap-3 text-xs text-ink-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Hackathons (SIH &amp; HackWithHyderabad):</strong> Contributed to automated resource allocation algorithms and collaborative AI incident response tools with multi-disciplinary peers.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#07090e] border border-white/[0.05] flex items-start gap-3 text-xs text-ink-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Technical Community Involvement:</strong> Active member of the Tech Tycoons Club and student member of IEI and SCRS, regularly engaging in peer workshops and code sessions.
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Card 3: My Professional Goals */}
          <BlurFade delay={0.25}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1322] via-[#090d16] to-[#07090e] border border-blue-500/25 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-accent-sky text-xs font-mono font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>My Professional Goals</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-300 leading-relaxed font-sans">
                My immediate goal is to contribute to forward-thinking engineering teams where I can apply my skills in <strong className="text-white">Artificial Intelligence, Machine Learning, Data Analytics, and Full-Stack Development</strong> to build high-impact, scalable solutions. Long-term, I aspire to lead systems that bridge complex computational models with accessible, reliable user experiences.
              </p>
            </div>
          </BlurFade>

        </div>

        {/* Right Column: Portrait Card & Academic Track Record */}
        <div className="lg:col-span-5 space-y-7">
          {/* Executive Portrait Card */}
          <BlurFade delay={0.15}>
            <div className="rounded-3xl bg-[#0b0e17] border border-white/15 overflow-hidden shadow-2xl group/portrait relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 z-10" />

              <div className="relative aspect-[4/3.8] overflow-hidden bg-black">
                <picture>
                  <source srcSet={personal.avatarWebp} type="image/webp" />
                  <img
                    src={personal.avatar}
                    alt="Amanamoni Balaji - Official Portrait"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover/portrait:scale-105"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-transparent opacity-85" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Student</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">{personal.name}</h3>
                    <p className="text-xs text-accent-sky font-mono">B.E. Information Technology</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-accent-sky border border-blue-400/40 backdrop-blur-md">
                    CGPA: 9.6
                  </span>
                </div>
              </div>

              <div className="p-5 border-t border-white/[0.08] bg-[#07090e]/80 space-y-3">
                <p className="text-xs text-ink-300 italic leading-relaxed">
                  "{personal.heroIntro}"
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-ink-400 border-t border-white/[0.06]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-sky" />
                    <span>{personal.location}</span>
                  </span>
                  <span className="text-emerald-400 font-medium">Available for Internships</span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Academic History Timeline */}
          <BlurFade delay={0.2}>
            <div className="rounded-3xl bg-[#0b0e17]/90 border border-white/[0.08] p-6 sm:p-7 space-y-6 shadow-elevated">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-accent-sky" />
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">Educational History</h3>
                    <p className="text-xs text-ink-400 font-mono">Academic Track Record</p>
                  </div>
                </div>
                <span className="badge-editorial text-xs">
                  All Verifiable
                </span>
              </div>

              <div className="space-y-4">
                {personal.academicHistory.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] hover:border-white/20 transition-all space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-mono text-ink-500 block">{edu.period}</span>
                        <h4 className="text-sm font-bold text-white font-sans">{edu.institution}</h4>
                        <p className="text-xs text-accent-sky font-mono mt-0.5">{edu.degree}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-xs font-bold font-mono text-accent-sky bg-blue-500/10 border border-blue-500/30 shrink-0">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-xs text-ink-400 leading-relaxed font-sans">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Status Summary & CTA */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-xs py-3 rounded-xl shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span>Initiate Discussion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
