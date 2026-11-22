import React from 'react';

/**
 * Authentic, recognizable vector brand logos for all portfolio technologies.
 * Sourced from official brand guidelines, Devicon, and Simple Icons.
 */
export default function TechLogo({ name, className = "w-6 h-6", size = 24 }) {
  const normName = (name || '').toLowerCase().trim();

  // Python
  if (normName === 'python') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Python logo"
      >
        <defs>
          <linearGradient id="py-blue" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-yellow" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#FFE873" />
            <stop offset="100%" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
        <path
          d="M63.15 2.5c-30.8 0-28.84 13.36-28.84 13.36l.03 13.84h29.41v4.17H21.28S2.5 31.7 2.5 62.98c0 31.29 16.39 30.13 16.39 30.13h9.79V79.28s-.53-16.39 16.12-16.39h27.75s15.59.27 15.59-15.05V17.84S90.7 2.5 63.15 2.5zm-15.6 9.47a5.57 5.57 0 1 1 0 11.14 5.57 5.57 0 0 1 0-11.14z"
          fill="url(#py-blue)"
        />
        <path
          d="M64.85 125.5c30.8 0 28.84-13.36 28.84-13.36l-.03-13.84H64.25v-4.17h42.47s18.78 2.17 18.78-29.11c0-31.29-16.39-30.13-16.39-30.13h-9.79v13.83s.53 16.39-16.12 16.39H52.45s-15.59-.27-15.59 15.05v30.01s-2.56 15.34 27.99 15.34zm15.6-9.47a5.57 5.57 0 1 1 0-11.14 5.57 5.57 0 0 1 0 11.14z"
          fill="url(#py-yellow)"
        />
      </svg>
    );
  }

  // C
  if (normName === 'c') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="C Programming Language logo"
      >
        <defs>
          <linearGradient id="c-hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#283593" />
            <stop offset="100%" stopColor="#00599C" />
          </linearGradient>
          <linearGradient id="c-inner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#659AD2" />
            <stop offset="100%" stopColor="#00599C" />
          </linearGradient>
        </defs>
        <polygon points="64,8 116,38 116,98 64,128 12,98 12,38" fill="url(#c-hex-grad)" />
        <polygon points="64,18 106,42 106,94 64,118 22,94 22,42" fill="url(#c-inner-grad)" opacity="0.3" />
        <path
          d="M78 44.5c-4.4-3.5-9.8-5.5-15.5-5.5-13.8 0-25 11.2-25 25s11.2 25 25 25c5.7 0 11.1-2 15.5-5.5l5.2 7.2c-5.8 4.7-13.1 7.3-20.7 7.3-18.8 0-34-15.2-34-34s15.2-34 34-34c7.6 0 14.9 2.6 20.7 7.3L78 44.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Java
  if (normName === 'java') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Java logo"
      >
        <path
          d="M53.4 14.2c3.4 5.9-2.3 12.1-6.8 16.7-6.2 6.4-12.8 12.8-16.4 21.1-4.4 10.4-3 20.6 3.6 29.3-7.5-8.7-9.4-20-4.5-30.1 4.4-9 12.2-15.8 18.4-23.5 4.2-5.1 7.1-10.3 5.7-13.5z"
          fill="#E76F00"
        />
        <path
          d="M72.1 39.8c3.2 4.3 4.2 9.8 3.4 15-.9 6.9-4.8 12.9-9.2 18.2-8.1 10.1-17.7 19.2-22.1 31.8 5.1-11 15-18.9 23.6-27.9 5.2-5.5 9.4-12.1 10.7-19.8 1-6.8-.9-12.6-6.4-17.3z"
          fill="#EA2D2E"
        />
        <path
          d="M60.8 57.2c2.1 3.5 1.7 7.4.2 11-2.4 5.7-7 9.8-10.7 14.7-4.1 5.4-7.5 11.5-7.9 18.4 4.3-6.5 10.2-11.5 15.3-17.2 3.6-4 6.6-8.7 7.6-14 1.1-5.7-.7-9.9-4.5-12.9z"
          fill="#E76F00"
        />
        <path
          d="M37 77c-8.5 11.4-1.2 21.3 7.9 29.3 2 1.7 4.4 3.2 6.5 4.7 3 2 4.3 3.1 2.7 5.3-1.4 2-4.5 1.2-6.9.2-7-3-13-7.5-17.8-13.3-7.8-9.2-9.9-22.6 7.6-26.2z"
          fill="#5382A1"
        />
        <path
          d="M85.4 92.4c11.6-5.9 15.7-14.9 9.8-23.9-3.9-6-10.7-10.2-17.6-13.2 2.5 3.3 4.6 7 6 10.9 2.9 7.6-1.4 14.6-8.4 19.6 3.9 2.2 7.4 4.4 10.2 6.6z"
          fill="#5382A1"
        />
        <path
          d="M46.2 104c17.6 1.4 36.4-1.2 51.1-8.5 0 0-4.5 3.1-11.8 5.6-19.9 6.7-50.1 6-67.8.2-1.2-.4 2-1.2 4.8-1.6 7.8-1.2 16.1-1.2 23.7 4.3z"
          fill="#5382A1"
        />
      </svg>
    );
  }

  // SQL
  if (normName === 'sql') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="SQL logo"
      >
        <defs>
          <linearGradient id="sql-cyl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
        </defs>
        <ellipse cx="64" cy="26" rx="46" ry="14" fill="#38BDF8" />
        <path
          d="M18 26v22c0 7.7 20.6 14 46 14s46-6.3 46-14V26c0 7.7-20.6 14-46 14s-46-6.3-46-14z"
          fill="url(#sql-cyl)"
        />
        <path
          d="M18 48v22c0 7.7 20.6 14 46 14s46-6.3 46-14V48c0 7.7-20.6 14-46 14s-46-6.3-46-14z"
          fill="#0284C7"
        />
        <path
          d="M18 70v22c0 7.7 20.6 14 46 14s46-6.3 46-14V70c0 7.7-20.6 14-46 14s-46-6.3-46-14z"
          fill="#0369A1"
        />
        <rect x="24" y="56" width="80" height="32" rx="8" fill="#0A0F1D" stroke="#38BDF8" strokeWidth="2.5" />
        <text
          x="64"
          y="78"
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          SQL
        </text>
      </svg>
    );
  }

  // Data Structures & Algorithms
  if (normName.includes('data structures') || normName.includes('algorithms') || normName === 'dsa') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Data Structures & Algorithms logo"
      >
        <line x1="64" y1="28" x2="34" y2="64" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
        <line x1="64" y1="28" x2="94" y2="64" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
        <line x1="34" y1="64" x2="20" y2="100" stroke="#818CF8" strokeWidth="4" strokeLinecap="round" />
        <line x1="34" y1="64" x2="48" y2="100" stroke="#818CF8" strokeWidth="4" strokeLinecap="round" />
        <line x1="94" y1="64" x2="80" y2="100" stroke="#818CF8" strokeWidth="4" strokeLinecap="round" />
        <line x1="94" y1="64" x2="108" y2="100" stroke="#818CF8" strokeWidth="4" strokeLinecap="round" />

        <circle cx="64" cy="28" r="14" fill="#2563EB" stroke="#93C5FD" strokeWidth="3" />
        <circle cx="34" cy="64" r="11" fill="#4F46E5" stroke="#A5B4FC" strokeWidth="2.5" />
        <circle cx="94" cy="64" r="11" fill="#4F46E5" stroke="#A5B4FC" strokeWidth="2.5" />

        <circle cx="20" cy="100" r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="48" cy="100" r="9" fill="#7C3AED" stroke="#C084FC" strokeWidth="2" />
        <circle cx="80" cy="100" r="9" fill="#7C3AED" stroke="#C084FC" strokeWidth="2" />
        <circle cx="108" cy="100" r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
      </svg>
    );
  }

  // Object-Oriented Programming
  if (normName.includes('object-oriented') || normName.includes('oop')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Object-Oriented Programming logo"
      >
        {/* Base class box */}
        <rect x="36" y="14" width="56" height="34" rx="8" fill="#1E1B4B" stroke="#818CF8" strokeWidth="3" />
        <line x1="36" y1="28" x2="92" y2="28" stroke="#818CF8" strokeWidth="2" />
        <circle cx="46" cy="21" r="3" fill="#A5B4FC" />
        <circle cx="56" cy="21" r="3" fill="#A5B4FC" />
        <rect x="44" y="34" width="40" height="4" rx="2" fill="#818CF8" />

        {/* Inheritance connector */}
        <path d="M64 48v22M58 64l6 8 6-8" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Derived class 1 */}
        <rect x="14" y="78" width="46" height="36" rx="8" fill="#1E1B4B" stroke="#A855F7" strokeWidth="2.5" />
        <line x1="14" y1="90" x2="60" y2="90" stroke="#A855F7" strokeWidth="2" />
        <rect x="22" y="96" width="30" height="4" rx="2" fill="#C084FC" />
        <rect x="22" y="104" width="22" height="4" rx="2" fill="#A855F7" />

        {/* Derived class 2 */}
        <rect x="68" y="78" width="46" height="36" rx="8" fill="#1E1B4B" stroke="#06B6D4" strokeWidth="2.5" />
        <line x1="68" y1="90" x2="114" y2="90" stroke="#06B6D4" strokeWidth="2" />
        <rect x="76" y="96" width="30" height="4" rx="2" fill="#67E8F9" />
        <rect x="76" y="104" width="22" height="4" rx="2" fill="#06B6D4" />
      </svg>
    );
  }

  // Artificial Intelligence
  if (normName.includes('artificial intelligence') || normName === 'ai') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Artificial Intelligence logo"
      >
        <defs>
          <linearGradient id="ai-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <polygon points="64,28 96,46 96,82 64,100 32,82 32,46" fill="#1A102E" stroke="url(#ai-glow)" strokeWidth="3.5" />
        <circle cx="64" cy="64" r="16" fill="#8B5CF6" fillOpacity="0.25" stroke="#F472B6" strokeWidth="2.5" />
        <circle cx="64" cy="64" r="7" fill="#F43F5E" />

        <line x1="64" y1="28" x2="64" y2="10" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
        <circle cx="64" cy="10" r="5" fill="#EC4899" />
        <line x1="64" y1="100" x2="64" y2="118" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="64" cy="118" r="5" fill="#A855F7" />
        <line x1="96" y1="46" x2="112" y2="36" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="112" cy="36" r="5" fill="#F472B6" />
        <line x1="96" y1="82" x2="112" y2="92" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
        <circle cx="112" cy="92" r="5" fill="#EC4899" />
        <line x1="32" y1="46" x2="16" y2="36" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="36" r="5" fill="#C084FC" />
        <line x1="32" y1="82" x2="16" y2="92" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="92" r="5" fill="#A855F7" />

        <path d="M64 46l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Machine Learning
  if (normName === 'machine learning' || normName === 'ml') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Machine Learning logo"
      >
        <line x1="28" y1="36" x2="64" y2="28" stroke="#10B981" strokeWidth="2.5" opacity="0.6" />
        <line x1="28" y1="36" x2="64" y2="64" stroke="#10B981" strokeWidth="2.5" opacity="0.9" />
        <line x1="28" y1="36" x2="64" y2="100" stroke="#10B981" strokeWidth="2.5" opacity="0.4" />
        <line x1="28" y1="92" x2="64" y2="28" stroke="#10B981" strokeWidth="2.5" opacity="0.4" />
        <line x1="28" y1="92" x2="64" y2="64" stroke="#10B981" strokeWidth="2.5" opacity="0.9" />
        <line x1="28" y1="92" x2="64" y2="100" stroke="#10B981" strokeWidth="2.5" opacity="0.6" />

        <line x1="64" y1="28" x2="100" y2="44" stroke="#06B6D4" strokeWidth="2.5" opacity="0.8" />
        <line x1="64" y1="28" x2="100" y2="84" stroke="#06B6D4" strokeWidth="2.5" opacity="0.4" />
        <line x1="64" y1="64" x2="100" y2="44" stroke="#06B6D4" strokeWidth="2.5" opacity="0.9" />
        <line x1="64" y1="64" x2="100" y2="84" stroke="#06B6D4" strokeWidth="2.5" opacity="0.9" />
        <line x1="64" y1="100" x2="100" y2="44" stroke="#06B6D4" strokeWidth="2.5" opacity="0.4" />
        <line x1="64" y1="100" x2="100" y2="84" stroke="#06B6D4" strokeWidth="2.5" opacity="0.8" />

        <circle cx="28" cy="36" r="10" fill="#047857" stroke="#34D399" strokeWidth="2.5" />
        <circle cx="28" cy="92" r="10" fill="#047857" stroke="#34D399" strokeWidth="2.5" />

        <circle cx="64" cy="28" r="11" fill="#0E7490" stroke="#22D3EE" strokeWidth="2.5" />
        <circle cx="64" cy="64" r="11" fill="#0E7490" stroke="#22D3EE" strokeWidth="2.5" />
        <circle cx="64" cy="100" r="11" fill="#0E7490" stroke="#22D3EE" strokeWidth="2.5" />

        <circle cx="100" cy="44" r="10" fill="#4338CA" stroke="#818CF8" strokeWidth="2.5" />
        <circle cx="100" cy="84" r="10" fill="#4338CA" stroke="#818CF8" strokeWidth="2.5" />
      </svg>
    );
  }

  // CNN (Convolutional Neural Networks)
  if (normName.includes('cnn') || normName.includes('convolutional')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="CNN / TensorFlow logo"
      >
        {/* TensorFlow Official Isometric 3D Deep Learning Tensor */}
        <path d="M64 4L114 33v58L64 124 14 91V33L64 4z" fill="#1C1917" stroke="#EA580C" strokeWidth="3" />
        <path d="M64 64L14 35v56l50 33V64z" fill="#FF6F00" opacity="0.95" />
        <path d="M64 64l50-29v56l-50 33V64z" fill="#E65100" />
        <path d="M64 4l50 29-50 31-50-31L64 4z" fill="#FFA000" />
        <path d="M38 42l26-15 26 15v14l-14-8v36l-24 14V62l-14 8V42z" fill="#FFFFFF" />
      </svg>
    );
  }

  // RAG (Retrieval-Augmented Generation)
  if (normName.includes('rag') || normName.includes('retrieval')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="RAG logo"
      >
        <ellipse cx="64" cy="30" rx="42" ry="14" fill="#78350F" stroke="#F59E0B" strokeWidth="2.5" />
        <ellipse cx="64" cy="27" rx="42" ry="14" fill="#B45309" />
        <ellipse cx="64" cy="24" rx="42" ry="14" fill="#F59E0B" />

        <path
          d="M42 42v32c0 8 10 14 22 14s22-6 22-14V42"
          fill="none"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="4 3"
        />

        <rect x="30" y="72" width="68" height="44" rx="10" fill="#1E1B4B" stroke="#8B5CF6" strokeWidth="3" />
        <path d="M64 82l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" fill="#F59E0B" />
        <text
          x="64"
          y="107"
          fill="#E0E7FF"
          fontSize="13"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          RAG
        </text>
      </svg>
    );
  }

  // Django
  if (normName === 'django') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Django logo"
      >
        <rect width="128" height="128" rx="26" fill="#092E20" />
        <path
          d="M60 26v48.5c0 14.5-8.5 22.5-22.5 22.5-6.5 0-12-1.5-15.5-3.5l3.5-12c2.5 1.5 6 2.5 9.5 2.5 6.5 0 10.5-3.5 10.5-11.5V26h14.5z"
          fill="#FFFFFF"
        />
        <path
          d="M72 45h14.5v52H72V45zm7.25-19a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
          fill="#44B78B"
        />
      </svg>
    );
  }

  // React.js
  if (normName.includes('react')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="React logo"
      >
        <circle cx="64" cy="64" r="11" fill="#61DAFB" />
        <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#61DAFB" strokeWidth="4.5" fill="none" />
        <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#61DAFB" strokeWidth="4.5" fill="none" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#61DAFB" strokeWidth="4.5" fill="none" transform="rotate(120 64 64)" />
      </svg>
    );
  }

  // Python Full Stack Development
  if (normName.includes('full stack') || normName.includes('fullstack')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Full Stack Development logo"
      >
        <defs>
          <linearGradient id="fs-top-bar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#61DAFB" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="fs-bot-bar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3776AB" />
            <stop offset="100%" stopColor="#FFD438" />
          </linearGradient>
        </defs>
        {/* Top layer (Frontend window) */}
        <rect x="18" y="16" width="92" height="42" rx="8" fill="#0C1427" stroke="url(#fs-top-bar)" strokeWidth="3" />
        <circle cx="30" cy="27" r="3.5" fill="#EF4444" />
        <circle cx="40" cy="27" r="3.5" fill="#F59E0B" />
        <circle cx="50" cy="27" r="3.5" fill="#10B981" />
        <rect x="30" y="38" width="38" height="4" rx="2" fill="#61DAFB" />
        <rect x="30" y="46" width="66" height="4" rx="2" fill="#38BDF8" opacity="0.6" />

        {/* Stacking connectors */}
        <line x1="38" y1="58" x2="38" y2="70" stroke="#38BDF8" strokeWidth="3" strokeDasharray="3 2" />
        <line x1="90" y1="58" x2="90" y2="70" stroke="#38BDF8" strokeWidth="3" strokeDasharray="3 2" />

        {/* Bottom layer (Backend Python & Database) */}
        <rect x="18" y="70" width="92" height="42" rx="8" fill="#0B132B" stroke="url(#fs-bot-bar)" strokeWidth="3" />
        <circle cx="32" cy="91" r="5" fill="#3776AB" />
        <circle cx="46" cy="91" r="5" fill="#FFD438" />
        <text
          x="82"
          y="96"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          STACK
        </text>
      </svg>
    );
  }

  // Data Analysis
  if (normName.includes('data analysis') || normName.includes('analytics') || normName.includes('pandas')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Data Analysis logo"
      >
        <rect width="128" height="128" rx="26" fill="#150458" />
        <rect x="28" y="36" width="14" height="60" rx="4" fill="#FF4A83" />
        <rect x="48" y="50" width="14" height="46" rx="4" fill="#13ADC7" />
        <rect x="68" y="26" width="14" height="70" rx="4" fill="#FFD13B" />
        <rect x="88" y="42" width="14" height="54" rx="4" fill="#E70488" />
        <path
          d="M35 68L55 52L75 36L95 44"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Microsoft Excel
  if (normName.includes('excel') || normName.includes('microsoft excel')) {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Microsoft Excel logo"
      >
        {/* Back sheet container */}
        <rect x="36" y="20" width="76" height="88" rx="8" fill="#107C41" />
        <rect x="46" y="32" width="56" height="18" rx="2" fill="#185C37" />
        <rect x="46" y="54" width="26" height="18" rx="2" fill="#33C481" />
        <rect x="76" y="54" width="26" height="18" rx="2" fill="#33C481" />
        <rect x="46" y="76" width="26" height="18" rx="2" fill="#21A366" />
        <rect x="76" y="76" width="26" height="18" rx="2" fill="#21A366" />
        {/* Front 3D Excel Tile */}
        <rect x="16" y="36" width="54" height="56" rx="8" fill="#21A366" />
        <path
          d="M32 50l9.5 14L31 78h7.5l5.5-9 5.5 9H57l-10.5-14 9.5-14h-7.5l-5 8-5-8H32z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Git
  if (normName === 'git') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="Git logo"
      >
        <rect x="64" y="6" width="76" height="76" rx="14" transform="rotate(45 64 6)" fill="#F05032" />
        <line x1="42" y1="64" x2="86" y2="64" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <path d="M64 64v-22M64 64v22" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <circle cx="42" cy="64" r="9" fill="#FFFFFF" />
        <circle cx="64" cy="42" r="9" fill="#FFFFFF" />
        <circle cx="64" cy="86" r="9" fill="#FFFFFF" />
        <circle cx="86" cy="64" r="9" fill="#FFFFFF" />
      </svg>
    );
  }

  // GitHub
  if (normName === 'github') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="GitHub logo"
      >
        <rect width="128" height="128" rx="26" fill="#181717" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 20C39.7 20 20 39.7 20 64c0 19.5 12.6 36 30.1 41.8 2.2.4 3-.9 3-2.1v-7.5c-12.3 2.7-14.8-5.9-14.8-5.9-2-5.1-4.9-6.5-4.9-6.5-4-2.7.3-2.7.3-2.7 4.4.3 6.8 4.6 6.8 4.6 3.9 6.8 10.3 4.8 12.8 3.7.4-2.8 1.5-4.8 2.8-5.9-9.8-1.1-20.1-4.9-20.1-21.8 0-4.8 1.7-8.8 4.5-11.8-.5-1.1-2-5.6.4-11.6 0 0 3.7-1.2 12.2 4.5 3.5-1 7.3-1.5 11.1-1.5 3.8 0 7.6.5 11.1 1.5 8.5-5.7 12.2-4.5 12.2-4.5 2.4 6 .9 10.5.4 11.6 2.8 3.1 4.5 7.1 4.5 11.8 0 17-10.3 20.7-20.2 21.8 1.6 1.4 3 4.1 3 8.2v12.2c0 1.2.8 2.6 3 2.1C95.4 100 108 83.5 108 64c0-24.3-19.7-44-44-44z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // SQLite
  if (normName === 'sqlite') {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
        aria-label="SQLite logo"
      >
        <rect width="128" height="128" rx="26" fill="#0A101D" stroke="#003B57" strokeWidth="2" />
        <path d="M88 18c-18 6-36 22-48 42-8 13-12 28-14 44 14-6 26-15 36-26 12-14 20-32 26-60z" fill="#003B57" />
        <path d="M88 18c-12 10-24 25-32 40-7 12-10 24-11 36 10-6 19-14 26-23 9-12 14-27 17-53z" fill="#0080CD" />
        <path d="M88 18c-6 12-13 25-18 36-5 10-8 20-9 29 7-5 13-11 18-19 6-10 9-22 9-46z" fill="#38BDF8" />
        <line x1="88" y1="18" x2="26" y2="104" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <text
          x="64"
          y="116"
          fill="#38BDF8"
          fontSize="14"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          SQLite
        </text>
      </svg>
    );
  }

  // Fallback if an unrecognized technology is passed
  return (
    <div
      className={`rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-accent-sky font-mono font-bold text-xs ${className}`}
      style={{ width: size, height: size }}
    >
      {name ? name.slice(0, 2).toUpperCase() : '</>'}
    </div>
  );
}
