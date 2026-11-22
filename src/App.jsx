import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import CinematicBackground from './components/CinematicBackground';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes({ onOpenResume, onShowToast }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-[85vh] relative z-10"
      >
        <Routes location={location}>
          <Route path="/" element={<Home onOpenResume={onOpenResume} onShowToast={onShowToast} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/internships" element={<Navigate to="/experience" replace />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact onShowToast={onShowToast} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastConfig) => {
    setToast(toastConfig);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#050507] text-ink-100 antialiased selection:bg-blue-500/25 selection:text-white">
        {/* Interactive 3D Cinematic Particle Canvas & Spotlight */}
        <CinematicBackground />

        {/* Global Navigation Bar */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Dynamic Route Pages with Cinematic Page Transitions */}
        <main className="relative z-10">
          <AnimatedRoutes
            onOpenResume={() => setResumeModalOpen(true)}
            onShowToast={showToast}
          />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Modern macOS Floating Dock */}
        <FloatingDock onOpenResume={() => setResumeModalOpen(true)} />

        {/* Interactive Resume Modal Dialog */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        {/* Global Toast Alert */}
        <Toast toast={toast} onClose={() => setToast(null)} />
      </div>
    </BrowserRouter>
  );
}
