import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-10 md:px-12 md:py-12 border-t border-brand-white/5 bg-brand-black flex flex-col md:flex-row items-center justify-between gap-6 select-none">
      <div className="font-display text-xl tracking-[0.08em] opacity-50 text-brand-white">
        Primordialshots
      </div>
      <div className="text-[0.72rem] text-brand-muted tracking-[0.1em] text-center md:text-left">
        &copy; 2026 Primordialshots. All rights reserved.
      </div>
      <ul className="flex gap-6 list-none">
        <li>
          <a
            href="#"
            className="text-[0.68rem] tracking-[0.18em] uppercase text-brand-muted hover:text-brand-accent transition-colors duration-200"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[0.68rem] tracking-[0.18em] uppercase text-brand-muted hover:text-brand-accent transition-colors duration-200"
          >
            Behance
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[0.68rem] tracking-[0.18em] uppercase text-brand-muted hover:text-brand-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};
