import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeTicker() {
  const items = [
    'CLINICAL PROCESS MINING',
    'PM4PY PIPELINES',
    'DEEP LEARNING & CNN',
    'NATURAL LANGUAGE PROCESSING',
    'REACT & TYPESCRIPT',
    'DJANGO REST FRAMEWORK',
    'DATA ANALYTICS & EDA',
    'GOOGLE FOR DEVELOPERS INTERN',
    'TATA CERTIFIED',
    'MATRUSRI ENG COLLEGE • 9.6 CGPA',
    'DATANYX 2025 RUNNER-UP',
    'SMART INDIA HACKATHON'
  ];

  // Duplicate for seamless loop
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-editorial-line/80 bg-obsidian-950/90 backdrop-blur-md select-none">
      {/* Edge gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 28,
        }}
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs font-mono font-bold tracking-widest text-ink-400/80 hover:text-accent-sky transition-colors uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
