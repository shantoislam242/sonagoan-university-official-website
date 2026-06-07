'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';

interface SUSearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

// Placeholder search overlay. Real search backend (faculty, pages,
// programs) is TODO — when wired up, swap the empty-state body for
// a results list. Modal pattern lifted from source SearchOverlay.tsx.
export default function SUSearchOverlay({ open, onClose }: SUSearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/50 z-[80] transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Search panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-[85] bg-white transition-transform duration-300 ${
          open ? 'translate-y-0 shadow-2xl' : '-translate-y-full pointer-events-none'
        }`}
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-4">
          {/* Input row */}
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
            <Search size={20} className="shrink-0 text-gray-400" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages, faculty, programs…"
              className="flex-1 bg-transparent text-[15px] md:text-base font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Placeholder body */}
          <div className="mt-3 max-h-[70vh] overflow-y-auto py-8 text-center text-sm text-gray-500">
            {!query.trim() ? (
              <>Type a keyword — pages, faculty names, programs…</>
            ) : (
              <>Search backend coming soon. Use the menu above to navigate.</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
