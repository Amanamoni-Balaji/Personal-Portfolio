import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-5xl font-mono font-bold text-accent-sky">404</span>
        <h1 className="text-2xl font-bold text-ink-50">Page Not Located</h1>
        <p className="text-sm text-ink-400">
          The requested page route does not exist in Amanamoni Balaji's portfolio directory.
        </p>
        <div>
          <Link to="/" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2">
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
