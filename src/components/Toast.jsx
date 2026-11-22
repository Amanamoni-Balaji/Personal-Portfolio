import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-accent-sky shrink-0" />
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-obsidian-900 border border-editorial-lineLight rounded-xl p-4 shadow-elevated flex items-start gap-3 text-sm text-ink-100"
      >
        {icons[toast.type || 'info']}
        <div className="flex-1">
          {toast.title && (
            <p className="font-semibold text-xs uppercase tracking-wider text-ink-300 font-mono mb-0.5">
              {toast.title}
            </p>
          )}
          <p className="text-xs text-ink-200 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-ink-400 hover:text-white p-1 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
