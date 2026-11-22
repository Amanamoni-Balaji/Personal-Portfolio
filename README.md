# Amanamoni Balaji — Premium Developer Portfolio & Technical Case Studies

A modern, high-performance, dark editorial portfolio and technical showcase engineered for **Amanamoni Balaji** — B.E. Information Technology (CGPA 9.6) at Matrusri Engineering College, Hyderabad.

Crafted with inspiration from **GitHub** (developer-focused repository organization), **Kaggle** (clean metrics & data analytics visualizers), **Hugging Face** (structured AI/ML model case studies), **Devpost** (hackathon project storytelling), and **Notion** (minimal editorial typography & generous whitespace).

---

## 🌟 Key Highlights & Engineering Features

- **Dark Editorial Aesthetic**: Deep obsidian and navy backgrounds (`#06080E`, `#0A0E17`, `#0F1420`), crisp off-white typography, restrained electric-blue/indigo accents, and zero gaudy neon or distracting effects.
- **Clean Personal Wordmark**: Authentic branding under **Amanamoni Balaji** with verified academic standing (`B.E. IT • CGPA 9.6`).
- **Comprehensive Multi-Page Architecture**:
  - `/` — Recruiter-focused hero, key metrics, featured system spotlights, and call-to-actions.
  - `/about` — Editorial biography, verified education credentials, areas of interest, and career objectives.
  - `/skills` — Authentic technical capabilities matrix categorized by domain (Programming, Frontend, Backend, Database, Data Analytics, AI/ML, Developer Tools) with practical application contexts — no arbitrary percentage bars.
  - `/projects` & `/projects/:id` — Deep-dive case studies for:
    1. **KrishiAI** — AI-Powered Agricultural Advisory System
    2. **AgroGuardian** — AI-Based Crop Recommendation and Disease Prediction System
    3. **CareFlow** — Clinical Pathway Process Mining and Analytics System
    4. **Smart Classroom & Timetable Scheduler** — Automated Academic Scheduling & Resource Optimization
    5. **RecallOps AI** — Incident Response & Root Cause Investigation (HackWithHyderabad 3.0)
    * Each case study includes Problem Statements, Proposed Solutions, Individual Contributions, Tech Stack, Architecture Details, Verified Results, and Interactive Screenshot Lightbox.
  - `/experience` — Chronological vertical timeline distinguishing Ongoing, Completed, and Scheduled industry internships.
  - `/certifications` — Interactive credential gallery featuring Cisco, EduSkills (AWS GenAI & AI/ML), Oracle, and SCRS certifications with verified PDF previews.
  - `/achievements` — Datanyx 2025 Datathon Runner-Up, Smart India Hackathon, HackWithHyderabad 3.0, and Tech Tycoons Club.
  - `/contact` — Interactive contact channel with client validation, feedback states, and one-click email copying.
- **Interactive Modals**:
  - **Resume Modal** with Structured Overview and inline PDF document viewer.
  - **Certificate Lightbox** for reviewing verified credentials and viewing official certificate documents.
  - **Screenshot Lightbox** for high-resolution project asset inspection.
- **Motion System**: Smooth 3D tilt cards, scroll-triggered reveals, micro-interactions, and full accessibility support respecting `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS 3 (custom editorial dark palette)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM 7
- **Typography**: Plus Jakarta Sans, Space Grotesk, JetBrains Mono

---

## 📁 Project Structure

```
d:\Portfolio_Final\
├── public\
│   ├── assets\
│   │   ├── agroguardian\       # Real UI screenshots for AgroGuardian
│   │   ├── careflow\           # 10 verified UI screenshots for CareFlow
│   │   ├── krishiai\           # KrishiAI UI assets
│   │   ├── smartclassroom\     # Real UI screenshots for Smart Classroom
│   │   └── wireframes\         # Handwritten system design wireframes
│   ├── certificates\           # Official PDF certificates (Cisco, etc.)
│   ├── Amanamoni_Balaji_Resume.pdf
│   └── favicon.svg
├── src\
│   ├── components\
│   │   ├── CertificateModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ResumeModal.jsx
│   │   └── Toast.jsx
│   ├── data\
│   │   └── portfolioData.js    # Centralized data model
│   ├── pages\
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── Skills.jsx
│   ├── styles\
│   │   └── index.css           # Tailored editorial design system & tokens
│   ├── App.jsx                 # Routing & global providers
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The portfolio will be live at `http://localhost:3000`.

### 4. Production Build
```bash
npm run build
```
The compiled production assets will be generated in `dist/`.

### 5. Local Preview of Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Amanamoni Balaji production portfolio"
   git branch -M main
   git remote add origin https://github.com/Amanamoni-Balaji/portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Deploy! (A `vercel.json` rewrite can be added for client-side routing if required: `{"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}`).

---

## 📄 License & Attribution
Designed and built for **Amanamoni Balaji**. All project screenshots and academic credentials reflect authentic student deliverables.
