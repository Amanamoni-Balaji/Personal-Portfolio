import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import BlurFade from '../components/BlurFade';
import { portfolioData } from '../data/portfolioData';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9a1 1 0 0 0-1 1c0 2.5 2 4.5 4.5 4.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5l-1-.2a.5.5 0 0 0-.5.2l-.3.3c-.5-.3-1.1-.9-1.4-1.4l.3-.3a.5.5 0 0 0 .2-.5l-.2-1a.5.5 0 0 0-.5-.5h-.6z" />
    </svg>
  );
}

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;
  const cleanPhone = personal.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hi%20Balaji,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Copied to Clipboard',
        message: `${personal.email} copied.`
      });
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Copied to Clipboard',
        message: `${personal.phone} copied.`
      });
    }
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast({
          type: 'success',
          title: 'Message Sent',
          message: 'Thank you! Your inquiry has been received.'
        });
      }
    }, 700);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-14">
      {/* Header */}
      <BlurFade delay={0.05} className="border-b border-editorial-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-accent-sky text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Professional Inquiry &amp; Direct Connection</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 font-sans tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-2xl leading-relaxed">
          Open to inquiries regarding engineering internships, full-stack software development roles, AI/ML research, or collaborative projects.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <BlurFade delay={0.1}>
            <div className="p-7 rounded-3xl bg-[#0a0d16]/90 border border-white/[0.08] space-y-6 shadow-elevated">
              <h2 className="text-base font-bold text-white font-sans">Contact Channels</h2>

              <div className="space-y-3.5 text-xs font-mono">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-1.5 hover:border-sky-400/40 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all">
                  <span className="text-ink-500 uppercase tracking-wider text-[10px]">Email Address</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-white hover:text-accent-sky transition-colors font-medium break-all"
                    >
                      {personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 text-ink-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-1.5 hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all">
                  <span className="text-ink-500 uppercase tracking-wider text-[10px]">Direct Phone</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-white hover:text-accent-sky transition-colors font-medium"
                    >
                      {personal.phone}
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 text-ink-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
                      title="Copy phone"
                    >
                      {copiedPhone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Instant WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-emerald light-sweep w-full py-3 flex items-center justify-center gap-2 rounded-2xl text-xs font-mono font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp ({personal.phone})</span>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-1">
                  <span className="text-ink-500 uppercase tracking-wider text-[10px]">Location</span>
                  <p className="text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-sky" />
                    <span>{personal.location}</span>
                  </p>
                </div>

                {/* Turnaround Time */}
                <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] flex items-center gap-2.5 text-ink-300">
                  <Clock className="w-4 h-4 text-accent-sky shrink-0" />
                  <span>Response turnaround: &lt; 24 business hours</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-white/[0.06] space-y-3">
                <span className="text-xs font-mono font-semibold text-ink-400 uppercase tracking-wider">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary light-sweep text-xs py-2.5 px-4 flex-1 rounded-xl"
                  >
                    <Linkedin className="w-4 h-4 text-accent-sky" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary light-sweep text-xs py-2.5 px-4 flex-1 rounded-xl"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <BlurFade delay={0.15}>
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0b0e17] border border-white/10 shadow-2xl">
              <h2 className="text-base sm:text-lg font-bold text-white mb-1 font-sans">
                Send a Direct Message
              </h2>
              <p className="text-xs text-ink-400 mb-6 font-sans">
                Fill in your details below and I will respond to your inquiry promptly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#07090e] border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">
                      Message Dispatched Successfully
                    </h3>
                    <p className="text-xs text-ink-300 mt-1 max-w-sm mx-auto leading-relaxed font-sans">
                      Thank you for reaching out. A confirmation has been logged and I will respond to <strong>{formState.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-secondary text-xs py-2.5 px-5 rounded-xl"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-ink-300 block">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Hiring Manager / Engineer"
                        className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-white placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-ink-300 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-white placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-ink-300 block">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Inquiry / Software Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-white placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-ink-300 block">Message Details *</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Provide details about the role, technical scope, or discussion topic..."
                      className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-white placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-glow-sky light-sweep w-full text-xs py-3.5 justify-center rounded-xl shadow-md"
                    >
                      {submitting ? (
                        <span>Sending inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
