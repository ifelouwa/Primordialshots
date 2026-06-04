import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Any Camera Look',
    'Any Style',
    'Any Pose',
    'Any Outfit',
    '100% Remote',
    'World-Class Results',
  ];

  // Double the list to support infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-t border-b border-brand-white/7 py-4 bg-brand-dark-surface select-none">
      <div className="flex w-max animate-marquee gap-12">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-12 font-display text-[0.9rem] tracking-[0.3em] text-brand-muted uppercase"
          >
            <span>{item}</span>
            <span className="text-brand-accent text-xs">&#9632;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
