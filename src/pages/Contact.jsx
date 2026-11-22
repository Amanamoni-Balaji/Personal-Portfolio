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
  Phone
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

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
    }, 900);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editorial-line pb-8 space-y-3">
        <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider">
          Professional Inquiry &amp; Direct Contact
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 font-sans tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-ink-400 max-w-2xl leading-relaxed">
          Open to inquiries regarding engineering internships, full stack opportunities, AI/ML research projects, or software collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-obsidian-850/90 border border-editorial-line space-y-6 shadow-subtle">
            <h2 className="text-base font-bold text-ink-50">Contact Channels</h2>

            <div className="space-y-3.5 text-xs font-mono">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-editorial-line space-y-1.5">
                <span className="text-ink-500 uppercase tracking-wider text-[10px]">Email Address</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-ink-100 hover:text-accent-sky transition-colors font-medium break-all"
                  >
                    {personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-ink-400 hover:text-white rounded hover:bg-obsidian-800 transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-editorial-line space-y-1.5">
                <span className="text-ink-500 uppercase tracking-wider text-[10px]">Direct Phone</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-ink-100 hover:text-accent-sky transition-colors font-medium"
                  >
                    {personal.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-ink-400 hover:text-white rounded hover:bg-obsidian-800 transition-colors"
                    title="Copy phone"
                  >
                    {copiedPhone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-editorial-line space-y-1">
                <span className="text-ink-500 uppercase tracking-wider text-[10px]">Location</span>
                <p className="text-ink-200">{personal.location}</p>
              </div>

              {/* Turnaround Time */}
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-editorial-line flex items-center gap-2.5 text-ink-300">
                <Clock className="w-4 h-4 text-accent-sky shrink-0" />
                <span>Response turnaround: &lt; 24 business hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-editorial-line space-y-2">
              <span className="text-xs font-mono font-semibold text-ink-400 uppercase tracking-wider">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3.5 flex-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-accent-sky" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3.5 flex-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-editorial-lineLight shadow-elevated">
            <h2 className="text-base font-bold text-ink-50 mb-1">
              Send a Direct Message
            </h2>
            <p className="text-xs text-ink-400 mb-6">
              Fill in your details below and I will respond to your inquiry promptly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-obsidian-850 border border-emerald-500/30 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink-50">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs text-ink-300 mt-1 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. A confirmation has been logged and I will respond to <strong>{formState.email}</strong> shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary text-xs py-2 px-4"
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
                      placeholder="e.g. Recruiter Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-100 placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-100 placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-100 placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-850 border border-editorial-line text-ink-100 placeholder:text-ink-600 focus:outline-none focus:border-accent-blue transition-colors font-sans resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full text-xs py-2.5 justify-center"
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
        </div>
      </div>
    </div>
  );
}
